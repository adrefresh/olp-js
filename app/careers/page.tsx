import type { Metadata } from "next";
import "../services/page.css";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import ScriptRunner from "../../components/layout/ScriptRunner";
import PageHero from "../../components/ui/PageHero";
import { SITE_SCRIPT } from "../../lib/site-script";
import TypeCards from "../../components/careers/TypeCards";
import WorkingHere from "../../components/careers/WorkingHere";
import HiringSteps from "../../components/careers/HiringSteps";
import OpenRoles from "../../components/careers/OpenRoles";

export const metadata: Metadata = {
  title: "Careers — OpsLogic",
  description: "We're always interested in people who are careful, curious and good with details.",
};

export default function CareersPage() {
  return (
    <>
      <SiteHeader active="careers" />
      <Breadcrumbs items={[{ label: "Careers" }]} />
      <main className="ux">
        <PageHero
          eyebrow="Careers"
          lines={["Do work that keeps", <>other <em>businesses</em></>, "running."]}
          sub="We're always interested in people who are careful, curious and good with details."
          aside={<TypeCards />}
        />
        <WorkingHere />
        <HiringSteps />
        <OpenRoles />
      </main>
      <SiteFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
