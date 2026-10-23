import Breadcrumbs from "../layout/Breadcrumbs";
import SiteHeader from "../layout/SiteHeader";
import SiteFooter from "../layout/SiteFooter";
import ScriptRunner from "../layout/ScriptRunner";
import { SITE_SCRIPT } from "../../lib/site-script";
import { CATS, SERVICES, catHref } from "../../lib/services";
import ServiceHero from "./ServiceHero";
import ServiceSection from "./ServiceSection";
import ServiceSteps from "./ServiceSteps";
import RelatedServices from "./RelatedServices";
import ServiceFaq from "./ServiceFaq";

/** One service detail page, assembled from content/services/<category>/<slug>.md. */
export default function ServicePage({ slug }: { slug: string }) {
  const s = SERVICES[slug];
  const cat = CATS.find((c) => c.slug === s.cat)!;
  const v = s.layout;
  return (
    <>
      <SiteHeader active="services" />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: cat.title, href: catHref(cat.slug) }, { label: s.title }]} />
      <main className={"ux an-" + v.anim}>
        <ServiceHero service={s} cat={cat} />
        {s.sections.map((sec, i) => (
          <ServiceSection key={i} sec={sec} idx={i} list={v.list} />
        ))}
        <ServiceSteps steps={s.steps} style={v.steps} />
        <RelatedServices slug={slug} cat={cat} />
        <ServiceFaq faq={s.faq} side={v.faq === "side"} />
      </main>
      <SiteFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
