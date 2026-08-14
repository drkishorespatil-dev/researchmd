# Teaching drafts — design variations on one clinical question

Two rewrites of the same source randomised controlled trial (fractionated versus bolus
intrathecal hyperbaric bupivacaine with fentanyl for elective lower limb surgery), each
holding the clinical content fixed and changing only the study design. Both are learning
exercises. **Neither is for submission** — see the red note at the end of each document.

| | Source RCT | Comparative non-randomised | Observational cohort |
|---|---|---|---|
| Who decides technique | Random sequence | Investigators, by a fixed rule | The attending anaesthesiologist |
| Interventional? | Yes | Yes | No |
| Guideline | CONSORT 2010 | TREND | STROBE |
| Primary outcome | Duration of sensory block | **Duration of sensory block** (unchanged) | Intraoperative hypotension |
| Primary threat | — | Selection bias | Confounding by indication |
| Registration | Mandatory | Mandatory | Recommended |
| Risk-of-bias tool | RoB 2 | ROBINS-I | ROBINS-I |

The comparative version is the closer of the two to the original: it keeps the endpoint,
the sample size, the blinding and every reported result, and changes only the allocation
machinery. The observational version goes further, and had to move the primary endpoint
because an unblinded observer measuring a block characteristic is far more exposed to
measurement bias than a monitor-derived haemodynamic endpoint.

## Files

```
TCMJ_comparative_nonrandomised_..._TEACHING_DRAFT.docx   non-randomised comparative draft
TCMJ_observational_cohort_..._TEACHING_DRAFT.docx        observational cohort draft
figures/                       PNG (400 dpi, embedded) + vector PDF
  Figure1-6_*.png/pdf          observational draft
  C_Figure1-5_*.png/pdf        comparative draft
comparative-nonrandomised-teaching-draft/   content2.js, tables2.js, figures2.py
observational-study-teaching-draft/         content.js, tables.js, figures.py, build.js
```

## Rebuilding

```
npm install docx
pip install matplotlib numpy

# figures first — the build embeds them
python3 observational-study-teaching-draft/figures.py
python3 comparative-nonrandomised-teaching-draft/figures2.py

# then the documents
node build.js out.docx ./content.js  ./tables.js     # observational
node build.js out.docx ./content2.js ./tables2.js    # comparative
```

`build.js` takes the output path plus the two content modules, so both drafts share one
renderer. Figure scripts write PNG and PDF side by side into `figures/`.

## Figures

Palette is the dataviz categorical slots 1 (blue, fractionated) and 2 (orange, bolus),
validated for colour-vision-deficiency separation before use (worst adjacent pair
ΔE 24.7 under protanopia against a floor of 8). Status red/green appears only in the
comparative draft's Figure 2, always paired with a text label rather than carrying
meaning by colour alone.
