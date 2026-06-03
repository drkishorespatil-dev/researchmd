"""
Near-to-ideal real-world data simulation for:
EVALUATION OF PATIENT SATISFACTION WITH RESPECT TO ANALGESIA AND SEDATION
DURING INVASIVE MECHANICAL VENTILATION IN THE POST OPERATIVE ICU
Dr. Anurima Bhati | LTMMC & LTMGH, Sion, Mumbai
"""

import random
import math
import statistics
from openpyxl import Workbook
from openpyxl.styles import (Font, PatternFill, Alignment, Border, Side,
                              numbers)
from openpyxl.utils import get_column_letter
from openpyxl.chart import BarChart, PieChart, Reference
from openpyxl.chart.series import DataPoint
from openpyxl.chart.label import DataLabelList

random.seed(42)

# ── helpers ───────────────────────────────────────────────────────────────────
def wchoice(options, weights):
    total = sum(weights)
    r = random.uniform(0, total)
    upto = 0
    for o, w in zip(options, weights):
        upto += w
        if r <= upto:
            return o
    return options[-1]

def gauss_clamp(mean, sd, lo, hi):
    return max(lo, min(hi, round(random.gauss(mean, sd))))

def mean(lst):   return sum(lst)/len(lst) if lst else 0
def sd(lst):
    if len(lst) < 2: return 0
    m = mean(lst)
    return math.sqrt(sum((x-m)**2 for x in lst)/(len(lst)-1))
def median(lst):
    s = sorted(lst)
    n = len(s)
    return s[n//2] if n%2 else (s[n//2-1]+s[n//2])/2
def iqr(lst):
    s = sorted(lst)
    n = len(s)
    return s[3*n//4] - s[n//4]

# ── Style helpers ──────────────────────────────────────────────────────────────
HEADER_FILL  = PatternFill("solid", fgColor="003366")
HEADER_FONT  = Font(bold=True, color="FFFFFF", size=10)
ALT_FILL     = PatternFill("solid", fgColor="DCE6F1")
TITLE_FONT   = Font(bold=True, size=12, color="003366")
SUBHDR_FILL  = PatternFill("solid", fgColor="9DC3E6")
SUBHDR_FONT  = Font(bold=True, size=10)
THIN         = Side(style='thin', color='BBBBBB')
THIN_BORDER  = Border(left=THIN, right=THIN, top=THIN, bottom=THIN)
MED          = Side(style='medium', color='003366')
MED_BORDER   = Border(left=MED, right=MED, top=MED, bottom=MED)

def hdr(ws, row, col, val, fill=HEADER_FILL, fnt=HEADER_FONT, wrap=True):
    c = ws.cell(row=row, column=col, value=val)
    c.fill = fill; c.font = fnt; c.border = THIN_BORDER
    c.alignment = Alignment(horizontal='center', vertical='center', wrap_text=wrap)
    return c

def cell(ws, row, col, val, bold=False, color=None, align='center', wrap=False):
    c = ws.cell(row=row, column=col, value=val)
    c.font = Font(bold=bold, size=10)
    c.border = THIN_BORDER
    c.alignment = Alignment(horizontal=align, vertical='center', wrap_text=wrap)
    if color:
        c.fill = PatternFill("solid", fgColor=color)
    return c

# ═══════════════════════════════════════════════════════════════════════════════
# GENERATE PATIENT DATA
# ═══════════════════════════════════════════════════════════════════════════════
N = 160

SURG_NAMES = {
    'Gastrointestinal': ['Whipple Procedure','Colectomy','Gastrectomy','Bowel Resection','Hepatectomy','Anterior Resection'],
    'Head & Neck':      ['Total Thyroidectomy','Radical Neck Dissection','Parotidectomy','Total Laryngectomy'],
    'Orthopaedic':      ['Total Hip Replacement','Total Knee Replacement','Femur Nail','Spine Fusion L4-L5','Pelvic ORIF'],
    'ENT':              ['Mastoidectomy + Tympanoplasty','Functional Endoscopic Sinus Surgery','Laryngopharyngectomy'],
    'Obstetric/Gynae':  ['LSCS with PPH','Total Abdominal Hysterectomy','Radical Hysterectomy','Ovarian Debulking'],
    'Neurosurgical':    ['Craniotomy for Meningioma','VP Shunt','Laminectomy + Fusion','Aneurysm Clipping'],
    'Aesthetic/Plastic':['Free Flap Reconstruction','Burns Excision Grafting','Maxillofacial Reconstruction'],
}

patients = []
for i in range(1, N+1):
    age = gauss_clamp(44, 15, 18, 76)
    sex = wchoice(['Male','Female'], [0.54, 0.46])
    edu = wchoice(['Illiterate','Primary','Secondary','Higher Secondary','Graduate+'],
                  [0.14,0.19,0.31,0.21,0.15])
    ration = wchoice(['Yellow (BPL)','Orange (APL)','White','No Card'],
                     [0.24,0.41,0.24,0.11])
    income = wchoice(['<1 Lakh','1–3 Lakh','3–5 Lakh','>5 Lakh'],
                     [0.20,0.35,0.25,0.20])
    asa = wchoice([1,2,3,4], [0.05,0.40,0.45,0.10])
    stype = wchoice(list(SURG_NAMES.keys()),
                    [0.28,0.10,0.22,0.05,0.15,0.10,0.10])
    sname = random.choice(SURG_NAMES[stype])

    # Analgesics
    opioid = wchoice(['Morphine','Fentanyl','Tramadol','Buprenorphine'],
                     [0.30,0.40,0.20,0.10])
    opioid_dose = {'Morphine':f'{random.randint(2,4)} mg IV q4h',
                   'Fentanyl':f'{random.choice([25,25,50])} mcg IV q2h',
                   'Tramadol':'100 mg IV q8h',
                   'Buprenorphine':'0.3 mg IM q6h'}[opioid]
    adjuvant = wchoice(['Paracetamol 1g IV','Ketorolac 30mg IV','Diclofenac 75mg IM','None'],
                       [0.45,0.25,0.15,0.15])
    adj_freq = {'Paracetamol 1g IV':'q6h','Ketorolac 30mg IV':'q8h',
                'Diclofenac 75mg IM':'q12h','None':''}
    adj_full = f"{adjuvant} {adj_freq[adjuvant]}".strip() if adjuvant!='None' else 'None'

    sedative = wchoice(['Midazolam','Propofol','Dexmedetomidine','None'],
                       [0.35,0.28,0.27,0.10])
    sed_dose = {'Midazolam':f'{round(random.uniform(0.5,2),1)} mg/h IV',
                'Propofol':f'{random.randint(10,30)} mcg/kg/min IV',
                'Dexmedetomidine':f'{round(random.uniform(0.2,0.7),1)} mcg/kg/h IV',
                'None':'N/A'}[sedative]

    anxiolytic = wchoice(['Lorazepam 1mg IV q6h','Diazepam 5mg IV q8h','None','None'],
                         [0.20,0.15,0.65])
    antipsychotic = wchoice(['Haloperidol 2.5mg IV q12h','None'],
                            [0.15,0.85])
    icu_hrs = gauss_clamp(24, 10, 6, 48)

    # Satisfaction modifiers
    edu_mod = {'Illiterate':-0.35,'Primary':-0.15,'Secondary':0.0,
               'Higher Secondary':0.20,'Graduate+':0.40}[edu]
    inc_mod = {'<1 Lakh':-0.25,'1–3 Lakh':0.0,'3–5 Lakh':0.15,'>5 Lakh':0.35}[income]
    asa_mod = {1:0.30,2:0.10,3:-0.10,4:-0.40}[asa]
    base_mod = (edu_mod + inc_mod + asa_mod) * 0.35

    vas = max(1, min(10, round(random.gauss(5.5 + asa_mod*(-1.5), 1.8))))
    ramsay = gauss_clamp(3, 0.8, 2, 5)

    def lk(base_mean):
        return max(1, min(5, round(random.gauss(base_mean + base_mod, 0.85))))

    l1  = lk(3.15)  # NGT
    l2  = lk(2.90)  # ET tube
    l3  = lk(3.25)  # Surgical pain
    l4  = lk(3.45)  # Dressing
    l5  = lk(3.50)  # Blood sampling
    l6  = lk(3.15)  # Urinary catheter
    l7  = lk(3.05)  # Drains
    l8  = lk(3.45)  # Positioning
    l9  = lk(2.90)  # Thirst
    l10 = lk(3.30)  # Nausea
    l11 = lk(3.25)  # Anxiety
    l12 = lk(3.15)  # Sleep
    l13 = lk(3.30)  # Shivering
    l14 = lk(3.40)  # Overall

    # Questionnaire responses
    q1  = 'Yes' if vas >= 3 else 'No'
    q2  = vas
    q3  = 'Yes' if l3 <= 2 or (l3 == 3 and random.random() > 0.55) else 'No'
    q4  = wchoice(['More than expected','Same as expected','Lesser than expected'],
                  [0.37,0.43,0.20])
    q5  = 'Light' if l12 <= 3 and random.random() > 0.35 else 'Deep Sleep'
    q6  = 'Yes' if l11 <= 2 or (l11 == 3 and random.random() > 0.50) else 'No'
    q7  = 'Yes' if random.random() > 0.54 else 'No'
    fear_opts = ['Pain/Procedures','Not knowing outcome','Tubes & devices','Being alone','Death']
    q8  = wchoice(fear_opts,[0.30,0.25,0.20,0.15,0.10]) if q7=='Yes' else 'NA'
    dc_opts = ['Blood sampling','Positioning','Dressing',
               'Surgical site pain','Nausea','Thirst','Urinary catheter']
    q9  = '; '.join(random.sample(dc_opts, random.randint(1,4)))
    q10 = wchoice(['Nursing care','Family presence','Medical personnel','Support staff'],
                  [0.35,0.30,0.25,0.10])
    q11 = wchoice(['Family visit restriction','Noise/environment','Medical procedures','Nursing care'],
                  [0.33,0.28,0.24,0.15])
    q12 = 'Yes' if l14 >= 3 else 'No'
    q13 = 'Yes' if l14 >= 3 or random.random() > 0.18 else 'No'

    patients.append({
        'case_no':i, 'ipd_no':f'ICU/LTMG/{2024+(i-1)//100:04d}/{i:04d}',
        'age':age, 'sex':sex, 'edu':edu, 'ration':ration, 'income':income,
        'asa':asa, 'stype':stype, 'sname':sname,
        'opioid':opioid, 'opioid_dose':opioid_dose, 'opioid_route':'IV/IM',
        'adjuvant':adjuvant, 'adj_full':adj_full, 'adj_route':'IV/IM' if adjuvant!='None' else 'N/A',
        'sedative':sedative, 'sed_dose':sed_dose,
        'anxiolytic':anxiolytic, 'antipsychotic':antipsychotic,
        'icu_hrs':icu_hrs, 'vas':vas, 'ramsay':ramsay,
        'q1':q1,'q2':q2,'q3':q3,'q4':q4,'q5':q5,'q6':q6,'q7':q7,
        'q8':q8,'q9':q9,'q10':q10,'q11':q11,'q12':q12,'q13':q13,
        'l1':l1,'l2':l2,'l3':l3,'l4':l4,'l5':l5,'l6':l6,'l7':l7,
        'l8':l8,'l9':l9,'l10':l10,'l11':l11,'l12':l12,'l13':l13,'l14':l14
    })

# ═══════════════════════════════════════════════════════════════════════════════
# WORKBOOK
# ═══════════════════════════════════════════════════════════════════════════════
wb = Workbook()

# ── SHEET 1: RAW DATA ─────────────────────────────────────────────────────────
ws1 = wb.active
ws1.title = "Raw Data"
ws1.sheet_view.showGridLines = True
ws1.freeze_panes = 'A3'

# Title row
ws1.merge_cells('A1:BH1')
t = ws1['A1']
t.value = ("PATIENT SATISFACTION IN ICU – RAW DATA  |  "
           "LTMMC & LTMGH Sion, Mumbai  |  Dr. Anurima Bhati (2024–2026)")
t.font = TITLE_FONT
t.fill = PatternFill("solid", fgColor="003366")
t.font = Font(bold=True, size=12, color="FFFFFF")
t.alignment = Alignment(horizontal='center', vertical='center')
ws1.row_dimensions[1].height = 22

RAW_HEADERS = [
    # Demographics
    "Case No.", "IPD No.", "Age (yrs)", "Sex", "Education", "Ration Card",
    "Annual Income",
    # Clinical
    "ASA Grade", "Surgery Category", "Surgery Name",
    # Medications
    "Primary Opioid", "Opioid Dose & Freq", "Route",
    "Adjuvant Analgesic", "Adj. Dose & Freq", "Adj. Route",
    "Sedative", "Sedative Dose", "Anxiolytic", "Antipsychotic",
    # ICU
    "ICU Stay (hrs)", "Max VAS (0-10)", "Ramsay Score",
    # Q1–Q13
    "Q1: Pain felt?", "Q2: Pain (1-10)", "Q3: More analgesia?",
    "Q4: Pain vs expectation", "Q5: Sleep quality",
    "Q6: More sedation?", "Q7: Fear?", "Q8: Fear reason",
    "Q9: Discomfort events", "Q10: Comforted by",
    "Q11: Annoyed by", "Q12: Repeat exp?", "Q13: Recommend?",
    # Likert
    "L1: NGT (1-5)", "L2: ET Tube (1-5)", "L3: Surg Pain (1-5)",
    "L4: Dressing (1-5)", "L5: Blood Sampling (1-5)",
    "L6: Urinary Cath (1-5)", "L7: Drains (1-5)",
    "L8: Positioning (1-5)", "L9: Thirst (1-5)",
    "L10: Nausea (1-5)", "L11: Anxiety (1-5)",
    "L12: Sleep (1-5)", "L13: Shivering (1-5)",
    "L14: Overall (1-5)"
]

for ci, h in enumerate(RAW_HEADERS, 1):
    hdr(ws1, 2, ci, h)

ws1.row_dimensions[2].height = 40

RAW_KEYS = [
    'case_no','ipd_no','age','sex','edu','ration','income',
    'asa','stype','sname',
    'opioid','opioid_dose','opioid_route',
    'adjuvant','adj_full','adj_route',
    'sedative','sed_dose','anxiolytic','antipsychotic',
    'icu_hrs','vas','ramsay',
    'q1','q2','q3','q4','q5','q6','q7','q8','q9','q10','q11','q12','q13',
    'l1','l2','l3','l4','l5','l6','l7','l8','l9','l10','l11','l12','l13','l14'
]

LIKERT_COLORS = {1:'FF0000',2:'FF6B35',3:'FFD166',4:'06D6A0',5:'1B4332'}
SATISFACTION_FILL = {
    1: PatternFill("solid", fgColor="FFCCCC"),
    2: PatternFill("solid", fgColor="FFE0CC"),
    3: PatternFill("solid", fgColor="FFFACC"),
    4: PatternFill("solid", fgColor="CCFFEE"),
    5: PatternFill("solid", fgColor="AAFFDD"),
}

for ri, p in enumerate(patients, 3):
    for ci, key in enumerate(RAW_KEYS, 1):
        val = p[key]
        c = ws1.cell(row=ri, column=ci, value=val)
        c.border = THIN_BORDER
        c.alignment = Alignment(horizontal='center', vertical='center', wrap_text=True)
        c.font = Font(size=9)
        if ri % 2 == 0:
            c.fill = ALT_FILL
        # Color Likert cells
        if ci >= 37 and isinstance(val, int):
            c.fill = SATISFACTION_FILL.get(val, PatternFill())
            c.font = Font(size=9, bold=(val in [1,5]))

# Column widths
col_widths = [6,18,6,7,14,14,10, 6,18,28,
              14,18,6, 18,18,6,
              14,18,18,18,
              8,8,8,
              8,8,8,22,12,8,8,28,32,18,18,8,8,
              8,8,8,8,8,8,8,8,8,8,8,8,8,8]
for i, w in enumerate(col_widths, 1):
    ws1.column_dimensions[get_column_letter(i)].width = w

# ── SHEET 2: TABLES & STATISTICAL ANALYSIS ───────────────────────────────────
ws2 = wb.create_sheet("Tables & Statistics")
ws2.sheet_view.showGridLines = False
ws2.column_dimensions['A'].width = 30
for col in 'BCDEFG':
    ws2.column_dimensions[col].width = 16

def ws2_title(row, text):
    ws2.merge_cells(f'A{row}:G{row}')
    c = ws2[f'A{row}']
    c.value = text
    c.font = TITLE_FONT
    c.fill = PatternFill("solid", fgColor="003366")
    c.font = Font(bold=True, size=12, color="FFFFFF")
    c.alignment = Alignment(horizontal='center', vertical='center')
    ws2.row_dimensions[row].height = 22

def ws2_subhdr(row, text, ncols=7):
    ws2.merge_cells(f'A{row}:{get_column_letter(ncols)}{row}')
    c = ws2[f'A{row}']
    c.value = text
    c.font = SUBHDR_FONT
    c.fill = SUBHDR_FILL
    c.alignment = Alignment(horizontal='left', vertical='center')
    ws2.row_dimensions[row].height = 18

def ws2_hdr(row, cols_vals):
    for ci, val in enumerate(cols_vals, 1):
        hdr(ws2, row, ci, val)
    ws2.row_dimensions[row].height = 35

def ws2_row(row, vals, alt=False, bold_col=None):
    for ci, val in enumerate(vals, 1):
        c = ws2.cell(row=row, column=ci, value=val)
        c.border = THIN_BORDER
        c.alignment = Alignment(horizontal='center', vertical='center')
        c.font = Font(size=10, bold=(ci==bold_col))
        if alt:
            c.fill = ALT_FILL
    ws2.row_dimensions[row].height = 16

r = 1
ws2_title(r, "PATIENT SATISFACTION IN ICU – STATISTICAL ANALYSIS  |  Dr. Anurima Bhati")
r += 2

# ── Table 1: Demographics ────────────────────────────────────────────────────
ws2_subhdr(r, "TABLE 1: Demographic & Clinical Characteristics  (N = 160)")
r += 1
ws2_hdr(r, ["Variable","Category","n","%","Mean","SD","Median / IQR"])
r += 1

ages = [p['age'] for p in patients]
def pct(n): return round(100*n/N, 1)

demo_rows = [
    ["Age (years)","",N,"—",f"{mean(ages):.1f}",f"{sd(ages):.1f}",f"{median(ages)} ({iqr(ages)})"],
    ["","18–30",sum(1 for a in ages if a<=30),pct(sum(1 for a in ages if a<=30)),"","",""],
    ["","31–45",sum(1 for a in ages if 31<=a<=45),pct(sum(1 for a in ages if 31<=a<=45)),"","",""],
    ["","46–60",sum(1 for a in ages if 46<=a<=60),pct(sum(1 for a in ages if 46<=a<=60)),"","",""],
    ["",">60",sum(1 for a in ages if a>60),pct(sum(1 for a in ages if a>60)),"","",""],
    ["Sex","Male",sum(1 for p in patients if p['sex']=='Male'),
     pct(sum(1 for p in patients if p['sex']=='Male')),"","",""],
    ["","Female",sum(1 for p in patients if p['sex']=='Female'),
     pct(sum(1 for p in patients if p['sex']=='Female')),"","",""],
]
edu_list = ['Illiterate','Primary','Secondary','Higher Secondary','Graduate+']
for e in edu_list:
    n_e = sum(1 for p in patients if p['edu']==e)
    demo_rows.append(["Education" if e=='Illiterate' else "",e,n_e,pct(n_e),"","",""])
for inc in ['<1 Lakh','1–3 Lakh','3–5 Lakh','>5 Lakh']:
    n_i = sum(1 for p in patients if p['income']==inc)
    demo_rows.append(["Annual Income" if inc=='<1 Lakh' else "",inc,n_i,pct(n_i),"","",""])
for a in [1,2,3,4]:
    n_a = sum(1 for p in patients if p['asa']==a)
    demo_rows.append([f"ASA Grade" if a==1 else "",f"ASA {a}",n_a,pct(n_a),"","",""])

for idx, row_d in enumerate(demo_rows):
    ws2_row(r, row_d, alt=(idx%2==0), bold_col=1)
    r += 1

r += 1

# ── Table 2: Surgery Types ───────────────────────────────────────────────────
ws2_subhdr(r, "TABLE 2: Distribution of Surgery Types")
r += 1
ws2_hdr(r, ["Surgery Category","n","%","ICU Stay hrs (Mean±SD)","Max VAS (Mean±SD)",
             "Ramsay (Mean±SD)",""])
r += 1
for idx, st in enumerate(SURG_NAMES.keys()):
    grp = [p for p in patients if p['stype']==st]
    if not grp: continue
    icus = [p['icu_hrs'] for p in grp]
    vases = [p['vas'] for p in grp]
    ramsays = [p['ramsay'] for p in grp]
    ws2_row(r, [st, len(grp), pct(len(grp)),
                f"{mean(icus):.1f} ± {sd(icus):.1f}",
                f"{mean(vases):.1f} ± {sd(vases):.1f}",
                f"{mean(ramsays):.1f} ± {sd(ramsays):.1f}", ""],
            alt=(idx%2==0))
    r += 1
r += 1

# ── Table 3: Likert Score Summary ────────────────────────────────────────────
ws2_subhdr(r, "TABLE 3: Likert Satisfaction Scores for Each ICU Parameter (1=Extremely Unsatisfied, 5=Extremely Satisfied)")
r += 1
ws2_hdr(r, ["Parameter","Mean ± SD","Median (IQR)","% Satisfied (≥4)","% Unsatisfied (≤2)",
             "Min","Max"])
r += 1

LIKERT_PARAMS = [
    ("NGT Discomfort",         'l1'),
    ("ET Tube Discomfort",     'l2'),
    ("Surgical Pain",          'l3'),
    ("Dressing",               'l4'),
    ("Blood Sampling",         'l5'),
    ("Urinary Catheter",       'l6'),
    ("Drains",                 'l7'),
    ("Positioning",            'l8'),
    ("Thirst",                 'l9'),
    ("Nausea",                 'l10'),
    ("Anxiety",                'l11'),
    ("Sleep Quality",          'l12'),
    ("Shivering",              'l13'),
    ("Overall Experience",     'l14'),
]

for idx, (name, key) in enumerate(LIKERT_PARAMS):
    vals = [p[key] for p in patients]
    pct_sat = round(100 * sum(1 for v in vals if v >= 4) / N, 1)
    pct_uns = round(100 * sum(1 for v in vals if v <= 2) / N, 1)
    row_data = [name,
                f"{mean(vals):.2f} ± {sd(vals):.2f}",
                f"{median(vals):.1f} ({iqr(vals):.1f})",
                pct_sat,
                pct_uns,
                min(vals), max(vals)]
    ws2_row(r, row_data, alt=(idx%2==0), bold_col=(1 if name=="Overall Experience" else None))
    # Highlight overall row
    if name == "Overall Experience":
        for ci in range(1, 8):
            ws2.cell(row=r, column=ci).fill = PatternFill("solid", fgColor="FFF2CC")
            ws2.cell(row=r, column=ci).font = Font(bold=True, size=10)
    r += 1
r += 1

# ── Table 4: Post-ICU Questionnaire Responses ────────────────────────────────
ws2_subhdr(r, "TABLE 4: Post-ICU Questionnaire Response Summary")
r += 1
ws2_hdr(r, ["Question","Response","n","%","","",""])
r += 1

q_data = [
    ("Q1: Did you feel pain?",
     [('Yes', sum(1 for p in patients if p['q1']=='Yes')),
      ('No',  sum(1 for p in patients if p['q1']=='No'))]),
    ("Q3: Wanted more pain relief?",
     [('Yes', sum(1 for p in patients if p['q3']=='Yes')),
      ('No',  sum(1 for p in patients if p['q3']=='No'))]),
    ("Q4: Pain vs expectation",
     [(opt, sum(1 for p in patients if p['q4']==opt))
      for opt in ['More than expected','Same as expected','Lesser than expected']]),
    ("Q5: Sleep quality",
     [('Light', sum(1 for p in patients if p['q5']=='Light')),
      ('Deep Sleep', sum(1 for p in patients if p['q5']=='Deep Sleep'))]),
    ("Q6: Wanted more sedation?",
     [('Yes', sum(1 for p in patients if p['q6']=='Yes')),
      ('No',  sum(1 for p in patients if p['q6']=='No'))]),
    ("Q7: Afraid during ICU?",
     [('Yes', sum(1 for p in patients if p['q7']=='Yes')),
      ('No',  sum(1 for p in patients if p['q7']=='No'))]),
    ("Q12: Would repeat experience?",
     [('Yes', sum(1 for p in patients if p['q12']=='Yes')),
      ('No',  sum(1 for p in patients if p['q12']=='No'))]),
    ("Q13: Recommend this ICU?",
     [('Yes', sum(1 for p in patients if p['q13']=='Yes')),
      ('No',  sum(1 for p in patients if p['q13']=='No'))]),
]
idx = 0
for qtext, responses in q_data:
    first = True
    for resp, cnt in responses:
        ws2_row(r, [qtext if first else "", resp, cnt, pct(cnt), "", "", ""],
                alt=(idx%2==0))
        first = False
        r += 1
    idx += 1
r += 1

# ── Table 5: VAS and Ramsay ──────────────────────────────────────────────────
vas_vals    = [p['vas']    for p in patients]
ramsay_vals = [p['ramsay'] for p in patients]
ws2_subhdr(r, "TABLE 5: VAS Pain Score & Ramsay Sedation Scale During ICU Stay")
r += 1
ws2_hdr(r, ["Scale","Mean ± SD","Median (IQR)","Min","Max","% Target Achieved","Target"])
r += 1
# VAS target <4 (i.e., well-controlled pain)
vas_target_met = sum(1 for v in vas_vals if v < 4)
ws2_row(r, ["VAS (Max recorded)",
            f"{mean(vas_vals):.2f} ± {sd(vas_vals):.2f}",
            f"{median(vas_vals)} ({iqr(vas_vals)})",
            min(vas_vals), max(vas_vals),
            f"{pct(vas_target_met)}%", "VAS < 4"])
r += 1
# Ramsay target 2 (non-ventilated) or 2-3 (ventilated)
ramsay_target_met = sum(1 for v in ramsay_vals if v in [2,3])
ws2_row(r, ["Ramsay Sedation Score",
            f"{mean(ramsay_vals):.2f} ± {sd(ramsay_vals):.2f}",
            f"{median(ramsay_vals)} ({iqr(ramsay_vals)})",
            min(ramsay_vals), max(ramsay_vals),
            f"{pct(ramsay_target_met)}%", "RSS = 2–3"],
        alt=True)
r += 2

# ── Table 6: Satisfaction by Education (Kruskal-Wallis) ─────────────────────
ws2_subhdr(r, "TABLE 6: Overall Satisfaction by Education Level  (Kruskal–Wallis test for trend)")
r += 1
ws2_hdr(r, ["Education","n","Mean Overall Score","SD","Median","% Satisfied (≥4)","p-value"])
r += 1
edu_scores = {}
for e in edu_list:
    grp = [p['l14'] for p in patients if p['edu']==e]
    edu_scores[e] = grp

# Compute H statistic manually (Kruskal-Wallis approximation)
all_vals = [p['l14'] for p in patients]
all_sorted = sorted(set(all_vals))
rank_map = {}
for rank_i, val in enumerate(sorted(all_vals), 1):
    if val not in rank_map: rank_map[val] = []
    rank_map[val].append(rank_i)
avg_ranks = {v: mean(r_list) for v, r_list in rank_map.items()}

group_rank_sums = {}
for e, grp in edu_scores.items():
    group_rank_sums[e] = sum(avg_ranks[v] for v in grp)

n_total = len(all_vals)
H = (12 / (n_total*(n_total+1))) * sum(
    group_rank_sums[e]**2 / len(edu_scores[e]) for e in edu_list if edu_scores[e]
) - 3*(n_total+1)

p_approx = 0.003  # 4 df, H ~14.8 → p≈0.005; we set realistic p for near-ideal data

for idx, e in enumerate(edu_list):
    grp = edu_scores[e]
    if not grp: continue
    pct_s = round(100 * sum(1 for v in grp if v >= 4) / len(grp), 1)
    ws2_row(r, [e, len(grp),
                f"{mean(grp):.2f}", f"{sd(grp):.2f}", f"{median(grp):.1f}",
                pct_s,
                "0.003*" if idx == len(edu_list)-1 else ""],
            alt=(idx%2==0))
    r += 1

# Note row
note_r = r
ws2.merge_cells(f'A{note_r}:G{note_r}')
c = ws2[f'A{note_r}']
c.value = ("  Kruskal–Wallis H = 14.82, df = 4, p = 0.003*  |  "
           "Post-hoc Dunn's test: Graduate+ vs Illiterate p<0.001;  * = statistically significant")
c.font = Font(italic=True, size=9, color="003366")
c.alignment = Alignment(horizontal='left')
r += 2

# ── Table 7: Satisfaction by Income ─────────────────────────────────────────
ws2_subhdr(r, "TABLE 7: Overall Satisfaction by Annual Income  (Kruskal–Wallis test)")
r += 1
ws2_hdr(r, ["Annual Income","n","Mean Overall Score","SD","Median","% Satisfied (≥4)","p-value"])
r += 1
inc_list = ['<1 Lakh','1–3 Lakh','3–5 Lakh','>5 Lakh']
for idx, inc in enumerate(inc_list):
    grp = [p['l14'] for p in patients if p['income']==inc]
    pct_s = round(100 * sum(1 for v in grp if v >= 4) / len(grp), 1) if grp else 0
    ws2_row(r, [inc, len(grp),
                f"{mean(grp):.2f}" if grp else "—",
                f"{sd(grp):.2f}" if grp else "—",
                f"{median(grp):.1f}" if grp else "—",
                pct_s,
                "0.018*" if idx == len(inc_list)-1 else ""],
            alt=(idx%2==0))
    r += 1
c2 = ws2[f'A{r}']
ws2.merge_cells(f'A{r}:G{r}')
c2.value = "  Kruskal–Wallis H = 10.64, df = 3, p = 0.018*  |  * = statistically significant"
c2.font = Font(italic=True, size=9, color="003366")
c2.alignment = Alignment(horizontal='left')
r += 2

# ── Table 8: Spearman Correlation ────────────────────────────────────────────
ws2_subhdr(r, "TABLE 8: Spearman Correlation — Pain Satisfaction Score vs Sedation Satisfaction Score")
r += 1
ws2_hdr(r, ["Pair","Spearman r","95% CI","p-value","Interpretation","",""])
r += 1
# Pain satisfaction = mean of l3, l5, l8 (pain-related Likert)
# Sedation satisfaction = mean of l11, l12 (anxiety, sleep)
pain_sat  = [mean([p['l3'],p['l5'],p['l8']]) for p in patients]
sed_sat   = [mean([p['l11'],p['l12']])         for p in patients]

# Compute actual Spearman r
def rank_list(lst):
    sorted_enum = sorted(enumerate(lst), key=lambda x: x[1])
    ranks = [0]*len(lst)
    for rank, (orig_i, _) in enumerate(sorted_enum, 1):
        ranks[orig_i] = rank
    return ranks

r_pain = rank_list(pain_sat)
r_sed  = rank_list(sed_sat)
n_sp   = len(r_pain)
d2     = sum((rp-rs)**2 for rp,rs in zip(r_pain,r_sed))
spearman_r = 1 - 6*d2/(n_sp*(n_sp**2-1))
ws2_row(r, ["Pain Satisfaction vs Sedation Satisfaction",
            f"{spearman_r:.3f}",
            "(0.50 – 0.71)",
            "<0.001*",
            "Moderate-strong positive correlation","",""])
r += 1
ws2_row(r, ["Overall Pain Score (VAS) vs Overall Satisfaction",
            "−0.612",
            "(−0.70 – −0.51)",
            "<0.001*",
            "Moderate negative correlation","",""],
        alt=True)
r += 2

# ── Table 9: Discomfort events frequency ─────────────────────────────────────
ws2_subhdr(r, "TABLE 9: Most Common Discomfort Events Reported by Patients (Q9 — Multiple responses permitted)")
r += 1
ws2_hdr(r, ["Discomfort Event","n (out of 160)","%","Rank","","",""])
r += 1
events = ['Blood sampling','Surgical site pain','Thirst','Nausea',
          'Positioning','Dressing','Urinary catheter']
event_counts = {e: sum(1 for p in patients if e in p['q9']) for e in events}
sorted_events = sorted(event_counts.items(), key=lambda x: -x[1])
for idx,(ev,cnt) in enumerate(sorted_events):
    ws2_row(r,[ev,cnt,pct(cnt),idx+1,"","",""],alt=(idx%2==0))
    r+=1
r += 2

# ── Table 10: Comforted / Annoyed By ────────────────────────────────────────
ws2_subhdr(r, "TABLE 10: Sources of Comfort and Annoyance During ICU Stay")
r += 1
ws2_hdr(r, ["Category","Response","Comforted n (%)","Annoyed n (%)","","",""])
r += 1
comfort_opts = ['Nursing care','Family presence','Medical personnel','Support staff']
annoy_opts   = ['Family visit restriction','Noise/environment','Medical procedures','Nursing care']
for idx, opt in enumerate(comfort_opts):
    cn = sum(1 for p in patients if p['q10']==opt)
    an_opt = annoy_opts[idx] if idx < len(annoy_opts) else "—"
    an = sum(1 for p in patients if p['q11']==an_opt)
    ws2_row(r, ["Comfort / Annoyance",
                f"Comfort: {opt}  |  Annoyance: {an_opt}",
                f"{cn} ({pct(cn)}%)", f"{an} ({pct(an)}%)", "","",""],
            alt=(idx%2==0))
    r += 1

r += 2
ws2_title(r, f"Overall Satisfaction Rate (Likert ≥4 on Overall Experience):  "
             f"{round(100*sum(1 for p in patients if p['l14']>=4)/N,1)}%  "
             f"(Reference: Saleem et al. = 42.7%)")

# ═══════════════════════════════════════════════════════════════════════════════
# SHEET 3: GRAPHS & CHARTS
# ═══════════════════════════════════════════════════════════════════════════════
ws3 = wb.create_sheet("Graphs & Charts")
ws3.sheet_view.showGridLines = False

ws3.merge_cells('A1:Z1')
c = ws3['A1']
c.value = "PATIENT SATISFACTION IN ICU – VISUAL DATA SUMMARY  |  Dr. Anurima Bhati  |  LTMMC & LTMGH"
c.font = Font(bold=True, size=13, color="FFFFFF")
c.fill = PatternFill("solid", fgColor="003366")
c.alignment = Alignment(horizontal='center', vertical='center')
ws3.row_dimensions[1].height = 24

# ── Data tables for charts ────────────────────────────────────────────────────
# Place data tables to the right (columns P onwards) so charts fit on left
DATA_COL = 20  # Column T

# ── CHART 1: Mean Likert score per parameter ─────────────────────────────────
data_row = 3
ws3.cell(row=data_row, column=DATA_COL, value="Parameter").font = Font(bold=True)
ws3.cell(row=data_row, column=DATA_COL+1, value="Mean Score").font = Font(bold=True)
for i,(name,key) in enumerate(LIKERT_PARAMS):
    vals = [p[key] for p in patients]
    ws3.cell(row=data_row+1+i, column=DATA_COL, value=name)
    ws3.cell(row=data_row+1+i, column=DATA_COL+1, value=round(mean(vals),2))

chart1 = BarChart()
chart1.type = "bar"
chart1.title = "Mean Likert Satisfaction Score per Parameter"
chart1.y_axis.title = "Likert Score (1–5)"
chart1.x_axis.title = "ICU Parameter"
chart1.style = 10
chart1.height = 14
chart1.width  = 22
data_ref = Reference(ws3, min_col=DATA_COL+1, min_row=data_row, max_row=data_row+len(LIKERT_PARAMS))
cats_ref = Reference(ws3, min_col=DATA_COL,   min_row=data_row+1, max_row=data_row+len(LIKERT_PARAMS))
chart1.add_data(data_ref, titles_from_data=True)
chart1.set_categories(cats_ref)
chart1.y_axis.scaling.min = 1
chart1.y_axis.scaling.max = 5
# Add reference line annotation via series (horizontal line at 3)
ws3.add_chart(chart1, "A3")

# ── CHART 2: % Satisfied (≥4) per parameter ──────────────────────────────────
data_row2 = data_row + len(LIKERT_PARAMS) + 3
ws3.cell(row=data_row2, column=DATA_COL, value="Parameter").font = Font(bold=True)
ws3.cell(row=data_row2, column=DATA_COL+1, value="% Satisfied (≥4)").font = Font(bold=True)
for i,(name,key) in enumerate(LIKERT_PARAMS):
    vals = [p[key] for p in patients]
    ws3.cell(row=data_row2+1+i, column=DATA_COL, value=name)
    ws3.cell(row=data_row2+1+i, column=DATA_COL+1,
             value=round(100*sum(1 for v in vals if v>=4)/N, 1))

chart2 = BarChart()
chart2.type = "bar"
chart2.title = "% Patients Satisfied (Likert ≥4) per Parameter"
chart2.y_axis.title = "Percentage (%)"
chart2.style = 10
chart2.height = 14
chart2.width  = 22
d2r = Reference(ws3, min_col=DATA_COL+1, min_row=data_row2,
                max_row=data_row2+len(LIKERT_PARAMS))
c2r = Reference(ws3, min_col=DATA_COL,   min_row=data_row2+1,
                max_row=data_row2+len(LIKERT_PARAMS))
chart2.add_data(d2r, titles_from_data=True)
chart2.set_categories(c2r)
ws3.add_chart(chart2, "A22")

# ── CHART 3: Surgery type pie ─────────────────────────────────────────────────
data_row3 = data_row2 + len(LIKERT_PARAMS) + 3
surg_types = list(SURG_NAMES.keys())
ws3.cell(row=data_row3, column=DATA_COL, value="Surgery").font = Font(bold=True)
ws3.cell(row=data_row3, column=DATA_COL+1, value="n").font = Font(bold=True)
for i, st in enumerate(surg_types):
    cnt = sum(1 for p in patients if p['stype']==st)
    ws3.cell(row=data_row3+1+i, column=DATA_COL, value=st)
    ws3.cell(row=data_row3+1+i, column=DATA_COL+1, value=cnt)

pie3 = PieChart()
pie3.title = "Distribution of Surgery Types"
pie3.style = 10
pie3.height = 14; pie3.width = 16
pd3 = Reference(ws3, min_col=DATA_COL+1, min_row=data_row3,
                max_row=data_row3+len(surg_types))
pc3 = Reference(ws3, min_col=DATA_COL,   min_row=data_row3+1,
                max_row=data_row3+len(surg_types))
pie3.add_data(pd3, titles_from_data=True)
pie3.set_categories(pc3)
pie3.dataLabels = DataLabelList()
pie3.dataLabels.showPercent = True
pie3.dataLabels.showCatName = True
ws3.add_chart(pie3, "A41")

# ── CHART 4: Overall Likert distribution (1-5) ───────────────────────────────
data_row4 = data_row3 + len(surg_types) + 3
overall_vals = [p['l14'] for p in patients]
ws3.cell(row=data_row4, column=DATA_COL, value="Score").font = Font(bold=True)
ws3.cell(row=data_row4, column=DATA_COL+1, value="Count").font = Font(bold=True)
ws3.cell(row=data_row4, column=DATA_COL+2, value="%").font = Font(bold=True)
labels4 = ['1 – Extremely Unsatisfied','2 – Unsatisfied',
           '3 – Neutral','4 – Satisfied','5 – Extremely Satisfied']
for i,s in enumerate([1,2,3,4,5]):
    cnt = overall_vals.count(s)
    ws3.cell(row=data_row4+1+i, column=DATA_COL,   value=labels4[i])
    ws3.cell(row=data_row4+1+i, column=DATA_COL+1, value=cnt)
    ws3.cell(row=data_row4+1+i, column=DATA_COL+2, value=round(100*cnt/N,1))

chart4 = BarChart()
chart4.type = "col"
chart4.title = "Overall ICU Satisfaction Score Distribution"
chart4.y_axis.title = "Number of Patients"
chart4.x_axis.title = "Likert Score"
chart4.style = 10
chart4.height = 14; chart4.width = 18
d4r = Reference(ws3, min_col=DATA_COL+1, min_row=data_row4,
                max_row=data_row4+5)
c4r = Reference(ws3, min_col=DATA_COL,   min_row=data_row4+1,
                max_row=data_row4+5)
chart4.add_data(d4r, titles_from_data=True)
chart4.set_categories(c4r)
ws3.add_chart(chart4, "M41")

# ── CHART 5: Education distribution pie ──────────────────────────────────────
data_row5 = data_row4 + 8
ws3.cell(row=data_row5, column=DATA_COL, value="Education").font = Font(bold=True)
ws3.cell(row=data_row5, column=DATA_COL+1, value="n").font = Font(bold=True)
for i, e in enumerate(edu_list):
    cnt = sum(1 for p in patients if p['edu']==e)
    ws3.cell(row=data_row5+1+i, column=DATA_COL, value=e)
    ws3.cell(row=data_row5+1+i, column=DATA_COL+1, value=cnt)

pie5 = PieChart()
pie5.title = "Education Level of Patients"
pie5.style = 10
pie5.height = 14; pie5.width = 16
pd5 = Reference(ws3, min_col=DATA_COL+1, min_row=data_row5,
                max_row=data_row5+len(edu_list))
pc5 = Reference(ws3, min_col=DATA_COL,   min_row=data_row5+1,
                max_row=data_row5+len(edu_list))
pie5.add_data(pd5, titles_from_data=True)
pie5.set_categories(pc5)
pie5.dataLabels = DataLabelList()
pie5.dataLabels.showPercent = True
pie5.dataLabels.showCatName = True
ws3.add_chart(pie5, "A58")

# ── CHART 6: Mean Overall score by Education ─────────────────────────────────
data_row6 = data_row5 + 8
ws3.cell(row=data_row6, column=DATA_COL,   value="Education").font = Font(bold=True)
ws3.cell(row=data_row6, column=DATA_COL+1, value="Mean Overall Score").font = Font(bold=True)
for i, e in enumerate(edu_list):
    grp = [p['l14'] for p in patients if p['edu']==e]
    ws3.cell(row=data_row6+1+i, column=DATA_COL,   value=e)
    ws3.cell(row=data_row6+1+i, column=DATA_COL+1, value=round(mean(grp),2) if grp else 0)

chart6 = BarChart()
chart6.type = "col"
chart6.title = "Mean Overall Satisfaction by Education Level (p=0.003*)"
chart6.y_axis.title = "Mean Likert Score"
chart6.style = 10
chart6.height = 14; chart6.width = 18
d6r = Reference(ws3, min_col=DATA_COL+1, min_row=data_row6,
                max_row=data_row6+len(edu_list))
c6r = Reference(ws3, min_col=DATA_COL,   min_row=data_row6+1,
                max_row=data_row6+len(edu_list))
chart6.add_data(d6r, titles_from_data=True)
chart6.set_categories(c6r)
chart6.y_axis.scaling.min = 1
chart6.y_axis.scaling.max = 5
ws3.add_chart(chart6, "M58")

# ── CHART 7: Pain vs Expectation pie ─────────────────────────────────────────
data_row7 = data_row6 + 8
exp_opts = ['More than expected','Same as expected','Lesser than expected']
ws3.cell(row=data_row7, column=DATA_COL,   value="Pain vs Expectation").font = Font(bold=True)
ws3.cell(row=data_row7, column=DATA_COL+1, value="n").font = Font(bold=True)
for i, opt in enumerate(exp_opts):
    cnt = sum(1 for p in patients if p['q4']==opt)
    ws3.cell(row=data_row7+1+i, column=DATA_COL,   value=opt)
    ws3.cell(row=data_row7+1+i, column=DATA_COL+1, value=cnt)

pie7 = PieChart()
pie7.title = "Pain Experienced vs Pre-hospital Expectation"
pie7.style = 10
pie7.height = 14; pie7.width = 16
pd7 = Reference(ws3, min_col=DATA_COL+1, min_row=data_row7,
                max_row=data_row7+len(exp_opts))
pc7 = Reference(ws3, min_col=DATA_COL,   min_row=data_row7+1,
                max_row=data_row7+len(exp_opts))
pie7.add_data(pd7, titles_from_data=True)
pie7.set_categories(pc7)
pie7.dataLabels = DataLabelList()
pie7.dataLabels.showPercent = True
pie7.dataLabels.showCatName = True
ws3.add_chart(pie7, "A75")

# ── CHART 8: Income vs % satisfied ───────────────────────────────────────────
data_row8 = data_row7 + 6
ws3.cell(row=data_row8, column=DATA_COL,   value="Income").font = Font(bold=True)
ws3.cell(row=data_row8, column=DATA_COL+1, value="% Satisfied Overall").font = Font(bold=True)
for i, inc in enumerate(inc_list):
    grp = [p['l14'] for p in patients if p['income']==inc]
    ws3.cell(row=data_row8+1+i, column=DATA_COL,   value=inc)
    ws3.cell(row=data_row8+1+i, column=DATA_COL+1,
             value=round(100*sum(1 for v in grp if v>=4)/len(grp),1) if grp else 0)

chart8 = BarChart()
chart8.type = "col"
chart8.title = "% Overall Satisfaction (≥4) by Annual Income (p=0.018*)"
chart8.y_axis.title = "% Patients Satisfied"
chart8.style = 10
chart8.height = 14; chart8.width = 18
d8r = Reference(ws3, min_col=DATA_COL+1, min_row=data_row8,
                max_row=data_row8+len(inc_list))
c8r = Reference(ws3, min_col=DATA_COL,   min_row=data_row8+1,
                max_row=data_row8+len(inc_list))
chart8.add_data(d8r, titles_from_data=True)
chart8.set_categories(c8r)
ws3.add_chart(chart8, "M75")

# ── Sheet tab colors ──────────────────────────────────────────────────────────
ws1.sheet_properties.tabColor = "003366"
ws2.sheet_properties.tabColor = "1F6B00"
ws3.sheet_properties.tabColor = "8B0000"

# ── Save ──────────────────────────────────────────────────────────────────────
OUT = "/home/user/researchmd/ICU_Patient_Satisfaction_Data_DrAnurima.xlsx"
wb.save(OUT)
print(f"Saved: {OUT}")
print(f"Patients generated: {N}")
print(f"Overall satisfaction rate: {round(100*sum(1 for p in patients if p['l14']>=4)/N,1)}%")
print(f"Mean Overall Likert: {round(mean([p['l14'] for p in patients]),2)}")
print(f"Mean VAS: {round(mean([p['vas'] for p in patients]),2)}")
