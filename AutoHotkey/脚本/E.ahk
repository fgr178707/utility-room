F::  ; F启动暂停热点
    if (toggle := !toggle) {
        SetTimer, ClickE, 1     ;速度 1s=1000ms
    } else {
        SetTimer, ClickE, Off
    }
return

ClickE:
    Send, {e down}      ;按下空格
    Sleep, 220          ;按下间隔200毫秒抬起 1s=1000ms
    Send, {e up}        ;抬起空格
return

F12::ExitApp  ; 按 F12 退出脚本