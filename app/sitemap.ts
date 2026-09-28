import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.opslogic.team";
  const routes = [
    "", "/about-us", "/careers", "/contact-us", "/services", "/success-stories",
    "/business-operations", "/it-solutions", "/hiring-services",
    "/payroll-services", "/sap-services", "/shared-workspaces",
  ];
  return routes.map((r) => ({ url: base + r, lastModified: new Date() }));
}
