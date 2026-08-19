const fs = require('fs');
const path = require('path');
const vm = require('vm');

console.log('--- Applying Fixes: ADB restorecon, Sentry 403, and EventEmitter Warning ---');

// 1. Patch InstallCommand in bundle/index.js for Android restorecon / INSTALL_FAILED_MEDIA_UNAVAILABLE
const bundlePath = 'app/httptoolkit-server/bundle/index.js';
let bundleStr = fs.readFileSync(bundlePath, 'utf8');

const targetPmInstall = 'execute(e){return this._send(`shell:pm install -r ${this._escapeCompat(e)}`)';
const fixedPmInstall = 'execute(e){return this._send(`shell:restorecon -F -R /data/local/tmp 2>/dev/null; pm install -r -d -t -g --user 0 ${this._escapeCompat(e)} || pm install -r -d -t -g ${this._escapeCompat(e)} || pm install -r ${this._escapeCompat(e)}`)';

if (bundleStr.includes(targetPmInstall)) {
    bundleStr = bundleStr.replace(targetPmInstall, fixedPmInstall);
    console.log('Patched InstallCommand with restorecon & multi-flag fallback in bundle/index.js');
}

// Also in AndroidAdbInterceptor activate
const targetAdbInstall = 'r=new ur.DeviceClient(this.adbClient,A.deviceId)';
const replaceAdbInstall = 'r=new ur.DeviceClient(this.adbClient,A.deviceId);try{r.shell(["restorecon","-F","-R","/data/local/tmp"])}catch(e){}';
if (bundleStr.includes(targetAdbInstall) && !bundleStr.includes('restorecon')) {
    bundleStr = bundleStr.replace(targetAdbInstall, replaceAdbInstall);
    console.log('Added restorecon execution prior to APK push in bundle/index.js');
}

try {
    new vm.Script(bundleStr);
    fs.writeFileSync(bundlePath, bundleStr, 'utf8');
    console.log('✅ bundle/index.js successfully patched & syntax validated');
} catch (err) {
    console.error('❌ Syntax error in bundle/index.js:', err.message);
}

// 2. Disable Sentry error reporting 403s in UI files
function patchSentry(filePath) {
    let s = fs.readFileSync(filePath, 'utf8');
    const sentryTarget = '"https://548601eca36246bdac73dc086d231db1@errors.httptoolkit.tech/o202389/1316304"';
    if (s.includes(sentryTarget)) {
        s = s.replace(sentryTarget, '""');
        console.log('Disabled Sentry telemetry in:', filePath);
    }
    
    // Also disable events.httptoolkit.tech
    const eventsTarget = '"https://events.httptoolkit.tech"';
    if (s.includes(eventsTarget)) {
        s = s.replace(eventsTarget, '""');
        console.log('Disabled Events telemetry in:', filePath);
    }

    try {
        new vm.Script(s);
        fs.writeFileSync(filePath, s, 'utf8');
        console.log('✅ Sentry disabled & validated in:', filePath);
    } catch (e) {
        console.error('❌ Syntax error in:', filePath, e.message);
    }
}

patchSentry(path.resolve('ui/main.js'));
patchSentry(path.resolve('app/httptoolkit-server/ui/main.js'));

// 3. Patch MaxListeners warning in mockttp.js
function patchMaxListeners(filePath) {
    let s = fs.readFileSync(filePath, 'utf8');
    const target = 'this._eventsCount=0';
    if (s.includes(target) && !s.includes('this._maxListeners=0')) {
        s = s.replace(target, 'this._eventsCount=0,this._maxListeners=0');
        try {
            new vm.Script(s);
            fs.writeFileSync(filePath, s, 'utf8');
            console.log('✅ MaxListeners silenced in:', filePath);
        } catch (e) {
            console.error('❌ Error in:', filePath, e.message);
        }
    }
}

patchMaxListeners(path.resolve('ui/mockttp.js'));
patchMaxListeners(path.resolve('app/httptoolkit-server/ui/mockttp.js'));
