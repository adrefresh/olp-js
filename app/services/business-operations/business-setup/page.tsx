import type { Metadata } from "next";
import "./page.css";
import Breadcrumbs from "../../../../comps/shared/Breadcrumbs";
import SharedHeader from "../../../../comps/shared/SharedHeader";
import InternalHero from "../../../../comps/business-setup-comps/InternalHero";
import Statement from "../../../../comps/business-setup-comps/Statement";
import Marquee from "../../../../comps/business-setup-comps/Marquee";
import Ink from "../../../../comps/business-setup-comps/Ink";
import ServiceCta from "../../../../comps/business-setup-comps/ServiceCta";
import SharedFooter from "../../../../comps/shared/SharedFooter";
import ScriptRunner from "../../../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../../../comps/shared/siteScript";

export const metadata: Metadata = {
  title: "Business Setup in India — OpsLogic",
  description: "Establish and operationalise your business in India, from initial setup to ongoing business support.",
};

export default function BusinessSetupPage() {
  return (
    <>
      <SharedHeader active="services" />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Business Operations", href: "/services/business-operations" }, { label: "Business Setup" }]} />
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
