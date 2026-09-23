type NavKey = "" | "about-us" | "services" | "careers" | "success-stories" | "contact-us";

const SERVICE_LINKS = [
  { href: "/services/eor", label: "EOR" },
  { href: "/services/hr", label: "HR Services" },
  { href: "/services/business-setup", label: "Business Setup" },
  { href: "/services/it", label: "IT Services" },
];

export default function SharedHeader({ active }: { active: NavKey }) {
  return (
    <header id="siteHeader">
      <div className="nav-inner">
        <a href="/" className="logo">
          <span className="logo-mark"><span>OL</span></span>
          OpsLogic
        </a>
        <nav className="links">
          <a className={active === "" ? "tpl" : undefined} href="/">Home</a>
          <a className={active === "about-us" ? "tpl" : undefined} href="/about-us">About Us</a>
          <a className={active === "success-stories" ? "tpl" : undefined} href="/success-stories">Success Stories</a>
          <div className="nav-drop">
            <a className={active === "services" ? "tpl" : undefined} href="/services">Services ▾</a>
            <div className="drop-menu">
              {SERVICE_LINKS.map((s) => (
                <a href={s.href} key={s.href}>{s.label}</a>
              ))}
            </div>
          </div>
          <a className={active === "careers" ? "tpl" : undefined} href="/careers">Careers</a>
          <a className={active === "contact-us" ? "tpl" : undefined} href="/contact-us">Contact Us</a>
        </nav>
        <a href="/contact-us" className="nav-cta magnetic" data-cursor="click">
          Let&apos;s talk ↗
        </a>
      </div>
    </header>
  );
}
