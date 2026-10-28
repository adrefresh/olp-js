import type { ReactNode } from "react";
import type { StepStyle } from "../../lib/services";
import SectionHead from "../ui/SectionHead";
import Html from "../ui/Html";

export default function ServiceSteps({ steps, style }: { steps: { t: string; d: string }[]; style: StepStyle }) {
  const n = steps.length;
  const head = <SectionHead eyebrow="How it works" title={`${n} steps, start to finish.`} />;
  let body: ReactNode;
  if (style === "vert")
    return (
      <section className="ux-sec t3">
        <div className="ux-wrap ux-split ux-stepsplit">
          <div className="ux-stick ux-r">
            <span className="ux-eyebrow">How it works</span>
            <h2>{n} steps, start to finish.</h2>
            <p className="ux-lead">From the first call to done, with one team and one point of contact.</p>
            <div className="ux-btns">
              <a className="ux-btn o" href="/contact">
                Talk to us <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <ol className="ux-hire">
            {steps.map((s, i) => (
              <li className="ux-card ux-r" style={{ ["--i" as string]: i }} key={i}>
                <span className="n">0{i + 1}</span>
                <div>
                  <h3>{s.t}</h3>
                  <Html as="p" html={s.d} />
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  if (style === "cards")
    body = (
      <div className="ux-grid ux-sc">
        {steps.map((s, i) => (
          <div className="ux-card ux-r" style={{ ["--i" as string]: i }} key={i}>
            <span className="ux-num">0{i + 1}</span>
            <div>
              <h3>{s.t}</h3>
              <Html as="p" html={s.d} />
            </div>
          </div>
        ))}
      </div>
    );
  else if (style === "big")
    body = (
      <ol className="ux-bigs">
        {steps.map((s, i) => (
          <li className="ux-r" style={{ ["--i" as string]: i }} key={i}>
            <span>{i + 1}</span>
            <div>
              <h3>{s.t}</h3>
              <Html as="p" html={s.d} />
            </div>
          </li>
        ))}
      </ol>
    );
  else
    body = (
      <div className="ux-steps" style={{ ["--n" as string]: n }}>
        {steps.map((s, i) => (
          <div className="ux-step ux-r" style={{ ["--i" as string]: i }} key={i}>
            <span className="d">{i + 1}</span>
            <h3>{s.t}</h3>
            <Html as="p" html={s.d} />
          </div>
        ))}
      </div>
    );
  return (
    <section className="ux-sec t3">
      <div className="ux-wrap">
        {head}
        {body}
      </div>
    </section>
  );
}
