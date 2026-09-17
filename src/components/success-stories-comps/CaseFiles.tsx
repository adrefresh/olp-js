import React from "react";

export default function CaseFiles() {
  return (
  <section style={{'paddingTop': '2rem'}}>
    <div className="wrap">
      <div className="filterbar reveal">
        <button className="filter active" data-filter="all">
          All moves
        </button>
        <button className="filter" data-filter="people">
          People
        </button>
        <button className="filter" data-filter="systems">
          Systems
        </button>
        <button className="filter" data-filter="scale">
          Scale
        </button>
      </div>
      <article className="story show card reveal" data-type="scale">
        <span className="number">
          CASE FILE 01 · SCALE
        </span>
        <div className="split" style={{'marginTop': '1.2rem'}}>
          <div>
            <h2>
              A 60-person startup, ready for its next 600.
            </h2>
            <p className="muted">
              A fast-growing SaaS team needed their payroll, hiring and onboarding to stop living in separate spreadsheets. We gave their growth an operating layer.
            </p>
            <a className="button" href="/contact-us">
              Create your story →
            </a>
          </div>
          <div>
            <p className="metric">
              40%
            </p>
            <h3>
              faster time-to-hire
            </h3>
            <p className="metric">
              0
            </p>
            <h3>
              missed payroll deadlines
            </h3>
          </div>
        </div>
      </article>
      <article className="story show card reveal" data-type="systems">
        <span className="number">
          CASE FILE 02 · SYSTEMS
        </span>
        <h2>
          From IT fire drills to a calm, secure rhythm.
        </h2>
        <p className="quote">
          “They made the complicated feel completely manageable.”
        </p>
        <p className="muted">
          A distributed services firm moved to a secure support model with straightforward ownership and a helpdesk their people actually use.
        </p>
      </article>
      <article className="story show card reveal" data-type="people">
        <span className="number">
          CASE FILE 03 · PEOPLE
        </span>
        <h2>
          The right team, without the hiring hamster wheel.
        </h2>
        <p className="muted">
          We shaped a focused talent pipeline for a specialist finance firm — clarifying roles, qualifying faster and designing onboarding that held.
        </p>
        <p className="metric">
          3×
        </p>
        <h3>
          more qualified candidates per role
        </h3>
      </article>
    </div>
  </section>

  );
}
