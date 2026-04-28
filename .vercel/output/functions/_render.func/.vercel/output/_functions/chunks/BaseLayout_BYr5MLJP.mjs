import { c as createAstro, d as createComponent, e as addAttribute, r as renderTemplate, m as maybeRenderHead, f as renderComponent, F as Fragment, i as renderHead, h as renderSlot } from './astro/server_D9nsnjcG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro$2 = createAstro("https://stunning-potato-31a21n0yv-cyaneboiplayz-9929s-projects.vercel.app");
const $$BaseHead = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const {
    title,
    description = "Plain-language legal answers for immigrants in the US \u2014 with links to the actual law."
  } = Astro2.props;
  const siteTitle = title === "KnowYourStatus" ? "KnowYourStatus" : `${title} \u2014 KnowYourStatus`;
  return renderTemplate`<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description"${addAttribute(description, "content")}><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${siteTitle}</title><link rel="icon" type="image/svg+xml" href="/favicon.svg">`;
}, "C:/Users/redde/workauthorus/src/components/BaseHead.astro", void 0);

const $$Astro$1 = createAstro("https://stunning-potato-31a21n0yv-cyaneboiplayz-9929s-projects.vercel.app");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const current = Astro2.url.pathname;
  const categoryLinks = [
    { href: "/topics", label: "Your Status" },
    { href: "/college", label: "College" },
    { href: "/education", label: "Education" },
    { href: "/housing", label: "Housing" },
    { href: "/driving", label: "Driving" },
    { href: "/healthcare", label: "Healthcare" },
    { href: "/banking", label: "Banking" },
    { href: "/law-enforcement", label: "Law Enforcement" },
    { href: "/family", label: "Family" },
    { href: "/benefits", label: "Benefits" },
    { href: "/employment-rights", label: "Workplace Rights" },
    { href: "/travel", label: "Travel" },
    { href: "/civic", label: "Civic Life" }
  ];
  function isActive(href) {
    if (href === "/topics") return current.startsWith("/topics") || current.startsWith("/status/");
    return current === href || current.startsWith(href + "/");
  }
  return renderTemplate`${maybeRenderHead()}<header class="sticky top-0 z-50 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 shadow-sm" data-astro-cid-3ef6ksr2> <!-- Top bar: logo + utility links --> <div class="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-12" data-astro-cid-3ef6ksr2> <a href="/" class="logo font-bold text-xl text-blue-800 dark:text-blue-400 hover:text-blue-900 dark:hover:text-blue-300 no-underline leading-none" data-astro-cid-3ef6ksr2>
KnowYourStatus
</a>  <nav aria-label="Utility navigation" class="flex items-center gap-1 text-sm" data-astro-cid-3ef6ksr2> <a href="/find-legal-help" class="px-2.5 py-1 rounded text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors" data-astro-cid-3ef6ksr2>
Find Legal Help
</a> <a href="/about" class="px-2.5 py-1 rounded text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-colors" data-astro-cid-3ef6ksr2>
About
</a> </nav> </div> <!-- Category bar: all 13 sections --> <div class="bg-gray-50 dark:bg-slate-800/60 border-t border-gray-100 dark:border-slate-700/60 relative" data-astro-cid-3ef6ksr2> <div class="max-w-6xl mx-auto px-4 sm:px-6" data-astro-cid-3ef6ksr2> <nav aria-label="Section navigation" data-astro-cid-3ef6ksr2> <ul class="scrollbar-hide flex overflow-x-auto gap-0.5 py-1" data-astro-cid-3ef6ksr2> ${categoryLinks.map((link) => renderTemplate`<li class="flex-shrink-0" data-astro-cid-3ef6ksr2> <a${addAttribute(link.href, "href")}${addAttribute([
    "block px-3 py-1.5 rounded text-sm whitespace-nowrap transition-colors",
    isActive(link.href) ? "bg-blue-100 text-blue-800 font-semibold dark:bg-blue-900/50 dark:text-blue-300" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-700"
  ].join(" "), "class")}${addAttribute(isActive(link.href) ? "page" : void 0, "aria-current")} data-astro-cid-3ef6ksr2> ${link.label} </a> </li>`)} </ul> </nav> </div> <!-- Right fade — signals scrollable content on mobile --> <div class="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-50 dark:from-slate-900 to-transparent" aria-hidden="true" data-astro-cid-3ef6ksr2></div> </div> </header>`;
}, "C:/Users/redde/workauthorus/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  const sectionLinks = [
    { href: "/topics", label: "Your Status" },
    { href: "/college", label: "College" },
    { href: "/education", label: "Education" },
    { href: "/housing", label: "Housing" },
    { href: "/driving", label: "Driving" },
    { href: "/healthcare", label: "Healthcare" },
    { href: "/banking", label: "Banking" },
    { href: "/law-enforcement", label: "Law Enforcement" },
    { href: "/family", label: "Family" },
    { href: "/benefits", label: "Benefits" },
    { href: "/employment-rights", label: "Workplace Rights" },
    { href: "/travel", label: "Travel" },
    { href: "/civic", label: "Civic Life" }
  ];
  return renderTemplate`${maybeRenderHead()}<footer class="border-t border-gray-200 bg-gray-50 dark:bg-slate-900 dark:border-slate-700 mt-12"> <div class="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-5 text-sm"> <div> <p class="font-bold text-gray-900 dark:text-slate-100 mb-0.5">KnowYourStatus.org</p> <p class="text-gray-500 dark:text-slate-500">
Plain-language legal answers for immigrants in the US — with links to the actual law.
</p> </div> <div> <p class="text-xs font-semibold text-gray-400 dark:text-slate-600 uppercase tracking-wider mb-2">Topics</p> <div class="flex flex-wrap gap-x-1 gap-y-1 text-gray-600 dark:text-slate-400"> ${sectionLinks.map((link, i) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(link.href, "href")} class="hover:text-blue-700 dark:hover:text-blue-400 underline"> ${link.label} </a> ${i < sectionLinks.length - 1 && renderTemplate`<span class="text-gray-300 dark:text-slate-700 select-none" aria-hidden="true">|</span>`}` })}`)} </div> </div> <div class="flex flex-wrap gap-x-4 gap-y-1 text-gray-600 dark:text-slate-400"> <a href="/about" class="hover:text-blue-700 dark:hover:text-blue-400 underline">About</a> <a href="/find-legal-help" class="hover:text-blue-700 dark:hover:text-blue-400 underline">Find Legal Help</a> <a href="/contribute" class="hover:text-blue-700 dark:hover:text-blue-400 underline">Contribute</a> <a href="/changelog" class="hover:text-blue-700 dark:hover:text-blue-400 underline">Changelog</a> </div> <div class="border-t border-gray-200 dark:border-slate-700 pt-4 space-y-1.5 text-xs text-gray-400 dark:text-slate-600"> <p>
This site provides <strong class="font-semibold">legal information, not legal advice.</strong>
Nothing here creates an attorney-client relationship. For advice about your specific situation,
        consult a licensed immigration attorney or accredited representative.
</p> <p>
Content licensed under
<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-600">CC BY 4.0</a>.
        Code licensed under
<a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer" class="underline hover:text-gray-600">MIT</a>.
        &copy; ${year} KnowYourStatus contributors.
</p> </div> </div> </footer>`;
}, "C:/Users/redde/workauthorus/src/components/Footer.astro", void 0);

const $$Astro = createAstro("https://stunning-potato-31a21n0yv-cyaneboiplayz-9929s-projects.vercel.app");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "description": description })}${renderHead()}</head> <body class="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-gray-900 dark:text-slate-100"> <a href="#main-content" class="skip-link">Skip to main content</a> ${renderComponent($$result, "Header", $$Header, {})} <main id="main-content" class="flex-1" tabindex="-1"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/redde/workauthorus/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
