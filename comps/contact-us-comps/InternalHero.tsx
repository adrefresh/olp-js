export default function InternalHero() {
  return (
  <section className="internal-hero">
    <video autoPlay muted loop playsInline poster="https://assets.mixkit.co/videos/40680/40680-thumb-360-0.jpg">
      <source src="https://assets.mixkit.co/videos/40680/40680-360.mp4" type="video/mp4" />
    </video>
    <div className="hero-shade" />
    <div className="wrap hero-content reveal">
      <span className="eyebrow orange">Contact us</span>
      <h1>A good first move.</h1>
      <p>Bring us the messy brief, complicated question or big idea. We’ll bring curiosity, useful perspective and a clear way forward.</p>
      <div className="hero-meta">
        <span>Operations partner</span>
        <span>Collaborative by design</span>
        <span>Built for momentum</span>
      </div>
    </div>
  </section>
  );
}
