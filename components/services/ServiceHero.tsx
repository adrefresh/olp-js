import { catHref, type Cat, type Service } from "../../lib/services";
import { splitLines, strip } from "./service-utils";

/** Detail-page hero. The variant (orbit / ghost / split / rule / grid) comes from the service's `layout.hero`. */
export default function ServiceHero({ service: s, cat }: { service: Service; cat: Cat }) {
  const v = s.layout;
  const firstList = s.sections.flatMap((x) => x.b).find((b) => "ul" in b) as { ul: { h?: string; t: string }[] } | undefined;
  const snap = (firstList?.ul ?? []).slice(0, 4).map((x) => strip(x.h ?? x.t));
  const words = s.title.toUpperCase().split(" ");
  const ghost = s.title.length <= 14 ? s.title.toUpperCase() : words[0].length > 3 ? words[0] : words.slice(0, 2).join(" ");
  return (
    <header className={"ux-hero h-rings h-" + v.hero}>
      {v.hero === "orbit" ? <div className="ux-orbit" aria-hidden="true" /> : null}
      {v.hero === "ghost" ? (
        <div className="ux-gw" aria-hidden="true">
          {ghost}
        </div>
      ) : null}
      <div className={"ux-wrap" + (v.hero === "split" ? " ux-hgrid" : "")}>
        <div>
          <span className="ux-eyebrow">{s.title}</span>
          <h1>
            {splitLines(s.h).map((l, i) => (
              <span className="ux-l" key={i}>
                <span style={{ ["--i" as string]: i }}>{l}</span>
              </span>
            ))}
          </h1>
          <p className="ux-sub">{s.p}</p>
          <div className="ux-btns ux-hb">
            <a className="ux-btn o" href="/contact-us">
              Talk to us <span aria-hidden="true">↗</span>
            </a>
            <a className="ux-btn l" href={catHref(cat.slug)}>
              All {cat.title}
            </a>
          </div>
        </div>
        {v.hero === "split" ? (
          <aside className="ux-snap" aria-label="At a glance">
            <span className="ux-eyebrow">At a glance</span>
            <ul>
              {snap.map((x, i) => (
                <li key={i}>{x}</li>
              ))}
            </ul>
            <p>{s.steps.length} steps from first call to done.</p>
          </aside>
        ) : null}
      </div>
    </header>
  );
}
