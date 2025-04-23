import sys
import os # Import os module to check if file exists

def parse_script_line(line, line_num, current_id):
    """Parses a single line of script data and returns a JS object string or None on error."""
    parts = line.strip().split(';')
    if len(parts) != 6:
        print(f"  [错误] 第 {line_num} 行格式不正确 (需要6个分号分隔的部分): {line}", file=sys.stderr)
        return None, current_id

    name, type_str, tags_str, player_count_str, publisher, release_year_str = [p.strip() for p in parts]

    # Basic validation
    if not name or not type_str or not tags_str or not player_count_str:
        print(f"  [错误] 第 {line_num} 行缺少必填字段 (名称, 类型, 标签, 人数): {line}", file=sys.stderr)
        return None, current_id

    # Parse tags (variable number)
    tags = [tag.strip() for tag in tags_str.split(',') if tag.strip()]
    if not tags:
         print(f"  [错误] 第 {line_num} 行至少需要一个有效标签: {line}", file=sys.stderr)
         return None, current_id
    js_tags = "[" + ", ".join(f'"{tag}"' for tag in tags) + "]"

    # Parse player count
    try:
        player_count = int(player_count_str.replace('人', ''))
    except ValueError:
        print(f"  [错误] 第 {line_num} 行人数必须是数字: {player_count_str}", file=sys.stderr)
        return None, current_id

    # Parse release year (optional)
    release_year = 'null' # Default to JS null
    if release_year_str:
        try:
            release_year = int(release_year_str)
        except ValueError:
            print(f"  [警告] 第 {line_num} 行发行年份不是有效数字，将使用 null: {release_year_str}", file=sys.stderr)
            release_year = 'null'

    # Handle publisher (include if present, otherwise empty string or null)
    js_publisher = f'"{publisher}"' if publisher else '""' # Or use 'null'

    # Format the JavaScript object string - includes publisher
    js_object = f"""\
        {{
            id: {current_id},
            name: "{name}",
            type: "{type_str}",
            tags: {js_tags},
            player_count: {player_count},
            publisher: {js_publisher},
            release_year: {release_year}
        }},""" # Note the trailing comma

    return js_object, current_id + 1

def main():
    print("剧本信息 TXT 文件转 JavaScript 对象工具")
    print("TXT 文件每行格式应为：")
    print("剧本名;类型;特征1,特征2;游玩人数;发行商;发行时间")
    print("(特征用英文逗号分隔。空行或以 '#' 开头的行将被忽略)")
    print("-" * 30)

    # Get Start ID
    while True:
        try:
            start_id_str = input("请输入起始 ID: ")
            start_id = int(start_id_str)
            break
        except ValueError:
            print("无效的 ID，请输入一个数字。")

    # Get Input Filename
    while True:
        filename = input("请输入包含剧本数据的 TXT 文件名 (例如: scripts_data.txt): ")
        if os.path.exists(filename):
            break
        else:
            print(f"错误：找不到文件 '{filename}'，请确保文件存在于脚本所在目录或提供正确路径。")

    current_id = start_id
    generated_js_objects = []
    line_count = 0

    print(f"\n正在读取文件 '{filename}' 并从 ID {current_id} 开始生成...")

    try:
        # Use utf-8 encoding for potential Chinese characters
        with open(filename, 'r', encoding='utf-8') as f:
            for line in f:
                line_count += 1
                line_content = line.strip()
                # Skip empty lines and comments
                if not line_content or line_content.startswith('#'):
                    continue

                js_obj_str, next_id = parse_script_line(line_content, line_count, current_id)
                if js_obj_str:
                    generated_js_objects.append(js_obj_str)
                    current_id = next_id
    except FileNotFoundError:
        print(f"致命错误：无法打开文件 '{filename}'。", file=sys.stderr)
        sys.exit(1) # Exit script if file not found
    except Exception as e:
        print(f"读取或处理文件时发生错误: {e}", file=sys.stderr)
        sys.exit(1)

    with open('output.txt', 'w', encoding='utf-8') as f:

        print("\n" + "=" * 30)
        print("生成的 JavaScript 对象:")
        print("请将以下内容复制并粘贴到你的 script.js 文件中的 'scripts' 数组里：")
        print("-" * 30)
        if not generated_js_objects:
            print("(没有生成任何对象)")
        else:
            # Print all generated objects together
            print("\n".join(generated_js_objects), file=f)
        print("-" * 30)
        print(f"处理完成。共处理 {line_count} 行，生成 {len(generated_js_objects)} 个对象。")

if __name__ == "__main__":
    main()  