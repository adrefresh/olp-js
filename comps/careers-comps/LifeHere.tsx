const PERKS = [
  { t: "Career Growth & Learning", d: "Hands-on experience with diverse projects, continuous learning and upskilling through mentorship and training." },
  { t: "Competitive Compensation", d: "Fair, performance-driven pay including incentives and bonuses that reflect your contributions." },
  { t: "Stress-Free Work Environment", d: "Flexible work policies, supportive management and well-structured processes for a balanced atmosphere." },
  { t: "Collaborative Culture", d: "Inclusive, open communication where teamwork and creativity drive meaningful progress." },
  { t: "Health & Well-Being", d: "Comprehensive benefits and work-life balance initiatives, including health insurance and wellness support." },
  { t: "Exciting Challenges", d: "High-impact projects that push boundaries and challenge you to innovate and solve complex problems." },
];

export default function LifeHere() {
  return (
    <section className="dark-zone">
      <div className="wrap">
        <span className="eyebrow orange reveal">Perks &amp; benefits</span>
        <h2 className="reveal" style={{ margin: "1rem 0 2.5rem", maxWidth: "16ch" }}>Work with energy, not pressure.</h2>
        <div className="timeline reveal">
          {PERKS.map((p) => (
            <article key={p.t}>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
