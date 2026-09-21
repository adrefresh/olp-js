import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../comps/shared/SharedHeader";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";
import Hero from "../../comps/about-us-comps/Hero";
import Manifesto from "../../comps/about-us-comps/Manifesto";
import HowWeShowUp from "../../comps/about-us-comps/HowWeShowUp";
import Trajectory from "../../comps/about-us-comps/Trajectory";

export const metadata: Metadata = {
  title: "About Us — OpsLogic",
  description:
    "About OpsLogic — an operations partner for teams with big plans and zero patience for busywork.",
};

export default function AboutUsPage() {
  return (
    <>
      <SharedHeader active="about-us" />
      <main>
        <Hero />
        <Manifesto />
        <HowWeShowUp />
        <Trajectory />
      </main>
      <SharedFooter showEmail={false} />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
