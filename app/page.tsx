import type { Metadata } from "next";
import "./page.css";
import ScriptRunner from "../comps/shared/ScriptRunner";
import CursorFx from "../comps/homepage-comps/CursorFx";
import SiteHeader from "../comps/homepage-comps/SiteHeader";
import Hero from "../comps/homepage-comps/Hero";
import CoreMessage from "../comps/homepage-comps/CoreMessage";
import WhatWeDo from "../comps/homepage-comps/WhatWeDo";
import WhyOpsLogic from "../comps/homepage-comps/WhyOpsLogic";
import WhoWeServe from "../comps/homepage-comps/WhoWeServe";
import Proof from "../comps/homepage-comps/Proof";
import CtaBand from "../comps/homepage-comps/CtaBand";
import WaveDivider from "../comps/homepage-comps/WaveDivider";
import SiteFooter from "../comps/homepage-comps/SiteFooter";
import { HOME_SCRIPT } from "./homeScript";

export const metadata: Metadata = {
  title: "OpsLogic — Let's Make Business Move",
  description:
    "OpsLogic — Business Operations, IT, Hiring, Payroll, SAP & Shared Workspace solutions.",
};

export default function Home() {
  return (
    <>
      <CursorFx />
      <SiteHeader />
      <main id="top">
        <Hero />
        <CoreMessage />
        <WhatWeDo />
        <WhyOpsLogic />
        <WhoWeServe />
        <Proof />
        <CtaBand />
        <WaveDivider />
      </main>
      <SiteFooter />
      <ScriptRunner script={HOME_SCRIPT} />
    </>
  );
}
