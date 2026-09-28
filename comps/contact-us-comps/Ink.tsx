export default function Ink() {
  return (
  <section className="ink">
    <div className="wrap">
      <span className="eyebrow">What happens next</span>
      <h2 className="reveal" style={{ fontSize: "clamp(3rem,6vw,6rem)", maxWidth: "8ch", margin: "1rem 0 3rem" }}>Simple from here.</h2>
      <div className="steps">
        <article className="step reveal">
          <b>01 / READ</b>
          <h3>We get the context.</h3>
          <p>A real human reads the brief and finds the right person to respond.</p>
        </article>
        <article className="step reveal">
          <b>02 / TALK</b>
          <h3>We ask the good questions.</h3>
          <p>A focused first conversation, with no jargon and no sales theatre.</p>
        </article>
        <article className="step reveal">
          <b>03 / MAP</b>
          <h3>We chart the move.</h3>
          <p>If there’s a fit, we make a simple, practical plan together.</p>
        </article>
      </div>
    </div>
  </section>
  );
}
