import type { ListStyle } from "../../lib/services";
import Html from "../ui/Html";

export default function ListView({ items, style }: { items: { h?: string; t: string }[]; style: ListStyle }) {
  const allH = items.every((x) => x.h);
  if (allH) {
    return (
      <div className={"ux-grid ux-lg " + (items.length === 3 ? "ux-g3" : "ux-g2")}>
        {items.map((x, i) => (
          <div className="ux-card ux-r" style={{ ["--i" as string]: i % 4 }} key={i}>
            <span className="ux-num">0{i + 1}</span>
            <h3>{x.h}</h3>
            <Html as="p" html={x.t} />
          </div>
        ))}
      </div>
    );
  }
  const html = (x: { h?: string; t: string }) => (x.h ? `<b>${x.h}.</b> ${x.t}` : x.t);
  if (style === "chips")
    return (
      <div className="ux-chips ux-r">
        {items.map((x, i) => (
          <Html className="ux-chip l" key={i} html={html(x)} />
        ))}
      </div>
    );
  if (style === "rows")
    return (
      <ol className="ux-rows">
        {items.map((x, i) => (
          <li className="ux-r" style={{ ["--i" as string]: i % 5 }} key={i}>
            <span>{String(i + 1).padStart(2, "0")}</span>
            <Html html={html(x)} />
          </li>
        ))}
      </ol>
    );
  if (style === "cards")
    return (
      <div className="ux-grid ux-g2 ux-lg">
        {items.map((x, i) => (
          <div className="ux-card sm ux-r" style={{ ["--i" as string]: i % 4 }} key={i}>
            <Html as="p" html={html(x)} />
          </div>
        ))}
      </div>
    );
  return (
    <ul className="ux-checks">
      {items.map((x, i) => (
        <li className="ux-r" style={{ ["--i" as string]: i % 6 }} key={i}>
          <Html html={html(x)} />
        </li>
      ))}
    </ul>
  );
}
