"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Preloader() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const hasShownPreloader = localStorage.getItem("hasShownPreloader")

    if (!hasShownPreloader) {
      const timer = setTimeout(() => {
        setLoading(false)
        localStorage.setItem("hasShownPreloader", "true")
      }, 3000)
      return () => clearTimeout(timer)
    } else {
      setLoading(false)
    }
  }, [])

  if (!loading) return null

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-secondary"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1, 1.2, 1] }}
            transition={{ duration: 1.5, times: [0, 0.4, 0.8, 1] }}
            className="relative w-64 h-64 flex items-center justify-center"
          >
            <motion.div
              animate={{
                rotate: 360,
                background: [
                  "linear-gradient(0deg, #FFC107 0%, transparent 50%)",
                  "linear-gradient(180deg, #FFC107 0%, transparent 50%)",
                  "linear-gradient(360deg, #FFC107 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-0 rounded-full"
            />
            <motion.div
              animate={{
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="absolute inset-2 rounded-full border-2 border-secondary"
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/villa-del-dique-digital-G5Uqb5VLONnrkYuWMo4gZebp6LtQA7.png"
                alt="Villa del Dique Digital"
                width={200}
                height={80}
                className="mb-4 mx-auto"
              />
              <motion.h1
                className="text-3xl font-bold text-white"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Villa del Dique
                <span className="block text-accent">Digital</span>
              </motion.h1>
              <motion.p
                className="text-sm text-white/80 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                Descubriendo nuestra ciudad
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

