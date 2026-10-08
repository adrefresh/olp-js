export default function Statement() {
  return (
  <section className="statement">
    <div className="wrap statement-layout">
      <div className="statement-intro reveal">
        <span className="eyebrow statement-eyebrow">Who we are</span>
        <h2>
          Strong<br />
          operations.<br />
          <span>Strong</span><br />
          outcomes<span className="statement-period">.</span>
        </h2>
        <p>We strengthen the systems, processes, and execution layers that help growing businesses run with clarity and deliver stronger outcomes.</p>
        <a className="statement-action" href="#approach">
          <span aria-hidden="true">↗</span>
          Discover our approach
        </a>
      </div>

      <div className="statement-model reveal" aria-label="OpsLogic operating model">
        <div className="statement-model-ring" aria-hidden="true" />
        <ol className="statement-flow" aria-label="From operations to outcomes">
          <li className="statement-node statement-node-dark"><span>01</span>Operations</li>
          <li className="statement-node"><span>02</span>Systems</li>
          <li className="statement-node"><span>03</span>Processes</li>
          <li className="statement-node statement-node-execution"><span>04</span>Execution</li>
          <li className="statement-node statement-node-dark"><span>05</span>Outcomes</li>
        </ol>
        <ul className="statement-model-labels" aria-label="Operating model outcomes">
          <li>Operations</li>
          <li>Systems</li>
          <li>Execution</li>
          <li>Outcomes</li>
        </ul>
      </div>
    </div>
  </section>
  );
}
