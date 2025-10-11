"use client"

import { motion } from "framer-motion"
import { Award } from "lucide-react"

const certs = [
  { name: "NPTEL Cloud Computing", issuer: "NPTEL" },
  { name: "JavaScript Algorithms and Data Structures", issuer: "freeCodeCamp" },
  { name: "Responsive Web Design", issuer: "freeCodeCamp" },
]

export function Certifications() {
  return (
    <div className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-2xl font-semibold"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {certs.map((c) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 rounded-lg border border-border bg-card p-4"
          >
            <div className="flex size-10 items-center justify-center rounded-md bg-primary/15 text-primary">
              <Award className="size-5" aria-hidden="true" />
            </div>
            <div>
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-foreground/70">{c.issuer}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
