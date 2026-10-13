export default function FlexibleWork() {
  return (
    <section>
      <div className="wrap split">
        <div className="visual reveal">
          <span className="pill one">Hyderabad</span>
          <span className="pill two">Scarborough</span>
          <svg viewBox="0 0 400 300">
            <path
              d="M76 210C170 50 250 260 332 80"
              stroke="#1ea7f0"
              strokeWidth="4"
              strokeDasharray="9 9"
              fill="none"
            />
            <circle cx="76" cy="210" r="20" fill="#ff6b1a" />
            <circle cx="332" cy="80" r="20" fill="#0b1b3a" />
          </svg>
        </div>
        <div className="reveal">
          <span className="eyebrow">Two hubs, wide reach</span>
          <h2 style={{ marginTop: "1rem" }}>
            Wherever your team works, we can work with it.
          </h2>
          <p className="muted">
            Our teams collaborate across borders, time zones and functions—so
            your operations feel joined-up even when your people are not in the
            same room.
          </p>
        </div>
      </div>
    </section>
  );
}
