import type { Metadata } from "next";
import "../services/page.css";
import Breadcrumbs from "../../comps/shared/Breadcrumbs";
import SharedHeader from "../../comps/shared/SharedHeader";
import SharedFooter from "../../comps/shared/SharedFooter";
import ScriptRunner from "../../comps/shared/ScriptRunner";
import { SITE_SCRIPT } from "../../comps/shared/siteScript";
import { UxHero } from "../../comps/shared/Ux";

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
        />
        <section className="ux-sec t3">
          <div className="ux-wrap ux-split" style={{ gridTemplateColumns: "7fr 5fr" }}>
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
              <div className="ux-card">
                <h3>Get in touch directly</h3>
                <p><a href="mailto:hello@opslogic.team">hello@opslogic.team</a><br /><a href="tel:+914035009631">+91 40 3500 9631</a></p>
                <p>Hyderabad, India</p>
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
