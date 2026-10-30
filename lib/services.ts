import fs from "node:fs";
import path from "node:path";
import { blocks, bullets, paragraph, parseFrontMatter, parseSections } from "./markdown";

/* ---- types ---- */
export type Block = { p: string } | { ul: { h?: string; t: string }[] };
export interface Section { t: string; b: Block[] }
export type Hero = "orbit" | "ghost" | "split" | "rule" | "grid";
export type ListStyle = "check" | "chips" | "rows" | "cards";
export type StepStyle = "line" | "vert" | "cards" | "big";
export type Anim = "rise" | "left" | "scale" | "clip" | "pop";
export interface Variant { hero: Hero; list: ListStyle; steps: StepStyle; anim: Anim; faq: "side" | "stack" }
export interface Service {
  slug: string; cat: string; title: string; short: string; h: string; p: string; cta: string;
  sections: Section[]; steps: { t: string; d: string }[]; faq: { q: string; a: string }[]; layout: Variant;
}
export interface Cat {
  slug: string; title: string; h: string; p: string; o: string; cta: string;
  groups: { t: string; items: string[] }[]; faq: { q: string; a: string }[];
}

/* ---- loading: content/services/<category>/<slug>.md and content/categories/<slug>.md ---- */
const ROOT = path.join(process.cwd(), "content");
const mdFiles = (dir: string) => (fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => f.endsWith(".md")).sort() : []);
const str = (v: unknown) => (typeof v === "string" ? v : "");

/** `- **Lead.** text` becomes { h, t }; a plain `- text` becomes { t }. */
function listItem(line: string): { h?: string; t: string } {
  const m = /^\*\*(.+?)\*\* —(?: (.*))?$/.exec(line);
  return m ? { h: m[1], t: m[2] ?? "" } : { t: line };
}

function entriesOf(sec: { entries: { title: string; lines: string[] }[] } | undefined) {
  return (sec?.entries ?? []).map((e) => ({ title: e.title, text: paragraph(e.lines) }));
}

function readService(cat: string, file: string): { order: number; s: Service } {
  const raw = fs.readFileSync(path.join(ROOT, "services", cat, file), "utf8");
  const { data, body } = parseFrontMatter(raw);
  const secs = parseSections(body);
  const sections: Section[] = secs
    .filter((s) => s.title !== "Steps" && s.title !== "FAQ")
    .filter((s) => s.lines.some((l) => l.trim() !== ""))
    .map((s) => ({
      t: s.title,
      b: blocks(s.lines).map((bl): Block => (bl[0].startsWith("- ") ? { ul: bullets(bl).map(listItem) } : { p: bl.join(" ") })),
    }));
  const lay = (typeof data.layout === "object" ? data.layout : {}) as Record<string, string>;
  const s: Service = {
    slug: file.replace(/\.md$/, ""),
    cat: str(data.category) || cat,
    title: str(data.title),
    short: str(data.short),
    h: str(data.heading),
    p: str(data.intro),
    cta: str(data.cta),
    sections,
    steps: entriesOf(secs.find((x) => x.title === "Steps")).map((e) => ({ t: e.title, d: e.text })),
    faq: entriesOf(secs.find((x) => x.title === "FAQ")).map((e) => ({ q: e.title, a: e.text })),
    layout: {
      hero: (lay.hero || "rule") as Hero,
      list: (lay.list || "check") as ListStyle,
      steps: (lay.steps || "cards") as StepStyle,
      anim: (lay.anim || "rise") as Anim,
      faq: lay.faq === "stack" ? "stack" : "side",
    },
  };
  return { order: Number(data.order) || 0, s };
}

function loadServices(): Record<string, Service> {
  const all: { order: number; s: Service }[] = [];
  const catsDir = path.join(ROOT, "services");
  for (const cat of fs.existsSync(catsDir) ? fs.readdirSync(catsDir) : []) {
    for (const f of mdFiles(path.join(catsDir, cat))) all.push(readService(cat, f));
  }
  all.sort((a, b) => a.order - b.order);
  return Object.fromEntries(all.map((x) => [x.s.slug, x.s]));
}

function loadCats(): Cat[] {
  const dir = path.join(ROOT, "categories");
  return mdFiles(dir)
    .map((file) => {
      const { data, body } = parseFrontMatter(fs.readFileSync(path.join(dir, file), "utf8"));
      const secs = parseSections(body);
      const c: Cat = {
        slug: file.replace(/\.md$/, ""),
        title: str(data.title),
        h: str(data.heading),
        p: str(data.intro),
        o: paragraph(secs.find((x) => x.title === "Overview")?.lines ?? []),
        cta: str(data.cta),
        groups: (secs.find((x) => x.title === "Groups")?.entries ?? []).map((e) => ({ t: e.title, items: bullets(e.lines) })),
        faq: entriesOf(secs.find((x) => x.title === "FAQ")).map((e) => ({ q: e.title, a: e.text })),
      };
      return { order: Number(data.order) || 0, c };
    })
    .sort((a, b) => a.order - b.order)
    .map((x) => x.c);
}

export const SERVICES: Record<string, Service> = loadServices();
export const CATS: Cat[] = loadCats();

export const catHref = (c: string) => `/services/${c}/`;
export const svcHref = (slug: string) => `/services/${SERVICES[slug].cat}/${slug}/`;
