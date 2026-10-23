import type { ReactNode } from "react";
import Breadcrumbs from "../layout/Breadcrumbs";
import SiteHeader from "../layout/SiteHeader";
import SiteFooter from "../layout/SiteFooter";
import ScriptRunner from "../layout/ScriptRunner";
import PageHero from "../ui/PageHero";
import SectionHead from "../ui/SectionHead";
import { SITE_SCRIPT } from "../../lib/site-script";
import { CATS } from "../../lib/services";
import CategoryGroup, { type CategoryLayout } from "./CategoryGroup";
import CategoryFaq from "./CategoryFaq";

const LAYOUT: Record<string, CategoryLayout> = {
  "business-operations": "journey",
  "hr-payroll": "editorial",
  "it-services": "bento",
};

function lines(h: string): ReactNode[] {
  const parts = h.split(/(?<=[.?!])\s+/).filter(Boolean);
  return parts.map((p, i) => (i === parts.length - 1 && parts.length > 1 ? <em key={i}>{p}</em> : p));
}

/** One category page (Business Operations, HR & Payroll, IT Services) from content/categories/<slug>.md. */
export default function CategoryPage({ slug }: { slug: string }) {
  const c = CATS.find((x) => x.slug === slug)!;
  const layout = LAYOUT[slug];
  return (
    <>
      <SiteHeader active="services" />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: c.title }]} />
      <main className={"ux ly-" + layout}>
        <PageHero className="h-rings" eyebrow={c.title} lines={c.h ? lines(c.h) : [c.title]} sub={c.p} />

        <section className="ux-sec t0">
          <div className="ux-wrap ux-split">
            <SectionHead eyebrow="Overview" title={c.title} />
            <div className="ux-two ux-r" style={{ ["--i" as string]: 1 }}>
              <p>{c.o}</p>
            </div>
          </div>
        </section>

        {c.groups.map((g, gi) => (
          <CategoryGroup key={g.t} group={g} gi={gi} layout={layout} />
        ))}

        <CategoryFaq faq={c.faq} />
      </main>
      <SiteFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
