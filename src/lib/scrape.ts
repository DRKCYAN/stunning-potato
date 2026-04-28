import { parse } from 'node-html-parser';

const UA = 'KnowYourStatus/1.0 (https://github.com/DRKCYAN/stunning-potato; educational resource)';

export interface ScrapedPage {
  url: string;
  label: string;
  text: string;
  fetchedAt: string;
  error?: string;
}

export async function scrapeGov(url: string, label: string): Promise<ScrapedPage> {
  const fetchedAt = new Date().toUTCString();
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': UA,
        'Accept': 'text/html,application/xhtml+xml',
      },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const html = await res.text();
    const root = parse(html);

    // Remove nav, header, footer, scripts, styles, ads
    for (const tag of ['script', 'style', 'nav', 'header', 'footer', 'aside', 'iframe', 'noscript']) {
      root.querySelectorAll(tag).forEach(el => el.remove());
    }

    // Try common content selectors in priority order
    const selectors = ['main', 'article', '[role="main"]', '#content', '.content', '#main-content', '.main-content', 'body'];
    let text = '';
    for (const sel of selectors) {
      const el = root.querySelector(sel);
      if (el) {
        text = el.structuredText.replace(/\n{3,}/g, '\n\n').trim();
        if (text.length > 200) break;
      }
    }

    // Trim to a reasonable length, ending on a sentence
    const MAX = 3000;
    if (text.length > MAX) {
      const cut = text.lastIndexOf('. ', MAX);
      text = (cut !== -1 ? text.slice(0, cut + 1) : text.slice(0, MAX)).trim();
    }

    return { url, label, text, fetchedAt };
  } catch (err: any) {
    return { url, label, text: '', fetchedAt, error: err.message ?? 'Fetch failed' };
  }
}
