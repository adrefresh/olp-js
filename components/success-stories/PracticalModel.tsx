import SectionHead from "../ui/SectionHead";

export default function PracticalModel() {
  return (
    <section className="ux-sec t3">
      <div className="ux-wrap ux-split">
        <SectionHead eyebrow="A practical model" title="We work inside the problem." />
        <div className="ux-glass ux-r ux-quote2" style={{ ["--i" as string]: 1 }}>
          <p>The goal is not to add another vendor. It is to create a reliable operational layer that works in sync with your team, priorities and timelines.</p>
          <p>That means practical systems, visible ownership and execution that keeps improving.</p>
        </div>
      </div>
    </section>
  );
}
