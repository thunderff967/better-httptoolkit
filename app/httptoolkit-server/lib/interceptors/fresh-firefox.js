"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreshFirefoxNightly = exports.FreshFirefoxDeveloper = exports.FreshFirefox = exports.NSS_DIR = void 0;
const tslib_1 = require("tslib");
const lodash_1 = tslib_1.__importDefault(require("lodash"));
const path = tslib_1.__importStar(require("path"));
const util_1 = require("@httptoolkit/util");
const constants_1 = require("../constants");
const error_tracking_1 = require("../error-tracking");
const snap_1 = require("../util/snap");
const browsers_1 = require("../browsers");
const fs_1 = require("../util/fs");
const process_management_1 = require("../util/process-management");
const message_server_1 = require("../message-server");
const cert_check_server_1 = require("../cert-check-server");
const FIREFOX_PREF_REGEX = /\w+_pref\("([^"]+)", (.*)\);/;
let profileSetupBrowser;
exports.NSS_DIR = path.join(constants_1.APP_ROOT, 'nss');
const testCertutil = (command, options) => {
    return (0, process_management_1.spawnToResult)(command, ['-h'], options)
        .then((output) => output.exitCode === 1 &&
        output.stderr.includes("Utility to manipulate NSS certificate databases"))
        .catch((e) => {
        if (!(0, util_1.isErrorLike)(e) || e.code !== 'ENOENT') {
            console.log(`Failed to run ${command}`);
            console.log(e);
        }
        return false;
    });
};
const getCertutilCommand = lodash_1.default.memoize(async () => {
    // If a working certutil is available in our path, we're all good
    if (await testCertutil('certutil'))
        return { command: 'certutil' };
    // If not, try to use the relevant bundled version
    const bundledCertUtil = path.join(exports.NSS_DIR, process.platform, 'certutil');
    if (process.platform !== 'linux') {
        if (await testCertutil(bundledCertUtil)) {
            return { command: bundledCertUtil };
        }
        else {
            throw new Error("No certutil available");
        }
    }
    const certutilEnv = {
        ...process.env,
        // The linux bundle includes most required libs, but we need to make sure it's
        // in the search path so they get used, in case they're not installed elsewhere.
        LD_LIBRARY_PATH: process.env.LD_LIBRARY_PATH
            ? `${path.join(exports.NSS_DIR, process.platform)}:${process.env.LD_LIBRARY_PATH}`
            : path.join(exports.NSS_DIR, process.platform)
    };
    if (await testCertutil(bundledCertUtil, { env: certutilEnv })) {
        return { command: bundledCertUtil, options: { env: certutilEnv } };
    }
    else {
        throw new Error("No certutil available");
    }
});
class Firefox {
    constructor(config, variantName, pathName = variantName + '-profile') {
        this.config = config;
        this.variantName = variantName;
        this.pathName = pathName;
        this.activeBrowsers = {};
    }
    isActive(proxyPort) {
        const browser = this.activeBrowsers[proxyPort];
        return !!browser && !!browser.pid;
    }
    async isActivable() {
        const firefoxBrowser = await (0, browsers_1.getBrowserDetails)(this.config.configPath, this.variantName);
        return !!firefoxBrowser && // Must have Firefox installed
            parseInt(firefoxBrowser.version.split('.')[0], 0) >= 58 && // Must use cert9.db
            await getCertutilCommand().then(() => true).catch(() => false); // Must have certutil available
    }
    async startFirefox(profilePath, initialServer, proxyPort, existingPrefs = {}) {
        const initialUrl = initialServer.url;
        const browser = await (0, browsers_1.launchBrowser)(initialUrl, {
            browser: this.variantName,
            profile: profilePath,
            proxy: proxyPort ? `127.0.0.1:${proxyPort}` : undefined,
            prefs: lodash_1.default.assign(existingPrefs, proxyPort ? {
                // By default browser-launcher only configures HTTP, so we need to add HTTPS:
                'network.proxy.ssl': '"127.0.0.1"',
                'network.proxy.ssl_port': proxyPort,
                // The above browser-launcher proxy settings should do this, but don't seem to
                // reliably overwrite existing values, so we set them explicitly.
                'network.proxy.http': '"127.0.0.1"',
                'network.proxy.http_port': proxyPort,
                // Don't intercept our cert testing requests
                'network.proxy.no_proxies_on': "\"" + initialServer.host + "\"",
                'network.proxy.http.no_proxies_on': "\"" + initialServer.host + "\"",
                // Send localhost reqs via the proxy too
                'network.proxy.allow_hijacking_localhost': true,
            } : {}, {
                // Disable the noisy captive portal check requests
                'network.captive-portal-service.enabled': false,
                // Disable telemetry requests
                'app.shield.optoutstudies.enabled': false,
                'datareporting.healthreport.uploadEnabled': false,
                'datareporting.usage.uploadEnabled': false,
                // Disable sponsors
                'browser.newtabpage.activity-stream.showSponsoredCheckboxes': false,
                'browser.newtabpage.activity-stream.showSponsoredTopSites': false,
                // Disable some annoying tip messages
                'browser.chrome.toolbar_tips': false,
                // Ignore available updates:
                "app.update.auto": false,
                "browser.startup.homepage_override.mstone": "\"ignore\"",
                // Disable exit warnings:
                "browser.showQuitWarning": false,
                "browser.tabs.warnOnClose": false,
                "browser.tabs.warnOnCloseOtherTabs": false,
                // Disable various first-run things:
                "browser.uitour.enabled": false,
                'browser.usedOnWindows10': true,
                "browser.usedOnWindows10.introURL": "\"\"",
                'datareporting.healthreport.service.firstRun': false,
                'toolkit.telemetry.reportingpolicy.firstRun': false,
                'browser.reader.detectedFirstArticle': false,
                "datareporting.policy.dataSubmissionEnabled": false,
                "datareporting.policy.dataSubmissionPolicyAccepted": false,
                "datareporting.policy.dataSubmissionPolicyBypassNotification": true,
                "trailhead.firstrun.didSeeAboutWelcome": true,
                // Refresh all state on shutdown:
                "privacy.history.custom": true,
                "privacy.sanitize.sanitizeOnShutdown": true,
                "privacy.clearOnShutdown.cache": true,
                "privacy.clearOnShutdown.cookies": true,
                "privacy.clearOnShutdown.downloads": true,
                "privacy.clearOnShutdown.formdata": true,
                "privacy.clearOnShutdown.history": true,
                "privacy.clearOnShutdown.offlineApps": true,
                "privacy.clearOnShutdown.sessions": true,
                "privacy.clearOnShutdown.siteSettings": true,
                // Must be false, or 1st startup 2nd start opens a blank page, not the target URL:
                "privacy.clearOnShutdown.openWindows": false
            })
        }, this.config.configPath);
        console.log('Firefox started');
        if (browser.process.stdout)
            browser.process.stdout.pipe(process.stdout);
        if (browser.process.stderr)
            browser.process.stderr.pipe(process.stderr);
        const normalStop = browser.stop.bind(browser);
        browser.stop = async function () {
            if (process.platform === "win32") {
                // Firefox spawns a child process on Windows, and doesn't let us kill it at all.
                // To fix this, we kill all firefox instances that were started with this exact same URL.
                await (0, process_management_1.windowsKillByCliMatch)(`*firefox.exe*${initialUrl}`).catch(console.log);
            }
            else {
                normalStop();
            }
        };
        return browser;
    }
    // Create the profile. We need to run FF to do its setup, then close it & edit more ourselves.
    async setupFirefoxProfile(profilePath) {
        const messageServer = new message_server_1.MessageServer(this.config, `HTTP Toolkit is preparing a Firefox profile, please wait...`);
        await messageServer.start();
        let messageShown = messageServer.waitForSuccess().catch(error_tracking_1.logError);
        profileSetupBrowser = await this.startFirefox(profilePath, messageServer);
        profileSetupBrowser.process.once('close', (exitCode) => {
            console.log("Profile setup Firefox closed");
            messageServer.stop();
            profileSetupBrowser = undefined;
            if (messageShown !== true) {
                (0, error_tracking_1.logError)(`Firefox profile setup failed with code ${exitCode}`);
                (0, fs_1.deleteFolder)(profilePath).catch(console.warn);
            }
        });
        await messageShown;
        messageShown = true;
        await (0, util_1.delay)(200); // Tiny delay, so firefox can do initial setup tasks
        // Tell firefox to shutdown, and wait until it does.
        profileSetupBrowser.stop();
        await new Promise((resolve) => {
            if (!profileSetupBrowser)
                return resolve();
            else
                profileSetupBrowser.process.once('close', resolve);
        });
        // Once firefox has shut, rewrite the certificate database of the newly created profile:
        const certutil = await getCertutilCommand();
        const certUtilResult = await (0, process_management_1.spawnToResult)(certutil.command, [
            '-A',
            '-d', `sql:${profilePath}`,
            '-t', 'C,,',
            '-i', this.config.https.certPath,
            '-n', 'HTTP Toolkit'
        ], certutil.options || {});
        if (certUtilResult.exitCode !== 0) {
            console.log(certUtilResult.stdout);
            console.log(certUtilResult.stderr);
            throw new Error(`Certutil firefox profile setup failed with code ${certUtilResult.exitCode}`);
        }
    }
    async activate(proxyPort) {
        if (this.isActive(proxyPort) || !!profileSetupBrowser)
            return;
        const browserDetails = await (0, browsers_1.getBrowserDetails)(this.config.configPath, this.variantName);
        if (!browserDetails)
            throw new Error('Firefox could not be detected');
        const profilePath = await (0, snap_1.isSnap)(browserDetails.command)
            ? path.join(await (0, snap_1.getSnapConfigPath)(this.variantName), 'profile')
            : path.join(this.config.configPath, this.pathName);
        const firefoxPrefsFile = path.join(profilePath, 'prefs.js');
        let existingPrefs = {};
        if (!await (0, fs_1.canAccess)(firefoxPrefsFile)) {
            /*
            First time, we do a separate pre-usage startup & stop, without the proxy, for certificate setup.
            This helps avoid initial Firefox profile setup request noise, and tidies up some awkward UX where
            firefox likes to open extra welcome windows/tabs on first run.
            */
            await this.setupFirefoxProfile(profilePath);
        }
        // We need to preserve & reuse any existing preferences, to avoid issues
        // where on pref setup firefox behaves badly (opening a 2nd window) on OSX.
        const prefContents = await (0, fs_1.readFile)(firefoxPrefsFile, {
            encoding: 'utf8'
        }).catch(() => '');
        existingPrefs = (0, lodash_1.default)(prefContents)
            .split('\n')
            .reduce((prefs, line) => {
            const match = FIREFOX_PREF_REGEX.exec(line);
            if (match) {
                prefs[match[1]] = match[2];
            }
            return prefs;
        }, {});
        const certCheckServer = new cert_check_server_1.CertCheckServer(this.config);
        await certCheckServer.start("https://amiusing.httptoolkit.tech");
        const browser = await this.startFirefox(profilePath, certCheckServer, proxyPort, existingPrefs);
        let certCheckSuccessful;
        certCheckServer.waitForSuccess().then(() => {
            certCheckSuccessful = true;
        }).catch((e) => {
            certCheckSuccessful = false;
            (0, error_tracking_1.logError)(e);
        });
        this.activeBrowsers[proxyPort] = browser;
        browser.process.once('close', async (exitCode) => {
            console.log('Firefox closed');
            delete this.activeBrowsers[proxyPort];
            // It seems maybe this can happen when firefox is just updated - it starts and
            // closes immediately, but loses some settings along the way. In that case, the 2nd
            // run will still try to load the cert check server. Keep it up for a sec so
            // that users get a clean error in this case.
            await (0, util_1.delay)(2000);
            certCheckServer.stop();
            if (!certCheckSuccessful) {
                (0, error_tracking_1.logError)(`Firefox certificate check ${certCheckSuccessful === false
                    ? "failed"
                    : "did not complete"} with FF exit code ${exitCode}`);
                (0, fs_1.deleteFolder)(profilePath).catch(console.warn);
            }
        });
        // Wait until the cert check works before reporting success to the UI
        await certCheckServer.waitForSuccess();
    }
    async deactivate(proxyPort) {
        if (this.isActive(proxyPort)) {
            const browser = this.activeBrowsers[proxyPort];
            const closePromise = new Promise((resolve) => browser.process.once('close', resolve));
            await Promise.all([
                browser.stop(),
                closePromise
            ]);
        }
    }
    async deactivateAll() {
        await Promise.all(Object.keys(this.activeBrowsers).map((proxyPort) => this.deactivate(proxyPort)));
        if (profileSetupBrowser) {
            await profileSetupBrowser.stop(); // As above - on Windows this is async
            return new Promise((resolve) => profileSetupBrowser.process.once('close', resolve));
        }
    }
}
;
class FreshFirefox extends Firefox {
    constructor(config) {
        super(config, 'firefox');
        this.id = 'fresh-firefox';
        this.version = '1.2.0';
    }
}
exports.FreshFirefox = FreshFirefox;
;
class FreshFirefoxDeveloper extends Firefox {
    constructor(config) {
        super(config, 'firefox-developer');
        this.id = 'fresh-firefox-dev';
        this.version = '1.2.0';
    }
}
exports.FreshFirefoxDeveloper = FreshFirefoxDeveloper;
;
class FreshFirefoxNightly extends Firefox {
    constructor(config) {
        super(config, 'firefox-nightly');
        this.id = 'fresh-firefox-nightly';
        this.version = '1.2.0';
    }
}
exports.FreshFirefoxNightly = FreshFirefoxNightly;
;
//# sourceMappingURL=fresh-firefox.js.map