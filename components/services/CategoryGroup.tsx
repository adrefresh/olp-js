import { SERVICES, svcHref, type Cat } from "../../lib/services";
import SectionHead from "../ui/SectionHead";
import Html from "../ui/Html";

/** One group of services inside a category page. Cards sit in rows of two that alternate
 *  big+small, small+big, big+small, ... and a last odd card runs the full row. */
export default function CategoryGroup({ group: g, gi }: { group: Cat["groups"][number]; gi: number }) {
  const tone = ["t1", "t3", "t0", "t2"][gi % 4];
  const rows: string[][] = [];
  for (let i = 0; i < g.items.length; i += 2) rows.push(g.items.slice(i, i + 2));
  return (
    <section className={"ux-sec " + tone}>
      <div className="ux-wrap">
        <SectionHead eyebrow={`${g.items.length} ${g.items.length === 1 ? "service" : "services"}`} title={g.t} />
        <div className="ux-pairs">
          {rows.map((row, ri) => (
            <div className={"ux-prow" + (row.length === 1 ? " solo" : ri % 2 ? " flip" : "")} key={ri}>
              {row.map((s, ci) => {
                const n = ri * 2 + ci;
                const big = row.length === 1 || (ri % 2 === 0 ? ci === 0 : ci === 1);
                return (
                  <a className={"ux-tile ux-r" + (big ? " big" : "")} style={{ ["--i" as string]: ci }} href={svcHref(s)} key={s}>
                    <span className="ux-num">{String(n + 1).padStart(2, "0")}</span>
                    <h3>{SERVICES[s].title}</h3>
                    <Html as="p" html={SERVICES[s].short} />
                    <span className="ux-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
