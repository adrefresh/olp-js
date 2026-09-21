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
          <a href="/services">Services</a>
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
