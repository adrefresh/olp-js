import type { Metadata } from "next";
import "./page.css";
import Breadcrumbs from "../../comps/shared/Breadcrumbs";
import SharedHeader from "../../comps/shared/SharedHeader";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";
import { UxHero, UxCta } from "../../comps/shared/Ux";
import { catHref } from "../../comps/shared/servicesContent";

export const metadata: Metadata = {
  title: "Services — OpsLogic",
  description: "Business Operations, HR & Payroll and IT Services — one team behind all three.",
};

const AREAS = [
  {
    slug: "business-operations", title: "Business Operations", tone: "t0",
    lead: "The foundations: setting up a company properly, keeping it compliant, and giving your team a place to work.",
    items: ["Company setup", "Administration", "Compliance", "Accounting and tax", "Legal support", "Corporate secretarial", "Managed workspace", "Offshore extension centres"],
  },
  {
    slug: "hr-payroll", title: "HR & Payroll", tone: "t3",
    lead: "Finding people, employing them, paying them and looking after them.",
    items: ["Hire talent", "Contract staffing", "Employer of Record", "Contractor of Record", "Freelancer payments", "Payroll management", "HR business partner", "Employee engagement", "Training and development", "Onboarding and policies"],
  },
  {
    slug: "it-services", title: "IT Services", tone: "t1",
    lead: "The hardware, systems and software a business runs on, from the laptop on a new hire's desk to the company website.",
    items: ["IT asset procurement", "Inventory management", "Employee device setup", "Office IT setup", "IT helpdesk and managed IT support", "Systems integration", "Server migrations", "Web development", "Application development", "UI/UX design", "Business software", "Certification and compliance readiness", "Branding", "Digital marketing"],
  },
];

export default function ServicesPage() {
  return (
    <>
      <SharedHeader active="services" />
      <Breadcrumbs items={[{ label: "Services" }]} />
      <main className="ux">
        <UxHero
          eyebrow="Services"
          lines={["Three areas.", <>One team <em>behind</em></>, "them."]}
          sub="Whether you need one service or the whole stack, we'll scope it around what your business actually needs."
        />
        {AREAS.map((a, i) => {
                    return (
            <section className={"ux-sec " + a.tone} key={a.slug} id={a.slug}>
              <div className="ux-wrap ux-svc">
                <div className="ux-r">
                  <span className="ghost" aria-hidden="true">0{i + 1}</span>
                  <h2>{a.title}</h2>
                  <p className="ux-lead">{a.lead}</p>
                  <a className="ux-btn d" style={{ marginTop: "2rem" }} href={catHref(a.slug)}>Learn more <span aria-hidden="true">↗</span></a>
                </div>
                <div className="ux-chips ux-r" style={{ ["--i" as string]: 1, marginTop: 0 }}>
                  {a.items.map((x) => <span className="ux-chip" key={x}>{x}</span>)}
                </div>
              </div>
            </section>
          );
        })}
        <UxCta />
      </main>
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
