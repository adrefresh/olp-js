export default function Herosection() {
  return (
  <section className="hero" id="heroSection">
    <video id="hero-video" autoPlay muted loop playsInline poster="https://assets.mixkit.co/videos/40680/40680-thumb-360-0.jpg">
      <source src="https://assets.mixkit.co/videos/40680/40680-360.mp4" type="video/mp4" />
    </video>
    <div className="video-spot" id="videoSpot" />
    <div className="wrap hero-inner pt-24!">
      {/* <span class="hero-tag">✦ Operations partner · Est. Hyderabad</span> */}
      <h1 id="heroHeading" />
      <p className="sub">From Business Setup &amp; EOR to dedicated HR Services and IT &amp; SAP solutions — we help organizations operate efficiently, stay compliant, and grow faster. Your success starts here.</p>
      <div className="hero-ctas">
        <a href="#services" className="btn-primary magnetic" data-cursor="click">Explore our solutions</a>
        <a href="#contact" className="btn-ghost-light">Talk to us</a>
      </div>
    </div>
    {/* <div class="scroll-cue"><span class="line"></div> */}
  </section>
  );
}
