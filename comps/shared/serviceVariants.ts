export type Hero = "orbit" | "ghost" | "split" | "rule" | "grid";
export type ListStyle = "check" | "chips" | "rows" | "cards";
export type StepStyle = "line" | "vert" | "cards" | "big";
export type Anim = "rise" | "left" | "scale" | "clip" | "pop";
export interface Variant { hero: Hero; list: ListStyle; steps: StepStyle; anim: Anim; faq?: "side" | "stack" }

const v = (hero: Hero, steps: StepStyle, list: ListStyle, anim: Anim, faq: "side" | "stack" = "side"): Variant => ({ hero, steps, list, anim, faq });

/** Each service gets its own combination so the pages don't feel templated. */
export const VARIANTS: Record<string, Variant> = {
  "business-setup": v("split", "vert", "check", "left"),
  "offshore-extension-centres": v("orbit", "line", "cards", "rise", "stack"),
  "administration": v("rule", "cards", "rows", "clip"),
  "compliance": v("grid", "big", "check", "pop", "stack"),
  "managed-workspace": v("ghost", "line", "chips", "scale"),
  "accounting-tax-and-audit": v("split", "vert", "rows", "rise", "stack"),
  "licences-and-registrations": v("rule", "cards", "chips", "left"),
  "corporate-secretarial": v("orbit", "big", "check", "clip"),
  "startup-support-and-project-planning": v("grid", "line", "cards", "scale", "stack"),
  "closure-and-restructuring": v("ghost", "vert", "rows", "pop"),
  "legal-support": v("split", "cards", "check", "rise", "stack"),
  "hire-talent": v("ghost", "line", "chips", "scale"),
  "employer-of-record": v("split", "vert", "check", "left"),
  "contractor-of-record": v("orbit", "cards", "rows", "rise", "stack"),
  "freelancer-payments": v("grid", "big", "chips", "pop"),
  "payroll-management": v("rule", "vert", "check", "clip", "stack"),
  "hr-business-partner": v("split", "line", "cards", "scale"),
  "employee-engagement": v("orbit", "cards", "chips", "pop", "stack"),
  "onboarding-and-offboarding": v("ghost", "vert", "rows", "left"),
  "hr-policies-and-handbook": v("rule", "line", "check", "rise", "stack"),
  "benefits-and-insurance": v("grid", "cards", "cards", "clip"),
  "performance-and-appraisals": v("split", "big", "rows", "scale", "stack"),
  "hr-compliance-audit": v("ghost", "vert", "check", "left"),
  "equipment-and-remote-setup": v("orbit", "line", "chips", "pop", "stack"),
  "contract-staffing": v("rule", "cards", "rows", "rise"),
  "training-and-development": v("grid", "big", "check", "clip", "stack"),
  "it-asset-procurement": v("split", "line", "check", "rise"),
  "it-inventory-management": v("grid", "vert", "rows", "scale", "stack"),
  "employee-device-setup": v("orbit", "cards", "chips", "left"),
  "device-rental-and-leasing": v("rule", "big", "check", "pop", "stack"),
  "office-it-setup": v("ghost", "line", "cards", "clip"),
  "it-helpdesk-and-managed-it-support": v("split", "vert", "rows", "rise", "stack"),
  "server-migrations": v("grid", "line", "check", "left"),
  "microsoft-365-and-google-workspace": v("rule", "cards", "chips", "scale", "stack"),
  "network-and-security": v("ghost", "big", "check", "pop"),
  "cloud-services": v("orbit", "vert", "cards", "rise", "stack"),
  "web-development": v("split", "cards", "cards", "clip"),
  "application-development": v("grid", "line", "rows", "left", "stack"),
  "qa-and-testing": v("rule", "big", "chips", "pop"),
  "systems-integration": v("ghost", "vert", "cards", "scale", "stack"),
  "business-software": v("orbit", "line", "chips", "rise"),
  "certification-and-compliance-readiness": v("split", "big", "rows", "clip", "stack"),
  "ui-ux-design": v("grid", "cards", "cards", "left"),
  "branding": v("ghost", "vert", "chips", "pop", "stack"),
  "digital-marketing": v("rule", "line", "check", "scale"),
};
