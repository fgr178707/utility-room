F::  ; F启动暂停热点
    Toggle := !Toggle
    if (Toggle) {
        SetTimer, ClickLoop, 1500 ;速度 1s=1000ms
    } else {
        SetTimer, ClickLoop, Off
    }
return

ClickLoop:
    Click   ;鼠标左键操作
return

F12::ExitApp  ; 按 F12 退出脚本