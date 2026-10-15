import { CATEGORIES, POPULAR } from "./servicesData";

/** Site-wide footer. Styles live in app/site.css (.ft-*). */
export default function SharedFooter({ showEmail }: { showEmail?: boolean } = {}) {
  void showEmail;
  return (
    <footer className="ft" id="site-footer">
      <div className="ft-glow a" aria-hidden="true" />
      <div className="ft-glow b" aria-hidden="true" />
      <div className="ft-wrap">
        <div className="ft-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-light.png" alt="OpsLogic" />
          <p>Business operations, HR &amp; payroll and IT services. One team behind all three.</p>
          <a className="ft-mail" href="mailto:hello@opslogic.team">hello@opslogic.team <span aria-hidden="true">↗</span></a>
        </div>

        <div className="ft-panel">
          <div className="ft-col">
            <h3>Services</h3>
            <ul>
              {CATEGORIES.map((c) => (
                <li key={c.slug}><a href={c.href}>{c.title}</a></li>
              ))}
              <li><a href="/services">All services</a></li>
            </ul>
          </div>
          <div className="ft-col">
            <h3>Popular</h3>
            <ul>
              {POPULAR.map((s) => (
                <li key={s.slug}><a href={s.href}>{s.title}</a></li>
              ))}
            </ul>
          </div>
          <div className="ft-col">
            <h3>Company</h3>
            <ul>
              <li><a href="/about-us">About Us</a></li>
              <li><a href="/success-stories">Success Stories</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact-us">Contact</a></li>
            </ul>
          </div>
          <div className="ft-col">
            <h3>Reach us</h3>
            <ul>
              <li><a href="tel:+914035009631">+91 40 3500 9631</a></li>
              <li>Hyderabad, India</li>
              <li>Scarborough, Canada</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ft-bottom">
        <span>© 2025–2026 OpsLogic Private Limited. All rights reserved.</span>
        <span className="ft-links"><a href="#">Privacy Policy</a><a className="ft-top" href="#">Back to top <span aria-hidden="true">↑</span></a></span>
      </div>
    </footer>
  );
}
