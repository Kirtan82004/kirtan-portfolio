"use client"

import type React from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Education } from "@/components/sections/education"
import { Skills } from "@/components/sections/skills"
import { Projects } from "@/components/sections/projects"
import { Certifications } from "@/components/sections/certifications"
import { Contact } from "@/components/sections/contact"

export default function HomePage() {
  // Brand palette scoped to this page
  // We limit to exactly 5 colors total:
  // - brand-bg: #FDEBD0
  // - brand-soft: #F7CAC9
  // - brand-primary: #F75270
  // - brand-accent: #DC143C
  // - brand-ink: #111111 (single neutral)
  return (
    <main
      style={
        {
          // map brand palette to semantic tokens locally
          // background and text
          ["--brand-bg" as any]: "#E9B3FB",
          ["--brand-soft" as any]: "#E9B3FB",
          ["--brand-primary" as any]: "#6F00FF",
          ["--brand-accent" as any]: "#3B0270",
          ["--brand-ink" as any]: "#111111",

          ["--background" as any]: "var(--brand-bg)",
          ["--foreground" as any]: "var(--brand-ink)",
          // components
          ["--card" as any]: "var(--brand-bg)",
          ["--card-foreground" as any]: "var(--brand-ink)",
          ["--popover" as any]: "var(--brand-bg)",
          ["--popover-foreground" as any]: "var(--brand-ink)",
          // primary/secondary/accent
          ["--primary" as any]: "var(--brand-primary)",
          ["--primary-foreground" as any]: "var(--brand-bg)",
          ["--secondary" as any]: "var(--brand-soft)",
          ["--secondary-foreground" as any]: "var(--brand-ink)",
          ["--accent" as any]: "var(--brand-accent)",
          ["--accent-foreground" as any]: "var(--brand-bg)",
          // borders/ring
          ["--border" as any]: "color-mix(in oklch, var(--brand-ink) 15%, var(--brand-bg))",
          ["--ring" as any]: "color-mix(in oklch, var(--brand-accent) 40%, var(--brand-bg))",
        } as React.CSSProperties
      }
      className="relative min-h-dvh bg-background text-foreground"
    >
      <AnimatedBackground />
      <Navbar />
      <section id="home" className="relative">
        <Hero />
      </section>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        <section id="about">
          <About />
        </section>
        <section id="education">
          <Education />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="certifications">
          <Certifications />
        </section>
        <section id="contact" className="mb-16">
          <Contact />
        </section>
      </div>

      <footer className="relative border-t border-border/60 py-6 text-center text-sm">
        <p className="text-pretty">
          © {new Date().getFullYear()} Kirtan — Built with Next.js, Tailwind CSS, and Framer Motion
        </p>
      </footer>
    </main>
  )
}
