import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../../comps/shared/SharedHeader";
import SharedFooter from "../../../comps/shared/SharedFooter";
import ScriptRunner from "../../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../../comps/shared/siteScript";
import Breadcrumbs from "../../../comps/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "EOR Services in India — OpsLogic",
  description: "Hire and manage employees in India through OpsLogic's EOR solution — employment, payroll, HR administration and compliance, handled.",
  alternates: { canonical: "/services/eor" },
};

const STEPS = [
  { t: "You choose the talent", d: "You identify who you want to hire — anywhere in India." },
  { t: "We employ them, compliantly", d: "OpsLogic becomes the legal employer of record, handling contracts and statutory compliance." },
  { t: "Payroll runs on time, every time", d: "Salaries, tax deductions and statutory filings, managed end-to-end." },
  { t: "You manage the work, we manage the paperwork", d: "Day-to-day direction stays with you; employment risk and admin sit with us." },
];

export default function EorPage() {
  return (
    <>
      <SharedHeader active="services" />
      <main>
        <section className="hero" style={{ background: "linear-gradient(135deg,#0b3d5c 0%,#18a7e0 55%,#0b0c10 100%)" }}>
          <div className="wrap hero-copy reveal">
            {/* <span className="eyebrow">Employer of Record</span> */}
            <h1>Build your team in <em>India</em> — without an entity.</h1>
            <p>Hire and manage employees in India through our EOR solution, with support across employment, payroll, HR administration and compliance.</p>
            <div className="hero-actions">
              <a className="button dark" href="/contact-us">Talk to an expert ↗</a>
            </div>
          </div>
        </section>
        <div className="wrap"><Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "EOR" }]} /></div>

        <section>
          <div className="wrap">
            <span className="eyebrow orange reveal">How it works</span>
            <h2 className="reveal" style={{ margin: "1rem 0 2.5rem", maxWidth: "16ch" }}>From offer letter to payslip.</h2>
            <div className="timeline reveal">
              {STEPS.map((s) => (
                <article key={s.t}><h3>{s.t}</h3><p className="muted">{s.d}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section className="dark-zone">
          <div className="wrap" style={{ textAlign: "center" }}>
            <p className="quote reveal">&quot;No entity, no delay — just a compliant team on the ground in weeks.&quot;</p>
          </div>
        </section>

        <section>
          <div className="wrap" style={{ textAlign: "center" }}>
            <span className="eyebrow reveal">Ready when you are</span>
            <h2 className="reveal" style={{ margin: "1rem 0 1.5rem" }}>Start hiring in India today.</h2>
            <a className="button dark reveal" href="/contact-us">Get in touch ↗</a>
          </div>
        </section>
      </main>
      <SharedFooter showEmail={false} />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
