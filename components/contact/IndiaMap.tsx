import { INDIA_VIEWBOX, INDIA_PATHS, TELANGANA_PATH, HYD } from "../../lib/india-map";

/** India outline with Telangana highlighted and a Hyderabad pin. Pure SVG, no map library. */
export default function IndiaMap() {
  return (
    <div className="ux-map" role="img" aria-label="Map of India with Hyderabad, Telangana marked">
      <svg viewBox={INDIA_VIEWBOX} aria-hidden="true">
        {INDIA_PATHS.map((d, i) => (
          <path d={d} className="ind" key={i} />
        ))}
        <path d={TELANGANA_PATH} className="tg" />
      </svg>
      <span className="ux-pin" style={{ left: (HYD.x / 612) * 100 + "%", top: (HYD.y / 696) * 100 + "%" }}>
        <i aria-hidden="true" />
        <b>Hyderabad</b>
      </span>
    </div>
  );
}
