import React from "react";

export default function Faq() {
  return (
  <section style={{'background': '#e9f8ff'}}>
    <div className="wrap">
      <span className="eyebrow">
        Still curious?
      </span>
      <h2 className="reveal" style={{'maxWidth': '13ch', 'margin': '1rem 0'}}>
        A quick answer before a smart conversation.
      </h2>
      <div className="accordion reveal">
        <div className="faq">
          <button>
            Can we start with one service?
            <span>
              +
            </span>
          </button>
          <div className="answer">
            Absolutely. Most relationships begin with one urgent need and grow from there when it makes sense.
          </div>
        </div>
        <div className="faq">
          <button>
            Do you work with distributed teams?
            <span>
              +
            </span>
          </button>
          <div className="answer">
            Yes. We are built around clear systems and flexible collaboration across locations.
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}
