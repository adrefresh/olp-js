import SectionHead from "../ui/SectionHead";

export default function OpenRoles() {
  return (
    <section className="ux-sec t1" id="open-roles">
      <div className="ux-wrap">
        <SectionHead eyebrow="Open roles" title="Open roles" />
        <div className="ux-ph ux-r">List openings here</div>
        <p className="ux-lead ux-r">Don&apos;t see the right role? Send your CV anyway. We read everything.</p>
        <div className="ux-btns">
          <a className="ux-btn d" href="mailto:hello@opslogic.team">
            Send your CV <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
