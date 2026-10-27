import SectionHead from "../ui/SectionHead";

const QUERY = "Manjeera Trinity Corporate, KPHB Colony, Hyderabad";

export default function Location() {
  return (
    <section className="ux-sec t2" id="where">
      <div className="ux-wrap ux-split ux-loc">
        <div className="ux-r">
          <SectionHead eyebrow="Where we are" title="Hyderabad, India." />
          <address className="ux-loc-addr">
            Manjeera Trinity Corporate
            <br />
            KPHB Colony, Kukatpally
            <br />
            Hyderabad, Telangana 500072
          </address>
          <a
            className="ux-btn d"
            style={{ marginTop: "1.6rem" }}
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(QUERY)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get directions <span aria-hidden="true">↗</span>
          </a>
        </div>
        <div className="ux-loc-map ux-r" style={{ ["--i" as string]: 1 }}>
          <iframe
            title="OpsLogic office: Manjeera Trinity Corporate, KPHB Colony, Hyderabad"
            src={`https://www.google.com/maps?q=${encodeURIComponent(QUERY)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
