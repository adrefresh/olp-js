import SectionHead from "../ui/SectionHead";

export default function Location() {
  return (
    <section className="ux-sec t2" id="where">
      <div className="ux-wrap ux-split ux-loc">
        <div className="ux-r">
          <SectionHead eyebrow="Where we are" title="Hyderabad, India." />
          <address className="ux-loc-addr">
            1102D, Manjeera Trinity Corporate,
            <br />
            JNTU - HiTech City Road, Kukatpally,
            <br />
            Hyderabad - 500072, Telangana, India
          </address>
        </div>
        <div className="ux-loc-map ux-r" style={{ ["--i" as string]: 1 }}>
          <iframe
            title="OpsLogic office: 1102D, Manjeera Trinity Corporate, JNTU - HiTech City Road, Kukatpally, Hyderabad"
            src="https://www.google.com/maps?q=17.4943,78.3924&z=16&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
