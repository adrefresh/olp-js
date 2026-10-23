import { catHref, svcHref } from "../../lib/services";

const AREAS: { slug: string; title: string; tone: string; lead: string; items: [string, string][] }[] = [
  {
    slug: "business-operations",
    title: "Business Operations",
    tone: "t0",
    lead: "The foundations: setting up a company properly, keeping it compliant, and giving your team a place to work.",
    items: [["Company setup", "business-setup"], ["Administration", "administration"], ["Compliance", "compliance"], ["Accounting and tax", "accounting-tax-and-audit"], ["Legal support", "legal-support"], ["Corporate secretarial", "corporate-secretarial"], ["Managed workspace", "managed-workspace"], ["Offshore extension centres", "offshore-extension-centres"]],
  },
  {
    slug: "hr-payroll",
    title: "HR & Payroll",
    tone: "t3",
    lead: "Finding people, employing them, paying them and looking after them.",
    items: [
      ["Hire talent", "hire-talent"],
      ["Contract staffing", "contract-staffing"],
      ["Employer of Record", "employer-of-record"],
      ["Contractor of Record", "contractor-of-record"],
      ["Freelancer payments", "freelancer-payments"],
      ["Payroll management", "payroll-management"],
      ["HR business partner", "hr-business-partner"],
      ["Employee engagement", "employee-engagement"],
      ["Training and development", "training-and-development"],
      ["Onboarding and policies", "onboarding-and-offboarding"],
    ],
  },
  {
    slug: "it-services",
    title: "IT Services",
    tone: "t1",
    lead: "The hardware, systems and software a business runs on, from the laptop on a new hire's desk to the company website.",
    items: [
      ["IT asset procurement", "it-asset-procurement"],
      ["Inventory management", "it-inventory-management"],
      ["Employee device setup", "employee-device-setup"],
      ["Office IT setup", "office-it-setup"],
      ["IT helpdesk and managed IT support", "it-helpdesk-and-managed-it-support"],
      ["Systems integration", "systems-integration"],
      ["Server migrations", "server-migrations"],
      ["Web development", "web-development"],
      ["Application development", "application-development"],
      ["UI/UX design", "ui-ux-design"],
      ["Business software", "business-software"],
      ["Certification and compliance readiness", "certification-and-compliance-readiness"],
      ["Branding", "branding"],
      ["Digital marketing", "digital-marketing"],
    ],
  },
];

export default function ServiceAreas() {
  return (
    <>
      {AREAS.map((a, i) => (
        <section className={"ux-sec " + a.tone + (i === AREAS.length - 1 ? " ux-corner" : "")} key={a.slug} id={a.slug}>
          <div className="ux-wrap ux-svc">
            <div className="ux-r">
              <span className="ghost" aria-hidden="true">
                0{i + 1}
              </span>
              <h2>{a.title}</h2>
              <p className="ux-lead">{a.lead}</p>
              <a className="ux-btn d" style={{ marginTop: "2rem" }} href={catHref(a.slug)}>
                Learn more <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="ux-chips ux-r" style={{ ["--i" as string]: 1, marginTop: 0 }}>
              {a.items.map(([label, slug]) => (
                <a className="ux-chip" href={svcHref(slug)} key={slug}>
                  {label}
                </a>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
