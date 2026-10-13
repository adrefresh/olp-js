export default function Ink() {
  return (
  <section className="ink">
    <div className="wrap">
      <span className="eyebrow">Our approach</span>
      <h2 style={{ fontSize: "clamp(3rem,6vw,6rem)", maxWidth: "9ch", margin: "1rem 0" }}>Built around the way you work.</h2>
      <div className="service-flow">
        <div className="flow">
          <b>01 / DISCOVER</b>
          <h3>Understand</h3>
          <p>We learn the context, pressure points and outcomes that matter.</p>
        </div>
        <div className="flow">
          <b>02 / DESIGN</b>
          <h3>Shape</h3>
          <p>We create a practical operating model that fits your team.</p>
        </div>
        <div className="flow">
          <b>03 / DELIVER</b>
          <h3>Embed</h3>
          <p>We work alongside your people and make the system real.</p>
        </div>
        <div className="flow">
          <b>04 / EVOLVE</b>
          <h3>Improve</h3>
          <p>We keep refining the operation as your business changes.</p>
        </div>
      </div>
    </div>
  </section>
  );
}
