import { SERVICES, svcHref, type Cat } from "../../lib/services";
import SectionHead from "../ui/SectionHead";

/** "Often paired with": up to four other services from the same group. */
export default function RelatedServices({ slug, cat }: { slug: string; cat: Cat }) {
  const group = cat.groups.find((g) => g.items.includes(slug));
  const related = (group?.items ?? []).filter((x) => x !== slug).slice(0, 4);
  if (!related.length) return null;
  return (
    <section className="ux-sec t2">
      <div className="ux-wrap">
        <SectionHead eyebrow={group?.t ?? "Related"} title="Often paired with" />
        <div className="ux-chips ux-r" style={{ marginTop: "2rem" }}>
          {related.map((r) => (
            <a className="ux-chip" href={svcHref(r)} key={r}>
              {SERVICES[r].title} →
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
