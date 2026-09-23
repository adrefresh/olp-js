import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../../comps/shared/SharedHeader";
import SharedFooter from "../../../comps/shared/SharedFooter";
import ScriptRunner from "../../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../../comps/shared/siteScript";
import Breadcrumbs from "../../../comps/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "HR Services — OpsLogic",
  description: "Recruitment, onboarding, HR operations, payroll and employee support — people processes that support growth.",
  alternates: { canonical: "/services/hr" },
};

const PILLARS = [
  { t: "Recruitment & Onboarding", d: "Sourcing, screening and onboarding aligned to your goals and culture." },
  { t: "HR Operations", d: "Policies, records and day-to-day HR administration, handled consistently." },
  { t: "Payroll & Support", d: "Accurate payroll and an always-available employee support layer." },
];

export default function HrPage() {
  return (
    <>
      <SharedHeader active="services" />
      <main>
        <section className="hero">
          <i className="orb" />
          <div className="wrap hero-copy reveal">
            <span className="eyebrow">HR Services</span>
            <h1>Build a <em>stronger</em> workforce.</h1>
            <p>From recruitment and onboarding to HR operations, payroll and employee support, we help you create people processes that support growth.</p>
            <div className="hero-actions">
              <a className="button dark" href="/contact-us">Talk to an expert ↗</a>
            </div>
          </div>
        </section>
        <div className="wrap"><Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "HR Services" }]} /></div>

        <section>
          <div className="wrap">
            <span className="eyebrow orange reveal">What we cover</span>
            <h2 className="reveal" style={{ margin: "1rem 0 2.5rem", maxWidth: "14ch" }}>Three pillars, one team.</h2>
            <div className="grid three reveal">
              {PILLARS.map((p) => (
                <div className="card" key={p.t}><h3>{p.t}</h3><p>{p.d}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="wrap" style={{ textAlign: "center" }}>
            <span className="eyebrow reveal">Ready when you are</span>
            <h2 className="reveal" style={{ margin: "1rem 0 1.5rem" }}>Let&apos;s build your people function.</h2>
            <a className="button dark reveal" href="/contact-us">Get in touch ↗</a>
          </div>
        </section>
      </main>
      <SharedFooter showEmail={false} />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
