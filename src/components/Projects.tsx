"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    company: "FIT Technologies",
    year: "2022–Present",
    title: "LangGraph Multi-Agent Document Automation",
    desc: "Enterprise-grade multi-agent system with stateful graphs, tool-calling, persistent memory, and human-in-the-loop checkpoints. Thousands of workflows per day — manual review time cut substantially.",
    tags: ["LangGraph", "Python", "Kubernetes", "AI Agents"],
    featured: true,
  },
  {
    company: "FIT Technologies",
    year: "2022–Present",
    title: "Production RAG Knowledge Pipeline",
    desc: "Hybrid search across Pinecone, Weaviate, and Qdrant with GPT-4o and Claude 3.5 Sonnet as the reasoning layer. Users started self-serving — support ticket volume fell noticeably.",
    tags: ["LangChain", "RAG", "Pinecone", "GPT-4o", "FastAPI"],
    featured: true,
  },
  {
    company: "FIT Technologies",
    year: "2022–Present",
    title: "Real-Time Event Processing Platform",
    desc: "Millions of events daily at sub-100ms end-to-end latency using Kafka 3.x, Kinesis, and Flink. Zero data loss. Consumed by FastAPI and Django 5.x services.",
    tags: ["Kafka", "Apache Flink", "Kinesis", "FastAPI"],
    featured: false,
  },
  {
    company: "FIT Technologies",
    year: "2022–Present",
    title: "AI Recommendation Engine on SageMaker",
    desc: "Trained and deployed with PyTorch 2.x and Hugging Face Transformers. Blue/green model swaps with MLflow experiment tracking. Measurable lift on engagement and revenue.",
    tags: ["PyTorch", "SageMaker", "MLflow", "Hugging Face"],
    featured: false,
  },
  {
    company: "Emprise Technologies",
    year: "2018–2022",
    title: "Computer Vision QA Inspection Pipeline",
    desc: "PyTorch / OpenCV / YOLOv3 pipeline for fully automated quality assurance inspection. High accuracy with real cost savings over the manual process it replaced.",
    tags: ["PyTorch", "OpenCV", "YOLOv3", "Python"],
    featured: false,
  },
  {
    company: "Emprise Technologies",
    year: "2018–2022",
    title: "Analytics Platform on Snowflake & BigQuery",
    desc: "Spark / Databricks / dbt analytics platform that stakeholders actually used to make decisions — the only benchmark that counts.",
    tags: ["Spark", "Databricks", "dbt", "Snowflake", "BigQuery"],
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.querySelectorAll(".fade-up").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 80);
        });
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 bg-[#111827]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-tag">Featured Work</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-3">
            Systems I&apos;ve Shipped
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => (
            <div
              key={p.title}
              className={`fade-up card p-6 flex flex-col relative overflow-hidden group hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 ${
                p.featured ? "border-[#38bdf8]/20" : ""
              }`}
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Top gradient bar */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#0ea5e9] to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex justify-between items-center mb-4">
                <span className="font-mono text-[10px] font-semibold text-[#38bdf8] uppercase tracking-wider">
                  {p.company}
                </span>
                <span className="font-mono text-[10px] text-[#6e7681]">{p.year}</span>
              </div>

              <h3 className="text-[0.95rem] font-semibold text-white mb-3 leading-snug">
                {p.title}
              </h3>
              <p className="text-xs text-[#8b949e] leading-relaxed flex-1 mb-4">
                {p.desc}
              </p>

              <div className="flex flex-wrap gap-1.5 mt-auto">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="bg-white/5 text-[#6e7681] text-[10px] px-2 py-0.5 rounded font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
