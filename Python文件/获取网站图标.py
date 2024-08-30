import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def get_favicon(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.text, 'html.parser')
    icon_link = soup.find("link", rel="icon")
    if icon_link:
        return urljoin(url, icon_link['href'])
    else:
        return urljoin(url, '/favicon.ico')

# 无限循环，让程序自动重新运行
while True:
    # 允许用户直接输入URL
    url = input("请输入网站URL（例如：https://github.com）：")
    
    # 检查URL是否以 http://, https://, 或 www. 开头
    if not (url.startswith('http://') or url.startswith('https://') or url.startswith('www.')):
        print("链接错误，请输入有效的URL，URL应以 'http://', 'https://', 或 'www.' 开头。\n")
        continue  # 跳过本次循环，重新输入
    
    # 如果输入的URL没有以 'http://' 或 'https://' 开头，自动加上 'http://'
    if not (url.startswith('http://') or url.startswith('https://')):
        url = 'http://' + url

    favicon_url = get_favicon(url)
    print(f"\nFavicon URL:\n\n{favicon_url}\n\n")

    # # 提示用户是否重新运行，按下回车键重新运行
    # input("按Enter键重新运行，或关闭窗口退出程序...\n")
