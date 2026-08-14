// Tables, figure legends, appendix and closing note.

module.exports = [

{t:'pagebreak'},
{t:'h1', text:'Tables'},

{t:'tcap', text:'Table 1. Baseline and procedural characteristics by injection technique.'},
{t:'table', widths:[3100, 1900, 1900, 1300, 1300], rows:[
 ['Characteristic','Fractionated (n = 58)','Bolus (n = 70)','SMD','SMD after IPTW'],
 ['Age (years)','34.2 ± 8.9','33.1 ± 9.4','0.12','0.04'],
 ['Male sex','33 (56.9)','42 (60.0)','0.06','0.03'],
 ['Height (cm)','163.4 ± 8.1','164.1 ± 7.9','0.09','0.05'],
 ['Body mass index (kg/m²)','24.6 ± 3.4','24.1 ± 3.6','0.14','0.06'],
 ['ASA physical status II','24 (41.4)','25 (35.7)','0.12','0.05'],
 ['Baseline heart rate (beats/min)','79 ± 8','80 ± 8','0.13','0.04'],
 ['Baseline mean arterial pressure (mmHg)','93 ± 7','92 ± 6','0.15','0.07'],
 ['Preload volume administered (mL)','512 ± 78','498 ± 83','0.17','0.08'],
 ['Site: femur or knee','26 (44.8)','27 (38.6)','0.13','0.06'],
 ['Site: tibia, ankle or foot','32 (55.2)','43 (61.4)','0.13','0.06'],
 ['Duration of surgery (min)','118 ± 31','112 ± 29','0.20','0.09'],
 ['Operator with ≥5 years experience','41 (70.7)','38 (54.3)','0.34','0.07'],
]},
{t:'small', text:'Data are mean ± standard deviation or n (%). ASA = American Society of Anesthesiologists; IPTW = inverse probability of treatment weighting; SMD = standardised mean difference. Significance tests of baseline characteristics are deliberately not reported (see Section 2.8). An SMD below 0.10 indicates adequate balance.'},

{t:'tcap', text:'Table 2. Sensory and motor block characteristics: crude and adjusted differences.'},
{t:'table', widths:[2400, 1600, 1600, 1800, 1800, 900], rows:[
 ['Outcome','Fractionated (n = 58)','Bolus (n = 70)','Crude MD (95% CI)','Adjusted MD (95% CI)','p'],
 ['Sensory onset (min)','4.9 ± 1.3','3.7 ± 1.1','1.2 (0.8 to 1.6)','1.1 (0.7 to 1.5)','<0.001'],
 ['Motor onset (min)','6.3 ± 1.6','5.0 ± 1.4','1.3 (0.8 to 1.8)','1.2 (0.7 to 1.7)','<0.001'],
 ['Duration of sensory block (min)','166 ± 24','143 ± 21','23.0 (15.0 to 31.0)','19.4 (11.6 to 27.2)','<0.001'],
 ['Duration of motor block (min)','148 ± 26','129 ± 24','19.0 (10.0 to 28.0)','15.8 (7.1 to 24.5)','<0.001'],
]},
{t:'small', text:'Data are mean ± standard deviation. CI = confidence interval; MD = mean difference (fractionated minus bolus). Adjusted estimates are from multivariable linear regression including age, sex, height, body mass index, ASA physical status, baseline mean arterial pressure, baseline heart rate, preload volume, surgical site, duration of surgery and operator experience, with standard errors clustered by anaesthesiologist.'},

{t:'tcap', text:'Table 3. Peak sensory level and degree of motor block at 30 minutes.'},
{t:'table', widths:[3000, 1900, 1900, 2300, 900], rows:[
 ['Variable','Fractionated (n = 58)','Bolus (n = 70)','Adjusted OR (95% CI)','p'],
 ['Peak level T6','4 (6.9)','12 (17.1)','—','—'],
 ['Peak level T8','20 (34.5)','35 (50.0)','—','—'],
 ['Peak level T10','34 (58.6)','23 (32.9)','—','—'],
 ['Peak level T8 or above','24 (41.4)','47 (67.1)','0.36 (0.17 to 0.77)','0.008'],
 ['Bromage Grade 2','11 (19.0)','16 (22.9)','—','—'],
 ['Bromage Grade 3','47 (81.0)','54 (77.1)','1.31 (0.53 to 3.24)','0.559'],
]},
{t:'small', text:'Data are n (%). CI = confidence interval; OR = odds ratio (fractionated versus bolus). Adjusted for the covariate set listed under Table 2. Peak sensory level was additionally analysed as an ordinal variable by ordinal logistic regression, giving a proportional odds ratio of 0.39 (0.19 to 0.80).'},

{t:'tcap', text:'Table 4. Haemodynamic outcomes, rescue interventions and adverse events.'},
{t:'table', widths:[2400, 1500, 1500, 1750, 1750, 1100], rows:[
 ['Outcome','Fractionated (n = 58)','Bolus (n = 70)','Crude RR (95% CI)','Adjusted RR (95% CI)','p'],
 ['Hypotension (primary outcome)','5 (8.6)','26 (37.1)','0.23 (0.10 to 0.56)','0.29 (0.12 to 0.68)','0.004'],
 ['Mephentermine administered','4 (6.9)','24 (34.3)','0.20 (0.07 to 0.55)','0.24 (0.09 to 0.63)','0.004'],
 ['Bradycardia','1 (1.7)','8 (11.4)','0.15 (0.02 to 1.17)','0.19 (0.02 to 1.49)','0.113'],
 ['Atropine administered','1 (1.7)','8 (11.4)','0.15 (0.02 to 1.17)','0.19 (0.02 to 1.49)','0.113'],
 ['Nausea','4 (6.9)','15 (21.4)','0.32 (0.11 to 0.92)','0.36 (0.13 to 1.02)','0.054'],
 ['Vomiting','1 (1.7)','7 (10.0)','0.17 (0.02 to 1.36)','0.21 (0.03 to 1.62)','0.135'],
 ['Chills','0 (0)','0 (0)','—','—','—'],
 ['Itching','0 (0)','0 (0)','—','—','—'],
 ['Urinary retention','0 (0)','0 (0)','—','—','—'],
 ['Desaturation','0 (0)','0 (0)','—','—','—'],
]},
{t:'small', text:'Data are n (%). CI = confidence interval; RR = risk ratio (fractionated versus bolus). Risk ratios were estimated by modified Poisson regression with a robust variance estimator, adjusted for the covariate set listed under Table 2, with standard errors clustered by anaesthesiologist. Adjusted risk difference for the primary outcome was −24.1 percentage points (−37.2 to −11.0), giving a number needed to treat of 5 (3 to 10).'},

{t:'tcap', text:'Table 5. Sensitivity analyses for the primary outcome.'},
{t:'table', widths:[3400, 2400, 2400, 800], rows:[
 ['Analysis','Effective sample','RR (95% CI)','p'],
 ['Primary multivariable model','128','0.29 (0.12 to 0.68)','0.004'],
 ['Inverse probability of treatment weighting','128','0.31 (0.14 to 0.69)','0.004'],
 ['Propensity score matching (1:1, calliper 0.2)','96 (48 pairs)','0.33 (0.13 to 0.84)','0.020'],
 ['Multiple imputation for missing data','130','0.29 (0.13 to 0.66)','0.003'],
 ['Excluding the anaesthesiologist who used both techniques','109','0.27 (0.11 to 0.67)','0.005'],
 ['Negative control outcome (duration of surgery, min)','128','MD 4.8 (−4.2 to 13.8)','0.294'],
]},
{t:'small', text:'CI = confidence interval; MD = mean difference; RR = risk ratio. E-value for the primary adjusted estimate was 6.4, and 2.3 for the confidence limit nearest the null.'},

{t:'tcap', text:'Table 6. Number of patients contributing haemodynamic data at each time point.'},
{t:'table', widths:[2400, 2200, 2200, 2200], rows:[
 ['Time after injection (min)','Fractionated','Bolus','Total'],
 ['0 to 30','58','70','128'],
 ['60','56','65','121'],
 ['90','45','51','96'],
 ['120','26','28','54'],
 ['150','9','7','16'],
]},
{t:'small', text:'Patients ceased to contribute data at the end of their operation. Time points beyond 90 minutes rest on fewer than half the cohort and are presented for completeness rather than for inference.'},

{t:'pagebreak'},
{t:'h1', text:'Figures'},

{t:'figure', file:'Figure1_DAG.png', w:595, h:395},
{t:'fcap', text:'Figure 1. Directed acyclic graph of the assumed causal structure linking injection pattern to intraoperative hypotension. Boxes denote measured variables and the shaded blue box the minimal sufficient adjustment set. Peak sensory level is shown as a mediator and is deliberately excluded from adjustment; conditioning on it would remove part of the association under study [23]. Cerebrospinal fluid volume and true instantaneous injection rate are shown as unmeasured, and are the reason an E-value is reported.'},

{t:'figure', file:'Figure2_STROBE_flow.png', w:528, h:509},
{t:'fcap', text:'Figure 2. STROBE flow diagram showing the number of patients assessed for eligibility, excluded before enrolment with reasons, enrolled, excluded after enrolment with reasons, and analysed in each cohort. Cohort sizes were determined by the distribution of practice among the eight contributing anaesthesiologists rather than by any study procedure.'},

{t:'figure', file:'Figure3_covariate_balance.png', w:595, h:331},
{t:'fcap', text:'Figure 3. Covariate balance before and after inverse probability of treatment weighting, plotted as absolute standardised mean differences. The vertical reference line marks the conventional balance threshold of 0.10. Operator experience is the only covariate exceeding that threshold in the unweighted cohort, and is brought into balance by weighting.'},

{t:'figure', file:'Figure4_MAP.png', w:595, h:384},
{t:'fcap', text:'Figure 4. Mean arterial pressure over time by injection technique. Values are model-estimated means with 95% confidence intervals from the linear mixed-effects model. Time zero denotes the baseline recording made immediately before intrathecal injection. Shading beyond 90 minutes marks the period in which fewer than half the cohort remained under observation; the number contributing at each time point is given in Table 6.'},

{t:'figure', file:'Figure5_HR.png', w:595, h:378},
{t:'fcap', text:'Figure 5. Heart rate over time by injection technique. Values are model-estimated means with 95% confidence intervals from the linear mixed-effects model. Time zero denotes the baseline recording made immediately before intrathecal injection. Shading beyond 90 minutes marks the period in which fewer than half the cohort remained under observation.'},

{t:'figure', file:'Figure6_forest.png', w:595, h:308},
{t:'fcap', text:'Figure 6. Adjusted risk ratios for the primary outcome across every pre-specified analysis, and for the secondary binary outcomes. The diamond marks the primary adjusted estimate. Confidence intervals crossing the vertical line at 1.0 are compatible with no association. The value of the figure lies in the first block: an estimate that moves only between 0.27 and 0.33 across crude, adjusted, weighted, matched and imputed analyses is not an artefact of any single modelling choice.'},

{t:'pagebreak'},
{t:'h1', text:'Appendix A. Design notes — what changed from the randomised version, and why'},
{t:'p', text:'This appendix is a teaching aid and would be deleted before any real submission. It sets out, section by section, what had to change when the same clinical question was addressed by an observational rather than a randomised design.'},

{t:'h2', text:'A.1. The nine structural changes'},
{t:'table', widths:[2200, 3300, 3500], rows:[
 ['Element','Randomised version','Observational version'],
 ['Reporting guideline','CONSORT 2010','STROBE cohort checklist'],
 ['Assignment','Computer-generated block randomisation, sealed opaque envelopes','Attending anaesthesiologist’s established preference; investigators had no role'],
 ['Primary outcome','Duration of sensory blockade (a block characteristic)','Intraoperative hypotension (the clinically consequential endpoint)'],
 ['Group sizes','Fixed at 50 and 50 by design','58 and 70, determined by practice patterns and not controllable'],
 ['Baseline comparison','p values for each characteristic','Standardised mean differences; p values deliberately omitted'],
 ['Effect estimate','Difference in means, p value','Adjusted risk ratio and risk difference with confidence intervals'],
 ['Confounding','Handled by randomisation','Handled by a pre-specified DAG, multivariable adjustment, IPTW and matching'],
 ['Unmeasured confounding','Not applicable','Quantified by E-value and probed by a negative control outcome'],
 ['Language of inference','“Fractionation prolonged the block”','“Fractionation was associated with…”; causation is not claimed'],
]},

{t:'h2', text:'A.2. Points a reviewer will attack first'},
{t:'p', text:'Confounding by indication is the obvious one, and the E-value plus the negative control outcome are the pre-emptive answers. Unblinded outcome assessment is the second, and the defence is structural rather than rhetorical: the primary outcome is arithmetic derived from monitor values, not a judgement made in theatre. Exposure misclassification is the third, and the reason it is unlikely to explain the result is that non-differential misclassification biases towards the null, not away from it.'},
{t:'p', text:'Two habits will not survive review. Reporting baseline p values in a non-randomised comparison invites the reply that the test has no null hypothesis worth testing. Adjusting for peak sensory level, which sits on the causal pathway, would remove the very association being estimated; that is overadjustment bias, and it is a common error in observational anaesthesia papers [23].'},

{t:'h2', text:'A.3. Why the primary outcome was changed'},
{t:'p', text:'A randomised trial can afford a surrogate primary outcome because randomisation protects the comparison. An observational study cannot, for two reasons. Block characteristics are measured by an unblinded observer and are therefore the outcomes most exposed to measurement bias, whereas hypotension derived from monitor readings is not. Beyond that, an observational study earns its place by answering a question a trial cannot, and the question here is whether the technique helps patients in ordinary practice, not whether it alters a dermatome level.'},

{t:'h2', text:'A.4. Items still to complete'},
{t:'p', text:'Enrolment dates, ethics approval number, registration status, the enumerated list of surgical procedures, the crystalloid type and rescue volumes, and whether the observer had a stopwatch. Each is marked [FILL] in the text. The [CHECK] note in Section 2.4 flags the study’s principal methodological weakness and should be discussed with the guide rather than quietly removed.'},

{t:'pagebreak'},
{t:'red', text:'NOTE — THIS DOCUMENT IS FOR LEARNING PURPOSES ONLY.'},
{t:'redbody', text:'This manuscript is a teaching exercise. It was produced by restructuring an existing randomised controlled trial protocol into a comparative observational cohort design, in order to demonstrate how study design, reporting guideline, statistical approach and language of inference must change when randomisation is removed.'},
{t:'redbody', text:'All participant numbers, baseline characteristics, block measurements, haemodynamic values, adverse event counts, effect estimates, confidence intervals, p values, E-values and sensitivity analyses in this document are synthetic. They were constructed to be internally consistent and clinically plausible for teaching purposes. They are not real patient data, no such cohort was recruited, and no ethics committee approval exists for the study described here.'},
{t:'redbody', text:'This document must not be submitted to any journal, presented as research, cited, or used as evidence for any clinical decision. The author names, institutional affiliation and reference list are retained only so that the format matches the source document being learned from.'},
];
