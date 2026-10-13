import type { Metadata } from "next";
import "./page.css";
import Breadcrumbs from "../../comps/shared/Breadcrumbs";
import SharedHeader from "../../comps/shared/SharedHeader";
import InternalHero from "../../comps/contact-us-comps/InternalHero";
import Statement from "../../comps/contact-us-comps/Statement";
import Ink from "../../comps/contact-us-comps/Ink";
import Wrap from "../../comps/contact-us-comps/Wrap";
import SharedFooter from "../../comps/shared/SharedFooter";
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
      <Breadcrumbs items={[{ label: "Contact Us" }]} />
      <InternalHero />
      <Statement />
      <Ink />
      <Wrap />
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
