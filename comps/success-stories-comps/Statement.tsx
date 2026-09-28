export default function Statement() {
  return (
  <section className="statement">
    <div className="wrap">
      <span className="eyebrow">The work behind the work</span>
      <h2 className="reveal" style={{ fontSize: "clamp(3.5rem,8vw,8rem)", maxWidth: "9ch", margin: "1rem 0 3rem" }}>Every story starts with friction.</h2>
      <div className="service-features">
        <article className="feature reveal">
          <span className="feature-num">01</span>
          <h3>Operational clarity</h3>
          <p>Teams replace fragmented workflows with clearer ownership, repeatable routines and visible execution.</p>
        </article>
        <article className="feature reveal">
          <span className="feature-num">02</span>
          <h3>Connected functions</h3>
          <p>People, technology and process support work together instead of becoming another layer of complexity.</p>
        </article>
        <article className="feature reveal">
          <span className="feature-num">03</span>
          <h3>Room to grow</h3>
          <p>Operational foundations are designed to support the next stage, not just solve today’s pressure.</p>
        </article>
      </div>
    </div>
  </section>
  );
}
