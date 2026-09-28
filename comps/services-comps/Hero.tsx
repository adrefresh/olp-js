export default function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline poster="https://assets.mixkit.co/videos/40680/40680-thumb-360-0.jpg">
        <source src="https://assets.mixkit.co/videos/40680/40680-360.mp4" type="video/mp4" />
      </video>
      <div className="wrap hero-copy reveal">
        <span className="eyebrow">The good stuff</span>
        <h1>
          Your business,
          <em>unblocked.</em>
        </h1>
        <p>
          One sharp, responsive operations partner across the functions that
          keep your company in motion. Pick a lane—or let us connect the whole
          map.
        </p>
        <div className="hero-actions">
          <a className="button" href="#services">
            Explore the menu ↓
          </a>
        </div>
      </div>
    </section>
  );
}
