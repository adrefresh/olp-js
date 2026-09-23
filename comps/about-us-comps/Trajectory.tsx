const VALUES = [
  { t: "Innovation in Solutions", d: "We embrace bold thinking to streamline business setup, HR, and IT — delivering scalable, future-ready solutions that help your operations stay ahead." },
  { t: "Integrity and Visibility", d: "We prioritize clear, honest communication and ethical practices — so you always understand our actions and how they support your success." },
  { t: "Client-Centric", d: "Your goals are our blueprint. We listen, align, and act as an extension of your team — ensuring every step is purpose-driven and personalized." },
  { t: "Operational Excellence", d: "From processes to execution, we apply precision and rigor to every task — built not only to be efficient, but to last and scale." },
  { t: "Embedded Collaboration", d: "We work alongside your team — not apart from it — fostering real-time alignment and outcomes that are stronger because they're built together." },
  { t: "Adaptability", d: "We're agile and responsive, evolving with your business needs so every solution remains relevant, resilient, and future-focused." },
];

export default function Trajectory() {
  return (
    <section id="values">
      <div className="wrap">
        <span className="eyebrow reveal">Our values</span>
        <h2 className="reveal" style={{ margin: "1rem 0 2.5rem", maxWidth: "18ch" }}>What guides how we work.</h2>
        <div className="timeline reveal">
          {VALUES.map((v) => (
            <article key={v.t}>
              <h3>{v.t}</h3>
              <p className="muted">{v.d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
