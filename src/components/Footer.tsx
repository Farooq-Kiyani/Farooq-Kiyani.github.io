export default function Footer() {
  return (
    <footer className="bg-[#111827] border-t border-white/5 py-6 text-center text-xs text-[#6e7681]">
      <div className="max-w-6xl mx-auto px-6">
        <p>© {new Date().getFullYear()} M. Farooq · Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
