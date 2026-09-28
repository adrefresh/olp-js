import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../comps/shared/SharedHeader";
import InternalHero from "../../comps/success-stories-comps/InternalHero";
import Statement from "../../comps/success-stories-comps/Statement";
import Marquee from "../../comps/success-stories-comps/Marquee";
import Ink from "../../comps/success-stories-comps/Ink";
import ServiceCta from "../../comps/success-stories-comps/ServiceCta";
import SharedFooter from "../../comps/shared/SharedFooter";
import Script from "next/script";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";

export const metadata: Metadata = {
  title: "Success Stories — OpsLogic",
  description: "Success Stories — OpsLogic",
};

export default function SuccessStoriesPage() {
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
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.opslogic.team/"}, {"@type": "ListItem", "position": 2, "name": "Success Stories", "item": "https://www.opslogic.team/success-stories"}]}' }} />
    </>
  );
}
