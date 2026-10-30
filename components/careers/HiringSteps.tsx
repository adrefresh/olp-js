const STEPS = [
  ["Apply", "Send your CV and a few lines about why this role."],
  ["A first chat", "A short call. No trick questions."],
  ["A practical conversation", "A short exercise or a talk about real work you've done."],
  ["Meet the team", "Talk with the people you'd work with."],
  ["Decision", "We tell you within X days, either way."],
];

export default function HiringSteps() {
  return (
    <section className="ux-sec t3" id="how-we-hire">
      <div className="ux-wrap ux-split">
        <div className="ux-stick ux-r">
          <span className="ux-eyebrow">How we hire</span>
          <h2>Five steps, no surprises.</h2>
          <p className="ux-lead">Every step is short, and you always hear back, whatever the outcome.</p>
          <div className="ux-btns">
            <a className="ux-btn o" href="#open-roles">
              See open roles <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
        <ol className="ux-hire">
          {STEPS.map(([t, d], i) => (
            <li className="ux-card ux-r" style={{ ["--i" as string]: i }} key={t}>
              <span className="n">0{i + 1}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
