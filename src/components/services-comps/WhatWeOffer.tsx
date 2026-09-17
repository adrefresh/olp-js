import React from "react";

export default function WhatWeOffer() {
  return (
  <section id="services">
    <div className="wrap">
      <span className="eyebrow orange">
        Six ways we move
      </span>
      <h2 className="reveal" style={{'margin': '1rem 0 2.5rem'}}>
        Choose your adventure.
      </h2>
      <div className="grid three">
        <article className="card reveal">
          <span className="number">
            01 / OPERATE
          </span>
          <h3>
            Business Operations
          </h3>
          <p>
            Processes, workflows and daily execution with fewer dropped balls.
          </p>
        </article>
        <article className="card reveal">
          <span className="number">
            02 / CONNECT
          </span>
          <h3>
            IT Solutions
          </h3>
          <p>
            Secure infrastructure, helpful support and tools that play nicely together.
          </p>
        </article>
        <article className="card reveal">
          <span className="number">
            03 / GROW
          </span>
          <h3>
            Hiring Services
          </h3>
          <p>
            Recruitment journeys that bring in the right people, faster.
          </p>
        </article>
        <article className="card reveal">
          <span className="number">
            04 / PAY
          </span>
          <h3>
            Payroll Services
          </h3>
          <p>
            Accurate salaries, compliant filings and confidence on payday.
          </p>
        </article>
        <article className="card reveal">
          <span className="number">
            05 / OPTIMISE
          </span>
          <h3>
            SAP Services
          </h3>
          <p>
            Support and specialist expertise for systems that need to keep pace.
          </p>
        </article>
        <article className="card reveal">
          <span className="number">
            06 / GATHER
          </span>
          <h3>
            Shared Workspaces
          </h3>
          <p>
            Flexible, ready-to-work spaces for teams doing their best work together.
          </p>
        </article>
      </div>
    </div>
  </section>

  );
}
