export default function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline poster="https://assets.mixkit.co/videos/40680/40680-thumb-360-0.jpg">
        <source src="https://assets.mixkit.co/videos/40680/40680-360.mp4" type="video/mp4" />
      </video>
      <div className="wrap hero-copy reveal">
        <span className="eyebrow orange">Careers at OpsLogic</span>
        <h1>
          Bring your whole
          <em>brain.</em>
        </h1>
        <p>
          We are building a team of clear thinkers, kind collaborators and
          restless improvers. If you like making complex work feel simple, let&apos;s
          make a move.
        </p>
        <a className="button" href="#openings">
          See openings ↓
        </a>
      </div>
    </section>
  );
}
