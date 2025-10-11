"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const groups = [
  {
    title: "Frontend",
    items: ["React", "Next.js", "Tailwind CSS", "Redux Toolkit"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vite", "Appwrite"],
  },
  {
    title: "Concepts",
    items: ["REST APIs", "Authentication", "State Management"],
  },
  {
    title: "Design",
    items: ["Figma", "Responsive Design", "Accessibility"],
  },
  {
    title: "Soft Skills",
    items: ["Communication", "Teamwork", "Problem-Solving"],
  },
]

export function Skills() {
  return (
    <div className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-8 text-2xl font-semibold"
      >
        Technical Skills
      </motion.h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {groups.map((group) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-lg border border-border bg-card p-5"
          >
            <h3 className="mb-3 font-medium">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="outline"
                  className="border-border bg-background text-foreground hover:bg-secondary transition"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
