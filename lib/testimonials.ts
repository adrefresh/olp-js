import fs from "node:fs";
import path from "node:path";
import { parseFrontMatter, paragraph } from "./markdown";

export interface Testimonial { quote: string; name: string; role: string; company: string; tag: string; logo: string; tone: "b" | "o" | "a" }

/** Reads content/testimonials/*.md (front matter: name, role, company, tone, order; body: the quote). */
function load(): Testimonial[] {
  const dir = path.join(process.cwd(), "content", "testimonials");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const { data, body } = parseFrontMatter(fs.readFileSync(path.join(dir, f), "utf8"));
      const s = (k: string) => (typeof data[k] === "string" ? (data[k] as string) : "");
      const tone = s("tone");
      return {
        order: Number(s("order")) || 0,
        t: {
          quote: paragraph(body.split("\n")),
          name: s("name"),
          role: s("role"),
          company: s("company"),
          tag: s("tag"),
          logo: s("logo"),
          tone: (tone === "o" || tone === "a" ? tone : "b") as Testimonial["tone"],
        },
      };
    })
    .filter(({ t }) => {
      const blank = (v: string) => !v.trim() || /^(client quote|name|role|company|quote|tbd|todo)\.?$/i.test(v.trim().replace(/[\u201C\u201D"]/g, ""));
      return !blank(t.quote) && !blank(t.name);
    })
    .sort((a, b) => a.order - b.order)
    .map((x) => x.t);
}

export const TESTIMONIALS: Testimonial[] = load();
