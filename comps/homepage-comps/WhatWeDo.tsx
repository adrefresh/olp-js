const SERVICES = [
  { num: "01", tag: "EOR", title: "Build Your Team in India", desc: "Hire and manage employees in India through our EOR solution, with support across employment, payroll, HR administration and compliance.", href: "/services/eor" },
  { num: "02", tag: "HR Services", title: "Build a Stronger Workforce", desc: "From recruitment and onboarding to HR operations, payroll and employee support, we help you create people processes that support growth.", href: "/services/hr" },
  { num: "03", tag: "Business Setup", title: "Establish Your Business With Confidence", desc: "Get the support you need to establish and operationalise your business in India — from initial setup to ongoing business support.", href: "/services/business-setup" },
  { num: "04", tag: "IT Services", title: "Enable Your Business With Technology", desc: "From IT infrastructure and support to technology solutions, we help create a reliable technology environment for your business.", href: "/services/it" },
];

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="soft-zone">
      <div className="blob" style={{ width: "200px", height: "200px", background: "var(--orange-wash)", top: "10%", right: "-70px", animationDelay: ".6s" } as React.CSSProperties} />
      <div className="wrap">
        <div className="services-head reveal">
          <div>
            <span className="eyebrow orange">What we do</span>
            <h2>Solutions that move your business forward.</h2>
          </div>
        </div>
        <div className="hl-list reveal">
          {SERVICES.map((s) => (
            <a className="hl-row" href={s.href} data-cursor="click" key={s.num}>
              <span className="hl-num">{s.num}</span>
              <div className="hl-body">
                <span className="hl-tag !text-lg md:!text-lg font-bold tracking-[0.06em]">
  {s.tag}
</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <span className="hl-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
