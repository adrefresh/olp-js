import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../comps/shared/SharedHeader";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";
import Breadcrumbs from "../../comps/shared/Breadcrumbs";
import Hero from "../../comps/services-comps/Hero";
import WhatWeOffer from "../../comps/services-comps/WhatWeOffer";
import HowItWorks from "../../comps/services-comps/HowItWorks";
import ModularCta from "../../comps/services-comps/ModularCta";
import Faq from "../../comps/services-comps/Faq";

export const metadata: Metadata = {
  title: "Services — OpsLogic",
  description:
    "OpsLogic services — Business Operations, IT, Hiring, Payroll, SAP and Shared Workspaces.",
};

export default function ServicesPage() {
  return (
    <>
      <SharedHeader active="services" />
      <main>
        <div className="wrap"><Breadcrumbs items={[{ label: "Services" }]} /></div>
        <Hero />
        <WhatWeOffer />
        <HowItWorks />
        <ModularCta />
        <Faq />
      </main>
      <SharedFooter showEmail={false} />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
