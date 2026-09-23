const SERVICES = [
  { num: "01", tag: "Employer of Record", title: "EOR", desc: "Hire and manage employees in India, compliantly, without setting up an entity.", href: "/services/eor" },
  { num: "02", tag: "People & Payroll", title: "HR Services", desc: "Recruitment, onboarding, HR operations, payroll and employee support.", href: "/services/hr" },
  { num: "03", tag: "Entity & Operations", title: "Business Setup", desc: "Establish and operationalise your business in India, end to end.", href: "/services/business-setup" },
  { num: "04", tag: "Infrastructure & Support", title: "IT Services", desc: "IT infrastructure, support and technology solutions that just work.", href: "/services/it" },
];

export default function WhatWeOffer() {
  return (
    <section id="services">
      <div className="wrap">
        <span className="eyebrow orange reveal">Our services</span>
        <h2 className="reveal" style={{ margin: "1rem 0 2.5rem" }}>Four ways we move your business.</h2>
        <div className="hl-list reveal">
          {SERVICES.map((s) => (
            <a className="hl-row" href={s.href} data-cursor="click" key={s.num}>
              <span className="hl-num">{s.num}</span>
              <div className="hl-body">
                <span className="hl-tag">{s.tag}</span>
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
