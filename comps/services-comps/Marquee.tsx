const WORDS = ["HR OPERATIONS", "BUSINESS OPERATIONS", "IT SERVICES"];

export default function Marquee() {
  const run = [...WORDS, ...WORDS, ...WORDS];
  return (
  <div className="marquee">
    <div className="marquee-track">
      {run.map((w, i) => (
        <span key={i}>{w}<b>✦</b></span>
      ))}
    </div>
  </div>
  );
}
