"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const sponsors = [
  {
    id: 1,
    name: "Café del Lago",
    image:
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    website: "https://cafedellago.com",
  },
  {
    id: 2,
    name: "Hotel Villa del Dique",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    website: "https://hotelvilladeldique.com",
  },
  {
    id: 3,
    name: "Restaurante El Mirador",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    website: "https://elmirador.com",
  },
  {
    id: 4,
    name: "Náutica San Roque",
    image:
      "https://images.unsplash.com/photo-1528154291023-a6525fabe5b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    website: "https://nauticasanroque.com",
  },
  {
    id: 5,
    name: "Inmobiliaria del Valle",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    website: "https://inmobiliariadelvalle.com",
  },
  {
    id: 6,
    name: "Supermercado La Amistad",
    image:
      "https://images.unsplash.com/photo-1578916171728-46686eac8d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    website: "https://laamistad.com",
  },
]

export default function SponsorSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % sponsors.length)
    }, 3000) // Cambia cada 3 segundos

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-20 bg-gradient-to-br from-[#0A0F2C] via-[#0A0F2C]/90 to-[#2196F3] text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Nuestros <span className="text-[#FFC107]">Patrocinadores</span>
        </h2>
        <p className="text-center text-xl mb-12 max-w-3xl mx-auto">
          Gracias a estos increíbles negocios y empresas de Villa del Dique, ¡este proyecto se hace realidad! Su apoyo
          es fundamental para mantener viva nuestra comunidad digital.
        </p>

        <div className="relative h-64 mb-16 overflow-hidden">
          <div
            className="absolute inset-0 flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {sponsors.map((sponsor, index) => (
              <div key={sponsor.id} className="w-full flex-shrink-0 flex justify-center items-center">
                <a
                  href={sponsor.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-56 h-56 group"
                >
                  <Image
                    src={sponsor.image || "/placeholder.svg"}
                    alt={sponsor.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-semibold">{sponsor.name}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">¿Quieres ser parte de nuestra comunidad de patrocinadores?</h3>
          <Button
            size="lg"
            className="bg-[#FFC107] hover:bg-[#FFC107]/90 text-[#0A0F2C] text-lg px-8 py-6 rounded-full transition-transform hover:scale-105"
            onClick={() => {
              // Aquí puedes agregar la lógica para abrir un modal o redirigir a una página de contacto
              console.log("Abrir formulario de contacto para patrocinadores")
            }}
          >
            Conviértete en Patrocinador
            <ArrowRight className="ml-2 h-6 w-6" />
          </Button>
          <p className="mt-4 text-sm opacity-80">
            Únete a nosotros y ayuda a que Villa del Dique Digital siga creciendo
          </p>
        </div>
      </div>
    </section>
  )
}

