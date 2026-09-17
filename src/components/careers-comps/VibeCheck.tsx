import React from "react";

export default function VibeCheck() {
  return (
  <section className="dark-zone">
    <div className="wrap">
      <span className="eyebrow orange">
        Our vibe check
      </span>
      <div className="grid three" style={{'marginTop': '2rem'}}>
        <article className="card reveal">
          <h3>
            Own the room
          </h3>
          <p>
            Have a point of view. Bring receipts. Follow through.
          </p>
        </article>
        <article className="card reveal">
          <h3>
            Stay curious
          </h3>
          <p>
            Ask better questions before racing toward an answer.
          </p>
        </article>
        <article className="card reveal">
          <h3>
            Be human
          </h3>
          <p>
            Ambition gets better when it comes with generosity.
          </p>
        </article>
      </div>
    </div>
  </section>

  );
}
