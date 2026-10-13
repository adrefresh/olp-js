export interface SubService { icon: string; slug: string; title: string; tag: string; desc: string; href: string }
export interface Category { icon: string; slug: string; title: string; tag: string; theme: string; eyebrow: string; blurb: string; desc: string; href: string; items: SubService[] }

export const CATEGORIES: Category[] = [
  {
    icon: "M16 11a4 4 0 10-8 0M4 21c0-4 3.6-6 8-6s8 2 8 6M17 7a3 3 0 010 6M21 20c0-2.5-1.5-4-3.5-4.7", slug: "hr-operations", title: "HR Operations", tag: "People", theme: "theme-3",
    eyebrow: "Build the team. Run it well.",
    blurb: "EOR, payroll and recruitment under one roof.",
    desc: "Hire, employ and pay your people with one partner, from the first search to the monthly payslip.",
    href: "/services/hr-operations",
    items: [
      { icon: "M9 12l2 2 4-4M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6z", slug: "eor", title: "EOR", tag: "Employer of Record", desc: "Hire and manage employees in India, compliantly, without setting up an entity.", href: "/services/hr-operations/eor" },
      { icon: "M3 7h18v10H3zM3 11h18M7 15h3", slug: "payroll", title: "Payroll", tag: "Pay", desc: "Accurate, on-time payroll with the statutory work handled and visible.", href: "/services/hr-operations/payroll" },
      { icon: "M15 19c0-3-2.7-5-6-5s-6 2-6 5M9 11a3.5 3.5 0 100-7 3.5 3.5 0 000 7M19 8v6M16 11h6", slug: "recruitment", title: "Recruitment & Staffing", tag: "Hire", desc: "Sourcing to onboarding, aligned to your culture, roles and growth plans.", href: "/services/hr-operations/recruitment" },
    ],
  },
  {
    icon: "M4 8h16v11H4zM9 8V5h6v3M4 13h16", slug: "business-operations", title: "Business Operations", tag: "Operate", theme: "theme-1",
    eyebrow: "The operating layer behind the growth.",
    blurb: "Business setup, workflows and ready-to-use workspaces.",
    desc: "Set up in India, run on dependable processes and work from space that is ready from day one.",
    href: "/services/business-operations",
    items: [
      { icon: "M4 21V7l8-4 8 4v14M9 21v-6h6v6M8 10h1M12 10h1M16 10h1", slug: "business-setup", title: "Business Setup", tag: "Establish", desc: "Establish and operationalise your business in India, from registration to ongoing support.", href: "/services/business-operations/business-setup" },
      { icon: "M4 12a8 8 0 0114-5.3M20 12a8 8 0 01-14 5.3M18 3v4h-4M6 21v-4h4", slug: "process-operations", title: "Process & Workflow Operations", tag: "Run", desc: "Operational rhythm, workflow design and execution support that keep work moving.", href: "/services/business-operations/process-operations" },
      { icon: "M3 4h8v8H3zM13 4h8v8h-8zM3 14h8v6H3zM13 14h8v6h-8z", slug: "shared-workspaces", title: "Shared Workspaces", tag: "Gather", desc: "Flexible, fully equipped spaces for teams, ready from day one.", href: "/services/business-operations/shared-workspaces" },
    ],
  },
  {
    icon: "M3 5h18v11H3zM8 20h8M12 16v4", slug: "it-services", title: "IT Services", tag: "Connect", theme: "theme-5",
    eyebrow: "Technology that keeps up with the business.",
    blurb: "SAP services and service migrations.",
    desc: "Keep critical systems optimised and move services to the right platform with minimal disruption.",
    href: "/services/it-services",
    items: [
      { icon: "M12 3l9 4-9 4-9-4zM3 12l9 4 9-4M3 17l9 4 9-4", slug: "sap", title: "SAP Services", tag: "Optimise", desc: "Enhancements, post-go-live support and flexible SAP staffing.", href: "/services/it-services/sap" },
      { icon: "M4 8h13l-3-3M20 16H7l3 3", slug: "service-migrations", title: "Service Migrations", tag: "Migrate", desc: "Plan and move applications, data and services with minimal downtime.", href: "/services/it-services/service-migrations" },
    ],
  },
];
