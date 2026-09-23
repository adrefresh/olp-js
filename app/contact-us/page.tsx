import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../comps/shared/SharedHeader";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";
import Breadcrumbs from "../../comps/shared/Breadcrumbs";
import Hero from "../../comps/contact-us-comps/Hero";
import FormSection from "../../comps/contact-us-comps/FormSection";
import WhatHappensNext from "../../comps/contact-us-comps/WhatHappensNext";
import FlexibleWork from "../../comps/contact-us-comps/FlexibleWork";
import TinyFaq from "../../comps/contact-us-comps/TinyFaq";

export const metadata: Metadata = {
  title: "Contact Us — OpsLogic",
  description:
    "Contact OpsLogic — let's make your next move. Hyderabad & Scarborough.",
};

export default function ContactUsPage() {
  return (
    <>
      <SharedHeader active="contact-us" />
      <main>
        <div className="wrap"><Breadcrumbs items={[{ label: "Contact Us" }]} /></div>
        <Hero />
        <FormSection />
        <WhatHappensNext />
        <FlexibleWork />
        <TinyFaq />
      </main>
      <SharedFooter showEmail={true} />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
