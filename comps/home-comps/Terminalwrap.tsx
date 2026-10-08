const STATS = [
  { n: "500+", label: "Growth Stories" },
  { n: "300+", label: "Foreign Companies Supported" },
  { n: "200+", label: "One-stop Solutions" },
  { n: "13+", label: "Years of Trust" },
];

export default function Terminalwrap() {
  return (
    <section id="who-we-serve" className="text-center">
      <div className="wrap reveal">
        <span className="eyebrow orange justify-center">Who we serve</span>
        <div className="serve-grid mt-8">
          {STATS.map((s) => (
            <div className="serve-card" key={s.label}>
              {/* <div className="text-[2rem] font-extrabold text-(--blue)">{s.n}</div> */}
              <p className="font-semibold">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
