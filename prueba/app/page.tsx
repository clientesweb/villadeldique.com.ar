import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import NewsSection from "@/components/news-section"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroBanner />
        <NewsSection />
      </main>
      <Footer />
    </div>
  )
}
