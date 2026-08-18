@echo off
setlocal enableextensions

set HTTPTOOLKIT_SERVER_REDIRECTED=1

if not defined HTTPTOOLKIT_SERVER_BINPATH set HTTPTOOLKIT_SERVER_BINPATH="%~dp0httptoolkit-server.cmd"
if exist "%~dp0..\bin\node.exe" (
  "%~dp0..\bin\node.exe" "%~dp0..\bin\run" %*
) else if exist "%LOCALAPPDATA%\oclif\node\node-24.15.0.exe" (
  "%LOCALAPPDATA%\oclif\node\node-24.15.0.exe" "%~dp0..\bin\run" %*
) else (
  node "%~dp0..\bin\run" %*
)
