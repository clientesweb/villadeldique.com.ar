"use client"

import Image from "next/image"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { ARTICLES } from "@/lib/constants"
import { motion } from "framer-motion"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"

export default function FeaturedArticles() {
  const featuredArticles = ARTICLES.slice(0, 5)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-primary/5 via-white to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Artículos Destacados
          </h2>
          <p className="text-lg text-gray-600">
            Descubre las últimas novedades y análisis del mercado inmobiliario en Villa del Dique
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredArticles.map((article, index) => (
            <motion.div
              key={article.id}
              variants={item}
              className={`${index === 0 ? "sm:col-span-2 lg:col-span-3" : ""}`}
            >
              <Link href={`/${article.slug}`}>
                <Card className="group overflow-hidden bg-white hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="relative">
                    {/* Imagen Principal */}
                    <div className="relative h-48 sm:h-64 md:h-72 lg:h-80">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        layout="fill"
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                    </div>

                    {/* Contenido Superpuesto */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      {/* Categoría */}
                      <div className="flex items-center mb-3">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/90 text-primary backdrop-blur-sm">
                          <Tag className="w-3 h-3 mr-1" />
                          {article.category}
                        </span>
                      </div>

                      {/* Título */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2">{article.title}</h3>

                      {/* Metadatos */}
                      <div className="flex items-center text-white/80 text-sm space-x-4">
                        <span className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          15 Feb 2024
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />5 min
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Descripción y CTA */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                    <div className="flex items-center text-secondary font-medium group-hover:text-accent transition-colors">
                      Leer más
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <div className="hidden lg:block absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-accent/10 via-secondary/5 to-transparent -z-10 blur-3xl" />
        <div className="hidden lg:block absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-primary/10 via-secondary/5 to-transparent -z-10 blur-3xl" />
      </div>
    </section>
  )
}

