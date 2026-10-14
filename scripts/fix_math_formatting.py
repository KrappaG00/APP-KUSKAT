import glob
import json
import re
import os

def clean_text(text):
    if not isinstance(text, str) or not text:
        return text

    # 1. Fix corrupted escapes
    text = text.replace('\\u0007pprox', '\\approx')
    text = text.replace('\\u000bec', '\\vec')

    # 2. Humanize degree notation: 45^\circ, 45^{\circ}, 45\circ -> 45°
    # Works both inside and outside LaTeX
    text = re.sub(r'(\d+)\s*\^\\?\{?circ\}?', r'\1°', text)
    text = re.sub(r'\\circ\b', '°', text)

    # Clean up empty \(°\) or \(\) if any degree got wrapped
    text = re.sub(r'\\\(\s*(\d+°)\s*\\\)', r'\1', text)

    # 3. Clean up common latex that is nicer in human text:
    # e.g. cm^2 -> cm², m^2 -> m², km^2 -> km², cm^3 -> cm³, m^3 -> m³
    text = re.sub(r'\bcm\^2\b', 'cm²', text)
    text = re.sub(r'\bm\^2\b', 'm²', text)
    text = re.sub(r'\bkm\^2\b', 'km²', text)
    text = re.sub(r'\bcm\^3\b', 'cm³', text)
    text = re.sub(r'\bm\^3\b', 'm³', text)

    # 4. If text is an unwrapped LaTeX formula or fraction/root, wrap in \(...\) so KaTeX renders it
    has_math_delimiters = ('$' in text or '\\(' in text or '\\[' in text)
    
    if not has_math_delimiters:
        # Check if entire string is a math expression like \frac{2}{3}, \sqrt{5}, -\sqrt{16}, \pi, \emptyset, etc.
        if re.search(r'^\s*[-+]?\\(?:frac|sqrt|pi|emptyset|mathbb|theta|infty|pm|times|approx|alpha|beta|lambda|Delta)', text):
            text = f'\\({text.strip()}\\)'
        elif re.search(r'^\s*[-+]?[0-9a-zA-Z\s]+\s*[\^/]\s*[0-9a-zA-Z]+', text) and not re.search(r'[áéíóúÁÉÍÓÚñÑa-zA-Z]{5,}', text):
            # Pure algebraic power like x^2, 2/3, x^2 - 4
            text = f'\\({text.strip()}\\)'
        elif re.search(r'\\(?:frac|sqrt|pi|theta|alpha|beta|infty|emptyset|mathbb|leq|geq|neq|pm|cdot)', text):
            # Contains latex commands in a sentence; wrap the latex commands in \(...\)
            # Find commands and wrap them
            def wrap_cmd(m):
                return f'\\({m.group(0)}\\)'
            text = re.sub(r'\\(?:frac\{[^{}]+\}\{[^{}]+\}|sqrt(?:\[[^\]]+\])?\{[^{}]+\}|pi|theta|alpha|beta|infty|emptyset|mathbb\{[A-Z]\})', wrap_cmd, text)

    return text

def process_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    modified = False

    def process_item(item):
        nonlocal modified
        if isinstance(item, dict):
            for k, v in item.items():
                if isinstance(v, str):
                    new_v = clean_text(v)
                    if new_v != v:
                        item[k] = new_v
                        modified = True
                elif isinstance(v, (dict, list)):
                    process_item(v)
        elif isinstance(item, list):
            for i, elem in enumerate(item):
                if isinstance(elem, str):
                    new_elem = clean_text(elem)
                    if new_elem != elem:
                        item[i] = new_elem
                        modified = True
                elif isinstance(elem, (dict, list)):
                    process_item(elem)

    process_item(data)

    if modified:
        with open(filepath, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
        return True
    return False

if __name__ == '__main__':
    all_files = glob.glob('public/data/**/*.json', recursive=True)
    count = 0
    for f in all_files:
        if process_file(f):
            count += 1
            print(f'Updated math formatting in: {f}')
    print(f'Total files updated: {count} out of {len(all_files)}')
