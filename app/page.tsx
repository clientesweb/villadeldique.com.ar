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
import SEO from "@/components/seo"

export default function Home() {
  return (
    <>
      <SEO
        title="Villa del Dique Digital - Noticias, Turismo y Eventos Locales"
        description="Explora Villa del Dique: noticias actualizadas, guías turísticas, eventos locales y más. Descubre la belleza de nuestras sierras, lago y cultura local. Tu portal digital para todo lo que necesitas saber sobre Villa del Dique, Córdoba."
        canonicalUrl="https://villadeldique.com.ar"
        ogImage="https://villadeldique.com.ar/og-image.jpg"
      />
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
    </>
  )
}

