# WorkAuthUS

**Plain-language answers to US work authorization questions, with links to the actual law.**

> **Project status:** v0 — in active development. All pages are marked "Pending review." Attorney review is being sought. Do not rely on this site for legal advice.

---

## What this project is

WorkAuthUS is a free, open-source, static website that answers common questions non-citizens have about working in the United States. Every topic page links directly to a primary source — a federal statute, regulation (CFR), or official government (.gov) page — so readers can verify information themselves.

The site is built with [Astro](https://astro.build), uses [Tailwind CSS](https://tailwindcss.com) for styling, and uses [Pagefind](https://pagefind.app) for client-side full-text search. It is hosted for free on Cloudflare Pages or GitHub Pages.

---

## Local development

### Prerequisites

- Node.js 20 LTS (use [nvm](https://github.com/nvm-sh/nvm): `nvm use`)
- npm (comes with Node)

### Setup

```bash
nvm use         # pins to Node version from .nvmrc
npm install
npm run dev     # starts dev server at http://localhost:4321
```

The dev server does not include the Pagefind search index. To test search locally, run a full build and preview instead:

```bash
npm run build   # builds Astro + runs Pagefind indexer
npm run preview # serves the dist/ directory
```

---

## Build

```bash
npm run build
```

This runs two steps:
1. `astro build` — generates the static site in `dist/`
2. `pagefind --site dist` — builds the full-text search index in `dist/pagefind/`

The resulting `dist/` directory is a self-contained static site that can be hosted anywhere (Cloudflare Pages, GitHub Pages, Netlify, etc.).

---

## Deployment

### Cloudflare Pages

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Build output directory | `dist` |
| Node version | from `.nvmrc` (currently `20`) |

No environment variables are required.

### GitHub Pages

A GitHub Actions workflow is included at `.github/workflows/deploy.yml`. It:
- Triggers on push to `main`
- Reads the Node version from `.nvmrc`
- Runs `npm ci && npm run build`
- Deploys `dist/` to GitHub Pages using `actions/deploy-pages@v4`

Enable GitHub Pages in your repository settings (Settings → Pages → Source: GitHub Actions).

---

## How to add a topic

1. Create a new `.md` file in `src/content/topics/`. The filename becomes the URL slug (e.g., `my-new-topic.md` → `/topics/my-new-topic`).
2. Add frontmatter matching the schema in `src/content/config.ts`. Required fields: `title`, `shortAnswer`, `statuses`, `primarySources`, `lastVerified`, `verifiedBy`.
3. Write the body following the five-section template:
   - `## Who this applies to`
   - `## What the law says`
   - `## Common gotchas`
   - `## What this page does not cover`
   - `## If you need legal help`
4. Set `draft: true` while the page is in progress. The page will be excluded from production builds.
5. Set `draft: false` when ready to publish.
6. Every factual claim must link to a primary source (a `.gov` URL or an equivalent authoritative source). See the editorial standards below.

---

## How to contribute corrections

If you find a factual error, an outdated regulation, or a broken link:

1. [Open a GitHub issue](https://github.com/example/workauthorus/issues/new) with:
   - The URL of the page with the error
   - What is incorrect or outdated
   - A link to the primary source that supports the correction
2. Or submit a pull request with the corrected content.

We especially welcome licensed immigration attorneys and DOJ-accredited representatives who are willing to review pages before publication. See [workauthorus.pages.dev/contribute](https://workauthorus.pages.dev/contribute) for details.

---

## Editorial standards

1. Every factual claim on a topic page links to a primary source — a statute, regulation, or official page on a `.gov` domain — or to an authoritative secondary source such as a law school clinic, AILA, CLINIC, or a legal aid organization.
2. Reddit, Quora, personal blogs, law firm marketing pages, and AI-generated content are not cited.
3. Every page shows a "Last verified" date. Pages are re-verified at least every 6 months and immediately when a relevant regulation changes.
4. Pages are reviewed by a second human before publication. Ideally a licensed immigration attorney or DOJ-accredited representative reviews the page before it is marked verified.
5. The site provides legal information, not legal advice. It does not create an attorney-client relationship.

---

## License

- **Site content** (topic pages and other written material in `src/content/`) is licensed under [Creative Commons Attribution 4.0 International (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/).
- **Site code** (Astro components, layouts, pages, configuration) is licensed under the [MIT License](LICENSE).

---

## Disclaimer

**This site provides legal information, not legal advice.** Nothing on this site creates an attorney-client relationship. Immigration law is complex and fact-specific. For advice about your individual situation, consult a licensed immigration attorney or DOJ-accredited representative.
