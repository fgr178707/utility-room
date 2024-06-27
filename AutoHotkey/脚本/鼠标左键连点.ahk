F::
    Toggle := !Toggle
    if (Toggle) {
        SetTimer, ClickLoop, 1
    } else {
        SetTimer, ClickLoop, Off
    }
return

ClickLoop:
    Click ; 鼠标中键操作
return

F12::ExitApp  ; 按 F12 退出脚本