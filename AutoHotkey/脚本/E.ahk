F::
    if (toggle := !toggle) {
        SetTimer, ClickE, 1
    } else {
        SetTimer, ClickE, Off
    }
return

ClickE:
    Send, {e down}
    Sleep, 220
    Send, {e up}
return

F12::ExitApp  ; 按 F12 退出脚本