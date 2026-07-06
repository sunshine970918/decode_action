import base64
import bz2
import zlib
import lzma
import gzip
import re
from datetime import datetime

# 获取当前日期和时间
now = datetime.now()
formatted_date = now.strftime("%Y-%m-%d %H:%M:%S")


def try_decompress(data):
    # 统一处理字节类型输入
    if isinstance(data, str):
        data = data.encode('utf-8')
    
    try:
        decompressed_data = gzip.decompress(data)
        return decompressed_data
    except Exception:
        pass
    try:
        decompressed_data = bz2.decompress(data)
        return decompressed_data
    except Exception:
        pass
    try:
        decompressed_data = zlib.decompress(data)
        return decompressed_data
    except Exception:
        pass
    try:
        decompressed_data = lzma.decompress(data)
        return decompressed_data
    except Exception:
        pass
    return data


def try_decode_base64(data):
    try:
        decoded_data = base64.b64decode(data)
        return decoded_data
    except Exception:
        pass
    return data


def extract_base64_encoded(data):
    # 正则匹配：兼容单/双引号、括号内空格/换行、忽略大小写
    pattern = r"base64\.b64decode\(\s*['\"](.*?)['\"]\s*\)"
    match = re.search(pattern, data)
    if not match:
        return None
    return match.group(1)


def decrypt_nested(data):
    if not data:
        return "未找到可解密的 base64 内容"
    
    while True:
        new_data = try_decode_base64(data)
        new_data = try_decompress(new_data)

        # 统一转字符串做特征判断
        try:
            new_data_str = new_data.decode('utf-8')
        except Exception:
            new_data_str = str(new_data)

        if "exec(" not in new_data_str:
            print("无法进一步解密，退出循环")
            break

        if "Encoded script" in new_data_str:
            new_data = "该加密未适配 敬请期待"
            print("该加密未适配 敬请期待")
            break

        # 提取下一层 base64 内容
        next_encoded = extract_base64_encoded(new_data_str)
        if not next_encoded:
            print("未找到嵌套的 base64 片段，终止解密")
            break
        
        data = next_encoded

    return new_data_str if isinstance(new_data, bytes) else new_data


def process_data(data):
    if isinstance(data, str):
        byte_data = data.encode('utf-8')
    elif isinstance(data, bytes):
        byte_data = data
    else:
        raise TypeError("Expected string or bytes-like object")
    return byte_data


# 主流程
with open('./input.py', 'r', encoding='utf-8') as file:
    content = file.read().strip()

encoded_data = extract_base64_encoded(content)
final_decrypted_data = decrypt_nested(encoded_data)

print(final_decrypted_data)

with open("./output.py", 'wb') as f:
    f.write(process_data("#"))
    f.write(process_data(formatted_date))
    f.write(process_data("\n"))
    f.write(process_data(final_decrypted_data))
