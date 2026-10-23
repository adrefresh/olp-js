import SectionHead from "../ui/SectionHead";

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
              <span className="no">0{i + 1}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
