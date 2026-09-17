import React from "react";

export default function WaveDivider() {
  return (
  <div className="wave-divider" style={{'marginTop': '-68px', 'position': 'relative', 'zIndex': '3'}}>
    <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
      <path d="M0,32 C240,70 480,0 720,20 C960,40 1200,70 1440,24 L1440,70 L0,70 Z" fill="var(--paper)">
      </path>
    </svg>
  </div>

  );
}
