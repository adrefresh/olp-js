const JOBS = [
  { title: "Senior SAP Basis Administrator", dept: "Information Technology", loc: "Canada", exp: "8-10 Yrs", type: "Full Time" },
  { title: "Trainee Executive – HR & Business Operations", dept: "Operations", loc: "Hyderabad - MTC", exp: "0-1 Yrs", type: "Full Time" },
  { title: "Project Manager - Civil", dept: "Operations", loc: "Hyderabad - MTC", exp: "12-15 Yrs", type: "Full Time" },
];

export default function OpenRoles() {
  return (
    <section id="openings">
      <div className="wrap">
        <span className="eyebrow reveal">Career opportunities</span>
        <h2 className="reveal" style={{ margin: "1rem 0 2rem", maxWidth: "16ch" }}>Find your next good challenge.</h2>
        <div className="jobs reveal">
          {JOBS.map((j) => (
            <a className="job" href="/contact-us" data-cursor="click" key={j.title}>
              <div>
                <h3 style={{ fontSize: "1.1rem" }}>{j.title}</h3>
                <small>{j.dept} · {j.loc} · {j.exp}</small>
              </div>
              <span className="eyebrow">{j.type}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
