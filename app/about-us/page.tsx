import type { Metadata } from "next";
import "../services/page.css";
import Breadcrumbs from "../../comps/shared/Breadcrumbs";
import SharedHeader from "../../comps/shared/SharedHeader";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";
import { UxHero, UxHead } from "../../comps/shared/Ux";

export const metadata: Metadata = {
  title: "About Us — OpsLogic",
  description: "We're a team of operations, HR, finance and technology people who like making complicated business problems quietly disappear.",
};

const FOUNDERS = [
  { ini: "PV", name: "Phani Vanka", role: "Founder & Managing Director", area: "Business Operations",
    lead: "Phani has spent more than 20 years in digital advertising and business operations.",
    more: "He started in technical support, moved through ad operations into leadership, and went on to run global operations teams. He founded AdRefresh in 2013 and has built offshore operating teams in India for international clients, designing the workflows, structures and controls that let a team in India work smoothly with one overseas. He has also overseen finance functions such as accounts receivable and payable. At OpsLogic he leads Business Operations: company setup, compliance, administration, accounting, legal coordination and managed workspace. His rule is simple: structure first, then execution." },
  { ini: "NV", name: "Niranjan P Venkata", role: "Co-founder & Director", area: "IT, Data, Integrations and Digital Marketing",
    lead: "Niranjan has more than 20 years in technology and advertising, nearly all of it in ad tech.",
    more: "He began in technical support and engineering escalations, writing automation tools and building internal systems, then moved into operations leadership at companies including PubMatic and Times Internet, managing teams across several regions. Today he is Vice President, Strategic Growth & Operations at AdRefresh, where he works on data management platforms, programmatic advertising, full-funnel digital marketing and scalable operating frameworks. He has also mentored many people who now lead teams across the industry. At OpsLogic he leads IT, data, integrations and digital marketing, and he focuses on turning scattered processes into systems that run on their own." },
  { ini: "SK", name: "Sri Kavya Davuluri", role: "Co-founder", area: "HR & Payroll",
    lead: "Kavya has worked in HR and people operations since 2019, moving from talent acquisition and the full employee lifecycle to leading HR and business operations.",
    more: "She joined OpsLogic during its setup phase and built its core processes from the ground up: HRMS, onboarding, policies, recruitment, payroll, compliance and documentation, all to ISO standards. She runs performance management, training and development, engagement programmes and retention work, and also manages vendors and office operations. Kavya holds an MBA in Human Resources Management and a B.Tech in Electrical and Electronics Engineering." },
];
const BELIEFS = [
  ["Operations should be boring.", "If our clients are thinking about payroll, filings or server logins, we've failed."],
  ["Plain answers beat clever ones.", "We tell you what we'd do, what it costs and what could go wrong."],
  ["Small beats scattered.", "One team that knows your business means fewer calls and fewer surprises."],
  ["People first.", "Behind every payroll run is someone waiting to be paid."],
];

export default function AboutUsPage() {
  return (
    <>
      <SharedHeader active="about-us" />
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <main className="ux">
        <UxHero
          eyebrow="About us"
          lines={["The people", <>behind the <em>paperwork.</em></>]}
          sub="We're a team of operations, HR, finance and technology people who like making complicated business problems quietly disappear."
          aside={
            <div className="ux-stickers" aria-hidden="true">
              <div className="ux-stk s1"><b>2022</b><span>Founded</span></div>
              <div className="ux-stk s2"><b>3</b><span>Founders</span></div>
              <div className="ux-stk s3"><b>Hyderabad</b><span>India</span></div>
            </div>
          }
        />

        <section className="ux-sec t0" id="story">
          <div className="ux-wrap ux-split">
            <UxHead eyebrow="Our story" title="Three founders. One team." />
            <div className="ux-two ux-r" style={{ ["--i" as string]: 1 }}>
              <p>OpsLogic was <mark>established in 2022</mark> by <mark>three founders</mark> with different backgrounds. Phani and Niranjan each spent more than twenty years in digital advertising operations, building and running offshore teams for global companies. Kavya came from HR and people operations.</p>
              <p>They started OpsLogic to help organisations establish and grow in India: incorporation, regulatory compliance, operational design and day-to-day execution. Today that sits alongside HR, payroll and IT services, so one team can look after the whole picture. Each founder leads a different part of the company, so the people you work with are the people who built it.</p>
            </div>
          </div>
        </section>

        <section className="ux-sec t0" id="founders">
          <div className="ux-wrap">
            <UxHead eyebrow="Leadership" title={<>The founders<span className="ux-dot">.</span></>} />
            <div className="ux-fds">
              {FOUNDERS.map((f, i) => (
                <article className={"ux-fd" + (i % 2 ? " rev" : "")} key={f.name}>
                  <div className={"ux-fd-photo p" + (i + 1) + " ux-r"} aria-hidden="true">
                    <i className="s1" /><i className="s2" />
                    <b>{f.ini}</b>
                    <em>[Founder photo]</em>
                  </div>
                  <div className="ux-fd-body ux-r" style={{ ["--i" as string]: 1 }}>
                    <span className="ux-fd-n">0{i + 1} / 0{FOUNDERS.length}</span>
                    <h3>{f.name}</h3>
                    <div className="ux-fd-chips"><span>{f.role}</span><span className={"a a" + (i + 1)}>{f.area}</span></div>
                    <p>{f.lead} {f.more}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="ux-sec t1" id="believe">
          <div className="ux-wrap">
            <UxHead eyebrow="What we believe" title="Four things we hold to." />
            <div className="ux-vb">
              {BELIEFS.map(([t, d], i) => (
                <div className={"ux-vt v" + (i + 1) + " ux-r"} style={{ ["--i" as string]: i }} key={t}>
                  <span className="big">0{i + 1}</span>
                  <h3>{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="ux-sec t2" id="where">
          <div className="ux-wrap ux-split">
            <UxHead eyebrow="Where we are" title="Hyderabad, India." />
            <div className="ux-r" style={{ ["--i" as string]: 1 }}>
              <div className="ux-ph" style={{ marginTop: 0 }}>Address to be added</div>
            </div>
          </div>
        </section>

      </main>
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
