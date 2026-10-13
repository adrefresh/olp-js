import type { Metadata } from "next";
import "./page.css";
import Breadcrumbs from "../../../../comps/shared/Breadcrumbs";
import SharedHeader from "../../../../comps/shared/SharedHeader";
import InternalHero from "../../../../comps/sap-services-comps/InternalHero";
import Statement from "../../../../comps/sap-services-comps/Statement";
import Marquee from "../../../../comps/sap-services-comps/Marquee";
import Ink from "../../../../comps/sap-services-comps/Ink";
import ServiceCta from "../../../../comps/sap-services-comps/ServiceCta";
import SharedFooter from "../../../../comps/shared/SharedFooter";
import ScriptRunner from "../../../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../../../comps/shared/siteScript";

export const metadata: Metadata = {
  title: "SAP Services — OpsLogic",
  description: "OpsLogic — operational solutions for growing businesses.",
};

export default function SapServicesPage() {
  return (
    <>
      <SharedHeader active="services" />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "IT Services", href: "/services/it-services" }, { label: "SAP Services" }]} />
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
