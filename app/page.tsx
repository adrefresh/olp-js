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
import PageSchema from "../components/ui/PageSchema";

const TITLE = "OpsLogic — Let's Make Business Move";
const DESC = "OpsLogic is a business operations partner in Hyderabad, India: company setup, compliance, HR, payroll and IT services for growing teams.";
export const metadata: Metadata = pageMeta(TITLE, DESC, "/", ["business operations Hyderabad", "company setup India", "employer of record India", "payroll outsourcing India", "back office outsourcing", "managed IT support"]);

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
      <PageSchema type="WebPage" title={TITLE} description={DESC} path="/" />
      <SiteFooter />
      <ScriptRunner script={HOME_SCRIPT} />
    </>
  );
}


// yfy