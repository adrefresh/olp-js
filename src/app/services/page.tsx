import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../components/shared/SharedHeader";
import SharedFooter from "../../components/shared/SharedFooter";
import ScriptRunner from "../../components/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../components/shared/siteScript";
import Hero from "../../components/services-comps/Hero";
import WhatWeOffer from "../../components/services-comps/WhatWeOffer";
import HowItWorks from "../../components/services-comps/HowItWorks";
import ModularCta from "../../components/services-comps/ModularCta";
import Faq from "../../components/services-comps/Faq";

export const metadata: Metadata = {
  title: "Services — OpsLogic",
  description: "OpsLogic services — Business Operations, IT, Hiring, Payroll, SAP and Shared Workspaces.",
};

export default function ServicesPage() {
  return (
  <>
    <SharedHeader active="services" />
    <main>
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
