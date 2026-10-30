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
import { pageMeta } from "../../lib/seo";
import PageSchema from "../../components/ui/PageSchema";

const TITLE = "Careers — OpsLogic";
const DESC = "We're always interested in people who are careful, curious and good with details.";
export const metadata: Metadata = pageMeta(TITLE, DESC, "/careers/", ["careers at OpsLogic", "jobs in Hyderabad", "operations jobs", "HR and payroll jobs Hyderabad"]);

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
      <PageSchema type="WebPage" title={TITLE} description={DESC} path="/careers/" />
      <SiteFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
