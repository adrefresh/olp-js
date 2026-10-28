import SectionHead from "../ui/SectionHead";
import KekaJobs from "./KekaJobs";
import MailButton from "./MailButton";

export default function OpenRoles() {
  return (
    <section className="ux-sec t1" id="open-roles">
      <div className="ux-wrap">
        <SectionHead eyebrow="Open roles" title="Open roles" />
        <KekaJobs />
        <p className="ux-lead ux-r">Don&apos;t see the right role? Send your CV anyway. We read everything.</p>
        <div className="ux-btns">
          <MailButton user="hello" domain="opslogic.team" subject="Application: CV">
            Send your CV <span aria-hidden="true">↗</span>
          </MailButton>
        </div>
      </div>
    </section>
  );
}
