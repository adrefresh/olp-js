export default function Contact() {
  return (
  <section id="contact" className="p-0">
    <div className="cta-band">
      <div className="blob w-[280px] h-[280px] bg-(--blue-wash) top-[-90px] left-[-70px]" />
      <div className="blob w-[220px] h-[220px] bg-(--orange-wash) bottom-[-80px] right-[-40px] [animation-delay:1s]" />
      <div className="cta-band-grid">
        <div className="cta-copy reveal">
          <span className="eyebrow orange">Ready when you are</span>
          <h2>Let&apos;s make business move.</h2>
          <p>Book a free consultation — no obligations, just a conversation about what&apos;s slowing you down.</p>
          <a href="mailto:hello@opslogic.team" className="btn-primary magnetic" data-cursor="click">hello@opslogic.team →</a>
          <p className="sticker-caption" id="stickerCaption">Hover a sticker to see what we handle for you →</p>
        </div>
        <div className="illustration-stage reveal" id="illustrationStage">
          <svg viewBox="0 0 560 420" aria-hidden="true">
            <ellipse cx="280" cy="378" rx="200" ry="16" fill="rgba(11,27,58,0.06)" />
            <rect x="150" y="278" width="260" height="18" rx="9" fill="#ffffff" stroke="#0b1b3a" strokeWidth="3" />
            <rect x="168" y="296" width="12" height="56" fill="#0b1b3a" />
            <rect x="380" y="296" width="12" height="56" fill="#0b1b3a" />
            <g className="scene-bob delay1">
              <rect x="243" y="236" width="74" height="48" rx="6" fill="#0b1b3a" />
              <rect x="249" y="242" width="62" height="34" rx="3" fill="#1ea7f0" />
              <path d="M258 258 l10 10 20 -20" fill="none" stroke="#ffffff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="235" y="278" width="90" height="8" rx="3" fill="#0b1b3a" />
            </g>
            <g className="scene-bob">
              <rect x="155" y="206" width="72" height="72" rx="30" fill="#1ea7f0" />
              <circle cx="191" cy="180" r="30" fill="#ffe2cf" />
              <path d="M161 180 a30 30 0 0 1 60 0 v-6 a30 26 0 0 0 -60 0 Z" fill="#0b1b3a" />
            </g>
            <g className="scene-bob delay2">
              <rect x="333" y="206" width="72" height="72" rx="30" fill="#ff6b1a" />
              <circle cx="369" cy="180" r="30" fill="#ffe2cf" />
              <path d="M339 180 a30 30 0 0 1 60 0 v-6 a30 26 0 0 0 -60 0 Z" fill="#0b1b3a" />
            </g>
            <g className="scene-bob" transform="translate(280,96)">
              <rect x="-56" y="-30" width="112" height="54" rx="18" fill="#ffffff" stroke="#0b1b3a" strokeWidth="3" />
              <path d="M-8 24 L2 42 L16 24 Z" fill="#ffffff" stroke="#0b1b3a" strokeWidth="3" />
              <circle className="chat-dot d1" cx="-22" cy="-3" r="6" fill="#1ea7f0" />
              <circle className="chat-dot d2" cx="2" cy="-3" r="6" fill="#ff6b1a" />
              <circle className="chat-dot d3" cx="26" cy="-3" r="6" fill="#0b1b3a" />
            </g>
            <g className="scene-bob delay2">
              <circle cx="90" cy="120" r="20" fill="#ffffff" stroke="#0b1b3a" strokeWidth="3" />
              <path d="M82 120 l6 6 12 -12" fill="none" stroke="#1ea7f0" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <g className="scene-bob delay1">
              <circle cx="470" cy="150" r="18" fill="#ff6b1a" />
              <path d="M462 150 h16 M470 142 v16" stroke="#0b1b3a" strokeWidth="3" strokeLinecap="round" />
            </g>
          </svg>
          <div className="stage-sticker top-[2%] left-[0%] [--rot:-6deg] [animation-delay:0s]" data-desc="We run the day-to-day so nothing falls through the cracks.">
            <span className="dot" />
            Operations
          </div>
          <div className="stage-sticker top-[10%] right-[0%] [--rot:5deg] [animation-delay:.6s]" data-desc="Secure, dependable systems — infrastructure to helpdesk.">
            <span className="dot" />
            IT
          </div>
          <div className="stage-sticker top-[44%] left-[-6%] [--rot:4deg] [animation-delay:1.1s]" data-desc="High-performing teams, sourced and onboarded for you.">
            <span className="dot" />
            Hiring
          </div>
          <div className="stage-sticker right-[-4%] bottom-[20%] [--rot:-4deg] [animation-delay:1.6s]" data-desc="Accurate, on-time salaries, taxes and statutory filings.">
            <span className="dot" />
            Payroll
          </div>
          <div className="stage-sticker left-[6%] bottom-[2%] [--rot:6deg] [animation-delay:2s]" data-desc="End-to-end SAP support, plus flexible expert staffing.">
            <span className="dot" />
            SAP
          </div>
          <div className="stage-sticker right-[24%] bottom-[-4%] [--rot:-3deg] [animation-delay:2.4s]" data-desc="Flexible, fully-equipped space that scales with you.">
            <span className="dot" />
            Workspace
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
