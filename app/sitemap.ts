import type { MetadataRoute } from "next";
import { CATS, SERVICES } from "../lib/services";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.opslogic.team";
  const now = new Date();
  const e = (path: string, priority: number, changeFrequency: "weekly" | "monthly" | "yearly") => ({
    url: base + path,
    lastModified: now,
    changeFrequency,
    priority,
  });
  return [
    e("/", 1, "weekly"),
    e("/services/", 0.9, "weekly"),
    ...CATS.map((c) => e(`/services/${c.slug}/`, 0.9, "monthly")),
    ...Object.entries(SERVICES).map(([slug, x]) => e(`/services/${x.cat}/${slug}/`, 0.8, "monthly")),
    e("/about/", 0.7, "monthly"),
    e("/contact/", 0.7, "yearly"),
    e("/careers/", 0.6, "weekly"),
    e("/privacy-policy/", 0.3, "yearly"),
  ];
}
