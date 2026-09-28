const STATS = [
  { n: "500+", label: "Growth Stories" },
  { n: "300+", label: "Foreign Companies Supported" },
  { n: "200+", label: "One-stop Solutions" },
  { n: "13+", label: "Years of Trust" },
];

export default function Terminalwrap() {
  return (
    <section id="who-we-serve" style={{ textAlign: "center" }}>
      <div className="wrap reveal">
        <span className="eyebrow orange" style={{ justifyContent: "center" }}>Who we serve</span>
        <div className="serve-grid" style={{ marginTop: "2rem" }}>
          {STATS.map((s) => (
            <div className="serve-card" key={s.label}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--blue)" }}>{s.n}</div>
              <p style={{ fontWeight: 600 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
