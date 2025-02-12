"use client"

import { useState, useEffect } from "react"
import { ArrowRight } from "lucide-react"

const announcements = [
  "Últimas noticias de Villa del Dique",
  "Descubre los mejores lugares turísticos",
  "Eventos culturales esta semana",
  "Conoce los negocios locales destacados",
]

export default function TopBanner() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % announcements.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-[#FF0000] text-white py-3">
      <div className="container mx-auto text-center flex items-center justify-center">
        <ArrowRight className="mr-2 h-4 w-4" />
        <p className="text-sm font-medium animate-fade-in">{announcements[currentIndex]}</p>
      </div>
    </div>
  )
}

