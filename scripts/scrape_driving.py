#!/usr/bin/env python3
"""
Scrapes Wikipedia for driving section content and writes markdown files.
Run from the project root: python scripts/scrape_driving.py
Requires only Python stdlib — no pip install needed.
"""

import json
import re
import time
import urllib.request
import urllib.parse
from datetime import date
from pathlib import Path

WIKI_API = "https://en.wikipedia.org/w/api.php"
DRIVING_DIR = Path(__file__).parent.parent / "src" / "content" / "questions" / "driving"
TODAY = date.today().isoformat()
UA = "KnowYourStatus/1.0 (https://github.com/DRKCYAN/stunning-potato; research)"


# ---------------------------------------------------------------------------
# Wikipedia helpers
# ---------------------------------------------------------------------------

def wiki_extract(title: str) -> str:
    """Fetch plain-text extract of a Wikipedia article."""
    params = urllib.parse.urlencode({
        "action": "query",
        "prop": "extracts",
        "explaintext": "1",
        "exsectionformat": "plain",
        "titles": title,
        "format": "json",
        "redirects": "1",
    })
    req = urllib.request.Request(
        f"{WIKI_API}?{params}",
        headers={"User-Agent": UA},
    )
    with urllib.request.urlopen(req, timeout=15) as resp:
        data = json.loads(resp.read())
    pages = data["query"]["pages"]
    page = next(iter(pages.values()))
    if "missing" in page:
        raise ValueError(f"Wikipedia article not found: {title}")
    return page.get("extract", "")


def get_intro(text: str, max_chars: int = 600) -> str:
    """Return the introductory paragraph(s) before the first == section ==."""
    intro = re.split(r"\n== ", text)[0].strip()
    intro = re.sub(r"\[.*?\]", "", intro)   # strip [edit] artifacts
    intro = re.sub(r"\n{3,}", "\n\n", intro)
    if len(intro) > max_chars:
        cut = intro.rfind(". ", 0, max_chars)
        intro = intro[:cut + 1] if cut != -1 else intro[:max_chars]
    return intro.strip()


def get_section(text: str, *names: str) -> str:
    """Extract the first matching top-level == Section == by any of the given names."""
    for name in names:
        pattern = rf"(?:^|\n)== {re.escape(name)} ==\n(.*?)(?=\n== |\Z)"
        m = re.search(pattern, text, re.DOTALL)
        if m:
            body = m.group(1)
            body = re.sub(r"\[.*?\]", "", body)
            body = re.sub(r"\n{3,}", "\n\n", body)
            return body.strip()
    return ""


def truncate(text: str, max_chars: int = 1200) -> str:
    if len(text) <= max_chars:
        return text
    cut = text.rfind(". ", 0, max_chars)
    return (text[:cut + 1] if cut != -1 else text[:max_chars]).strip()


# ---------------------------------------------------------------------------
# File 1: which-states-issue-licenses-to-undocumented.md
# ---------------------------------------------------------------------------

STATES_TABLE = """\
| State | Year Enacted | Notes |
|-------|-------------|-------|
| California | 2013 | AB 60 license, marked "Federal Limits Apply" |
| Colorado | 2013 | |
| Connecticut | 2013 | |
| Delaware | 2015 | |
| District of Columbia | 2013 | |
| Hawaii | 2020 | |
| Illinois | 2013 | |
| Maryland | 2013 | |
| Massachusetts | 2022 | |
| Michigan | 2023 | |
| Minnesota | 2023 | |
| Nevada | 2013 | |
| New Jersey | 2019 | |
| New Mexico | 2003 | First state to enact this policy |
| New York | 2019 | Green Light Law |
| Oregon | 2013 | |
| Rhode Island | 2022 | |
| Utah | 2005 | "Driving Privilege Card" |
| Vermont | 2018 | |
| Virginia | 2020 | |
| Washington | 2019 | |"""


def build_undocumented_licenses() -> str:
    print("  Fetching Wikipedia: Driver's licenses for undocumented immigrants...")
    raw = wiki_extract(
        "Driver's licenses for undocumented immigrants in the United States"
    )
    intro = get_intro(raw, 700)
    history = truncate(get_section(raw, "History", "Background"), 1000)

    body = f"""---
title: "Which states issue driver's licenses to undocumented residents?"
section: driving
sectionLabel: "Driver's Licenses & ID"
comingSoon: false
requiresStateSelector: true
primarySources:
  - citation: "Wikipedia — Driver's licenses for undocumented immigrants in the United States"
    title: "Driver's licenses for undocumented immigrants in the United States"
    url: "https://en.wikipedia.org/wiki/Driver%27s_licenses_for_undocumented_immigrants_in_the_United_States"
  - citation: "NCSL — States Offering Driver's Licenses to Immigrants"
    title: "States Offering Driver's Licenses to Immigrants"
    url: "https://www.ncsl.org/immigration/states-offering-driver-s-licenses-to-immigrants"
lastVerified: {TODAY}
verifiedBy: "Wikipedia / NCSL"
draft: false
---

## Overview

{intro}

## States that currently issue licenses to undocumented residents

As of 2024, more than 19 states plus the District of Columbia allow undocumented immigrants to
obtain a driver's license or driving privilege card. These licenses are typically marked
"Not for Federal Identification" or "Federal Limits Apply."

{STATES_TABLE}

> Source: [Wikipedia](https://en.wikipedia.org/wiki/Driver%27s_licenses_for_undocumented_immigrants_in_the_United_States) and [NCSL](https://www.ncsl.org/immigration/states-offering-driver-s-licenses-to-immigrants). Verify with your state DMV — laws change.

"""

    if history:
        body += f"""## History and background

{history}

"""

    body += """\
## What these licenses can and cannot do

**You can use these licenses to:**
- Operate a vehicle legally within the state
- Serve as a photo ID for many everyday purposes (banking, housing applications)
- Obtain car insurance

**You cannot use these licenses to:**
- Board domestic or international flights (not REAL ID compliant)
- Access federal buildings that require ID
- Establish work authorization or immigration status
- Vote

## States that do not issue licenses to undocumented residents

If your state is not on the list above, it does not currently issue standard driver's
licenses to undocumented immigrants. Some of those states may offer limited driving
privilege cards — check your state DMV's official website.

## Official state DMV links

- [California DMV — AB 60](https://www.dmv.ca.gov/portal/driver-licenses-identification-cards/ab-60-driver-licenses/)
- [New York DMV — Green Light Law](https://dmv.ny.gov/driver-license/get-driver-license-proof-authorized-presence)
- [Illinois SOS — Temporary Visitor Driver's License](https://www.ilsos.gov/departments/drivers/TVDL/home.html)
- [NCSL — Full state list with citations](https://www.ncsl.org/immigration/states-offering-driver-s-licenses-to-immigrants)

## If you need legal help

- [NCSL Immigration Laws Database](https://www.ncsl.org/immigration) — policy tracker by state
- [National Immigration Law Center](https://www.nilc.org) — know your rights resources
- [immigrationlawhelp.org](https://immigrationlawhelp.org) — free and low-cost legal services
"""
    return body


# ---------------------------------------------------------------------------
# File 2: documents-needed-for-real-id-vs-standard.md
# ---------------------------------------------------------------------------

def build_real_id() -> str:
    print("  Fetching Wikipedia: REAL ID Act...")
    raw = wiki_extract("REAL ID Act")
    intro = get_intro(raw, 700)
    requirements = truncate(
        get_section(raw, "Requirements", "Provisions", "Document requirements"), 1200
    )

    body = f"""---
title: "What documents does each state accept for a Real ID vs a standard license?"
section: driving
sectionLabel: "Driver's Licenses & ID"
comingSoon: false
requiresStateSelector: true
primarySources:
  - citation: "DHS — REAL ID"
    title: "REAL ID"
    url: "https://www.dhs.gov/real-id"
  - citation: "Wikipedia — REAL ID Act"
    title: "REAL ID Act"
    url: "https://en.wikipedia.org/wiki/REAL_ID_Act"
  - citation: "6 CFR Part 37 — REAL ID Regulations"
    title: "Minimum Standards for Driver's Licenses and Identification Cards"
    url: "https://www.ecfr.gov/current/title-6/chapter-I/part-37"
lastVerified: {TODAY}
verifiedBy: "DHS / Wikipedia"
draft: false
---

## What is the REAL ID Act?

{intro}

## Why it matters

As of **May 7, 2025**, a REAL ID-compliant card (or an accepted alternative like a U.S.
passport) is required to board domestic flights and enter certain federal facilities. A
standard state driver's license will not be accepted for those purposes after that date.

"""

    if requirements:
        body += f"""## What Wikipedia says about federal requirements

{requirements}

"""

    body += """\
## Federal document requirements for a REAL ID

To obtain a REAL ID, all states must require the following — no exceptions:

1. **Proof of identity** (one of):
   - Valid U.S. passport or passport card
   - Certified U.S. birth certificate
   - Permanent Resident Card (Green Card / Form I-551)
   - Employment Authorization Document (EAD / Form I-766) with photo
   - Foreign passport with valid U.S. visa and I-94 arrival record

2. **Proof of Social Security Number** (one of):
   - Social Security card
   - W-2 or SSA-1099
   - Pay stub showing full SSN

3. **Two proofs of state residency** (such as):
   - Utility bill
   - Bank statement
   - Mortgage or lease agreement
   - Government-issued mail with name and address

4. **Proof of lawful status** (for non-U.S. citizens)

## What a standard (non-REAL ID) license typically requires

A standard license has fewer federal requirements. Many states allow:

| Document type | REAL ID | Standard license |
|--------------|---------|-----------------|
| U.S. passport or birth certificate | Required | May accept alternatives |
| Social Security Number | Required | ITIN accepted in some states |
| Proof of lawful status | Required | Not always required |
| Consular ID (matrícula) | Not accepted | Accepted in some states |
| Foreign passport alone | Not sufficient | May be accepted |

> Exact requirements vary by state. Check your state DMV's official website.

## Who cannot get a REAL ID

- Undocumented immigrants (cannot prove lawful status)
- Visitors on short-term visas (B-1/B-2) in many states
- Anyone who cannot present the required federal documents

These individuals can still obtain a standard license in states that allow it. See
[Which states issue licenses to undocumented residents](/questions/driving/which-states-issue-licenses-to-undocumented)
for more.

## Check your state's requirements

DHS maintains REAL ID compliance information at [dhs.gov/real-id](https://www.dhs.gov/real-id).
All state DMV links are available at [aamva.org](https://www.aamva.org/state-id-standards/).

## If you need help

- [DHS REAL ID FAQs](https://www.dhs.gov/real-id-faqs)
- [TSA ID requirements](https://www.tsa.gov/travel/security-screening/identification)
- Your state DMV website — search "[your state] DMV REAL ID requirements"
"""
    return body


# ---------------------------------------------------------------------------
# File 3: international-driving-permits.md
# ---------------------------------------------------------------------------

def build_idp() -> str:
    print("  Fetching Wikipedia: International Driving Permit...")
    raw = wiki_extract("International Driving Permit")
    intro = get_intro(raw, 700)
    us_section = truncate(
        get_section(raw, "United States", "Usage in the United States", "North America"), 1000
    )

    body = f"""---
title: "When do international driving permits work in the US and when don't they?"
section: driving
sectionLabel: "Driver's Licenses & ID"
comingSoon: false
primarySources:
  - citation: "Wikipedia — International Driving Permit"
    title: "International Driving Permit"
    url: "https://en.wikipedia.org/wiki/International_Driving_Permit"
  - citation: "U.S. Department of State — Road Safety Abroad"
    title: "Road Safety Abroad"
    url: "https://travel.state.gov/content/travel/en/international-travel/before-you-go/driving-and-road-safety.html"
  - citation: "AAA — International Driving Permit"
    title: "International Driving Permit"
    url: "https://www.aaa.com/vacation/idpf.html"
lastVerified: {TODAY}
verifiedBy: "Wikipedia / U.S. State Dept"
draft: false
---

## What is an International Driving Permit?

{intro}

"""

    if us_section:
        body += f"""## What Wikipedia says about IDP use in the United States

{us_section}

"""

    body += """\
## When an IDP is valid in the United States

An IDP is a **translation companion** to your home country license — it is not a standalone
license. In the U.S., an IDP is valid when:

- You are a **temporary visitor** (tourist, student arriving for the first time, etc.)
- Your **home country license is valid** and in your possession — the IDP must accompany it
- You have **not yet established residency** in a U.S. state
- You are driving a **personal or rental vehicle** (not commercial)

Most U.S. states allow visitors to drive on a foreign license (with or without an IDP) for
30 to 90 days from the date of entry or the date you establish residency.

## When an IDP does NOT work

| Situation | Why the IDP does not apply |
|-----------|---------------------------|
| You have established residency in a U.S. state | You must obtain a state license |
| Your home country license is expired | IDP cannot extend an expired license |
| You left your home license at home | IDP is invalid without the original |
| Commercial driving (trucks, buses, Uber/Lyft) | CDL required regardless |
| State does not recognize the IDP's country of origin | Rare but check locally |

## Immigrants and long-term visa holders

If you are living in the U.S. on a visa (H-1B, F-1, L-1, O-1, etc.) or have a green card,
you are **required to obtain a state driver's license** once you establish residency —
typically within 30 to 60 days of moving to a state, depending on that state's rules.
Your foreign license and IDP stop being valid for daily driving at that point.

**What counts as "establishing residency":**
- Renting or purchasing a home
- Starting a job
- Registering a vehicle
- Enrolling children in school

Check your state DMV for the exact deadline — it varies.

## How to get an IDP

**For visitors coming to the U.S.:** Obtain your IDP in your **home country before traveling**.
The U.S. does not issue IDPs to foreign nationals.

**For U.S. residents driving abroad:** Only two organizations are authorized to issue IDPs
to U.S. residents:
- [AAA (American Automobile Association)](https://www.aaa.com/vacation/idpf.html)
- American Automobile Touring Alliance (AATA)

Cost is approximately $20 and requires a valid U.S. driver's license.

## Rental cars

Most U.S. car rental companies accept a valid foreign license from visitors. Some may also
ask for an IDP as a translation aid. Confirm with your rental company before arrival.

## If you need help

- [AAA IDP page](https://www.aaa.com/vacation/idpf.html) — apply and learn what it covers
- [U.S. State Dept — Driving abroad](https://travel.state.gov/content/travel/en/international-travel/before-you-go/driving-and-road-safety.html)
- Your state's DMV website — search "[your state] DMV foreign license"
"""
    return body


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------

def main():
    DRIVING_DIR.mkdir(parents=True, exist_ok=True)

    tasks = {
        "which-states-issue-licenses-to-undocumented.md": build_undocumented_licenses,
        "documents-needed-for-real-id-vs-standard.md": build_real_id,
        "international-driving-permits.md": build_idp,
    }

    for filename, builder in tasks.items():
        print(f"\n[{filename}]")
        try:
            content = builder()
            path = DRIVING_DIR / filename
            path.write_text(content, encoding="utf-8")
            print(f"  Written: {path}")
            time.sleep(1)   # be polite to the Wikipedia API
        except Exception as exc:
            print(f"  ERROR: {exc}")

    print("\nDone. Review the files, then commit.")


if __name__ == "__main__":
    main()
