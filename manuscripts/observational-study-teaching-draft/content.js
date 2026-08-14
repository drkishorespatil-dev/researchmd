// Manuscript content blocks for the observational cohort teaching draft.
// Block types: h1, h2, h3, p, meta, small, red, redsmall, tcap, table, pagebreak

module.exports = [

{t:'redsmall', text:'TEACHING DRAFT — SYNTHETIC DATA. Not for submission. See the note at the end of this document.'},

{t:'meta', text:'Category of paper: Original Article'},

{t:'title', text:'Title: Fractionated versus bolus intrathecal injection of hyperbaric bupivacaine with fentanyl in adults undergoing elective lower limb surgery: a prospective comparative observational cohort study'},

{t:'meta', text:'Running title: Fractionated versus bolus subarachnoid block in routine practice'},

{t:'meta', text:'Authors'},
{t:'p', text:'Ritika Kuldeepsingh Rao¹, Heena Pahuja¹, Tilka V. Ghate¹, Shivani Bhojne¹, Anjali Nagare¹'},

{t:'meta', text:'Affiliation'},
{t:'p', text:'¹ Department of Anaesthesiology, NKP Salve Institute of Medical Sciences and Research Centre and Lata Mangeshkar Hospital, Digdoh Hills, Hingna Road, Nagpur 440019, Maharashtra, India.'},

{t:'meta', text:'Corresponding author'},
{t:'p', text:'Dr. Ritika Kuldeepsingh Rao, Department of Anaesthesiology, NKP Salve Institute of Medical Sciences and Research Centre and Lata Mangeshkar Hospital, Digdoh Hills, Hingna Road, Nagpur 440019, Maharashtra, India. E-mail: ritikarao698@gmail.com | Telephone: [FILL] | Fax: [FILL]'},

{t:'meta', text:'Financial support'},
{t:'p', text:'This research did not receive any specific grant from funding agencies in the public, commercial, or not-for-profit sectors.'},

{t:'meta', text:'Conflicts of interest'},
{t:'p', text:'The authors declare no conflicts of interest.'},

{t:'meta', text:'Study registration'},
{t:'p', text:'[FILL: CTRI registration number and date. Prospective registration of observational studies is not mandated by ICMJE policy, but a growing number of journals request it and several Indian ethics committees now require it. Register before enrolment if at all possible, and state the number here.]'},

{t:'meta', text:'Reporting guideline: STROBE (Strengthening the Reporting of Observational Studies in Epidemiology), cohort checklist.'},

{t:'meta', text:'Tables: 6 | Figures: 6 | References: 24'},

// ---------------- ABSTRACT ----------------
{t:'h1', text:'Abstract'},

{t:'p', text:'Background and objectives: Single-bolus intrathecal injection produces an abrupt sympathetic blockade that is frequently followed by hypotension and bradycardia. Fractionated injection, in which the calculated dose is delivered in two aliquots separated by a short pause, has been reported to attenuate this response in randomised trials conducted under controlled conditions. Whether the advantage persists when the technique is used by anaesthesiologists of differing seniority in unselected routine practice has not been examined. This study estimated the association between fractionated intrathecal injection and intraoperative hypotension in adults undergoing elective lower limb surgery.'},

{t:'p', text:'Methods: A prospective comparative observational cohort study was conducted at a tertiary care teaching hospital. Consecutive adults aged 18–50 years of American Society of Anesthesiologists (ASA) physical status I or II with body mass index below 35 kg/m² receiving subarachnoid block with 3 mL of 0.5% hyperbaric bupivacaine and 25 µg fentanyl were enrolled. The injection technique, fractionated or bolus, was determined solely by the attending anaesthesiologist’s established practice; investigators observed and recorded but took no part in the choice. The primary outcome was intraoperative hypotension, defined as a fall in mean arterial pressure exceeding 20% of baseline. Confounders were specified before analysis from a directed acyclic graph. Associations were estimated by multivariable regression with robust standard errors clustered by anaesthesiologist, with inverse probability of treatment weighting, propensity score matching and E-values as sensitivity analyses.'},

{t:'p', text:'Results: Of 137 patients enrolled, 128 were analysed (fractionated 58, bolus 70). Hypotension occurred in 5 patients (8.6%) in the fractionated cohort and 26 (37.1%) in the bolus cohort, giving an adjusted risk ratio of 0.29 (95% confidence interval 0.12 to 0.68; p = 0.004) and an adjusted risk difference of −24.1% (−37.2 to −11.0). Vasopressor requirement was correspondingly lower (6.9% versus 34.3%). Peak sensory level reached T8 or above in 41.4% versus 67.1% of patients (adjusted odds ratio 0.36, 0.17 to 0.77). Sensory and motor onset were slower with fractionation by 1.1 and 1.2 minutes respectively, and sensory blockade lasted 19.4 minutes longer (11.6 to 27.2). Density of motor block did not differ. The E-value for the primary outcome was 6.4, and 2.3 for the confidence limit closest to the null.'},

{t:'p', text:'Conclusion: In routine practice, fractionated intrathecal injection was associated with a substantially lower incidence of intraoperative hypotension, a more restricted cephalad spread and a longer block, at the cost of a slower onset of approximately one minute. Because technique was chosen by the operator rather than allocated, residual confounding cannot be excluded and these findings describe association rather than effect.'},

{t:'p', text:'Keywords: Bupivacaine; cohort studies; confounding factors, epidemiologic; haemodynamics; spinal anaesthesia'},

{t:'pagebreak'},

// ---------------- INTRODUCTION ----------------
{t:'h1', text:'1. Introduction'},

{t:'p', text:'Subarachnoid block remains the technique of choice for most elective surgery below the umbilicus. Rapid onset, dense and predictable sensory and motor blockade, technical simplicity and low cost suit it particularly well to lower limb orthopaedic work, where it also provides several hours of postoperative analgesia without instrumentation of the airway [1,2]. Its principal drawback is circulatory.'},

{t:'p', text:'Blockade of preganglionic sympathetic fibres produces arteriolar and venous dilatation, a fall in systemic vascular resistance and pooling of blood in the splanchnic and lower limb capacitance vessels; the reduction in venous return that follows lowers stroke volume and cardiac output, and hypotension results [3,4]. Bradycardia is added once the block reaches the cardioaccelerator outflow arising from T1 to T4. Young patients with an intact baroreflex absorb this readily. In elderly patients, and in those with ischaemic heart disease, aortic stenosis or any fixed cardiac output state, the same fall in perfusion pressure may threaten the coronary, cerebral and renal circulations [5]. Dose, baricity, block height, posture and speed of injection each modify the magnitude of the response.'},

{t:'p', text:'Attempts to blunt this response have included dose reduction, intrathecal adjuvants, unilateral block, sequential combined spinal–epidural technique, and alteration of the pattern of injection itself [6]. Fractionated injection belongs to the last of these. The calculated dose is delivered in two or more aliquots separated by a brief pause rather than as one continuous bolus [7,8]. The physiological argument is that a stepwise rise in intrathecal drug concentration recruits sympathetic segments gradually and restricts cephalad spread, so that baroreflex and venous capacitance adjustments keep pace with the developing block.'},

{t:'p', text:'Randomised trials of fractionated injection have reported less hypotension, a lower peak sensory level and a longer duration of blockade, although findings on onset time have been inconsistent [11,13–16]. Those trials share a common structure: a small number of experienced operators, a fixed aliquot volume, a stopwatch-timed interval and a narrowly defined surgical population. Routine theatre practice departs from that structure on every point. Anaesthesiologists differ in seniority and in habit, aliquot volumes are judged rather than measured, and the case mix presenting for elective lower limb surgery is broader than any trial protocol admits. Whether the haemodynamic advantage observed under trial conditions survives that translation is unknown.'},

{t:'p', text:'A comparative observational cohort answers this question directly — at the price of exchanging randomisation for statistical control of confounding. The design applied here follows the target trial framework: the study was specified as though a randomised comparison were being conducted, with the single deliberate difference that assignment followed the attending anaesthesiologist’s established preference rather than an allocation sequence [18]. The primary objective was to estimate the association between fractionated intrathecal injection and intraoperative hypotension in unselected routine practice. Secondary objectives covered sensory and motor block characteristics, serial intraoperative haemodynamics, vasopressor and anticholinergic requirement, and perioperative adverse events.'},

// ---------------- METHODS ----------------
{t:'h1', text:'2. Materials and Methods'},

{t:'h2', text:'2.1. Study design and setting'},
{t:'p', text:'This prospective, non-randomised, comparative observational cohort study was conducted in the Department of Anaesthesiology of a tertiary care teaching hospital in central India between [FILL: first and last date of enrolment]. Reporting follows the STROBE statement for cohort studies [17]. The protocol was approved by the Institutional Ethics Committee of NKP Salve Institute of Medical Sciences and Research Centre and Lata Mangeshkar Hospital, Nagpur ([FILL: approval number and date]), and the study was conducted in accordance with the Declaration of Helsinki [10] and the Indian Council of Medical Research National Ethical Guidelines for Biomedical and Health Research Involving Human Participants (2017). Written informed consent for observation and data collection was obtained from every participant before surgery.'},

{t:'p', text:'No aspect of anaesthetic management was directed by the investigators. Both injection techniques were already in established use in the department at the time the study began, and the analysis plan was finalised and dated before any outcome data were examined.'},

{t:'h2', text:'2.2. Participants'},
{t:'p', text:'Consecutive adults aged 18–50 years of ASA physical status I or II, with a body mass index below 35 kg/m², scheduled for elective lower limb surgery under subarachnoid block, were screened on the day before operation. Lower limb surgery was defined as any elective procedure on structures distal to the inguinal ligament, comprising surgery of the femur, knee, tibia and fibula, ankle and foot. [FILL: enumerate the specific procedure categories actually performed, with numbers. A reviewer of the earlier randomised submission objected that this population was undefined, and the objection applies with greater force to an observational cohort, where case mix is itself a confounder.]'},

{t:'p', text:'Patients were eligible only if the block was performed with the standard departmental solution of 3 mL of 0.5% hyperbaric bupivacaine with 25 µg fentanyl at the L3–L4 interspace. Exclusion criteria were spinal deformity, previous spine surgery, coagulopathy, local sepsis at the intended puncture site, known hypersensitivity to either study drug, pre-existing neurological disease, pregnancy, and refusal of consent. Patients were withdrawn after enrolment if the block failed, defined as absence of both sensory and motor block 15 minutes after injection, if conversion to general anaesthesia was required for any reason, or if the recorded technique matched neither of the two exposure definitions below.'},

{t:'h2', text:'2.3. Exposure definition and ascertainment'},
{t:'p', text:'The exposure of interest was the pattern of intrathecal injection, classified into two mutually exclusive categories fixed before enrolment.'},

{t:'p', text:'Fractionated injection was defined as delivery of the 3.5 mL solution in two approximately equal aliquots of about 1.75 mL, separated by a pause of 40 to 50 seconds, with the patient placed supine immediately after the second aliquot. Bolus injection was defined as delivery of the entire 3.5 mL as a single continuous injection, with the patient placed supine within 60 seconds of completion. Injection rate in both cohorts was approximately 0.2 mL/s as judged by the operator. Any block that did not meet one of these two definitions, including delivery in three aliquots and pauses outside the stated window, was recorded as a protocol deviation and excluded from analysis.'},

{t:'p', text:'Assignment was made by the attending anaesthesiologist as a matter of individual routine, without reference to the study and without investigator input. Eight consultant anaesthesiologists contributed patients. Exposure was ascertained by a trained observer present in theatre throughout the block, who recorded aliquot number, the interval between aliquots timed against the theatre clock, and the time to assumption of the supine position. [FILL: state whether a stopwatch was available to the observer. If the interval was counted against the wall clock, say so plainly; an honest statement of imprecision is stronger than an unsupported claim of accuracy, and exposure misclassification is the first thing a reviewer of an observational study will probe.]'},

{t:'h2', text:'2.4. Outcomes'},
{t:'p', text:'The primary outcome was intraoperative hypotension, defined a priori as any fall in mean arterial pressure exceeding 20% of the patient’s own baseline value at any point between intrathecal injection and the end of surgery. This outcome was selected in preference to the block characteristics used in earlier randomised work because it is the endpoint of direct clinical consequence and because it is measured identically regardless of who performed the block.'},

{t:'p', text:'Secondary outcomes were sensory onset time, motor onset time, peak sensory level at 30 minutes, degree of motor block at 30 minutes, duration of sensory and motor blockade, serial heart rate and mean arterial pressure, incidence of bradycardia, requirement for vasopressor or anticholinergic, and the occurrence of nausea, vomiting, chills, itching, urinary retention and desaturation.'},

{t:'p', text:'Sensory blockade was assessed by pinprick and motor blockade by the modified Bromage scale, graded as 0, no motor block; 1, inability to raise the extended leg but able to move knees and feet; 2, inability to raise the extended leg or move the knee but able to move the feet; 3, complete motor block. Sensory onset was the interval from completion of injection until blockade reached the L2–L3 dermatome, assessed every 5 minutes for 30 minutes. Motor onset was the interval until Grade 1 was reached. Peak sensory level was the highest dermatome blocked at 30 minutes. Duration of sensory blockade was the interval from injection to two-segment regression, and duration of motor blockade the interval until regression to Grade 1, both assessed every 15 minutes. Bradycardia was a heart rate below 50 beats/min and desaturation a peripheral oxygen saturation below 94%.'},

{t:'p', text:'All outcome assessment was performed by a single trained observer who was not the operator and who took no part in patient management. Blinding of that observer to exposure was not possible, since the injection pattern is visible to anyone present at the block. Two safeguards were therefore applied. Haemodynamic values were transcribed directly from the monitor rather than judged, and the primary outcome was defined arithmetically from those recorded values during analysis rather than declared in theatre. [CHECK: this is the single greatest methodological vulnerability of the study. State it plainly here and again in the limitations; do not attempt to argue it away.]'},

{t:'h2', text:'2.5. Anaesthetic management'},
{t:'p', text:'Departmental practice was uniform in all respects other than the injection pattern. Patients underwent pre-anaesthetic evaluation on the day before surgery, at which the pinprick test was demonstrated, and fasted according to Indian Society of Anaesthesiologists guidance. Standard monitoring comprising continuous electrocardiography, non-invasive blood pressure measurement and pulse oximetry was instituted on arrival in theatre. All patients received Ringer lactate 10 mL/kg as preload and intravenous ondansetron 4 mg before the block. Baseline heart rate, blood pressure, mean arterial pressure and peripheral oxygen saturation were recorded immediately before injection.'},

{t:'p', text:'Blocks were performed under strict aseptic precautions with the patient sitting, by a midline approach at the L3–L4 interspace identified by palpation of the intercristal line, using a 25-gauge Quincke needle. The solution was injected after free flow of cerebrospinal fluid and negative aspiration for blood. Haemodynamic variables were recorded at baseline, every 5 minutes for 30 minutes, and every 15 minutes thereafter until the end of surgery. Hypotension was treated with an intravenous crystalloid bolus followed by mephentermine 6 mg, and bradycardia with atropine 0.6 mg, at the discretion of the attending anaesthesiologist. [FILL: crystalloid used, bolus volume in mL, whether any dose was repeated, and total vasopressor dose per patient.]'},

{t:'p', text:'Because ondansetron was given to every patient, the absolute incidence of nausea and vomiting reported here is not comparable with studies that did not premedicate. The between-cohort comparison is unaffected.'},

{t:'h2', text:'2.6. Confounders and causal model'},
{t:'p', text:'Variables for adjustment were selected before data collection using a directed acyclic graph constructed from established determinants of intrathecal spread and of sympathetic block severity (Figure 1). The minimal sufficient adjustment set derived from that graph comprised age, sex, height, body mass index, ASA physical status, baseline mean arterial pressure, baseline heart rate, preload volume administered, anatomical site of surgery, expected duration of surgery, and years of experience of the operating anaesthesiologist.'},

{t:'p', text:'Operator experience deserves particular comment. It is plausibly associated with both the choice of technique, since fractionation has diffused unevenly through the department, and with the outcome, through speed and steadiness of injection and through threshold for treating a falling pressure. A variable of that kind is a confounder in the strict sense — its omission would bias the estimate in an unpredictable direction. Variables lying on the causal pathway between exposure and outcome, principally peak sensory level, were deliberately excluded from the adjustment set, since conditioning on a mediator would remove precisely the effect under study.'},

{t:'p', text:'Two determinants of intrathecal spread could not be measured and remain potential sources of residual confounding: cerebrospinal fluid volume, which is not obtainable in routine practice, and the true instantaneous injection rate.'},

{t:'h2', text:'2.7. Sample size'},
{t:'p', text:'The sample size was determined by the primary outcome. Departmental audit of the preceding year gave an incidence of hypotension of approximately 35% with bolus injection, and the randomised literature suggested a reduction to about 12% with fractionation [11,13]. Detection of that difference with a two-sided alpha of 0.05 and 80% power requires 53 patients per cohort. This figure was inflated by 15% to allow for the loss of precision that accompanies multivariable adjustment and clustering by operator, giving 61 per cohort, and by a further 10% for anticipated exclusions, giving a recruitment target of 135 patients.'},

{t:'p', text:'Group sizes in an observational study are not under investigator control, and the achieved fractionated cohort fell slightly short of this target. Post hoc power calculations were not performed, as they add nothing once the data are in hand; the precision actually achieved is conveyed by the confidence intervals reported throughout.'},

{t:'h2', text:'2.8. Statistical analysis'},
{t:'p', text:'Analyses were performed in R version 4.3.2 (R Foundation for Statistical Computing, Vienna, Austria). Continuous variables are summarised as mean ± standard deviation and categorical variables as frequency and percentage. Baseline comparability between cohorts was assessed by standardised mean differences rather than by significance testing, an absolute value below 0.10 being taken as adequate balance. Significance tests of baseline characteristics are not reported, since a p value in a non-randomised comparison tests a null hypothesis of random allocation that is known in advance to be false.'},

{t:'p', text:'The primary outcome was analysed by modified Poisson regression with a robust variance estimator, which yields a risk ratio directly and avoids the exaggeration of association that an odds ratio produces when the outcome is common [20]. Standard errors were clustered by operating anaesthesiologist to account for the correlation of outcomes within an operator’s practice. Continuous secondary outcomes were analysed by multivariable linear regression and ordinal outcomes by ordinal logistic regression, each adjusted for the same covariate set. Serial haemodynamic data were analysed by a linear mixed-effects model with a random intercept for patient nested within anaesthesiologist, fixed effects for cohort, time and their interaction, and adjustment for the same covariates.'},

{t:'p', text:'Three sensitivity analyses were specified in advance. Inverse probability of treatment weighting was applied using a propensity score estimated by logistic regression on the full covariate set, with weights stabilised and truncated at the first and ninety-ninth percentiles [19]. One-to-one nearest-neighbour propensity score matching without replacement was performed within a calliper of 0.2 pooled standard deviations. E-values were calculated for the primary outcome to quantify the strength of association that an unmeasured confounder would need to have with both exposure and outcome to explain the observed result away [21]. Duration of surgery was analysed as a negative control outcome, on the reasoning that the injection pattern cannot plausibly influence it and that any apparent association would indicate residual confounding.'},

{t:'p', text:'Analyses were complete-case, with multiple imputation by chained equations as a sensitivity analysis. A two-sided p value below 0.05 was taken as significant. Because the secondary outcomes are numerous and were not subjected to formal multiplicity correction, they are reported with confidence intervals and interpreted as supporting rather than confirmatory evidence.'},

// ---------------- RESULTS ----------------
{t:'h1', text:'3. Results'},

{t:'h2', text:'3.1. Participant flow'},
{t:'p', text:'Of 168 patients assessed for eligibility, 31 were excluded before enrolment: 22 did not meet the eligibility criteria, 6 declined consent and 3 could not be observed for logistic reasons. One hundred and thirty-seven patients were enrolled and underwent subarachnoid block. Nine were subsequently excluded, comprising 5 with block failure or conversion to general anaesthesia, 2 in whom the dose was delivered in three aliquots and who therefore met neither exposure definition, and 2 with incomplete haemodynamic records. The analysed cohort comprised 128 patients, 58 receiving fractionated and 70 receiving bolus injection (Figure 2).'},

{t:'p', text:'The unequal cohort sizes reflect the distribution of practice among the eight contributing anaesthesiologists rather than any study procedure. Three of the eight used fractionation routinely, four used bolus injection routinely, and one varied.'},

{t:'h2', text:'3.2. Baseline comparability'},
{t:'p', text:'Baseline and procedural characteristics are presented in Table 1. The two cohorts were broadly similar in age, sex, height, body mass index, ASA physical status and baseline haemodynamic values, with standardised mean differences below 0.20 throughout. Operator experience was the exception. Anaesthesiologists with five or more years of independent practice performed 70.7% of fractionated blocks and 54.3% of bolus blocks, a standardised mean difference of 0.34.'},

{t:'p', text:'That imbalance is exactly what the design anticipated, and it is the reason operator experience was carried into every adjusted model. Following inverse probability of treatment weighting, all standardised mean differences fell below 0.10, including that for operator experience (Figure 3).'},

{t:'h2', text:'3.3. Sensory and motor block characteristics'},
{t:'p', text:'Onset of both sensory and motor blockade was slower with fractionated injection (Table 2). Mean sensory onset was 4.9 ± 1.3 minutes with fractionation and 3.7 ± 1.1 minutes with bolus injection, an adjusted mean difference of 1.1 minutes (95% CI 0.7 to 1.5; p < 0.001). Motor onset was 6.3 ± 1.6 against 5.0 ± 1.4 minutes, an adjusted difference of 1.2 minutes (0.7 to 1.7; p < 0.001). Neither delay required any alteration of surgical scheduling.'},

{t:'p', text:'Duration ran in the opposite direction. Sensory blockade lasted 166 ± 24 minutes with fractionation against 143 ± 21 minutes with bolus injection, an adjusted difference of 19.4 minutes (11.6 to 27.2; p < 0.001), and motor blockade 148 ± 26 against 129 ± 24 minutes, an adjusted difference of 15.8 minutes (7.1 to 24.5; p < 0.001). Adjustment attenuated each crude estimate by three to four minutes, which indicates that a modest part of the crude difference was attributable to the measured confounders rather than to the technique.'},

{t:'h2', text:'3.4. Peak sensory level and degree of motor block'},
{t:'p', text:'Cephalad spread was more restricted in the fractionated cohort (Table 3). Median peak sensory level was T10 with fractionation and T8 with bolus injection. A level of T8 or above was reached by 24 of 58 patients (41.4%) receiving fractionated injection and 47 of 70 (67.1%) receiving bolus injection, giving an adjusted odds ratio of 0.36 (0.17 to 0.77; p = 0.008).'},

{t:'p', text:'Density of motor block was unaffected. Bromage Grade 3 was attained by 47 patients (81.0%) in the fractionated cohort and 54 (77.1%) in the bolus cohort, an adjusted odds ratio of 1.31 (0.53 to 3.24; p = 0.559). Surgical conditions were rated satisfactory in every patient in both cohorts.'},

{t:'h2', text:'3.5. Primary outcome'},
{t:'p', text:'Hypotension occurred in 5 of 58 patients (8.6%) receiving fractionated injection and in 26 of 70 (37.1%) receiving bolus injection. The crude risk ratio was 0.23 (0.10 to 0.56) and the adjusted risk ratio 0.29 (0.12 to 0.68; p = 0.004), corresponding to an adjusted risk difference of −24.1 percentage points (−37.2 to −11.0) and a number needed to treat of 5 (3 to 10) to prevent one hypotensive episode (Table 4).'},

{t:'p', text:'Vasopressor requirement followed the same pattern, with mephentermine administered to 4 patients (6.9%) in the fractionated cohort and 24 (34.3%) in the bolus cohort, an adjusted risk ratio of 0.24 (0.09 to 0.63; p = 0.004). Among patients who did become hypotensive, median time from injection to the first episode was 11 minutes with bolus injection and 16 minutes with fractionation.'},

{t:'h2', text:'3.6. Serial haemodynamics'},
{t:'p', text:'Baseline heart rate and mean arterial pressure were comparable between cohorts (Table 1). In the mixed-effects model, mean arterial pressure averaged 8.4 mmHg higher in the fractionated cohort over the first 30 minutes after injection (6.2 to 10.6; p < 0.001), with a significant cohort-by-time interaction (p < 0.001) indicating that the trajectories diverged rather than differing by a constant amount (Figure 4). The bolus cohort reached a nadir of 74 ± 7 mmHg at 15 minutes, 19.6% below its own baseline, and had not returned to baseline by the end of observation. The fractionated cohort fell to 84 ± 6 mmHg, 9.7% below baseline, and recovered steadily thereafter.'},

{t:'p', text:'Heart rate behaved similarly, with a nadir of 69 ± 8 beats/min at 20 minutes in the bolus cohort against 74 ± 7 beats/min in the fractionated cohort, and an adjusted between-cohort difference of 5.1 beats/min over the first 30 minutes (3.4 to 6.8; p < 0.001) (Figure 5). Peripheral oxygen saturation remained at or above 97% throughout in both cohorts, and no patient desaturated.'},

{t:'p', text:'The number of patients contributing data fell as surgery ended: 128 patients contributed at 30 minutes, 121 at 60 minutes, 96 at 90 minutes and 54 at 120 minutes. Estimates beyond 90 minutes therefore rest on roughly half the cohort and are shown for completeness rather than for inference.'},

{t:'h2', text:'3.7. Other adverse events'},
{t:'p', text:'Bradycardia occurred in 1 patient (1.7%) receiving fractionated injection and 8 (11.4%) receiving bolus injection, an adjusted risk ratio of 0.19 (0.02 to 1.49; p = 0.113); the confidence interval is wide and includes the null, and no conclusion should be drawn from it. Nausea was recorded in 4 patients (6.9%) against 15 (21.4%), and vomiting in 1 (1.7%) against 7 (10.0%). No episode of chills, itching or urinary retention occurred in either cohort (Table 4).'},

{t:'h2', text:'3.8. Sensitivity analyses'},
{t:'p', text:'The primary estimate proved stable across all pre-specified sensitivity analyses (Table 5, Figure 6). Inverse probability of treatment weighting gave a risk ratio of 0.31 (0.14 to 0.69) and propensity score matching, which yielded 48 matched pairs, gave 0.33 (0.13 to 0.84). Multiple imputation of the two records with missing haemodynamic data produced 0.29 (0.13 to 0.66). Across every analysis the estimate moved only between 0.27 and 0.33.'},

{t:'p', text:'The E-value for the adjusted risk ratio was 6.4, and 2.3 for the confidence limit nearest the null. An unmeasured confounder would therefore need to be associated with both injection technique and hypotension by a risk ratio of at least 2.3, above and beyond every measured covariate, before the observed association could be explained entirely by confounding. Analysis of the negative control outcome found no association between injection technique and duration of surgery (adjusted mean difference 4.8 minutes, −4.2 to 13.8; p = 0.294), which offers some reassurance that gross residual confounding by case complexity is unlikely.'},

// ---------------- DISCUSSION ----------------
{t:'h1', text:'4. Discussion'},

{t:'h2', text:'4.1. Principal findings'},
{t:'p', text:'In this observational cohort drawn from routine practice, fractionated intrathecal injection was associated with roughly a two-thirds reduction in the risk of intraoperative hypotension, a comparable reduction in vasopressor requirement, a more restricted cephalad spread of sensory block, and a longer duration of both sensory and motor blockade. Onset was slower by approximately one minute. Density of motor block was unchanged, and surgical conditions were satisfactory throughout in both cohorts.'},

{t:'h2', text:'4.2. Comparison with the randomised evidence'},
{t:'p', text:'The direction and rough magnitude of these findings concur with the randomised literature. Derakhshan et al [11] and Badheka et al [13] both reported reduced hypotension and greater cardiovascular stability with fractionation, in lower limb surgery and in caesarean section respectively, and Kaniyil et al [7] described the same pattern in a series of high-risk elderly orthopaedic patients. Prolongation of block duration has been a consistent finding across these reports and those of Srivastava et al [15] and Arulpari et al [16]. Onset has been the least consistent outcome in the published work: Pareek et al [14] found a delay comparable to that observed here, whereas Srivastava et al [15] found none, a divergence most plausibly attributable to differences in aliquot volume, interval length and the dermatome chosen to define onset.'},

{t:'p', text:'What the present study adds is not further confirmation of direction but an estimate obtained under conditions of ordinary practice. The adjusted risk ratio of 0.29 was generated by eight anaesthesiologists of differing seniority, timing their pauses against a wall clock, in the case mix that actually presented. That it is of similar magnitude to the trial estimates suggests the technique tolerates the imprecision of real theatre conditions — a question randomised trials are poorly placed to answer. Efficacy and effectiveness need not coincide, and here they appear to.'},

{t:'h2', text:'4.3. Mechanism'},
{t:'p', text:'Peak sensory level is the mechanistic link between injection pattern and circulatory outcome, and the data are consistent with it. A more restricted cephalad spread limits the number of preganglionic sympathetic segments blocked; where the block remains below the cardioaccelerator outflow from T1 to T4, the reflex tachycardic response to reduced venous return is preserved. The near absence of bradycardia in the fractionated cohort accords with that account.'},

{t:'p', text:'The same mechanism explains the prolongation of block. A dose distributed over fewer spinal segments produces a higher concentration at each, and regression from a higher segmental concentration is slower. Restricted spread thus preserves sympathetic function and extends the block by a single route, which is a more economical explanation than invoking two separate mechanisms.'},

{t:'p', text:'One qualification is necessary. Sympathetic blockade was not measured, and it is neither synchronous with sensory blockade nor uniform along the neuraxis, typically extending two or more segments above the sensory level. The mechanistic account offered here is therefore inferred from sensory level and heart rate rather than demonstrated. Whether fractionation genuinely restricts sympathetic spread, or merely slows its development enough for venoconstriction and baroreflex adjustment to keep pace, cannot be settled by these data.'},

{t:'h2', text:'4.4. Confounding'},
{t:'p', text:'The central threat to any inference from these data is that anaesthesiologists who fractionate may differ systematically from those who do not, in ways that themselves influence haemodynamic outcome. That concern was anticipated and partly addressed. Operator experience was indeed imbalanced, with more senior anaesthesiologists over-represented in the fractionated cohort, and it was carried into every model; adjustment moved the risk ratio from 0.23 to 0.29, so a real but modest portion of the crude association was attributable to measured confounding.'},

{t:'p', text:'What adjustment cannot address is the unmeasured residue. A more cautious operator may fractionate, treat a falling pressure earlier, give preload more generously and select gentler cases — and only the last three of these were captured. The E-value gives a sense of how much would be required: an unmeasured confounder would need a risk ratio of 2.3 with both exposure and outcome to reduce the confidence limit to the null, and 6.4 to nullify the point estimate. Associations of that strength are uncommon among the plausible candidates. Two further observations argue against gross residual confounding, namely the stability of the estimate under weighting and matching, and the null result for the negative control outcome.'},

{t:'p', text:'The argument nonetheless remains one of plausibility rather than proof. Confounding by indication is not eliminated by any of these devices, and the estimate reported here should be read as an association of a magnitude unlikely to be wholly artefactual, not as a causal effect.'},

{t:'h2', text:'4.5. Limitations'},
{t:'p', text:'Several limitations qualify these findings. First, and most importantly, exposure was not allocated, so residual and unmeasured confounding cannot be excluded by any analytical means. Second, the outcome assessor could not be blinded, since the injection pattern is visible in theatre; recording haemodynamic values directly from the monitor and deriving the primary outcome arithmetically during analysis reduces but does not remove this vulnerability, and the softer outcomes such as nausea remain open to observer expectation.'},

{t:'p', text:'Third, exposure misclassification is possible. Intervals were timed against the theatre clock and injection rate was judged rather than measured, so some blocks classified as fractionated will have involved intervals at the margins of the definition. Misclassification of this kind is likely to be non-differential with respect to outcome and would therefore tend to draw the estimate towards the null, which makes it an unlikely explanation for the association observed.'},

{t:'p', text:'Fourth, the study was conducted at a single centre in patients aged 18–50 years of ASA physical status I or II, so the findings cannot be extended to elderly patients, to emergency or obstetric surgery, or to patients with significant cardiovascular disease. That is the familiar difficulty in this field: the haemodynamic advantage would be of greatest value in precisely the patients who are least often studied. Fifth, only intraoperative outcomes were recorded, and duration of postoperative analgesia, rescue analgesic consumption, time to ambulation and patient satisfaction were not, so the clinical value of a block lasting 19 minutes longer remains unquantified. Sixth, the number of patients under observation fell substantially after 90 minutes, and the later time points should be read with that in mind.'},

{t:'h2', text:'4.6. Clinical implications'},
{t:'p', text:'Fractionated injection requires no additional equipment, no drug beyond that already drawn up and no specialised training. Its cost is a pause of some 45 seconds and an onset delay of about one minute. Set against that, in our setup it was associated with a reduction in hypotension from 37% to 9% and in vasopressor requirement from 34% to 7%, with no loss of block density. For a modification of this order, the evidence assembled here is sufficient to justify adoption as default practice in elective lower limb surgery, while remaining insufficient to establish causation.'},

{t:'p', text:'The population in which the technique would matter most has still not been studied adequately. A randomised trial in elderly patients with cardiac disease remains the logical next step, and the consistency between this cohort and the existing trial literature offers reasonable grounds for undertaking one.'},

{t:'h1', text:'5. Conclusion'},
{t:'p', text:'In adults undergoing elective lower limb surgery in routine practice, fractionated intrathecal injection of hyperbaric bupivacaine with fentanyl was associated with a substantially lower incidence of intraoperative hypotension and vasopressor requirement, a more restricted cephalad spread of sensory block, and a longer duration of sensory and motor blockade, at the cost of an onset delay of approximately one minute and with no change in the density of motor block. The association persisted across weighting, matching and imputation, and would require a fairly strong unmeasured confounder to be explained away. Because injection technique was chosen by the operator rather than allocated, these findings support the technique without establishing its effect.'},

// ---------------- BACK MATTER ----------------
{t:'h1', text:'Acknowledgements'},
{t:'p', text:'The authors thank the consultant anaesthesiologists whose patients contributed to this cohort, and the operating theatre and nursing staff of the Department of Anaesthesiology for their assistance during data collection.'},

{t:'h1', text:'Ethics statement'},
{t:'p', text:'The study was approved by the Institutional Ethics Committee of NKP Salve Institute of Medical Sciences and Research Centre and Lata Mangeshkar Hospital, Nagpur ([FILL: approval number and date]). Written informed consent was obtained from all participants. No aspect of clinical management was determined by the investigators.'},

{t:'h1', text:'Data availability'},
{t:'p', text:'The data supporting the findings of this study are available from the corresponding author upon reasonable request.'},

{t:'pagebreak'},

{t:'h1', text:'References'},
{t:'ref', text:'[1] Miller RD, Cohen NH, Eriksson LI, Fleisher LA, Wiener-Kronish JP, Young WL, editors. Miller’s Anesthesia. 8th ed. Philadelphia: Elsevier Saunders; 2015.'},
{t:'ref', text:'[2] Butterworth JF, Mackey DC, Wasnick JD. Morgan and Mikhail’s Clinical Anesthesiology. 6th ed. New York: McGraw-Hill Education; 2018.'},
{t:'ref', text:'[3] Nakasuji M, Suh SH, Nomura M, Odaka Y, Nakamura M, Mori T. Hypotension from spinal anesthesia in patients aged greater than 80 years is due to a decrease in systemic vascular resistance. J Clin Anesth 2012;24:201-6.'},
{t:'ref', text:'[4] Hofhuizen CM, Lemson J, Snoeck MM, Scheffer GJ. Spinal anesthesia-induced hypotension is caused by a decrease in stroke volume in elderly patients. Local Reg Anesth 2019;12:19-26.'},
{t:'ref', text:'[5] Messina A, Frassanito L, Colombo D, Vergari A, Draisci G, Della Corte F, et al. Hemodynamic changes associated with spinal and general anesthesia for hip fracture surgery. J Anesth Analg Crit Care 2022;2:8.'},
{t:'ref', text:'[6] Gong C, Zhang Y, Liu J, Wang Y, Chen X, Li Q. Hypotension after unilateral versus bilateral spinal anaesthesia: a systematic review and meta-analysis. BMC Anesthesiol 2024;24:12.'},
{t:'ref', text:'[7] Kaniyil S, Soman R, Rajan S. Fractional spinal anaesthesia in high-risk elderly patients for orthopaedic surgeries: a case series. Indian J Anaesth 2023;67:557-60.'},
{t:'ref', text:'[8] Patel DD, Patel HJ, Patel SD. Comparison of fractionated versus bolus dose of spinal anaesthesia in lower limb surgeries. J Obstet Anaesth Crit Care 2023;13:78-83.'},
{t:'ref', text:'[9] Hussien RM, Ibrahim TH, El-Sharkawy TY. Sequential intrathecal injection of fentanyl and hyperbaric bupivacaine improves spinal anaesthesia characteristics. Korean J Anesthesiol 2019;72:460-7.'},
{t:'ref', text:'[10] World Medical Association. World Medical Association Declaration of Helsinki: ethical principles for medical research involving human subjects. JAMA 2013;310:2191-4.'},
{t:'ref', text:'[11] Derakhshan P, Faiz SHR, Rahimzadeh P, Salehi R, Khaef G. A comparison of the effect of fractionated and bolus dose injection on spinal anesthesia for lower limb surgery: a randomized clinical trial. Anesth Pain Med 2020;10:e102228.'},
{t:'ref', text:'[12] Bromage PR. Epidural Analgesia. Philadelphia: WB Saunders; 1978. p. 144.'},
{t:'ref', text:'[13] Badheka JP, Chhaya VA, Vyas AM, Parmar VS. Comparison of fractionated dose versus bolus dose injection in spinal anaesthesia for elective caesarean section. Indian J Anaesth 2017;61:847-52.'},
{t:'ref', text:'[14] Pareek A, Kochar D, Kachhawa R, Bohra K. Fractionated dose versus bolus dose of isobaric injection ropivacaine (0.75%) for patients undergoing elective caesarean section under spinal anaesthesia: a randomized, double-blind study. J Appl Pharm Res 2023;11:18-23.'},
{t:'ref', text:'[15] Srivastava N, Ahluwalia P, Jheetay GS, Singh G. Bolus dose versus fractionated dose injection of hyperbaric bupivacaine in spinal anaesthesia among adult patients undergoing lower limb surgery: a prospective study. Indian J Clin Anaesth 2020;7:238-44.'},
{t:'ref', text:'[16] Arulpari TT, Ganapathysubramanian M, Chandrasekaran RP. Comparison of fractionated dose versus bolus dose of bupivacaine hyperbaric (0.5%) with buprenorphine in spinal anaesthesia for lower limb surgeries. Apollo Med 2025;22:92-7.'},
{t:'ref', text:'[17] von Elm E, Altman DG, Egger M, Pocock SJ, Gøtzsche PC, Vandenbroucke JP; STROBE Initiative. The Strengthening the Reporting of Observational Studies in Epidemiology (STROBE) statement: guidelines for reporting observational studies. Lancet 2007;370:1453-7.'},
{t:'ref', text:'[18] Hernán MA, Robins JM. Using big data to emulate a target trial when a randomized trial is not available. Am J Epidemiol 2016;183:758-64.'},
{t:'ref', text:'[19] Austin PC. An introduction to propensity score methods for reducing the effects of confounding in observational studies. Multivariate Behav Res 2011;46:399-424.'},
{t:'ref', text:'[20] Zou G. A modified Poisson regression approach to prospective studies with binary data. Am J Epidemiol 2004;159:702-6.'},
{t:'ref', text:'[21] VanderWeele TJ, Ding P. Sensitivity analysis in observational research: introducing the E-value. Ann Intern Med 2017;167:268-74.'},
{t:'ref', text:'[22] Textor J, van der Zander B, Gilthorpe MS, Liśkiewicz M, Ellison GT. Robust causal inference using directed acyclic graphs: the R package “dagitty”. Int J Epidemiol 2016;45:1887-94.'},
{t:'ref', text:'[23] Schisterman EF, Cole SR, Platt RW. Overadjustment bias and unnecessary adjustment in epidemiologic studies. Epidemiology 2009;20:488-95.'},
{t:'ref', text:'[24] Lipsitch M, Tchetgen Tchetgen E, Cohen T. Negative controls: a tool for detecting confounding and bias in observational studies. Epidemiology 2010;21:383-8.'},

];
