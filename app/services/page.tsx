import type { Metadata } from "next";
import "./page.css";
import "./category.css";
import Breadcrumbs from "../../comps/shared/Breadcrumbs";
import SharedHeader from "../../comps/shared/SharedHeader";
import InternalHero from "../../comps/services-comps/InternalHero";
import Statement from "../../comps/services-comps/Statement";
import Marquee from "../../comps/services-comps/Marquee";
import Ink from "../../comps/services-comps/Ink";
import ServiceCta from "../../comps/services-comps/ServiceCta";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";

export const metadata: Metadata = {
  title: "Services — OpsLogic",
  description: "Three core services: HR Operations, Business Operations and IT Services.",
};

export default function ServicesPage() {
  return (
    <>
      <SharedHeader active="services" />
      <Breadcrumbs items={[{ label: "Services" }]} />
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
