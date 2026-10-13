import type { Metadata } from "next";
import "./page.css";
import Breadcrumbs from "../../../../comps/shared/Breadcrumbs";
import SharedHeader from "../../../../comps/shared/SharedHeader";
import InternalHero from "../../../../comps/shared-workspaces-comps/InternalHero";
import Statement from "../../../../comps/shared-workspaces-comps/Statement";
import Marquee from "../../../../comps/shared-workspaces-comps/Marquee";
import Ink from "../../../../comps/shared-workspaces-comps/Ink";
import ServiceCta from "../../../../comps/shared-workspaces-comps/ServiceCta";
import SharedFooter from "../../../../comps/shared/SharedFooter";
import ScriptRunner from "../../../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../../../comps/shared/siteScript";

export const metadata: Metadata = {
  title: "Shared Workspaces — OpsLogic",
  description: "OpsLogic — operational solutions for growing businesses.",
};

export default function SharedWorkspacesPage() {
  return (
    <>
      <SharedHeader active="services" />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Business Operations", href: "/services/business-operations" }, { label: "Shared Workspaces" }]} />
      <InternalHero />
      <Statement />
      <Marquee />
      <Ink />
      <ServiceCta />
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
