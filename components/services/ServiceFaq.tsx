import SectionHead from "../ui/SectionHead";
import Html from "../ui/Html";

export default function ServiceFaq({ faq, side }: { faq: { q: string; a: string }[]; side: boolean }) {
  const list = (
    <div className="ux-faq ux-r">
      {faq.map((f, i) => (
        <details key={i}>
          <summary>
            <Html html={f.q} />
          </summary>
          <Html as="p" html={f.a} />
        </details>
      ))}
    </div>
  );
  return (
    <section className="ux-sec t0 ux-corner">
      <div className={"ux-wrap " + (side ? "ux-split" : "ux-narrow")}>
        <div className={side ? "ux-stick" : ""}>
          <SectionHead eyebrow="FAQ" title="Questions we hear" />
        </div>
        {list}
      </div>
    </section>
  );
}
