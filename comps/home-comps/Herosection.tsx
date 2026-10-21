export default function Herosection() {
  return (
  <section className="hero" id="heroSection">
    <video id="hero-video" autoPlay muted loop playsInline>
      <source src="/hero.mp4" type="video/mp4" />
      <source src="https://www.pexels.com/download/video/2325093/" type="video/mp4" />
    </video>
    <div className="hero-shade" aria-hidden="true" />
    <div className="video-spot" id="videoSpot" />
    <div className="wrap hero-inner pt-24!">
      {/* <span class="hero-tag">✦ Operations partner · Est. Hyderabad</span> */}
      <h1 id="heroHeading" />
      <p className="sub">Setting up a company. Hiring your first team in India. Running payroll without losing a weekend to it. Getting laptops, logins and servers sorted. We take care of all of it, so you can get back to the work you started the business for.</p>
      <div className="hero-ctas">
        <a href="#services" className="btn-primary magnetic" data-cursor="click">Explore our services</a>
        <a href="#contact" className="btn-ghost-light">Talk to us</a>
      </div>
    </div>
    <a className="hero-down" href="#who-we-are" aria-label="Scroll to the next section" data-cursor="click">
      <svg aria-hidden="true" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14" /><path d="M6 13l6 6 6-6" /></svg>
    </a>
  </section>
  );
}
