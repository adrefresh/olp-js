export default function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline poster="https://assets.mixkit.co/videos/40680/40680-thumb-360-0.jpg">
        <source src="https://assets.mixkit.co/videos/40680/40680-360.mp4" type="video/mp4" />
      </video>
      <div className="wrap hero-copy reveal">
        <span className="eyebrow orange">A good first move</span>
        <h1>
          Let&apos;s make your
          <em>next</em>
          move.
        </h1>
        <p>
          Bring us the messy brief, the complicated question or the big idea.
          We&apos;ll bring curiosity, useful perspective and a clear way forward.
        </p>
      </div>
    </section>
  );
}
