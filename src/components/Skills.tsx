"use client";
import { useEffect, useRef } from "react";

const categories = [
  {
    title: "Backend",
    tags: ["Java", "Spring Boot", "Python", "FastAPI", "Django", "Micronaut", "Quarkus", "gRPC", "GraphQL", "REST"],
  },
  {
    title: "Frontend",
    tags: ["React", "Next.js", "Vue.js", "Angular", "TypeScript", "JavaScript", "TanStack Query", "Zustand", "Pinia", "Shadcn/UI"],
  },
  {
    title: "AI / ML",
    tags: ["LangGraph", "LangChain", "RAG Pipelines", "PyTorch", "Hugging Face", "OpenCV", "SageMaker", "MLflow", "GPT-4o", "Claude 3.5"],
  },
  {
    title: "Cloud & Infra",
    tags: ["AWS", "Azure", "GCP", "Terraform", "Pulumi", "Kubernetes", "Docker", "ArgoCD", "Istio", "Serverless"],
  },
  {
    title: "Data & Streaming",
    tags: ["Kafka", "Kinesis", "Apache Flink", "Spark", "Databricks", "Snowflake", "BigQuery", "PostgreSQL", "MongoDB", "Redis"],
  },
  {
    title: "Observability & CI/CD",
    tags: ["OpenTelemetry", "Prometheus", "Grafana", "Datadog", "GitHub Actions", "Jenkins", "Flux", "GitOps", "Pinecone", "Weaviate"],
  },
];

export default function Skills() {
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
    <section id="skills" className="py-24 bg-[#0a0e1a]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-tag">Technical Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-3">
            What I Work With
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="fade-up card p-6"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              <h3 className="font-mono text-xs font-semibold text-[#38bdf8] uppercase tracking-widest mb-4">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#38bdf8]/8 border border-[#38bdf8]/15 text-[#8b949e] text-xs px-3 py-1 rounded-full hover:bg-[#38bdf8]/15 hover:text-white hover:border-[#38bdf8]/40 transition-all cursor-default"
                  >
                    {tag}
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
