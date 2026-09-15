// ==========================================
// Safe Medicine Database
// ==========================================
const medicineDatabase = [
  {
    name: "Paracetamol (Acetaminophen)",
    category: "Pain Reliever / Antipyretic",
    dosage: "Max 4,000 mg (4 grams) per day for adults. Typically 500mg - 1000mg every 4 to 6 hours as needed.",
    warning: "Do not combine with other products containing paracetamol. Excessive dosage can lead to severe liver damage. Avoid alcohol while taking."
  },
  {
    name: "Metformin",
    category: "Antidiabetic (Oral)",
    dosage: "Usually started at 500mg once or twice daily, adjusted by a doctor up to a maximum of 2,000mg per day.",
    warning: "Should be taken with meals to reduce stomach upset. Inform your doctor if you experience severe muscle fatigue or breathing issues (signs of lactic acidosis)."
  },
  {
    name: "Amoxicillin",
    category: "Antibiotic (Penicillin)",
    dosage: "Typically 250mg - 500mg every 8 hours, or 500mg - 875mg every 12 hours, depending on the severity of the infection.",
    warning: "Finish the entire prescribed course even if you feel better. Stopping early can lead to bacterial resistance. Take with or without food."
  },
  {
    name: "Aspirin (Acetylsalicylic Acid)",
    category: "NSAID / Antiplatelet",
    dosage: "Low-dose for heart protection is usually 75mg - 150mg once daily. Pain relief dosage is 325mg - 650mg every 4 hours.",
    warning: "Can cause stomach bleeding. Take with food or milk. Avoid giving to children or teenagers due to the risk of Reye's Syndrome."
  },
  {
    name: "Atorvastatin",
    category: "Cholesterol Lowering (Statin)",
    dosage: "Usually 10mg - 80mg once daily, taken at any time of day.",
    warning: "Avoid large quantities of grapefruit juice as it increases the risk of side effects like muscle pain or liver toxicity. Report unexplained muscle tenderness."
  },
  {
    name: "Warfarin",
    category: "Anticoagulant (Blood Thinner)",
    dosage: "Highly individualized based on INR blood test results. Taken once daily at the same time.",
    warning: "Maintain a consistent intake of green leafy vegetables (rich in Vitamin K, which can reverse Warfarin's effect). Report any unusual bruising or bleeding immediately."
  }
];

// ==========================================
// Drug Safety Quiz Questions
// ==========================================
const quizQuestions = [
  {
    question: "What is the correct action if you miss a dose of a daily prescribed medication?",
    options: [
      "Double the dose the next day to catch up.",
      "Take the missed dose as soon as you remember, unless it is close to the next dose.",
      "Stop taking the medicine entirely.",
      "Wait 48 hours before taking the next tablet."
    ],
    answer: 1
  },
  {
    question: "Which of these is a common food-drug interaction warning for Atorvastatin?",
    options: [
      "Avoid green leafy vegetables.",
      "Avoid large amounts of grapefruit juice.",
      "Do not drink milk.",
      "Take only with carbonated water."
    ],
    answer: 1
  },
  {
    question: "What is the name of the GMCH campaign that ensures zero drugs are prescribed outside the hospital?",
    options: [
      "Swachh Ghati Abhiyan",
      "Chhittimukta Ghati Abhiyan",
      "Digital Store Mission",
      "National Pharmacovigilance Program"
    ],
    answer: 1
  },
  {
    question: "What does 'PvPi' stand for in Indian clinical medicine?",
    options: [
      "Pharmacy Verification and Patient Interaction",
      "Pharmacovigilance Program of India",
      "Prescription Validity and Patient Index",
      "Preventive Vaccination Portal of India"
    ],
    answer: 1
  },
  {
    question: "Which of the following should you NEVER do with leftover antibiotics?",
    options: [
      "Keep them and self-medicate for your next cold or fever.",
      "Discard them safely or return them to a drug disposal center.",
      "Give them to a family member who has similar symptoms.",
      "Both A and C are dangerous and should be avoided."
    ],
    answer: 3
  }
];

// ==========================================
// Faculty Curriculum Vitae
// ==========================================
// `cv` holds the detailed profile. Members without a submitted CV still appear
// in the directory; their profile shows the summary only.
const facultyProfiles = [
  {
    id: "baig",
    name: "Dr. Mirza Shiraz Baig",
    designation: "Professor & Head",
    group: "Professor",
    photo: "assets/faculty/baig.jpg",
    cv: {
      qualifications: "MBBS, MD (Pharmacology)",
      current: "Professor & Head, Department of Pharmacology, GMC Chhatrapati Sambhajinagar. Deputy Dean (UG & PG) from 13 August 2021 to 25 September 2024.",
      experienceLabel: "Teaching Experience",
      experience: "24 years of undergraduate teaching (MBBS / BDS / allied courses) and 21 years of postgraduate (MD) teaching.",
      publications: "116 — 80 national and 36 international.",
      interests: "Clinical pharmacology, rational drug use, pharmacovigilance, medical education.",
      other: [
        "Attended around 180 international, national and regional CMEs and workshops.",
        "Member Secretary, Institutional Ethics Committee, Govt. Medical College, Chhatrapati Sambhajinagar.",
        "Chairman, Institutional Ethics Committee, Govt. Dental College, Chhatrapati Sambhajinagar.",
        "Member of the Research Society of the Institute.",
        "Accredited Speaker of the Maharashtra Medical Council, Mumbai.",
        "Invited as subject expert by the Ministry of Health & Family Welfare and DCGI for the revision of the National List of Essential Medicines, 2011.",
        "ICMR subject expert — Drug Development Initiatives proposals.",
        "Scientific Advisory Board member, Medical Research Council of Maharashtra (MRCM), March 2018 – February 2020."
      ],
      memberships: "National Association of Pharmacology and Therapeutics · Indian Society for Rational Pharmacotherapeutics · Medical Pharmacologists Society (MPS)"
    }
  },
  {
    id: "kulkarni",
    name: "Dr. Madhuri D. Kulkarni",
    designation: "Additional Professor",
    group: "Professor",
    photo: "assets/faculty/kulkarni.jpg"
  },
  {
    id: "razvi",
    name: "Dr. Syed Ubaid Razvi",
    designation: "Associate Professor",
    group: "Associate Professor",
    photo: "assets/faculty/razvi.jpg"
  },
  {
    id: "bahekar",
    name: "Dr. Satish E. Bahekar",
    designation: "Associate Professor",
    group: "Associate Professor",
    photo: "assets/faculty/bahekar.jpg",
    cv: {
      qualifications: "MBBS, MD (Pharmacology), PGDHHM",
      current: "Associate Professor, Department of Pharmacology, GMC Chhatrapati Sambhajinagar (10 years).",
      experience: "Associate Professor, Department of Pharmacology, SMBT IMS & RC, Nashik (4 years).",
      publications: "35",
      interests: "Clinical research, animal experimentation, pharmacovigilance, teaching and learning methods in medical academics.",
      other: [
        "Worked as Institutional Ethics Committee (IEC) coordinator.",
        "Worked as Pharmacovigilance coordinator.",
        "Editorial board member of several national and international medical journals.",
        "Handles operations of the Medical Drug Store, GMC Chhatrapati Sambhajinagar."
      ]
    }
  },
  {
    id: "bhagat",
    name: "Dr. Abhijeet H. Bhagat",
    designation: "Assistant Professor",
    group: "Assistant Professor",
    photo: "assets/faculty/bhagat.png",
    cv: {
      qualifications: "MBBS, MD (Pharmacology)",
      current: "Assistant Professor, Department of Pharmacology, GMC Chhatrapati Sambhajinagar (6 years).",
      experience: "Assistant Professor, Department of Pharmacology, MGM Medical College (5 years).",
      publications: "10",
      interests: "Clinical research, animal experimentation, pharmacovigilance, teaching and learning methods in medical academics.",
      other: [
        "Working as Pharmacovigilance coordinator for GMC Chhatrapati Sambhajinagar."
      ]
    }
  },
  {
    id: "chandekar",
    name: "Dr. Bhakti N. Chandekar",
    designation: "Assistant Professor",
    group: "Assistant Professor",
    photo: "assets/faculty/chandekar.jpg",
    cv: {
      qualifications: "MBBS, MD (Pharmacology)",
      current: "Assistant Professor, Department of Pharmacology, GMC Chhatrapati Sambhajinagar (10 months).",
      experience: "Assistant Professor, Department of Pharmacology, MGMMCH, Chhatrapati Sambhajinagar (2 years 4 months).",
      publications: "05",
      interests: "Clinical pharmacology, clinical research and clinical trials, pharmacoeconomics and health technology, competency-based medical education (CBME), pharmacoepidemiology.",
      other: [
        "Member of the Academic Council at MGMIHS, Navi Mumbai.",
        "Coordinator for Criterion II — Teaching, Learning & Evaluation of NAAC.",
        "Chief coordinator, Clinical Trial Centre.",
        "Coordinator for the Pharmacovigilance Therapeutic Committee at MGMIHS."
      ]
    }
  },
  { id: "rathod", name: "Dr. Arati Vitthal Rathod", designation: "Assistant Professor", group: "Assistant Professor", photo: "assets/faculty/rathod.jpg" },
  { id: "amreen", name: "Dr. Amreen Patil", designation: "Assistant Professor", group: "Assistant Professor", photo: "assets/faculty/amreen-patil.jpg" },
  { id: "kangulwar", name: "Dr. Shubham Kangulwar", designation: "Assistant Professor", group: "Assistant Professor", photo: "assets/faculty/kangulwar.png" },
  { id: "jabeen", name: "Dr. Fatema Jabeen", designation: "Senior Resident", group: "Senior Resident", photo: "assets/faculty/jabeen.jpg" },
  { id: "hambarde", name: "Dr. Sandhya Hambarde", designation: "Senior Resident", group: "Senior Resident", photo: "assets/faculty/hambarde.jpg" },
  { id: "kishore", name: "Dr. Kishore Patil", designation: "Senior Resident", group: "Senior Resident", photo: "assets/faculty/kishore-patil.jpg" },
  { id: "saleha", name: "Dr. Saleha Parveen", designation: "Senior Resident", group: "Senior Resident", photo: "assets/faculty/saleha-parveen.png" }
];

// ==========================================
// State Variables & Settings Persistence
// ==========================================
let currentQuizQuestionIndex = 0;
let quizScoreCount = 0;
let currentFontSizeMultiplier = 1.0;

const SETTINGS_KEY = "gmch-pharma-settings";
const PERSISTED_BODY_CLASSES = ["dark-contrast", "high-contrast", "line-spacing", "letter-spacing"];
const VALID_TABS = ["home", "faculty", "cv", "gallery", "video", "links",
  "academics", "research", "awards", "patient", "contact"];

function loadSettings() {
  try {
    return JSON.parse(localStorage.getItem(SETTINGS_KEY)) || {};
  } catch {
    return {};
  }
}

function saveSettings() {
  const settings = {
    theme: document.documentElement.getAttribute("data-theme") || "light",
    fontSize: currentFontSizeMultiplier,
    bodyClasses: PERSISTED_BODY_CLASSES.filter(cls => document.body.classList.contains(cls))
  };
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
  } catch {
    // Storage unavailable (private mode) — settings simply won't persist
  }
}

function applySavedSettings() {
  const settings = loadSettings();

  if (settings.theme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
    const themeBtn = document.getElementById("btnTheme");
    if (themeBtn) themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i> Light Mode';
  }

  if (typeof settings.fontSize === "number" && settings.fontSize >= 0.8 && settings.fontSize <= 1.6) {
    currentFontSizeMultiplier = settings.fontSize;
    if (currentFontSizeMultiplier !== 1.0) {
      document.documentElement.style.fontSize = `${currentFontSizeMultiplier * 100}%`;
    }
  }

  (settings.bodyClasses || []).forEach(cls => {
    if (PERSISTED_BODY_CLASSES.includes(cls)) {
      document.body.classList.add(cls);
      const btnMap = {
        "dark-contrast": "btnContrast",
        "high-contrast": "btnHighContrast",
        "line-spacing": "btnSpacing",
        "letter-spacing": "btnLetterSpacing"
      };
      const btn = document.getElementById(btnMap[cls]);
      if (btn) btn.classList.add("active");
    }
  });
}

// ==========================================
// Initialization on Page Load
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initTabNavigation();
  applySavedSettings();
  initAccessibility();
  initPublicationsSearch();

  // Safe Meds Checker
  renderMedDatabase("");
  document.getElementById("medSearch").addEventListener("input", (e) => {
    renderMedDatabase(e.target.value.toLowerCase());
  });

  loadQuizQuestion();
  initHeroCarousel();
  initScrollTop();
  initModalDismissal();
  renderPhotoWall();
  initCvDirectory();
  initLightbox();
  renderNotices();
  renderCourseList();
  initVideoTour();

  // Deep-linking: open the tab named in the URL hash (e.g. index.html#faculty)
  const initialTab = window.location.hash.replace("#", "");
  if (VALID_TABS.includes(initialTab) && initialTab !== "home") {
    switchTab(initialTab);
  }
});

// ==========================================
// Tab Router / Navigation
// ==========================================
function initTabNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  navItems.forEach(item => {
    item.setAttribute("aria-selected", item.classList.contains("active") ? "true" : "false");

    item.addEventListener("click", () => {
      const tabId = item.getAttribute("data-tab");

      navItems.forEach(btn => {
        btn.classList.remove("active");
        btn.setAttribute("aria-selected", "false");
      });
      item.classList.add("active");
      item.setAttribute("aria-selected", "true");

      document.querySelectorAll(".tab-content").forEach(content => content.classList.remove("active"));
      const targetContent = document.getElementById(`content-${tabId}`);
      if (targetContent) {
        targetContent.classList.add("active");
      }

      // Clicking the CV tab always returns to the directory listing
      if (tabId === "cv") {
        const panel = document.getElementById("cvProfile");
        const directory = document.getElementById("cvDirectory");
        if (panel && directory) {
          panel.hidden = true;
          directory.hidden = false;
        }
      }

      // Keep the URL shareable without adding history entries
      history.replaceState(null, "", `#${tabId}`);

      // Close mobile menu if open
      navLinks.classList.remove("show");
      mobileMenuBtn.setAttribute("aria-expanded", "false");

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  mobileMenuBtn.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    mobileMenuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  // Support browser back/forward between tabs
  window.addEventListener("hashchange", () => {
    const tabId = window.location.hash.replace("#", "");
    if (VALID_TABS.includes(tabId)) {
      const navItem = document.getElementById(`tab-${tabId}`);
      if (navItem && !navItem.classList.contains("active")) {
        navItem.click();
      }
    }
  });
}

// Global Tab switcher utility (used by inline click buttons)
window.switchTab = function(tabId) {
  const targetNavItem = document.getElementById(`tab-${tabId}`);
  if (targetNavItem) {
    targetNavItem.click();
  }
};

// ==========================================
// Accessibility Controls Logic
// ==========================================
function initAccessibility() {
  const body = document.body;

  document.getElementById("btnZoomIn").addEventListener("click", () => {
    if (currentFontSizeMultiplier < 1.6) {
      currentFontSizeMultiplier += 0.1;
      document.documentElement.style.fontSize = `${currentFontSizeMultiplier * 100}%`;
      saveSettings();
    }
  });

  document.getElementById("btnZoomOut").addEventListener("click", () => {
    if (currentFontSizeMultiplier > 0.8) {
      currentFontSizeMultiplier -= 0.1;
      document.documentElement.style.fontSize = `${currentFontSizeMultiplier * 100}%`;
      saveSettings();
    }
  });

  document.getElementById("btnTheme").addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);

    const themeBtn = document.getElementById("btnTheme");
    themeBtn.innerHTML = newTheme === "dark"
      ? '<i class="fa-solid fa-sun"></i> Light Mode'
      : '<i class="fa-solid fa-moon"></i> Dark Mode';
    saveSettings();
  });

  const toggleMap = [
    { btnId: "btnContrast", cls: "dark-contrast" },
    { btnId: "btnHighContrast", cls: "high-contrast" },
    { btnId: "btnSpacing", cls: "line-spacing" },
    { btnId: "btnLetterSpacing", cls: "letter-spacing" }
  ];

  toggleMap.forEach(({ btnId, cls }) => {
    document.getElementById(btnId).addEventListener("click", () => {
      body.classList.toggle(cls);
      document.getElementById(btnId).classList.toggle("active");
      saveSettings();
    });
  });

  document.getElementById("btnReset").addEventListener("click", () => {
    PERSISTED_BODY_CLASSES.forEach(cls => body.classList.remove(cls));
    document.documentElement.style.fontSize = "";
    currentFontSizeMultiplier = 1.0;
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById("btnTheme").innerHTML = '<i class="fa-solid fa-moon"></i> Dark Mode';
    document.querySelectorAll(".control-btn.active").forEach(btn => btn.classList.remove("active"));
    try {
      localStorage.removeItem(SETTINGS_KEY);
    } catch {}
  });
}

// ==========================================
// Publications Realtime Filter
// ==========================================
function initPublicationsSearch() {
  const searchInput = document.getElementById("pubSearch");

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    const rows = document.querySelectorAll("#publicationsContainer .pub-row");

    rows.forEach(row => {
      const text = row.querySelector(".pub-text").textContent.toLowerCase();
      const badge = row.querySelector(".pub-badge").textContent.toLowerCase();
      row.style.display = (text.includes(query) || badge.includes(query)) ? "" : "none";
    });
  });
}

// ==========================================
// Safe Medicine Checker logic
// ==========================================
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderMedDatabase(query) {
  const resultsBox = document.getElementById("medResults");
  resultsBox.innerHTML = "";

  const filteredMeds = medicineDatabase.filter(med =>
    med.name.toLowerCase().includes(query) ||
    med.category.toLowerCase().includes(query)
  );

  if (filteredMeds.length === 0) {
    resultsBox.innerHTML = '<div style="padding:16px; text-align:center; color:var(--text-muted);">No medication match found. Check spelling or request our Drug Info Cell directly.</div>';
    return;
  }

  filteredMeds.forEach(med => {
    const medDiv = document.createElement("div");
    medDiv.className = "med-result-item";
    medDiv.innerHTML = `
      <h4><span>${escapeHTML(med.name)}</span> <span class="med-cat">${escapeHTML(med.category)}</span></h4>
      <p><strong>Safe Dosage:</strong> ${escapeHTML(med.dosage)}</p>
      <p style="margin-top: 8px; color: var(--color-accent);"><strong>Important Warning:</strong> ${escapeHTML(med.warning)}</p>
    `;
    resultsBox.appendChild(medDiv);
  });
}

// ==========================================
// Drug Safety Quiz Logic
// ==========================================
function loadQuizQuestion() {
  const questionObj = quizQuestions[currentQuizQuestionIndex];
  const questionEl = document.getElementById("quizQuestion");
  const optionsEl = document.getElementById("quizOptions");
  const counterEl = document.getElementById("quizCounter");
  const nextBtn = document.getElementById("btnNextQuiz");
  const progressFill = document.getElementById("quizProgressFill");

  nextBtn.style.display = "none";

  const progressPercentage = (currentQuizQuestionIndex / quizQuestions.length) * 100;
  progressFill.style.width = `${progressPercentage}%`;

  counterEl.textContent = `Question ${currentQuizQuestionIndex + 1} of ${quizQuestions.length}`;
  questionEl.textContent = questionObj.question;

  optionsEl.innerHTML = "";
  questionObj.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-opt-btn";
    btn.textContent = opt;
    btn.setAttribute("aria-label", `Option ${idx + 1}: ${opt}`);
    btn.addEventListener("click", () => handleQuizAnswer(idx, btn));
    optionsEl.appendChild(btn);
  });
}

function handleQuizAnswer(selectedIndex, selectedBtn) {
  const questionObj = quizQuestions[currentQuizQuestionIndex];
  const optionBtns = document.querySelectorAll("#quizOptions .quiz-opt-btn");
  const nextBtn = document.getElementById("btnNextQuiz");

  optionBtns.forEach(btn => btn.disabled = true);

  if (selectedIndex === questionObj.answer) {
    selectedBtn.classList.add("correct");
    quizScoreCount++;
  } else {
    selectedBtn.classList.add("wrong");
    optionBtns[questionObj.answer].classList.add("correct");
  }

  nextBtn.style.display = "inline-block";
}

window.nextQuestion = function() {
  currentQuizQuestionIndex++;

  if (currentQuizQuestionIndex < quizQuestions.length) {
    loadQuizQuestion();
  } else {
    document.getElementById("quizQuestionBox").style.display = "none";
    document.getElementById("quizResult").style.display = "block";
    document.getElementById("quizScore").textContent = `${quizScoreCount} / ${quizQuestions.length}`;
    document.getElementById("quizProgressFill").style.width = "100%";
    document.getElementById("quizCounter").textContent = "Completed";
    document.getElementById("btnNextQuiz").style.display = "none";
  }
};

window.restartQuiz = function() {
  currentQuizQuestionIndex = 0;
  quizScoreCount = 0;

  document.getElementById("quizQuestionBox").style.display = "block";
  document.getElementById("quizResult").style.display = "none";

  loadQuizQuestion();
};

// ==========================================
// ADR Form Submission Handler
// ==========================================
// Reports are POSTed to the bundled Node backend (backend/server.js).
// If the backend is not running (e.g. the site is opened as a plain file),
// the report is stored in the browser's localStorage so it is not lost.
window.handleFormSubmit = async function(event) {
  event.preventDefault();

  // Honeypot check: real users never fill this hidden field
  if (document.getElementById("adrWebsite").value) {
    return;
  }

  const report = {
    patientName: document.getElementById("patientName").value.trim(),
    suspectedDrug: document.getElementById("suspectedDrug").value.trim(),
    adrDetails: document.getElementById("adrDetails").value.trim(),
    contact: document.getElementById("adrContact").value.trim(),
    submittedAt: new Date().toISOString()
  };

  if (!report.patientName || !report.suspectedDrug || !report.adrDetails) {
    return;
  }

  const submitBtn = document.querySelector("#adrForm .submit-btn");
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Submitting...';

  let savedToServer = false;
  try {
    const response = await fetch("/api/adr", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(report)
    });
    savedToServer = response.ok;
  } catch {
    savedToServer = false;
  }

  if (!savedToServer) {
    try {
      const pending = JSON.parse(localStorage.getItem("gmch-pharma-adr-pending")) || [];
      pending.push(report);
      localStorage.setItem("gmch-pharma-adr-pending", JSON.stringify(pending));
    } catch {}
  }

  submitBtn.disabled = false;
  submitBtn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Submit ADR Report';

  document.getElementById("adrModalOverlay").classList.add("active");
  document.querySelector("#adrModalOverlay .modal-close-btn").focus();
  document.getElementById("adrForm").reset();
};

window.closeSuccessModal = function() {
  document.getElementById("adrModalOverlay").classList.remove("active");
};

function initModalDismissal() {
  const overlay = document.getElementById("adrModalOverlay");

  // Close on Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeSuccessModal();
    }
  });

  // Close when clicking the dimmed backdrop (but not the dialog itself)
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeSuccessModal();
    }
  });
}

// ==========================================
// Hero Photo Carousel
// ==========================================
// Slides advance on their own; arrows, dots, arrow keys and swipe all work.
// To add a slide, copy a .hc-slide block in index.html — no change needed here.
function initHeroCarousel() {
  const root = document.getElementById("heroCarousel");
  const track = document.getElementById("hcTrack");
  const dotsWrap = document.getElementById("hcDots");
  const playBtn = document.getElementById("hcPlay");
  if (!root || !track || !dotsWrap || !playBtn) return;

  const slides = [...track.querySelectorAll(".hc-slide")];
  if (slides.length === 0) return;

  const AUTOPLAY_MS = 5500;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let index = 0;
  let timer = null;
  let pausedByUser = false;

  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "hc-dot";
    dot.type = "button";
    dot.setAttribute("role", "tab");
    dot.setAttribute("aria-label", `Photograph ${i + 1} of ${slides.length}`);
    dot.addEventListener("click", () => {
      goTo(i);
      restart();
    });
    dotsWrap.appendChild(dot);
  });
  const dots = [...dotsWrap.children];

  function goTo(next) {
    index = (next + slides.length) % slides.length;
    track.style.transform = `translateX(-${index * 100}%)`;

    slides.forEach((slide, i) => {
      const isCurrent = i === index;
      slide.classList.toggle("is-active", isCurrent);
      // Off-screen slides must not be reachable by tab or screen readers
      slide.setAttribute("aria-hidden", isCurrent ? "false" : "true");
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === index);
      dot.setAttribute("aria-selected", i === index ? "true" : "false");
    });
  }

  function stop() {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }

  function start() {
    if (reduceMotion || pausedByUser || document.hidden) return;
    stop();
    timer = setInterval(() => goTo(index + 1), AUTOPLAY_MS);
  }

  function restart() {
    stop();
    start();
  }

  document.getElementById("hcPrev").addEventListener("click", () => {
    goTo(index - 1);
    restart();
  });

  document.getElementById("hcNext").addEventListener("click", () => {
    goTo(index + 1);
    restart();
  });

  playBtn.addEventListener("click", () => {
    pausedByUser = !pausedByUser;
    playBtn.setAttribute("aria-pressed", pausedByUser ? "true" : "false");
    playBtn.setAttribute("aria-label", pausedByUser ? "Play the slideshow" : "Pause the slideshow");
    playBtn.innerHTML = pausedByUser
      ? '<i class="fa-solid fa-play" aria-hidden="true"></i>'
      : '<i class="fa-solid fa-pause" aria-hidden="true"></i>';
    if (pausedByUser) stop(); else start();
  });

  // Hovering or tabbing into the carousel holds the current photo
  root.addEventListener("mouseenter", stop);
  root.addEventListener("mouseleave", start);
  root.addEventListener("focusin", stop);
  root.addEventListener("focusout", start);

  root.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      goTo(index - 1);
      restart();
    } else if (e.key === "ArrowRight") {
      goTo(index + 1);
      restart();
    }
  });

  // Swipe on touch screens
  let touchStartX = 0;
  let touchDeltaX = 0;

  root.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
    touchDeltaX = 0;
    stop();
  }, { passive: true });

  root.addEventListener("touchmove", (e) => {
    touchDeltaX = e.touches[0].clientX - touchStartX;
  }, { passive: true });

  root.addEventListener("touchend", () => {
    if (Math.abs(touchDeltaX) > 45) {
      goTo(index + (touchDeltaX < 0 ? 1 : -1));
    }
    start();
  });

  // Don't keep cycling in a background tab
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop(); else start();
  });

  // A missing photograph would otherwise leave a blank slide in the rotation
  slides.forEach(slide => {
    const img = slide.querySelector("img");
    if (!img) return;
    img.addEventListener("error", () => slide.classList.add("hc-slide-missing"));
  });

  goTo(0);
  start();
}

// ==========================================
// Announcements Ticker
// ==========================================
// Fed by the same notices as the notice board, so there is one source of truth.
function renderTicker(notices) {
  const track = document.getElementById("tickerTrack");
  const bar = document.querySelector(".ticker-bar");
  if (!track || !bar) return;

  const items = (notices || []).slice(0, 6);
  if (items.length === 0) {
    bar.hidden = true;
    return;
  }

  const markup = items.map(n =>
    `<span class="ticker-item"><i class="fa-solid fa-angle-right" aria-hidden="true"></i> ${escapeHTML(n.title || "")}</span>`
  ).join("");

  // Repeated once so the strip can scroll continuously without a visible gap
  track.innerHTML = markup + markup;
  bar.hidden = false;
}

// ==========================================
// Photo Wall (uncaptioned departmental photos)
// ==========================================
// Files live in assets/gallery/extra/ as photo-01.jpeg ... photo-44.jpeg.
// To add more photos later: drop them in that folder using the same naming
// pattern and increase this count.
const PHOTO_WALL_COUNT = 44;

function renderPhotoWall() {
  const wall = document.getElementById("photoWall");
  if (!wall) return;

  for (let i = 1; i <= PHOTO_WALL_COUNT; i++) {
    const num = String(i).padStart(2, "0");
    const img = document.createElement("img");
    img.src = `assets/gallery/extra/photo-${num}.jpeg`;
    img.alt = `Department of Pharmacology photograph ${i}`;
    img.loading = "lazy";
    wall.appendChild(img);
  }

  // "View all N photographs" on the home page counts every gallery-tab image
  const total = document.querySelectorAll("#content-gallery .gallery-featured img").length
    + PHOTO_WALL_COUNT;
  const label = document.getElementById("galleryCount");
  if (label) label.textContent = total;
}

// ==========================================
// Medical Drug Store — photo gallery & expand/collapse
// ==========================================
window.toggleDrugStore = function() {
  const detail = document.getElementById("drugStoreDetail");
  const toggle = document.getElementById("drugStoreToggle");
  const isOpen = !detail.hidden;

  detail.hidden = isOpen;
  toggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
  toggle.classList.toggle("open", !isOpen);

  if (!isOpen) {
    detail.scrollIntoView({ behavior: "smooth", block: "start" });
  } else {
    toggle.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

// ==========================================
// Faculty CV Directory & Profiles
// ==========================================
function initCvDirectory() {
  const grid = document.getElementById("cvGrid");
  if (!grid) return;

  renderCvGrid("all", "");

  document.querySelectorAll(".cv-filter").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".cv-filter").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderCvGrid(btn.dataset.filter, document.getElementById("cvSearch").value.toLowerCase());
    });
  });

  document.getElementById("cvSearch").addEventListener("input", (e) => {
    const active = document.querySelector(".cv-filter.active");
    renderCvGrid(active ? active.dataset.filter : "all", e.target.value.toLowerCase());
  });
}

function renderCvGrid(filter, query) {
  const grid = document.getElementById("cvGrid");
  grid.innerHTML = "";

  const matches = facultyProfiles.filter(p => {
    const inGroup = filter === "all" || p.group === filter;
    const haystack = (p.name + " " + p.designation + " " +
      (p.cv ? p.cv.interests + " " + p.cv.qualifications : "")).toLowerCase();
    return inGroup && haystack.includes(query);
  });

  if (matches.length === 0) {
    grid.innerHTML = '<p class="cv-empty">No faculty member matches your search.</p>';
    return;
  }

  matches.forEach(p => {
    const card = document.createElement("button");
    card.className = "cv-card";
    card.setAttribute("aria-label", `View profile of ${p.name}`);
    card.innerHTML = `
      <div class="cv-card-photo"><img src="${p.photo}" alt="${escapeHTML(p.name)}"></div>
      <h3>${escapeHTML(p.name)}</h3>
      <p>${escapeHTML(p.designation)}</p>
      ${p.cv ? '<span class="cv-card-tag">Full CV</span>' : ""}
    `;
    card.addEventListener("click", () => openProfile(p.id));
    grid.appendChild(card);
  });
}

function cvBlock(label, value) {
  if (!value) return "";
  return `<div class="cv-block"><h4>${label}</h4><p>${escapeHTML(value)}</p></div>`;
}

window.openProfile = function(id) {
  const person = facultyProfiles.find(p => p.id === id);
  if (!person) return;

  switchTab("cv");

  const directory = document.getElementById("cvDirectory");
  const panel = document.getElementById("cvProfile");
  const cv = person.cv;

  panel.innerHTML = `
    <button class="cv-back" onclick="closeProfile()">
      <i class="fa-solid fa-arrow-left"></i> All faculty
    </button>

    <div class="cv-profile-head">
      <img src="${person.photo}" alt="${escapeHTML(person.name)}" class="cv-profile-photo">
      <div class="cv-profile-id">
        <h2>${escapeHTML(person.name)}</h2>
        <p class="cv-profile-role">${escapeHTML(person.designation)}</p>
        <p class="cv-profile-dept">Department of Pharmacology<br>Government Medical College &amp; Hospital, Chhatrapati Sambhajinagar</p>
        ${cv ? `<div class="cv-quick">
            <div><span>${escapeHTML(cv.publications)}</span><label>Publications</label></div>
          </div>` : ""}
      </div>
    </div>

    ${cv ? `
      ${cvBlock("Educational Qualifications", cv.qualifications)}
      ${cvBlock("Current Designation", cv.current)}
      ${cvBlock(cv.experienceLabel || "Previous Experience", cv.experience)}
      ${cvBlock("Total Publications", cv.publications)}
      ${cvBlock("Areas of Interest", cv.interests)}
      ${cv.other && cv.other.length ? `<div class="cv-block"><h4>Other Work Experience</h4><ul>${
        cv.other.map(o => `<li>${escapeHTML(o)}</li>`).join("")
      }</ul></div>` : ""}
      ${cvBlock("Life Memberships", cv.memberships)}
    ` : `
      <div class="cv-block cv-pending">
        <h4>Detailed profile</h4>
        <p>A detailed curriculum vitae for ${escapeHTML(person.name)} has not been added yet.
           Please contact the department office for further details.</p>
      </div>
    `}
  `;

  directory.hidden = true;
  panel.hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

window.closeProfile = function() {
  document.getElementById("cvProfile").hidden = true;
  document.getElementById("cvDirectory").hidden = false;
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// ==========================================
// Lightbox (click any gallery photo to enlarge)
// ==========================================
let lightboxImages = [];
let lightboxIndex = 0;

function initLightbox() {
  const overlay = document.getElementById("lightboxOverlay");
  if (!overlay) return;

  const imgEl = document.getElementById("lightboxImg");
  const counterEl = document.getElementById("lightboxCounter");

  const GALLERY_SELECTOR = ".hc-slide img, #galleryContainer img, .gallery-featured img, #photoWall img";

  // Browsing stays inside whichever gallery the visitor clicked
  let activeContainer = null;

  function collectImages() {
    const scope = activeContainer || document;
    return [...scope.querySelectorAll("img")].filter(i => i.matches(GALLERY_SELECTOR));
  }

  function show(index) {
    lightboxImages = collectImages();
    if (lightboxImages.length === 0) return;
    lightboxIndex = (index + lightboxImages.length) % lightboxImages.length;
    const source = lightboxImages[lightboxIndex];
    imgEl.src = source.src;
    imgEl.alt = source.alt || "Enlarged department photograph";
    counterEl.textContent = `${lightboxIndex + 1} / ${lightboxImages.length}`;
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function close() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  // Open on click of any gallery / photo-wall image (delegated, so it also
  // works for the JS-rendered photo wall)
  document.addEventListener("click", (e) => {
    if (e.target.matches(GALLERY_SELECTOR)) {
      activeContainer = e.target.closest(".hc-track, #galleryContainer, .gallery-featured, #photoWall");
      const all = collectImages();
      show(all.indexOf(e.target));
    }
  });

  document.getElementById("lightboxClose").addEventListener("click", close);
  document.getElementById("lightboxPrev").addEventListener("click", () => show(lightboxIndex - 1));
  document.getElementById("lightboxNext").addEventListener("click", () => show(lightboxIndex + 1));

  // Click on the dark backdrop (not the photo or buttons) closes
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });

  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("active")) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(lightboxIndex - 1);
    if (e.key === "ArrowRight") show(lightboxIndex + 1);
  });
}

// ==========================================
// Notice Board
// ==========================================
// Notices are read from assets/notices.json so they can be updated without
// touching any code. Newest first; each entry may carry an optional link.
// Browsers block fetch() for local files, so when the site is opened by
// double-clicking index.html these built-in notices are shown instead.
// Keep them in step with assets/notices.json.
const FALLBACK_NOTICES = [
  {
    date: "2026-08-02",
    tag: "Achievement",
    title: "Dr. Mirza Shiraz Baig honoured at the Medical Excellence Recognition Program 2026",
    body: "Professor & Head, Department of Pharmacology, received the Certificate of Appreciation from The Times of India and Maharashtra Times for his contribution in the field of healthcare.",
    link: "assets/awards/times-of-india-2-aug-2026.pdf",
    linkText: "Read the press coverage (PDF)"
  },
  {
    date: "2025-09-17",
    tag: "Event",
    title: "5th National Pharmacovigilance Week observed (17–23 September 2025)",
    body: "Inaugurated by the Hon'ble Dean, Dr. Shivaji Sukre. Students participated in ADR awareness activities, poster and rangoli competitions."
  },
  {
    date: "2025-01-26",
    tag: "Award",
    title: "Department adjudged Best and Cleanest Department",
    body: "Awarded the GMCH internal clean campus rolling trophy for laboratory hygiene and waste management."
  }
];

async function renderNotices() {
  const list = document.getElementById("noticeList");
  if (!list) return;

  let notices = [];
  try {
    const res = await fetch("assets/notices.json", { cache: "no-store" });
    if (res.ok) notices = await res.json();
  } catch {
    // opened directly from the file system, or the file is missing
  }

  if (!Array.isArray(notices) || notices.length === 0) {
    notices = FALLBACK_NOTICES;
  }

  if (!Array.isArray(notices) || notices.length === 0) {
    list.innerHTML = '<p class="notice-empty">No notices have been posted yet.</p>';
    renderTicker([]);
    return;
  }

  notices.sort((a, b) => String(b.date).localeCompare(String(a.date)));
  renderTicker(notices);

  list.innerHTML = "";
  notices.forEach(n => {
    const item = document.createElement("article");
    item.className = "notice-item";

    const d = new Date(n.date);
    const nice = isNaN(d) ? String(n.date || "") : d.toLocaleDateString("en-IN", {
      day: "2-digit", month: "short", year: "numeric"
    });

    item.innerHTML = `
      <div class="notice-date">
        <span class="notice-day">${isNaN(d) ? "" : String(d.getDate()).padStart(2, "0")}</span>
        <span class="notice-mon">${isNaN(d) ? "" : d.toLocaleDateString("en-IN", { month: "short" })}</span>
        <span class="notice-yr">${isNaN(d) ? "" : d.getFullYear()}</span>
      </div>
      <div class="notice-body">
        ${n.tag ? `<span class="notice-tag">${escapeHTML(n.tag)}</span>` : ""}
        <h4>${escapeHTML(n.title || "")}</h4>
        ${n.body ? `<p>${escapeHTML(n.body)}</p>` : ""}
        ${n.link ? `<a href="${encodeURI(n.link)}" target="_blank" rel="noopener" class="notice-link">
             <i class="fa-solid fa-paperclip"></i> ${escapeHTML(n.linkText || "Open attachment")}</a>` : ""}
        <span class="notice-fulldate">${nice}</span>
      </div>`;
    list.appendChild(item);
  });
}

// ==========================================
// Academic Courses — list and detail panel
// ==========================================
const courses = [
  {
    id: "mbbs",
    name: "MBBS",
    short: "Bachelor of Medicine & Bachelor of Surgery",
    blurb: "Core teaching of experimental and clinical pharmacology for undergraduate medical students.",
    incharge: { name: "Dr. Bhakti N. Chandekar", role: "Assistant Professor", photo: "assets/faculty/chandekar.jpg" },
    year: "Second Professional MBBS",
    scheme: "Competency-Based Medical Education (CBME), NMC",
    topics: [
      "General pharmacology — pharmacokinetics and pharmacodynamics",
      "Autonomic, cardiovascular, renal and CNS pharmacology",
      "Chemotherapy, antimicrobials and antineoplastic agents",
      "Rational prescribing, essential medicines and prescription writing",
      "Practical exercises, computer-assisted learning and clinical pharmacy"
    ],
    assessment: "Internal assessment examinations, term-end theory and practical examinations, log book and AETCOM modules."
  },
  {
    id: "md",
    name: "MD Pharmacology",
    short: "Doctor of Medicine — Postgraduate Residency",
    blurb: "Three-year postgraduate residency in advanced pharmacology, clinical trials and research methodology.",
    incharge: { name: "Dr. Mirza Shiraz Baig", role: "Professor & Head", photo: "assets/faculty/baig.jpg" },
    year: "Three years · 3 seats per year",
    scheme: "MUHS Nashik / NMC postgraduate curriculum",
    topics: [
      "Advanced pharmacokinetics, pharmacodynamics and drug development",
      "Clinical trials, Good Clinical Practice and research methodology",
      "Pharmacovigilance and adverse drug reaction causality assessment",
      "Experimental pharmacology and animal experimentation ethics",
      "Biostatistics, thesis work and scientific writing",
      "Teaching methodology and seminar / journal club presentations"
    ],
    assessment: "Dissertation, log book, internal assessment, university theory papers, practical and viva voce."
  },
  {
    id: "bds",
    name: "BDS",
    short: "Bachelor of Dental Surgery",
    blurb: "Dental pharmacology covering anaesthetics, analgesics and drug selection in dental practice.",
    incharge: { name: "Dr. Satish E. Bahekar", role: "Associate Professor", photo: "assets/faculty/bahekar.jpg" },
    year: "Second BDS",
    scheme: "Dental Council of India / MUHS Nashik",
    topics: [
      "General pharmacology relevant to dental practice",
      "Local and general anaesthetics",
      "Analgesics, anti-inflammatory agents and antibiotics in dentistry",
      "Haemostatics, antiseptics and drugs used in oral conditions",
      "Management of medical emergencies in the dental chair"
    ],
    assessment: "Internal assessment and university theory and viva examinations."
  },
  {
    id: "ccmp",
    name: "CCMP",
    short: "Certificate Course in Modern Pharmacology",
    blurb: "Certificate course in modern pharmacology for registered practitioners of alternative systems of medicine.",
    incharge: { name: "Dr. Mirza Shiraz Baig", role: "Professor & Head", photo: "assets/faculty/baig.jpg" },
    year: "One year (part-time)",
    scheme: "Maharashtra Government / MUHS Nashik",
    topics: [
      "Principles of modern pharmacology and drug action",
      "Commonly used allopathic drug groups and their indications",
      "Rational and safe prescribing practices",
      "Adverse drug reactions and drug interactions",
      "Emergency drugs and their administration"
    ],
    assessment: "Attendance, internal assessment and final certifying examination."
  },
  {
    id: "nursing",
    name: "B.Sc Nursing",
    short: "Bachelor of Science in Nursing",
    blurb: "Dosage calculation, safe administration and monitoring of medicines for nursing students.",
    incharge: { name: "Dr. Abhijeet H. Bhagat", role: "Assistant Professor", photo: "assets/faculty/bhagat.png" },
    year: "Second year B.Sc Nursing",
    scheme: "Indian Nursing Council / MUHS Nashik",
    topics: [
      "Basic principles of drug action and routes of administration",
      "Dosage calculation and safe medication practices",
      "Major drug groups used in ward and critical care settings",
      "Recognition and reporting of adverse drug reactions",
      "Storage, handling and disposal of medicines"
    ],
    assessment: "Internal assessment, university theory examination and practical records."
  }
];

function renderCourseList() {
  const list = document.getElementById("courseList");
  if (!list) return;

  list.innerHTML = "";
  courses.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.className = "acad-item acad-item-clickable";
    btn.setAttribute("aria-label", `Open details for ${c.name}`);
    btn.innerHTML = `
      <div class="acad-icon">${String(i + 1).padStart(2, "0")}</div>
      <div class="acad-info">
        <h3>${escapeHTML(c.name)}</h3>
        <p>${escapeHTML(c.blurb)}</p>
      </div>
      <i class="fa-solid fa-chevron-right acad-arrow"></i>`;
    btn.addEventListener("click", () => openCourse(c.id));
    list.appendChild(btn);
  });
}

window.openCourse = function(id) {
  const c = courses.find(x => x.id === id);
  const panel = document.getElementById("courseDetail");
  if (!c || !panel) return;

  panel.innerHTML = `
    <div class="course-head">
      <div>
        <span class="section-kicker">Academic Programme</span>
        <h2>${escapeHTML(c.name)}</h2>
        <p class="course-sub">${escapeHTML(c.short)}</p>
      </div>
      <button class="ds-close" onclick="closeCourse()" aria-label="Close course details">
        <i class="fa-solid fa-xmark"></i> Close
      </button>
    </div>

    <div class="course-grid">
      <aside class="course-side">
        <div class="course-incharge">
          <span class="ds-incharge-label">Course In-charge</span>
          <img src="${c.incharge.photo}" alt="${escapeHTML(c.incharge.name)}">
          <h4>${escapeHTML(c.incharge.name)}</h4>
          <p>${escapeHTML(c.incharge.role)}</p>
        </div>
        <dl class="course-meta">
          <dt>Stage</dt><dd>${escapeHTML(c.year)}</dd>
          <dt>Curriculum</dt><dd>${escapeHTML(c.scheme)}</dd>
        </dl>
      </aside>

      <div class="course-main">
        <h3 class="ds-subhead"><i class="fa-solid fa-list-check"></i> Curriculum Coverage</h3>
        <ul class="course-topics">
          ${c.topics.map(t => `<li>${escapeHTML(t)}</li>`).join("")}
        </ul>

        <h3 class="ds-subhead"><i class="fa-solid fa-clipboard-check"></i> Assessment</h3>
        <p class="course-assess">${escapeHTML(c.assessment)}</p>

        <h3 class="ds-subhead"><i class="fa-solid fa-file-pdf"></i> Curriculum Documents</h3>
        <a class="edl-card" href="assets/documents/curriculum-${c.id}.pdf" target="_blank" rel="noopener">
          <div class="edl-icon"><i class="fa-solid fa-file-pdf"></i></div>
          <div class="edl-text">
            <h4>${escapeHTML(c.name)} — Curriculum / Teaching Plan</h4>
            <p>Detailed syllabus and teaching schedule for this course.</p>
          </div>
          <span class="edl-action">Open PDF <i class="fa-solid fa-arrow-up-right-from-square"></i></span>
        </a>
      </div>
    </div>`;

  panel.hidden = false;
  panel.scrollIntoView({ behavior: "smooth", block: "start" });
};

window.closeCourse = function() {
  const panel = document.getElementById("courseDetail");
  panel.hidden = true;
  document.getElementById("courseList").scrollIntoView({ behavior: "smooth", block: "center" });
};

// ==========================================
// Video Tour
// ==========================================
function initVideoTour() {
  const video = document.getElementById("tourVideo");
  const missing = document.getElementById("videoMissing");
  if (!video || !missing) return;

  video.addEventListener("error", () => {
    video.hidden = true;
    missing.hidden = false;
  }, true);

  // <source> failures surface on the source element, not the video
  const source = video.querySelector("source");
  if (source) {
    source.addEventListener("error", () => {
      video.hidden = true;
      missing.hidden = false;
    });
  }
}

// ==========================================
// Scroll To Top Logic
// ==========================================
function initScrollTop() {
  const btnScrollTop = document.getElementById("btnScrollTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      btnScrollTop.classList.add("show");
    } else {
      btnScrollTop.classList.remove("show");
    }
  }, { passive: true });

  btnScrollTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
