import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.opslogic.team";
  const routes = [
    "", "/about-us", "/careers", "/contact-us", "/services", "/success-stories",
    "/services/hr-operations", "/services/hr-operations/eor", "/services/hr-operations/payroll", "/services/hr-operations/recruitment",
    "/services/business-operations", "/services/business-operations/business-setup", "/services/business-operations/process-operations", "/services/business-operations/shared-workspaces",
    "/services/it-services", "/services/it-services/sap", "/services/it-services/service-migrations",
  ];
  return routes.map((r) => ({ url: base + r, lastModified: new Date() }));
}
