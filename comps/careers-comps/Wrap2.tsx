export default function Wrap2() {
  return (
  <section>
    <div className="wrap">
      <span className="eyebrow orange">Perks & benefits</span>
      <h2 className="reveal" style={{ fontSize: "clamp(3rem,6vw,6rem)", maxWidth: "8ch", margin: "1rem 0 3rem" }}>Good work needs good conditions.</h2>
      <div className="perks">
        <article className="perk reveal">
          <h3>Career Growth & Learning</h3>
          <p>Hands-on experience, mentorship, training and exposure to evolving industry trends.</p>
        </article>
        <article className="perk reveal">
          <h3>Competitive Compensation</h3>
          <p>Fair, performance-driven compensation with incentives, bonuses and growth opportunities.</p>
        </article>
        <article className="perk reveal">
          <h3>Stress-Free Work Environment</h3>
          <p>Flexible policies, supportive management and structured processes designed for balance.</p>
        </article>
        <article className="perk reveal">
          <h3>Collaborative Culture</h3>
          <p>Open communication and teamwork where ideas are valued and shared progress matters.</p>
        </article>
        <article className="perk reveal">
          <h3>Health & Well-Being</h3>
          <p>Benefits and work-life initiatives designed to support you and your family.</p>
        </article>
        <article className="perk reveal">
          <h3>Exciting Challenges</h3>
          <p>High-impact projects that push boundaries, solve complex problems and create real value.</p>
        </article>
      </div>
    </div>
  </section>
  );
}
