<h1 align="center">Better HTTP Toolkit — Desktop App 🖥️</h1>

<p align="center">
  <strong>Electron desktop wrapper, launcher, and packaging pipeline for Better HTTP Toolkit.</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/platform-Windows-0078D4?style=for-the-badge&logo=windows&logoColor=white" alt="Windows">
  <a href="https://www.electronjs.org/">
    <img src="https://img.shields.io/badge/Electron-Latest-47848F?style=for-the-badge&logo=electron&logoColor=white" alt="Electron">
  </a>
  <img src="https://img.shields.io/badge/status-active-22C55E?style=for-the-badge" alt="Status">
</p>

---

## Overview 📖

This directory (`/app`) contains the desktop shell that orchestrates the entire application lifecycle:
1. **Server Lifecycle Management**: Automatically launches the bundled local `httptoolkit-server` in the background with isolated environment flags (`HTTPTOOLKIT_SERVER_REDIRECTED=1`).
2. **Dynamic Port Discovery & Ready Polling**: Monitors server startup via automated `waitForServerReady` polling to prevent race conditions during UI initialization.
3. **Renderer Bridge**: Exposes native APIs safely via `src/preload.cts` context bridge.
4. **Native Binary Integration**: Bundles and unpacks prebuilt NAPI modules (`registry-js`, `node-datachannel`) into `app.asar.unpacked` for frictionless offline execution.

---

## Directory Structure 📁

```
app/
├── build-setup/
│   ├── build.cjs                       # Build orchestration & post-packaging hooks
│   └── electron-builder.config.cjs     # Electron-Builder configuration
├── httptoolkit-server/                 # Bundled local server & UI runtime
├── src/
│   ├── index.ts                        # Electron main process & server supervisor
│   └── preload.cts                     # Preload bridge exposing desktopApi
├── dist/                               # Generated distribution artifacts
│   ├── win-unpacked/                   # Standalone unpacked folder with 'HTTP Toolkit.exe'
│   └── HTTP-Toolkit-1.26.1.exe         # Windows NSIS installer
├── package.json                        # Scripts and dependencies
└── tsconfig.json                       # TypeScript compiler options
```

---

## Scripts & Building ⚙️

| Command | Description |
|---|---|
| `npm run build` | Compiles TypeScript source (`src/` ➔ `dist/`) 🔨 |
| `npm run build:electron` | Full production build (compiles TS + packages standalone unpacked & NSIS installer) 📦 |
| `npm start` | Launches development Electron instance 🚀 |

### Packaging Standalone & Installer
```bash
# From the /app directory:
npm run build:electron
```

The output executables will be generated in `app/dist/`:
- **Standalone Folder**: `app/dist/win-unpacked/HTTP Toolkit.exe`
- **Installer Package**: `app/dist/HTTP-Toolkit-1.26.1.exe`

---

## Running with Logs 🔍

To inspect runtime startup, server IPC, and diagnostic output:
```powershell
cd app\dist\win-unpacked
.\'HTTP Toolkit.exe' --enable-logging
```

---

## License 📄

This project is licensed under AGPL-3.0.
