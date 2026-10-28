import type { Metadata } from "next";
import "./page.css";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import ScriptRunner from "../../components/layout/ScriptRunner";
import PageHero from "../../components/ui/PageHero";
import { SITE_SCRIPT } from "../../lib/site-script";
import ServiceAreas from "../../components/services/ServiceAreas";
import { pageMeta } from "../../lib/seo";
import PageSchema from "../../components/ui/PageSchema";

const TITLE = "Services — OpsLogic";
const DESC = "Business Operations, HR & Payroll and IT Services — one team behind all three.";
export const metadata: Metadata = pageMeta(TITLE, DESC, "/services/", ["business operations services", "HR and payroll services", "IT services", "company setup services India"]);

export default function ServicesPage() {
  return (
    <>
      <SiteHeader active="services" />
      <Breadcrumbs items={[{ label: "Services" }]} />
      <main className="ux">
        <PageHero
          className="h-rings h-80"
          eyebrow="Services"
          lines={["Three areas.", <>One team <em>behind</em></>, "them."]}
          sub="Whether you need one service or the whole stack, we'll scope it around what your business actually needs."
        />
        <ServiceAreas />
      </main>
      <PageSchema type="CollectionPage" title={TITLE} description={DESC} path="/services/" />
      <SiteFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}


// ihd