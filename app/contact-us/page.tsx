import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../comps/shared/SharedHeader";
import InternalHero from "../../comps/contact-us-comps/InternalHero";
import Statement from "../../comps/contact-us-comps/Statement";
import Ink from "../../comps/contact-us-comps/Ink";
import Wrap from "../../comps/contact-us-comps/Wrap";
import SharedFooter from "../../comps/shared/SharedFooter";
import Script from "next/script";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";

export const metadata: Metadata = {
  title: "Contact — OpsLogic",
  description: "OpsLogic — operational solutions for growing businesses.",
};

export default function ContactUsPage() {
  return (
    <>
      <SharedHeader active="contact-us" />
      <InternalHero />
      <Statement />
      <Ink />
      <Wrap />
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: '{"@context": "https://schema.org", "@type": "BreadcrumbList", "itemListElement": [{"@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.opslogic.team/"}, {"@type": "ListItem", "position": 2, "name": "Contact", "item": "https://www.opslogic.team/contact-us"}]}' }} />
    </>
  );
}
