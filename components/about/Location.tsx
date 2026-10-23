import SectionHead from "../ui/SectionHead";

export default function Location() {
  return (
    <section className="ux-sec t2" id="where">
      <div className="ux-wrap ux-split">
        <SectionHead eyebrow="Where we are" title="Hyderabad, India." />
        <div className="ux-r" style={{ ["--i" as string]: 1 }}>
          <div className="ux-ph" style={{ marginTop: 0 }}>
            Address to be added
          </div>
        </div>
      </div>
    </section>
  );
}
