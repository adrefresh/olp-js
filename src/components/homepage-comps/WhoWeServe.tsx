import React from "react";

export default function WhoWeServe() {
  return (
  <section>
    <div className="wrap">
      <span className="eyebrow orange reveal">
        Who we serve
      </span>
      <h2 className="reveal" style={{'margin': '1rem 0 2.4rem', 'maxWidth': '26ch'}}>
        For businesses moving forward.
      </h2>
      <p className="reveal" style={{'color': 'var(--muted)', 'maxWidth': '70ch', 'marginBottom': '2.6rem'}}>
        Whether you're establishing your first presence in India or expanding an existing operation, OpsLogic provides solutions designed around your stage of growth.
      </p>
      <div className="serve-scatter reveal">
        <div className="serve-tile">
          <span className="serve-mark">
            01
          </span>
          <h3>
            Global Businesses
          </h3>
          <p>
            Build and manage teams in India with confidence.
          </p>
        </div>
        <div className="serve-tile">
          <span className="serve-mark">
            02
          </span>
          <h3>
            Growing Businesses
          </h3>
          <p>
            Strengthen your people, processes and technology as you scale.
          </p>
        </div>
        <div className="serve-tile">
          <span className="serve-mark">
            03
          </span>
          <h3>
            Established Businesses
          </h3>
          <p>
            Enhance operational capabilities with specialised expertise.
          </p>
        </div>
        <div className="serve-tile">
          <span className="serve-mark">
            04
          </span>
          <h3>
            New Ventures
          </h3>
          <p>
            Create the right foundation for your business journey.
          </p>
        </div>
      </div>
    </div>
  </section>

  );
}
