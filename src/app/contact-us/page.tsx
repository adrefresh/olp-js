import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../components/shared/SharedHeader";
import SharedFooter from "../../components/shared/SharedFooter";
import ScriptRunner from "../../components/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../components/shared/siteScript";
import Hero from "../../components/contact-us-comps/Hero";
import FormSection from "../../components/contact-us-comps/FormSection";
import WhatHappensNext from "../../components/contact-us-comps/WhatHappensNext";
import FlexibleWork from "../../components/contact-us-comps/FlexibleWork";
import TinyFaq from "../../components/contact-us-comps/TinyFaq";

export const metadata: Metadata = {
  title: "Contact Us — OpsLogic",
  description: "Contact OpsLogic — let's make your next move. Hyderabad & Scarborough.",
};

export default function ContactUsPage() {
  return (
  <>
    <SharedHeader active="" />
    <main>
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
