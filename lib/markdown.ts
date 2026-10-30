/**
 * Tiny content parser for the files in /content. It reads a front-matter block (key: value, one level of
 * nesting) and splits the body into "## sections" and "### entries". Inline HTML (bold, placeholders)
 * in the text is kept exactly as written.
 */
export type FrontMatter = Record<string, string | Record<string, string>>;

const unquote = (v: string) => {
  const t = v.trim();
  return t.startsWith('"') && t.endsWith('"') && t.length > 1 ? (JSON.parse(t) as string) : t;
};

export function parseFrontMatter(raw: string): { data: FrontMatter; body: string } {
  const text = raw.replace(/\r\n/g, "\n");
  if (!text.startsWith("---\n")) return { data: {}, body: text };
  const end = text.indexOf("\n---", 4);
  if (end < 0) return { data: {}, body: text };
  const head = text.slice(4, end).split("\n");
  const body = text.slice(end + 4).replace(/^\n/, "");
  const data: FrontMatter = {};
  let nest: Record<string, string> | null = null;
  for (const line of head) {
    if (!line.trim()) continue;
    const m = /^(\s*)([A-Za-z][\w-]*):\s?(.*)$/.exec(line);
    if (!m) continue;
    const [, indent, key, val] = m;
    if (indent && nest) nest[key] = unquote(val);
    else if (val === "") { nest = {}; data[key] = nest; }
    else { nest = null; data[key] = unquote(val); }
  }
  return { data, body };
}

export interface MdEntry { title: string; lines: string[] }
export interface MdSection { title: string; lines: string[]; entries: MdEntry[] }

/** Splits a body into `## ` sections; inside a section, `### ` starts an entry (a step, an FAQ question, a group). */
export function parseSections(body: string): MdSection[] {
  const out: MdSection[] = [];
  let sec: MdSection | null = null;
  let ent: MdEntry | null = null;
  for (const line of body.replace(/\r\n/g, "\n").split("\n")) {
    if (line.startsWith("### ") && sec) { ent = { title: line.slice(4).trim(), lines: [] }; sec.entries.push(ent); continue; }
    if (line.startsWith("## ")) { sec = { title: line.slice(3).trim(), lines: [], entries: [] }; out.push(sec); ent = null; continue; }
    if (ent) ent.lines.push(line); else if (sec) sec.lines.push(line);
  }
  return out;
}

/** Groups lines into blank-line separated blocks. */
export function blocks(lines: string[]): string[][] {
  const out: string[][] = [];
  let cur: string[] = [];
  for (const l of lines) {
    if (l.trim() === "") { if (cur.length) out.push(cur); cur = []; } else cur.push(l);
  }
  if (cur.length) out.push(cur);
  return out;
}

export const paragraph = (lines: string[]) => blocks(lines).map((b) => b.join(" ")).join(" ");
export const bullets = (lines: string[]) => lines.filter((l) => l.startsWith("- ")).map((l) => l.slice(2).trim());
