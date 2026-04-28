const SHARED_WIKI_SECTIONS = [
  "Overview",
  "History",
  "Background",
  "Education",
  "Eligibility",
  "Benefits",
  "Criticism",
  "Legal status",
  "Policy",
  "Definition",
  "Requirements",
  "Application",
  "Tuition",
  "Financial aid"
];
const CONFIGS = [
  // ── DACA ────────────────────────────────────────────────────────────────────
  {
    visa: "daca",
    visaLabel: "DACA Recipient",
    state: "California",
    stateCode: "CA",
    inStateTuitionEligible: "yes",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "yes",
    wikiArticles: ["Deferred Action for Childhood Arrivals", "California Dream Act", "AB 540"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "DACA recipients", "Education benefits"],
    govSources: [
      { label: "CSAC — AB 540 & California Dream Act", url: "https://www.csac.ca.gov/ab-540" },
      { label: "CSAC — CADAA Application", url: "https://www.csac.ca.gov/cadaa" },
      { label: "UC — Undocumented & DACA Students", url: "https://undoc.universityofcalifornia.edu/" }
    ]
  },
  {
    visa: "daca",
    visaLabel: "DACA Recipient",
    state: "New York",
    stateCode: "NY",
    inStateTuitionEligible: "conditional",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "conditional",
    wikiArticles: ["Deferred Action for Childhood Arrivals", "New York DREAM Act"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "DACA recipients", "Financial aid"],
    govSources: [
      { label: "HESC — NY Dream Act", url: "https://www.hesc.ny.gov/dream/" },
      { label: "SUNY — Residency & Tuition", url: "https://www.suny.edu/attend/get-started/apply-to-suny/residency/" },
      { label: "CUNY — Undocumented & DACA", url: "https://www.cuny.edu/current-students/student-affairs/student-services/immigrantstudent/" }
    ]
  },
  {
    visa: "daca",
    visaLabel: "DACA Recipient",
    state: "Texas",
    stateCode: "TX",
    inStateTuitionEligible: "conditional",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "conditional",
    wikiArticles: ["Deferred Action for Childhood Arrivals", "DREAM Act"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "Texas", "State legislation", "Education"],
    govSources: [
      { label: "THECB — Texas Resident Tuition (HB 1403)", url: "https://www.highered.texas.gov/institutional-resources-programs/student-information-resources/texas-resident-tuition/" },
      { label: "THECB — TASFA", url: "https://www.highered.texas.gov/student-resources-tools/state-financial-aid/tasfa/" }
    ]
  },
  // ── F-2 ─────────────────────────────────────────────────────────────────────
  {
    visa: "f2",
    visaLabel: "F-2 Dependent",
    state: "California",
    stateCode: "CA",
    inStateTuitionEligible: "conditional",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "conditional",
    wikiArticles: ["F visa (United States)", "AB 540", "California Dream Act"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "F-2", "Dependents", "Nonimmigrant"],
    govSources: [
      { label: "CSAC — AB 540", url: "https://www.csac.ca.gov/ab-540" },
      { label: "CSAC — CADAA Application", url: "https://www.csac.ca.gov/cadaa" }
    ]
  },
  {
    visa: "f2",
    visaLabel: "F-2 Dependent",
    state: "New York",
    stateCode: "NY",
    inStateTuitionEligible: "conditional",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "conditional",
    wikiArticles: ["F visa (United States)", "New York DREAM Act"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "F-2", "Dependents", "Financial aid"],
    govSources: [
      { label: "HESC — NY Dream Act", url: "https://www.hesc.ny.gov/dream/" },
      { label: "SUNY — Residency Requirements", url: "https://www.suny.edu/attend/get-started/apply-to-suny/residency/" }
    ]
  },
  {
    visa: "f2",
    visaLabel: "F-2 Dependent",
    state: "Texas",
    stateCode: "TX",
    inStateTuitionEligible: "conditional",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "conditional",
    wikiArticles: ["F visa (United States)", "DREAM Act"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "F-2", "Texas", "Tuition"],
    govSources: [
      { label: "THECB — Texas Resident Tuition (HB 1403)", url: "https://www.highered.texas.gov/institutional-resources-programs/student-information-resources/texas-resident-tuition/" },
      { label: "THECB — TASFA", url: "https://www.highered.texas.gov/student-resources-tools/state-financial-aid/tasfa/" }
    ]
  },
  // ── H-4 ─────────────────────────────────────────────────────────────────────
  {
    visa: "h4",
    visaLabel: "H-4 Dependent",
    state: "California",
    stateCode: "CA",
    inStateTuitionEligible: "conditional",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "no",
    wikiArticles: ["H-4 visa", "H-1B visa", "California Dream Act"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "H-4", "Dependents", "Education", "Employment"],
    govSources: [
      { label: "CSAC — Residency & Tuition", url: "https://www.csac.ca.gov/residency-determination" },
      { label: "UC — Residency for Tuition Purposes", url: "https://registrar.universityofcalifornia.edu/residency/" }
    ]
  },
  {
    visa: "h4",
    visaLabel: "H-4 Dependent",
    state: "New York",
    stateCode: "NY",
    inStateTuitionEligible: "conditional",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "conditional",
    wikiArticles: ["H-4 visa", "H-1B visa", "New York DREAM Act"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "H-4", "Dependents", "Education"],
    govSources: [
      { label: "HESC — NY Dream Act", url: "https://www.hesc.ny.gov/dream/" },
      { label: "SUNY — Residency Requirements", url: "https://www.suny.edu/attend/get-started/apply-to-suny/residency/" }
    ]
  },
  {
    visa: "h4",
    visaLabel: "H-4 Dependent",
    state: "Texas",
    stateCode: "TX",
    inStateTuitionEligible: "conditional",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "conditional",
    wikiArticles: ["H-4 visa", "H-1B visa"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "H-4", "Dependents", "Tuition"],
    govSources: [
      { label: "THECB — Texas Resident Tuition", url: "https://www.highered.texas.gov/institutional-resources-programs/student-information-resources/texas-resident-tuition/" },
      { label: "THECB — TASFA", url: "https://www.highered.texas.gov/student-resources-tools/state-financial-aid/tasfa/" }
    ]
  },
  // ── F-1 ─────────────────────────────────────────────────────────────────────
  {
    visa: "f1",
    visaLabel: "F-1 Student",
    state: "California",
    stateCode: "CA",
    inStateTuitionEligible: "conditional",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "no",
    wikiArticles: ["F visa (United States)", "AB 540", "International student"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "F-1", "International students", "Tuition", "Financial aid"],
    govSources: [
      { label: "CSAC — AB 540", url: "https://www.csac.ca.gov/ab-540" },
      { label: "UC — International Student Fees", url: "https://registrar.universityofcalifornia.edu/tuition-fees/" }
    ]
  },
  {
    visa: "f1",
    visaLabel: "F-1 Student",
    state: "New York",
    stateCode: "NY",
    inStateTuitionEligible: "conditional",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "conditional",
    wikiArticles: ["F visa (United States)", "New York DREAM Act", "International student"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "F-1", "International students", "Financial aid"],
    govSources: [
      { label: "HESC — NY Dream Act", url: "https://www.hesc.ny.gov/dream/" },
      { label: "SUNY — International Student Tuition", url: "https://www.suny.edu/attend/get-started/apply-to-suny/tuition-costs/" }
    ]
  },
  {
    visa: "f1",
    visaLabel: "F-1 Student",
    state: "Texas",
    stateCode: "TX",
    inStateTuitionEligible: "conditional",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "conditional",
    wikiArticles: ["F visa (United States)", "DREAM Act", "International student"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "F-1", "Texas", "Tuition", "Financial aid"],
    govSources: [
      { label: "THECB — Texas Resident Tuition (HB 1403)", url: "https://www.highered.texas.gov/institutional-resources-programs/student-information-resources/texas-resident-tuition/" },
      { label: "THECB — TASFA", url: "https://www.highered.texas.gov/student-resources-tools/state-financial-aid/tasfa/" }
    ]
  },
  // ── Undocumented ─────────────────────────────────────────────────────────────
  {
    visa: "undocumented",
    visaLabel: "Undocumented",
    state: "California",
    stateCode: "CA",
    inStateTuitionEligible: "yes",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "yes",
    wikiArticles: ["California Dream Act", "AB 540", "Undocumented immigration to the United States"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "Education", "California", "Tuition", "Financial aid", "State laws"],
    govSources: [
      { label: "CSAC — AB 540 & California Dream Act", url: "https://www.csac.ca.gov/ab-540" },
      { label: "CSAC — CADAA Application", url: "https://www.csac.ca.gov/cadaa" },
      { label: "UC — Undocumented Students", url: "https://undoc.universityofcalifornia.edu/" }
    ]
  },
  {
    visa: "undocumented",
    visaLabel: "Undocumented",
    state: "New York",
    stateCode: "NY",
    inStateTuitionEligible: "conditional",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "conditional",
    wikiArticles: ["New York DREAM Act", "Undocumented immigration to the United States", "DREAM Act"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "Education", "New York", "Financial aid", "State laws"],
    govSources: [
      { label: "HESC — NY Dream Act", url: "https://www.hesc.ny.gov/dream/" },
      { label: "CUNY — Undocumented Students", url: "https://www.cuny.edu/current-students/student-affairs/student-services/immigrantstudent/" }
    ]
  },
  {
    visa: "undocumented",
    visaLabel: "Undocumented",
    state: "Texas",
    stateCode: "TX",
    inStateTuitionEligible: "conditional",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "conditional",
    wikiArticles: ["DREAM Act", "Undocumented immigration to the United States"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "Texas", "Education", "State laws", "HB 1403", "Financial aid"],
    govSources: [
      { label: "THECB — Texas Resident Tuition (HB 1403)", url: "https://www.highered.texas.gov/institutional-resources-programs/student-information-resources/texas-resident-tuition/" },
      { label: "THECB — TASFA", url: "https://www.highered.texas.gov/student-resources-tools/state-financial-aid/tasfa/" }
    ]
  },
  // ── Asylum ───────────────────────────────────────────────────────────────────
  {
    visa: "asylum",
    visaLabel: "Asylum Seeker / Asylee",
    state: "California",
    stateCode: "CA",
    inStateTuitionEligible: "yes",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "yes",
    wikiArticles: ["Asylum in the United States", "Refugee", "Federal Student Aid"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "Eligibility", "Education", "Benefits", "Legal status"],
    govSources: [
      { label: "Federal Student Aid — Eligible Noncitizens", url: "https://studentaid.gov/understand-aid/eligibility/requirements/non-us-citizens" },
      { label: "CSAC — California Residency", url: "https://www.csac.ca.gov/residency-determination" },
      { label: "USCIS — Asylum", url: "https://www.uscis.gov/humanitarian/refugees-and-asylum/asylum" }
    ]
  },
  {
    visa: "asylum",
    visaLabel: "Asylum Seeker / Asylee",
    state: "New York",
    stateCode: "NY",
    inStateTuitionEligible: "yes",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "yes",
    wikiArticles: ["Asylum in the United States", "Refugee", "Federal Student Aid"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "Eligibility", "Education", "Benefits", "Legal status"],
    govSources: [
      { label: "Federal Student Aid — Eligible Noncitizens", url: "https://studentaid.gov/understand-aid/eligibility/requirements/non-us-citizens" },
      { label: "HESC — Tuition Assistance Program (TAP)", url: "https://www.hesc.ny.gov/pay-for-college/financial-aid/types-of-financial-aid/nys-grants-scholarships-awards/tap.html" },
      { label: "USCIS — Asylum", url: "https://www.uscis.gov/humanitarian/refugees-and-asylum/asylum" }
    ]
  },
  {
    visa: "asylum",
    visaLabel: "Asylum Seeker / Asylee",
    state: "Texas",
    stateCode: "TX",
    inStateTuitionEligible: "yes",
    canApplyToPublicUniversities: "yes",
    canReceiveStateFinancialAid: "yes",
    wikiArticles: ["Asylum in the United States", "Refugee", "Federal Student Aid"],
    sectionsToShow: [...SHARED_WIKI_SECTIONS, "Eligibility", "Education", "Benefits", "Legal status"],
    govSources: [
      { label: "Federal Student Aid — Eligible Noncitizens", url: "https://studentaid.gov/understand-aid/eligibility/requirements/non-us-citizens" },
      { label: "THECB — Texas Grant", url: "https://www.highered.texas.gov/student-resources-tools/state-financial-aid/texas-grant/" },
      { label: "USCIS — Asylum", url: "https://www.uscis.gov/humanitarian/refugees-and-asylum/asylum" }
    ]
  }
];
const COLLEGE_TOPICS = new Map(
  CONFIGS.map((c) => [`${c.visa}:${c.stateCode}`, c])
);
function getCollegeTopic(visa, stateCode) {
  return COLLEGE_TOPICS.get(`${visa}:${stateCode}`);
}
function getAllCollegeTopics() {
  return CONFIGS;
}

export { getCollegeTopic as a, getAllCollegeTopics as g };
