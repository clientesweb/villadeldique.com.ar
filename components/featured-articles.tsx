"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ARTICLES } from "@/lib/constants"
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react"

export default function FeaturedArticles() {
  const featuredArticles = ARTICLES.slice(0, 5)

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Artículos
            <span className="block text-accent mt-2">Destacados</span>
          </h2>
          <p className="text-lg text-gray-600">
            Descubre las últimas novedades y análisis del mercado inmobiliario en Villa del Dique
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/articulo/${article.slug}`}
              className={index === 0 ? "sm:col-span-2 lg:col-span-3" : ""}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 h-full">
                <div className="relative">
                  <div className="relative h-48 sm:h-64 md:h-72 lg:h-80">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                      loading={index === 0 ? "eager" : "lazy"}
                      priority={index === 0}
                    />
                  </div>

                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent text-primary">
                      <Tag className="w-3 h-3 mr-1" />
                      {article.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-primary mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{article.description}</p>
                  <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
                    <span className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />5 min
                    </span>
                  </div>
                  <div className="flex items-center text-accent font-medium hover:text-primary transition-colors">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

