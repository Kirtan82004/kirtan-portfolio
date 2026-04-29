"use client"

import { motion } from "framer-motion"

export function Education() {
  return (
    <div className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-2xl font-semibold"
      >
        Education
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border" aria-hidden="true" />

        {/* BCA */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative ml-8 rounded-lg border border-border bg-card p-5"
        >
          <div
            className="absolute left-3 top-5 size-2 -translate-x-1/2 rounded-full bg-accent ring-4 ring-accent/20"
            aria-hidden="true"
          />

          <h3 className="text-lg font-semibold">
            Bachelor of Computer Applications (BCA) <span className="text-sm text-muted-foreground">(2022 – 2025)</span>
          </h3>

          <p className="text-sm text-foreground/80">
            Echelon Institute of Technology, Faridabad
          </p>

          <p className="mt-2 text-sm">CGPA: <span className="font-medium">7.5</span></p>

          {/* 🔥 Add learning highlights */}
          <ul className="mt-3 space-y-1 text-sm text-foreground/80 list-disc list-inside">
            <li>Focused on Full Stack Development (MERN)</li>
            <li>Built real-world projects including chat app & admin dashboard</li>
            <li>Learned REST APIs, database design, and system architecture</li>
          </ul>
        </motion.div>

        {/* Optional: 12th */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative ml-8 mt-6 rounded-lg border border-border bg-card p-5"
        >
          <div
            className="absolute left-3 top-5 size-2 -translate-x-1/2 rounded-full bg-accent ring-4 ring-accent/20"
            aria-hidden="true"
          />

          <h3 className="text-lg font-semibold">
            12th (HBSE) <span className="text-sm text-muted-foreground">(2022)</span>
          </h3>

          <p className="text-sm text-foreground/80">
            Haryana Board of School Education
          </p>
        </motion.div>
      </div>
    </div>
  )
}