import type { Metadata } from "next";
import CursorFx from "../comps/home-comps/CursorFx";
import SharedHeader from "../comps/shared/SharedHeader";
import Herosection from "../comps/home-comps/Herosection";
import Diagnostic from "../comps/home-comps/Diagnostic";
import Services from "../comps/home-comps/Services";
import Terminalwrap from "../comps/home-comps/Terminalwrap";
import About from "../comps/home-comps/About";
import WhyOpsLogic from "../comps/home-comps/WhyOpsLogic";
import Contact from "../comps/home-comps/Contact";
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
      <CursorFx />
      <SharedHeader active="home" />
      <Herosection />
      <Diagnostic />
      <Services />
      <Terminalwrap />
      <About />
      <WhyOpsLogic />
      <Contact />
      <SharedFooter />
      <ScriptRunner script={HOME_SCRIPT} />
    </>
  );
}
