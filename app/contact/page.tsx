import type { Metadata } from "next";
import "../services/page.css";
import Breadcrumbs from "../../components/layout/Breadcrumbs";
import SiteHeader from "../../components/layout/SiteHeader";
import SiteFooter from "../../components/layout/SiteFooter";
import ScriptRunner from "../../components/layout/ScriptRunner";
import PageHero from "../../components/ui/PageHero";
import { SITE_SCRIPT } from "../../lib/site-script";
import HeroArt from "../../components/contact/HeroArt";
import ContactForm from "../../components/contact/ContactForm";
import TouchCard from "../../components/contact/TouchCard";
import NextSteps from "../../components/contact/NextSteps";
import { pageMeta } from "../../lib/seo";
import PageSchema from "../../components/ui/PageSchema";

const TITLE = "Contact — OpsLogic";
const DESC = "Tell us what's going on. A real person will reply, usually within one working day.";
export const metadata: Metadata = pageMeta(TITLE, DESC, "/contact/", ["contact OpsLogic", "free consultation", "business operations enquiry Hyderabad"]);

export default function ContactUsPage() {
  return (
    <>
      <SiteHeader active="contact" />
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <main className="ux">
        <PageHero
          eyebrow="Contact"
          lines={[<>Let&apos;s <em>talk.</em></>]}
          sub="Tell us what's going on. A real person will reply, usually within one working day."
          aside={<HeroArt />}
        />
        <section className="ux-sec t0 ux-contact-sec">
          <div className="ux-wrap ux-split ux-contact-grid">
            <ContactForm />
            <div className="ux-info ux-r" style={{ ["--i" as string]: 1 }}>
              <TouchCard />
              <NextSteps />
            </div>
          </div>
        </section>
      </main>
      <PageSchema type="ContactPage" title={TITLE} description={DESC} path="/contact/" />
      <SiteFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
