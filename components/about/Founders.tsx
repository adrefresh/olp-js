import SectionHead from "../ui/SectionHead";

const FOUNDERS = [
  {
    ini: "PV",
    name: "Phani Vanka",
    role: "Founder & Managing Director",
    area: "Business Operations",
    lead: "Phani has spent more than 20 years in digital advertising and business operations.",
    more: "He started in technical support, moved through ad operations into leadership, and went on to run global operations teams. He founded AdRefresh in 2013 and has built offshore operating teams in India for international clients, designing the workflows, structures and controls that let a team in India work smoothly with one overseas. He has also overseen finance functions such as accounts receivable and payable. At OpsLogic he leads Business Operations: company setup, compliance, administration, accounting, legal coordination and managed workspace. His rule is simple: structure first, then execution.",
  },
  {
    ini: "NV",
    name: "Niranjan P Venkata",
    role: "Co-founder & Director",
    area: "IT, Data, Integrations and Digital Marketing",
    lead: "Niranjan has more than 20 years in technology and advertising, nearly all of it in ad tech.",
    more: "He began in technical support and engineering escalations, writing automation tools and building internal systems, then moved into operations leadership at companies including PubMatic and Times Internet, managing teams across several regions. Today he is Vice President, Strategic Growth & Operations at AdRefresh, where he works on data management platforms, programmatic advertising, full-funnel digital marketing and scalable operating frameworks. He has also mentored many people who now lead teams across the industry. At OpsLogic he leads IT, data, integrations and digital marketing, and he focuses on turning scattered processes into systems that run on their own.",
  },
  {
    ini: "SK",
    name: "Sri Kavya Davuluri",
    role: "Co-founder",
    area: "HR & Payroll",
    lead: "Kavya has worked in HR and people operations since 2019, moving from talent acquisition and the full employee lifecycle to leading HR and business operations.",
    more: "She joined OpsLogic during its setup phase and built its core processes from the ground up: HRMS, onboarding, policies, recruitment, payroll, compliance and documentation, all to ISO standards. She runs performance management, training and development, engagement programmes and retention work, and also manages vendors and office operations. Kavya holds an MBA in Human Resources Management and a B.Tech in Electrical and Electronics Engineering.",
  },
];

export default function Founders() {
  return (
    <section className="ux-sec t0" id="founders">
      <div className="ux-wrap">
        <SectionHead
          eyebrow="Leadership"
          title={
            <>
              The founders<span className="ux-dot">.</span>
            </>
          }
        />
        <div className="ux-fds">
          {FOUNDERS.map((f, i) => (
            <article className={"ux-fd" + (i % 2 ? " rev" : "")} key={f.name}>
              <div className={"ux-fd-photo p" + (i + 1) + " ux-r"} aria-hidden="true">
                <i className="s1" />
                <i className="s2" />
                <b>{f.ini}</b>
                <em>[Founder photo]</em>
              </div>
              <div className="ux-fd-body ux-r" style={{ ["--i" as string]: 1 }}>
                <span className="ux-fd-n">
                  0{i + 1} / 0{FOUNDERS.length}
                </span>
                <h3>{f.name}</h3>
                <div className="ux-fd-chips">
                  <span>{f.role}</span>
                  <span className={"a a" + (i + 1)}>{f.area}</span>
                </div>
                <p>
                  {f.lead} {f.more}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
