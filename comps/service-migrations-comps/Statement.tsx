export default function Statement() {
  return (
  <section className="statement">
    <div className="wrap service-intro">
      <div className="reveal">
        <span className="eyebrow">MIGRATE</span>
        <h2>Migrations built around continuity</h2>
      </div>
      <div className="reveal">
        <p>Move to the right platform without disrupting the business.</p>
      </div>
    </div>
    <div className="wrap service-features">
      <article className="feature reveal">
        <span className="feature-num">01</span>
        <h3>Assessment & planning</h3>
        <p>Understand what you run today, what should move and in what order.</p>
      </article>
      <article className="feature reveal">
        <span className="feature-num">02</span>
        <h3>Application & data migration</h3>
        <p>Move workloads, data and integrations with testing at every step.</p>
      </article>
      <article className="feature reveal">
        <span className="feature-num">03</span>
        <h3>Cutover & support</h3>
        <p>Controlled go-live and hands-on support while teams settle in.</p>
      </article>
    </div>
  </section>
  );
}
