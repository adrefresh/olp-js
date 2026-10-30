import { pageMeta } from "../../../../lib/seo";
import type { Metadata } from "next";
import "../../page.css";
import { notFound } from "next/navigation";
import ServicePage from "../../../../components/services/ServicePage";
import { SERVICES } from "../../../../lib/services";

/** Old URLs that now live under the dynamic route (a static folder here would shadow [cat] in dev). */
const LEGACY: Record<string, string> = {
  "business-operations/process-operations": "/services/business-operations/",
  "business-operations/shared-workspaces": "/services/business-operations/managed-workspace/",
  "it-services/sap": "/services/it-services/",
  "it-services/service-migrations": "/services/it-services/server-migrations/",
};

export const dynamicParams = false;
export function generateStaticParams() {
  return [
    ...Object.entries(SERVICES).map(([slug, s]) => ({ cat: s.cat, slug })),
    ...Object.keys(LEGACY).map((k) => { const [cat, slug] = k.split("/"); return { cat, slug }; }),
  ];
}
export async function generateMetadata({ params }: { params: Promise<{ cat: string; slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = SERVICES[slug];
  return s
    ? pageMeta(`${s.title} — OpsLogic`, s.p, `/services/${s.cat}/${slug}/`, [
        s.title,
        `${s.title} India`,
        `${s.title} services Hyderabad`,
        `${s.title} for startups`,
        s.cat === "hr-payroll" ? "HR and payroll" : s.cat === "it-services" ? "IT services" : "business operations",
      ])
    : {};
}
export default async function Page({ params }: { params: Promise<{ cat: string; slug: string }> }) {
  const { cat, slug } = await params;
  const to = LEGACY[`${cat}/${slug}`];
  if (to)
    return (
      <>
        <meta httpEquiv="refresh" content={`0; url=${to}`} />
        <p style={{ padding: "2rem" }}>This page has moved. <a href={to}>Continue to the new page</a>.</p>
      </>
    );
  const s = SERVICES[slug];
  if (!s || s.cat !== cat) notFound();
  return <ServicePage slug={slug} />;
}
