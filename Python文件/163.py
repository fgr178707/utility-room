import imaplib
import concurrent.futures
import threading
import os

def check_163_login(email, password):
    try:
        mail = imaplib.IMAP4_SSL('imap.163.com', 993, timeout=30)
        mail.login(email, password)
        mail.logout()
        return True
    except Exception as e:
        print(f'错误原因 {email}: {e}')
        return False

def test_account(email, password):
    print(f'正在测试的邮箱: {email}...')
    result = check_163_login(email, password)
    print(f'{email}: {"成功" if result else "失败"}')
    return email, password, result

def main():
    # 从文件读取用户名和密码
    with open('账号.txt', 'r', encoding='utf-8') as file1, open('密码.txt', 'r', encoding='utf-8') as file2:
        emails = file1.read().splitlines()
        passwords = file2.read().splitlines()

    input_data = list(zip(emails, passwords))
    results = {}

    # 使用 ThreadPoolExecutor 并发执行
    with concurrent.futures.ThreadPoolExecutor(max_workers=3) as executor:  # 减少并发线程数
        future_to_account = {executor.submit(test_account, email, password): (email, password) for email, password in input_data}
        try:
            for future in concurrent.futures.as_completed(future_to_account, timeout=120):  # 增加超时设置
                email, password = future_to_account[future]
                try:
                    email, password, result = future.result()
                    results[email] = (password, result)
                except Exception as exc:
                    print(f'{email} generated an exception: {exc}')
        except concurrent.futures.TimeoutError:
            print("Execution exceeded the given timeout")

    os.makedirs('结果', exist_ok=True)

    # 将结果分别写入成功和失败的日志文件
    with open(os.path.join('结果', '成功账号.txt'), 'w', encoding='utf-8') as success_file, open(os.path.join('结果', '失败账号.txt'), 'w', encoding='utf-8') as failure_file:
        for email, (password, status) in results.items():
            if status:
                success_file.write(f'账号: {email} \n密码: {password}\n成功\n\n')
            else:
                failure_file.write(f'账号: {email} \n密码: {password}\n失败\n\n')

if __name__ == "__main__":
    main()
