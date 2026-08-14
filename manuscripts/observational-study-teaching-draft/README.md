# Observational cohort teaching draft

A comparative observational (prospective cohort) redesign of the fractionated-vs-bolus
subarachnoid block RCT, written as a learning exercise in observational study design and
in final-pass academic humanization.

**All data in the manuscript are synthetic.** The document is not for submission. See the
red note at the end of the .docx.

## Files

- `content.js` — front matter, abstract, IMRaD text, references
- `tables.js`  — Tables 1–6, figure legends, design-notes appendix, closing red note
- `build.js`   — renders the blocks to .docx via docx-js

## Rebuild

```
npm install docx
node build.js ../TCMJ_observational_cohort_fractionated_vs_bolus_TEACHING_DRAFT.docx
```

## Figures

`figures.py` generates all six figures to `figures/` as 400 dpi PNG (embedded in the
.docx) and vector PDF (for submission-quality output). Palette: dataviz categorical
slots 1 and 2, validated for colour-vision-deficiency separation before use.

| Figure | Form | What it shows |
|---|---|---|
| 1 | Directed acyclic graph | The causal model: what is adjusted for, what is a mediator, what is unmeasured |
| 2 | STROBE flow | Participant flow, and why the cohorts are unequal |
| 3 | Love plot | Covariate balance before/after IPTW — operator experience is the one imbalance |
| 4 | Line + CI ribbon | Mean arterial pressure trajectories |
| 5 | Line + CI ribbon | Heart rate trajectories |
| 6 | Forest plot | The primary estimate across all six analyses, plus secondary outcomes |

```
pip install matplotlib numpy
python3 figures.py
```
