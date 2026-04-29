"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[88dvh] flex-col items-center justify-center px-4 text-center">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-2 md:text-left">
        {/* Copy block */}
        <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            Faridabad, Haryana
          </div>

          <div className="space-y-6 order-2 md:order-1">

  {/* Small intro */}
  <p className="text-sm text-muted-foreground">
    👋 Hi, I'm Kirtan
  </p>

  {/* 🔥 MAIN HEADLINE */}
  <h1 className="text-4xl font-bold leading-tight md:text-6xl">
    <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
      Full Stack Developer
    </span>
  </h1>

  {/* Subheading */}
  <p className="text-base text-foreground/80 md:text-lg max-w-xl">
    I build scalable web applications using React, Node.js, and MongoDB — 
    focused on performance, clean architecture, and real-world impact.
  </p>

  {/* 🔥 Proof line */}
  <p className="text-sm text-muted-foreground">
    🚀 Built real-time apps, admin dashboards & AI-powered tools
  </p>

  {/* Buttons */}
  <div className="flex flex-wrap gap-3">
    <Button asChild>
      <a href="#projects">View Projects</a>
    </Button>

    <Button variant="outline" asChild>
      <a href="/Kirtan-Resume.pdf" target="_blank">Resume</a>
    </Button>

    <Button variant="ghost" asChild>
      <a href="#contact">Contact</a>
    </Button>
  </div>

</div>
        </motion.div>

        {/* Animated portrait */}
        <motion.div
          className="relative order-1 mx-auto w-56 md:order-2 md:w-80 group"
          animate={{ y: [0, -8, 0] }}
          whileHover={{ rotate: 1.5, scale: 1.02 }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          {/* Rotating gradient ring (subtle accent using theme tokens) */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-[-10px] -z-10 rounded-[2rem]"
            style={{
              background: "conic-gradient(from 0deg, var(--primary), var(--accent), var(--secondary), var(--primary))",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          {/* Inner cutout to form a ring */}
          <div className="absolute inset-[-6px] -z-10 rounded-[1.8rem] bg-background" />

          {/* Image card with hexagon clip and soft glow */}
          <div
            className="relative aspect-square overflow-hidden rounded-[1.6rem] border border-border shadow-xl"
            style={{
  filter: "drop-shadow(0 0 40px rgba(99,102,241,0.6))",
}}
          >
            <Image
              src="/images/image.png"
              alt="Kirtan portrait"
              fill
              sizes="(min-width: 768px) 20rem, 14rem"
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
