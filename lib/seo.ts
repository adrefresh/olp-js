import type { Metadata } from "next";

export const SITE = "https://www.opslogic.team";
export const OG_IMAGE = { url: "/og-image.png", width: 1200, height: 630, alt: "OpsLogic: let's make business move" };

/** Keywords every page shares; each page adds its own in front. */
export const BASE_KEYWORDS = ["OpsLogic", "business operations partner Hyderabad", "company setup India", "HR and payroll outsourcing India", "IT services India"];

const uniq = (a: string[]) => Array.from(new Set(a.map((x) => x.trim()).filter(Boolean)));

/** Title, description, keywords, canonical, language alternates, Open Graph and Twitter tags for one page. `path` is like "/about/". */
export function pageMeta(title: string, description: string, path: string, keywords: string[] = []): Metadata {
  return {
    title,
    description,
    keywords: uniq([...keywords, ...BASE_KEYWORDS]),
    alternates: { canonical: path, languages: { "en-IN": path, "x-default": path } },
    openGraph: { type: "website", siteName: "OpsLogic", locale: "en_IN", title, description, url: path, images: [OG_IMAGE] },
    twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
  };
}

export const stripHtml = (h: string) => h.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
