export default function InternalHero() {
  return (
  <section className="internal-hero">
    <video autoPlay muted loop playsInline poster="https://assets.mixkit.co/videos/40680/40680-thumb-360-0.jpg">
      <source src="https://assets.mixkit.co/videos/40680/40680-360.mp4" type="video/mp4" />
    </video>
    <div className="hero-shade" />
    <div className="wrap hero-content reveal">
      <span className="eyebrow orange">Careers at OpsLogic</span>
      <h1>Join the startup revolution.</h1>
      <p>You don’t just work—you evolve. Bring your expertise, curiosity and initiative into a collaborative environment built around real-world challenges.</p>
      <div className="hero-meta">
        <span>Operations partner</span>
        <span>Collaborative by design</span>
        <span>Built for momentum</span>
      </div>
    </div>
  </section>
  );
}
