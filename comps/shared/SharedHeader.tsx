import { CATEGORIES } from "./servicesData";

type NavKey = "home" | "about-us" | "careers" | "contact-us" | "services";

/** The single site-wide navbar. Services opens a flyout: Services → category → service. */
export default function SharedHeader({ active }: { active: NavKey }) {
  return (
  <header className="site-nav">
    <div className="nav-shell">
      <a className="brand" href="/" aria-label="OpsLogic home">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="brand-logo brand-logo-dark" src="/logo.png" alt="OpsLogic" width="150" height="40" />
        <img className="brand-logo brand-logo-light" src="/logo-light.png" alt="" aria-hidden="true" width="150" height="40" />
      </a>
      <nav className="nav-links">
        <a href="/" className={active === "home" ? "active" : undefined}>Home</a>
        <a href="/about-us" className={active === "about-us" ? "active" : undefined}>About Us</a>
        <div className="nav-drop">
          <button>Services ↘</button>
          <div className="nav-drop-menu">
            <a href="/services" className="nav-sub-link nav-all">All services<span aria-hidden="true">↗</span></a>
            {CATEGORIES.map((c) => (
              <div className="nav-sub" key={c.slug}>
                <a href={c.href} className="nav-sub-link">{c.title}<span aria-hidden="true">›</span></a>
                <div className="nav-fly">
                  {c.items.map((s) => (
                    <a href={s.href} key={s.slug}>{s.title}</a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <a href="/careers" className={active === "careers" ? "active" : undefined}>Careers</a>
        <a href="/contact-us" className={active === "contact-us" ? "active" : undefined}>Contact</a>
      </nav>
      <a className="nav-cta" href="/contact-us">Let&apos;s talk ↗</a>
    </div>
  </header>
  );
}
