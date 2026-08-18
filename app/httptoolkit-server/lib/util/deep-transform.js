"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deepTransform = exports.ProtobufCodec = exports.CryptoCodec = exports.EncodingCodec = void 0;

const crypto = require("crypto");
const zlib = require("zlib");

/**
 * Lightweight raw wire Protobuf parser and serializer
 */
class ProtobufCodec {
    static decodeVarint(buffer, offset = 0) {
        let res = 0n;
        let shift = 0n;
        let bytesRead = 0;
        while (offset + bytesRead < buffer.length) {
            const b = buffer[offset + bytesRead];
            bytesRead++;
            res |= BigInt(b & 0x7f) << shift;
            shift += 7n;
            if (!(b & 0x80)) break;
        }
        return { value: res <= BigInt(Number.MAX_SAFE_INTEGER) ? Number(res) : res.toString(), bytesRead };
    }

    static encodeVarint(val) {
        let v = BigInt(val);
        const bytes = [];
        while (v >= 0x80n) {
            bytes.push(Number((v & 0x7fn) | 0x80n));
            v >>= 7n;
        }
        bytes.push(Number(v & 0x7fn));
        return Buffer.from(bytes);
    }

    static isValidUtf8String(buf) {
        try {
            const str = buf.toString('utf8');
            // Check if string contains only printable ASCII or common Unicode text
            return !/[\x00-\x08\x0B\x0C\x0E-\x1F]/.test(str);
        } catch {
            return false;
        }
    }

    static decode(buffer, forceMessage = false) {
        if (!Buffer.isBuffer(buffer)) buffer = Buffer.from(buffer);
        const fields = {};
        let offset = 0;

        while (offset < buffer.length) {
            const { value: tagVal, bytesRead: tagBytes } = this.decodeVarint(buffer, offset);
            if (tagBytes === 0) break;
            offset += tagBytes;
            const tagNum = Number(tagVal) >> 3;
            const wireType = Number(tagVal) & 0x07;

            if (tagNum === 0) break;

            let fieldVal;
            if (wireType === 0) { // Varint
                const { value, bytesRead } = this.decodeVarint(buffer, offset);
                offset += bytesRead;
                fieldVal = { wireType: 0, value };
            } else if (wireType === 1) { // 64-bit
                fieldVal = { wireType: 1, value: buffer.slice(offset, offset + 8).toString('hex') };
                offset += 8;
            } else if (wireType === 2) { // Length-delimited
                const { value: len, bytesRead } = this.decodeVarint(buffer, offset);
                offset += bytesRead;
                const length = Number(len);
                if (offset + length > buffer.length) break;
                const subBuf = buffer.slice(offset, offset + length);
                offset += length;

                if (forceMessage) {
                    try {
                        const sub = this.decode(subBuf);
                        fieldVal = { wireType: 2, isMessage: true, value: sub };
                    } catch {
                        fieldVal = { wireType: 2, isString: true, value: subBuf.toString('utf8') };
                    }
                } else if (this.isValidUtf8String(subBuf)) {
                    fieldVal = { wireType: 2, isString: true, value: subBuf.toString('utf8') };
                } else {
                    // Try parsing as embedded submessage
                    let parsedSub = null;
                    try {
                        const sub = this.decode(subBuf);
                        if (Object.keys(sub).length > 0) parsedSub = sub;
                    } catch {
                        parsedSub = null;
                    }

                    if (parsedSub) {
                        fieldVal = { wireType: 2, isMessage: true, value: parsedSub };
                    } else {
                        fieldVal = { wireType: 2, isBytes: true, value: subBuf.toString('base64') };
                    }
                }
            } else if (wireType === 5) { // 32-bit
                fieldVal = { wireType: 5, value: buffer.readInt32LE(offset) };
                offset += 4;
            } else {
                break;
            }

            if (!fields[tagNum]) {
                fields[tagNum] = fieldVal;
            } else {
                if (!Array.isArray(fields[tagNum])) {
                    fields[tagNum] = [fields[tagNum]];
                }
                fields[tagNum].push(fieldVal);
            }
        }
        return fields;
    }

    static encode(fields) {
        const chunks = [];
        for (const [tagStr, fieldOrArray] of Object.entries(fields)) {
            const tagNum = parseInt(tagStr, 10);
            const items = Array.isArray(fieldOrArray) ? fieldOrArray : [fieldOrArray];

            for (const item of items) {
                const wireType = item.wireType ?? 2;
                const tagHeader = this.encodeVarint((tagNum << 3) | wireType);
                chunks.push(tagHeader);

                if (wireType === 0) {
                    chunks.push(this.encodeVarint(item.value));
                } else if (wireType === 1) {
                    chunks.push(Buffer.from(item.value, 'hex'));
                } else if (wireType === 2) {
                    let subBuf;
                    if (item.isMessage && typeof item.value === 'object') {
                        subBuf = this.encode(item.value);
                    } else if (item.isString || typeof item.value === 'string') {
                        subBuf = Buffer.from(item.value, 'utf8');
                    } else if (Buffer.isBuffer(item.value)) {
                        subBuf = item.value;
                    } else {
                        subBuf = Buffer.from(item.value, 'base64');
                    }
                    chunks.push(this.encodeVarint(subBuf.length));
                    chunks.push(subBuf);
                } else if (wireType === 5) {
                    const b = Buffer.alloc(4);
                    b.writeInt32LE(item.value);
                    chunks.push(b);
                }
            }
        }
        return Buffer.concat(chunks);
    }
}
exports.ProtobufCodec = ProtobufCodec;

/**
 * Universal Crypto Decrypt / Re-Encrypt Codec
 */
class CryptoCodec {
    static decrypt(data, { algorithm = 'aes-256-cbc', key, iv, authTag }) {
        const keyBuf = typeof key === 'string' ? Buffer.from(key, key.length === 64 ? 'hex' : 'utf8') : key;
        const ivBuf = iv ? (typeof iv === 'string' ? Buffer.from(iv, iv.length === 32 ? 'hex' : 'utf8') : iv) : Buffer.alloc(0);
        const dataBuf = Buffer.isBuffer(data) ? data : Buffer.from(data, 'base64');

        const decipher = crypto.createDecipheriv(algorithm, keyBuf, ivBuf);
        if (authTag && decipher.setAuthTag) {
            const tagBuf = typeof authTag === 'string' ? Buffer.from(authTag, 'hex') : authTag;
            decipher.setAuthTag(tagBuf);
        }

        const decrypted = Buffer.concat([decipher.update(dataBuf), decipher.final()]);
        return decrypted;
    }

    static encrypt(data, { algorithm = 'aes-256-cbc', key, iv }) {
        const keyBuf = typeof key === 'string' ? Buffer.from(key, key.length === 64 ? 'hex' : 'utf8') : key;
        const ivBuf = iv ? (typeof iv === 'string' ? Buffer.from(iv, iv.length === 32 ? 'hex' : 'utf8') : iv) : Buffer.alloc(0);
        const dataBuf = Buffer.isBuffer(data) ? data : Buffer.from(data, 'utf8');

        const cipher = crypto.createCipheriv(algorithm, keyBuf, ivBuf);
        const encrypted = Buffer.concat([cipher.update(dataBuf), cipher.final()]);
        let authTag;
        if (algorithm.toLowerCase().includes('gcm') || algorithm.toLowerCase().includes('ccm')) {
            try {
                authTag = cipher.getAuthTag().toString('hex');
            } catch {}
        }

        return { encrypted, authTag };
    }
}
exports.CryptoCodec = CryptoCodec;

/**
 * Encoding Codecs
 */
class EncodingCodec {
    static decodeUrl(str) {
        const params = new URLSearchParams(str);
        const res = {};
        for (const [k, v] of params.entries()) {
            res[k] = v;
        }
        return res;
    }

    static encodeUrl(obj) {
        const params = new URLSearchParams();
        for (const [k, v] of Object.entries(obj)) {
            params.set(k, typeof v === 'object' ? JSON.stringify(v) : String(v));
        }
        return params.toString();
    }
}
exports.EncodingCodec = EncodingCodec;

/**
 * Nested Multi-Layer Transformation Pipeline
 */
async function deepTransform(inputBuffer, spec) {
    if (!spec || !spec.pipeline) return inputBuffer;

    let current = inputBuffer;
    const history = [];

    // Phase 1: Unpack / Decrypt layers
    for (const step of spec.pipeline) {
        const type = typeof step === 'string' ? step : step.type;
        history.push({ step, type });

        if (type === 'base64') {
            current = Buffer.from(current.toString('utf8'), 'base64');
        } else if (type === 'hex') {
            current = Buffer.from(current.toString('utf8'), 'hex');
        } else if (type === 'url' || type === 'form') {
            current = EncodingCodec.decodeUrl(current.toString('utf8'));
        } else if (type === 'json') {
            current = typeof current === 'string' ? JSON.parse(current) : JSON.parse(current.toString('utf8'));
        } else if (type === 'protobuf') {
            current = ProtobufCodec.decode(current);
        } else if (type === 'aes' || type === 'crypto') {
            current = CryptoCodec.decrypt(current, step);
        } else if (type === 'gzip') {
            current = zlib.gunzipSync(current);
        }
    }

    // Phase 2: Mutation
    if (typeof spec.mutate === 'function') {
        current = spec.mutate(current);
    } else if (spec.mutate && typeof spec.mutate === 'object') {
        if (typeof current === 'object' && !Buffer.isBuffer(current)) {
            for (const [path, val] of Object.entries(spec.mutate)) {
                const parts = path.split('.');
                let target = current;
                for (let i = 0; i < parts.length - 1; i++) {
                    if (!target[parts[i]]) target[parts[i]] = {};
                    target = target[parts[i]];
                }
                target[parts[parts.length - 1]] = val;
            }
        }
    }

    // Phase 3: Re-encode / Re-encrypt in reverse order
    for (let i = history.length - 1; i >= 0; i--) {
        const { step, type } = history[i];

        if (type === 'json') {
            current = Buffer.from(JSON.stringify(current), 'utf8');
        } else if (type === 'protobuf') {
            current = ProtobufCodec.encode(current);
        } else if (type === 'url' || type === 'form') {
            current = Buffer.from(EncodingCodec.encodeUrl(current), 'utf8');
        } else if (type === 'aes' || type === 'crypto') {
            const { encrypted } = CryptoCodec.encrypt(current, step);
            current = encrypted;
        } else if (type === 'base64') {
            current = Buffer.from(current.toString('base64'), 'utf8');
        } else if (type === 'hex') {
            current = Buffer.from(current.toString('hex'), 'utf8');
        } else if (type === 'gzip') {
            current = zlib.gzipSync(current);
        }
    }

    return Buffer.isBuffer(current) ? current : Buffer.from(current);
}
exports.deepTransform = deepTransform;
