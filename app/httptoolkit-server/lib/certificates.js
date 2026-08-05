"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCertificateFingerprint = exports.getCertificateSubjectHash = exports.getTimeToCertExpiry = exports.getCertExpiry = exports.parseCert = void 0;
const tslib_1 = require("tslib");
const crypto = tslib_1.__importStar(require("crypto"));
const forge = tslib_1.__importStar(require("node-forge"));
exports.parseCert = forge.pki.certificateFromPem;
function getCertExpiry(cert) {
    return cert.validity.notAfter.valueOf();
}
exports.getCertExpiry = getCertExpiry;
function getTimeToCertExpiry(cert) {
    return getCertExpiry(cert) - Date.now();
}
exports.getTimeToCertExpiry = getTimeToCertExpiry;
// A series of magic incantations that matches the behaviour of openssl's
// -subject_hash_old output, as expected by Android's cert store.
function getCertificateSubjectHash(cert) {
    const derBytes = forge.asn1.toDer(forge.pki.distinguishedNameToAsn1(cert.subject)).getBytes();
    return crypto.createHash('md5')
        .update(derBytes)
        .digest()
        .readUInt32LE(0)
        .toString(16)
        .padStart(8, '0');
}
exports.getCertificateSubjectHash = getCertificateSubjectHash;
// Get a full SHA1 hash of the certificate
function getCertificateFingerprint(cert) {
    return forge.md.sha1.create()
        .update(forge.asn1.toDer(forge.pki.certificateToAsn1(cert)).getBytes())
        .digest()
        .toHex();
}
exports.getCertificateFingerprint = getCertificateFingerprint;
//# sourceMappingURL=certificates.js.map