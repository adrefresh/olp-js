import type { ReactNode } from "react";
import Breadcrumbs from "./Breadcrumbs";
import SharedHeader from "./SharedHeader";
import SharedFooter from "./SharedFooter";
import ScriptRunner from "./ScriptRunner";
import { SITE_SCRIPT } from "./siteScript";
import { UxCta, UxHead } from "./Ux";
import H from "./H";
import { CATS, SERVICES, catHref, svcHref, type Block } from "./servicesContent";
import { VARIANTS, type ListStyle, type StepStyle } from "./serviceVariants";

const strip = (h: string) => h.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");

type Node = { k: "p"; html: string } | { k: "list"; label?: string; items: { h?: string; t: string }[] };

function toNodes(blocks: Block[]): Node[] {
  const out: Node[] = [];
  for (let i = 0; i < blocks.length; i++) {
    const b = blocks[i];
    if ("p" in b) {
      const next = blocks[i + 1];
      const short = strip(b.p).length <= 60;
      if (short && next && "ul" in next) { out.push({ k: "list", label: b.p, items: next.ul }); i++; }
      else out.push({ k: "p", html: b.p });
    } else out.push({ k: "list", items: b.ul });
  }
  return out;
}

function splitLines(h: string): ReactNode[] {
  let parts = h.split(/(?<=[.?!])\s+/).filter(Boolean);
  if (parts.length === 1) {
    const w = h.split(" ");
    if (w.length > 5) { const m = Math.ceil(w.length / 2); parts = [w.slice(0, m).join(" "), w.slice(m).join(" ")]; }
  }
  return parts.map((p, i) => (i === parts.length - 1 && parts.length > 1 ? <em key={i}>{p}</em> : p));
}

function ListView({ items, style }: { items: { h?: string; t: string }[]; style: ListStyle }) {
  const allH = items.every((x) => x.h);
  if (allH) {
    return (
      <div className={"ux-grid ux-lg " + (items.length === 3 ? "ux-g3" : "ux-g2")}>
        {items.map((x, i) => (
          <div className="ux-card ux-r" style={{ ["--i" as string]: i % 4 }} key={i}>
            <span className="ux-num">0{i + 1}</span>
            <h3>{x.h}</h3>
            <H as="p" html={x.t} />
          </div>
        ))}
      </div>
    );
  }
  const html = (x: { h?: string; t: string }) => (x.h ? `<b>${x.h}.</b> ${x.t}` : x.t);
  if (style === "chips")
    return <div className="ux-chips ux-r">{items.map((x, i) => <H className="ux-chip l" key={i} html={html(x)} />)}</div>;
  if (style === "rows")
    return (
      <ol className="ux-rows">
        {items.map((x, i) => (
          <li className="ux-r" style={{ ["--i" as string]: i % 5 }} key={i}><span>{String(i + 1).padStart(2, "0")}</span><H html={html(x)} /></li>
        ))}
      </ol>
    );
  if (style === "cards")
    return (
      <div className="ux-grid ux-g2 ux-lg">
        {items.map((x, i) => (
          <div className="ux-card sm ux-r" style={{ ["--i" as string]: i % 4 }} key={i}><H as="p" html={html(x)} /></div>
        ))}
      </div>
    );
  return (
    <ul className="ux-checks">
      {items.map((x, i) => (
        <li className="ux-r" style={{ ["--i" as string]: i % 6 }} key={i}><H html={html(x)} /></li>
      ))}
    </ul>
  );
}

function SectionView({ sec, idx, list }: { sec: { t: string; b: Block[] }; idx: number; list: ListStyle }) {
  const nodes = toNodes(sec.b);
  const lists = nodes.filter((n) => n.k === "list");
  const tone = ["t0", "t1", "t2", "t0"][idx % 4];
  const audience = /^who this/i.test(sec.t);

  if (audience) {
    return (
      <section className={"ux-sec " + tone}>
        <div className="ux-wrap">
          <div className="ux-aud ux-r">
            <span className="ux-eyebrow">{sec.t}</span>
            {nodes.map((n, i) => (n.k === "p" ? <H as="p" html={n.html} key={i} /> : null))}
          </div>
        </div>
      </section>
    );
  }
  if (lists.length >= 2) {
    return (
      <section className={"ux-sec " + tone}>
        <div className="ux-wrap">
          <UxHead eyebrow={`0${idx + 1}`} title={sec.t} />
          {nodes.filter((n) => n.k === "p").map((n, i) => (n.k === "p" ? <H as="p" className="ux-lead ux-r" html={n.html} key={i} /> : null))}
          <div className="ux-cmp">
            {lists.map((n, i) => n.k === "list" && (
              <div className="ux-card ux-r" style={{ ["--i" as string]: i }} key={i}>
                {n.label ? <H as="h3" html={n.label.replace(/:$/, "")} /> : null}
                <ListView items={n.items} style="check" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  const wide = lists.some((n) => n.k === "list" && (n.items.length > 6 || n.items.every((x) => x.h)));
  const body = (
    <div className="ux-body">
      {nodes.map((n, i) =>
        n.k === "p" ? (
          <H as="p" className={"ux-lead ux-r" + (i === 0 ? " first" : "")} html={n.html} key={i} />
        ) : (
          <div key={i} className="ux-r">
            {n.label ? <H as="h3" className="ux-lab" html={n.label.replace(/:$/, "")} /> : null}
            <ListView items={n.items} style={list} />
          </div>
        )
      )}
    </div>
  );
  return (
    <section className={"ux-sec " + tone}>
      <div className={"ux-wrap " + (wide ? "ux-stack" : "ux-split")}>
        <div className={wide ? "" : "ux-stick"}><UxHead eyebrow={`0${idx + 1}`} title={sec.t} /></div>
        {body}
      </div>
    </section>
  );
}

function StepsView({ steps, style }: { steps: { t: string; d: string }[]; style: StepStyle }) {
  const n = steps.length;
  const head = <UxHead eyebrow="How it works" title={`${n} steps, start to finish.`} />;
  let body: ReactNode;
  if (style === "vert")
    return (
      <section className="ux-sec t3">
        <div className="ux-wrap ux-split ux-stepsplit">
          <div className="ux-stick ux-r">
            <span className="ux-eyebrow">How it works</span>
            <h2>{n} steps, start to finish.</h2>
            <p className="ux-lead">From the first call to done, with one team and one point of contact.</p>
            <div className="ux-btns"><a className="ux-btn o" href="/contact-us">Talk to us <span aria-hidden="true">↗</span></a></div>
          </div>
          <ol className="ux-hire">
            {steps.map((s, i) => (
              <li className="ux-card ux-r" style={{ ["--i" as string]: i }} key={i}>
                <span className="n">0{i + 1}</span>
                <div><h3>{s.t}</h3><H as="p" html={s.d} /></div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    );
  if (style === "cards")
    body = (
      <div className="ux-grid ux-sc">
        {steps.map((s, i) => (
          <div className="ux-card ux-r" style={{ ["--i" as string]: i }} key={i}><span className="ux-num">0{i + 1}</span><div><h3>{s.t}</h3><H as="p" html={s.d} /></div></div>
        ))}
      </div>
    );
  else if (style === "big")
    body = (
      <ol className="ux-bigs">
        {steps.map((s, i) => (
          <li className="ux-r" style={{ ["--i" as string]: i }} key={i}><span>{i + 1}</span><div><h3>{s.t}</h3><H as="p" html={s.d} /></div></li>
        ))}
      </ol>
    );
  else
    body = (
      <div className="ux-steps" style={{ ["--n" as string]: n }}>
        {steps.map((s, i) => (
          <div className="ux-step ux-r" style={{ ["--i" as string]: i }} key={i}><span className="d">{i + 1}</span><h3>{s.t}</h3><H as="p" html={s.d} /></div>
        ))}
      </div>
    );
  return (
    <section className="ux-sec t3">
      <div className="ux-wrap">{head}{body}</div>
    </section>
  );
}

function FaqView({ faq, side }: { faq: { q: string; a: string }[]; side: boolean }) {
  const list = (
    <div className="ux-faq ux-r">
      {faq.map((f, i) => (
        <details key={i}><summary><H html={f.q} /></summary><H as="p" html={f.a} /></details>
      ))}
    </div>
  );
  return (
    <section className="ux-sec t0">
      <div className={"ux-wrap " + (side ? "ux-split" : "ux-narrow")}>
        <div className={side ? "ux-stick" : ""}><UxHead eyebrow="FAQ" title="Questions we hear" /></div>
        {list}
      </div>
    </section>
  );
}

export function ServiceView({ slug }: { slug: string }) {
  const s = SERVICES[slug];
  const cat = CATS.find((c) => c.slug === s.cat)!;
  const v = VARIANTS[slug];
  const group = cat.groups.find((g) => g.items.includes(slug));
  const order = cat.groups.flatMap((g) => g.items);
  const at = order.indexOf(slug);
  const prev = order.length > 1 ? order[(at - 1 + order.length) % order.length] : null;
  const next = order.length > 1 ? order[(at + 1) % order.length] : null;
  const related = (group?.items ?? []).filter((x) => x !== slug).slice(0, 4);
  const firstList = s.sections.flatMap((x) => x.b).find((b) => "ul" in b) as { ul: { h?: string; t: string }[] } | undefined;
  const snap = (firstList?.ul ?? []).slice(0, 4).map((x) => strip(x.h ?? x.t));
  const words = s.title.toUpperCase().split(" ");
  const ghost = s.title.length <= 14 ? s.title.toUpperCase() : words[0].length > 3 ? words[0] : words.slice(0, 2).join(" ");

  return (
    <>
      <SharedHeader active="services" />
      <Breadcrumbs items={[{ label: "Services", href: "/services" }, { label: cat.title, href: catHref(cat.slug) }, { label: s.title }]} />
      <main className={"ux an-" + v.anim}>
        <header className={"ux-hero h-" + v.hero}>
          {v.hero === "orbit" ? <div className="ux-orbit" aria-hidden="true" /> : null}
          {v.hero === "ghost" ? <div className="ux-gw" aria-hidden="true">{ghost}</div> : null}
          <div className={"ux-wrap" + (v.hero === "split" ? " ux-hgrid" : "")}>
            <div>
              <span className="ux-eyebrow">{s.title}</span>
              <h1>{splitLines(s.h).map((l, i) => (<span className="ux-l" key={i}><span style={{ ["--i" as string]: i }}>{l}</span></span>))}</h1>
              <p className="ux-sub">{s.p}</p>
              <div className="ux-btns ux-hb">
                <a className="ux-btn o" href="/contact-us">Talk to us <span aria-hidden="true">↗</span></a>
                <a className="ux-btn l" href={catHref(cat.slug)}>All {cat.title}</a>
              </div>
            </div>
            {v.hero === "split" ? (
              <aside className="ux-snap" aria-label="At a glance">
                <span className="ux-eyebrow">At a glance</span>
                <ul>{snap.map((x, i) => <li key={i}>{x}</li>)}</ul>
                <p>{s.steps.length} steps from first call to done.</p>
              </aside>
            ) : null}
          </div>
        </header>

        {s.sections.map((sec, i) => <SectionView key={i} sec={sec} idx={i} list={v.list} />)}
        <StepsView steps={s.steps} style={v.steps} />
        <FaqView faq={s.faq} side={v.faq === "side"} />

        {related.length ? (
          <section className="ux-sec t2">
            <div className="ux-wrap">
              <UxHead eyebrow={group?.t ?? "Related"} title="Often paired with" />
              <div className="ux-chips ux-r" style={{ marginTop: "2rem" }}>
                {related.map((r) => <a className="ux-chip" href={svcHref(r)} key={r}>{SERVICES[r].title} →</a>)}
              </div>
            </div>
          </section>
        ) : null}
        {prev && next ? (
          <section className="ux-sec t0 ux-pnsec">
            <div className="ux-wrap ux-pn">
              <a className="ux-pnc ux-r" href={svcHref(prev)}><span>← Previous in {cat.title}</span><b>{SERVICES[prev].title}</b></a>
              <a className="ux-pnc nx ux-r" style={{ ["--i" as string]: 1 }} href={svcHref(next)}><span>Next in {cat.title} →</span><b>{SERVICES[next].title}</b></a>
            </div>
          </section>
        ) : null}
        <UxCta title={s.cta} />
      </main>
      <SharedFooter />
      <ScriptRunner script={SITE_SCRIPT} />
    </>
  );
}
