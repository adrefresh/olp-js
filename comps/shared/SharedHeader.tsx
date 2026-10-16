import { CATEGORIES } from "./servicesData";
import MobileMenu from "./MobileMenu";

type NavKey = "home" | "about-us" | "careers" | "contact-us" | "services";

/** The single site-wide navbar. Services opens a flyout: Services → category → service. */
export default function SharedHeader({ active }: { active: NavKey }) {
  return (
  <header className="site-nav">
    <div className="nav-shell">
      <a className="brand" href="/" aria-label="OpsLogic home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="brand-logo brand-logo-dark" src="/logo.png" alt="OpsLogic" width="150" height="40" />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="brand-logo brand-logo-light" src="/logo-light.png" alt="" aria-hidden="true" width="150" height="40" />
      </a>
      <nav className="nav-links">
        <a href="/" className={active === "home" ? "active" : undefined}>Home</a>
        <div className="nav-drop">
          <button>Services ↘</button>
          <div className="nav-drop-menu nav-mega">
            <div className="mega-grid">
              <div className="mega-intro">
                <span>Services</span>
                <h4>Three areas. One team behind them.</h4>
                <p>Set up, hire, pay and run, handled by one accountable team.</p>
                <a href="/services" className="mega-all">View all services <span aria-hidden="true">↗</span></a>
              </div>
              {CATEGORIES.map((c) => (
                <div className="mega-col" key={c.slug}>
                  <a href={c.href} className="mega-title">{c.title}<span aria-hidden="true">→</span></a>
                  {c.items.slice(0, 6).map((s) => (
                    <a href={s.href} key={s.slug} className="mega-item">{s.title}</a>
                  ))}
                  <a href={c.href} className="mega-count">All {c.total} services <span aria-hidden="true">→</span></a>
                </div>
              ))}
            </div>
          </div>
        </div>
        <a href="/about-us" className={active === "about-us" ? "active" : undefined}>About Us</a>
        <a href="/careers" className={active === "careers" ? "active" : undefined}>Careers</a>
        <a href="/contact-us" className={active === "contact-us" ? "active" : undefined}>Contact</a>
      </nav>
      <a className="nav-cta" href="/contact-us">Let&apos;s talk ↗</a>
      <MobileMenu active={active} />
    </div>
  </header>
  );
}
