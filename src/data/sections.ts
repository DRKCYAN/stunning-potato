export const SECTIONS = {
  education: {
    label: 'Education & Professional Licensing',
    description:
      'This section covers educational rights and opportunities for immigrants in the US, including K–12 access, higher education enrollment, and the process of getting professional licenses (doctor, lawyer, nurse, teacher) recognized when on a visa or without status. It also explains how foreign-earned degrees and credentials are evaluated and transferred.',
  },
  housing: {
    label: 'Housing & Renting',
    description:
      'This section covers housing rights and rental protections for immigrants in the US, including what information landlords can and cannot legally request, what documentation is required to rent, and how federal fair housing laws apply regardless of immigration status. It also covers eligibility for public housing programs like Section 8.',
  },
  driving: {
    label: "Driver's Licenses & ID",
    description:
      "This section covers driver's licenses and state-issued identification cards for immigrants, including which states allow undocumented residents to obtain a standard license, what documents are required for a Real ID versus a standard license, and when an international driving permit is valid in the US.",
  },
  banking: {
    label: 'Banking, Credit & Taxes',
    description:
      'This section covers financial services and tax obligations for immigrants, including how to open a bank account and build credit without a Social Security Number, how to apply for an Individual Taxpayer Identification Number (ITIN), the rules around sending money abroad, and what tax filing obligations apply based on your immigration status.',
  },
  healthcare: {
    label: 'Healthcare Access',
    description:
      'This section covers healthcare access for immigrants at all status levels, including eligibility for Medicaid, community health centers, and ACA marketplace plans. It also addresses vaccinations, mental health resources, and which benefits are safe to use without risking your immigration case under the public charge rule.',
  },
  'law-enforcement': {
    label: 'Interactions with Law Enforcement',
    description:
      'This section covers your rights and protections when interacting with law enforcement as an immigrant, including your rights during a traffic stop, the difference between ICE and local police, and what officers can and cannot legally ask about your immigration status.',
  },
  family: {
    label: 'Family & Children',
    description:
      'This section covers family-related legal questions for immigrants, including how to bring family members to the US, the rights of US citizen children, how to navigate custody and divorce as a non-citizen, and what protections exist for immigrant victims of domestic violence.',
  },
  benefits: {
    label: 'Government Benefits',
    description:
      'This section covers government benefit eligibility for immigrants, including which federal, state, and local benefits are available based on immigration status, what the five-year bar means, and how to determine whether using a benefit could affect a future immigration application under the public charge rule.',
  },
  'employment-rights': {
    label: 'Workplace Rights',
    description:
      'This section covers workplace rights that apply to all workers regardless of immigration status, including the right to minimum wage and overtime, protection from workplace discrimination and harassment, whistleblower protections, and how to file a complaint without triggering immigration enforcement.',
  },
  travel: {
    label: 'Travel & Re-entry',
    description:
      'This section covers travel and re-entry considerations for non-citizens, including what happens at the border when you return to the US, which visa holders can use automatic revalidation, how long absences affect your green card or other status, and what advance parole is and when you need it.',
  },
  civic: {
    label: 'Civic Life & Legal Obligations',
    description:
      'This section covers civic life and legal obligations for immigrants, including voting rights (and prohibitions), jury duty, Selective Service registration, and the rules around political activity and campaign contributions for non-citizens.',
  },
} as const;

export type SectionId = keyof typeof SECTIONS;
export const SECTION_IDS = Object.keys(SECTIONS) as SectionId[];
