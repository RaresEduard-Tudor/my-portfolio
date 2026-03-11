"use client";

import { motion } from "framer-motion";
import { FileText, Github, Linkedin } from "lucide-react";
import SectionHeading from "./SectionHeading";

const GITHUB_URL = "https://github.com/RaresEduard-Tudor";
const LINKEDIN_URL =
  "https://www.linkedin.com/in/rares-eduard-tudor-6885952aa/";
const RESUME_URL = "/resume.pdf"; // Place resume.pdf in /public

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          label="Contact"
          title="Let's Connect"
          subtitle="Interested in working together? Reach out directly."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mx-auto mt-12 flex max-w-md flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <a
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[var(--accent-blue)] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[var(--accent-blue)]/90 sm:w-auto"
          >
            <FileText className="h-4 w-4" />
            Resume
          </a>

          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border-accent)] bg-[var(--bg-card)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card-hover)] sm:w-auto"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-[var(--border-accent)] bg-[var(--bg-card)] px-6 py-3 text-sm font-medium text-[var(--text-primary)] transition-colors hover:bg-[var(--bg-card-hover)] sm:w-auto"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
