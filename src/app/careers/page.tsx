import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../components/shared/SharedHeader";
import SharedFooter from "../../components/shared/SharedFooter";
import ScriptRunner from "../../components/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../components/shared/siteScript";
import Hero from "../../components/careers-comps/Hero";
import VibeCheck from "../../components/careers-comps/VibeCheck";
import LifeHere from "../../components/careers-comps/LifeHere";
import OpenRoles from "../../components/careers-comps/OpenRoles";
import NoFitCta from "../../components/careers-comps/NoFitCta";

export const metadata: Metadata = {
  title: "Careers — OpsLogic",
  description: "Careers at OpsLogic — join a team of clear thinkers, kind collaborators and restless improvers.",
};

export default function CareersPage() {
  return (
  <>
    <SharedHeader active="careers" />
    <main>
      <Hero />
      <VibeCheck />
      <LifeHere />
      <OpenRoles />
      <NoFitCta />
    </main>
    <SharedFooter showEmail={false} />
    <ScriptRunner script={SITE_SCRIPT} />
  </>

  );
}
