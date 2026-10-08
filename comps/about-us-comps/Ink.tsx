export default function Ink() {
  return (
    <section className="ink how-we-work">
      <div className="wrap how-we-work-layout">
        <div className="section-heading narrow-heading how-we-work-heading">
          <span className="eyebrow">How we work</span>
          <h2>
            Embedded.<br />
            Flexible.<br />
            Accountable.
          </h2>
        </div>

        <div className="steps-grid">
          <article className="step-card">
            <span className="step-number" aria-label="Step 1">01</span>
            <h3>Embedded</h3>
            <p>We work closely with your team and existing workflows.</p>
          </article>
          <article className="step-card active">
            <span className="step-number" aria-label="Step 2">02</span>
            <h3>Flexible</h3>
            <p>Solutions adapt to your business, timelines, and changing requirements.</p>
          </article>
          <article className="step-card">
            <span className="step-number" aria-label="Step 3">03</span>
            <h3>Accountable</h3>
            <p>We take ownership of execution, consistency, and measurable outcomes.</p>
          </article>
        </div>
      </div>
    </section>
  );
}
