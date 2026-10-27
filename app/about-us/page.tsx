import type { Metadata } from "next";
import "../services/page.css";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import ScriptRunner from "../../components/layout/ScriptRunner";
import PageHero from "../../components/ui/PageHero";
import { SITE_SCRIPT } from "../../lib/site-script";
import HeroStickers from "../../components/about/HeroStickers";
import Story from "../../components/about/Story";
import Founders from "../../components/about/Founders";
import Beliefs from "../../components/about/Beliefs";
import Location from "../../components/about/Location";
import { pageMeta } from "../../lib/seo";

export const metadata: Metadata = pageMeta("About Us — OpsLogic", "We're a team of operations, HR, finance and technology people who like making complicated business problems quietly disappear.", "/about-us/");

export default function AboutUsPage() {
  return (
    <>
      <SiteHeader active="about-us" />
      <Breadcrumbs items={[{ label: "About Us" }]} />
      <main className="ux">
        <PageHero
          eyebrow="About us"
          lines={["The people", <>behind the <em>paperwork.</em></>]}
          sub="We're a team of operations, HR, finance and technology people who like making complicated business problems quietly disappear."
          aside={<HeroStickers />}
        />
        <Story />
        <Founders />
        <Beliefs />
        <Location />
      </main>
      <SiteFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
