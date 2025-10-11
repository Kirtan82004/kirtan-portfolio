"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export function AnimatedBackground({ className }: { className?: string }) {
  // Subtle animated gradient blobs using only the brand palette tokens
  return (
    <div aria-hidden="true" className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute -top-20 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--primary) 0%, transparent 70%)",
          opacity: 0.25,
        }}
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 18, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-10 h-[28rem] w-[28rem] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--secondary) 0%, transparent 70%)",
          opacity: 0.35,
        }}
        animate={{ y: [0, 15, 0], x: [0, -10, 0] }}
        transition={{ duration: 16, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-10 top-32 h-[22rem] w-[22rem] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--accent) 0%, transparent 70%)",
          opacity: 0.18,
        }}
        animate={{ y: [0, -10, 0], x: [0, 12, 0] }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
    </div>
  )
}
