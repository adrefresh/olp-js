import type { MetadataRoute } from "next";
import { CATS, SERVICES } from "../comps/shared/servicesContent";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.opslogic.team";
  const routes = [
    "", "/about-us", "/careers", "/contact-us", "/services", "/success-stories",
    ...CATS.map((c) => `/services/${c.slug}`),
    ...Object.entries(SERVICES).map(([slug, x]) => `/services/${x.cat}/${slug}`),
  ];
  return routes.map((r) => ({ url: base + r, lastModified: new Date() }));
}
