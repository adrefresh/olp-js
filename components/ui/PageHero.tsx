import type { ReactNode } from "react";

/** Inner-page hero: one h1 (each line masks up), short sub, drifting glow + the logo's orbiting dot. */
export default function PageHero({ eyebrow, lines, sub, aside, className }: { eyebrow: string; lines: ReactNode[]; sub?: string; aside?: ReactNode; className?: string }) {
  return (
    <header className={"ux-hero" + (aside ? " has-aside" : "") + (className ? " " + className : "")}>
      <div className="ux-orbit" aria-hidden="true" />
      <div className={"ux-wrap" + (aside ? " ux-hgrid" : "")}>
        <div>
          <span className="ux-eyebrow">{eyebrow}</span>
          <h1>
            {lines.map((l, i) => (
              <span className="ux-l" key={i}><span style={{ ["--i" as string]: i }}>{l}</span></span>
            ))}
          </h1>
          {sub ? <p className="ux-sub">{sub}</p> : null}
        </div>
        {aside}
      </div>
    </header>
  );
}
