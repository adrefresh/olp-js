export default function Manifesto() {
  return (
    <section id="manifesto">
      <div className="wrap split">
        <div className="reveal">
          <span className="eyebrow orange">The OpsLogic DNA</span>
          <h2 style={{ marginTop: "1rem" }}>Less friction. More forward.</h2>
          <p className="muted">
            Our work lives in the unglamorous, high-impact details: the
            handoffs, systems, people and routines that make growth sustainable.
          </p>
          <a className="button" href="/services">
            See what we solve →
          </a>
        </div>
        <div className="visual reveal">
          <span className="pill one">✦ Strategy sync</span>
          <span className="pill two">System: live</span>
          <svg viewBox="0 0 400 300" fill="none">
            <circle
              cx="200"
              cy="150"
              r="78"
              fill="#fff"
              stroke="#0b0c10"
              strokeWidth="3"
            />
            <path
              d="M126 150h148M200 76v148"
              stroke="#18a7e0"
              strokeWidth="3"
            />
            <circle
              cx="200"
              cy="150"
              r="30"
              fill="#ff8a1e"
              stroke="#0b0c10"
              strokeWidth="3"
            />
            <path d="M186 150l10 10 20-23" stroke="#0b0c10" strokeWidth="5" />
          </svg>
        </div>
      </div>
    </section>
  );
}
