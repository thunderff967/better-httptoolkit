; installer-choice.nsh
; Custom installer page: two radio buttons to choose install location preset.
;
; Fixes applied:
;   1. $PROGRAMFILES64 guarded with ${RunningX64} — works on 32-bit Windows.
;   2. Radio state restored from $INSTDIR on Back/Next — selection persists.
;   3. Page skipped on update/re-install — reads existing location from the
;      Windows uninstall registry key so a re-run never moves the install.
;   4. MUI2 page header (title + subtitle banner) rendered consistently.
;   5. Naming is intentional: "HTTP Toolkit" and "OfflineToolKit" are the
;      two distinct paths the user may choose between.
;
; Guard against electron-builder's dual-pass compilation.
; BUILD_UNINSTALLER is defined only during the uninstaller pass,
; where MUI2 / nsDialogs / LogicLib macros are unavailable.
; All four headers are explicitly included (each has its own include guard,
; so double-inclusion by the main template is a safe no-op).

!ifndef BUILD_UNINSTALLER

!include "LogicLib.nsh"
!include "nsDialogs.nsh"
!include "x64.nsh"
!include "MUI2.nsh"

Var RadioBtn1
Var RadioBtn2

!macro customHeader
  Page custom ChooseInstallTypePage ChooseInstallTypePageLeave
!macroend

Function ChooseInstallTypePage
  ; ── Update / re-install guard ──────────────────────────────────────────────
  ; If a previous installation is registered in the Windows uninstall keys,
  ; skip this page entirely and restore $INSTDIR to the existing location.
  ; This prevents a re-run (e.g. auto-update) from silently redirecting the
  ; install to a different folder, which would create a duplicate installation.
  ReadRegStr $0 HKCU \
    "Software\Microsoft\Windows\CurrentVersion\Uninstall\tech.httptoolkit.desktop_is1" \
    "InstallLocation"
  ${If} $0 == ""
    ReadRegStr $0 HKLM \
      "Software\Microsoft\Windows\CurrentVersion\Uninstall\tech.httptoolkit.desktop_is1" \
      "InstallLocation"
  ${EndIf}
  ${If} $0 != ""
    StrCpy $INSTDIR $0
    Abort  ; skip page — Abort inside a Page function = skip, not cancel
  ${EndIf}

  ; ── MUI2 header (title + subtitle banner) ──────────────────────────────────
  !insertmacro MUI_HEADER_TEXT \
    "Choose Installation Folder" \
    "Select where HTTP Toolkit should be installed."

  ; ── Build dialog ───────────────────────────────────────────────────────────
  nsDialogs::Create 1018
  Pop $0
  ${If} $0 == error
    Abort
  ${EndIf}

  ${NSD_CreateLabel} 0 0 100% 24u "Select the installation folder:"
  Pop $0

  ${NSD_CreateRadioButton} 10u 34u 90% 15u \
    "Program Files\HTTP Toolkit  (recommended)"
  Pop $RadioBtn1

  ${NSD_CreateRadioButton} 10u 56u 90% 15u \
    "Program Files\OfflineToolKit"
  Pop $RadioBtn2

  ; ── Restore previous selection (Back/Next navigation) ──────────────────────
  ; Read the current $INSTDIR — set by a previous Leave call or by the
  ; default — and check the matching radio button so the user's choice
  ; is never silently reset when they navigate back to this page.
  ${If} $INSTDIR == "$PROGRAMFILES64\OfflineToolKit"
  ${OrIf} $INSTDIR == "$PROGRAMFILES\OfflineToolKit"
    ${NSD_SetState} $RadioBtn2 ${BST_CHECKED}
  ${Else}
    ${NSD_SetState} $RadioBtn1 ${BST_CHECKED}
  ${EndIf}

  nsDialogs::Show
FunctionEnd

Function ChooseInstallTypePageLeave
  ; Read which radio is checked and resolve the correct Program Files path for
  ; the current architecture. $PROGRAMFILES64 is empty on 32-bit Windows, so
  ; fall back to $PROGRAMFILES when not running on a 64-bit OS.
  ${NSD_GetState} $RadioBtn1 $0
  ${If} $0 == ${BST_CHECKED}
    ${If} ${RunningX64}
      StrCpy $INSTDIR "$PROGRAMFILES64\HTTP Toolkit"
    ${Else}
      StrCpy $INSTDIR "$PROGRAMFILES\HTTP Toolkit"
    ${EndIf}
  ${Else}
    ${If} ${RunningX64}
      StrCpy $INSTDIR "$PROGRAMFILES64\OfflineToolKit"
    ${Else}
      StrCpy $INSTDIR "$PROGRAMFILES\OfflineToolKit"
    ${EndIf}
  ${EndIf}
FunctionEnd

!else

; Uninstaller pass: empty stub so !insertmacro customHeader compiles cleanly.
!macro customHeader
!macroend

!endif
