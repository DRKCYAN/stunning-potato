/* empty css                                        */
import { c as createAstro, d as createComponent, f as renderComponent, r as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../../../chunks/astro/server_D9nsnjcG.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout } from '../../../chunks/BaseLayout_BYr5MLJP.mjs';
import { $ as $$Disclaimer } from '../../../chunks/Disclaimer_Cp-_rJil.mjs';
import { parse } from 'node-html-parser';
import { a as getCollegeTopic } from '../../../chunks/college-config_DCUNE77D.mjs';
export { renderers } from '../../../renderers.mjs';

const API = "https://en.wikipedia.org/w/api.php";
const UA$1 = "KnowYourStatus/1.0 (https://github.com/DRKCYAN/stunning-potato)";
async function fetchWiki(title) {
  const params = new URLSearchParams({
    action: "query",
    prop: "extracts",
    explaintext: "1",
    exsectionformat: "plain",
    titles: title,
    format: "json",
    redirects: "1"
  });
  const res = await fetch(`${API}?${params}`, {
    headers: { "User-Agent": UA$1 }
  });
  if (!res.ok) throw new Error(`Wikipedia API error: ${res.status}`);
  const data = await res.json();
  const page = Object.values(data.query.pages)[0];
  if ("missing" in page) throw new Error(`Article not found: ${title}`);
  const text = page.extract || "";
  return {
    title: page.title,
    intro: clean(text.split(/\n== /)[0], 900),
    sections: parseSections(text),
    url: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title.replace(/ /g, "_"))}`,
    fetchedAt: (/* @__PURE__ */ new Date()).toUTCString()
  };
}
function parseSections(text) {
  const chunks = text.split(/\n== (.*?) ==\n/);
  const sections = [];
  for (let i = 1; i < chunks.length; i += 2) {
    const content = clean(chunks[i + 1] || "", 1400);
    if (content.length > 80) {
      sections.push({ title: chunks[i], content });
    }
  }
  return sections;
}
function clean(text, max) {
  text = text.replace(/\[.*?\]/g, "").replace(/\n{3,}/g, "\n\n").trim();
  if (text.length > max) {
    const cut = text.lastIndexOf(". ", max);
    text = (cut !== -1 ? text.slice(0, cut + 1) : text.slice(0, max)).trim();
  }
  return text;
}

const UA = "KnowYourStatus/1.0 (https://github.com/DRKCYAN/stunning-potato; educational resource)";
async function scrapeGov(url, label) {
  const fetchedAt = (/* @__PURE__ */ new Date()).toUTCString();
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": UA,
        "Accept": "text/html,application/xhtml+xml"
      },
      signal: AbortSignal.timeout(8e3)
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const root = parse(html);
    for (const tag of ["script", "style", "nav", "header", "footer", "aside", "iframe", "noscript"]) {
      root.querySelectorAll(tag).forEach((el) => el.remove());
    }
    const selectors = ["main", "article", '[role="main"]', "#content", ".content", "#main-content", ".main-content", "body"];
    let text = "";
    for (const sel of selectors) {
      const el = root.querySelector(sel);
      if (el) {
        text = el.structuredText.replace(/\n{3,}/g, "\n\n").trim();
        if (text.length > 200) break;
      }
    }
    const MAX = 3e3;
    if (text.length > MAX) {
      const cut = text.lastIndexOf(". ", MAX);
      text = (cut !== -1 ? text.slice(0, cut + 1) : text.slice(0, MAX)).trim();
    }
    return { url, label, text, fetchedAt };
  } catch (err) {
    return { url, label, text: "", fetchedAt, error: err.message ?? "Fetch failed" };
  }
}

const $$Astro = createAstro("https://stunning-potato-31a21n0yv-cyaneboiplayz-9929s-projects.vercel.app");
const prerender = false;
const $$stateCode = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$stateCode;
  const { visa, stateCode } = Astro2.params;
  const topic = getCollegeTopic(visa, stateCode.toUpperCase());
  if (!topic) {
    return Astro2.redirect("/404");
  }
  let wikiArticles = [];
  let govPages = [];
  let fetchError = false;
  let fetchedAt = "";
  try {
    const showSet2 = new Set(topic.sectionsToShow.map((s) => s.toLowerCase()));
    const [wikiResults, govResults] = await Promise.allSettled([
      Promise.all(topic.wikiArticles.map((title) => fetchWiki(title))),
      Promise.all(topic.govSources.map((src) => scrapeGov(src.url, src.label)))
    ]);
    if (wikiResults.status === "fulfilled") wikiArticles = wikiResults.value;
    if (govResults.status === "fulfilled") govPages = govResults.value;
    fetchedAt = (/* @__PURE__ */ new Date()).toUTCString();
  } catch (err) {
    console.error("Fetch error:", err);
    fetchError = true;
  }
  const showSet = new Set(topic.sectionsToShow.map((s) => s.toLowerCase()));
  function relevantSections(article) {
    return article.sections.filter((s) => showSet.has(s.title.toLowerCase()));
  }
  const statusLabel = {
    yes: "Yes",
    no: "No",
    conditional: "Conditional",
    varies: "Varies"
  };
  const statusColor = {
    yes: "bg-green-50 text-green-800 border-green-200 dark:bg-green-900/20 dark:text-green-300 dark:border-green-800",
    no: "bg-red-50 text-red-800 border-red-200 dark:bg-red-900/20 dark:text-red-300 dark:border-red-800",
    conditional: "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800",
    varies: "bg-amber-50 text-amber-800 border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800"
  };
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${topic.visaLabel} \u2014 College Applications in ${topic.state}`, "description": `Tuition eligibility, public university access, and state financial aid for ${topic.visaLabel} holders in ${topic.state} \u2014 sourced from Wikipedia and official government pages.` }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="max-w-3xl mx-auto px-4 sm:px-6 py-8"> <!-- Breadcrumbs --> <nav aria-label="Breadcrumb" class="text-sm text-gray-500 dark:text-slate-500 mb-4"> <ol class="flex flex-wrap items-center gap-1"> <li><a href="/" class="underline hover:text-blue-700 dark:hover:text-blue-400">Home</a></li> <li aria-hidden="true" class="text-gray-400">›</li> <li><a href="/college" class="underline hover:text-blue-700 dark:hover:text-blue-400">College Applications</a></li> <li aria-hidden="true" class="text-gray-400">›</li> <li><span class="text-gray-700 dark:text-slate-300" aria-current="page">${topic.visaLabel} in ${topic.state}</span></li> </ol> </nav> <h1 class="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-slate-100 mt-2 mb-2 leading-tight"> ${topic.visaLabel} — College Applications in ${topic.state} </h1> <!-- Live badge --> <div class="mt-2 flex items-center gap-2 mb-6"> <span class="inline-flex items-center gap-1.5 rounded-full bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 px-3 py-1 text-xs font-medium text-green-700 dark:text-green-400"> <span class="h-1.5 w-1.5 rounded-full bg-green-500"></span>
Live — fetched from Wikipedia &amp; official sources
</span> ${fetchedAt && renderTemplate`<span class="text-xs text-gray-400 dark:text-slate-500">${fetchedAt}</span>`} </div> <!-- Eligibility summary card --> <div class="border border-gray-200 dark:border-slate-700 rounded overflow-hidden mb-8"> <div class="bg-gray-50 dark:bg-slate-800/50 px-4 py-2 border-b border-gray-200 dark:border-slate-700"> <span class="text-xs font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-500">
At a glance — ${topic.state} </span> </div> <dl class="divide-y divide-gray-100 dark:divide-slate-800"> ${[
    { label: "In-state tuition eligible", value: topic.inStateTuitionEligible },
    { label: "Can apply to public universities", value: topic.canApplyToPublicUniversities },
    { label: "Eligible for state financial aid", value: topic.canReceiveStateFinancialAid }
  ].map((row) => renderTemplate`<div class="flex items-center justify-between px-4 py-3"> <dt class="text-sm text-gray-700 dark:text-slate-300">${row.label}</dt> <dd> <span${addAttribute(`inline-block px-3 py-1 rounded border text-sm font-semibold ${statusColor[row.value]}`, "class")}> ${statusLabel[row.value]} </span> </dd> </div>`)} </dl> </div> ${fetchError ? renderTemplate`<div class="rounded border border-amber-300 bg-amber-50 dark:bg-amber-900/20 dark:border-amber-700 px-5 py-4 mb-8"> <p class="font-semibold text-amber-800 dark:text-amber-300">Could not load live content</p> <p class="mt-1 text-sm text-amber-700 dark:text-amber-400">
Sources could not be reached right now. Try refreshing the page, or visit the official sources directly below.
</p> </div>` : renderTemplate`<div class="space-y-14">  ${wikiArticles.map((article) => {
    const sections = relevantSections(article);
    return renderTemplate`<div> <div class="flex items-baseline justify-between gap-4 border-b border-gray-200 dark:border-slate-700 pb-2 mb-5"> <h2 class="text-xl font-bold text-gray-900 dark:text-slate-100">${article.title}</h2> <a${addAttribute(article.url, "href")} class="shrink-0 text-xs text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
Wikipedia ↗
</a> </div> <p class="text-gray-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">${article.intro}</p> ${sections.map((sec) => renderTemplate`<div class="mt-6"> <h3 class="text-base font-semibold text-gray-800 dark:text-slate-200 mb-2">${sec.title}</h3> <p class="text-gray-700 dark:text-slate-300 leading-relaxed whitespace-pre-line">${sec.content}</p> </div>`)} </div>`;
  })}  ${govPages.filter((p) => p.text && !p.error).map((page) => renderTemplate`<div> <div class="flex items-baseline justify-between gap-4 border-b border-blue-200 dark:border-blue-800 pb-2 mb-5"> <h2 class="text-xl font-bold text-gray-900 dark:text-slate-100">${page.label}</h2> <a${addAttribute(page.url, "href")} class="shrink-0 text-xs text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
Official source ↗
</a> </div> <p class="text-gray-700 dark:text-slate-300 leading-relaxed whitespace-pre-line text-sm">${page.text}</p> </div>`)} </div>`} <!-- Official sources --> <div class="mt-12 border-t border-gray-200 dark:border-slate-700 pt-6"> <h2 class="text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-slate-400 mb-3">
Official Sources
</h2> <ul class="space-y-2"> ${topic.govSources.map((src) => renderTemplate`<li> <a${addAttribute(src.url, "href")} class="text-sm text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer"> ${src.label} ↗
</a> </li>`)} ${wikiArticles.map((article) => renderTemplate`<li> <a${addAttribute(article.url, "href")} class="text-sm text-blue-600 dark:text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
Wikipedia — ${article.title} ↗
</a> </li>`)} </ul> <p class="mt-4 text-xs text-gray-400 dark:text-slate-500">
Wikipedia content is used under the${" "} <a href="https://creativecommons.org/licenses/by-sa/4.0/" class="underline" target="_blank" rel="noopener noreferrer">CC BY-SA 4.0 license</a>.
        Content is fetched live on each page visit.
</p> </div> <div class="mt-8"> ${renderComponent($$result2, "Disclaimer", $$Disclaimer, {})} </div> </div> ` })}`;
}, "C:/Users/redde/workauthorus/src/pages/college/[visa]/[stateCode].astro", void 0);

const $$file = "C:/Users/redde/workauthorus/src/pages/college/[visa]/[stateCode].astro";
const $$url = "/college/[visa]/[stateCode]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$stateCode,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
