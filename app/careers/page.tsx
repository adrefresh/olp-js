import type { Metadata } from "next";
import "../services/page.css";
import Breadcrumbs from "../../comps/shared/Breadcrumbs";
import SharedHeader from "../../comps/shared/SharedHeader";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";
import { UxHero, UxHead, UxCta } from "../../comps/shared/Ux";

export const metadata: Metadata = {
  title: "Careers — OpsLogic",
  description: "We're always interested in people who are careful, curious and good with details.",
};

const STEPS = [
  ["Apply", "Send your CV and a few lines about why this role."],
  ["A first chat", "A short call. No trick questions."],
  ["A practical conversation", "A short exercise or a talk about real work you've done."],
  ["Meet the team", "Talk with the people you'd work with."],
  ["Decision", "We tell you within X days, either way."],
];

export default function CareersPage() {
  return (
    <>
      <SharedHeader active="careers" />
      <Breadcrumbs items={[{ label: "Careers" }]} />
      <main className="ux">
        <UxHero
          eyebrow="Careers"
          lines={["Do work that keeps", <>other <em>businesses</em></>, "running."]}
          sub="We're always interested in people who are careful, curious and good with details."
          aside={
            <div className="ux-stickers ux-traits" aria-hidden="true">
              <div className="ux-stk s1"><b>Careful</b><span>gets it right</span></div>
              <div className="ux-stk s2"><b>Curious</b><span>asks why</span></div>
              <div className="ux-stk s3"><b>Good with details</b><span>spots the gap</span></div>
            </div>
          }
        />

        <section className="ux-sec t0" id="working-here">
          <div className="ux-wrap ux-split">
            <UxHead eyebrow="Working here" title="Quiet, important work." />
            <div className="ux-two ux-r" style={{ ["--i" as string]: 1 }}>
              <p>Our work is quiet and important. When we do it well, a founder hires without worry, a payroll goes out on the right day and a server move happens over a weekend nobody notices.</p>
              <p>That suits people who like things done properly and would rather fix the root cause than close a ticket.</p>
            </div>
          </div>
        </section>

        <section className="ux-sec t3" id="how-we-hire">
          <div className="ux-wrap ux-split">
            <div className="ux-stick ux-r">
              <span className="ux-eyebrow">How we hire</span>
              <h2>Five steps, no surprises.</h2>
              <p className="ux-lead">Every step is short, and you always hear back, whatever the outcome.</p>
              <div className="ux-btns"><a className="ux-btn o" href="#open-roles">See open roles <span aria-hidden="true">↓</span></a></div>
            </div>
            <ol className="ux-hire">
              {STEPS.map(([t, d], i) => (
                <li className="ux-card ux-r" style={{ ["--i" as string]: i }} key={t}>
                  <span className="n">0{i + 1}</span>
                  <div><h3>{t}</h3><p>{d}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="ux-sec t1" id="open-roles">
          <div className="ux-wrap">
            <UxHead eyebrow="Open roles" title="Open roles" />
            <div className="ux-ph ux-r">List openings here</div>
            <p className="ux-lead ux-r">Don&apos;t see the right role? Send your CV anyway. We read everything.</p>
            <div className="ux-btns"><a className="ux-btn d" href="mailto:hello@opslogic.team">Send your CV <span aria-hidden="true">↗</span></a></div>
          </div>
        </section>

        <UxCta />
      </main>
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
