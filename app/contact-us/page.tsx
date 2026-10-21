import type { Metadata } from "next";
import "../services/page.css";
import Breadcrumbs from "../../comps/shared/Breadcrumbs";
import SharedHeader from "../../comps/shared/SharedHeader";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";
import { UxHero } from "../../comps/shared/Ux";
import { INDIA_VIEWBOX, INDIA_PATHS, TELANGANA_PATH, HYD } from "../../comps/shared/indiaMap";

export const metadata: Metadata = {
  title: "Contact — OpsLogic",
  description: "Tell us what's going on. A real person will reply, usually within one working day.",
};

export default function ContactUsPage() {
  return (
    <>
      <SharedHeader active="contact-us" />
      <Breadcrumbs items={[{ label: "Contact Us" }]} />
      <main className="ux">
        <UxHero
          eyebrow="Contact"
          lines={[<>Let&apos;s <em>talk.</em></>]}
          sub="Tell us what's going on. A real person will reply, usually within one working day."
          aside={
            <div className="ux-ca" aria-hidden="true">
              <div className="ux-ca-phone">
                <span className="ux-ca-ring r1" /><span className="ux-ca-ring r2" />
                <svg width="54" height="54" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2Z" /></svg>
              </div>
              <div className="ux-ca-b b1">Hi, we need a hand.</div>
              <div className="ux-ca-b b2">Sure, tell us more.</div>
              <div className="ux-ca-b b3"><i /><i /><i /></div>
              <div className="ux-ca-chip"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H8l-5 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" /></svg></div>
            </div>
          }
        />
        <section className="ux-sec t3">
          <div className="ux-wrap ux-split ux-contact-grid">
            <form className="ux-card ux-form contact-form ux-r">
              <input required name="name" placeholder="Name" autoComplete="name" />
              <input required type="email" name="email" placeholder="Work email" autoComplete="email" />
              <input name="company" placeholder="Company" autoComplete="organization" />
              <select name="topic" defaultValue="Business Operations" aria-label="What do you need?">
                <option>Business Operations</option>
                <option>HR &amp; Payroll</option>
                <option>IT Services</option>
                <option>Something else</option>
              </select>
              <textarea name="message" rows={4} placeholder="A few words about what you need" />
              <button className="ux-btn o" type="submit">Send message</button>
            </form>
            <div className="ux-info ux-r" style={{ ["--i" as string]: 1 }}>
              <div className="ux-card ux-touch">
                <div className="ux-touch-txt">
                  <h3>Get in touch directly</h3>
                  <p><a href="mailto:hello@opslogic.team">hello@opslogic.team</a><br /><a href="tel:+914035009631">+91 40 3500 9631</a></p>
                  <p>Hyderabad, India</p>
                </div>
                <div className="ux-map" role="img" aria-label="Map of India with Hyderabad, Telangana marked">
                  <svg viewBox={INDIA_VIEWBOX} aria-hidden="true">
                    {INDIA_PATHS.map((d, i) => <path d={d} className="ind" key={i} />)}
                    <path d={TELANGANA_PATH} className="tg" />
                  </svg>
                  <span className="ux-pin" style={{ left: (HYD.x / 612) * 100 + "%", top: (HYD.y / 696) * 100 + "%" }}>
                    <i aria-hidden="true" /><b>Hyderabad</b>
                  </span>
                </div>
              </div>
              <div className="ux-card">
                <h3>What happens next</h3>
                <p>We read your message, reply within one working day, set up a free call if it makes sense, and send a short written summary. No obligation.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
