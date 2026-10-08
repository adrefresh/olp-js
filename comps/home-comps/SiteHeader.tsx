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
        <div className="home-service-drop">
          <button type="button">Services ↘</button>
          <div className="home-service-menu">
            <a href="/business-operations">Business Operations</a>
            <a href="/it-solutions">IT Solutions</a>
            <a href="/hiring-services">Hiring Services</a>
            <a href="/payroll-services">Payroll Services</a>
            <a href="/sap-services">SAP Services</a>
            <a href="/services/eor">EOR</a>
          </div>
        </div>
        <a href="/careers">Careers</a>
        <a href="/contact-us">Contact Us</a>
      </nav>
      <a href="/contact-us" className="nav-cta magnetic" data-cursor="click">Let&apos;s talk</a>
    </div>
  </header>
  );
}
