type NavKey = "about-us" | "services" | "careers" | "success-stories" | "";

const SERVICE_LINKS = [
  { href: "/services/eor", label: "EOR" },
  { href: "/services/hr", label: "HR Services" },
  { href: "/services/business-setup", label: "Business Setup" },
  { href: "/services/it", label: "IT Services" },
];

export default function SharedHeader({ active }: { active: NavKey }) {
  return (
    <header className="nav">
      <div className="navin">
        <a className="brand" href="/">
          <span className="mark">OL</span>OpsLogic
        </a>
        <nav className="links">
          <a className={active === "about-us" ? "active" : undefined} href="/about-us">About</a>
          <a className={active === "success-stories" ? "active" : undefined} href="/success-stories">Stories</a>
          <div className="nav-drop">
            <a className={active === "services" ? "active" : undefined} href="/services">Services ▾</a>
            <div className="drop-menu">
              {SERVICE_LINKS.map((s) => (
                <a href={s.href} key={s.href}>{s.label}</a>
              ))}
            </div>
          </div>
          <a className={active === "careers" ? "active" : undefined} href="/careers">Careers</a>
        </nav>
        <a className="button" href="/contact-us">
          Let&apos;s talk ↗
        </a>
      </div>
    </header>
  );
}
