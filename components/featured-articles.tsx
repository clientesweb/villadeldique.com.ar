"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ARTICLES } from "@/lib/constants"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"

export default function FeaturedArticles() {
  const featuredArticles = ARTICLES.slice(0, 5)

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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${index === 0 ? "sm:col-span-2 lg:col-span-3" : ""}`}
            >
              <Link href={`/articulo/${article.slug}`}>
                <Card className="group overflow-hidden bg-white/10 backdrop-blur-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative">
                    <div className="relative h-48 sm:h-64 md:h-72 lg:h-80">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                        placeholder="blur"
                        blurDataURL="/path-to-blur-placeholder.jpg"  // Placeholder mientras se carga la imagen
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

                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2">{article.title}</h3>

                      <div className="flex items-center text-white/80 text-sm space-x-4">
                        <span className="flex items-center">
                          {/* Otros elementos del artículo */}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}