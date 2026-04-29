"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Optical Shop E-commerce",
    desc: "Full-stack e-commerce platform with product catalog, authentication, and admin dashboard for managing orders and inventory.",
    features: ["JWT Auth", "Admin Dashboard", "Product Management"],
    stack: ["React", "Node.js", "Express", "MongoDB"],
    img: "/images/visionCraft.jpg",
    live: "https://vision-craft-opal.vercel.app",
    github: "https://github.com/Kirtan82004/VisionCraft",
  },
  {
    title: "MegaBlog – Blogging Platform",
    desc: "Modern blogging platform with rich text editor, global state management, and backend integration using Appwrite.",
    features: ["Rich Text Editor", "Redux Toolkit", "Auth System"],
    stack: ["React", "Redux", "Tailwind", "Appwrite"],
    img: "/images/megablog.jpg",
    live: "https://blog-app-nu-tawny.vercel.app/",
    github: "https://github.com/Kirtan82004/Blog-app",
  },
  {
    title: "TodoPro – Task Management App",
    desc: "Productivity-focused task management application with clean UI and efficient state handling.",
    features: ["CRUD Operations", "State Management", "Responsive UI"],
    stack: ["React", "Tailwind", "Redux Toolkit"],
    img: "/images/TodoPro.png",
    live: "https://todopro-kappa.vercel.app/",
    github: "https://github.com/Kirtan82004/TodoPro-Frontend",
  },
  {
    title: "Bamuso Ayurveda – Freelance Project",
    desc: "Professional business website developed for an Ayurveda brand to showcase products and improve online presence.",
    features: ["Responsive Design", "SEO Optimized", "Modern UI"],
    stack: ["Next.js", "Tailwind CSS"],
    img: "/images/bamuso.png",
    live: "https://bamuso-ayurveda.vercel.app/",
    github: "https://github.com/Kirtan82004/ayurveda",
  },
]

export function Projects() {
  return (
    <div className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-3 text-2xl font-semibold"
      >
        Projects
      </motion.h2>

      {/* 🔥 small intro */}
      <p className="mb-8 text-sm text-muted-foreground max-w-2xl">
        Here are some of the real-world applications I’ve built using the MERN stack and modern web technologies.
      </p>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
          >
            <Card className="group overflow-hidden border-border bg-card">
              <div className="overflow-hidden">
                <img
                  src={p.img || "/placeholder.svg"}
                  alt={`${p.title} screenshot`}
                  className="aspect-video w-full object-cover transition duration-500 group-hover:scale-[1.05]"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-foreground/80">{p.desc}</p>

                {/* 🔥 Features */}
                <ul className="mt-3 text-xs text-muted-foreground list-disc list-inside space-y-1">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>

                {/* Stack */}
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-3">
                  {p.live && (
                    <Button asChild size="sm" className="gap-1">
                      <a href={p.live} target="_blank">
                        Live <ExternalLink size={14} />
                      </a>
                    </Button>
                  )}

                  {p.github && (
                    <Button asChild variant="outline" size="sm" className="gap-1">
                      <a href={p.github} target="_blank">
                        Code <Github size={14} />
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}