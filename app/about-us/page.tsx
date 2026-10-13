import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./page.css";
import Breadcrumbs from "../../comps/shared/Breadcrumbs";
import SharedHeader from "../../comps/shared/SharedHeader";
import InternalHero from "../../comps/about-us-comps/InternalHero";
import AboutMotion from "../../comps/about-us-comps/AboutMotion";
import Statement from "../../comps/about-us-comps/Statement";
import Ink from "../../comps/about-us-comps/Ink";
import Wrap from "../../comps/about-us-comps/Wrap";
import Duo from "../../comps/about-us-comps/Duo";
import Ink2 from "../../comps/about-us-comps/Ink2";
import ServiceCta from "../../comps/about-us-comps/ServiceCta";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "About Us — OpsLogic",
  description: "OpsLogic — operational solutions for growing businesses.",
};

export default function AboutUsPage() {
  return (
    <>
      <div className={`${inter.variable} about-page-shell`}>
        <SharedHeader active="about-us" />
        <Breadcrumbs items={[{ label: "About Us" }]} tone="light" />
        <InternalHero />
        <Statement />
        <Ink />
        <Wrap />
        <Duo />
        <Ink2 />
        <ServiceCta />
        <SharedFooter />
        <AboutMotion />
      </div>
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
