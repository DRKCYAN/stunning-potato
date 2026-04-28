const API = "https://en.wikipedia.org/w/api.php";
const UA = "KnowYourStatus/1.0 (https://github.com/DRKCYAN/stunning-potato)";

export interface WikiSection {
  title: string;
  content: string;
}

export interface WikiArticle {
  title: string;
  intro: string;
  sections: WikiSection[];
  url: string;
  fetchedAt: string;
}

export async function fetchWiki(title: string): Promise<WikiArticle> {
  const params = new URLSearchParams({
    action: "query",
    prop: "extracts",
    explaintext: "1",
    exsectionformat: "plain",
    titles: title,
    format: "json",
    redirects: "1",
  });

  const res = await fetch(`${API}?${params}`, {
    headers: { "User-Agent": UA },
  });
  if (!res.ok) throw new Error(`Wikipedia API error: ${res.status}`);

  const data = await res.json();
  const page: any = Object.values(data.query.pages)[0];
  if ("missing" in page) throw new Error(`Article not found: ${title}`);

  const text: string = page.extract || "";
  return {
    title: page.title,
    intro: clean(text.split(/\n== /)[0], 900),
    sections: parseSections(text),
    url: `https://en.wikipedia.org/wiki/${encodeURIComponent(page.title.replace(/ /g, "_"))}`,
    fetchedAt: new Date().toUTCString(),
  };
}

function parseSections(text: string): WikiSection[] {
  const chunks = text.split(/\n== (.*?) ==\n/);
  const sections: WikiSection[] = [];
  for (let i = 1; i < chunks.length; i += 2) {
    const content = clean(chunks[i + 1] || "", 1400);
    if (content.length > 80) {
      sections.push({ title: chunks[i], content });
    }
  }
  return sections;
}

function clean(text: string, max: number): string {
  text = text
    .replace(/\[.*?\]/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
  if (text.length > max) {
    const cut = text.lastIndexOf(". ", max);
    text = (cut !== -1 ? text.slice(0, cut + 1) : text.slice(0, max)).trim();
  }
  return text;
}
