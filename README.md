<h1 align="center">Better HTTP Toolkit</h1>

<p align="center">
  <strong>A modded, offline-ready build of HTTP Toolkit.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/platform-Windows-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Windows">
  <a href="https://www.electronjs.org/">
    <img src="https://img.shields.io/badge/Electron-Latest-47848F?style=for-the-badge&logo=electron&logoColor=white" alt="Electron">
  </a>
  <img src="https://img.shields.io/badge/status-active-22C55E?style=for-the-badge" alt="Status">
</p>

---

## Overview

This repository contains a modified, offline-ready build of HTTP Toolkit.

The project extends the original application with additional offline functionality and advanced in-flight request/response body transformations.

---

## Features & Improvements

* **Multi-Layer Deep Transformation Engine**: In-flight decryption, modification, and re-encoding for encrypted/encoded payloads (supporting AES-128/256 CBC/GCM, Protobuf wire streams, URL-encoded forms, Base64, Hex, and Gzip).
* **Theme System**: Persisted theme configurations via localStorage (Nord Light, Sepia Light, Midnight Dark, and Dracula Dark presets).
* **Offline-Ready**: Locally bypasses billing and authentication servers, automatically enabling Pro features offline.
* **Telemetry Neutralized**: Blocked Sentry error reporting and PostHog tracking loops to prevent network request warnings and errors.
* **Pre-bundled Dependencies**: Packages pre-built native binaries (`node-datachannel`, `registry-js`) to ensure reliable local execution on Windows.

---

## Build & Run

### Building
```bash
cd app
npm install
npm run build:electron
```

### Running
```powershell
cd app\dist\win-unpacked
.\"HTTP Toolkit.exe"
```

---

## Roadmap

| Area | Planned Work |
|---|---|
| **Frida** | Updated scripts and improved script management |
| **Android Agent** | Compatibility and reliability improvements for modern Android |
| **Modify Rules** | Additional multi-protocol transcoders and schema generators |
| **Performance** | Startup time, memory optimization, and tree-shaking |

---

## Contributing

Pull requests are welcome.

Small, self-contained changes are preferred. If you are planning a larger change, open an issue first so it can be discussed.

Areas that need work include:

- Frida
- Android agent
- Electron
- Performance
- Documentation
- General bug fixes

---

## Disclaimer

This is an unofficial modification of HTTP Toolkit and is not affiliated with or endorsed by the original project.
