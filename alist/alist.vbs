Set WshShell = CreateObject("WScript.Shell")
WshShell.Environment("Process").Item("https_proxy") = "http://127.0.0.1:10809"

' 启动浏览器并打开指定网址
WshShell.Run "http://127.0.0.1:5244/"

' 启动 alist-windows-amd64-upx.exe server
WshShell.Run "alist-windows-amd64-upx.exe server", 0

' 退出脚本
WScript.Quit
