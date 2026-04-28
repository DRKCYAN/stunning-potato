import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_CMryXJJk.mjs';
import { manifest } from './manifest_t-hDbGIO.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/about.astro.mjs');
const _page3 = () => import('./pages/changelog.astro.mjs');
const _page4 = () => import('./pages/college/all.astro.mjs');
const _page5 = () => import('./pages/college/_visa_/_statecode_.astro.mjs');
const _page6 = () => import('./pages/college.astro.mjs');
const _page7 = () => import('./pages/contribute.astro.mjs');
const _page8 = () => import('./pages/find-legal-help.astro.mjs');
const _page9 = () => import('./pages/law-enforcement/_slug_.astro.mjs');
const _page10 = () => import('./pages/status/_status_.astro.mjs');
const _page11 = () => import('./pages/topics/_slug_.astro.mjs');
const _page12 = () => import('./pages/topics.astro.mjs');
const _page13 = () => import('./pages/_section_/_slug_.astro.mjs');
const _page14 = () => import('./pages/_section_.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/about.astro", _page2],
    ["src/pages/changelog.astro", _page3],
    ["src/pages/college/all.astro", _page4],
    ["src/pages/college/[visa]/[stateCode].astro", _page5],
    ["src/pages/college/index.astro", _page6],
    ["src/pages/contribute.astro", _page7],
    ["src/pages/find-legal-help.astro", _page8],
    ["src/pages/law-enforcement/[slug].astro", _page9],
    ["src/pages/status/[status].astro", _page10],
    ["src/pages/topics/[slug].astro", _page11],
    ["src/pages/topics/index.astro", _page12],
    ["src/pages/[section]/[slug].astro", _page13],
    ["src/pages/[section]/index.astro", _page14],
    ["src/pages/index.astro", _page15]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "04ee24b2-dc2a-4f78-8efa-d63fb92a12c1",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
