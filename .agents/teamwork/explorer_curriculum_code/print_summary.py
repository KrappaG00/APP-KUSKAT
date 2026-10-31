import json

with open(r".agents/teamwork/explorer_curriculum_code/units_inventory.json", "r", encoding="utf-8") as f:
    data = json.load(f)

lines = []
lines.append("# Inventario Completo de las 97 Unidades Curriculares Oficiales MINED-ESMATE\n")
lines.append("| # | Grado | Unidad # | ID Unidad | Tomo | Título de la Unidad | Clases/Lecciones | Reactivos |\n")
lines.append("|---|---|---|---|---|---|---|---|\n")

global_u_idx = 1
for u in data:
    q_info = "Estático (50)" if u["hasStaticQuestions"] else "Dinámico (50)"
    lesson_titles = "<br>".join([f"**{l['number']}** {l['title']} *({l['raw_words']} palabras)*" for l in u["lessons"]])
    lines.append(f"| {global_u_idx} | {u['gradeName']} | U{u['unitNumber']} | `{u['unitId']}` | T{u['tomo']} | {u['unitTitle']} | {lesson_titles} | {q_info} |\n")
    global_u_idx += 1

with open(r".agents/teamwork/explorer_curriculum_code/units_overview.md", "w", encoding="utf-8") as f:
    f.writelines(lines)

print("Wrote units_overview.md successfully")
