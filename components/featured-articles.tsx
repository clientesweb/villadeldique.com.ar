import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ARTICLES } from "@/lib/constants"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function FeaturedArticles() {
  const featuredArticles = ARTICLES.slice(0, 5)

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Artículos
            <span className="block text-accent mt-2">Destacados</span>
          </h2>
          <p className="text-lg text-gray-300">
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
              <Card className="h-full bg-white/10 hover:bg-white/20 transition-colors">
                <div className="relative h-48 sm:h-64 md:h-72 lg:h-80">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="inline-block px-3 py-1 mb-3 text-xs font-medium bg-accent text-primary rounded-full">
                      {article.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2">{article.title}</h3>
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
                  <div className="flex items-center text-accent font-medium">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2" />
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

