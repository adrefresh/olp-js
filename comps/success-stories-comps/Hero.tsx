export default function Hero() {
  return (
    <section className="hero">
      <video autoPlay muted loop playsInline poster="https://assets.mixkit.co/videos/40680/40680-thumb-360-0.jpg">
        <source src="https://assets.mixkit.co/videos/40680/40680-360.mp4" type="video/mp4" />
      </video>
      <div className="wrap hero-copy reveal">
        {/* <span className="eyebrow orange">Proof, not promises</span> */}
        <h1>
          Good work makes a<em>ripple.</em>
        </h1>
        <p>
          See how growth-minded teams replaced operational drag with clearer
          systems, stronger people and measurable momentum.
        </p>
      </div>
    </section>
  );
}
