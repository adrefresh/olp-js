import SectionHead from "../ui/SectionHead";
import Html from "../ui/Html";
import JsonLd from "../ui/JsonLd";
import { stripHtml } from "../../lib/seo";

export default function ServiceFaq({ faq }: { faq: { q: string; a: string }[]; side?: boolean }) {
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
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({ "@type": "Question", name: stripHtml(f.q), acceptedAnswer: { "@type": "Answer", text: stripHtml(f.a) } })),
  };
  return (
    <section className="ux-sec t0 ux-corner">
      <div className="ux-wrap ux-split">
        <div className="ux-stick">
          <SectionHead eyebrow="FAQ" title="Questions we hear" />
        </div>
        {list}
        {faq.length ? <JsonLd data={schema} /> : null}
      </div>
    </section>
  );
}
