import { CATS, SERVICES, catHref, svcHref } from "./servicesContent";

/** Navigation data (header flyout, mobile drawer, footer) derived from the service content. */
const FEATURED: Record<string, string[]> = {
  "business-operations": ["business-setup", "offshore-extension-centres", "compliance", "accounting-tax-and-audit", "managed-workspace", "legal-support"],
  "hr-payroll": ["hire-talent", "employer-of-record", "payroll-management", "contractor-of-record", "hr-business-partner", "employee-engagement"],
  "it-services": ["it-asset-procurement", "it-helpdesk-and-managed-it-support", "server-migrations", "web-development", "application-development", "systems-integration"],
};

export const CATEGORIES = CATS.map((c) => ({
  slug: c.slug,
  title: c.title,
  href: catHref(c.slug),
  total: c.groups.reduce((n, g) => n + g.items.length, 0),
  items: FEATURED[c.slug].map((s) => ({ slug: s, title: SERVICES[s].title, href: svcHref(s) })),
}));

export const POPULAR = ["business-setup", "employer-of-record", "payroll-management", "it-helpdesk-and-managed-it-support", "web-development"].map((s) => ({
  slug: s, title: SERVICES[s].title, href: svcHref(s),
}));
