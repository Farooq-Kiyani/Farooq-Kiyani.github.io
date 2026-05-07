import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M. Farooq — Senior Software Engineer",
  description:
    "Senior software engineer with 10 years of experience. Full-stack, AI/ML pipelines, cloud infrastructure across AWS, Azure & GCP.",
  keywords: [
    "M. Farooq", "Senior Software Engineer", "Full Stack Developer", "AI Engineer",
    "Java Spring Boot", "Python FastAPI", "LangGraph", "React", "Next.js", "Kubernetes",
  ],
  authors: [{ name: "M. Farooq" }],
  openGraph: {
    title: "M. Farooq — Senior Software Engineer",
    description: "10 years shipping systems that scale. Full-stack, AI/ML, Cloud.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-[#0a0e1a] text-white">{children}</body>
    </html>
  );
}
