import type { Metadata } from "next";
import SiteHeader from "../components/layout/SiteHeader";
import SiteFooter from "../components/layout/SiteFooter";
import ScriptRunner from "../components/layout/ScriptRunner";
import HeroSection from "../components/home/HeroSection";
import WhoWeAre from "../components/home/WhoWeAre";
import CoreServices from "../components/home/CoreServices";
import Packages from "../components/home/Packages";
import WhoWeWorkWith from "../components/home/WhoWeWorkWith";
import Industries from "../components/home/Industries";
import TestimonialsSection from "../components/home/TestimonialsSection";
import WhyOpsLogic from "../components/home/WhyOpsLogic";
import { HOME_SCRIPT } from "../lib/home-script";
import { pageMeta } from "../lib/seo";

export const metadata: Metadata = pageMeta("OpsLogic — Let's Make Business Move", "OpsLogic is a business operations partner in Hyderabad, India: company setup, compliance, HR, payroll and IT services for growing teams.", "/");

export default function Home() {
  return (
    <>
      <SiteHeader active="home" />
      <HeroSection />
      <WhoWeAre />
      <CoreServices />
      <div className="ux">
        <Packages />
        <WhoWeWorkWith />
        <Industries />
        <TestimonialsSection />
        <WhyOpsLogic />
      </div>
      <SiteFooter />
      <ScriptRunner script={HOME_SCRIPT} />
    </>
  );
}
