// Tables, figures, appendix and closing note for the non-randomised comparative version.

module.exports = [

{t:'pagebreak'},
{t:'h1', text:'Tables'},

{t:'tcap', text:'Table 1. Baseline characteristics of the study groups.'},
{t:'table', widths:[3000, 1750, 1750, 1400, 1300], rows:[
 ['Characteristic','Group F (n = 50)','Group B (n = 50)','Total (%)','SMD'],
 ['Age 18–25 years','12','10','22 (22)','0.11'],
 ['Age 26–35 years','18','20','38 (38)','0.08'],
 ['Age 36–45 years','14','13','27 (27)','0.04'],
 ['Age 46–50 years','6','7','13 (13)','0.06'],
 ['Male','28','30','58 (58)','0.08'],
 ['Female','22','20','42 (42)','0.08'],
 ['BMI < 20 kg/m²','8','7','15 (15)','0.06'],
 ['BMI 20–24.9 kg/m²','20','22','42 (42)','0.08'],
 ['BMI 25–29.9 kg/m²','15','14','29 (29)','0.05'],
 ['BMI 30–35 kg/m²','7','7','14 (14)','0.00'],
 ['ASA physical status I','32','30','62 (62)','0.08'],
 ['ASA physical status II','18','20','38 (38)','0.08'],
 ['Baseline heart rate (beats/min)','78 ± 7','80 ± 8','—','0.27'],
 ['Baseline mean arterial pressure (mmHg)','93 ± 7','92 ± 6','—','0.15'],
]},
{t:'small', text:'Data are n, n (%) or mean ± standard deviation. ASA = American Society of Anesthesiologists; BMI = body mass index; SMD = standardised mean difference. Significance tests of baseline characteristics are not reported. In a non-randomised study the relevant question is the size of any imbalance, not whether it reaches statistical significance, and the standardised mean difference answers that question directly. Baseline heart rate carries the largest imbalance and was included as a covariate in the adjusted analysis.'},

{t:'tcap', text:'Table 2. Sensory and motor block characteristics.'},
{t:'table', widths:[2500, 1500, 1500, 2200, 900], rows:[
 ['Variable','Group F (n = 50)','Group B (n = 50)','Mean difference (95% CI)','p'],
 ['Duration of sensory block (min) — primary outcome','168 ± 22','142 ± 20','26.0 (17.8 to 34.2)','<0.001'],
 ['Duration of motor block (min)','150 ± 25','128 ± 23','22.0 (12.6 to 31.4)','<0.001'],
 ['Sensory onset time (min)','4.8 ± 1.2','3.6 ± 1.0','1.2 (0.77 to 1.63)','<0.001'],
 ['Motor onset time (min)','6.2 ± 1.5','4.9 ± 1.3','1.3 (0.75 to 1.85)','<0.001'],
]},
{t:'small', text:'Data are mean ± standard deviation. CI = confidence interval. Mean difference is Group F minus Group B, so a positive value denotes a longer or slower value with the fractionated technique. Comparisons by two-sample t test.'},

{t:'tcap', text:'Table 3. Peak sensory level attained at 30 minutes.'},
{t:'table', widths:[3000, 2100, 2100, 900], rows:[
 ['Peak sensory level','Group F (n = 50)','Group B (n = 50)','p'],
 ['T6','5 (10)','10 (20)',''],
 ['T8','20 (40)','28 (56)',''],
 ['T10','25 (50)','12 (24)','0.010'],
]},
{t:'small', text:'Data are n (%). Comparison of the distribution by Mann–Whitney U test.'},

{t:'tcap', text:'Table 4. Degree of motor block at 30 minutes (modified Bromage scale).'},
{t:'table', widths:[3000, 2100, 2100, 900], rows:[
 ['Modified Bromage grade','Group F (n = 50)','Group B (n = 50)','p'],
 ['Grade 2','10 (20)','14 (28)',''],
 ['Grade 3','40 (80)','36 (72)','0.320'],
]},
{t:'small', text:'Data are n (%). Grades as defined in Section 2.6. Comparison by Mann–Whitney U test.'},

{t:'tcap', text:'Table 5. Adverse events and rescue interventions.'},
{t:'table', widths:[2800, 2100, 2100, 1100], rows:[
 ['Event','Group F (n = 50)','Group B (n = 50)','p'],
 ['Hypotension','0 (0)','12 (24)','<0.001'],
 ['Patients receiving mephentermine','0 (0)','12 (24)','<0.001'],
 ['Bradycardia','0 (0)','4 (8)','0.117'],
 ['Patients receiving atropine','0 (0)','4 (8)','0.117'],
 ['Nausea','1 (2)','10 (20)','0.008'],
 ['Vomiting','0 (0)','5 (10)','0.056'],
 ['Chills','0 (0)','0 (0)','—'],
 ['Itching','0 (0)','0 (0)','—'],
 ['Urinary retention','0 (0)','0 (0)','—'],
 ['Desaturation','0 (0)','0 (0)','—'],
]},
{t:'small', text:'Data are n (%). Comparisons by Pearson chi-square test or Fisher exact test as appropriate. [FILL: add the time from intrathecal injection to the first hypotensive and first bradycardic episode, and the total crystalloid rescue volume.]'},

{t:'tcap', text:'Table 6. Primary outcome across the pre-specified analyses.'},
{t:'table', widths:[3600, 2500, 2000, 900], rows:[
 ['Analysis','Mean difference (95% CI)','n analysed','p'],
 ['Per protocol, unadjusted (primary analysis)','26.0 (17.8 to 34.2)','100','<0.001'],
 ['Adjusted for baseline characteristics (ANCOVA)','24.3 (16.0 to 32.6)','100','<0.001'],
 ['Including the two participants who received the technique other than that assigned','25.1 (16.9 to 33.3)','102','<0.001'],
]},
{t:'small', text:'CI = confidence interval. Duration of sensory blockade in minutes, Group F minus Group B. ANCOVA covariates were age, sex, body mass index, ASA physical status, baseline heart rate and baseline mean arterial pressure. The third row is a sensitivity analysis and should not be described as an intention-to-treat analysis; see Section 3.8.'},

{t:'pagebreak'},
{t:'h1', text:'Figures'},

{t:'figure', file:'C_Figure1_TREND_flow.png', w:540, h:520},
{t:'fcap', text:'Figure 1. TREND flow diagram showing the number of patients assessed for eligibility, excluded before allocation with reasons, allocated by alternate assignment, withdrawn after allocation with reasons, and analysed in each group. Two of the six post-allocation withdrawals arose because the operating list order changed after assignment, which is the specific failure mode that an unconcealed alternating sequence permits.'},

{t:'figure', file:'C_Figure2_allocation.png', w:595, h:400},
{t:'fcap', text:'Figure 2. The alternate allocation scheme and the point at which selection bias can enter. Assignment follows position on the operating list, so the allocation of every participant is fully determined by the one before and the next assignment is always foreseeable. Because the order of an operating list is routinely adjusted for urgency, equipment and surgeon availability, any such adjustment made after assignment also changes who receives which technique. The lower panel lists the four safeguards of a randomised trial and marks which are present in this study.'},

{t:'figure', file:'C_Figure3_forest.png', w:595, h:330},
{t:'fcap', text:'Figure 3. Mean differences between groups with 95% confidence intervals, Group F minus Group B. Duration outcomes (left) and onset outcomes (right) are plotted on separate scales because they differ by an order of magnitude. The diamond marks the primary outcome. The three duration-of-sensory-block estimates show the primary analysis, the covariate-adjusted analysis and the sensitivity analysis retaining the two protocol deviations; adjustment moves the estimate by 1.7 minutes.'},

{t:'figure', file:'C_Figure4_HR.png', w:595, h:378},
{t:'fcap', text:'Figure 4. Heart rate over time in the fractionated (Group F) and bolus (Group B) groups. Values are mean ± standard deviation, n = 50 per group at the earlier time points. Time zero denotes the baseline recording made immediately before intrathecal injection. Asterisks would denote time points at which the between-group difference remained significant after Bonferroni correction for eleven comparisons. Shading marks the period beyond which the number of patients still under observation has not yet been confirmed; see the [CHECK] note in Section 3.6.'},

{t:'figure', file:'C_Figure5_MAP.png', w:595, h:378},
{t:'fcap', text:'Figure 5. Mean arterial pressure over time in the fractionated (Group F) and bolus (Group B) groups. Values are mean ± standard deviation, n = 50 per group at the earlier time points. Time zero denotes the baseline recording made immediately before intrathecal injection. Shading marks the period beyond which the number of patients still under observation has not yet been confirmed; see the [CHECK] note in Section 3.6.'},

{t:'pagebreak'},
{t:'h1', text:'Appendix A. Design notes — how this version differs from the randomised one'},
{t:'p', text:'This appendix is a teaching aid and would be deleted before any real submission. The clinical question, the intervention, the primary endpoint and the sample size are identical to the randomised version. Only the allocation machinery changes, and this appendix sets out what follows from that single change.'},

{t:'h2', text:'A.1. What stayed the same'},
{t:'p', text:'Primary outcome (duration of sensory blockade), sample size calculation and its source [11], intervention and comparator, drug and dose, assessment schedule and definitions, blinding of participant and outcome assessor, and every reported result. Nothing about the clinical content of the study changed.'},

{t:'h2', text:'A.2. What changed, and why each change follows'},
{t:'table', widths:[2300, 3300, 3400], rows:[
 ['Element','Randomised version','Non-randomised comparative version'],
 ['Assignment','Computer-generated block randomisation','Alternate allocation by position on the operating list'],
 ['Concealment','Sequentially numbered sealed opaque envelopes','None possible — the next assignment is always foreseeable'],
 ['Reporting guideline','CONSORT 2010','TREND'],
 ['Design label','Randomised controlled trial','Comparative, non-randomised, quasi-experimental'],
 ['Registration','Mandatory','Still mandatory — it remains an interventional study'],
 ['Baseline table','p values','Standardised mean differences'],
 ['Primary analysis','Unadjusted; randomisation handles confounding','Unadjusted, with pre-specified ANCOVA as a companion'],
 ['Deviation handling','Intention-to-treat','Per protocol, with a sensitivity analysis; ITT is not available'],
 ['Risk-of-bias tool a reviewer will apply','Cochrane RoB 2 [21]','ROBINS-I [22]'],
 ['Strength of inference','Establishes the effect','Supports existing randomised evidence'],
]},

{t:'h2', text:'A.3. The four RCT criteria this study does not meet'},
{t:'p', text:'First, random sequence generation. Alternation is systematic, so chance plays no part and unmeasured prognostic factors are not balanced even in expectation [18]. Second, allocation concealment. A deterministic public rule can always be deciphered, and decipherable allocation is the mechanism by which selection bias enters trials [19]. Third, an auditable sequence held by an independent party, without which compliance with the rule cannot be demonstrated. Fourth, intention-to-treat analysis, which derives its meaning from randomisation and therefore has no equivalent here.'},

{t:'p', text:'Blinding of participants and outcome assessors is retained in full. That is a genuine strength rather than a consolation, since it protects the measurement of outcome. What it does not do is protect the composition of the groups, and those are separate problems requiring separate safeguards.'},

{t:'h2', text:'A.4. Where the three versions sit relative to one another'},
{t:'table', widths:[2200, 2400, 2400, 2000], rows:[
 ['','Randomised trial','This version','Observational cohort'],
 ['Who decides the technique','A random sequence','The investigators, by a fixed rule','The attending anaesthesiologist'],
 ['Interventional?','Yes','Yes','No'],
 ['Guideline','CONSORT','TREND','STROBE'],
 ['Primary threat','—','Selection bias','Confounding by indication'],
 ['Registration','Mandatory','Mandatory','Recommended'],
 ['Primary outcome used here','Duration of sensory block','Duration of sensory block','Intraoperative hypotension'],
]},
{t:'small', text:'The third column is the companion draft prepared separately. Note that only the observational version changes the primary outcome, and it does so because an unblinded observer measuring a block characteristic is far more exposed to measurement bias than a monitor-derived haemodynamic endpoint. The present version keeps the original endpoint because the investigators still control assignment and the outcome assessor is still blinded.'},

{t:'h2', text:'A.5. Items still to complete'},
{t:'p', text:'Enrolment dates, ethics approval number, CTRI registration, needle gauge, statistical software, the enumerated list of surgical procedures, the crystalloid type and rescue volumes, timing method for the 45-second interval, and the number of patients under observation at the later time points. Each is marked [FILL] or [CHECK] in the text. The hypotension figure of 12 against the Summary figure of 30% must be resolved against the master chart before anything is submitted.'},

{t:'pagebreak'},
{t:'red', text:'NOTE — THIS DOCUMENT IS FOR LEARNING PURPOSES ONLY.'},
{t:'redbody', text:'This manuscript is a teaching exercise. It takes an existing randomised controlled trial and rewrites it as a prospective comparative non-randomised study, keeping the clinical question, the intervention and the primary endpoint unchanged, in order to demonstrate what follows when randomisation and allocation concealment are removed and everything else is held constant.'},
{t:'redbody', text:'The allocation method described here is a constructed illustration. The source study was randomised. Alternate allocation by operating list position, the participant flow numbers, the two protocol deviations, the standardised mean differences, the confidence intervals and the adjusted and sensitivity analyses were all created for this exercise and do not describe how the source study was conducted or analysed. The block characteristics, haemodynamic values and adverse event counts are carried over from the source manuscript so that the two drafts can be read side by side; they are reproduced here inside a design narrative that is fictional.'},
{t:'redbody', text:'This document must not be submitted to any journal, presented as research, cited, or used as evidence for any clinical decision. Describing a randomised study as non-randomised in a real submission would be a serious misrepresentation. The author names, institutional affiliation and reference list are retained only so that the format matches the source document being learned from.'},
];
