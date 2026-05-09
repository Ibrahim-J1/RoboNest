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

for d in directories:
    page_path = os.path.join(d, "page.tsx")
    if os.path.exists(page_path):
        with open(page_path, "r", encoding="utf-8") as f:
            content = f.read()

        content = content.replace('href="/" href="/"', 'href="/"')
        content = content.replace('href="/robos" href="/robos"', 'href="/robos"')
        content = content.replace('href="/shop" href="/shop"', 'href="/shop"')
        content = content.replace('href="/events" href="/events"', 'href="/events"')
        content = content.replace('href="/build" href="/build"', 'href="/build"')
        content = content.replace('href="/checkout" href="/checkout"', 'href="/checkout"')

        with open(page_path, "w", encoding="utf-8") as f:
            f.write(content)

print("Duplicates fixed.")
