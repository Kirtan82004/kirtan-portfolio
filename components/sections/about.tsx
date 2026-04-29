"use client"

import { motion } from "framer-motion"
import { Code2, Palette, Rocket } from "lucide-react"

const skills = [
  { icon: Code2, label: "MERN Stack Development" },
  { icon: Palette, label: "UI/UX Design" },
  { icon: Rocket, label: "Problem Solving & Debugging" },
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
        I'm a Full Stack Developer (MERN) currently pursuing BCA, with hands-on experience in building real-world web applications using React.js, Node.js, Express, and MongoDB. 

        I have developed projects like a real-time chat application, an optical shop website with admin dashboard, and an e-commerce panel. My focus is on writing clean code, building scalable backend systems, and creating smooth user experiences.

        I'm actively looking for an internship where I can contribute, learn from experienced developers, and grow as a software engineer.
      </motion.p>

      {/* Highlight stats (🔥 high impact) */}
      <div className="mt-6 flex flex-wrap gap-6 text-sm text-muted-foreground">
        <span>🚀 3+ Full Stack Projects</span>
        <span>⚡ Real-time Apps (Socket.IO)</span>
        <span>🛠️ MERN Stack Specialist</span>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {skills.map(({ icon: Icon, label }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.03 }}
            className="group flex items-center gap-3 rounded-lg border border-border bg-card p-4 transition hover:bg-secondary"
          >
            <div className="flex size-9 items-center justify-center rounded-md bg-primary/15 text-primary transition group-hover:scale-110">
              <Icon className="size-5" aria-hidden="true" />
            </div>
            <span className="font-medium">{label}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}