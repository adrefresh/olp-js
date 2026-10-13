import type { Metadata } from "next";
import "./page.css";
import Breadcrumbs from "../../../../comps/shared/Breadcrumbs";
import SharedHeader from "../../../../comps/shared/SharedHeader";
import InternalHero from "../../../../comps/payroll-services-comps/InternalHero";
import Statement from "../../../../comps/payroll-services-comps/Statement";
import Marquee from "../../../../comps/payroll-services-comps/Marquee";
import Ink from "../../../../comps/payroll-services-comps/Ink";
import ServiceCta from "../../../../comps/payroll-services-comps/ServiceCta";
import SharedFooter from "../../../../comps/shared/SharedFooter";
import ScriptRunner from "../../../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../../../comps/shared/siteScript";

export const metadata: Metadata = {
  title: "Payroll Services — OpsLogic",
  description: "OpsLogic — operational solutions for growing businesses.",
};

export default function PayrollServicesPage() {
  return (
    <>
      <SharedHeader active="services" />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "HR Operations", href: "/services/hr-operations" }, { label: "Payroll" }]} />
      <InternalHero />
      <Statement />
      <Marquee />
      <Ink />
      <ServiceCta />
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
