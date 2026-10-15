import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";
import SharedHeader from "./SharedHeader";
import SharedFooter from "./SharedFooter";
import ScriptRunner from "./ScriptRunner";
import { SITE_SCRIPT } from "./siteScript";
import { UxChoose, UxHead, UxHero } from "./Ux";
import H from "./H";
import { CATS, SERVICES, svcHref } from "./servicesContent";

const LAYOUT: Record<string, "journey" | "editorial" | "bento"> = {
  "business-operations": "journey",
  "hr-payroll": "editorial",
  "it-services": "bento",
};

function lines(h: string): ReactNode[] {
  const parts = h.split(/(?<=[.?!])\s+/).filter(Boolean);
  return parts.map((p, i) => (i === parts.length - 1 && parts.length > 1 ? <em key={i}>{p}</em> : p));
}

export function CategoryView({ slug }: { slug: string }) {
  const c = CATS.find((x) => x.slug === slug)!;
  const layout = LAYOUT[slug];
  return (
    <>
      <SharedHeader active="services" />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: c.title }]} />
      <main className={"ux ly-" + layout}>
        <UxHero eyebrow={c.title} lines={c.h ? lines(c.h) : [c.title]} sub={c.p} />

        <section className="ux-sec t0">
          <div className="ux-wrap ux-split">
            <UxHead eyebrow="Overview" title={c.title} />
            <div className="ux-two ux-r" style={{ ["--i" as string]: 1 }}><p>{c.o}</p></div>
          </div>
        </section>

        {c.groups.map((g, gi) => {
          const tone = ["t1", "t3", "t0", "t2"][gi % 4];
          if (layout === "journey")
            return (
              <section className={"ux-sec " + tone} key={g.t}>
                <div className="ux-wrap ux-jr">
                  <div className="ux-jn ux-r"><span>{gi + 1}</span></div>
                  <div>
                    <UxHead eyebrow={`Stage ${gi + 1}`} title={g.t} />
                    <div className="ux-grid ux-g2 ux-lg">
                      {g.items.map((s, i) => (
                        <a className="ux-card ux-r ux-rowcard" style={{ ["--i" as string]: i % 4 }} href={svcHref(s)} key={s}>
                          <h3>{SERVICES[s].title}</h3>
                          <H as="p" html={SERVICES[s].short} />
                          <span className="ux-more">Learn more <span aria-hidden="true">→</span></span>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            );
          if (layout === "editorial")
            return (
              <section className={"ux-sec " + tone} key={g.t}>
                <div className="ux-wrap ux-split">
                  <div className="ux-stick"><UxHead eyebrow={`0${gi + 1}`} title={g.t} /></div>
                  <ul className="ux-list">
                    {g.items.map((s, i) => (
                      <li className="ux-r" style={{ ["--i" as string]: i % 5 }} key={s}>
                        <a href={svcHref(s)}>
                          <div><h3>{SERVICES[s].title}</h3><H as="p" html={SERVICES[s].short} /></div>
                          <span aria-hidden="true">→</span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            );
          return (
            <section className={"ux-sec " + tone} key={g.t}>
              <div className="ux-wrap">
                <UxHead eyebrow={`${g.items.length} services`} title={g.t} />
                <div className="ux-bento">
                  {g.items.map((s, i) => (
                    <a className={"ux-tile ux-r" + (i === 0 ? " big" : "")} style={{ ["--i" as string]: i % 4 }} href={svcHref(s)} key={s}>
                      <span className="ux-num">0{i + 1}</span>
                      <h3>{SERVICES[s].title}</h3>
                      <H as="p" html={SERVICES[s].short} />
                      <span className="ux-arrow" aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </section>
          );
        })}

        <section className="ux-sec t0">
          <div className="ux-wrap ux-split">
            <div className="ux-stick"><UxHead eyebrow="FAQ" title="Questions we hear" /></div>
            <div className="ux-faq ux-r">
              {c.faq.map((f, i) => (<details key={i}><summary>{f.q}</summary><p>{f.a}</p></details>))}
            </div>
          </div>
        </section>
        <UxChoose title={c.cta} />
      </main>
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
