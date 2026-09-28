export default function InternalHero() {
  return (
  <section className="internal-hero">
    <video autoPlay muted loop playsInline poster="https://assets.mixkit.co/videos/40680/40680-thumb-360-0.jpg">
      <source src="https://assets.mixkit.co/videos/40680/40680-360.mp4" type="video/mp4" />
    </video>
    <div className="hero-shade" />
    <div className="wrap hero-content reveal">
      <span className="eyebrow orange">About OpsLogic</span>
      <h1>Operations that become a strength.</h1>
      <p>We strengthen the systems, processes and execution layers behind everyday performance and long-term growth.</p>
      <div className="hero-meta">
        <span>Operations partner</span>
        <span>Collaborative by design</span>
        <span>Built for momentum</span>
      </div>
    </div>
  </section>
  );
}
