@echo off
setlocal enableextensions

if not "%HTTPTOOLKIT_SERVER_REDIRECTED%"=="1" if exist "%LOCALAPPDATA%\httptoolkit-server\client\bin\httptoolkit-server.cmd" (
  set HTTPTOOLKIT_SERVER_REDIRECTED=1
  "%LOCALAPPDATA%\httptoolkit-server\client\bin\httptoolkit-server.cmd" %*
  goto:EOF
)

if not defined HTTPTOOLKIT_SERVER_BINPATH set HTTPTOOLKIT_SERVER_BINPATH="%~dp0httptoolkit-server.cmd"
if exist "%~dp0..\bin\node.exe" (
  "%~dp0..\bin\node.exe" "%~dp0..\bin\run" %*
) else if exist "%LOCALAPPDATA%\oclif\node\node-24.15.0.exe" (
  "%LOCALAPPDATA%\oclif\node\node-24.15.0.exe" "%~dp0..\bin\run" %*
) else (
  node "%~dp0..\bin\run" %*
)
