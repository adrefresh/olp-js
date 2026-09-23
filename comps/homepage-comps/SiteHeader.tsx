export default function SiteHeader() {
  return (
    <header id="siteHeader">
      <div className="nav-inner">
        <a href="#top" className="logo">
          <span className="logo-mark">
            <span>OL</span>
          </span>
          OpsLogic
        </a>
        <nav className="links">
          <a href="/about-us">About Us</a>
          <a href="/success-stories">Success Stories</a>
          <div className="nav-drop">
            <a href="/services">Services ▾</a>
            <div className="drop-menu">
              <a href="/services/eor">EOR</a>
              <a href="/services/hr">HR Services</a>
              <a href="/services/business-setup">Business Setup</a>
              <a href="/services/it">IT Services</a>
            </div>
          </div>
          <a href="/careers">Careers</a>
          <a href="/contact-us">Contact Us</a>
        </nav>
        <a href="/contact-us" className="nav-cta magnetic" data-cursor="click">
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
