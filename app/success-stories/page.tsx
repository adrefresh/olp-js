import type { Metadata } from "next";
import "../services/page.css";
import Breadcrumbs from "../../comps/shared/Breadcrumbs";
import SharedHeader from "../../comps/shared/SharedHeader";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";
import { UxHero, UxHead } from "../../comps/shared/Ux";

export const metadata: Metadata = {
  title: "Success Stories — OpsLogic",
  description: "A look at the kinds of operational problems we help teams untangle, strengthen and run with more confidence.",
};

const POINTS = [
  ["01", "Operational clarity", "Teams replace fragmented workflows with clearer ownership, repeatable routines and visible execution."],
  ["02", "Connected functions", "People, technology and process support work together instead of becoming another layer of complexity."],
  ["03", "Room to grow", "Operational foundations are designed to support the next stage, not just solve today’s pressure."],
];

export default function SuccessStoriesPage() {
  return (
    <>
      <SharedHeader active="services" />
      <Breadcrumbs items={[{ label: "Success Stories" }]} />
      <main className="ux">
        <UxHero
          eyebrow="Success stories"
          lines={["Better operations.", <>Real <em>momentum.</em></>]}
          sub="A look at the kinds of operational problems we help teams untangle, strengthen and run with more confidence."
        />

        <section className="ux-sec t0">
          <div className="ux-wrap">
            <UxHead eyebrow="The work behind the work" title="Every story starts with friction." />
            <div className="ux-grid ux-g3">
              {POINTS.map(([n, t, d], i) => (
                <article className="ux-card ux-r" style={{ ["--i" as string]: i }} key={n}>
                  <span className="ux-num">{n}</span>
                  <h3>{t}</h3>
                  <p style={{ color: "var(--mu)", lineHeight: 1.7 }}>{d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ux-sec t3">
          <div className="ux-wrap ux-split">
            <UxHead eyebrow="A practical model" title="We work inside the problem." />
            <div className="ux-glass ux-r ux-quote2" style={{ ["--i" as string]: 1 }}>
              <p>The goal is not to add another vendor. It is to create a reliable operational layer that works in sync with your team, priorities and timelines.</p>
              <p>That means practical systems, visible ownership and execution that keeps improving.</p>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
