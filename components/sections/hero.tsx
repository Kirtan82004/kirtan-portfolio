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
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <MapPin className="size-4" aria-hidden="true" />
            Faridabad, Haryana
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight md:text-6xl">Hi, I&apos;m Kirtan</h1>
          <p className="text-pretty text-base leading-relaxed text-foreground/80 md:text-lg">
            Aspiring Full Stack Developer crafting clean, modern, and performant web experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <Button asChild className="bg-primary text-primary-foreground hover:opacity-90">
              <a href="/Kirtan-Resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume
              </a>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-border bg-background text-foreground hover:bg-secondary"
            >
              <a href="#contact">Contact Me</a>
            </Button>
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
              clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
              filter: "drop-shadow(0 0 32px var(--primary))",
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
