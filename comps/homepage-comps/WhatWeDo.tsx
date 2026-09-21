export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="soft-zone">
      <div
        className="blob"
        style={{
          width: "200px",
          height: "200px",
          background: "var(--orange-wash)",
          top: "10%",
          right: "-70px",
          animationDelay: ".6s",
        }}
      />
      <div className="wrap wwd-wrap">
        <div className="services-head reveal">
          <div>
            <span className="eyebrow orange">What we do</span>
            <h2>Solutions that move your business forward.</h2>
          </div>
        </div>
        <svg
          className="wwd-thread"
          viewBox="0 0 1000 220"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M60,40 C300,140 700,-20 940,90"
            fill="none"
            stroke="var(--blue)"
            strokeWidth="2"
          />
        </svg>
        <div className="wwd-grid reveal">
          <div className="wwd-card">
            <span className="icon-badge wash-blue" data-icon="shield" />
            <span className="wwd-tag">EOR</span>
            <h3>Build Your Team in India</h3>
            <p>
              Hire and manage employees in India through our EOR solution, with
              support across employment, payroll, HR administration and
              compliance.
            </p>
            <a href="/services#eor" data-cursor="click">
              Explore EOR
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="wwd-card">
            <span className="icon-badge wash-orange" data-icon="hiring" />
            <span className="wwd-tag">HR Services</span>
            <h3>Build a Stronger Workforce</h3>
            <p>
              From recruitment and onboarding to HR operations, payroll and
              employee support, we help you create people processes that support
              growth.
            </p>
            <a href="/services#hr" data-cursor="click">
              Explore HR
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="wwd-card">
            <span className="icon-badge wash-blue" data-icon="operations" />
            <span className="wwd-tag">Business Setup</span>
            <h3>Establish Your Business With Confidence</h3>
            <p>
              Get the support you need to establish and operationalise your
              business in India — from initial setup to ongoing business
              support.
            </p>
            <a href="/services#business-setup" data-cursor="click">
              Explore Business Setup
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
          <div className="wwd-card">
            <span className="icon-badge wash-orange" data-icon="it" />
            <span className="wwd-tag">IT Services</span>
            <h3>Enable Your Business With Technology</h3>
            <p>
              From IT infrastructure and support to technology solutions, we
              help create a reliable technology environment for your business.
            </p>
            <a href="/services#it" data-cursor="click">
              Explore IT
              <svg viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
