import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../../comps/shared/SharedHeader";
import SharedFooter from "../../../comps/shared/SharedFooter";
import ScriptRunner from "../../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../../comps/shared/siteScript";
import Breadcrumbs from "../../../comps/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "Business Setup in India — OpsLogic",
  description: "Establish and operationalise your business in India — from initial setup to ongoing business support.",
  alternates: { canonical: "/services/business-setup" },
};

export default function BusinessSetupPage() {
  return (
    <>
      <SharedHeader active="services" />
      <main>
        <section className="hero" style={{ background: "linear-gradient(135deg,#0b0c10 0%,#2c2f36 55%,#18a7e0 100%)" }}>
          <div className="wrap hero-copy reveal">
            {/* <span className="eyebrow">Business Setup</span> */}
            <h1>Establish your business with <em>confidence.</em></h1>
            <p>Get the support you need to establish and operationalise your business in India — from initial setup to ongoing business support.</p>
            <div className="hero-actions">
              <a className="button dark" href="/contact-us">Talk to an expert ↗</a>
            </div>
          </div>
        </section>
        <div className="wrap"><Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "Business Setup" }]} /></div>

        <section className="dark-zone">
          <div className="wrap split">
            <div className="reveal">
              <span className="eyebrow orange">Getting started</span>
              <h2 style={{ fontSize: "2rem", margin: "1rem 0 1rem" }}>Entity to execution, one team.</h2>
              <p>Registration, licensing and initial setup handled end-to-end, so you're not learning Indian business law while trying to run a company.</p>
            </div>
            <div className="reveal">
              <span className="eyebrow orange">Staying operational</span>
              <h2 style={{ fontSize: "2rem", margin: "1rem 0 1rem" }}>Ongoing business support.</h2>
              <p>Once you're set up, we stay — handling the operational layer so your local presence keeps running smoothly.</p>
            </div>
          </div>
        </section>

        <section>
          <div className="wrap" style={{ textAlign: "center" }}>
            <span className="eyebrow reveal">Ready when you are</span>
            <h2 className="reveal" style={{ margin: "1rem 0 1.5rem" }}>Let&apos;s get you set up.</h2>
            <a className="button dark reveal" href="/contact-us">Get in touch ↗</a>
          </div>
        </section>
      </main>
      <SharedFooter showEmail={false} />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
