import React from "react";

export default function WhatHappensNext() {
  return (
  <section className="dark-zone">
    <div className="wrap">
      <span className="eyebrow orange">
        What happens next
      </span>
      <div className="grid three" style={{'marginTop': '2rem'}}>
        <article className="card reveal">
          <span className="number">
            01 / READ
          </span>
          <h3>
            We get the context
          </h3>
          <p>
            A real human reads the brief and finds the right person to respond.
          </p>
        </article>
        <article className="card reveal">
          <span className="number">
            02 / TALK
          </span>
          <h3>
            We ask the good questions
          </h3>
          <p>
            A focused first conversation, with no jargon and no sales theatre.
          </p>
        </article>
        <article className="card reveal">
          <span className="number">
            03 / MAP
          </span>
          <h3>
            We chart the move
          </h3>
          <p>
            If there is a fit, we make a simple, practical plan together.
          </p>
        </article>
      </div>
    </div>
  </section>

  );
}
