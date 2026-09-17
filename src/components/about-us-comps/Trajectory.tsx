import React from "react";

export default function Trajectory() {
  return (
  <section>
    <div className="wrap split">
      <div className="reveal">
        <span className="eyebrow">
          Our trajectory
        </span>
        <h2 style={{'marginTop': '1rem'}}>
          Small enough to care. Wide enough to move.
        </h2>
        <div className="timeline">
          <article>
            <b>
              2019 — The spark
            </b>
            <p className="muted">
              OpsLogic launches with a belief that essential work deserves better design.
            </p>
          </article>
          <article>
            <b>
              2023 — The operating system
            </b>
            <p className="muted">
              We expand across people, IT, payroll, SAP and workspace support.
            </p>
          </article>
          <article>
            <b>
              Now — The momentum
            </b>
            <p className="muted">
              A cross-border team helping modern businesses make their next move.
            </p>
          </article>
        </div>
      </div>
      <div className="card reveal" style={{'background': '#e8f7fc'}}>
        <p className="metric">
          2
        </p>
        <h3>
          countries, one shared way of working
        </h3>
        <p>
          From Hyderabad to Scarborough, our ideas travel well because our processes do too.
        </p>
        <a className="button dark" href="/careers">
          Join the ride ↗
        </a>
      </div>
    </div>
  </section>

  );
}
