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

export const metadata: Metadata = pageMeta("Contact — OpsLogic", "Tell us what's going on. A real person will reply, usually within one working day.", "/contact-us/");

export default function ContactUsPage() {
  return (
    <>
      <SiteHeader active="contact-us" />
      <Breadcrumbs items={[{ label: "Contact Us" }]} />
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
      <SiteFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
