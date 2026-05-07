"use client";
import { useEffect, useRef } from "react";

const contacts = [
  {
    icon: "✉️",
    label: "Email",
    value: "farooqkiyani.engr@gmail.com",
    href: "mailto:farooqkiyani.engr@gmail.com",
    placeholder: false,
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+1 (209) 889-0580",
    href: "tel:+12098890580",
    placeholder: false,
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "[Add your LinkedIn URL]",
    href: "#",
    placeholder: true,
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/Farooq-Kiyani",
    href: "https://github.com/Farooq-Kiyani",
    placeholder: false,
  },
];

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.querySelectorAll(".fade-up").forEach((el, i) => {
          setTimeout(() => el.classList.add("visible"), i * 80);
        });
      }),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="py-24 bg-[#0a0e1a]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-6">
          <span className="section-tag">Contact</span>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mt-3">
            Get In Touch
          </h2>
          <p className="text-[#8b949e] mt-4 text-base max-w-md mx-auto">
            Available for full-time roles, contract work, and consulting. Willing to relocate anywhere.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              className={`fade-up card p-6 flex flex-col items-center text-center gap-3 hover:-translate-y-1 hover:border-[#38bdf8]/40 transition-all ${
                c.placeholder ? "border-dashed border-white/10 opacity-60" : ""
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <span className="text-3xl">{c.icon}</span>
              <span className="text-sm font-semibold text-white">{c.label}</span>
              <span className={`text-xs break-all ${c.placeholder ? "text-[#6e7681] italic" : "text-[#8b949e]"}`}>
                {c.value}
              </span>
            </a>
          ))}
        </div>

        <p className="text-center text-xs text-[#6e7681] mt-6 italic">
          * LinkedIn card is a placeholder — replace the href in Contact.tsx with your LinkedIn URL.
        </p>
      </div>
    </section>
  );
}
