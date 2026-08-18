<h1 align="center">Better HTTP Toolkit</h1>

<p align="center">
  <strong>A modded, offline-ready build of HTTP Toolkit. 🚀</strong>
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

The project is intended to extend the original application with additional functionality while keeping development straightforward. Changes are made directly where necessary instead of relying on surface-level patches.

Current work includes maintaining an offline-ready build, improving customization, and adding advanced protocol & crypto transformation capabilities.

---

## Features & Improvements ✨

- **⚡ Multi-Layer Deep Transformation Engine**: Automated in-flight decryption, modification, and re-encoding for encrypted payloads (AES-128/192/256 CBC/GCM/CTR/ECB), Protobuf wire streams, URL-encoded forms, and Base64/Hex/Gzip.
- **🎨 Enhanced Theme System**: 4 new built-in theme presets (**Nord Light**, **Sepia Light**, **Midnight Dark**, **Dracula Dark**) + persistent custom theme support with `localStorage` saving.
- **🛡️ 100% Offline-Ready**: Permanently unlocked Pro features without remote server dependencies or account lockouts.
- **🔇 Neutralized Polling**: Stopped background `/get-prices` loop spam and 403 network errors.
- **📦 Pre-bundled Binaries**: Native NAPI binaries (`node-datachannel`, `registry-js`) pre-packaged for seamless Windows execution.

---

## Current Status 🛠️

Fixed the identified startup, theme, and transformation issues:

- **Logout issue:** ✅ Fixed — Neutralized `logOut()` in `AccountStore` to prevent accidental account lockout.
- **Launch issues:** ✅ Fixed — Dynamic CORS resolution in the local server and automatic `waitForServerReady` polling.
- **Theme issues:** ✅ Fixed — Fixed custom theme persistence and added 4 new presets.
- **Transformation engine:** ✅ Built — Full support for multi-layer automatic request/response body mutation.

---

## Build & Run 💻

### Building
```bash
cd app
npm run build:electron
```

### Running
```powershell
cd app\dist\win-unpacked
.\'HTTP Toolkit.exe'
```

---

## Roadmap 📋

| Area | Planned Work |
|---|---|
| **Frida** | Updated scripts and improved script management 💉 |
| **Android Agent** | Compatibility and reliability improvements for modern Android 🤖 |
| **Modify Rules** | Additional multi-protocol transcoders and schema generators ⚙️ |
| **Performance** | Startup time, memory optimization, and tree-shaking ⚡ |

---

## Contributing 🤝

Pull requests are welcome.

Small, self-contained changes are preferred. If you're planning a larger change, open an issue first so it can be discussed.

Areas that need work include:

- Frida
- Android agent
- Electron
- Performance
- Documentation
- General bug fixes

---

## Disclaimer ⚠️

This is an unofficial modification of HTTP Toolkit and is not affiliated with or endorsed by the original project.
