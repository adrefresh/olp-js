import type { Metadata } from "next";
import "../../page.css";
import "./eor.css";
import Breadcrumbs from "../../../../comps/shared/Breadcrumbs";
import SharedHeader from "../../../../comps/shared/SharedHeader";
import SharedFooter from "../../../../comps/shared/SharedFooter";
import EorLifecycle from "../../../../comps/eor-comps/EorLifecycle";
import ScriptRunner from "../../../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../../../comps/shared/siteScript";

export const metadata: Metadata = {
  title: "EOR Services in India — OpsLogic",
  description: "Hire and manage employees in India through OpsLogic's EOR solution — employment, payroll, HR administration and compliance, handled.",
};

const PILLARS = [
  { k: "You choose", v: "the talent" },
  { k: "You manage", v: "the work" },
  { k: "We manage", v: "the employment" },
];

const BENEFITS = [
  { t: "Faster Market Entry", d: "Start hiring and onboarding talent without waiting to establish a full local setup.", i: "M13 3L4 14h7l-1 7 9-11h-7z" },
  { t: "Local Employment Expertise", d: "Navigate India's employment and payroll requirements with a team that understands the local landscape.", i: "M12 21s7-6 7-12a7 7 0 10-14 0c0 6 7 12 7 12zM12 11a2 2 0 100-4 2 2 0 000 4z" },
  { t: "One Partner for Your Workforce", d: "Bring employment administration, payroll, HR operations and compliance coordination under one roof.", i: "M12 3l9 4-9 4-9-4zM3 12l9 4 9-4M3 17l9 4 9-4" },
  { t: "Focus on Your Business", d: "Manage your team's goals, work and performance while we manage the employment administration behind the scenes.", i: "M12 12m-9 0a9 9 0 1018 0 9 9 0 10-18 0M12 12m-4 0a4 4 0 108 0 4 4 0 10-8 0M12 12h.01" },
  { t: "Flexible Team Expansion", d: "Start with one employee or build a larger team as your India operations grow.", i: "M3 17l6-6 4 4 8-8M15 7h6v6" },
  { t: "A Smoother Employee Experience", d: "Give your employees structured onboarding, payroll and HR support from day one.", i: "M12 21s-8-5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 6-8 11-8 11z" },
];

const STAGES = [
  { title: "Hire & Onboard", blurb: "Get your India team started on the right foundation.", icon: "M16 11a4 4 0 10-8 0M4 21c0-4 3.6-6 8-6s8 2 8 6", items: ["Employment documentation", "Offer and appointment documentation", "Employee onboarding", "Background verification coordination", "HRMS setup", "Employee records", "Induction support"] },
  { title: "Payroll & Compensation", blurb: "Keep your payroll accurate, timely and structured.", icon: "M3 7h18v10H3zM3 11h18M7 15h3", items: ["Monthly payroll processing", "Salary calculations", "Statutory deductions", "Tax deductions", "Payslips", "Bonuses and incentives", "Reimbursements", "Salary revisions", "Payroll reports"] },
  { title: "Compliance & Statutory", blurb: "Stay aligned with applicable Indian employment and payroll requirements.", icon: "M9 12l2 2 4-4M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z", items: ["Provident Fund", "ESI, where applicable", "Professional Tax", "TDS and payroll taxation", "Applicable employment registrations", "Statutory filings", "Employment documentation", "Compliance administration"] },
  { title: "Benefits & Support", blurb: "Create an employee experience that works for both your business and your people.", icon: "M12 21s-8-5-8-11a4.5 4.5 0 018-2.8A4.5 4.5 0 0120 10c0 6-8 11-8 11z", items: ["Employee insurance coordination", "Statutory benefits", "Leave administration", "Expense and reimbursement management", "HR support", "Employee queries", "HRMS support"] },
  { title: "Lifecycle Management", blurb: "We support your team beyond onboarding.", icon: "M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3M18 3v4h-4M6 21v-4h4", items: ["Employee data management", "Leave and attendance administration", "Compensation changes", "Promotions and role changes", "Employee documentation", "HR administration", "Ongoing employment support"] },
  { title: "Exit & Full & Final", blurb: "When an employee leaves, we manage the process through to closure.", icon: "M10 17l5-5-5-5M15 12H3M21 4v16", items: ["Resignation documentation", "Notice period administration", "Exit formalities", "Payroll adjustments", "Leave encashment, where applicable", "Full & final settlement", "Experience and relieving documentation", "Asset recovery coordination"] },
];

const COMPARE = [
  ["Establish your own Indian entity", "No separate Indian entity required for the EOR model"],
  ["Build your own HR infrastructure", "Use an established HR and employment framework"],
  ["Manage payroll and statutory processes", "OpsLogic manages payroll administration"],
  ["Establish employment processes", "Employment documentation managed through OpsLogic"],
  ["Build internal compliance capabilities", "Local employment compliance administration"],
  ["Manage the complete employee lifecycle internally", "OpsLogic supports the employment lifecycle"],
  ["Greater setup and administrative involvement", "Faster and more streamlined market entry"],
];

const JOURNEY = ["Recruit", "Employ", "Pay", "Support", "Grow"];

const FAQS = [
  { q: "What is an Employer of Record?", a: "An Employer of Record is a service model that allows a company to employ workers in India through an EOR provider without establishing its own local employment setup. The EOR manages employment administration, payroll, statutory requirements and other HR processes, while the client manages the employee's day-to-day work." },
  { q: "Can a foreign company hire employees in India through OpsLogic?", a: "Yes. EOR is designed to help international companies hire employees in India without having to establish their own local entity for the employment arrangement." },
  { q: "Will we still manage our employees?", a: "Yes. You continue to manage your employees' day-to-day responsibilities, work, reporting, goals and performance. OpsLogic manages the employment administration." },
  { q: "What does OpsLogic manage?", a: "Depending on the engagement, OpsLogic can manage employment documentation, onboarding, payroll, statutory administration, benefits coordination, employee support, HR administration and exit processes." },
  { q: "Can we hire just one employee?", a: "Yes. EOR can be useful even when a company is starting with a small team or a single employee." },
  { q: "Can employees be transitioned to our own entity later?", a: "An EOR arrangement can be used as an initial route while a company evaluates or establishes its own India operations. Employee transition can then be planned based on the applicable legal and employment requirements." },
  { q: "Does OpsLogic provide recruitment along with EOR?", a: "Recruitment can be included where required. If you already have your candidate, OpsLogic can focus on the employment and HR administration side." },
  { q: "What happens when an employee leaves?", a: "OpsLogic can support the applicable resignation, notice, payroll adjustment, full & final settlement, documentation and other exit formalities." },
  { q: "Why choose OpsLogic for EOR?", a: "OpsLogic combines employment administration with practical HR and payroll expertise, giving international businesses a single partner to manage their India workforce while they remain focused on their core business." },
];

const d = (v: string) => ({ ["--d" as string]: v });

export default function EorPage() {
  return (
    <>
      <SharedHeader active="services" />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "HR Operations", href: "/services/hr-operations" }, { label: "EOR" }]} />
      <main className="eor">
        {/* HERO */}
        <section className="eor-hero">
          <i className="eor-blob b1" /><i className="eor-blob b2" /><i className="eor-blob b3" />
          <div className="eor-wrap eor-hero-grid">
            <div className="eor-hero-copy">
              <span className="eor-tag eor-pop" style={d("0s")}>Employer of Record</span>
              <h1>
                {["Hire", "in", "India."].map((w, i) => (<span key={w} className="eor-w" style={d(`${0.1 + i * 0.09}s`)}>{w}&nbsp;</span>))}
                <span className="eor-w eor-grad" style={d("0.4s")}>Build your team.</span>{" "}
                <span className="eor-w" style={d("0.55s")}>We handle the employment.</span>
              </h1>
              <p className="eor-pop" style={d(".75s")}>
                Expand your business into India without the complexity of setting up a local entity. With OpsLogic Employer of Record, you hire and manage employees in India while we take care of employment, payroll, HR administration and applicable compliance requirements.
              </p>
              <div className="eor-actions eor-pop" style={d(".9s")}>
                <a className="eor-btn primary" href="/contact-us">Start Hiring in India <span>↗</span></a>
                <a className="eor-btn ghost" href="#lifecycle">Explore the lifecycle</a>
              </div>
            </div>
            <div className="eor-hero-art" aria-hidden="true">
              <div className="eor-card">
                <div className="eor-card-top"><span className="eor-avatar">OL</span><div><b>New India hire</b><small>Employed via OpsLogic EOR</small></div><em>Active</em></div>
                <ul className="eor-checks">
                  <li style={d("1s")}>Employment documentation</li>
                  <li style={d("1.35s")}>Onboarding complete</li>
                  <li style={d("1.7s")}>Payroll configured</li>
                  <li style={d("2.05s")}>Statutory compliance in place</li>
                </ul>
                <div className="eor-bar"><span /></div>
              </div>
              <div className="eor-chip c1">✓ Payslip issued</div>
              <div className="eor-chip c2">PF · ESI · TDS</div>
              <div className="eor-chip c3">+1 hire onboarded</div>
            </div>
          </div>
        </section>

        {/* PILLARS */}
        <section className="eor-stats">
          <div className="eor-wrap eor-stats-grid three">
            {PILLARS.map((s, i) => (
              <div key={s.k} className="reveal eor-stat" style={d(`${i * 0.1}s`)}>
                <span>{s.k}</span><strong>{s.v}</strong>
              </div>
            ))}
          </div>
        </section>

        {/* INTRO + BENEFITS */}
        <section className="eor-sec">
          <div className="eor-wrap">
            <div className="eor-head reveal">
              <span className="eor-tag orange">Why EOR</span>
              <h2>Start hiring in India without setting up an entity.</h2>
              <p className="eor-lead">Entering a new market shouldn&apos;t mean building an entire HR and compliance function from day one. OpsLogic acts as your Employer of Record in India, giving you a structured way to onboard local talent and manage their employment through a single partner, from contracts and onboarding to payroll, statutory requirements, benefits and exits.</p>
            </div>
            <h3 className="eor-sub reveal">Your India team, without the India entity.</h3>
            <div className="eor-cards">
              {BENEFITS.map((c, i) => (
                <article key={c.t} className="eor-feature reveal" style={d(`${(i % 3) * 0.1}s`)}>
                  <span className="eor-ico"><svg viewBox="0 0 24 24"><path d={c.i} /></svg></span>
                  <h3>{c.t}</h3><p>{c.d}</p><small>0{i + 1}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LIFECYCLE */}
        <section className="eor-sec tint" id="lifecycle">
          <div className="eor-wrap">
            <div className="eor-head reveal">
              <span className="eor-tag">What we manage</span>
              <h2>From first hire to final exit, we manage the journey.</h2>
              <p className="eor-lead">Your employees deserve a seamless experience throughout their time with you. Our EOR services cover the complete employment lifecycle.</p>
            </div>
            <div className="reveal"><EorLifecycle stages={STAGES} /></div>
          </div>
        </section>

        {/* COMPARE */}
        <section className="eor-sec">
          <div className="eor-wrap eor-split">
            <div className="reveal">
              <span className="eor-tag orange">Choose your model</span>
              <h2>EOR or setting up an entity?</h2>
              <p className="eor-lead">Not every business needs to establish an Indian entity before building an Indian team. If you&apos;re testing the Indian market, building your first few hires or expanding an existing international team, EOR can provide a practical route to hiring in India.</p>
              <p className="eor-lead strong">Choose the model that fits your stage of growth.</p>
            </div>
            <div className="eor-table reveal" style={d(".15s")}>
              <div className="eor-row head"><b>Setting up your own entity</b><b className="y">OpsLogic EOR</b></div>
              {COMPARE.map(([a, b]) => (
                <div className="eor-row" key={a}><span>{a}</span><b className="yes">{b}</b></div>
              ))}
            </div>
          </div>
        </section>

        {/* JOURNEY */}
        <section className="eor-quote-sec">
          <div className="eor-wrap reveal">
            <span className="eor-tag orange">One team. One partner.</span>
            <p className="eor-quote">One simpler way to <em>hire in India</em>.</p>
            <p className="eor-sub2">Whether you&apos;re hiring your first employee in India or building a growing distributed team, OpsLogic brings the employment administration together in one place.</p>
            <ol className="eor-journey">
              {JOURNEY.map((j, i) => (<li key={j} style={d(`${i * 0.12}s`)}><b>{j}</b><i>{i < JOURNEY.length - 1 ? "→" : "."}</i></li>))}
            </ol>
            <p className="eor-sub2">We take care of the employment side so you can focus on building the business.</p>
          </div>
        </section>

        {/* FAQ */}
        <section className="eor-sec">
          <div className="eor-wrap eor-faq-grid">
            <div className="reveal eor-faq-side">
              <span className="eor-tag">FAQ</span>
              <h2>Frequently asked questions.</h2>
              <p className="eor-lead">Still unsure? Our team will walk you through it.</p>
            </div>
            <div className="eor-faqs reveal" style={d(".12s")}>
              {FAQS.map((f) => (<details key={f.q}><summary>{f.q}<i /></summary><p>{f.a}</p></details>))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="eor-cta-sec">
          <div className="eor-wrap">
            <div className="eor-cta reveal">
              <span className="eor-tag light">Let&apos;s talk</span>
              <h2>Ready to build your team in India?</h2>
              <p>Let&apos;s talk about your India hiring plans.</p>
              <a className="eor-btn primary" href="/contact-us">Talk to Our EOR Team <span>↗</span></a>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter showEmail={false} />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
