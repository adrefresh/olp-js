import React from "react";

export default function Hero() {
  return (
  <>
    <section className="hero">
      <i className="orb">
      </i>
      <div className="wrap hero-copy reveal">
        <span className="eyebrow">
          Not your usual vendor
        </span>
        <h1>
          We make the
          <em>
            backstage
          </em>
          feel like a superpower.
        </h1>
        <p>
          OpsLogic is an operations partner for teams with big plans and zero patience for busywork. We untangle the essentials so ambitious businesses can move with momentum.
        </p>
        <div className="hero-actions">
          <a className="button" href="#manifesto">
            Our manifesto ↓
          </a>
          <a className="button dark" href="/contact-us">
            Meet the team ↗
          </a>
        </div>
      </div>
    </section>
    <div className="ticker">
      <div className="ticker-inner">
        Build with intent
        <b>
          ✳
        </b>
        Think in systems
        <b>
          ✳
        </b>
        Make space for growth
        <b>
          ✳
        </b>
        Build with intent
        <b>
          ✳
        </b>
        Think in systems
        <b>
          ✳
        </b>
        Make space for growth
        <b>
          ✳
        </b>
      </div>
    </div>
  </>

  );
}
