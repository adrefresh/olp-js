import { CATEGORIES } from "./servicesData";

/** Site-wide footer. Styles live in app/site.css (.ft-*). */
export default function SharedFooter({ showEmail }: { showEmail?: boolean } = {}) {
  void showEmail;
  return (
    <footer className="ft" id="site-footer">
      <div className="ft-card">

        <div className="ft-grid">
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
            <h3>HR Operations</h3>
            <ul>
              {CATEGORIES[0].items.map((s) => (
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
              <li><a href="mailto:hello@opslogic.team">hello@opslogic.team</a></li>
              <li>Hyderabad, India</li>
              <li>Scarborough, Canada</li>
            </ul>
          </div>
        </div>

        <div className="ft-bottom">
          <span>© 2025–2026 OpsLogic Private Limited. All rights reserved.</span>
          <span className="ft-legal"><a href="#">Privacy Policy</a></span>
        </div>
      </div>
      <div className="ft-word" aria-hidden="true"><b>Ops<span>Logic</span></b></div>
    </footer>
  );
}
