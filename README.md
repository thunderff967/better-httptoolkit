# Better HTTP Toolkit

A modified, offline-ready version of HTTP Toolkit.

## Overview

This repository contains modifications to HTTP Toolkit designed to enable offline use, bypass remote licensing constraints, and extend intercept capabilities with deep-transform options. All changes are applied directly to the codebase.

## Key Modifications

* **Offline Capabilities**:
  * Bypasses remote billing and authentication servers, automatically enabling Pro features locally.
  * Neutralized background `/get-prices` polling loops.
  * Telemetry reporting endpoints (PostHog and Sentry) are disabled.
* **Offline Android Interception**:
  * Bundles the Android client APK (`httptoolkit-v1.6.0.apk`) locally inside the build.
  * Rewritten APK delivery logic to use local assets rather than fetching from GitHub or CDNs.
  * Patched ADB/Frida client commands to prevent connection crashes and ensure reliable certificate injection.
* **Deep Transformation Engine**:
  * Added in-flight request and response body manipulation supporting nesting and layers.
  * Supported formats: AES-128/256 (CBC, GCM, CTR, ECB), Protobuf wire streams, URL-encoded forms, Base64, Hex, and Gzip.
  * Configurable declaratively via the JSON rule editor in the user interface.
* **Theme System**:
  * Added Nord Light, Sepia Light, Midnight Dark, and Dracula Dark presets.
  * Theme selection is persisted locally via localStorage.
* **Dependency Bundling**:
  * Bundles pre-built native binaries (`node-datachannel` and `registry-js`) to support direct Windows compilation.

## Build and Run

### Prerequisites

* Node.js (v24 recommended)
* npm

### Building

```bash
cd app
npm install
npm run build:electron
```

### Running

The built binary will be available in the `app/dist/win-unpacked/` directory.

```powershell
cd app/dist/win-unpacked
./"HTTP Toolkit.exe"
```

## Contributing

Pull requests are welcome. Please keep changes self-contained and focused on bug fixes or core enhancements to the proxy, Frida scripts, or UI compatibility.

## Disclaimer

This is an unofficial modification of HTTP Toolkit. It is not affiliated with, maintained by, or endorsed by the official HTTP Toolkit project or its developers.
