"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ARTICLES_VARIOS } from "@/lib/articles"
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react"

export default function LatestNews() {
  return (
    <section
      id="articles"
      className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Últimas
            <span className="block text-accent mt-2">Noticias</span>
          </h2>
          <p className="text-lg text-gray-300">Explora nuestras últimas publicaciones sobre Villa del Dique</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr">
          {ARTICLES_VARIOS.slice(0, 6).map((article) => (
            <Link key={article.id} href={`/${article.slug}`} className="h-full">
              <Card className="group h-full overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white/10 backdrop-blur-md">
                <div className="relative">
                  <div className="relative h-48">
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

                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/90 text-primary backdrop-blur-sm">
                        <Tag className="w-3 h-3 mr-1" />
                        {article.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{article.title}</h3>

                    <div className="flex items-center text-white/80 text-xs space-x-3">
                      <span className="flex items-center">
                        <Calendar className="w-3 h-3 mr-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3 h-3 mr-1" />5 min
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2">{article.description}</p>
                  <div className="flex items-center text-accent text-sm font-medium group-hover:text-white transition-colors">
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

