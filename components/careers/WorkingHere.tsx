import SectionHead from "../ui/SectionHead";

export default function WorkingHere() {
  return (
    <section className="ux-sec t0" id="working-here">
      <div className="ux-wrap ux-split">
        <SectionHead eyebrow="Working here" title="Quiet, important work." />
        <div className="ux-two ux-r" style={{ ["--i" as string]: 1 }}>
          <p>Our work is quiet and important. When we do it well, a founder hires without worry, a payroll goes out on the right day and a server move happens over a weekend nobody notices.</p>
          <p>That suits people who like things done properly and would rather fix the root cause than close a ticket.</p>
        </div>
      </div>
    </section>
  );
}
