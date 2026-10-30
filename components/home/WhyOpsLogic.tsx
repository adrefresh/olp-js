import SectionHead from "../ui/SectionHead";

const WHY = [
  ["We start with your goals, not our template.", "The plan comes after we know what you're trying to get done."],
  ["One team, not five vendors.", "HR, IT, compliance and operations touch each other constantly. Nothing falls into the gap between suppliers."],
  ["Start small, add later.", "Begin with payroll or a registration. Add more when you're ready."],
  ["Real people who stay.", "You'll know who's working on your account."],
];

export default function WhyOpsLogic() {
  return (
    <section className="ux-sec t0 ux-whysec" id="why">
      <div className="ux-wrap ux-split">
        <div className="ux-stick">
          <SectionHead eyebrow="Why OpsLogic" title="Why companies work with us" />
        </div>
        <ol className="ux-why ux-r">
          {WHY.map(([t, d], i) => (
            <li key={t}>
              <span className="big">0{i + 1}</span>
              <div>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
