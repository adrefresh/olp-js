import SectionHead from "../ui/SectionHead";

const BELIEFS = [
  ["Operations should be boring.", "If our clients are thinking about payroll, filings or server logins, we've failed."],
  ["Plain answers beat clever ones.", "We tell you what we'd do, what it costs and what could go wrong."],
  ["Small beats scattered.", "One team that knows your business means fewer calls and fewer surprises."],
  ["People first.", "Behind every payroll run is someone waiting to be paid."],
];

export default function Beliefs() {
  return (
    <section className="ux-sec t1" id="believe">
      <div className="ux-wrap">
        <SectionHead eyebrow="What we believe" title="Four things we hold to." />
        <div className="ux-vb">
          {BELIEFS.map(([t, d], i) => (
            <div className={"ux-vt v" + (i + 1) + " ux-r"} style={{ ["--i" as string]: i }} key={t}>
              <span className="big">0{i + 1}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
