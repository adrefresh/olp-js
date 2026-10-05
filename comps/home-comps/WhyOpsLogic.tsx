const PANELS = [
  { n: "01", cls: "why-p1", t: "Business-Focused", short: "Aligned with your goals and growth plans.", long: "Every engagement starts from your targets, not our template — so the work always points at what your business is trying to achieve." },
  { n: "02", cls: "why-p2", t: "Connected Expertise", short: "People, HR, tech and business support, together.", long: "One team across hiring, HR, technology and operations, so nothing falls between vendors and everything moves in the same direction." },
  { n: "03", cls: "why-p3", t: "Flexible Solutions", short: "Choose what you need, expand as you grow.", long: "Start with a single service today and add more as you scale — no rip-and-replace, no long re-onboarding." },
  { n: "04", cls: "why-p4", t: "Dedicated Partnership", short: "A team alongside you at every stage.", long: "Real people who know your business, work inside your rhythm, and stay with you from first setup to steady growth." },
];

export default function WhyOpsLogic() {
  return (
    <section id="why" className="why-sec">
      {/* Semi-transparent brand logo sitting behind the section */}
      <div className="why-logo" aria-hidden="true" />

      <div className="wrap why-inner">
        <span className="eyebrow reveal text-[.75rem]!">Why OpsLogic</span>
        <h2 className="reveal mt-4 mb-[1.2rem] max-w-[22ch]">
          Trusted by Growing Businesses Worldwide
        </h2>
        <p className="why-intro reveal text-[1.05rem]!">
          <strong>Built Around Your Business.</strong> We don&apos;t believe in one-size-fits-all solutions. We understand your goals, assess what you need and bring together the right capabilities to create a solution that fits.
        </p>

        <div className="why-strip reveal">
          {PANELS.map((p) => (
            <div className={`why-panel ${p.cls}`} tabIndex={0} key={p.n}>
              <span className="why-num">{p.n}</span>
              <h3>{p.t}</h3>
              <p className="why-short">{p.short}</p>
              <p className="why-long">{p.long}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
