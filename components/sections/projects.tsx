"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "Optical Shop E-commerce",
    desc: "E-commerce platform for optical products.",
    stack: ["React", "Node", "Express", "MongoDB", "JWT"],
    img: "/optical-shop-ecommerce-screenshot.jpg",
    link: "https://vision-craft-opal.vercel.app",
  },
  {
    title: "MegaBlog – Blogging Platform",
    desc: "Modern blog app with rich text editor and Appwrite backend.",
    stack: ["React 18", "Redux Toolkit", "Vite", "Tailwind", "Appwrite", "TinyMCE"],
    img: "/blogging-platform-megablog-screenshot.jpg",
    link: "https://blog-app-nu-tawny.vercel.app/",
  },
  {
    title: "OpenChat – AI Chat App",
    desc: "Conversational AI chat application.",
    stack: ["Next.js", "Tailwind", "Google Gemini API"],
    img: "/openchat-ai-chat-app-screenshot.jpg",
    link: "https://open-chat-io.vercel.app/",
  },
  {
    title: "TradeLab – Crypto Trading Simulator",
    desc: "Real-time crypto trading simulator with authentication, live price updates, and socket-based trade management.",
    stack: ["Next.js", "Tailwind CSS", "shadcn/ui", "Axios", "socket.io-client", "Auth"],
    img: "/tradelab-crypto-trading-simulator-dashboard.jpg",
    link: "https://trade-lab-red.vercel.app/",
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
        className="mb-8 text-2xl font-semibold"
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Card className="group overflow-hidden border-border bg-card">
              <div className="overflow-hidden">
                <img
                  src={p.img || "/placeholder.svg"}
                  alt={`${p.title} screenshot`}
                  className="aspect-video w-full transform object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-lg">{p.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-foreground/80">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {p.link && (
                  <div className="mt-4">
                    <Button asChild variant="outline" size="sm" className="gap-1">
                      <a href={p.link} target="_blank" rel="noopener noreferrer">
                        Visit <ExternalLink size={14} />
                      </a>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
