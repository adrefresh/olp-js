import SectionHead from "../ui/SectionHead";

const WORK_WITH: [word: string, text: string][] = [
  ["Overseas", "Overseas startups and companies building a team in India."],
  ["Homegrown", "Indian startups and growing companies that need back office, HR and IT without building departments."],
  ["Established", "Established businesses outsourcing parts of HR, payroll or compliance."],
];

export default function WhoWeWorkWith() {
  return (
    <section className="ux-sec t1 ux-wwwsec" id="who-we-work-with">
      <div className="ux-wrap">
        <SectionHead eyebrow="Who we work with" title="Built for teams that would rather not build a department." />
      </div>
      <div className="ux-diag">
        {WORK_WITH.map(([word, t], i) => (
          <div className={"ux-dg d" + (i + 1) + " ux-r"} key={t}>
            <div className="ux-dg-in ux-wrap">
              <span className="ux-dg-l">
                <span className="ux-dg-n">0{i + 1}</span>
                <b className="ux-dg-w" aria-hidden="true">{word}</b>
              </span>
              <h3>{t}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
