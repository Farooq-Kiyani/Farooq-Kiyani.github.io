"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.style.opacity = "0";
      el.style.transform = "translateY(30px)";
      requestAnimationFrame(() => {
        el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 overflow-hidden"
    >
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#38bdf8]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-[400px] h-[400px] bg-purple-500/6 rounded-full blur-3xl" />
      </div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto">
        <p className="font-mono text-[#38bdf8] text-sm uppercase tracking-widest mb-4">
          Hello, I&apos;m
        </p>
        <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight leading-none mb-4 gradient-text">
          M. Farooq
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-[#8b949e] mb-5 tracking-wide">
          Senior Software Engineer
        </h2>
        <p className="text-base md:text-lg text-[#8b949e] max-w-xl mx-auto leading-relaxed mb-10">
          10 years shipping systems that scale. Full-stack, AI/ML pipelines, cloud infrastructure across AWS, Azure &amp; GCP.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <a
            href="#projects"
            className="bg-[#38bdf8] text-[#0a0e1a] font-semibold px-6 py-3 rounded-lg hover:bg-white transition-all hover:shadow-lg hover:shadow-[#38bdf8]/20"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="border border-white/10 text-white font-semibold px-6 py-3 rounded-lg hover:border-[#38bdf8]/50 hover:text-[#38bdf8] transition-all"
          >
            Get In Touch
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-10 md:gap-16 justify-center border-t border-white/8 pt-10 flex-wrap">
          {[
            { num: "10+", label: "Years Experience" },
            { num: "3", label: "Cloud Platforms" },
            { num: "M+", label: "Events / Day" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <span className="block text-3xl font-extrabold font-mono text-[#38bdf8]">{s.num}</span>
              <span className="text-xs uppercase tracking-widest text-[#6e7681] mt-1 block">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#6e7681] text-xs uppercase tracking-widest">
        <span>Scroll</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-[#38bdf8] to-transparent animate-pulse" />
      </div>
    </section>
  );
}
