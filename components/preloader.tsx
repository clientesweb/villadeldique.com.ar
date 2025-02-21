"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Preloader() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])

  interface Particle {
    x: number
    y: number
    speed: number
    size: number
    color: string
  }

  useEffect(() => {
    const hasShownPreloader = localStorage.getItem("hasShownPreloader")

    if (!hasShownPreloader) {
      // Simulate loading progress
      const progressInterval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(progressInterval)
            return 100
          }
          return prev + 1
        })
      }, 30)

      const timer = setTimeout(() => {
        setLoading(false)
        localStorage.setItem("hasShownPreloader", "true")
      }, 3000)

      return () => {
        clearTimeout(timer)
        clearInterval(progressInterval)
      }
    } else {
      setLoading(false)
    }
  }, [])

  // Animation canvas effect
  useEffect(() => {
    if (!loading) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size with device pixel ratio for sharp rendering
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
    }

    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = Array.from({ length: 50 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 1,
        size: 1 + Math.random() * 2,
        color: Math.random() > 0.5 ? "#2196F3" : "#FFC107",
      }))
    }
    initParticles()

    // Animation loop
    let animationFrameId: number
    let time = 0

    const animate = () => {
      time += 0.01
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw mountain silhouette with optimized path
      ctx.fillStyle = "#0A0F2C"
      ctx.beginPath()
      ctx.moveTo(0, canvas.height * 0.7)
      ctx.lineTo(canvas.width * 0.3, canvas.height * 0.4)
      ctx.lineTo(canvas.width * 0.5, canvas.height * 0.6)
      ctx.lineTo(canvas.width * 0.7, canvas.height * 0.3)
      ctx.lineTo(canvas.width, canvas.height * 0.5)
      ctx.lineTo(canvas.width, canvas.height)
      ctx.lineTo(0, canvas.height)
      ctx.fill()

      // Draw lake reflection with reduced opacity
      ctx.fillStyle = "#2196F3"
      ctx.globalAlpha = 0.2
      ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3)
      ctx.globalAlpha = 1

      // Batch particle rendering for better performance
      ctx.globalAlpha = 0.6
      particlesRef.current.forEach((particle) => {
        particle.y -= particle.speed
        if (particle.y < 0) {
          particle.y = canvas.height
          particle.x = Math.random() * canvas.width
        }

        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [loading])

  if (!loading) return null

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={progress}
          aria-label="Cargando Villa del Dique Digital"
        >
          <canvas
            ref={canvasRef}
            className="absolute inset-0 bg-gradient-to-b from-primary via-primary/90 to-secondary/30"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative flex flex-col items-center"
            >
              <div className="relative mb-8">
                <motion.div
                  className="absolute inset-0 rounded-full bg-accent/20"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/villa-del-dique-digital-G5Uqb5VLONnrkYuWMo4gZebp6LtQA7.png"
                  alt="Villa del Dique Digital"
                  width={240}
                  height={100}
                  className="relative z-10"
                  priority
                />
              </div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h1 className="text-4xl font-bold text-white mb-2">
                  Villa del Dique
                  <span className="block text-accent">Digital</span>
                </h1>
                <p className="text-white/80 mb-6">Descubriendo nuestra ciudad</p>

                {/* Progress bar */}
                <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-accent"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <p className="text-white/60 text-sm mt-2">Cargando experiencia...</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

