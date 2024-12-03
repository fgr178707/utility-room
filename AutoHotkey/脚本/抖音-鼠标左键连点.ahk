ClickCount := 0
Toggle := false

F::  ; F启动暂停热点
    Toggle := !Toggle
    if (Toggle) {
        SetTimer, ClickLoop, 100 ;速度 1s=1000ms
    } else {
        SetTimer, ClickLoop, Off
    }
return

ClickLoop:
    Click   ;鼠标左键操作
    ClickCount++
    if (ClickCount >= 2) {    ;判定点击次数
        Sleep, 1800000        ; 暂停脚本30分钟  30分钟 = 30 * 60 * 1000 毫秒
        ClickCount := 0 ; 重置点击次数
    }
return

F12::ExitApp  ; 按 F12 退出脚本
