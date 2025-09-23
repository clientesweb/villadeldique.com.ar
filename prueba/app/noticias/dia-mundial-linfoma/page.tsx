import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import ShareButtons from "@/components/share-buttons"
import NewsAdvertisingCarousel from "@/components/news-advertising-carousel"

export const metadata: Metadata = {
  title: "15 de septiembre: Día Mundial de la Concientización sobre el Linfoma | Villa del Dique Digital",
  description:
    "Cada 15 de septiembre se conmemora el Día Mundial de la Concientización sobre el Linfoma. Información sobre síntomas, detección temprana y recursos disponibles.",
  keywords: [
    "Día Mundial del Linfoma",
    "linfoma",
    "cáncer",
    "salud",
    "detección temprana",
    "Villa del Dique",
    "concientización",
    "sistema linfático",
    "prevención",
  ],
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/noticias/dia-mundial-linfoma",
  },
  openGraph: {
    title: "15 de septiembre: Día Mundial de la Concientización sobre el Linfoma",
    description:
      "Información sobre el linfoma, síntomas, detección temprana y recursos disponibles en el Día Mundial de la Concientización.",
    url: "https://www.villadeldique.com.ar/noticias/dia-mundial-linfoma",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/portada-dia-mundial-linfoma.jpg",
        width: 1200,
        height: 630,
        alt: "Día Mundial de la Concientización sobre el Linfoma",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "15 de septiembre: Día Mundial de la Concientización sobre el Linfoma",
    description: "Información sobre el linfoma y la importancia de la detección temprana.",
    images: ["/images/portada-dia-mundial-linfoma.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
}

const relatedNews = [
  {
    id: "dia-internacional-democracia",
    title: "15 de septiembre: Día Internacional de la Democracia",
    image: "/images/portada-dia-de-la-democracia.jpg",
    date: "2025-09-15",
    category: "Comunidad",
  },
  {
    id: "septiembre-amarillo-prevencion",
    title: "Septiembre Amarillo: prevenir es acompañar",
    image: "/images/mes-amarillo-portada.jpg",
    date: "2025-09-07",
    category: "Salud Mental",
  },
  {
    id: "mega-feria-villa-del-dique",
    title: "Villa del Dique vive su primera Mega Feria en el Centro Cultural Pato Carret",
    image: "/images/portada-mega-feria.jpg",
    date: "2025-09-14",
    category: "Eventos",
  },
]

export default function DiaMundialLinfomaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "15 de septiembre: Día Mundial de la Concientización sobre el Linfoma",
    description:
      "Cada 15 de septiembre se conmemora el Día Mundial de la Concientización sobre el Linfoma. Información sobre síntomas, detección temprana y recursos disponibles.",
    image: "https://www.villadeldique.com.ar/images/portada-dia-mundial-linfoma.jpg",
    datePublished: "2025-09-15",
    dateModified: "2025-09-15",
    author: {
      "@type": "Person",
      name: "Villa del Dique Digital",
    },
    publisher: {
      "@type": "Organization",
      name: "Villa del Dique Digital",
      logo: {
        "@type": "ImageObject",
        url: "https://www.villadeldique.com.ar/images/logo-villa-del-dique-digital.webp",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": "https://www.villadeldique.com.ar/noticias/dia-mundial-linfoma",
    },
    articleSection: "Salud",
    keywords: "Día Mundial del Linfoma, linfoma, cáncer, salud, detección temprana",
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />

      <AnnouncementBar />
      <Header />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <Link
            href="/noticias"
            className="inline-flex items-center text-brand-blue hover:text-blue-700 mb-6 font-sans transition-colors"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ← Volver a Noticias
          </Link>

          <article className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-64 md:h-96">
              <Image
                src="/images/portada-dia-mundial-linfoma.jpg"
                alt="Día Mundial de la Concientización sobre el Linfoma - LEAC Laboratorios"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-block bg-green-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                  Salud
                </span>
                <time className="text-gray-500">15 de septiembre de 2025</time>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 text-balance">
                15 de septiembre: Día Mundial de la Concientización sobre el Linfoma
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cada 15 de septiembre se conmemora el{" "}
                  <strong>Día Mundial de la Concientización sobre el Linfoma</strong>, una fecha para visibilizar y
                  sensibilizar a la población sobre este tipo de cáncer hematológico que afecta a miles de personas en
                  todo el mundo.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
                  ¿Qué es el linfoma?
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  El linfoma es un cáncer que se origina en las células del sistema linfático, una parte fundamental del
                  sistema inmunológico. Existen dos tipos principales:
                </p>

                <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
                  <li>
                    <strong>Linfoma de Hodgkin:</strong> más común en personas jóvenes.
                  </li>
                  <li>
                    <strong>Linfoma no-Hodgkin:</strong> más frecuente en adultos mayores.
                  </li>
                </ul>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Los síntomas más comunes incluyen ganglios linfáticos inflamados (generalmente indoloros), fiebre,
                  sudores nocturnos, pérdida de peso inexplicada, fatiga y picazón persistente. Es importante prestar
                  atención, ya que estos síntomas pueden confundirse con otras enfermedades.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
                  Importancia de la detección temprana
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  La detección temprana del linfoma es crucial para un tratamiento efectivo. Un diagnóstico precoz y un
                  tratamiento adecuado aumentan significativamente las probabilidades de curación.
                </p>

                <div className="bg-green-50 border-l-4 border-green-500 p-6 my-8 rounded-r-lg">
                  <h3 className="font-serif text-xl font-bold text-green-800 mb-3">Recursos disponibles</h3>
                  <p className="text-green-700 leading-relaxed">
                    Existen asociaciones y centros de salud que ofrecen información, orientación y acompañamiento a
                    pacientes y sus familias.
                  </p>
                </div>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Este 15 de septiembre, unámonos para aumentar la conciencia sobre el linfoma y apoyar a quienes lo
                  enfrentan. Juntos podemos marcar la diferencia.
                </p>
              </div>
            </div>

            <NewsAdvertisingCarousel />

            <div className="p-6 md:p-8">
              <div className="mt-8">
                <ShareButtons
                  url="https://www.villadeldique.com.ar/noticias/dia-mundial-linfoma"
                  title="15 de septiembre: Día Mundial de la Concientización sobre el Linfoma"
                />
              </div>

              <section className="mt-12">
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-6">
                  Noticias relacionadas
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {relatedNews.map((article) => (
                    <Link
                      key={article.id}
                      href={`/noticias/${article.id}`}
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                    >
                      <div className="relative h-48">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                            {article.category}
                          </span>
                          <time className="text-xs text-gray-500">
                            {new Date(article.date).toLocaleDateString("es-AR")}
                          </time>
                        </div>
                        <h3 className="font-serif text-sm font-semibold text-brand-navy line-clamp-3">
                          {article.title}
                        </h3>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  )
}
