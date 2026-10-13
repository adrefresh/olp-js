import type { Metadata } from "next";
import "./page.css";
import Breadcrumbs from "../../../../comps/shared/Breadcrumbs";
import SharedHeader from "../../../../comps/shared/SharedHeader";
import InternalHero from "../../../../comps/business-operations-comps/InternalHero";
import Statement from "../../../../comps/business-operations-comps/Statement";
import Marquee from "../../../../comps/business-operations-comps/Marquee";
import Ink from "../../../../comps/business-operations-comps/Ink";
import ServiceCta from "../../../../comps/business-operations-comps/ServiceCta";
import SharedFooter from "../../../../comps/shared/SharedFooter";
import ScriptRunner from "../../../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../../../comps/shared/siteScript";

export const metadata: Metadata = {
  title: "Process & Workflow Operations — OpsLogic",
  description: "OpsLogic — operational solutions for growing businesses.",
};

export default function BusinessOperationsPage() {
  return (
    <>
      <SharedHeader active="services" />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Business Operations", href: "/services/business-operations" }, { label: "Process & Workflow Operations" }]} />
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
