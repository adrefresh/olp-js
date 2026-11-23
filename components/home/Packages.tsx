import "./packages.css";
import SectionHead from "../ui/SectionHead";

const ICONS = [
  <path key="a" d="M12 3c3 2 5 5 5 9l-2 4H9l-2-4c0-4 2-7 5-9zm-3 13-2 5 4-2m2 0 4 2-2-5M12 9.5h.01" />,
  <path key="b" d="M4 20V9l8-5 8 5v11M9 20v-6h6v6M4 20h16" />,
  <path key="c" d="M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1a2.5 2.5 0 1 0 0-5M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 14c2.8 0 5 2.2 5 5" />,
  <path key="d" d="M4 5h16v11H4zM9 20h6M12 16v4M8 9l2 2-2 2m4 0h3" />,
];
const TAGS = [
  ["Registration", "Bank account", "EOR", "Payroll"],
  ["Compliance", "Accounting", "Tax", "HR support"],
  ["Hiring", "Onboarding", "Payroll", "Training"],
  ["Website", "Devices", "Microsoft 365", "Security"],
];
const PACKAGES = [
  ["Launch in India", "Company setup, registrations and bank account, your first hires through Employer of Record, payroll from day one, laptops delivered and a managed workspace if you want one."],
  ["Run my company", "Compliance, accounting and tax, corporate secretarial, payroll and HR support under one agreement."],
  ["Grow my team", "Hiring, onboarding, payroll, engagement, training and equipment as the team scales."],
  ["Digital foundation", "Website, devices, Microsoft 365, security and IT support for a company that wants its technology in order."],
];

export default function Packages() {
  return (
    <section className="ux-sec t0" id="packages">
      <div className="ux-wrap">
        <SectionHead eyebrow="Packages" title="Bundles that fit together." lead="Most clients need several services at once. These bundles show how they fit together, and each one can be adjusted." />
        <div className="ux-pks ux-r">
          {PACKAGES.map(([t, d], i) => (
            <div className="ux-pk" tabIndex={0} key={t}>
              <i className="dot" aria-hidden="true" />
              <span className="ic" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{ICONS[i]}</svg>
              </span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
                <span className="tg">{TAGS[i].map((x) => <b key={x}>{x}</b>)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
