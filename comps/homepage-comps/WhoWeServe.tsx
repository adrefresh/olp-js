export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="dark-zone" style={{ textAlign: "center" }}>
      <div className="wrap reveal">
        <span className="eyebrow orange" style={{ justifyContent: "center" }}>Who we serve</span>
        <div id="flipCycle" className="flip-cycle" style={{ margin: "1.5rem auto 0", maxWidth: "22ch", minHeight: "6.6rem", fontSize: "clamp(1.6rem,4vw,2.6rem)", fontWeight: 800, lineHeight: 1.2 }}>
          <p className="flip-line show">Trusted partner for global growth</p>
          <p className="flip-line">Empowering businesses with smarter solutions</p>
          <p className="flip-line">Helping global businesses build stronger teams</p>
        </div>
      </div>
    </section>
  );
}
