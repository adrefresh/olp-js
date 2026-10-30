import SectionHead from "../ui/SectionHead";
import Testimonials from "./Testimonials";
import { TESTIMONIALS } from "../../lib/testimonials";

/** Reads content/testimonials/*.md at build time and hands the quotes to the client carousel. */
export default function TestimonialsSection() {
  return (
    <section className="ux-sec t2" id="testimonials">
      <div className="ux-wrap">
        <SectionHead eyebrow="What clients say" title="In their words." />
        <Testimonials items={TESTIMONIALS} />
      </div>
    </section>
  );
}
