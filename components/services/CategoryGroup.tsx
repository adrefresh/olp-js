import { SERVICES, svcHref, type Cat } from "../../lib/services";
import SectionHead from "../ui/SectionHead";
import Html from "../ui/Html";

export type CategoryLayout = "journey" | "editorial" | "bento";

/** One group of services inside a category page, drawn in the category's own layout. */
export default function CategoryGroup({ group: g, gi, layout }: { group: Cat["groups"][number]; gi: number; layout: CategoryLayout }) {
  const tone = ["t1", "t3", "t0", "t2"][gi % 4];
  if (layout === "journey")
    return (
      <section className={"ux-sec " + tone}>
        <div className="ux-wrap ux-jr">
          <div className="ux-jn ux-r">
            <span>{gi + 1}</span>
          </div>
          <div>
            <SectionHead eyebrow={`Stage ${gi + 1}`} title={g.t} />
            <div className="ux-grid ux-g2 ux-lg">
              {g.items.map((s, i) => (
                <a className="ux-card ux-r ux-rowcard" style={{ ["--i" as string]: i % 4 }} href={svcHref(s)} key={s}>
                  <h3>{SERVICES[s].title}</h3>
                  <Html as="p" html={SERVICES[s].short} />
                  <span className="ux-more">
                    Learn more <span aria-hidden="true">→</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  if (layout === "editorial")
    return (
      <section className={"ux-sec " + tone}>
        <div className="ux-wrap ux-split">
          <div className="ux-stick">
            <SectionHead eyebrow={`0${gi + 1}`} title={g.t} />
          </div>
          <ul className="ux-list">
            {g.items.map((s, i) => (
              <li className="ux-r" style={{ ["--i" as string]: i % 5 }} key={s}>
                <a href={svcHref(s)}>
                  <div>
                    <h3>{SERVICES[s].title}</h3>
                    <Html as="p" html={SERVICES[s].short} />
                  </div>
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  return (
    <section className={"ux-sec " + tone}>
      <div className="ux-wrap">
        <SectionHead eyebrow={`${g.items.length} services`} title={g.t} />
        <div className="ux-bento">
          {g.items.map((s, i) => (
            <a className={"ux-tile ux-r" + (i === 0 ? " big" : "")} style={{ ["--i" as string]: i % 4 }} href={svcHref(s)} key={s}>
              <span className="ux-num">0{i + 1}</span>
              <h3>{SERVICES[s].title}</h3>
              <Html as="p" html={SERVICES[s].short} />
              <span className="ux-arrow" aria-hidden="true">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
