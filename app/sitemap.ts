import type { MetadataRoute } from "next";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.opslogic.team";
  const routes = ["", "/about-us", "/services", "/services/eor", "/services/hr", "/services/business-setup", "/services/it", "/careers", "/contact-us", "/success-stories"];
  return routes.map((r) => ({ url: base + r, lastModified: new Date() }));
}
