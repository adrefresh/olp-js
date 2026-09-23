import type { Metadata } from "next";
import "./page.css";
import SharedHeader from "../../../comps/shared/SharedHeader";
import SharedFooter from "../../../comps/shared/SharedFooter";
import ScriptRunner from "../../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../../comps/shared/siteScript";
import Breadcrumbs from "../../../comps/shared/Breadcrumbs";

export const metadata: Metadata = {
  title: "IT Services — OpsLogic",
  description: "IT infrastructure, support and technology solutions — a reliable technology environment for your business.",
  alternates: { canonical: "/services/it" },
};

export default function ItPage() {
  return (
    <>
      <SharedHeader active="services" />
      <main>
        <section className="hero">
          <i className="orb" />
          <div className="wrap hero-copy reveal">
            <span className="eyebrow">IT Services</span>
            <h1>Enable your business with <em>technology.</em></h1>
            <p>From IT infrastructure and support to technology solutions, we help create a reliable technology environment for your business.</p>
            <div className="hero-actions">
              <a className="button dark" href="/contact-us">Talk to an expert ↗</a>
            </div>
          </div>
        </section>
        <div className="wrap"><Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: "IT Services" }]} /></div>

        <section>
          <div className="wrap grid two reveal">
            <div className="card"><h3>Infrastructure &amp; Support</h3><p>Reliable systems and responsive support, so technology never becomes the bottleneck.</p></div>
            <div className="card"><h3>Technology Solutions</h3><p>The right tools, integrated properly, for how your business actually operates.</p></div>
          </div>
        </section>

        <section className="dark-zone">
          <div className="wrap" style={{ textAlign: "center" }}>
            <div className="metric reveal">24/7</div>
            <p className="reveal" style={{ maxWidth: "40ch", margin: "0 auto" }}>Support that doesn&apos;t clock out when you need it most.</p>
          </div>
        </section>

        <section>
          <div className="wrap" style={{ textAlign: "center" }}>
            <span className="eyebrow reveal">Ready when you are</span>
            <h2 className="reveal" style={{ margin: "1rem 0 1.5rem" }}>Let&apos;s fix your tech stack.</h2>
            <a className="button dark reveal" href="/contact-us">Get in touch ↗</a>
          </div>
        </section>
      </main>
      <SharedFooter showEmail={false} />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
