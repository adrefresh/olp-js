import SectionHead from "../ui/SectionHead";

const POINTS = [
  ["01", "Operational clarity", "Teams replace fragmented workflows with clearer ownership, repeatable routines and visible execution."],
  ["02", "Connected functions", "People, technology and process support work together instead of becoming another layer of complexity."],
  ["03", "Room to grow", "Operational foundations are designed to support the next stage, not just solve today’s pressure."],
];

export default function StoryPoints() {
  return (
    <section className="ux-sec t0">
      <div className="ux-wrap">
        <SectionHead eyebrow="The work behind the work" title="Every story starts with friction." />
        <div className="ux-grid ux-g3">
          {POINTS.map(([n, t, d], i) => (
            <article className="ux-card ux-r" style={{ ["--i" as string]: i }} key={n}>
              <span className="ux-num">{n}</span>
              <h3>{t}</h3>
              <p style={{ color: "var(--mu)", lineHeight: 1.7 }}>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
