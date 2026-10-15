import { UxHead, UxCta } from "../shared/Ux";

const PACKAGES = [
  ["Launch in India", "Company setup, registrations and bank account, your first hires through Employer of Record, payroll from day one, laptops delivered and a managed workspace if you want one."],
  ["Run my company", "Compliance, accounting and tax, corporate secretarial, payroll and HR support under one agreement."],
  ["Grow my team", "Hiring, onboarding, payroll, engagement, training and equipment as the team scales."],
  ["Digital foundation", "Website, devices, Microsoft 365, security and IT support for a company that wants its technology in order."],
];
const WORK_WITH = [
  "Overseas startups and companies building a team in India.",
  "Indian startups and growing companies that need back office, HR and IT without building departments.",
  "Established businesses outsourcing parts of HR, payroll or compliance.",
];
const INDUSTRIES = ["IT", "Manufacturing", "Automobile", "Power", "Hospitality", "Real estate"];
const ALSO = ["Pharma and healthcare", "Logistics and supply chain", "Retail and e-commerce", "Construction and infrastructure", "Education and training", "Financial services", "Food processing"];
const WHY = [
  ["We start with your goals, not our template.", "The plan comes after we know what you're trying to get done."],
  ["One team, not five vendors.", "HR, IT, compliance and operations touch each other constantly. Nothing falls into the gap between suppliers."],
  ["Start small, add later.", "Begin with payroll or a registration. Add more when you're ready."],
  ["Real people who stay.", "You'll know who's working on your account."],
];

export function WhoWeAre() {
  return (
    <div className="ux">
      <section className="ux-sec t1 ux-who" id="who-we-are">
        <div className="ux-wrap ux-split">
          <div className="ux-r">
            <span className="ux-eyebrow">Who we are</span>
            <h2>Three founders. <em>One team</em> you can call.</h2>
            <p className="ux-lead">OpsLogic is a business operations partner based in Hyderabad, India. Most of the companies we meet aren&apos;t short on ambition. They&apos;re short on hours, so we take on the setup, hiring, payroll and IT.</p>
            <a className="ux-btn d" style={{ marginTop: "2rem" }} href="/about-us">Meet the team <span aria-hidden="true">→</span></a>
          </div>
          <div className="ux-whocards">
            {[
              ["01", "Business Operations", "Company setup, compliance and day-to-day running."],
              ["02", "HR & Payroll", "Hiring, employing and paying your people."],
              ["03", "IT Services", "Devices, systems and support that just work."],
            ].map(([n, t, d], i) => (
              <div className="ux-card ux-r" style={{ ["--i" as string]: i + 1 }} key={n}>
                <span className="n">{n}</span>
                <div><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export function HomeRest() {
  return (
    <div className="ux">
      <section className="ux-sec t0" id="packages">
        <div className="ux-wrap">
          <UxHead eyebrow="Packages" title="Bundles that fit together." lead="Most clients need several services at once. These bundles show how they fit together, and each one can be adjusted." />
          <div className="ux-pks ux-r">
            {PACKAGES.map(([t, d], i) => (
              <div className="ux-pk" tabIndex={0} key={t}>
                <i className="dot" aria-hidden="true" />
                <span className="no">0{i + 1}</span>
                <div><h3>{t}</h3><p>{d}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ux-sec t1" id="who-we-work-with">
        <div className="ux-wrap">
          <UxHead eyebrow="Who we work with" title="Built for teams that would rather not build a department." />
          <div className="ux-grid ux-g3">
            {WORK_WITH.map((t, i) => (
              <div className="ux-card ux-r" style={{ ["--i" as string]: i }} key={t}>
                <span className="ux-num">0{i + 1}</span>
                <h3>{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ux-sec t3" id="industries">
        <div className="ux-wrap">
          <UxHead eyebrow="Industries" title="Industries we work with" lead="Our clients come from IT, manufacturing, automobile, power, hospitality and real estate. Their needs differ, but the basics are the same: set up properly, hire well, pay on time and keep the systems running." />
        </div>
        <div className="ux-mq ux-r" aria-hidden="true">
          <div className="ux-mq-t">
            {[...INDUSTRIES, ...INDUSTRIES].map((x, i) => <span key={i}>{x}</span>)}
          </div>
        </div>
        <div className="ux-wrap ux-r">
          <p className="ux-also">Also a good fit</p>
          <div className="ux-chips">{ALSO.map((x) => <span className="ux-chip" key={x}>{x}</span>)}</div>
        </div>
      </section>

      <section className="ux-sec t1" id="testimonials">
        <div className="ux-wrap">
          <UxHead eyebrow="What clients say" title="In their words." />
          <div className="ux-grid ux-g3">
            {[0, 1, 2].map((i) => (
              <figure className="ux-card ux-quote ux-r" style={{ ["--i" as string]: i, margin: 0 }} key={i}>
                <div className="q" aria-hidden="true">“</div>
                <blockquote>Client quote</blockquote>
                <figcaption className="who"><i aria-hidden="true" />Name, role, company</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="ux-sec t1" id="why">
        <div className="ux-wrap ux-split">
          <div className="ux-stick"><UxHead eyebrow="Why OpsLogic" title="Why companies work with us" /></div>
          <ol className="ux-why ux-r">
            {WHY.map(([t, d], i) => (
              <li key={t}><span className="big">0{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></li>
            ))}
          </ol>
        </div>
      </section>
      <UxCta />
    </div>
  );
}
