import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../components/shared/SharedHeader";
import SharedFooter from "../../components/shared/SharedFooter";
import ScriptRunner from "../../components/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../components/shared/siteScript";
import Hero from "../../components/about-us-comps/Hero";
import Manifesto from "../../components/about-us-comps/Manifesto";
import HowWeShowUp from "../../components/about-us-comps/HowWeShowUp";
import Trajectory from "../../components/about-us-comps/Trajectory";

export const metadata: Metadata = {
  title: "About Us — OpsLogic",
  description: "About OpsLogic — an operations partner for teams with big plans and zero patience for busywork.",
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
