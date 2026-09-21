export default function HowWeShowUp() {
  return (
    <section className="dark-zone">
      <div className="wrap">
        <span className="eyebrow orange">How we show up</span>
        <h2
          className="reveal"
          style={{ maxWidth: "13ch", margin: "1rem 0 3rem" }}
        >
          Serious about outcomes. Playful about everything else.
        </h2>
        <div className="grid three">
          <article className="card reveal">
            <span className="number">01 / OWN IT</span>
            <h3>Real partnership</h3>
            <p>
              We work inside the problem, not around it. Your goals become the
              brief.
            </p>
          </article>
          <article className="card reveal">
            <span className="number">02 / MAKE IT CLEAR</span>
            <h3>No fog machines</h3>
            <p>
              Direct communication, visible work and decisions with a point of
              view.
            </p>
          </article>
          <article className="card reveal">
            <span className="number">03 / KEEP EVOLVING</span>
            <h3>Built for next</h3>
            <p>
              We design for the team you are becoming, not the spreadsheet you
              started with.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
