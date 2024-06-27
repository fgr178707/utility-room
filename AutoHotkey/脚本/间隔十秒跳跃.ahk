F::
    if (toggle := !toggle) {
        SetTimer, ClickE, 10000
    } else {
        SetTimer, ClickE, Off
    }
return

ClickE:
    Send, {Space down}
    Send, {Space up}
return

F12::ExitApp  ; 按 F12 退出脚本