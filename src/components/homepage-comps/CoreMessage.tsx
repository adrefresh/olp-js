import React from "react";

export default function CoreMessage() {
  return (
  <section className="soft-zone">
    <div className="blob" style={{'width': '220px', 'height': '220px', 'background': 'var(--blue-wash)', 'top': '-60px', 'left': '-60px'}}>
    </div>
    <div className="blob" style={{'width': '180px', 'height': '180px', 'background': 'var(--orange-wash)', 'bottom': '-50px', 'right': '-40px', 'animationDelay': '1.4s'}}>
    </div>
    <div className="wrap core-msg">
      <div className="core-orbit reveal" aria-hidden="true">
        <svg viewBox="0 0 120 120">
          <circle className="spin-slow" cx="60" cy="60" r="46" fill="none" stroke="var(--blue)" strokeWidth="1.5" strokeDasharray="3 7">
          </circle>
          <circle className="spin-rev" cx="60" cy="60" r="30" fill="none" stroke="var(--orange)" strokeWidth="1.5" strokeDasharray="2 6">
          </circle>
          <circle className="node-pulse" cx="60" cy="14" r="6" fill="var(--blue)">
          </circle>
          <circle className="node-pulse" cx="106" cy="60" r="5" fill="var(--orange)" style={{'animationDelay': '.4s'}}>
          </circle>
          <circle className="node-pulse" cx="60" cy="106" r="6" fill="var(--orange)" style={{'animationDelay': '.8s'}}>
          </circle>
          <circle className="node-pulse" cx="14" cy="60" r="5" fill="var(--blue)" style={{'animationDelay': '1.2s'}}>
          </circle>
          <circle cx="60" cy="60" r="12" fill="var(--ink)">
          </circle>
        </svg>
      </div>
      <span className="eyebrow reveal">
        Your business goals. Our expertise.
      </span>
      <h2 className="reveal" style={{'marginTop': '1rem'}}>
        Every business has a
        <span className="accent">
          vision for growth.
          <svg viewBox="0 0 220 10" preserveAspectRatio="none">
            <path className="underline-path" d="M2 7 Q 60 -2 110 6 T 218 5" fill="none" stroke="var(--orange)" strokeWidth="4" strokeLinecap="round">
            </path>
          </svg>
        </span>
      </h2>
      <p className="reveal">
        Whether you're entering India, building your team, establishing your operations or strengthening your technology, the right support can help you move forward faster and with greater confidence. OpsLogic brings the right expertise together to help you build strong foundations, enable efficient operations and create opportunities for sustainable growth.
      </p>
    </div>
  </section>

  );
}
