import requests
from bs4 import BeautifulSoup
import json
import os
import datetime
import re

def extract_date(text):
    # 匹配日期格式:
    # 1. Jan 23, 2024
    # 2. 2024-01-23
    # 3. 01/23/2024
    date_patterns = [
        r'(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+\d{1,2},?\s+\d{4}',
        r'\d{4}-\d{2}-\d{2}',
        r'\d{2}/\d{2}/\d{4}'
    ]
    
    for pattern in date_patterns:
        match = re.search(pattern, text)
        if match:
            return match.group()
    return None

def clean_content(content):
    # 清理内容中的多余空白
    return ' '.join(content.split())

def fetch_cursor_changelog():
    url = 'https://www.cursor.com/changelog'
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }
    
    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()
        print(f"开始获取更新日志,HTTP状态码: {response.status_code}")
        
        # 保存页面源码用于调试
        with open('debug_page.html', 'w', encoding='utf-8') as f:
            f.write(response.text)
            
        soup = BeautifulSoup(response.text, 'html.parser')
        
        # 查找所有更新条目
        changelog_data = []
        
        # 查找标题元素
        h1_elements = soup.find_all('h1')
        h2_elements = soup.find_all('h2')
        section_elements = soup.find_all('section')
        
        print(f"找到 {len(h1_elements)} 个 h1 元素")
        print(f"找到 {len(h2_elements)} 个 h2 元素")
        print(f"找到 {len(section_elements)} 个 section 元素")
        
        if h1_elements:
            print(f"h1 示例内容: {h1_elements[0].text}")
        if h2_elements:
            print(f"h2 示例内容: {h2_elements[0].text}")
            
        # 遍历所有文章元素
        articles = soup.find_all('article')
        for article in articles:
            # 提取标题
            title = article.find('h2').text.strip() if article.find('h2') else ''
            
            # 提取日期
            date_div = article.find('div', class_='inline-flex')
            date = None
            if date_div:
                date_text = date_div.text.strip()
                date = extract_date(date_text)
            
            # 提取内容
            content_elements = article.find_all(['p', 'li'])
            content = '\n'.join([clean_content(elem.text.strip()) for elem in content_elements if elem.text.strip()])
            
            changelog_entry = {
                'title': title,
                'date': date,
                'content': content
            }
            changelog_data.append(changelog_entry)
            
        # 创建输出目录
        os.makedirs('output', exist_ok=True)
        
        # 生成带时间戳的文件名
        timestamp = datetime.datetime.now().strftime('%Y%m%d_%H%M%S')
        output_file = f'output/cursor_changelog_{timestamp}.json'
        
        # 保存为JSON文件
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(changelog_data, f, ensure_ascii=False, indent=2)
            
        print(f"成功获取 {len(changelog_data)} 条更新记录")
        print(f"数据已保存到: {output_file}")
        
    except Exception as e:
        print(f"获取更新日志时出错: {str(e)}")

if __name__ == '__main__':
    fetch_cursor_changelog()