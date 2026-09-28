const STATEMENTS = [
  "Trusted partner for global growth",
  "Empowering businesses with smarter solutions",
  "Helping global businesses build stronger teams",
];

export default function WhoWeServe() {
  return (
    <section id="who-we-serve" style={{ textAlign: "center" }}>
      <div className="wrap reveal">
        <span className="eyebrow orange" style={{ justifyContent: "center" }}>Who we serve</span>
        <div className="serve-grid" style={{ marginTop: "2rem" }}>
          {STATEMENTS.map((s) => (
            <div className="serve-card" key={s}>
              <p>{s}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
