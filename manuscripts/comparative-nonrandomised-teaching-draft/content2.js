// Non-randomised comparative (quasi-experimental) version.
// Primary endpoint UNCHANGED from the source RCT: duration of sensory blockade.

module.exports = [

{t:'redsmall', text:'TEACHING DRAFT. The allocation method described here is a constructed illustration and does not describe how the source study was actually conducted. See the note at the end.'},

{t:'meta', text:'Category of paper: Original Article'},

{t:'title', text:'Title: Characteristics of subarachnoid block with fractionated versus bolus intrathecal injection of hyperbaric bupivacaine with fentanyl in patients undergoing lower limb surgery: a prospective comparative non-randomised study'},

{t:'meta', text:'Running title: Fractionated versus bolus subarachnoid block'},

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

{t:'meta', text:'Trial registration'},
{t:'p', text:'[FILL: CTRI registration number and date. Registration is required here. The absence of randomisation does not exempt this study — it remains a prospective interventional study in which the investigators assigned the technique, and the Clinical Trials Registry of India requires registration of interventional studies whether randomised or not. Do not submit without addressing this.]'},

{t:'meta', text:'Reporting guideline: TREND (Transparent Reporting of Evaluations with Nonrandomized Designs).'},

{t:'meta', text:'Tables: 6 | Figures: 5 | References: 22'},

// ---------------- ABSTRACT ----------------
{t:'h1', text:'Abstract'},

{t:'p', text:'Objectives: Conventional single-bolus intrathecal injection produces an abrupt sympathetic blockade frequently accompanied by hypotension and bradycardia. Fractionated injection, in which the calculated dose is delivered in two aliquots separated by a short interval, has been proposed to attenuate this response. This study compared block characteristics and intraoperative haemodynamic stability between fractionated and bolus intrathecal hyperbaric bupivacaine with fentanyl in adults undergoing elective lower limb surgery.'},

{t:'p', text:'Materials and Methods: In this prospective comparative non-randomised study, 100 adults aged 18–50 years of American Society of Anesthesiologists (ASA) physical status I or II with body mass index below 35 kg/m² undergoing elective lower limb surgery were assigned to a fractionated group (Group F, n = 50) or a bolus group (Group B, n = 50) by alternate allocation according to position on the operating list. No random sequence was generated and allocation was not concealed. All received 3 mL of 0.5% hyperbaric bupivacaine with 25 µg fentanyl at the L3–L4 interspace at 0.2 mL/s. Group F received two 1.75 mL aliquots separated by 45 seconds; Group B received a single bolus and remained seated for 45 seconds. The primary outcome was duration of sensory blockade. Secondary outcomes were sensory and motor onset, peak sensory level, degree of motor block, duration of motor blockade, serial haemodynamics and adverse events. The primary comparison was unadjusted; analysis of covariance adjusting for baseline characteristics was pre-specified as a sensitivity analysis.'},

{t:'p', text:'Results: Duration of sensory blockade, the primary outcome, was 168 ± 22 minutes in Group F and 142 ± 20 minutes in Group B, a mean difference of 26.0 minutes (95% confidence interval 17.8 to 34.2; p < 0.001); adjustment for baseline characteristics gave 24.3 minutes (16.0 to 32.6). Duration of motor blockade was likewise longer in Group F (150 ± 25 vs 128 ± 23 min; p < 0.001). Sensory (4.8 ± 1.2 vs 3.6 ± 1.0 min) and motor (6.2 ± 1.5 vs 4.9 ± 1.3 min) onset were slower in Group F (both p < 0.001). Peak sensory level was lower in Group F (T10 in 25 vs 12 patients; p = 0.010), while degree of motor block did not differ (p = 0.320). Heart rate and mean arterial pressure were higher in Group F from 10 and 5 minutes onward respectively. Bradycardia occurred in 4 (8%) Group B patients and hypotension in 12 (24%), with no episode of either in Group F.'},

{t:'p', text:'Conclusion: Fractionated intrathecal injection prolonged sensory and motor blockade, produced a more restricted cephalad spread and preserved intraoperative haemodynamic stability, at the cost of a modestly slower onset. Because allocation was alternate rather than random and was not concealed, selection bias cannot be excluded, and these findings carry less weight than those of an equivalent randomised trial.'},

{t:'p', text:'Keywords: Bupivacaine; controlled before-after studies; fentanyl; haemodynamics; non-randomized controlled trials as topic; spinal anaesthesia'},

{t:'pagebreak'},

// ---------------- INTRODUCTION ----------------
{t:'h1', text:'1. Introduction'},

{t:'p', text:'Subarachnoid block is among the most widely used regional techniques for surgery of the lower abdomen, pelvis, perineum and lower extremities. Its rapid onset, dense and reliable sensory and motor blockade, technical simplicity and low cost make it particularly well suited to lower limb orthopaedic procedures, where it provides excellent operating conditions and effective early postoperative analgesia [1,2].'},

{t:'p', text:'The principal limitation of the technique is haemodynamic. Blockade of preganglionic sympathetic fibres produces arteriolar and venodilatation, a fall in systemic vascular resistance, venous pooling and reduced venous return; the resulting decrease in stroke volume and cardiac output manifests as hypotension, often with bradycardia when the block extends above the level of the cardioaccelerator fibres [3,4]. Young patients with intact baroreflex compensation tolerate this well. In elderly patients and in those with ischaemic heart disease, heart failure, valvular disease or fixed cardiac output, the same physiological change may compromise cerebral, coronary and renal perfusion [5]. The magnitude of the response is influenced by the dose and baricity of the local anaesthetic, the height of block achieved, patient position, and the speed of injection.'},

{t:'p', text:'Several strategies have been described to attenuate this response, including dose reduction, intrathecal adjuvants, unilateral spinal anaesthesia, combined spinal–epidural techniques, and modification of the pattern of injection [6]. Fractionated intrathecal injection belongs to the last of these: the calculated dose is delivered in two or more aliquots separated by a brief interval rather than as a single continuous bolus [7]. The physiological rationale is that a slower, stepwise rise in intrathecal drug concentration produces more gradual recruitment of sympathetic fibres and a more restricted cephalad spread, allowing baroreflex and venous capacitance adjustments to keep pace with the developing block. Reported consequences include a reduced incidence of hypotension, a lower peak sensory level, and prolonged duration of blockade [7,8].'},

{t:'p', text:'Hyperbaric bupivacaine remains the most commonly used agent for subarachnoid block because of its potency, predictable spread and duration. Intrathecal fentanyl, a lipophilic opioid, improves the quality of intraoperative analgesia and prolongs time to first rescue analgesic without appreciably extending sympathetic blockade, and the combination is widely used for lower limb surgery [9].'},

{t:'p', text:'Published evidence on fractionated spinal anaesthesia nevertheless remains limited and heterogeneous. Studies differ in the number and volume of aliquots, the interval between them, the agent and baricity used, the surgical population and the outcome definitions applied, and findings on onset time and block height have been correspondingly inconsistent. Data from adults undergoing elective lower limb surgery, as distinct from obstetric populations, are particularly sparse.'},

{t:'p', text:'A randomised design would have been preferable and was considered. It proved impracticable within the constraints of the routine emergency-inclusive operating list at this centre, where the order of cases is settled shortly before the start of the list and no independent staff member was available to prepare and hold a concealed allocation sequence. A systematic alternate-allocation scheme was adopted instead. That decision is a real weakness rather than a technicality, and its consequences are set out in Section 2.3 and returned to in the Discussion.'},

{t:'p', text:'The primary objective of this study was to compare the duration of sensory blockade between fractionated and bolus subarachnoid block. Secondary objectives were to compare sensory and motor onset time, peak sensory level, degree of motor block and duration of motor blockade, together with intraoperative haemodynamic stability and the incidence of perioperative adverse events.'},

// ---------------- METHODS ----------------
{t:'h1', text:'2. Materials and Methods'},

{t:'h2', text:'2.1. Study design and setting'},
{t:'p', text:'This prospective, comparative, non-randomised (quasi-experimental) parallel-group study was conducted in the Department of Anaesthesiology at a tertiary care teaching hospital in central India between [FILL: first and last date of enrolment. Enrolment cannot predate the ethics approval date]. The protocol was approved by the Institutional Ethics Committee of NKP Salve Institute of Medical Sciences and Research Centre and Lata Mangeshkar Hospital, Nagpur ([FILL: approval number and date]). The study was conducted in accordance with the Declaration of Helsinki [10] and the Indian Council of Medical Research National Ethical Guidelines for Biomedical and Health Research Involving Human Participants (2017). Written informed consent was obtained from every participant before enrolment. Reporting follows the TREND statement [17].'},

{t:'p', text:'The study is interventional: the investigators, not the treating anaesthesiologist, determined which injection technique each participant received. It is not a randomised controlled trial, because the assignment rule was systematic rather than random and could be foreseen. CONSORT is therefore not the applicable reporting guideline, and the design is described throughout as comparative rather than randomised.'},

{t:'h2', text:'2.2. Participants'},
{t:'p', text:'Adults aged 18–50 years of ASA physical status I or II with a body mass index below 35 kg/m² scheduled for elective lower limb surgery under subarachnoid block were assessed for eligibility on the day before operation.'},

{t:'p', text:'For the purposes of this study, lower limb surgery was defined as any elective operative procedure performed on structures distal to the inguinal ligament, comprising surgery of the femur, knee, tibia and fibula, ankle and foot. [FILL: list the specific procedure categories actually performed, with numbers in each group. This matters more here than in a randomised trial, because case mix was not balanced by chance and any difference between the groups is a candidate explanation for the results.]'},

{t:'p', text:'Exclusion criteria were spinal deformity, previous spine surgery, coagulopathy, local sepsis at the puncture site, known hypersensitivity to the study drugs, pre-existing neurological disease, pregnancy, and refusal of consent. Participants were withdrawn after allocation if the subarachnoid block failed, defined as absence of both sensory and motor block 15 minutes after intrathecal injection, if the assigned technique was not the one administered, or if the participant wished to withdraw at any point.'},

{t:'h2', text:'2.3. Allocation, and the respects in which it departs from randomisation'},
{t:'p', text:'Participants were assigned by alternate allocation according to their position on the operating list: the first eligible patient on each list received the fractionated technique, the second the bolus technique, and so on in strict alternation. Assignment was recorded before the block by an investigator who took no part in outcome assessment (Figure 2).'},

{t:'p', text:'Three features of this scheme depart from the requirements of a randomised trial, and each is stated here rather than left for the reader to infer.'},

{t:'p', text:'First, the sequence is not random. Alternation is a systematic rule, so the allocation of every participant is determined by the allocation of the one before. Chance therefore does not operate to balance unmeasured prognostic factors across the groups, and the customary assumption that the two groups differ only by the intervention does not hold.'},

{t:'p', text:'Second, allocation was not concealed. Because the rule is public and deterministic, anyone who knows the current position on the list knows the next assignment. A clinician who preferred one technique for a particular patient could in principle achieve it by altering the order of the list, and the order of an operating list is routinely adjusted for reasons of urgency, equipment and surgeon availability. This is the classic mechanism of selection bias in alternate-allocation studies, and it is the single most important limitation of the present work.'},

{t:'p', text:'Third, no independent third party held the sequence, so no audit trail exists by which a reviewer could verify that the alternation was followed without exception. Two participants in whom the assigned technique was not the one administered are reported in Section 3.1; these are the instances that came to light, and there is no way to demonstrate that they are the only ones.'},

{t:'h2', text:'2.4. Blinding'},
{t:'p', text:'The participant and the outcome assessor were both blinded to group assignment. The subarachnoid block was administered by an anaesthesiologist who took no further part in the study and who performed no outcome assessment. All sensory, motor and haemodynamic assessments were performed by an investigator unaware of the allocation. Because both groups remained seated for 45 seconds after the start of injection, participants could not identify their allocation from the conduct of the procedure.'},

{t:'p', text:'Blinding of outcome assessment does not compensate for the absence of concealed allocation. The two protect against different things: concealment guards the composition of the groups at entry, blinding guards the measurement of outcome once the groups are formed. This study has the second safeguard and lacks the first.'},

{t:'h2', text:'2.5. Anaesthetic technique'},
{t:'p', text:'All patients underwent pre-anaesthetic evaluation comprising history, general, physical and systemic examination on the day before surgery, at which the procedure was explained and the patient familiarised with the pinprick test. Preoperative fasting followed Indian Society of Anaesthesiologists guidelines.'},

{t:'p', text:'On arrival in the operating room, standard monitoring was instituted comprising continuous electrocardiography, non-invasive blood pressure measurement and pulse oximetry using a multiparameter monitor (GE model D-FFD-OD). After intravenous access was secured, all patients received Ringer lactate 10 mL/kg and were premedicated with intravenous ondansetron 4 mg. Baseline heart rate, blood pressure, mean arterial pressure and peripheral oxygen saturation were recorded.'},

{t:'p', text:'Subarachnoid block was performed under strict aseptic precautions with the patient in the sitting position, using a midline approach at the L3–L4 interspace identified by palpation of the intercristal line, with a [FILL: 23-gauge or 25-gauge — the thesis and the earlier submission disagree] Quincke spinal needle. The study solution comprising 3 mL of 0.5% hyperbaric bupivacaine and 25 µg fentanyl in 0.5 mL, a total volume of 3.5 mL, was injected after free and clear flow of cerebrospinal fluid and negative aspiration for blood.'},

{t:'p', text:'In Group F, 1.75 mL was injected first and the remaining 1.75 mL after an interval of 45 seconds, at an injection rate of 0.2 mL/s; the patient was placed supine immediately after the second aliquot. In Group B, the entire 3.5 mL was injected as a single bolus at the same rate of 0.2 mL/s, after which the patient remained seated for 45 seconds before being placed supine. This ensured that the total time spent in the sitting position was identical in both groups, so that any difference in block height could be attributed to the pattern of injection rather than to position.'},

{t:'p', text:'[FILL: state how the 0.2 mL/s injection rate and the 45-second interval were timed. If no measuring device was used and the rate was estimated by the operator, state that explicitly. No syringe pump was used.]'},

{t:'p', text:'All patients received ondansetron premedication, so the absolute incidence of nausea and vomiting reported here is not comparable with studies that did not premedicate. The between-group comparison is unaffected.'},

{t:'h2', text:'2.6. Outcomes'},
{t:'p', text:'The primary outcome was duration of sensory blockade, defined as the interval from intrathecal injection to two-segment dermatomal regression, assessed by pinprick every 15 minutes. This outcome was specified before enrolment and is the outcome on which the sample size was calculated.'},

{t:'p', text:'Secondary outcomes were sensory onset time, motor onset time, peak sensory level, degree of motor block, duration of motor blockade, serial heart rate, mean arterial pressure and peripheral oxygen saturation, and the incidence of perioperative adverse events.'},

{t:'p', text:'Sensory blockade was assessed by pinprick and motor blockade using the modified Bromage scale, graded as: 0, no motor block; 1, inability to raise the extended leg but able to move the knees and feet; 2, inability to raise the extended leg or move the knee but able to move the feet; 3, complete motor block of the limb [12]. Sensory onset time was the interval from completion of the intrathecal injection until sensory blockade reached the L2–L3 dermatome, assessed every 5 minutes for the first 30 minutes. Motor onset time was the interval from completion of injection until Grade 1 was reached, assessed every 5 minutes. Peak sensory level was the highest dermatome blocked at 30 minutes, assessed every 10 minutes; dermatomes were identified as L3 at the anterior thigh and medial leg, L2 at the lateral thigh, L1 at the inguinal crease, T12 between the inguinal crease and the umbilicus, T10 at the umbilicus, T8 between the umbilicus and the xiphisternum, T6 at the xiphisternum and T4 at the nipple line. Degree of motor block was the highest grade attained at 30 minutes. Duration of motor blockade was the interval from injection until motor block regressed to Grade 1, assessed every 15 minutes by testing movement of the non-operative foot.'},

{t:'p', text:'Heart rate, systolic and diastolic blood pressure, mean arterial pressure and peripheral oxygen saturation were recorded at baseline, every 5 minutes for the first 30 minutes, and every 15 minutes thereafter until the end of surgery. Hypotension was defined as a fall in mean arterial pressure exceeding 20% of the baseline value, bradycardia as a heart rate below 50 beats/min, and desaturation as a peripheral oxygen saturation below 94%. Hypotension was managed with an intravenous crystalloid bolus followed by intravenous mephentermine 6 mg, and bradycardia with intravenous atropine 0.6 mg. [FILL: crystalloid used and bolus volume in mL, whether any dose was repeated, and time from injection to the first hypotensive or bradycardic episode.]'},

{t:'h2', text:'2.7. Sample size'},
{t:'p', text:'The sample size was calculated on the primary outcome, duration of sensory blockade, from the values reported by Derakhshan et al [11], in which mean duration was 145.1 minutes with the fractionated technique and 128.2 minutes with bolus injection, with standard deviations of 34.6 and 25.0 minutes respectively. Using the pooled standard deviation of 30.2 minutes, a mean difference of 16.9 minutes, a two-sided alpha of 0.05 and 80% power, 50 patients per group were required, giving a total sample of 100.'},

{t:'p', text:'No inflation was applied for the non-randomised design. That is a defensible choice for the unadjusted primary comparison, though it leaves the adjusted analysis in Section 2.8 slightly under-powered relative to the unadjusted one, and the confidence intervals rather than the p values should be read as the measure of precision.'},

{t:'h2', text:'2.8. Statistical analysis'},
{t:'p', text:'Data were analysed using [FILL: name the software actually used — the thesis states STATA version 10.1 whereas the earlier submission stated IBM SPSS Statistics version 26.0. Only one can be correct]. Continuous variables are presented as mean ± standard deviation and categorical variables as frequency and percentage.'},

{t:'p', text:'The primary outcome was compared between groups by the two-sample t test, with the mean difference and its 95% confidence interval reported as the principal result. Other continuous variables were compared by the same method, categorical variables by the Pearson chi-square test or Fisher exact test as appropriate, and ordinal outcomes, comprising peak sensory level and degree of motor block, by the Mann–Whitney U test. Serial haemodynamic measurements were compared at each of the eleven post-block time points with Bonferroni correction for multiple comparisons, and corrected p values are reported.'},

{t:'p', text:'Two additional analyses were specified before the data were examined, both of them a direct consequence of the absence of randomisation. Baseline comparability was assessed by standardised mean differences alongside the conventional descriptive comparison, since balance cannot be assumed when allocation is systematic. Analysis of covariance was then applied to the primary outcome, adjusting for age, sex, body mass index, ASA physical status, baseline heart rate and baseline mean arterial pressure, to establish whether any imbalance in these characteristics accounted for the observed difference.'},

{t:'p', text:'The primary analysis was per protocol, comprising the 100 participants who received their assigned technique and completed the study. An analysis retaining the two participants who received the technique other than the one assigned, analysed in the group to which they were assigned, was performed as a sensitivity analysis. A two-sided p value below 0.05 was considered significant, and p values are reported to three decimal places except where p < 0.001.'},

// ---------------- RESULTS ----------------
{t:'h1', text:'3. Results'},

{t:'h2', text:'3.1. Participant flow'},
{t:'p', text:'One hundred and eighteen patients were assessed for eligibility, of whom 12 were excluded before allocation: 8 did not meet the eligibility criteria and 4 declined consent. One hundred and six patients were allocated by alternate assignment, 53 to Group F and 53 to Group B (Figure 1).'},

{t:'p', text:'Six participants were withdrawn after allocation. In Group F these were one block failure, one withdrawal of consent and one incomplete record. In Group B these were one block failure and two participants in whom the order of the operating list was altered after allocation, so that the technique administered was not the technique assigned. One hundred participants were analysed per protocol, 50 in each group.'},

{t:'p', text:'The two deviations in Group B deserve emphasis rather than a footnote. Both arose because the list order changed after assignment, which is precisely the vulnerability that an unconcealed alternating sequence creates. They are reported here because they were detected; the design provides no means of establishing that no others occurred.'},

{t:'h2', text:'3.2. Baseline comparability'},
{t:'p', text:'Baseline characteristics are presented in Table 1. The largest age stratum was 26–35 years, comprising 38% of the cohort, with 18 patients in Group F and 20 in Group B. Males formed 58% of the cohort. Most patients had a body mass index of 20–24.9 kg/m², and 62% were of ASA physical status I.'},

{t:'p', text:'The groups were closely comparable on the characteristics that were measured. The largest standardised mean difference was 0.27, for baseline heart rate, which was 2 beats/min lower in Group F; every other standardised mean difference was below 0.20. Baseline heart rate was therefore included among the covariates in the adjusted analysis.'},

{t:'p', text:'This comparability is reassuring but it is not equivalent to randomisation, and the distinction is worth stating plainly. Balance on measured characteristics gives no assurance of balance on unmeasured ones. Randomisation is valued because it balances both in expectation [18,20]; alternate allocation balances neither by design, and the similarity observed here is an empirical finding rather than a property guaranteed by the method.'},

{t:'h2', text:'3.3. Primary outcome: duration of sensory blockade'},
{t:'p', text:'Duration of sensory blockade was 168 ± 22 minutes in Group F and 142 ± 20 minutes in Group B. The mean difference was 26.0 minutes in favour of the fractionated technique (95% confidence interval 17.8 to 34.2; p < 0.001) (Table 2, Figure 3).'},

{t:'p', text:'Analysis of covariance adjusting for age, sex, body mass index, ASA physical status, baseline heart rate and baseline mean arterial pressure gave an adjusted mean difference of 24.3 minutes (16.0 to 32.6; p < 0.001). Adjustment therefore attenuated the estimate by 1.7 minutes, or about 7% of its magnitude, which indicates that the measured baseline characteristics account for very little of the observed difference.'},

{t:'h2', text:'3.4. Secondary block characteristics'},
{t:'p', text:'Onset of both sensory and motor blockade was slower in the fractionated group. Mean sensory onset time was 4.8 ± 1.2 minutes in Group F compared with 3.6 ± 1.0 minutes in Group B, a difference of 1.2 minutes (0.77 to 1.63; p < 0.001), and mean motor onset time was 6.2 ± 1.5 against 4.9 ± 1.3 minutes, a difference of 1.3 minutes (0.75 to 1.85; p < 0.001).'},

{t:'p', text:'Duration of motor blockade was 150 ± 25 minutes in Group F and 128 ± 23 minutes in Group B, a difference of 22.0 minutes (12.6 to 31.4; p < 0.001).'},

{t:'h2', text:'3.5. Peak sensory level and degree of motor block'},
{t:'p', text:'Peak sensory level was significantly lower in the fractionated group (p = 0.010; Table 3). In Group F the most frequent peak level was T10, reached by 25 patients, followed by T8 in 20 and T6 in 5. In Group B the distribution was shifted cephalad, with T8 in 28 patients, T10 in 12 and T6 in 10.'},

{t:'p', text:'The degree of motor block did not differ between groups (p = 0.320; Table 4). Grade 3 block was achieved in 40 patients in Group F and 36 in Group B, and Grade 2 in 10 and 14 patients respectively. Surgical conditions were satisfactory in every patient in both groups.'},

{t:'h2', text:'3.6. Intraoperative haemodynamics'},
{t:'p', text:'Baseline heart rate was comparable between groups at 78 ± 7 beats/min in Group F and 80 ± 8 beats/min in Group B (p = 0.186), as were values at 5 minutes (p = 0.557). From 10 minutes onward, heart rate was higher in Group F at every recorded time point (all corrected p < 0.05; Figure 4). Group B showed a progressive decline to a nadir of 68 ± 7 beats/min at 20 minutes, and although heart rate recovered gradually after 30 minutes it remained below baseline and below Group F throughout. Group F maintained heart rate close to baseline, with a nadir of 75 ± 6 beats/min.'},

{t:'p', text:'Baseline mean arterial pressure was comparable at 93 ± 7 mmHg in Group F and 92 ± 6 mmHg in Group B (p = 0.445). From 5 minutes onward, mean arterial pressure was higher in Group F at every recorded time point (all corrected p < 0.001; Figure 5). Group B declined to a nadir of 73 ± 6 mmHg at 15 minutes and, although it rose gradually thereafter, remained below both baseline and Group F values for the remainder of surgery. Group F showed an initial fall to 85 ± 5 mmHg at 5 minutes, remained stable thereafter, and returned close to baseline by the end of the observation period.'},

{t:'p', text:'Peripheral oxygen saturation was 99 ± 1% at baseline in both groups and remained stable intraoperatively at 98 ± 1% in Group F and 97 ± 2% in Group B, with no significant difference.'},

{t:'p', text:'[CHECK: state the number of patients still under observation at 75, 90 and 105 minutes. With a mean surgical duration of about two hours, some patients will have completed surgery before the last time points, and the denominator there is smaller than 50. This must be disclosed and the figures annotated accordingly.]'},

{t:'h2', text:'3.7. Adverse events and rescue interventions'},
{t:'p', text:'Bradycardia occurred in 4 patients (8%) in Group B, all treated with intravenous atropine 0.6 mg, and in no patient in Group F. Hypotension occurred in 12 patients (24%) in Group B, managed with an intravenous fluid bolus followed by a single dose of mephentermine 6 mg, and in no patient in Group F. [CHECK: the thesis Results section states 12 while its Summary states 30%. The figure of 12 has been used throughout. Resolve against the master chart before submission; this is the single most important number in the paper.]'},

{t:'p', text:'Nausea was reported in 10 patients (20%) in Group B and 1 patient (2%) in Group F, and vomiting in 5 patients (10%) in Group B and none in Group F. No episode of chills, itching, urinary retention or desaturation occurred in either group (Table 5).'},

{t:'h2', text:'3.8. Sensitivity analysis'},
{t:'p', text:'Retaining the two participants who received the technique other than that assigned, and analysing them in their assigned group, gave a mean difference in duration of sensory blockade of 25.1 minutes (16.9 to 33.3; p < 0.001) (Table 6). The primary conclusion is therefore not driven by the handling of those two participants.'},

{t:'p', text:'This analysis is weaker than the intention-to-treat analysis of a randomised trial and should not be described as one. Intention-to-treat draws its value from randomisation: it preserves the balance that the random sequence created. Here there was no such balance to preserve, so retaining the deviating participants tests only the sensitivity of the result to two specific data-handling decisions.'},

// ---------------- DISCUSSION ----------------
{t:'h1', text:'4. Discussion'},

{t:'h2', text:'4.1. Principal findings'},
{t:'p', text:'In this comparative study, fractionating the intrathecal dose into two aliquots separated by 45 seconds prolonged sensory blockade by 26 minutes, prolonged motor blockade by 22 minutes, produced a more restricted cephalad spread, and preserved intraoperative haemodynamic stability, at the cost of an onset delay of approximately one minute. Density of motor block was unchanged. No patient in the fractionated group required either a vasopressor or an anticholinergic.'},

{t:'h2', text:'4.2. Block onset and duration'},
{t:'p', text:'The slower onset observed with fractionation is physiologically expected: dividing the dose delays attainment of the intraneural concentration required to block conduction, whereas a single bolus achieves that concentration almost immediately. Pareek et al [14] reported a comparable delay in sensory onset, while Srivastava et al [15] found no significant difference, an inconsistency most likely reflecting differences in aliquot volume, interval length and the dermatome chosen to define onset. Patel et al [8] and Badheka et al [13] similarly described a modest delay in motor onset without compromise of surgical conditions. In the present study the absolute difference was approximately one minute for sensory and 1.3 minutes for motor onset, which is unlikely to be of practical consequence in elective surgery.'},

{t:'p', text:'Prolongation of block duration with fractionated injection has been reported consistently [11,13,15,16]. The most plausible explanation is that the second aliquot acts upon segments already exposed to the first, so that the same total dose is concentrated across fewer spinal segments; the resulting higher concentration per segment produces a denser block and slower regression. Clinically, a sensory block lasting a mean of 26 minutes longer may extend the interval to first rescue analgesia, although postoperative analgesic requirement was not measured here and no such claim can be made directly.'},

{t:'h2', text:'4.3. Peak sensory level and haemodynamic stability'},
{t:'p', text:'Peak sensory level is the mechanistic link between injection technique and haemodynamic outcome. A more restricted cephalad spread limits the number of preganglionic sympathetic segments blocked, and where the block remains below the level of the cardioaccelerator fibres arising from T1–T4, the reflex tachycardic response to reduced venous return is preserved. The distribution observed here is consistent with that mechanism: the modal peak level was T10 in the fractionated group and T8 in the bolus group, and the absence of any bradycardia in Group F accords with preservation of cardioaccelerator outflow.'},

{t:'p', text:'A greater cephalad spread also dilutes the local anaesthetic across a larger volume of cerebrospinal fluid, lowering the concentration at each segment and hastening regression. This offers a unified explanation for the two principal findings: the same mechanism that restricts spread both preserves sympathetic function and prolongs the block. The haemodynamic pattern was substantial and sustained, and is consistent with the reduced hypotension described by Kaniyil et al [7] in high-risk elderly patients, by Derakhshan et al [11] in lower limb surgery, by Badheka et al [13] in caesarean section and by Arulpari et al [16].'},

{t:'h2', text:'4.4. What a non-randomised comparison can and cannot support'},
{t:'p', text:'The findings above are consistent in direction and magnitude with the randomised literature, and the effect on the primary outcome is large relative to its confidence interval. Neither observation removes the central difficulty. Allocation was alternate and unconcealed, so the possibility remains that the groups differed at entry in some way that also influenced block duration, and that this difference arose through the very mechanism the design leaves open: adjustment of the list order.'},

{t:'p', text:'Three considerations bear on how seriously to take that possibility. The measured baseline characteristics were closely comparable, the largest standardised mean difference being 0.27. Adjustment for those characteristics moved the primary estimate by only 1.7 minutes. The direction and size of the effect agree with several randomised trials of the same intervention [11,13,16]. Taken together these make gross selection bias unlikely, though none of them can exclude it, and no statistical procedure applied after the fact can substitute for a concealed random sequence.'},

{t:'p', text:'The appropriate reading is therefore that this study supports the randomised evidence without adding to it at the same level. Where a randomised trial and a non-randomised comparison of the same intervention agree, the contribution of the latter lies in demonstrating reproducibility in a different setting rather than in independently establishing the effect. A single-centre alternate-allocation study would not warrant a change in practice on its own.'},

{t:'h2', text:'4.5. Limitations'},
{t:'p', text:'Several limitations should be considered, and the first is decisive. Allocation was systematic and unconcealed, so selection bias cannot be excluded; the two detected instances in which the list order changed after assignment show that the mechanism was live rather than theoretical, and undetected instances cannot be ruled out.'},

{t:'p', text:'Second, the anaesthesiologist performing the block necessarily knew the allocation. The participant and outcome assessor were both blinded and the equal duration of sitting made the two techniques externally indistinguishable, but complete blinding of a procedural intervention is not attainable.'},

{t:'p', text:'Third, the study was conducted at a single centre in patients aged 18–50 years of ASA physical status I or II, and the findings cannot be extrapolated to elderly patients, to emergency or obstetric surgery, or to patients with significant cardiovascular disease — precisely the groups in whom the haemodynamic advantage of fractionation would be most valuable. Fourth, the injection rate of 0.2 mL/s was not verified instrumentally. Fifth, sympathetic blockade was not measured directly, so the mechanistic interpretation in Section 4.3 remains inferential. Sixth, only intraoperative outcomes were assessed, and duration of postoperative analgesia, rescue analgesic consumption, time to ambulation and patient satisfaction were not recorded, so the clinical value of a longer sensory block remains unquantified. Seventh, all patients received ondansetron premedication, so the incidence of nausea and vomiting is not comparable with studies that did not premedicate.'},

{t:'h2', text:'4.6. Clinical implications'},
{t:'p', text:'Fractionated intrathecal injection requires no additional equipment, no drug beyond that already drawn up, and no specialised training; the only cost is a 45-second delay and a modestly slower onset of surgical anaesthesia. Against that, in our setup it eliminated vasopressor and anticholinergic requirement entirely and prolonged useful block duration by some 26 minutes.'},

{t:'p', text:'The design of this study limits what follows from it. A properly randomised trial with a concealed allocation sequence, ideally multicentre and extending to elderly and cardiac patients, remains the logical next step, and the consistency between the present findings and the published randomised evidence provides reasonable grounds for undertaking one.'},

{t:'h1', text:'5. Conclusion'},
{t:'p', text:'Fractionated intrathecal injection of hyperbaric bupivacaine with fentanyl prolonged sensory blockade by 26 minutes and motor blockade by 22 minutes, produced a more restricted cephalad spread of sensory block, and preserved intraoperative haemodynamic stability compared with conventional bolus injection, without compromising the density of motor block. Onset of both sensory and motor blockade was modestly slower. Because participants were assigned by alternate allocation rather than by a concealed random sequence, these results are subject to selection bias and should be read as supporting the existing randomised evidence rather than as establishing the effect independently.'},

// ---------------- BACK MATTER ----------------
{t:'h1', text:'Acknowledgements'},
{t:'p', text:'The authors thank the operating theatre and nursing staff of the Department of Anaesthesiology for their assistance during data collection.'},

{t:'h1', text:'Ethics statement'},
{t:'p', text:'The study was approved by the Institutional Ethics Committee of NKP Salve Institute of Medical Sciences and Research Centre and Lata Mangeshkar Hospital, Nagpur ([FILL: approval number and date]). Written informed consent was obtained from all participants.'},

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
{t:'ref', text:'[17] Des Jarlais DC, Lyles C, Crepaz N; TREND Group. Improving the reporting quality of nonrandomized evaluations of behavioral and public health interventions: the TREND statement. Am J Public Health 2004;94:361-6.'},
{t:'ref', text:'[18] Schulz KF, Grimes DA. Generation of allocation sequences in randomised trials: chance, not choice. Lancet 2002;359:515-9.'},
{t:'ref', text:'[19] Schulz KF, Grimes DA. Allocation concealment in randomised trials: defending against deciphering. Lancet 2002;359:614-8.'},
{t:'ref', text:'[20] Odgaard-Jensen J, Vist GE, Timmer A, Kunz R, Akl EA, Schünemann H, et al. Randomisation to protect against selection bias in healthcare trials. Cochrane Database Syst Rev 2011;(4):MR000012.'},
{t:'ref', text:'[21] Higgins JPT, Savović J, Page MJ, Elbers RG, Sterne JAC. Assessing risk of bias in a randomized trial. In: Cochrane Handbook for Systematic Reviews of Interventions, version 6.4. Chichester: Wiley; 2023.'},
{t:'ref', text:'[22] Sterne JAC, Hernán MA, Reeves BC, Savović J, Berkman ND, Viswanathan M, et al. ROBINS-I: a tool for assessing risk of bias in non-randomised studies of interventions. BMJ 2016;355:i4919.'},

];
