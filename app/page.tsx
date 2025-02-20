"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import TopBanner from "@/components/top-banner"
import MagazineCover from "@/components/magazine-cover"
import FeaturedArticles from "@/components/featured-articles"
import LatestNews from "@/components/latest-news"
import InstagramFeed from "@/components/instagram-feed"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import FeaturedAccommodations from "@/components/featured-accommodations"
import AppMockup from "@/components/app-mockup"
import SponsorSection from "@/components/sponsor-section"
import LocalBusinessAds from "@/components/local-business-ads"
import Preloader from "@/components/preloader"

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

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
      <Preloader />
      {!loading && (
        <>
          <TopBanner />
          <Header />
          <MagazineCover />
          <LatestNews />
          <FeaturedArticles />
          <LocalBusinessAds />
          <InstagramFeed />
          <FeaturedAccommodations />
          <AppMockup />
          <SponsorSection />
          <Footer />
          <WhatsAppButton />
        </>
      )}
    </main>
  )
}

