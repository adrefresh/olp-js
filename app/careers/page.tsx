import type { Metadata } from "next";
import "./page.css";
import Breadcrumbs from "../../comps/shared/Breadcrumbs";
import SharedHeader from "../../comps/shared/SharedHeader";
import InternalHero from "../../comps/careers-comps/InternalHero";
import Statement from "../../comps/careers-comps/Statement";
import Wrap from "../../comps/careers-comps/Wrap";
import Ink from "../../comps/careers-comps/Ink";
import Wrap2 from "../../comps/careers-comps/Wrap2";
import Wrap22 from "../../comps/careers-comps/Wrap22";
import ServiceCta from "../../comps/careers-comps/ServiceCta";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";

export const metadata: Metadata = {
  title: "Careers — OpsLogic",
  description: "OpsLogic — operational solutions for growing businesses.",
};

export default function CareersPage() {
  return (
    <>
      <SharedHeader active="careers" />
      <Breadcrumbs items={[{ label: "Careers" }]} />
      <InternalHero />
      <Statement />
      <Wrap />
      <Ink />
      <Wrap2 />
      <Wrap22 />
      <ServiceCta />
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
