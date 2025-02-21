"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ARTICLES } from "@/lib/constants"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"

export default function FeaturedArticles() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const featuredArticles = ARTICLES.slice(0, 5)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % featuredArticles.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [featuredArticles.length])

  useEffect(() => {
    setIsLoading(false)
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
            Artículos
            <span className="block text-accent mt-2">Destacados</span>
          </h2>
          <p className="text-lg text-gray-300">
            Descubre las últimas novedades y análisis del mercado inmobiliario en Villa del Dique
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence initial={false} mode="wait">
            {!isLoading &&
              featuredArticles.map((article, index) => (
                <motion.div
                  key={article.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${index === 0 ? "sm:col-span-2 lg:col-span-3" : ""}`}
                >
                  <Link href={`/articulo/${article.slug}`}>
                    <Card className="group overflow-hidden bg-white/10 backdrop-blur-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full">
                      <div className="relative">
                        <div className="relative h-48 sm:h-64 md:h-72 lg:h-80">
                          <Image
                            src={article.image || "/placeholder.svg"}
                            alt={article.title}
                            layout="fill"
                            objectFit="cover"
                            className="transition-transform duration-300 group-hover:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className="flex items-center mb-3">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/90 text-primary backdrop-blur-sm">
                              <Tag className="w-3 h-3 mr-1" />
                              {article.category}
                            </span>
                          </div>

                          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2">
                            {article.title}
                          </h3>

                          <div className="flex items-center text-white/80 text-sm space-x-4">
                            <span className="flex items-center">
                              <Calendar className="w-4 h-4 mr-1" />
                              {article.date}
                            </span>
                            <span className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />5 min
                            </span>
                          </div>
                        </div>
                      </div>

                      <CardContent className="p-6">
                        <p className="text-gray-300 mb-4 line-clamp-3">{article.description}</p>
                        <div className="flex items-center text-accent font-medium group-hover:text-white transition-colors">
                          Leer más
                          <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

