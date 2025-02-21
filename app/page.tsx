"use client"
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

export default function Home() {
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

