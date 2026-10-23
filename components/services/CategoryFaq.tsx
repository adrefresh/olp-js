import SectionHead from "../ui/SectionHead";
import type { Cat } from "../../lib/services";

export default function CategoryFaq({ faq }: { faq: Cat["faq"] }) {
  return (
    <section className="ux-sec t0 ux-corner">
      <div className="ux-wrap ux-split">
        <div className="ux-stick">
          <SectionHead eyebrow="FAQ" title="Questions we hear" />
        </div>
        <div className="ux-faq ux-r">
          {faq.map((f, i) => (
            <details key={i}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
