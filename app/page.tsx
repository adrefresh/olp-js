import type { Metadata } from "next";
import SharedHeader from "../comps/shared/SharedHeader";
import Herosection from "../comps/home-comps/Herosection";
import Services from "../comps/home-comps/Services";
import { WhoWeAre, HomeRest } from "../comps/home-comps/HomeSections";
import SharedFooter from "../comps/shared/SharedFooter";
import ScriptRunner from "../comps/shared/ScriptRunner";
import { HOME_SCRIPT } from "./homeScript";

export const metadata: Metadata = {
  title: "OpsLogic — Let's Make Business Move",
  description: "OpsLogic — Business Operations, IT, Hiring, Payroll, SAP & Shared Workspace solutions.",
};

export default function Home() {
  return (
    <>
      <SharedHeader active="home" />
      <Herosection />
      <WhoWeAre />
      <Services />
      <HomeRest />
      <SharedFooter />
      <ScriptRunner script={HOME_SCRIPT} />
    </>
  );
}
