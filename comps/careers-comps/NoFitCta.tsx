export default function NoFitCta() {
  return (
    <section>
      <div className="wrap card reveal" style={{ background: "#ffece0" }}>
        <span className="eyebrow orange">No perfect fit listed?</span>
        <h2 style={{ margin: "1rem 0", maxWidth: "14ch" }}>
          Make a case for yourself.
        </h2>
        <p className="muted">
          Tell us what you do brilliantly and why you want in.
        </p>
        <a className="button dark" href="/contact-us">
          Say hello ↗
        </a>
      </div>
    </section>
  );
}
