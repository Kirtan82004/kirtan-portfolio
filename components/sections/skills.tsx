"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"

const groups = [
  {
    title: "🚀 Core Stack (Strong)",
    items: ["React.js", "Next.js", "Node.js", "Express.js", "MongoDB"],
  },
  {
    title: "⚡ Advanced Features",
    items: ["JWT Authentication", "Socket.IO", "REST APIs", "Redux Toolkit"],
  },
  {
    title: "🎨 Frontend & UI",
    items: ["Tailwind CSS", "Responsive Design", "Accessibility", "Figma"],
  },
  {
    title: "🛠️ Tools & Workflow",
    items: ["Git", "GitHub", "Postman", "Vite"],
  },
  {
    title: "🧠 Concepts",
    items: ["State Management", "API Integration", "System Design Basics"],
  },
  {
    title: "🤝 Soft Skills",
    items: ["Communication", "Problem Solving", "Team Collaboration"],
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
        className="mb-3 text-2xl font-semibold"
      >
        Technical Skills
      </motion.h2>

      {/* 🔥 Add small description */}
      <p className="mb-8 text-sm text-muted-foreground max-w-2xl">
        I specialize in building full-stack web applications using the MERN stack, with experience in real-time features, authentication systems, and scalable backend architecture.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {groups.map((group, index) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl border border-border bg-card p-5 transition"
          >
            <h3 className="mb-3 font-semibold text-primary">{group.title}</h3>

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

      {/* 🔥 Highlight line */}
      <p className="mt-8 text-sm text-center text-muted-foreground">
        Focused on building scalable, real-world applications 🚀
      </p>
    </div>
  )
}