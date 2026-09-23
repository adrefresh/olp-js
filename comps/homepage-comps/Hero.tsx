export default function Hero() {
  return (
    <section className="hero" id="heroSection">
      <video
        id="hero-video"
        autoPlay
        muted
        loop
        playsInline
        poster="https://assets.mixkit.co/videos/40680/40680-thumb-360-0.jpg"
      >
        <source
          src="https://assets.mixkit.co/videos/40680/40680-360.mp4"
          type="video/mp4"
        />
      </video>
      <div className="video-spot" id="videoSpot" />
      <div className="wrap hero-inner">
        
        <h1 id="heroHeading" />
        <p className="sub">From Business Setup &amp; EOR to dedicated HR Services and IT &amp; SAP solutions — we help organizations operate efficiently, stay compliant, and grow faster. Your success starts here.</p>
        <div className="hero-ctas">
          <a
            href="#what-we-do"
            className="btn-primary magnetic"
            data-cursor="click"
          >
            Explore our solutions
          </a>
          <a href="/contact-us" className="btn-ghost-light">
            Talk to us
          </a>
        </div>
        <div className="svc-ticker">
          <div className="svc-ticker-track">
            <span>EOR</span>
            <b>✳</b>
            <span>HR Services</span>
            <b>✳</b>
            <span>Business Setup</span>
            <b>✳</b>
            <span>IT Services</span>
            <b>✳</b>
            <span>EOR</span>
            <b>✳</b>
            <span>HR Services</span>
            <b>✳</b>
            <span>Business Setup</span>
            <b>✳</b>
            <span>IT Services</span>
            <b>✳</b>
            <span>EOR</span>
            <b>✳</b>
            <span>HR Services</span>
            <b>✳</b>
            <span>Business Setup</span>
            <b>✳</b>
            <span>IT Services</span>
            <b>✳</b>
          </div>
        </div>
      </div>
      <div className="scroll-cue">
        <span className="line" />
        Scroll to explore
      </div>
      <div
        className="float-badge"
        id="heroBadge1"
        style={{ top: "22%", right: "7%" }}
      >
        <span className="icon-badge wash-dark" data-icon="check" />
        Fast onboarding
      </div>
      <div
        className="float-badge delay1"
        id="heroBadge2"
        style={{ bottom: "16%", right: "11%" }}
      >
        <span className="icon-badge wash-dark" data-icon="chart" />
        India-ready
      </div>
    </section>
  );
}
