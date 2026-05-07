"use client";
import { useState, useEffect } from "react";

const links = ["About", "Skills", "Projects", "Experience", "Education", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#0a0e1a]/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="font-mono text-base font-semibold text-white tracking-tight"
        >
          <span className="text-[#38bdf8]">&lt; </span>M. Farooq<span className="text-[#38bdf8]"> /&gt;</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-[#8b949e] hover:text-white text-sm font-medium px-3 py-2 rounded-lg hover:bg-white/5 transition-all"
              >
                {l}
              </a>
            </li>
          ))}
          <li>
            <a
              href="mailto:farooqkiyani.engr@gmail.com"
              className="ml-2 bg-[#38bdf8] text-[#0a0e1a] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-white transition-all"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-[#8b949e] transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#8b949e] transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-[#8b949e] transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0e1a]/98 border-t border-white/5 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-[#8b949e] hover:text-white text-lg font-medium transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="mailto:farooqkiyani.engr@gmail.com"
            className="mt-2 bg-[#38bdf8] text-[#0a0e1a] font-semibold px-4 py-2.5 rounded-lg text-center hover:bg-white transition-all"
          >
            Hire Me
          </a>
        </div>
      )}
    </nav>
  );
}
