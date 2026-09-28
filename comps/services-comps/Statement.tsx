export default function Statement() {
  return (
  <section className="statement">
    <div className="wrap">
      <span className="eyebrow">The service map</span>
      <h2 className="reveal" style={{ fontSize: "clamp(3.5rem,8vw,8rem)", maxWidth: "8ch", margin: "1rem 0" }}>Pick a lane. Then make it move.</h2>
      <div className="service-menu-list">
        <a className="service-feature reveal" href="/business-operations">
          <span>01</span>
          <div>
            <small>Operate</small>
            <h3>Business Operations</h3>
          </div>
          <b>↗</b>
        </a>
        <a className="service-feature reveal" href="/it-solutions">
          <span>02</span>
          <div>
            <small>Connect</small>
            <h3>IT Solutions</h3>
          </div>
          <b>↗</b>
        </a>
        <a className="service-feature reveal" href="/hiring-services">
          <span>03</span>
          <div>
            <small>Grow</small>
            <h3>Hiring Services</h3>
          </div>
          <b>↗</b>
        </a>
        <a className="service-feature reveal" href="/payroll-services">
          <span>04</span>
          <div>
            <small>Pay</small>
            <h3>Payroll Services</h3>
          </div>
          <b>↗</b>
        </a>
        <a className="service-feature reveal" href="/sap-services">
          <span>05</span>
          <div>
            <small>Optimise</small>
            <h3>SAP Services</h3>
          </div>
          <b>↗</b>
        </a>
        <a className="service-feature reveal" href="/shared-workspaces">
          <span>06</span>
          <div>
            <small>Gather</small>
            <h3>Shared Workspaces</h3>
          </div>
          <b>↗</b>
        </a>
      </div>
    </div>
  </section>
  );
}
