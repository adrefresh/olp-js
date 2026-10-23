import type { Block } from "../../lib/services";
import type { ListStyle } from "../../lib/services";
import SectionHead from "../ui/SectionHead";
import Html from "../ui/Html";
import ListView from "./ListView";
import { toNodes } from "./service-utils";

export default function ServiceSection({ sec, idx, list }: { sec: { t: string; b: Block[] }; idx: number; list: ListStyle }) {
  const nodes = toNodes(sec.b);
  const lists = nodes.filter((n) => n.k === "list");
  const tone = ["t0", "t1", "t2", "t0"][idx % 4];
  const audience = /^who this/i.test(sec.t);

  if (audience) {
    return (
      <section className={"ux-sec " + tone}>
        <div className="ux-wrap">
          <div className="ux-aud ux-r">
            <span className="ux-eyebrow">{sec.t}</span>
            {nodes.map((n, i) => (n.k === "p" ? <Html as="p" html={n.html} key={i} /> : null))}
          </div>
        </div>
      </section>
    );
  }
  if (lists.length >= 2) {
    return (
      <section className={"ux-sec " + tone}>
        <div className="ux-wrap">
          <SectionHead eyebrow={`0${idx + 1}`} title={sec.t} />
          {nodes.filter((n) => n.k === "p").map((n, i) => (n.k === "p" ? <Html as="p" className="ux-lead ux-r" html={n.html} key={i} /> : null))}
          <div className="ux-cmp">
            {lists.map(
              (n, i) =>
                n.k === "list" && (
                  <div className="ux-card ux-r" style={{ ["--i" as string]: i }} key={i}>
                    {n.label ? <Html as="h3" html={n.label.replace(/:$/, "")} /> : null}
                    <ListView items={n.items} style="check" />
                  </div>
                ),
            )}
          </div>
        </div>
      </section>
    );
  }
  const wide = lists.some((n) => n.k === "list" && (n.items.length > 6 || n.items.every((x) => x.h)));
  const body = (
    <div className="ux-body">
      {nodes.map((n, i) =>
        n.k === "p" ? (
          <Html as="p" className={"ux-lead ux-r" + (i === 0 ? " first" : "")} html={n.html} key={i} />
        ) : (
          <div key={i} className="ux-r">
            {n.label ? <Html as="h3" className="ux-lab" html={n.label.replace(/:$/, "")} /> : null}
            <ListView items={n.items} style={list} />
          </div>
        ),
      )}
    </div>
  );
  return (
    <section className={"ux-sec " + tone}>
      <div className={"ux-wrap " + (wide ? "ux-stack" : "ux-split")}>
        <div className={wide ? "" : "ux-stick"}>
          <SectionHead eyebrow={`0${idx + 1}`} title={sec.t} />
        </div>
        {body}
      </div>
    </section>
  );
}
