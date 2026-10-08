type NavKey = "home" | "about-us" | "careers" | "contact-us" | "services";

export default function SharedHeader({ active }: { active: NavKey }) {
  return (
  <header className="site-nav">
    <div className="nav-shell">
      <a className="brand" href="/">
        <span className="mark">OL</span>
        OpsLogic
      </a>
      <nav className="nav-links">
        <a href="/" className={active === "home" ? "active" : undefined}>Home</a>
        <a href="/about-us" className={active === "about-us" ? "active" : undefined}>About Us</a>
        <div className="nav-drop">
          <button>Services ↘</button>
          <div className="nav-drop-menu">
            <a href="/business-operations">Business Operations</a>
            <a href="/it-solutions">IT Solutions</a>
            <a href="/hiring-services">Hiring Services</a>
            <a href="/payroll-services">Payroll Services</a>
            <a href="/sap-services">SAP Services</a>
            <a href="/services/eor">EOR</a>
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
