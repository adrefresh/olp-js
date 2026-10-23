import type { ReactNode } from "react";
import type { Block } from "../../lib/services";

export const strip = (h: string) => h.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");

export type Node = { k: "p"; html: string } | { k: "list"; label?: string; items: { h?: string; t: string }[] };

export function toNodes(blocks: Block[]): Node[] {
  const out: Node[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if ("p" in b) {
      const next = blocks[i + 1];
      const short = strip(b.p).length <= 60;
      if (short && next && "ul" in next) {
        out.push({ k: "list", label: b.p, items: next.ul });
        i++;
      } else out.push({ k: "p", html: b.p });
    } else out.push({ k: "list", items: b.ul });
  }
  return out;
}

export function splitLines(h: string): ReactNode[] {
  let parts = h.split(/(?<=[.?!])\s+/).filter(Boolean);
  if (parts.length === 1) {
    const w = h.split(" ");
    if (w.length > 5) {
      const m = Math.ceil(w.length / 2);
      parts = [w.slice(0, m).join(" "), w.slice(m).join(" ")];
    }
  }
  return parts.map((p, i) => (i === parts.length - 1 && parts.length > 1 ? <em key={i}>{p}</em> : p));
}
