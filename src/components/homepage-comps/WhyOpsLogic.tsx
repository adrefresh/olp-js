import React from "react";

export default function WhyOpsLogic() {
  return (
  <section id="why" className="dark-zone">
    <div className="wrap">
      <span className="eyebrow reveal">
        Why OpsLogic
      </span>
      <h2 className="reveal" style={{'margin': '1rem 0 2.4rem', 'maxWidth': '20ch'}}>
        Built around your business.
      </h2>
      <p className="reveal" style={{'color': 'var(--muted)', 'maxWidth': '70ch', 'marginBottom': '2.6rem'}}>
        We don't believe in one-size-fits-all solutions. We understand your goals, assess what you need and bring together the right capabilities to create a solution that fits your business.
      </p>
      <div className="why-grid reveal">
        <div className="why-card">
          <span className="why-idx">
            01
          </span>
          <h3>
            Business-Focused
          </h3>
          <p>
            Solutions aligned with your goals and growth plans.
          </p>
        </div>
        <div className="why-card">
          <span className="why-idx">
            02
          </span>
          <h3>
            Connected Expertise
          </h3>
          <p>
            People, HR, technology and business support working together.
          </p>
        </div>
        <div className="why-card">
          <span className="why-idx">
            03
          </span>
          <h3>
            Flexible Solutions
          </h3>
          <p>
            Choose what you need today and expand as your business grows.
          </p>
        </div>
        <div className="why-card">
          <span className="why-idx">
            04
          </span>
          <h3>
            Dedicated Partnership
          </h3>
          <p>
            A team that works alongside you at every stage.
          </p>
        </div>
      </div>
    </div>
  </section>

  );
}
