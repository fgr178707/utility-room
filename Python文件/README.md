# utility-room

#### 放点杂物看看就好啦🤣🤣🤣
----------
### 使用方法
#### 建议运行之前安装一下，当前目录下的字体 **HarmonyOS_Sans_SC_Bold**

>经网站检测，该字体可以商用<br>
>字体名称：HarmonyOS_Sans_SC_Bold.ttf<br>
>文件MD5：b7dc90fa852495f43a4ddd664d000b28<br>
>文件大小：7.78 MB<br>



需要修改一下值

>\# 读取文件<br>
>with open('文件名.txt', 'r') as file:

>\# 解析数据<br>
>data = [line.strip().split('文件里的关键词') for line in lines]

>\#创建DataFrame<br>
>df = pd.DataFrame(data, columns=['A1简称', 'A2简称'])

>\# 指定保存的Excel文件名<br>
>output_file = '输出文件名_data.xlsx'

