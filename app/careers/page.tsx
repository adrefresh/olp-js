import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../comps/shared/SharedHeader";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";
import Breadcrumbs from "../../comps/shared/Breadcrumbs";
import Hero from "../../comps/careers-comps/Hero";
import VibeCheck from "../../comps/careers-comps/VibeCheck";
import LifeHere from "../../comps/careers-comps/LifeHere";
import OpenRoles from "../../comps/careers-comps/OpenRoles";
import NoFitCta from "../../comps/careers-comps/NoFitCta";

export const metadata: Metadata = {
  title: "Careers — OpsLogic",
  description:
    "Careers at OpsLogic — join a team of clear thinkers, kind collaborators and restless improvers.",
};

export default function CareersPage() {
  return (
    <>
      <SharedHeader active="careers" />
      <main>
        <div className="wrap"><Breadcrumbs items={[{ label: "Careers" }]} /></div>
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
