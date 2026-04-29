"use client"

import type React from "react"
import { motion } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { useState } from "react"

export function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState("")

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setStatus("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      })

      if (res.ok) {
        setStatus("✅ Message sent successfully!")
        setName("")
        setEmail("")
        setMessage("")
      } else {
        setStatus("❌ Failed to send message")
      }
    } catch (error) {
      setStatus("❌ Something went wrong")
    }

    setLoading(false)
  }

  return (
    <div className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-3 text-2xl font-semibold"
      >
        Contact
      </motion.h2>

      {/* 🔥 Strong CTA line */}
      <p className="mb-8 text-sm text-muted-foreground max-w-xl">
        I'm actively looking for internship opportunities. Feel free to reach out if you have a role, project, or collaboration in mind 🚀
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Info */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-border bg-card p-5"
        >
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <Phone className="size-4 text-primary" />
              <span className="text-foreground/80">+91 8377997202</span>
            </li>

            <li className="flex items-center gap-3">
              <Mail className="size-4 text-primary" />
              <a
                href="mailto:kirtan.go.tech@gmail.com"
                className="text-foreground/80 hover:underline"
              >
                kirtan.go.tech@gmail.com
              </a>
            </li>
          </ul>

          <div className="mt-6 flex items-center gap-3">
            <a
              href="https://www.linkedin.com/in/kirtan-kumar-2b0625338/"
              target="_blank"
              className="p-2 border rounded-full hover:scale-105"
            >
              <Linkedin size={16} />
            </a>

            <a
              href="https://github.com/kirtan82004"
              target="_blank"
              className="p-2 border rounded-full hover:scale-105"
            >
              <Github size={16} />
            </a>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-lg border border-border bg-card p-5"
        >
          <div className="grid gap-4">
            <Input
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <Input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Textarea
              placeholder="Tell me about your requirement..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="bg-primary text-white py-2 rounded-md hover:opacity-90"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {/* 🔥 Status Message */}
            {status && (
              <p className="text-sm text-muted-foreground">{status}</p>
            )}
          </div>
        </motion.form>
      </div>
    </div>
  )
}