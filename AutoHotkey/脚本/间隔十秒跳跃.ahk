F:: ; F启动暂停热点
    if (toggle := !toggle) {
        SetTimer, ClickE, 10000 ;速度 1s=1000ms
    } else {
        SetTimer, ClickE, Off
    }
return

ClickE:
    Send, {Space down}  ;按下空格
    Send, {Space up}    ;抬起空格
return

F12::ExitApp  ; 按 F12 退出脚本