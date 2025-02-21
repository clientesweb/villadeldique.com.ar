"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ARTICLES_VARIOS } from "@/lib/articles"
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react"

export default function LatestNews() {
  const [visibleArticles, setVisibleArticles] = useState(6)

  return (
    <section id="articles" className="py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-6">
            Últimas
            <span className="block text-accent mt-2">Noticias</span>
          </h2>
          <p className="text-lg text-gray-600">Explora nuestras últimas publicaciones sobre Villa del Dique</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {ARTICLES_VARIOS.slice(0, visibleArticles).map((article) => (
            <Link key={article.id} href={`/${article.slug}`} className="h-full">
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="relative">
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      layout="fill"
                      objectFit="cover"
                      className="transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="absolute top-2 right-2">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent text-primary">
                      <Tag className="w-3 h-3 mr-1" />
                      {article.category}
                    </span>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.description}</p>
                  <div className="flex items-center text-gray-500 text-xs space-x-3 mb-3">
                    <span className="flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {article.date}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-3 h-3 mr-1" />5 min
                    </span>
                  </div>
                  <div className="flex items-center text-accent text-sm font-medium hover:text-primary transition-colors">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
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

