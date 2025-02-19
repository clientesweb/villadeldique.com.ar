"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import TopBanner from "@/components/top-banner"
import MagazineCover from "@/components/magazine-cover"
import FeaturedArticles from "@/components/featured-articles"
import InstagramFeed from "@/components/instagram-feed"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import { CATEGORIES } from "@/lib/constants"
import { ARTICLES_VARIOS } from "@/lib/articles"
import Link from "next/link"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import Preloader from "@/components/preloader"
import AdBanner from "@/components/ad-banner"
import AppMockup from "@/components/app-mockup"
import SponsorSection from "@/components/sponsor-section"

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

    // Verificamos si el preloader ya se ha mostrado
    const hasShownPreloader = localStorage.getItem("hasShownPreloader")
    if (!hasShownPreloader) {
      const timer = setTimeout(() => setLoading(false), 3000)
      return () => clearTimeout(timer)
    } else {
      setLoading(false)
    }
  }, [])

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Preloader />
      {!loading && (
        <>
          <TopBanner />
          <Header />
          <MagazineCover />

          <section id="articles" className="py-12 sm:py-16 bg-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Artículos Destacados</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {ARTICLES_VARIOS.slice(0, 6).map((article) => (
                  <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="p-0">
                      <div className="relative h-48 sm:h-56 md:h-64">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          layout="fill"
                          objectFit="cover"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6">
                      <h3 className="font-bold text-xl mb-2">{article.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{article.description}</p>
                      <Link
                        href={`/articulo/${article.slug}`}
                        className="text-[#FF0000] hover:text-[#FF0000]/90 font-medium"
                      >
                        Leer más →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          <FeaturedArticles />

          <InstagramFeed />

          <section className="py-12 sm:py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Explora por Categoría</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {CATEGORIES.map((category) => (
                  <Link key={category.slug} href={`/${category.slug}`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full">
                      <CardHeader className="p-0">
                        <div className="relative h-48 sm:h-56 md:h-64">
                          <Image
                            src={`/images/${category.slug}.jpg`}
                            alt={category.name}
                            layout="fill"
                            objectFit="cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                          <div className="absolute bottom-0 left-0 p-4 sm:p-6">
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{category.name}</h3>
                          </div>
                        </div>
                      </CardHeader>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>

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

