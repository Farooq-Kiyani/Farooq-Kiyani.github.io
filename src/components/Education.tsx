"use client";
import { useEffect, useRef } from "react";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.querySelectorAll(".fade-up").forEach((el) => el.classList.add("visible"));
      }),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="education" className="py-24 bg-[#111827]" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-tag">Education</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-3">
            Academic Background
          </h2>
        </div>

        <div className="fade-up card p-8 flex items-center gap-6 hover:border-[#38bdf8]/30">
          <div className="text-5xl shrink-0">🎓</div>
          <div>
            <h3 className="text-xl font-bold text-white mb-1">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-[#38bdf8] text-sm mb-1">Bahria University — Islamabad</p>
            <p className="font-mono text-xs text-[#6e7681]">December 2012 – December 2016</p>
          </div>
        </div>
      </div>
    </section>
  );
}
