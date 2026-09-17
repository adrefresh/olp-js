import React from "react";

export default function LifeHere() {
  return (
  <section>
    <div className="wrap split">
      <div className="reveal">
        <span className="eyebrow">
          Life here
        </span>
        <h2 style={{'marginTop': '1rem'}}>
          Work with energy, not theatre.
        </h2>
        <p className="muted">
          We care about focused work, honest feedback, flexible ways of collaborating and the occasional very passionate debate about fonts.
        </p>
      </div>
      <div className="grid two">
        <div className="card reveal">
          <p className="metric">
            ∞
          </p>
          <h3>
            room to grow
          </h3>
        </div>
        <div className="card reveal">
          <p className="metric">
            2
          </p>
          <h3>
            global hubs
          </h3>
        </div>
        <div className="card reveal">
          <p className="metric">
            1
          </p>
          <h3>
            shared mission
          </h3>
        </div>
        <div className="card reveal">
          <p className="metric">
            100%
          </p>
          <h3>
            real people
          </h3>
        </div>
      </div>
    </div>
  </section>

  );
}
