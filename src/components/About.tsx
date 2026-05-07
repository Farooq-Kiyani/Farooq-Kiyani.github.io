"use client";
import { useEffect, useRef } from "react";

const cards = [
  { icon: "⚙️", title: "Backend & APIs", desc: "Spring Boot, FastAPI, GraphQL, gRPC, Kafka. Millions of requests, sub-100ms latency." },
  { icon: "🤖", title: "AI / ML Engineering", desc: "LangGraph agents, RAG pipelines, PyTorch, SageMaker. AI that actually ships to production." },
  { icon: "☁️", title: "Cloud & DevOps", desc: "AWS, Azure, GCP with Terraform. GitOps, ArgoCD, zero click-ops infrastructure." },
  { icon: "🖥️", title: "Frontend", desc: "Next.js, React, Vue.js. Core Web Vitals green, design systems that scale across teams." },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.querySelectorAll(".fade-up").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 100);
        });
      }),
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-24 bg-[#111827]" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-tag">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-3">
            The Engineer Behind the Stack
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Text */}
          <div className="fade-up space-y-5 text-[#8b949e] text-[1.02rem] leading-relaxed">
            <p>
              Senior engineer who&apos;s been doing this for 10 years and still finds it interesting. I work across the full stack —
              Java Spring Boot and Python FastAPI on the backend, LangGraph agents and RAG pipelines for AI,
              React and Next.js on the frontend, Terraform for infrastructure that behaves the same in every environment.
            </p>
            <p>
              I&apos;ve shipped systems that handle millions of events daily, AI pipelines that actually replaced human workflows,
              and cloud platforms across AWS, Azure, and GCP. I write code I&apos;m not embarrassed by, build teams that ship
              without drama, and leave every codebase better than I found it.
            </p>
            <div className="mt-6 space-y-3 pt-2">
              {[
                { icon: "📍", text: "Columbia Station, OH 44028" },
                { icon: "✉️", text: "farooqkiyani.engr@gmail.com", href: "mailto:farooqkiyani.engr@gmail.com" },
                { icon: "🌍", text: "Willing to relocate anywhere · Authorized to work in the US" },
              ].map((d) => (
                <div key={d.text} className="flex items-center gap-3 text-sm">
                  <span>{d.icon}</span>
                  {d.href ? (
                    <a href={d.href} className="text-[#38bdf8] hover:underline">{d.text}</a>
                  ) : (
                    <span>{d.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-2 gap-4">
            {cards.map((c, i) => (
              <div
                key={c.title}
                className="fade-up card p-5 hover:-translate-y-1 cursor-default"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="text-2xl mb-3">{c.icon}</div>
                <h3 className="text-sm font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-xs text-[#8b949e] leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
