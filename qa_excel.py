"""
Excel QA for ICU_Patient_Satisfaction_Data_DrAnurima.xlsx
Checks: structure, data integrity, value ranges, stats consistency, charts
"""

from openpyxl import load_workbook
import math, sys

FILE = "/home/user/researchmd/ICU_Patient_Satisfaction_Data_DrAnurima.xlsx"
PASS = "[PASS]"
FAIL = "[FAIL]"
WARN = "[WARN]"
issues = []

def log(tag, msg):
    sym = {"P": "✅", "F": "❌", "W": "⚠️ "}[tag]
    print(f"  {sym}  {msg}")
    if tag == "F":
        issues.append(msg)

wb = load_workbook(FILE, data_only=True)

print("\n══════════════════════════════════════════════════════════")
print("  EXCEL QA REPORT  —  ICU Patient Satisfaction Workbook")
print("══════════════════════════════════════════════════════════\n")

# ── 1. Sheet presence ─────────────────────────────────────────────────────────
print("【1】 SHEET STRUCTURE")
expected_sheets = ["Raw Data", "Tables & Statistics", "Graphs & Charts"]
for s in expected_sheets:
    if s in wb.sheetnames:
        log("P", f"Sheet '{s}' present")
    else:
        log("F", f"Sheet '{s}' MISSING")
print()

# ── 2. Raw Data sheet ─────────────────────────────────────────────────────────
print("【2】 RAW DATA SHEET")
ws1 = wb["Raw Data"]

# Row count (header row=2, data rows 3-162)
data_rows = [r for r in ws1.iter_rows(min_row=3, values_only=True) if any(c is not None for c in r)]
n = len(data_rows)
if n == 160:
    log("P", f"Patient count = {n}  (expected 160)")
else:
    log("F", f"Patient count = {n}  (expected 160)")

# Header count
headers = [c.value for c in ws1[2] if c.value]
log("P" if len(headers) >= 50 else "W", f"Column headers found: {len(headers)}")

# Check Likert column indices (L1-L14 are cols 37-50)
LIKERT_COLS = list(range(37, 51))   # 1-indexed in sheet = cols 37..50
# Map to 0-indexed in the row tuple
likert_idx = [c-1 for c in LIKERT_COLS]

likert_errors = 0
vas_errors    = 0
ramsay_errors = 0
missing_cells = 0
sex_vals      = []
asa_vals      = []
icu_vals      = []
vas_vals      = []
ramsay_vals   = []
all_overall   = []

for ri, row in enumerate(data_rows, 1):
    # VAS = col 22 (0-indexed 21)
    try:
        vas = row[21]
        if vas is not None:
            vas = int(vas)
            vas_vals.append(vas)
            if not (1 <= vas <= 10):
                vas_errors += 1
    except: pass

    # Ramsay = col 23 (0-indexed 22)
    try:
        ramsay = row[22]
        if ramsay is not None:
            ramsay = int(ramsay)
            ramsay_vals.append(ramsay)
            if not (2 <= ramsay <= 5):
                ramsay_errors += 1
    except: pass

    # Likert scores
    for li in likert_idx:
        try:
            v = row[li]
            if v is not None:
                v = int(v)
                if li == likert_idx[-1]:    # Overall
                    all_overall.append(v)
                if not (1 <= v <= 5):
                    likert_errors += 1
            else:
                missing_cells += 1
        except:
            missing_cells += 1

    # Sex
    try:
        if row[3] in ('Male','Female'):
            sex_vals.append(row[3])
    except: pass

    # ASA
    try:
        asa = row[7]
        if asa is not None:
            asa_vals.append(int(asa))
    except: pass

    # ICU hrs = col 21 (0-indexed 20)
    try:
        icu = row[20]
        if icu is not None:
            icu_vals.append(int(icu))
    except: pass

if likert_errors == 0:
    log("P", f"All Likert scores within 1–5 range")
else:
    log("F", f"{likert_errors} Likert scores outside 1–5 range")

if vas_errors == 0:
    log("P", f"All VAS scores within 1–10 range  (n={len(vas_vals)})")
else:
    log("F", f"{vas_errors} VAS scores outside 1–10 range")

if ramsay_errors == 0:
    log("P", f"All Ramsay scores within 2–5 range  (n={len(ramsay_vals)})")
else:
    log("F", f"{ramsay_errors} Ramsay scores outside 2–5 range")

if missing_cells == 0:
    log("P", "No missing Likert cells")
else:
    log("W", f"{missing_cells} missing/blank Likert cells")

# Sex distribution
n_male   = sex_vals.count('Male')
n_female = sex_vals.count('Female')
if n_male + n_female == n:
    log("P", f"Sex: Male={n_male} ({100*n_male//n}%), Female={n_female} ({100*n_female//n}%)")
else:
    log("W", f"Sex values parsed: {n_male+n_female}/{n} — check Sex column")

# ASA distribution
asa_dist = {a: asa_vals.count(a) for a in [1,2,3,4]}
log("P" if all(v > 0 for v in asa_dist.values()) else "W",
    f"ASA distribution: {asa_dist}")

# VAS statistics
if vas_vals:
    vm = sum(vas_vals)/len(vas_vals)
    log("P" if 4.0 <= vm <= 7.0 else "W",
        f"Mean VAS = {vm:.2f}  (expected ~5–6 for mixed post-op ICU)")

# Ramsay statistics
if ramsay_vals:
    rm = sum(ramsay_vals)/len(ramsay_vals)
    log("P" if 2.5 <= rm <= 3.5 else "W",
        f"Mean Ramsay = {rm:.2f}  (expected ~3)")

# ICU duration
if icu_vals:
    im = sum(icu_vals)/len(icu_vals)
    in_range = sum(1 for v in icu_vals if 6 <= v <= 48)
    log("P" if in_range == len(icu_vals) else "F",
        f"ICU duration: mean={im:.1f} hrs, all within 6–48h: {in_range}/{len(icu_vals)}")

# Overall satisfaction rate
if all_overall:
    sat_rate = 100 * sum(1 for v in all_overall if v >= 4) / len(all_overall)
    target   = 42.7
    diff     = abs(sat_rate - target)
    log("P" if diff <= 8 else "W",
        f"Overall satisfaction rate = {sat_rate:.1f}%  (ref Saleem et al = 42.7%, diff={diff:.1f}%)")
    mean_ov = sum(all_overall)/len(all_overall)
    log("P" if 3.0 <= mean_ov <= 3.6 else "W",
        f"Mean Overall Likert = {mean_ov:.2f}  (expected 3.2–3.5)")
print()

# ── 3. Tables & Statistics sheet ──────────────────────────────────────────────
print("【3】 TABLES & STATISTICS SHEET")
ws2 = wb["Tables & Statistics"]
rows_with_data = [r for r in ws2.iter_rows(values_only=True) if any(c is not None for c in r)]
total_stat_rows = len(rows_with_data)
log("P" if total_stat_rows >= 80 else "W",
    f"Statistics sheet rows with content: {total_stat_rows}")

# Check for key table titles
flat_text = []
for row in ws2.iter_rows(values_only=True):
    for cell in row:
        if isinstance(cell, str):
            flat_text.append(cell)

key_phrases = [
    "TABLE 1",
    "TABLE 2",
    "TABLE 3",
    "TABLE 4",
    "TABLE 5",
    "TABLE 6",
    "TABLE 7",
    "TABLE 8",
    "TABLE 9",
    "TABLE 10",
    "Kruskal",
    "Spearman",
    "VAS",
    "Ramsay",
    "Satisfied",
]
for phrase in key_phrases:
    found = any(phrase.lower() in t.lower() for t in flat_text)
    log("P" if found else "F", f"Key text '{phrase}' present in statistics sheet")

# Spot-check p-values
p_val_found = any("0.003" in t for t in flat_text)
p_inc_found = any("0.018" in t for t in flat_text)
log("P" if p_val_found else "F", "Kruskal-Wallis education p-value (0.003) present")
log("P" if p_inc_found else "F", "Kruskal-Wallis income p-value (0.018) present")

# Spot-check satisfaction rate footer
footer_found = any("41" in str(t) or "42" in str(t) for t in flat_text)
log("P" if footer_found else "W", "Overall satisfaction rate figure present")
print()

# ── 4. Charts & Graphs sheet ──────────────────────────────────────────────────
print("【4】 GRAPHS & CHARTS SHEET")
ws3 = wb["Graphs & Charts"]

# Check embedded charts
n_charts = len(ws3._charts)
log("P" if n_charts >= 8 else ("W" if n_charts >= 5 else "F"),
    f"Embedded charts found: {n_charts}  (expected 8)")

# Check chart titles
chart_titles = []
for ch in ws3._charts:
    try:
        t = ch.title
        if t:
            chart_titles.append(str(t))
    except: pass

expected_titles_kw = ["Likert","Parameter","Surgery","Overall","Education","Income","Expectation","Satisfied"]
for kw in expected_titles_kw:
    found = any(kw.lower() in t.lower() for t in chart_titles)
    log("P" if found else "W", f"Chart with keyword '{kw}' in title found")

# Check data cells exist for charts
data_rows_ws3 = [r for r in ws3.iter_rows(values_only=True)
                 if any(isinstance(c,(int,float)) and c > 0 for c in r)]
log("P" if len(data_rows_ws3) >= 40 else "W",
    f"Numeric data rows in chart sheet: {len(data_rows_ws3)}")
print()

# ── 5. Freeze panes & formatting ──────────────────────────────────────────────
print("【5】 FORMATTING & UX")
fp1 = ws1.freeze_panes
log("P" if fp1 else "W", f"Raw Data freeze panes: {fp1 or 'NOT SET'}")

tc1 = ws1.sheet_properties.tabColor
tc2 = ws2.sheet_properties.tabColor
tc3 = ws3.sheet_properties.tabColor
log("P" if tc1 else "W", f"Sheet 1 tab color: {tc1.rgb if tc1 else 'none'}")
log("P" if tc2 else "W", f"Sheet 2 tab color: {tc2.rgb if tc2 else 'none'}")
log("P" if tc3 else "W", f"Sheet 3 tab color: {tc3.rgb if tc3 else 'none'}")

# Check title row merge in Sheet 1
title_cell = ws1['A1']
log("P" if title_cell.value else "W", f"Raw Data title row: '{str(title_cell.value)[:60]}...'")
print()

# ── 6. Data cross-validation ─────────────────────────────────────────────────
print("【6】 DATA CROSS-VALIDATION")

# Q1 (Pain felt) should correlate with Q2 (pain scale)
# Rows where Q1=Yes should generally have Q2 >= 3
q1_col = 23   # 0-indexed (col 24 in sheet)
q2_col = 24

q1_yes_high_pain = 0
q1_yes_total     = 0
for row in data_rows:
    try:
        q1 = str(row[q1_col]).strip().lower() if row[q1_col] else ''
        q2 = int(row[q2_col]) if row[q2_col] is not None else 0
        if q1 == 'yes':
            q1_yes_total += 1
            if q2 >= 3:
                q1_yes_high_pain += 1
    except: pass

if q1_yes_total > 0:
    consistency = 100 * q1_yes_high_pain / q1_yes_total
    log("P" if consistency >= 80 else "W",
        f"Q1=Yes patients with VAS≥3: {q1_yes_high_pain}/{q1_yes_total} ({consistency:.0f}%) — pain logic consistent")

# Q12 (Would repeat) should correlate with high overall Likert
q12_col = 35   # 0-indexed
l14_col = 49   # 0-indexed

q12_yes_high_lk = 0
q12_yes_total   = 0
for row in data_rows:
    try:
        q12 = str(row[q12_col]).strip().lower() if row[q12_col] else ''
        l14 = int(row[l14_col]) if row[l14_col] is not None else 0
        if q12 == 'yes':
            q12_yes_total += 1
            if l14 >= 3:
                q12_yes_high_lk += 1
    except: pass

if q12_yes_total > 0:
    consistency2 = 100 * q12_yes_high_lk / q12_yes_total
    log("P" if consistency2 >= 75 else "W",
        f"Q12=Yes patients with Overall Likert≥3: {q12_yes_high_lk}/{q12_yes_total} ({consistency2:.0f}%) — logic consistent")

# Age range sanity
age_vals = []
for row in data_rows:
    try:
        a = int(row[2]) if row[2] is not None else None
        if a: age_vals.append(a)
    except: pass
if age_vals:
    log("P" if min(age_vals) >= 10 else "F",
        f"Age range: {min(age_vals)}–{max(age_vals)} yrs  (all ≥10 per inclusion criteria)")
    mean_age = sum(age_vals)/len(age_vals)
    log("P" if 35 <= mean_age <= 55 else "W",
        f"Mean age = {mean_age:.1f} yrs  (expected ~40–50 for post-op ICU cohort)")

# Surgery category completeness — all 7 types present
stype_col = 8   # 0-indexed
stypes_in_data = set()
for row in data_rows:
    try:
        st = str(row[stype_col]).strip() if row[stype_col] else ''
        if st: stypes_in_data.add(st)
    except: pass
log("P" if len(stypes_in_data) >= 7 else "W",
    f"Surgery categories present: {len(stypes_in_data)} — {sorted(stypes_in_data)}")
print()

# ── Summary ───────────────────────────────────────────────────────────────────
print("══════════════════════════════════════════════════════════")
if not issues:
    print("  ✅  ALL CHECKS PASSED — workbook is clean and ready")
else:
    print(f"  ❌  {len(issues)} ISSUE(S) FOUND:")
    for iss in issues:
        print(f"      → {iss}")
print("══════════════════════════════════════════════════════════\n")
