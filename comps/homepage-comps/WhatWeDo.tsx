const SERVICES = [
  { num: "01", tag: "EOR", title: "Build Your Team in India", desc: "Expand your workforce in India without setting up a local entity. We manage contracts, payroll and legal compliance.", href: "/services/eor", bg: "linear-gradient(135deg,#18a7e0,#0b3d5c)" },
  { num: "02", tag: "HR Services", title: "Build a Winning Team", desc: "From recruitment and onboarding to payroll and employee support — efficient people processes that drive performance.", href: "/services/hr", bg: "linear-gradient(135deg,#ff8a1e,#c4432e)" },
  { num: "03", tag: "Business Setup", title: "Start Strong", desc: "Launch and structure your business the right way — company registration to compliance frameworks, handled.", href: "/services/business-setup", bg: "linear-gradient(135deg,#0b0c10,#2c2f36)" },
  { num: "04", tag: "IT Services", title: "Technology That Powers Growth", desc: "IT &amp; SAP expertise that streamlines operations, integrates systems, and delivers scalable infrastructure.", href: "/services/it", bg: "linear-gradient(135deg,#101820,#18a7e0)" },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do">
      <div className="wrap services-head reveal">
        <div>
          <span className="eyebrow orange">What we do</span>
          <h2>Business Setup, EOR, HR, IT &amp; SAP — All Under One Roof</h2>
        </div>
      </div>
      <div className="drag-strip reveal">
        {SERVICES.map((s) => (
          <div className="drag-panel" style={{ background: s.bg }} key={s.num}>
            <span className="num">{s.num}</span>
            <span className="eyebrow" style={{ background: "rgba(255,255,255,.15)", color: "#fff" }}>{s.tag}</span>
            <h3 style={{ color: "#fff", margin: "1rem 0 .7rem", fontSize: "1.5rem" }}>{s.title}</h3>
            <p style={{ color: "rgba(255,255,255,.85)", fontSize: ".92rem" }}>{s.desc}</p>
            <a href={s.href} data-cursor="click">Explore →</a>
          </div>
        ))}
      </div>
    </section>
  );
}
