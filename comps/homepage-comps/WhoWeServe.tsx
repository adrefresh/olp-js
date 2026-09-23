export default function WhoWeServe() {
  return (
    <section id="who-we-serve" className="dark-zone" style={{ textAlign: "center" }}>
      <div className="wrap reveal" style={{marginBottom:"20%"}}>
        <span className="eyebrow orange" style={{ justifyContent: "center" }}>Who we serve</span>
        <div id="flipCycle" className="flip-cycle" style={{ margin: "1.5rem auto 0", maxWidth: "22ch", fontSize: "clamp(5rem,2vw,2rem)", fontWeight: 800 }}>
          <p className="flip-line show">Trusted partner for global growth</p>
          <p className="flip-line">Empowering businesses with smarter solutions</p>
          <p className="flip-line">Helping global businesses build stronger teams</p>
        </div>
      </div>
    </section>
  );
}
