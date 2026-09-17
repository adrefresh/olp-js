import React from "react";

export default function OpenRoles() {
  return (
  <section id="openings" style={{'background': '#e9f8ff'}}>
    <div className="wrap">
      <span className="eyebrow">
        Open roles
      </span>
      <h2 className="reveal" style={{'margin': '1rem 0 2rem'}}>
        Find your next good challenge.
      </h2>
      <div className="jobs reveal">
        <a className="job" href="/contact-us">
          <span>
            <b>
              Talent Acquisition Specialist
            </b>
            <br />
            <small>
              Hyderabad · Full time · People
            </small>
          </span>
          <b>
            Apply ↗
          </b>
        </a>
        <a className="job" href="/contact-us">
          <span>
            <b>
              SAP Functional Consultant
            </b>
            <br />
            <small>
              Hybrid · Full time · Technology
            </small>
          </span>
          <b>
            Apply ↗
          </b>
        </a>
        <a className="job" href="/contact-us">
          <span>
            <b>
              Operations Associate
            </b>
            <br />
            <small>
              Hyderabad · Full time · Operations
            </small>
          </span>
          <b>
            Apply ↗
          </b>
        </a>
      </div>
    </div>
  </section>

  );
}
