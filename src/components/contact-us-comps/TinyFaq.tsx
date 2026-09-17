import React from "react";

export default function TinyFaq() {
  return (
  <section style={{'background': '#fff0df'}}>
    <div className="wrap">
      <span className="eyebrow orange">
        Tiny FAQ
      </span>
      <h2 className="reveal" style={{'margin': '1rem 0 2rem'}}>
        Before you hit send.
      </h2>
      <div className="accordion reveal">
        <div className="faq">
          <button>
            Do I need a fully formed brief?
            <span>
              +
            </span>
          </button>
          <div className="answer">
            No. A rough sketch is plenty. We can help turn it into the right question.
          </div>
        </div>
        <div className="faq">
          <button>
            Can you support an existing internal team?
            <span>
              +
            </span>
          </button>
          <div className="answer">
            Absolutely. We are designed to complement your team, not complicate it.
          </div>
        </div>
      </div>
    </div>
  </section>

  );
}
