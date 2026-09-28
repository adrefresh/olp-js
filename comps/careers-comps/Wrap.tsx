export default function Wrap() {
  return (
  <section style={{ background: "#e6f7ff" }}>
    <div className="wrap">
      <span className="eyebrow">Cross-industry exposure</span>
      <h2 className="reveal" style={{ fontSize: "clamp(3rem,6vw,6rem)", maxWidth: "9ch", margin: "1rem 0" }}>One career. Many industries.</h2>
      <p className="muted reveal" style={{ maxWidth: "52ch", fontSize: "1.1rem" }}>Because we support clients across industries, your work connects you with real-world challenges across varied sectors, giving you a broader understanding of how your skills apply and evolve.</p>
      <div className="industry-line reveal">
        <span>Technology</span>
        <span>E-commerce</span>
        <span>Healthcare</span>
        <span>Sports</span>
        <span>Hospitality</span>
        <span>More</span>
      </div>
    </div>
  </section>
  );
}
