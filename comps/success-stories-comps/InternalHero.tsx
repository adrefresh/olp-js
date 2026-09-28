export default function InternalHero() {
  return (
  <section className="internal-hero">
    <video autoPlay muted loop playsInline poster="https://assets.mixkit.co/videos/40680/40680-thumb-360-0.jpg">
      <source src="https://assets.mixkit.co/videos/40680/40680-360.mp4" type="video/mp4" />
    </video>
    <div className="hero-shade" />
    <div className="wrap hero-content reveal">
      <span className="eyebrow orange">Success stories</span>
      <h1>
        Better operations. Real
        <em>momentum.</em>
      </h1>
      <p>A look at the kinds of operational problems we help teams untangle, strengthen and run with more confidence.</p>
      <div className="hero-meta">
        <span>Systems</span>
        <span>People</span>
        <span>Execution</span>
      </div>
    </div>
  </section>
  );
}
