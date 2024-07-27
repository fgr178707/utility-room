import pandas as pd
import os

# 读取文件
with open('文件名.txt', 'r') as file:
    lines = file.readlines()

# 解析数据
data = [line.strip().split('文件里的关键词') for line in lines]

# 创建DataFrame
df = pd.DataFrame(data, columns=['A1简称', 'A2简称'])

# 指定保存的Excel文件名
output_file = '输出文件名_data.xlsx'

# 检查文件是否存在并删除
if os.path.exists(output_file):
    os.remove(output_file)

# 保存为Excel文件并设置文字大小为14号，并使用指定字体
with pd.ExcelWriter(output_file, engine='xlsxwriter') as writer:
    df.to_excel(writer, index=False, startrow=0, startcol=0)
    
    # 获取工作表
    workbook  = writer.book
    worksheet = writer.sheets['Sheet1']
    
    # 设置文字大小和字体
    cell_format = workbook.add_format({'font_size': 14, 'font_name': 'HarmonyOS Sans SC'})
    worksheet.set_column('A:A', 45, cell_format)  # 设置A列宽度为25
    worksheet.set_column('B:B', 25, cell_format)  # 设置B列宽度为45

    # 设置标题行字体大小
    header_format = workbook.add_format({'font_size': 14, 'font_name': 'HarmonyOS Sans SC', 'bold': True})
    for col_num, value in enumerate(df.columns.values):
        worksheet.write(0, col_num, value, header_format)

print(f"Data successfully written to {output_file}")
