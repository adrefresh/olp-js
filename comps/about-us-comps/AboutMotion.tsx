"use client";

import { useEffect } from "react";

const TARGET_SELECTOR = [
  ".statement .statement-layout > *",
  ".how-we-work .how-we-work-layout > *",
  ".how-we-work .steps-grid > *",
  ".our-approach .approach-shell > *",
  ".approach-visual .orbit",
  ".experience-section .experience-grid > *",
  ".principles-section .principles-panels > *",
  ".principles-section .values-wrap > *",
  ".principles-section .values-grid > *",
  ".final-cta .final-cta-shell > *",
].join(",");

export default function AboutMotion() {
  useEffect(() => {
    const page = document.querySelector(".about-page-shell");
    if (!page || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const targets = Array.from(page.querySelectorAll<HTMLElement>(TARGET_SELECTOR));
    targets.forEach((target) => {
      target.classList.add("about-motion-target");
    });

    if (!targets.length) return;

    if (!("IntersectionObserver" in window)) {
      targets.forEach((target) => target.classList.add("about-motion-visible"));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("about-motion-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}