import type { Metadata } from "next";
import "../services/page.css";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import ScriptRunner from "../../components/layout/ScriptRunner";
import PageHero from "../../components/ui/PageHero";
import PolicyBody from "../../components/privacy/PolicyBody";
import { SITE_SCRIPT } from "../../lib/site-script";

export const metadata: Metadata = {
  title: "Privacy Policy — OpsLogic",
  description: "How OpsLogic gathers, uses and safeguards your personal information when you use our website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteHeader active="none" />
      <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
      <main className="ux">
        <PageHero className="h-rings pp-hero" eyebrow="Legal" lines={["Privacy", <><em>Policy.</em></>]} sub="How we gather, use and safeguard your personal information." />
        <PolicyBody />
      </main>
      <SiteFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
