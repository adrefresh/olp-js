import type { Metadata } from "next";
import "./page.css";
import ScriptRunner from "../components/shared/ScriptRunner";
import CursorFx from "../components/homepage-comps/CursorFx";
import SiteHeader from "../components/homepage-comps/SiteHeader";
import Hero from "../components/homepage-comps/Hero";
import CoreMessage from "../components/homepage-comps/CoreMessage";
import WhatWeDo from "../components/homepage-comps/WhatWeDo";
import WhyOpsLogic from "../components/homepage-comps/WhyOpsLogic";
import WhoWeServe from "../components/homepage-comps/WhoWeServe";
import Proof from "../components/homepage-comps/Proof";
import CtaBand from "../components/homepage-comps/CtaBand";
import WaveDivider from "../components/homepage-comps/WaveDivider";
import SiteFooter from "../components/homepage-comps/SiteFooter";
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
