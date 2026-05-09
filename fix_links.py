import os
import re

directories = [
    "src/app",
    "src/app/build",
    "src/app/checkout",
    "src/app/events",
    "src/app/robos",
    "src/app/shop"
]

mapping = {
    "{{DATA:SCREEN:SCREEN_34}}": "/",
    "{{DATA:SCREEN:SCREEN_8}}": "/robos",
    "{{DATA:SCREEN:SCREEN_39}}": "/shop",
    "{{DATA:SCREEN:SCREEN_12}}": "/build",
    "{{DATA:SCREEN:SCREEN_29}}": "/events"
}

text_mapping = {
    r'>\s*Home\s*</a>': "/",
    r'>\s*Robos\s*</a>': "/robos",
    r'>\s*Our Robos\s*</a>': "/robos",
    r'>\s*Shop\s*</a>': "/shop",
    r'>\s*Shop &amp; Track\s*</a>': "/shop",
    r'>\s*Build your Robo\s*</a>': "/build",
    r'>\s*Build Now\s*</a>': "/build",
    r'>\s*Events\s*</a>': "/events",
    r'>\s*Events &amp; Ranking\s*</a>': "/events",
    r'>\s*Checkout\s*</a>': "/checkout",
}

for d in directories:
    page_path = os.path.join(d, "page.tsx")
    if os.path.exists(page_path):
        with open(page_path, "r", encoding="utf-8") as f:
            content = f.read()

        # Fix {{DATA:SCREEN...}} links
        for k, v in mapping.items():
            content = content.replace(k, v)
        
        # Fix href="#" based on the link text
        for text_pattern, link in text_mapping.items():
            # We look for href="#" followed by some characters then the text pattern
            # A bit tricky with regex across multiple lines, so let's do:
            # We want to replace href="#" with href="link" if it's right before the text
            # e.g. <a href="#">Home</a> -> <a href="/">Home</a>
            # The class name could be in between href and >
            pattern = r'href="#"([^>]*)' + text_pattern
            replacement = r'href="' + link + r'"\1' + text_pattern.replace('\\s*', ' ').replace(r'\s*', ' ')
            # Note: the text_pattern might have regex in it, let's simplify.
            # We'll just find all <a> tags with href="#" and change them based on inner text
            pass
            
        # Let's use a simpler approach: use re.sub with a function
        def replace_href(match):
            attrs = match.group(1)
            inner_text = match.group(2)
            
            # remove formatting to check
            clean_text = re.sub(r'<[^>]+>', '', inner_text).strip()
            
            new_href = "#"
            if clean_text in ["Home"]: new_href = "/"
            elif clean_text in ["Robos", "Our Robos"]: new_href = "/robos"
            elif clean_text in ["Shop", "Shop & Track"]: new_href = "/shop"
            elif clean_text in ["Build your Robo", "Build Now"]: new_href = "/build"
            elif clean_text in ["Events", "Events & Ranking", "Events & Rankings"]: new_href = "/events"
            elif clean_text in ["Checkout"]: new_href = "/checkout"
            
            if new_href != "#":
                attrs = re.sub(r'href="#"', f'href="{new_href}"', attrs)
                return f'<a{attrs}>{inner_text}</a>'
            return match.group(0)

        # Replace all <a ... href="#" ...>...</a>
        content = re.sub(r'<a([^>]+href="#"[^>]*)>(.*?)</a>', replace_href, content, flags=re.DOTALL | re.IGNORECASE)

        # Fix the top level ROBONEST text which is an <a> tag without "Home" text
        content = re.sub(r'<a([^>]+href="#")([^>]*)>(\s*ROBONEST\s*)</a>', r'<a\1 href="/"\2>\3</a>', content, flags=re.DOTALL)
        # Handle if href="#" is not at the end
        content = re.sub(r'<a([^>]*?)href="#"([^>]*?)>(\s*ROBONEST\s*)</a>', r'<a\1href="/"\2>\3</a>', content, flags=re.DOTALL)

        with open(page_path, "w", encoding="utf-8") as f:
            f.write(content)

print("Links fixed.")
