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
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?auto=format&fit=crop&q=80&w=1600",
    price: "Desde $15.000 por noche",
    location: "Orilla del Lago, Villa del Dique",
    rating: 4.9,
    amenities: ["2-4 personas", "Wi-Fi gratis", "Desayuno incluido"],
  },
  {
    id: 2,
    title: "Posada del Sol",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1600",
    price: "Desde $12.000 por noche",
    location: "Centro de Villa del Dique",
    rating: 4.7,
    amenities: ["2-3 personas", "Wi-Fi gratis", "Piscina"],
  },
  {
    id: 3,
    title: "Loft Montaña",
    image: "https://images.unsplash.com/photo-1601918774946-25832a4be0d6?auto=format&fit=crop&q=80&w=1600",
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
                    <div className="md:w-2/5">
                      <div className="relative h-64 md:h-full">
                        <Image
                          src={accommodation.image || "/placeholder.svg"}
                          alt={accommodation.title}
                          layout="fill"
                          objectFit="cover"
                          className="transition-transform duration-300 hover:scale-105"
                        />
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

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm"
            onClick={prevAccommodation}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm"
            onClick={nextAccommodation}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  )
}

