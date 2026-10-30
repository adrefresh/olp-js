import { CATS, SERVICES } from "../../lib/services";
import { stripHtml } from "../../lib/seo";

export const dynamic = "force-static";

const BASE = "https://www.opslogic.team";
const line = (title: string, path: string, desc?: string) => `- [${title}](${BASE}${path})${desc ? `: ${desc}` : ""}`;

/** /llms.txt is built from the content files at build time, so it always matches the site. */
export function GET() {
  const out: string[] = [
    "# OpsLogic",
    "",
    "> OpsLogic is a business operations partner in Hyderabad, India. We handle company set-up and compliance, HR and payroll, and IT services for growing teams and overseas companies working in India.",
    "",
    "## Main pages",
    "",
    line("Home", "/"),
    line("About Us", "/about/", "who we are, the founders and where we work"),
    line("Services", "/services/", "everything we offer, in three areas"),
    line("Careers", "/careers/", "open roles and how we hire"),
    line("Contact Us", "/contact/", "talk to the team"),
    line("Privacy Policy", "/privacy-policy/"),
    "",
  ];
  for (const c of CATS) {
    out.push(`## ${c.title}`, "", line(c.title, `/services/${c.slug}/`, stripHtml(c.p)));
    for (const [slug, s] of Object.entries(SERVICES).filter(([, x]) => x.cat === c.slug)) {
      out.push(line(s.title, `/services/${c.slug}/${slug}/`, stripHtml(s.short || s.p)));
    }
    out.push("");
  }
  out.push("## Contact", "", "- Email: hello@opslogic.team", "- Phone: +91 40 3500 9631", "- Address: 1102D, Manjeera Trinity Corporate, JNTU - HiTech City Road, Kukatpally, Hyderabad - 500072, Telangana, India", "");
  return new Response(out.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
