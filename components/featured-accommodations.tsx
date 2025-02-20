"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Globe, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const ads = [
  {
    id: 1,
    name: "Café del Lago",
    type: "Restaurante",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1000&q=80",
    description: "Disfruta de las mejores vistas del lago mientras saboreas nuestro café de especialidad.",
    address: "Av. Costanera 123, Villa del Dique",
    phone: "+54 9 3546 123456",
    website: "https://cafedellago.com",
  },
  // ... other ads
]

export default function LocalBusinessAds() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % ads.length)
    }, 5000) // Cambia cada 5 segundos

    return () => clearInterval(timer)
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
            Descubre Negocios
            <span className="block text-accent mt-2">Locales</span>
          </h2>
          <p className="text-lg text-gray-300">
            Explora y apoya a los mejores establecimientos de Villa del Dique. Desde cafeterías con vistas
            impresionantes hasta tiendas de artesanías únicas.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={ads[currentIndex].image || "/placeholder.svg"}
                      alt={ads[currentIndex].name}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{ads[currentIndex].name}</h3>
                      <p className="text-sm text-accent font-semibold">{ads[currentIndex].type}</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <p className="text-gray-300 mb-6">{ads[currentIndex].description}</p>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-300">
                      <MapPin className="w-5 h-5 mr-2 text-accent" />
                      <span className="text-sm">{ads[currentIndex].address}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Phone className="w-5 h-5 mr-2 text-accent" />
                      <span className="text-sm">{ads[currentIndex].phone}</span>
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Globe className="w-5 h-5 mr-2 text-accent" />
                      <a
                        href={ads[currentIndex].website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-accent hover:underline"
                      >
                        {ads[currentIndex].website}
                      </a>
                    </div>
                  </div>
                  <Button
                    className="w-full bg-accent hover:bg-accent/90 text-primary transition-all duration-300 group"
                    onClick={() => window.open(ads[currentIndex].website, "_blank")}
                  >
                    Visitar Sitio Web
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-4">
            {ads.map((_, index) => (
              <motion.div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 cursor-pointer ${
                  index === currentIndex ? "bg-accent" : "bg-gray-400"
                }`}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}