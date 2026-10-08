export default function Wrap() {
  return (
    <section className="our-approach" id="approach">
      <div className="wrap approach-shell">
        <div className="section-heading">
          <span className="eyebrow">Our approach</span>
          <h2>
            Built around clarity,<br />
            control and momentum.
          </h2>
          <p className="approach-copy">
            We bring together the right mix of people, processes, and technology to create a connected operating model that drives efficiency, simplifies complexity, and keeps your business moving forward.
          </p>
        </div>

        <div className="approach-visual" aria-label="OpsLogic operating model">
          <div className="approach-orbit approach-orbit-one" />
          <div className="approach-orbit approach-orbit-two" />
          <div className="core-circle">OpsLogic</div>
          <div className="orbit orbit-one"><span aria-hidden="true">◉</span><strong>Clarity</strong><small>Clear direction.<br />Better decisions.</small></div>
          <div className="orbit orbit-two"><span aria-hidden="true">▦</span><strong>Structure</strong><small>Built for<br />scale.</small></div>
          <div className="orbit orbit-three"><span aria-hidden="true">↗</span><strong>Ownership</strong><small>We take it<br />personally.</small></div>
          <div className="orbit orbit-four"><span aria-hidden="true">➜</span><strong>Momentum</strong><small>Maintain pace.<br />Drive growth.</small></div>
          <div className="orbit orbit-five"><span aria-hidden="true">ϟ</span><strong>Execution</strong><small>Turn plans into<br />progress.</small></div>
        </div>

      </div>
    </section>
  );
}
