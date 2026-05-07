"use client";
import { useEffect, useRef } from "react";

const jobs = [
  {
    title: "Senior Software Engineer",
    company: "FIT Technologies",
    location: "Cleveland, OH",
    date: "Jan 2022 – Present",
    bullets: [
      "Architected unified backend (Spring Boot 3.x, Micronaut, Quarkus, FastAPI) on Kubernetes with gRPC inside and GraphQL Federation outside — millions of requests daily",
      "Built LangGraph multi-agent system for enterprise document automation with stateful graphs, tool-calling, and persistent memory",
      "Shipped production RAG with LangChain and hybrid search across Pinecone, Weaviate, and Qdrant — GPT-4o and Claude 3.5 Sonnet as reasoning layer",
      "Manages all AWS and GCP infrastructure in Terraform and Pulumi — EKS, RDS Aurora, Lambda, SageMaker, EventBridge",
      "GitOps with ArgoCD, GitHub Actions, and Flux — canary rollouts with auto-rollback; deploys went from feared to unnoticed",
      "Delivered Next.js 14 frontends with App Router, React Server Components, TanStack Query, and Shadcn/UI across three product teams",
      "Real-time pipelines with Kafka 3.x, Kinesis, and Flink — millions of events at sub-100ms end-to-end, no data loss",
      "Full-stack observability with OpenTelemetry, Prometheus, Grafana, and Datadog APM — MTTR down significantly",
      "AI recommendation engine on SageMaker with PyTorch 2.x, Hugging Face Transformers, and MLflow — measurable lift on revenue",
      "Cloudflare Workers and Lambda@Edge with WebAssembly compiled from Rust — P95 latency dropped across every region",
    ],
  },
  {
    title: "Senior Full Stack Developer",
    company: "Emprise Technologies",
    location: "Toledo, OH",
    date: "Jun 2018 – Dec 2022",
    bullets: [
      "Spring Boot and FastAPI backends with React, Angular, and Vue.js frontends for a high-traffic enterprise SaaS platform",
      "Decomposed a legacy Java monolith into 15+ domain-aligned microservices on Kubernetes with Istio service mesh",
      "Replaced Azure click-ops with Terraform (AKS, Azure SQL, Service Bus, App Service) — zero config drift",
      "AWS CDK workloads: ECS Fargate, Lambda, RDS Aurora with multi-region failover built in from day one",
      "Python FastAPI and Django ETL services with Celery workers and Redis queues — observable, retryable, actually testable",
      "PyTorch / OpenCV / YOLOv3 vision pipeline for automated QA inspection — real cost savings over the manual process",
      "Azure AI Services (Computer Vision, Form Recognizer, Cognitive Search) for document and invoice workflow automation",
      "GraphQL Federation gateway with Apollo Router across Java microservices — frontend teams got one clean API",
      "Spark / Databricks / dbt analytics platform on Snowflake and BigQuery — stakeholders actually used it to make decisions",
    ],
  },
  {
    title: "Senior Frontend Engineer",
    company: "PRI Talent",
    location: "Remote",
    date: "Jul 2016 – May 2018",
    bullets: [
      "Built React and Angular SPAs with Flux state management and WCAG compliance — Lighthouse scores that held up",
      "Migrated JSP/Servlet apps to React and Angular — page load times dropped substantially",
      "Shipped a shared TypeScript component library with Storybook docs, Jenkins and Travis CI, automated E2E tests",
      "Trimmed bundle sizes through code splitting, lazy loading, and minification — meaningful Core Web Vitals gains without a rewrite",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.querySelectorAll(".fade-up").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 120);
        });
      }),
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 bg-[#0a0e1a]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-tag">Work History</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-3">
            Where I&apos;ve Worked
          </h2>
        </div>

        <div className="relative pl-6 border-l-2 border-white/8">
          {jobs.map((job, i) => (
            <div
              key={job.title + job.company}
              className={`fade-up relative mb-10 last:mb-0`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Dot */}
              <div className="absolute -left-[1.85rem] top-1.5 w-3 h-3 rounded-full bg-[#38bdf8] border-2 border-[#0a0e1a] shadow-[0_0_0_2px_#38bdf8]" />

              <div className="card p-6 hover:border-[#38bdf8]/25">
                <div className="flex flex-wrap justify-between items-start gap-3 mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white">{job.title}</h3>
                    <p className="text-[#38bdf8] text-sm mt-0.5">
                      {job.company} &mdash; {job.location}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-[#6e7681] bg-white/5 border border-white/8 px-3 py-1.5 rounded-full whitespace-nowrap">
                    {job.date}
                  </span>
                </div>
                <ul className="space-y-2">
                  {job.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-[#8b949e] leading-relaxed">
                      <span className="text-[#38bdf8]/60 mt-0.5 shrink-0 text-xs">→</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
