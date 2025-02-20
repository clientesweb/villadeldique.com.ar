"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const INSTAGRAM_POSTS = ["DE8ZYSUuV34", "DE5MwjSuVi_", "DE1efOSu98a", "DExZxiLO-b3"]

declare global {
  interface Window {
    instgrm?: {
      Embeds: {
        process: () => void
      }
    }
  }
}

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement("script")
    script.src = "https://www.instagram.com/embed.js"
    script.async = true
    document.body.appendChild(script)

    // Clean up
    return () => {
      document.body.removeChild(script)
    }
  }, [])

  useEffect(() => {
    // Trigger embed rendering when available
    if (window.instgrm) {
      window.instgrm.Embeds.process()
    }
  }, [])

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Síguenos en
            <span className="block text-accent mt-2">Instagram</span>
          </h2>
          <p className="text-lg text-gray-300">
            Mantente al día con las últimas novedades, eventos y lugares más destacados de Villa del Dique.
          </p>
        </motion.div>

        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {INSTAGRAM_POSTS.map((postId, index) => (
            <motion.div
              key={postId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="instagram-embed-container aspect-square bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden"
            >
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={`https://www.instagram.com/p/${postId}/`}
                data-instgrm-version="14"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "1rem",
                  boxShadow: "none",
                  margin: "1px",
                  maxWidth: "540px",
                  minWidth: "326px",
                  padding: "0",
                  width: "calc(100% - 2px)",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-accent/10 via-secondary/5 to-transparent -z-10 blur-3xl" />
        <div className="hidden lg:block absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/10 via-secondary/5 to-transparent -z-10 blur-3xl" />
      </div>
    </section>
  )
}
