import SectionHead from "../ui/SectionHead";

export default function Story() {
  return (
    <section className="ux-sec t0" id="story">
      <div className="ux-wrap ux-split">
        <SectionHead eyebrow="Our story" title="Three founders. One team." />
        <div className="ux-two ux-r" style={{ ["--i" as string]: 1 }}>
          <p>
            OpsLogic was <mark>established in 2022</mark> by <mark>three founders</mark> with different backgrounds. Phani and Niranjan each spent more than twenty years in digital advertising operations, building and
            running offshore teams for global companies. Kavya came from HR and people operations.
          </p>
          <p>
            They started OpsLogic to help organisations establish and grow in India: incorporation, regulatory compliance, operational design and day-to-day execution. Today that sits alongside HR, payroll and IT
            services, so one team can look after the whole picture. Each founder leads a different part of the company, so the people you work with are the people who built it.
          </p>
        </div>
      </div>
    </section>
  );
}
