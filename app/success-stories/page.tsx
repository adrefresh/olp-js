import type { Metadata } from "next";
import "../services/page.css";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import ScriptRunner from "../../components/layout/ScriptRunner";
import PageHero from "../../components/ui/PageHero";
import { SITE_SCRIPT } from "../../lib/site-script";
import StoryPoints from "../../components/success-stories/StoryPoints";
import PracticalModel from "../../components/success-stories/PracticalModel";

export const metadata: Metadata = {
  title: "Success Stories — OpsLogic",
  description: "A look at the kinds of operational problems we help teams untangle, strengthen and run with more confidence.",
};

export default function SuccessStoriesPage() {
  return (
    <>
      <SiteHeader active="services" />
      <Breadcrumbs items={[{ label: "Success Stories" }]} />
      <main className="ux">
        <PageHero
          eyebrow="Success stories"
          lines={["Better operations.", <>Real <em>momentum.</em></>]}
          sub="A look at the kinds of operational problems we help teams untangle, strengthen and run with more confidence."
        />
        <StoryPoints />
        <PracticalModel />
      </main>
      <SiteFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
