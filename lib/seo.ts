import type { Metadata } from "next";

export const SITE = "https://www.opslogic.team";
export const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: "OpsLogic: let's make business move" };

/** Title, description, canonical URL, Open Graph and Twitter tags for one page. `path` is like "/about-us/". */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", siteName: "OpsLogic", locale: "en_IN", title, description, url: path, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

export const stripHtml = (h: string) => h.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
