import type { Metadata } from "next";
import "./page.css";
import Breadcrumbs from "../../../../comps/shared/Breadcrumbs";
import SharedHeader from "../../../../comps/shared/SharedHeader";
import InternalHero from "../../../../comps/service-migrations-comps/InternalHero";
import Statement from "../../../../comps/service-migrations-comps/Statement";
import Marquee from "../../../../comps/service-migrations-comps/Marquee";
import Ink from "../../../../comps/service-migrations-comps/Ink";
import ServiceCta from "../../../../comps/service-migrations-comps/ServiceCta";
import SharedFooter from "../../../../comps/shared/SharedFooter";
import ScriptRunner from "../../../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../../../comps/shared/siteScript";

export const metadata: Metadata = {
  title: "Service Migrations — OpsLogic",
  description: "Plan and move applications, data and services to the right platform with minimal downtime and clear ownership.",
};

export default function ServiceMigrationsPage() {
  return (
    <>
      <SharedHeader active="services" />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "IT Services", href: "/services/it-services" }, { label: "Service Migrations" }]} />
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
