"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Rocket } from "lucide-react"

const skills = [
  { icon: Code2, label: "MERN Stack" },
  { icon: Palette, label: "UI/UX" },
  { icon: Rocket, label: "Problem Solving" },
]

export function About() {
  return (
    <div className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px -10% 0px" }}
        transition={{ duration: 0.5 }}
        className="mb-6 text-2xl font-semibold"
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl text-pretty text-foreground/80 leading-relaxed"
      >
        I&apos;m a BCA student and aspiring Full Stack Developer with hands-on experience in React.js, Node.js, Express,
        and MongoDB. I enjoy designing thoughtful interfaces and building scalable, user-friendly applications. I focus
        on clean design, robust architecture, and continuous learning.
      </motion.p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {skills.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition hover:bg-secondary"
          >
            <div className="flex size-9 items-center justify-center rounded-md bg-primary/15 text-primary transition group-hover:scale-105">
              <Icon className="size-5" aria-hidden="true" />
            </div>
            <span className="font-medium">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
