"use client";
import { useEffect, useMemo, useState } from "react";

const BASE = "https://opslogic.keka.com/careers/";
const API = BASE + "api/embedjobs/default/active/7d609818-0ad8-44ee-b504-692750d09ea0";

interface Job {
  id: number;
  title: string;
  departmentName: string;
  jobLocations: { name: string }[];
  jobType: number;
  experience: string;
}

/** Live openings from Keka Hire, drawn in the site's own style. */
export default function KekaJobs() {
  const [jobs, setJobs] = useState<Job[] | null>(null);
  const [failed, setFailed] = useState(false);
  const [dept, setDept] = useState("All");
  const [q, setQ] = useState("");

  useEffect(() => {
    let live = true;
    fetch(API)
      .then((r) => (r.ok ? r.json() : Promise.reject()))
      .then((d: Job[]) => live && setJobs(Array.isArray(d) ? d : []))
      .catch(() => live && setFailed(true));
    return () => {
      live = false;
    };
  }, []);

  const depts = useMemo(() => ["All", ...Array.from(new Set((jobs || []).map((j) => j.departmentName)))], [jobs]);
  const shown = (jobs || []).filter(
    (j) => (dept === "All" || j.departmentName === dept) && j.title.toLowerCase().includes(q.trim().toLowerCase()),
  );

  if (failed)
    return (
      <p className="ux-lead ux-r">
        We couldn&apos;t load the openings just now. <a href={BASE}>See all roles on our careers portal ↗</a>
      </p>
    );
  if (!jobs) return <p className="ux-lead ux-r">Loading openings…</p>;
  if (!jobs.length)
    return <p className="ux-lead ux-r">No openings right now, but we&apos;re always happy to hear from good people.</p>;

  return (
    <div className="kj ux-r">
      <div className="kj-bar">
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search roles" aria-label="Search roles" />
        <div className="kj-chips" role="tablist" aria-label="Filter by department">
          {depts.map((d) => (
            <button key={d} type="button" className={d === dept ? "on" : undefined} onClick={() => setDept(d)}>
              {d}
            </button>
          ))}
        </div>
      </div>
      <ul className="kj-list">
        {shown.map((j) => {
          const loc = j.jobLocations[0]?.name;
          return (
            <li key={j.id}>
              <a href={BASE + "jobdetails/" + j.id} target="_blank" rel="noopener noreferrer">
                <span className="kj-main">
                  <b>{j.title}</b>
                  <span className="kj-meta">
                    <em>{j.departmentName}</em>
                    {loc ? <span>{loc}</span> : null}
                    {j.experience ? <span>{j.experience.replace(/yrs?/i, "yrs").replace(/^(\d+-\d+)$/, "$1 yrs")}</span> : null}
                    {j.jobType === 2 ? <span>Full time</span> : null}
                  </span>
                </span>
                <span className="kj-go" aria-hidden="true">Apply ↗</span>
              </a>
            </li>
          );
        })}
        {!shown.length ? <li className="kj-none">No roles match your search.</li> : null}
      </ul>
    </div>
  );
}
