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
        <p className="sub">
          From EOR and HR to Business Setup and IT Services, OpsLogic brings the
          expertise, people and solutions you need to build and grow your
          business in India.
        </p>
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
  
    
     
    </section>
  );
}
