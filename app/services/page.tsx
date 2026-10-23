import type { Metadata } from "next";
import "./page.css";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import ScriptRunner from "../../components/layout/ScriptRunner";
import PageHero from "../../components/ui/PageHero";
import { SITE_SCRIPT } from "../../lib/site-script";
import ServiceAreas from "../../components/services/ServiceAreas";

export const metadata: Metadata = {
  title: "Services — OpsLogic",
  description: "Business Operations, HR & Payroll and IT Services — one team behind all three.",
};

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
      <SiteFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
