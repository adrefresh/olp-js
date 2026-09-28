const PANELS = [
  { n: "01", cls: "why-p1", t: "Business-Focused", short: "Aligned with your goals and growth plans.", long: "Every engagement starts from your targets, not our template — so the work always points at what your business is trying to achieve." },
  { n: "02", cls: "why-p2", t: "Connected Expertise", short: "People, HR, tech and business support, together.", long: "One team across hiring, HR, technology and operations, so nothing falls between vendors and everything moves in the same direction." },
  { n: "03", cls: "why-p3", t: "Flexible Solutions", short: "Choose what you need, expand as you grow.", long: "Start with a single service today and add more as you scale — no rip-and-replace, no long re-onboarding." },
  { n: "04", cls: "why-p4", t: "Dedicated Partnership", short: "A team alongside you at every stage.", long: "Real people who know your business, work inside your rhythm, and stay with you from first setup to steady growth." },
];

const css = `
.why-sec{position:relative;overflow:hidden;padding:5rem 0;background:linear-gradient(180deg,#dfe5ea,#ccd5dc)}
.why-logo{position:absolute;right:-4%;top:50%;width:min(680px,68vw);aspect-ratio:1/1;background:url(/opslogic-logo-bg.jpeg) center/contain no-repeat;mix-blend-mode:multiply;opacity:.32;pointer-events:none;z-index:0;transform:translateY(-50%);animation:whyFloat 14s ease-in-out infinite}
@keyframes whyFloat{0%,100%{transform:translateY(-50%) rotate(-3deg)}50%{transform:translateY(-53%) rotate(3deg)}}
.why-inner{position:relative;z-index:1}
.why-intro{max-width:62ch;color:#4b5563;margin:0 0 2.6rem;line-height:1.7}
.why-intro strong{color:var(--ink)}
.why-strip{display:flex;min-height:400px;padding:0 1.5%}
.why-panel{position:relative;flex:1;margin-left:-2.4%;padding:2.2rem 3.6rem 2rem 3.2rem;clip-path:polygon(9% 0,100% 0,91% 100%,0 100%);display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;cursor:default;outline:none;transition:flex .7s cubic-bezier(.16,.84,.32,1),filter .4s ease}
.why-panel:first-child{margin-left:0;clip-path:polygon(0 0,100% 0,91% 100%,0 100%)}
.why-panel:last-child{clip-path:polygon(9% 0,100% 0,100% 100%,0 100%)}
.why-panel:hover,.why-panel:focus-visible,.why-panel:focus-within{flex:3.2}
.why-strip:not(:hover):not(:focus-within) .why-panel:first-child{flex:3.2}
.why-strip:hover .why-panel:not(:hover){filter:saturate(.85) brightness(.97)}
.why-p1{background:var(--ink);color:#fff}
.why-p2{background:var(--blue);color:#fff}
.why-p3{background:var(--orange);color:#0b0c10}
.why-p4{background:#e8f6fc;color:#0b0c10}
.why-panel::after{content:"";position:absolute;top:0;left:-60%;width:40%;height:100%;background:linear-gradient(100deg,transparent,rgba(255,255,255,.28),transparent);transform:skewX(-18deg);transition:left .9s ease;pointer-events:none}
.why-panel:hover::after{left:140%}
.why-num{position:absolute;top:1.4rem;left:3.2rem;font-size:3.4rem;font-weight:800;line-height:1;opacity:.28;transition:transform .5s cubic-bezier(.16,.84,.32,1),opacity .4s ease}
.why-panel:hover .why-num{transform:translateY(6px) scale(1.12);opacity:.5}
.why-panel h3{font-size:clamp(1.15rem,1.7vw,1.6rem);margin:0 0 .5rem;line-height:1.15}
.why-short{font-size:.92rem;line-height:1.5;margin:0;opacity:.9}
.why-long{font-size:.92rem;line-height:1.65;margin:.9rem 0 0;max-width:38ch;max-height:0;opacity:0;transform:translateX(-14px);overflow:hidden;transition:max-height .6s ease,opacity .5s ease .12s,transform .6s cubic-bezier(.16,.84,.32,1) .1s}
.why-panel:hover .why-long,.why-panel:focus-within .why-long,.why-strip:not(:hover):not(:focus-within) .why-panel:first-child .why-long{max-height:180px;opacity:.92;transform:translateX(0)}
@media(max-width:820px){
  .why-strip{flex-direction:column;min-height:0;padding:0}
  .why-panel,.why-panel:first-child,.why-panel:last-child{clip-path:polygon(0 0,100% 0,100% 92%,0 100%);margin-left:0;margin-top:-1.2rem;padding:2.6rem 1.6rem 2.2rem;flex:none}
  .why-panel:first-child{margin-top:0}
  .why-panel:last-child{clip-path:none}
  .why-num{left:1.6rem}
  .why-long{max-height:none;opacity:.92;transform:none}
  .why-logo{right:-30%;opacity:.12}
}
@media(prefers-reduced-motion:reduce){.why-logo{animation:none}.why-panel,.why-long,.why-num,.why-panel::after{transition:none}}
`;

export default function WhyOpsLogic() {
  return (
    <section id="why" className="why-sec">
      <style>{css}</style>
      {/* Semi-transparent brand logo sitting behind the section */}
      <div className="why-logo" aria-hidden="true" />

      <div className="wrap why-inner">
        <span className="eyebrow reveal">Why OpsLogic</span>
        <h2 className="reveal" style={{ margin: "1rem 0 1.2rem", maxWidth: "22ch" }}>
          Trusted by Growing Businesses Worldwide
        </h2>
        <p className="why-intro reveal">
          <strong>Built Around Your Business.</strong> We don&apos;t believe in one-size-fits-all solutions. We understand your goals, assess what you need and bring together the right capabilities to create a solution that fits.
        </p>

        <div className="why-strip reveal">
          {PANELS.map((p) => (
            <div className={`why-panel ${p.cls}`} tabIndex={0} key={p.n}>
              <span className="why-num">{p.n}</span>
              <h3>{p.t}</h3>
              <p className="why-short">{p.short}</p>
              <p className="why-long">{p.long}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
