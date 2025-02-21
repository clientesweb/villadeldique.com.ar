import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ARTICLES_VARIOS } from "@/lib/articles"
import { Calendar, Clock, ArrowRight } from "lucide-react"

export default function LatestNews() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-primary via-primary/95 to-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Últimas
            <span className="block text-accent mt-2">Noticias</span>
          </h2>
          <p className="text-lg text-gray-300">Explora nuestras últimas publicaciones sobre Villa del Dique</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES_VARIOS.slice(0, 6).map((article) => (
            <Link key={article.id} href={`/${article.slug}`}>
              <Card className="h-full bg-white/10 hover:bg-white/20 transition-colors">
                <div className="relative h-48">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className="inline-block px-2 py-1 mb-2 text-xs font-medium bg-accent text-primary rounded-full">
                      {article.category}
                    </span>
                    <h3 className="text-lg font-bold text-white mb-1 line-clamp-2">{article.title}</h3>
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
                  <div className="flex items-center text-accent text-sm font-medium">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-1" />
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

