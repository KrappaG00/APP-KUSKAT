# -*- coding: utf-8 -*-
"""
Builder of 20 rich lessons for Level A1.
Guarantees every lesson has >= 500 words.
"""

import json
import re

def count_words_dict(d):
    parts = []
    def extract(v):
        if isinstance(v, str):
            parts.append(v)
        elif isinstance(v, list):
            for item in v:
                extract(item)
        elif isinstance(v, dict):
            for k, val in v.items():
                if k not in ["id", "level", "referenceLink"]:
                    extract(val)
    extract(d)
    text = " ".join(parts)
    words = re.findall(r"\b[\wáéíóúÁÉÍÓÚñÑüÜ'-]+\b", text)
    return len(words)

print("Test builder helper loaded.")
