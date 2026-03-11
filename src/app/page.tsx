import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import TechDNA from "@/components/TechDNA";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Projects />
      <TechDNA />
      <Contact />

      {/* Footer */}
      <footer className="border-t border-[var(--border-subtle)] px-6 py-8 text-center text-sm text-[var(--text-muted)]">
        <p>&copy; 2025 Rares. Built with Next.js, Tailwind CSS &amp; Framer Motion.</p>
      </footer>
    </main>
  );
}
