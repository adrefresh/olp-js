import { UxHead } from "../shared/Ux";
import Testimonials from "./Testimonials";

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
          <dl className="ux-facts ux-r" style={{ ["--i" as string]: 1 }}>
            <div><dt>Established</dt><dd>2022</dd></div>
            <div><dt>Founders</dt><dd>Three</dd></div>
            <div><dt>Based in</dt><dd>Hyderabad, India</dd></div>
          </dl>
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

      <section className="ux-sec t1 ux-wwwsec" id="who-we-work-with">
        <div className="ux-wrap">
          <UxHead eyebrow="Who we work with" title="Built for teams that would rather not build a department." />
        </div>
        <div className="ux-diag">
          {WORK_WITH.map((t, i) => (
            <div className={"ux-dg d" + (i + 1) + " ux-r"} key={t}>
              <div className="ux-dg-in ux-wrap">
                <span className="ux-dg-n">0{i + 1}</span>
                <h3>{t}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="ux-sec t0 ux-indsec" id="industries">
        <div className="ux-wrap ux-ind">
          <div className="ux-r">
            <span className="ux-eyebrow">Industries</span>
            <h2>Industries we work with</h2>
            <p className="ux-lead">Our clients come from IT, manufacturing, automobile, power, hospitality and real estate. Their needs differ, but the basics are the same: set up properly, hire well, pay on time and keep the systems running.</p>
            <p className="ux-also2"><b>Also a good fit:</b> {ALSO.join(", ")}.</p>
          </div>
          <ol className="ux-indlist ux-r" style={{ ["--i" as string]: 1 }}>
            {INDUSTRIES.map((x, i) => (<li key={x}><span>0{i + 1}</span>{x}</li>))}
          </ol>
        </div>
      </section>

      <section className="ux-sec t2" id="testimonials">
        <div className="ux-wrap">
          <UxHead eyebrow="What clients say" title="In their words." />
          <Testimonials />
        </div>
      </section>

      <section className="ux-sec t0 ux-whysec" id="why">
        <div className="ux-wrap ux-split">
          <div className="ux-stick"><UxHead eyebrow="Why OpsLogic" title="Why companies work with us" /></div>
          <ol className="ux-why ux-r">
            {WHY.map(([t, d], i) => (
              <li key={t}><span className="big">0{i + 1}</span><div><h3>{t}</h3><p>{d}</p></div></li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
