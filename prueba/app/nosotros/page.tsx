import type { Metadata } from "next"
import AnnouncementBar from "@/components/announcement-bar"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MainAdvertisingCarousel from "@/components/main-advertising-carousel"

export const metadata: Metadata = {
  title: "Nosotros - Villa del Dique Digital | Medio Local Independiente Valle de Calamuchita",
  description:
    "Villa del Dique Digital es un medio de comunicación local e independiente que difunde noticias, turismo, comercio, cultura y emprendimientos del Valle de Calamuchita, Córdoba, Argentina. Información positiva y cercana sobre nuestra comunidad.",
  keywords: [
    "Villa del Dique Digital",
    "medio de comunicación Villa del Dique",
    "noticias Valle de Calamuchita",
    "turismo Villa del Dique",
    "comercio local Córdoba",
    "cultura Valle de Calamuchita",
    "emprendimientos locales",
    "periodismo independiente",
    "noticias Córdoba",
    "información turística",
    "actividades sociales",
    "entrevistas locales",
    "Villa del Dique Córdoba",
    "Valle de Calamuchita turismo",
  ].join(", "),
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Nosotros - Villa del Dique Digital | Medio Local Independiente",
    description:
      "Conoce Villa del Dique Digital, medio de comunicación local e independiente del Valle de Calamuchita. Noticias, turismo, comercio, cultura y emprendimientos con mirada positiva y cercana.",
    type: "website",
    locale: "es_AR",
    url: "https://villadeldique.com.ar/nosotros",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/banner-principal-desktop.webp",
        width: 1200,
        height: 630,
        alt: "Villa del Dique Digital - Medio de Comunicación Local",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros - Villa del Dique Digital | Medio Local Independiente",
    description:
      "Villa del Dique Digital: medio de comunicación local e independiente del Valle de Calamuchita. Noticias, turismo, comercio y cultura con mirada positiva.",
    images: ["/images/banner-principal-desktop.webp"],
  },
  alternates: {
    canonical: "https://villadeldique.com.ar/nosotros",
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Villa del Dique Digital",
  description:
    "Medio de comunicación local e independiente dedicado a difundir noticias, turismo, comercio, cultura y emprendimientos del Valle de Calamuchita, Córdoba, Argentina.",
  url: "https://villadeldique.com.ar",
  logo: "https://villadeldique.com.ar/favicon.png",
  foundingLocation: {
    "@type": "Place",
    name: "Villa del Dique, Córdoba, Argentina",
  },
  areaServed: {
    "@type": "Place",
    name: "Valle de Calamuchita, Córdoba, Argentina",
  },
  knowsAbout: [
    "Turismo Valle de Calamuchita",
    "Comercio local Villa del Dique",
    "Cultura Córdoba",
    "Emprendimientos locales",
    "Actividades sociales",
    "Noticias locales",
  ],
  sameAs: ["https://www.instagram.com/villadeldiquedigital", "https://www.facebook.com/villadeldiquedigital"],
}

export default function NosotrosPage() {
  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <AnnouncementBar />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-brand-navy to-brand-navy/90">
          <div className="absolute inset-0 bg-[url('/images/banner-principal-desktop.webp')] bg-cover bg-center opacity-10"></div>
          <div className="relative max-w-4xl mx-auto px-4 text-center">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
              Nosotros - Villa del Dique Digital
            </h1>
            <p className="font-sans text-lg md:text-xl text-white/90 leading-relaxed">
              Medio de comunicación local e independiente del Valle de Calamuchita
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-12 md:py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 md:p-8 lg:p-12">
              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="font-sans text-lg md:text-xl text-brand-navy font-semibold mb-8">
                    En <strong>Villa del Dique Digital</strong> somos un medio de comunicación local e independiente,
                    dedicado a difundir y poner en valor todo lo que hace vibrar a nuestra comunidad y al{" "}
                    <strong>Valle de Calamuchita</strong>.
                  </p>

                  <p className="font-sans text-base md:text-lg">
                    Nuestro contenido se centra en <strong>comercio local</strong>, <strong>turismo</strong>,{" "}
                    <strong>cultura</strong>, actividades sociales, <strong>emprendimientos</strong> y entrevistas con
                    protagonistas locales. Apostamos a una mirada positiva y cercana, que refleje lo que realmente
                    impacta en la vida de quienes habitan y visitan la región.
                  </p>

                  <p className="font-sans text-base md:text-lg">
                    No tenemos ningún tipo de afiliación política ni cubrimos la coyuntura partidaria. Nuestro
                    compromiso es con la comunidad, los lectores y las iniciativas que fortalecen la identidad local del{" "}
                    <strong>Valle de Calamuchita</strong>.
                  </p>

                  <p className="font-sans text-base md:text-lg">
                    <strong>Villa del Dique Digital</strong> es un medio patrocinado por el sector privado, lo que nos
                    permite mantener la independencia y garantizar que cada historia que contamos responda únicamente al
                    objetivo de dar visibilidad al Valle y a su gente.
                  </p>
                </div>

                {/* Values Section */}
                <div className="mt-12 grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h2 className="font-serif text-xl font-bold text-brand-navy mb-4">Nuestra Misión</h2>
                    <p className="font-sans text-gray-700">
                      Difundir y poner en valor todo lo que hace vibrar a nuestra comunidad y al Valle de Calamuchita,
                      con una mirada positiva y cercana que fortalezca la identidad local.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h2 className="font-serif text-xl font-bold text-brand-navy mb-4">Nuestros Valores</h2>
                    <p className="font-sans text-gray-700">
                      Independencia editorial, compromiso con la comunidad y transparencia en cada historia que contamos
                      sobre Villa del Dique y el Valle.
                    </p>
                  </div>
                </div>

                {/* Topics Section */}
                <div className="mt-12">
                  <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6 text-center">
                    Nuestros Temas de Cobertura
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      "Comercio Local",
                      "Turismo Valle de Calamuchita",
                      "Cultura y Eventos",
                      "Actividades Sociales",
                      "Emprendimientos Locales",
                      "Entrevistas y Protagonistas",
                    ].map((topic) => (
                      <div key={topic} className="bg-brand-yellow/10 rounded-lg p-4 text-center">
                        <span className="font-sans font-semibold text-brand-navy">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 bg-brand-navy/5 rounded-lg p-6">
                  <h2 className="font-serif text-xl font-bold text-brand-navy mb-4">Nuestra Cobertura</h2>
                  <p className="font-sans text-gray-700">
                    Cubrimos toda la región del <strong>Valle de Calamuchita</strong>, con especial foco en{" "}
                    <strong>Villa del Dique</strong>, brindando información relevante sobre turismo, comercio, cultura y
                    emprendimientos que fortalecen nuestra comunidad en <strong>Córdoba, Argentina</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Advertising Banner */}
        <MainAdvertisingCarousel />
      </main>

      <Footer />
    </div>
  )
}
