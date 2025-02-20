"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import TopBanner from "@/components/top-banner"
import MagazineCover from "@/components/magazine-cover"
import FeaturedArticles from "@/components/featured-articles"
import InstagramFeed from "@/components/instagram-feed"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { ARTICLES_VARIOS } from "@/lib/articles"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Preloader from "@/components/preloader"
import AdBanner from "@/components/ad-banner"
import AppMockup from "@/components/app-mockup"
import SponsorSection from "@/components/sponsor-section"
import { motion } from "framer-motion"
import { Calendar, Clock, Tag, ArrowRight } from "lucide-react"
import LocalBusinessAds from "@/components/local-business-ads"

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").then(
          (registration) => {
            console.log("ServiceWorker registration successful with scope: ", registration.scope)
          },
          (err) => {
            console.log("ServiceWorker registration failed: ", err)
          },
        )
      })
    }

    const hasShownPreloader = localStorage.getItem("hasShownPreloader")
    if (!hasShownPreloader) {
      const timer = setTimeout(() => setLoading(false), 3000)
      return () => clearTimeout(timer)
    } else {
      setLoading(false)
    }
  }, [])

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
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Preloader />
      {!loading && (
        <>
          <TopBanner />
          <Header />
          <MagazineCover />

          <section id="articles" className="py-16 sm:py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 text-primary">Artículos Destacados</h2>
                <p className="text-lg text-gray-600">Explora nuestras últimas publicaciones sobre Villa del Dique</p>
              </div>

              <motion.div
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {ARTICLES_VARIOS.slice(0, 6).map((article) => (
                  <motion.div key={article.id} variants={item}>
                    <Link href={`/articulo/${article.slug}`}>
                      <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 bg-white">
                        <CardHeader className="p-0">
                          <div className="relative">
                            <div className="relative h-56 sm:h-64">
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
                              <h3 className="text-xl font-bold text-white mb-2 line-clamp-2">{article.title}</h3>

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
                        </CardHeader>
                        <CardContent className="p-6">
                          <p className="text-gray-600 mb-4 line-clamp-2">{article.description}</p>
                          <div className="flex items-center text-secondary font-medium group-hover:text-accent transition-colors">
                            Leer más
                            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <FeaturedArticles />
          <LocalBusinessAds />
          <InstagramFeed />
          <AdBanner />
          <AppMockup />
          <SponsorSection />
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </main>
  )
}

