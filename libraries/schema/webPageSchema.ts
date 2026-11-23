import { OG_IMAGE, SITE } from "../../lib/seo";

/** schema.org page type for the JSON-LD block of a page. */
export type PageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

/** WebPage JSON-LD for one page. `path` is like "/about/". */
export function webPageSchema(type: PageType, name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    name,
    description,
    url: SITE + path,
    inLanguage: "en-IN",
    isPartOf: { "@id": SITE + "/#website" },
    about: { "@id": SITE + "/#org" },
    primaryImageOfPage: { "@type": "ImageObject", url: SITE + OG_IMAGE.url },
  };
}
