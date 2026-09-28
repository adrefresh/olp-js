import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../comps/shared/SharedHeader";
import InternalHero from "../../comps/hiring-services-comps/InternalHero";
import Statement from "../../comps/hiring-services-comps/Statement";
import Marquee from "../../comps/hiring-services-comps/Marquee";
import Ink from "../../comps/hiring-services-comps/Ink";
import ServiceCta from "../../comps/hiring-services-comps/ServiceCta";
import SharedFooter from "../../comps/shared/SharedFooter";
import Script from "next/script";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";

export const metadata: Metadata = {
  title: "Hiring Services — OpsLogic",
  description: "OpsLogic — operational solutions for growing businesses.",
};

export default function HiringServicesPage() {
  return (
    <>
      <SharedHeader active="services" />
      <InternalHero />
      <Statement />
      <Marquee />
      <Ink />
      <ServiceCta />
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.opslogic.team/"}, {"@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.opslogic.team/services"}, {"@type": "ListItem", "position": 3, "name": "Hiring Services", "item": "https://www.opslogic.team/hiring-services"}]}' }} />
    </>
  );
}
