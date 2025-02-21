"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star, MapPin, Users, Wifi, Coffee } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const accommodations = [
  {
    id: 1,
    title: "Cabaña del Lago",
    image: "/images/accommodations/cabana-del-lago.webp",
    price: "Desde $15.000 por noche",
    location: "Orilla del Lago, Villa del Dique",
    rating: 4.9,
    amenities: ["2-4 personas", "Wi-Fi gratis", "Desayuno incluido"],
  },
  {
    id: 2,
    title: "Posada del Sol",
    image: "/images/accommodations/posada-del-sol.webp",
    price: "Desde $12.000 por noche",
    location: "Centro de Villa del Dique",
    rating: 4.7,
    amenities: ["2-3 personas", "Wi-Fi gratis", "Piscina"],
  },
  {
    id: 3,
    title: "Loft Montaña",
    image: "/images/accommodations/loft-montana.webp",
    price: "Desde $18.000 por noche",
    location: "Sierras de Villa del Dique",
    rating: 4.8,
    amenities: ["2-5 personas", "Vista panorámica", "Chimenea"],
  },
]

export default function FeaturedAccommodations() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % accommodations.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextAccommodation = () => {
    setCurrentIndex((prev) => (prev + 1) % accommodations.length)
  }

  const prevAccommodation = () => {
    setCurrentIndex((prev) => (prev - 1 + accommodations.length) % accommodations.length)
  }

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
            Alojamientos
            <span className="block text-accent mt-2">Destacados</span>
          </h2>
          <p className="text-lg text-gray-300">
            Descubre los mejores lugares para hospedarte en Villa del Dique. Desde cabañas junto al lago hasta lofts con
            vistas panorámicas.
          </p>
        </motion.div>

        <div className="relative overflow-hidden">
          <motion.div
            className="flex transition-all duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {accommodations.map((accommodation) => (
              <div key={accommodation.id} className="w-full flex-shrink-0">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl"
                >
                  <div className="md:flex">
                    <div className="md:w-2/5 relative">
                      <div className="relative h-64 md:h-full">
                        <Image
                          src={accommodation.image || "/placeholder.svg"}
                          alt={accommodation.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-105"
                        />
                      </div>
                      <div className="absolute inset-y-0 left-0 flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="ml-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm"
                          onClick={prevAccommodation}
                          aria-label="Alojamiento anterior"
                        >
                          <ChevronLeft className="h-6 w-6" />
                        </Button>
                      </div>
                      <div className="absolute inset-y-0 right-0 flex items-center">
                        <Button
                          variant="outline"
                          size="icon"
                          className="mr-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm"
                          onClick={nextAccommodation}
                          aria-label="Siguiente alojamiento"
                        >
                          <ChevronRight className="h-6 w-6" />
                        </Button>
                      </div>
                    </div>
                    <div className="md:w-3/5 p-6 md:p-8">
                      <h3 className="text-2xl font-bold mb-2 text-white">{accommodation.title}</h3>
                      <div className="flex items-center mb-4">
                        <MapPin className="text-accent w-5 h-5 mr-2" />
                        <p className="text-gray-300">{accommodation.location}</p>
                      </div>
                      <div className="flex items-center mb-4">
                        <Star className="text-accent w-5 h-5 mr-2" />
                        <span className="text-white font-semibold">{accommodation.rating}</span>
                      </div>
                      <p className="text-2xl font-bold text-accent mb-4">{accommodation.price}</p>
                      <div className="space-y-2 mb-6">
                        {accommodation.amenities.map((amenity, index) => (
                          <div key={index} className="flex items-center text-gray-300">
                            {index === 0 && <Users className="w-5 h-5 mr-2 text-accent" />}
                            {index === 1 && <Wifi className="w-5 h-5 mr-2 text-accent" />}
                            {index === 2 && <Coffee className="w-5 h-5 mr-2 text-accent" />}
                            <span>{amenity}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <Link href={`/alojamiento/${accommodation.id}`} passHref>
                          <Button className="bg-accent hover:bg-accent/90 text-primary">Ver Detalles</Button>
                        </Link>
                        <Link href={`https://wa.me/593987167782`} passHref>
                          <Button
                            variant="outline"
                            className="border-accent text-accent hover:bg-accent hover:text-primary"
                          >
                            Reservar
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

