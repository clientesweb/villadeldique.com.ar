"use client"

import { useEffect } from "react"
import Header from "@/components/header"
import TopBanner from "@/components/top-banner"
import MagazineCover from "@/components/magazine-cover"
import FeaturedArticles from "@/components/featured-articles"
import LatestNews from "@/components/latest-news"
import InstagramFeed from "@/components/instagram-feed"
import Footer from "@/components/footer"
import WhatsAppButton from "@/components/whatsapp-button"
import LocalBusinessAds from "@/components/local-business-ads"
import dynamic from "next/dynamic"

const FeaturedAccommodations = dynamic(() => import("@/components/featured-accommodations"), { ssr: false })
const AppMockup = dynamic(() => import("@/components/app-mockup"), { ssr: false })
const SponsorSection = dynamic(() => import("@/components/sponsor-section"), { ssr: false })

export default function Home() {
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
  }, [])

  return (
    <main className="min-h-screen bg-white overflow-x-hidden">
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
    </main>
  )
}

