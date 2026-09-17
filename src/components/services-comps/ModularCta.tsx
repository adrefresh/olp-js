import React from "react";

export default function ModularCta() {
  return (
  <section>
    <div className="wrap split">
      <div className="visual reveal">
        <span className="pill one">
          Your team
        </span>
        <span className="pill two">
          OpsLogic layer
        </span>
        <svg viewBox="0 0 400 300">
          <path d="M80 190 C140 70 230 240 320 110" stroke="#0b0c10" strokeWidth="8" fill="none">
          </path>
          <circle cx="80" cy="190" r="19" fill="#ff8a1e">
          </circle>
          <circle cx="320" cy="110" r="19" fill="#18a7e0">
          </circle>
        </svg>
      </div>
      <div className="reveal">
        <span className="eyebrow">
          Not one-size-fits-all
        </span>
        <h2 style={{'marginTop': '1rem'}}>
          Mix. Match. Make it yours.
        </h2>
        <p className="muted">
          Start with one knot to untangle. Add support as your company grows. Our work is modular by design and always anchored in what matters to you.
        </p>
        <a className="button" href="/contact-us">
          Build your support stack ↗
        </a>
      </div>
    </div>
  </section>

  );
}
