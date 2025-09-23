import type { Metadata } from "next"
import AnnouncementBar from "@/components/announcement-bar"
import Header from "@/components/header"
import HeroBanner from "@/components/hero-banner"
import MainAdvertisingCarousel from "@/components/main-advertising-carousel"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title:
    "💼 Promocioná tu Negocio en Villa del Dique | Marketing Digital Valle de Calamuchita - Villa del Dique Digital",
  description:
    "🚀 Promocioná tu negocio o emprendimiento en Villa del Dique con Villa del Dique Digital. Cobertura periodística profesional, entrevistas exclusivas, vuelos de dron, publicidad digital y 30% OFF en diseño web. El mejor marketing local del Valle de Calamuchita, Córdoba.",
  keywords: [
    "promocionar negocio Villa del Dique",
    "marketing digital Villa del Dique",
    "publicidad Villa del Dique",
    "emprendimientos Villa del Dique",
    "negocios locales Villa del Dique",
    "cobertura periodística Villa del Dique",
    "entrevistas comerciales Villa del Dique",
    "vuelos de dron comercial Villa del Dique",
    "redes sociales negocio Villa del Dique",
    "diseño web Villa del Dique",
    "promoción empresarial Villa del Dique",
    "marketing local Villa del Dique",
    "publicidad digital Villa del Dique",
    "portal empresarial Villa del Dique",
    "difusión comercial Villa del Dique",
    "servicios publicitarios Villa del Dique",
    "promoción negocios Córdoba",
    "marketing emprendimientos Villa del Dique",
    "Villa del Dique Digital suscripción",
    "marketing Valle de Calamuchita",
    "publicidad Valle de Calamuchita",
    "promoción turismo Villa del Dique",
    "marketing turístico Villa del Dique",
    "publicidad local Córdoba",
    "emprendedores Villa del Dique",
    "comercios Villa del Dique",
    "servicios Villa del Dique",
    "gastronomía Villa del Dique",
    "alojamiento Villa del Dique",
    "actividades Villa del Dique",
  ],
  authors: [{ name: "Villa del Dique Digital", url: "https://www.villadeldique.com.ar" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/suscribirse",
    languages: {
      "es-AR": "/suscribirse",
      es: "/suscribirse",
    },
  },
  openGraph: {
    title: "💼 Promocioná tu Negocio en Villa del Dique | Marketing Digital Valle de Calamuchita",
    description:
      "🚀 Promocioná tu negocio en Villa del Dique con cobertura periodística, entrevistas exclusivas, vuelos de dron y publicidad digital. El mejor marketing local del Valle de Calamuchita.",
    url: "https://www.villadeldique.com.ar/suscribirse",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/og/subscripcion-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Promocioná tu negocio en Villa del Dique - Marketing digital Valle de Calamuchita",
      },
    ],
    locale: "es_AR",
    type: "website",
    countryName: "Argentina",
    region: "Córdoba",
    placeName: "Villa del Dique",
  },
  twitter: {
    card: "summary_large_image",
    title: "💼 Promocioná tu Negocio en Villa del Dique",
    description:
      "🚀 Marketing digital para negocios locales en Villa del Dique. Cobertura periodística, entrevistas, vuelos de dron y publicidad personalizada.",
    images: ["/images/og/subscripcion-og-image.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
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
  category: "Business Services",
  classification: "Servicios de marketing digital local",
  other: {
    "geo.region": "AR-X",
    "geo.placename": "Villa del Dique",
    "geo.position": "-32.1833;-64.4833",
    ICBM: "-32.1833, -64.4833",
    "business.contact_data.street_address": "Villa del Dique",
    "business.contact_data.locality": "Villa del Dique",
    "business.contact_data.region": "Córdoba",
    "business.contact_data.postal_code": "5194",
    "business.contact_data.country_name": "Argentina",
    "service.type": "Marketing Digital Local",
    "service.area": "Villa del Dique, Valle de Calamuchita, Córdoba, Argentina",
    "target.audience": "Emprendedores y comerciantes de Villa del Dique",
  },
}

export default function SuscribirsePage() {
  const subscriptionSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Suscripción Villa del Dique Digital",
    description: "Servicios de promoción y marketing digital para negocios locales en Villa del Dique",
    provider: {
      "@type": "Organization",
      name: "Villa del Dique Digital",
      url: "https://www.villadeldique.com.ar",
    },
    areaServed: {
      "@type": "Place",
      name: "Villa del Dique, Córdoba, Argentina",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Suscripción",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cobertura Periodística",
            description: "Noticias y artículos sobre tu negocio",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Entrevistas Exclusivas",
            description: "Espacios dedicados para contar tu historia y proyectos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Vuelos de Dron",
            description: "Contenido audiovisual profesional con tomas aéreas de tu negocio",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Publicidad Digital",
            description: "Tu banner publicitario destacado en nuestra página principal",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Diseño Web",
            description: "30% OFF en diseño y desarrollo de páginas web profesionales",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Promoción en Redes",
            description: "Diseño personalizado y promoción continua en nuestras redes sociales",
          },
        },
      ],
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://www.villadeldique.com.ar",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Suscribirse",
          item: "https://www.villadeldique.com.ar/suscribirse",
        },
      ],
    },
  }

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(subscriptionSchema),
        }}
      />

      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <HeroBanner />

        <section className="py-12 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-center text-brand-navy mb-8">
              {"Suscríbete a Villa del Dique Digital"}
            </h1>
            <p className="font-sans text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
              {
                "Únete a nuestra comunidad digital y obtén beneficios exclusivos para tu negocio o emprendimiento en Villa del Dique y El Valle."
              }
            </p>

            <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto mb-12">
              <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6 text-center">
                Beneficios de la Suscripción
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-brand-yellow rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-navy" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-brand-navy mb-2">Noticias sobre tu negocio</h3>
                    <p className="text-gray-600 text-sm">
                      Cobertura periodística de tu emprendimiento y actividades comerciales
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-yellow rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-navy" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-brand-navy mb-2">Entrevistas exclusivas</h3>
                    <p className="text-gray-600 text-sm">Espacios dedicados para contar tu historia y proyectos</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-yellow rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-navy" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-brand-navy mb-2">Vuelos de dron</h3>
                    <p className="text-gray-600 text-sm">
                      Contenido audiovisual profesional con tomas aéreas de tu negocio
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-yellow rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-navy" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-brand-navy mb-2">Publicidad en la página</h3>
                    <p className="text-gray-600 text-sm">
                      Tu banner publicitario destacado en nuestra página principal
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-yellow rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-navy" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-brand-navy mb-2">30% OFF Diseño Web</h3>
                    <p className="text-gray-600 text-sm">
                      Descuento especial en diseño y desarrollo de páginas web profesionales
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-brand-yellow rounded-full p-2 flex-shrink-0">
                    <svg className="w-5 h-5 text-brand-navy" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-sans font-semibold text-brand-navy mb-2">Promoción en redes</h3>
                    <p className="text-gray-600 text-sm">
                      Diseño personalizado y promoción continua en nuestras redes sociales
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <a
                href="https://wa.me/3546533050?text=Hola%2C%20quiero%20elegir%20un%20plan%20de%20suscripción%20a%20Villa%20del%20Dique%20Digital"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-navy text-white px-10 py-4 rounded-lg font-sans font-bold text-xl hover:bg-brand-navy/90 transition-colors duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
                aria-label="Contactar por WhatsApp para elegir plan"
              >
                ¡Contáctanos!
              </a>
            </div>
          </div>
        </section>

        <MainAdvertisingCarousel />
      </main>

      <Footer />
    </div>
  )
}
