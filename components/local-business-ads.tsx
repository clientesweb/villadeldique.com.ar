"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Globe } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const ads = [
  {
    id: 1,
    name: "Café del Lago",
    type: "Restaurante",
    image:
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Disfruta de las mejores vistas del lago mientras saboreas nuestro café de especialidad.",
    address: "Av. Costanera 123, Villa del Dique",
    phone: "+54 9 3546 123456",
    website: "https://cafedellago.com",
  },
  {
    id: 2,
    name: "Hotel Villa del Dique",
    type: "Alojamiento",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Experimenta el lujo y la comodidad en el corazón de Villa del Dique.",
    address: "Calle Principal 456, Villa del Dique",
    phone: "+54 9 3546 789012",
    website: "https://hotelvilladeldique.com",
  },
  {
    id: 3,
    name: "Bar La Esquina",
    type: "Bar",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "El lugar perfecto para disfrutar de cócteles artesanales y música en vivo.",
    address: "Esquina de Av. San Martín y Belgrano, Villa del Dique",
    phone: "+54 9 3546 345678",
    website: "https://barlaesquina.com",
  },
  {
    id: 4,
    name: "Tienda del Valle",
    type: "Local Comercial",
    image:
      "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    description: "Encuentra los mejores productos regionales y artesanías locales.",
    address: "Av. de los Artesanos 789, Villa del Dique",
    phone: "+54 9 3546 901234",
    website: "https://tiendadelvalle.com",
  },
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
    <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Descubre Negocios Locales</h2>
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="md:flex">
                <div className="md:w-1/2">
                  <div className="relative h-64 md:h-full">
                    <Image
                      src={ads[currentIndex].image || "/placeholder.svg"}
                      alt={ads[currentIndex].name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 p-6 md:p-8">
                  <h3 className="text-2xl font-bold mb-2">{ads[currentIndex].name}</h3>
                  <p className="text-sm text-secondary mb-4">{ads[currentIndex].type}</p>
                  <p className="mb-6">{ads[currentIndex].description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 mr-2 text-secondary" />
                      <span className="text-sm">{ads[currentIndex].address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-2 text-secondary" />
                      <span className="text-sm">{ads[currentIndex].phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-secondary" />
                      <a
                        href={ads[currentIndex].website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-secondary hover:underline"
                      >
                        {ads[currentIndex].website}
                      </a>
                    </div>
                  </div>
                  <Button
                    className="mt-6 bg-secondary hover:bg-secondary/90 text-white"
                    onClick={() => window.open(ads[currentIndex].website, "_blank")}
                  >
                    Visitar Sitio Web
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-center mt-4">
            {ads.map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full mx-1 ${index === currentIndex ? "bg-secondary" : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

