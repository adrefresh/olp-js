import { SITE, stripHtml } from "../../lib/seo";
import type { Cat, Service } from "../../lib/services";

/** Service JSON-LD for one service page. `offers` = the items listed under "what's included". */
export function serviceSchema(s: Service, cat: Cat, offers: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: stripHtml(s.p),
    url: `${SITE}/services/${s.cat}/${s.slug}/`,
    serviceType: cat.title,
    "@id": `${SITE}/services/${s.cat}/${s.slug}/#service`,
    inLanguage: "en-IN",
    provider: { "@id": `${SITE}/#org` },
    isPartOf: { "@id": `${SITE}/#website` },
    areaServed: ["IN", "Worldwide"],
    category: cat.title,
    ...(offers.length ? { hasOfferCatalog: { "@type": "OfferCatalog", name: `${s.title}: what's included`, itemListElement: offers.map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })) } } : {}),
  };
}
