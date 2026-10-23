const INDUSTRIES = ["IT", "Manufacturing", "Automobile", "Power", "Hospitality", "Real estate"];
const ALSO = ["Pharma and healthcare", "Logistics and supply chain", "Retail and e-commerce", "Construction and infrastructure", "Education and training", "Financial services", "Food processing"];

export default function Industries() {
  return (
    <section className="ux-sec t0 ux-indsec" id="industries">
      <div className="ux-wrap ux-ind">
        <div className="ux-r">
          <span className="ux-eyebrow">Industries</span>
          <h2>Industries we work with</h2>
          <p className="ux-lead">
            Our clients come from IT, manufacturing, automobile, power, hospitality and real estate. Their needs differ, but the basics are the same: set up properly, hire well, pay on time and keep the systems running.
          </p>
          <p className="ux-also2">
            <b>Also a good fit:</b> {ALSO.join(", ")}.
          </p>
        </div>
        <ol className="ux-indlist ux-r" style={{ ["--i" as string]: 1 }}>
          {INDUSTRIES.map((x, i) => (
            <li key={x}>
              <span>0{i + 1}</span>
              {x}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
