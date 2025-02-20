"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import {
  Star,
  MapPin,
  Calendar,
  Clock,
  Users,
  Search,
  Menu,
  Bell,
  Home,
  Newspaper,
  CalendarDays,
  BellIcon,
  Smartphone,
  Wifi,
} from "lucide-react"

const mockupContent = {
  news: [
    {
      id: 1,
      title: "Nuevo Centro Cultural",
      image: "https://images.unsplash.com/photo-1561839561-b13bcfe95249?auto=format&fit=crop&q=80",
      category: "Cultura",
      date: "Hoy",
    },
    {
      id: 2,
      title: "Festival Gastronómico",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80",
      category: "Eventos",
      date: "Mañana",
    },
  ],
  places: [
    {
      id: 1,
      name: "Café del Lago",
      type: "Restaurante",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3",
      rating: 4.9,
      schedule: "9:00 - 23:00",
    },
    {
      id: 2,
      name: "Mirador del Cerro",
      type: "Atracción",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4",
      rating: 4.8,
      schedule: "24 horas",
    },
  ],
  events: [
    {
      id: 1,
      name: "Festival de Teatro",
      date: "20 Mar",
      image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf",
      location: "Plaza Central",
    },
    {
      id: 2,
      name: "Feria Gastronómica",
      date: "25 Mar",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      location: "Costanera",
    },
  ],
}

const features = [
  {
    icon: Newspaper,
    title: "Noticias Locales",
    description: "Mantente informado sobre todo lo que sucede",
  },
  {
    icon: MapPin,
    title: "Guía Turística",
    description: "Descubre los mejores lugares para visitar",
  },
  {
    icon: CalendarDays,
    title: "Eventos",
    description: "No te pierdas ninguna actividad",
  },
  {
    icon: BellIcon,
    title: "Notificaciones",
    description: "Recibe alertas importantes",
  },
  {
    icon: Smartphone,
    title: "Modo Offline",
    description: "Accede sin conexión",
  },
  {
    icon: Wifi,
    title: "Siempre Actualizado",
    description: "Información en tiempo real",
  },
]

export default function AppMockup() {
  const [currentSection, setCurrentSection] = useState<"news" | "places" | "events">("news")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % mockupContent[currentSection].length)
    }, 5000)
    return () => clearInterval(timer)
  }, [currentSection])

  return (
    <section className="py-16 bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          {/* Título y Descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Villa del Dique
              <span className="block text-accent mt-2">en tu bolsillo</span>
            </h2>
            <p className="text-lg text-gray-300">
              Toda la información que necesitas sobre nuestra ciudad, ahora en una aplicación moderna y fácil de usar.
            </p>
          </motion.div>

          {/* Smartphone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mb-12"
          >
            <div className="relative mx-auto" style={{ maxWidth: "280px" }}>
              <div className="relative rounded-[2.5rem] overflow-hidden bg-black shadow-2xl border-8 border-gray-800">
                <div className="relative bg-white" style={{ aspectRatio: "9/19.5" }}>
                  <AppContent
                    currentSection={currentSection}
                    setCurrentSection={setCurrentSection}
                    content={mockupContent[currentSection][currentIndex]}
                  />
                </div>
              </div>

              {/* Efecto de Brillo */}
              <motion.div
                className="absolute -z-10 blur-3xl"
                animate={{
                  background: [
                    "radial-gradient(circle at 50% 50%, rgba(var(--brand-accent), 0.2) 0%, transparent 50%)",
                    "radial-gradient(circle at 50% 50%, rgba(var(--brand-secondary), 0.2) 0%, transparent 50%)",
                  ],
                }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
                style={{
                  width: "150%",
                  height: "150%",
                  top: "-25%",
                  left: "-25%",
                }}
              />
            </div>
          </motion.div>

          {/* Botones de Descarga */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-row gap-4 justify-center items-center mb-12"
          >
            <StoreButton
              type="google"
              className="w-48"
              onClick={() => window.open("https://play.google.com/store", "_blank")}
            />
            <StoreButton
              type="apple"
              className="w-48"
              onClick={() => window.open("https://www.apple.com/app-store/", "_blank")}
            />
          </motion.div>

          {/* Grid de Características */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 w-full max-w-4xl"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-4 flex items-start gap-3 group hover:bg-white/20 transition-colors"
              >
                <div className="bg-accent/20 rounded-lg p-2 group-hover:bg-accent/30 transition-colors">
                  <feature.icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-left">
                  <h3 className="text-white font-semibold text-sm mb-1">{feature.title}</h3>
                  <p className="text-xs text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Tags y Estado */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3"
          >
            <span className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-3 py-1 rounded-full">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
                className="w-2 h-2 bg-accent rounded-full"
              />
              <span className="text-accent text-xs font-medium">En desarrollo</span>
            </span>
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">Versión Beta</span>
            <span className="bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full text-xs text-white">Próximamente</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StoreButton({
  type,
  className,
  onClick,
}: {
  type: "google" | "apple"
  className?: string
  onClick: () => void
}) {
  return (
    <div className="relative">
      <Button
        className={`bg-white/10 backdrop-blur-md hover:bg-white/20 text-white rounded-xl transition-all duration-300 flex items-center justify-center h-14 group ${className}`}
        onClick={onClick}
      >
        <Image
          src={
            type === "google"
              ? "https://play.google.com/intl/en_us/badges/static/images/badges/es_badge_web_generic.png"
              : "https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/es-es?size=250x83"
          }
          alt={type === "google" ? "Disponible en Google Play" : "Descargar en el App Store"}
          width={type === "google" ? 140 : 120}
          height={type === "google" ? 56 : 40}
          className="h-auto transition-transform duration-300 group-hover:scale-105"
        />
      </Button>
      <motion.div
        className="absolute -top-2 -right-2 bg-accent/90 backdrop-blur-sm text-primary px-2 py-0.5 rounded-full text-xs font-bold shadow-lg"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        Pronto
      </motion.div>
    </div>
  )
}

function AppContent({
  currentSection,
  setCurrentSection,
  content,
}: {
  currentSection: "news" | "places" | "events"
  setCurrentSection: (section: "news" | "places" | "events") => void
  content: any
}) {
  return (
    <>
      {/* Status Bar */}
      <div className="bg-black text-white px-4 py-1 text-xs flex justify-between items-center">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="w-4 h-4 bg-white/90 rounded-full" />
          <div className="w-4 h-4 bg-white/80 rounded-full" />
          <div className="w-4 h-4 bg-white/70 rounded-full" />
        </div>
      </div>

      {/* App Header */}
      <div className="bg-primary text-white p-3">
        <div className="flex justify-between items-center mb-3">
          <Menu className="w-5 h-5" />
          <h1 className="text-sm font-semibold">Villa del Dique Digital</h1>
          <Bell className="w-5 h-5" />
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Buscar..."
            className="w-full bg-white/10 rounded-full py-1.5 pl-9 pr-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-accent"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-around p-2 bg-gray-50 border-b">
        {["news", "places", "events"].map((section) => (
          <button
            key={section}
            onClick={() => setCurrentSection(section as any)}
            className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
              currentSection === section ? "bg-secondary text-white" : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="p-3"
        >
          <ContentCard content={content} type={currentSection} />
        </motion.div>
      </AnimatePresence>

      {/* Bottom Navigation */}
      <div className="absolute bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-2 py-1.5">
        <div className="flex justify-around">
          <Home className="w-5 h-5 text-secondary" />
          <Search className="w-5 h-5 text-gray-400" />
          <Calendar className="w-5 h-5 text-gray-400" />
          <Users className="w-5 h-5 text-gray-400" />
        </div>
      </div>
    </>
  )
}

function ContentCard({ content, type }: { content: any; type: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-lg shadow-md overflow-hidden"
    >
      <div className="relative h-32">
        <Image
          src={content.image || "/placeholder.svg"}
          alt={content.title || content.name}
          layout="fill"
          objectFit="cover"
        />
        {type === "news" && (
          <div className="absolute top-2 right-2 bg-accent text-primary text-xs font-bold px-2 py-0.5 rounded-full">
            {content.category}
          </div>
        )}
        {type === "events" && (
          <div className="absolute top-2 left-2 bg-accent text-primary text-xs font-bold px-2 py-0.5 rounded-lg">
            {content.date}
          </div>
        )}
      </div>
      <div className="p-3">
        <h3 className="font-bold text-sm mb-1">{content.title || content.name}</h3>
        {type === "news" && (
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{content.date}</span>
          </div>
        )}
        {type === "places" && (
          <>
            <div className="flex items-center text-xs text-gray-500 mb-1">
              <Clock className="w-3 h-3 mr-1" />
              <span>{content.schedule}</span>
            </div>
            <div className="flex items-center">
              <Star className="w-3 h-3 text-accent mr-1" />
              <span className="text-xs font-medium">{content.rating}</span>
            </div>
          </>
        )}
        {type === "events" && (
          <div className="flex items-center text-xs text-gray-500">
            <MapPin className="w-3 h-3 mr-1" />
            <span>{content.location}</span>
          </div>
        )}
      </div>
    </motion.div>
  )
}

