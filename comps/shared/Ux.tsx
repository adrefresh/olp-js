import type { ReactNode } from "react";

/** Inner-page hero: one h1 (each line masks up), short sub, drifting glow + the logo's orbiting dot. */
export function UxHero({ eyebrow, lines, sub, aside }: { eyebrow: string; lines: ReactNode[]; sub?: string; aside?: ReactNode }) {
  return (
    <header className={"ux-hero" + (aside ? " has-aside" : "")}>
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

export function UxHead({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: string }) {
  return (
    <div className="ux-r">
      <span className="ux-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {lead ? <p className="ux-lead">{lead}</p> : null}
    </div>
  );
}

/** Closing call-to-action shared by every page: one compact banner. */
export function UxCta({ title, lead }: { title?: ReactNode; lead?: string }) {
  return (
    <section className="ux-sec t0 ux-ctas" aria-labelledby="ux-cta-h">
      <div className="ux-wrap">
        <div className="ux-cta2 ux-r">
          <div>
            <h2 id="ux-cta-h">{title ?? "Let\u2019s make business move."}</h2>
            <p>{lead ?? "Book a free consultation. No pitch deck, no pressure."}</p>
          </div>
          <a className="ux-btn d" href="/contact-us">Talk to us <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}

/** Two crossing, endlessly sliding tapes. Decorative section divider. */
export function UxRibbon({ a, b }: { a: string[]; b: string[] }) {
  const row = (w: string[]) => [...w, ...w, ...w, ...w].map((x, i) => <span key={i}>{x}</span>);
  return (
    <div className="ux-tapes" aria-hidden="true">
      <div className="ux-tape a"><div className="ux-tape-t">{row(a)}</div><div className="ux-tape-t">{row(a)}</div></div>
      <div className="ux-tape b"><div className="ux-tape-t">{row(b)}</div><div className="ux-tape-t">{row(b)}</div></div>
    </div>
  );
}

/** Category-page closing block: "Need help choosing?" on a light orange band, text left, actions right. */
export function UxChoose({ title }: { title: ReactNode }) {
  return (
    <section className="ux-sec ux-ctas ux-choose" aria-labelledby="ux-choose-h">
      <div className="ux-wrap ux-choose-in ux-r">
        <div>
          <span className="ux-eyebrow">Need help choosing?</span>
          <h2 id="ux-choose-h">{title}</h2>
        </div>
        <div className="ux-choose-act">
          <p>Not sure which service fits? Tell us what is slowing you down and we will point you to the right one.</p>
          <div className="ux-btns" style={{ marginTop: 0 }}>
            <a className="ux-btn d" href="/contact-us">Let&apos;s talk <span aria-hidden="true">↗</span></a>
            <a className="ux-btn l" href="/services">All services</a>
          </div>
        </div>
      </div>
    </section>
  );
}
