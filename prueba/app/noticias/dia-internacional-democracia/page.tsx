import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import ShareButtons from "@/components/share-buttons"
import NewsAdvertisingCarousel from "@/components/news-advertising-carousel"

export const metadata: Metadata = {
  title: "15 de septiembre: Día Internacional de la Democracia | Villa del Dique Digital",
  description:
    "Cada 15 de septiembre el mundo conmemora el Día Internacional de la Democracia. En Villa del Dique reflexionamos sobre la importancia de fortalecer los valores democráticos en nuestras comunidades.",
  keywords: [
    "Día Internacional de la Democracia",
    "democracia",
    "participación ciudadana",
    "Villa del Dique",
    "valores democráticos",
    "comunidad",
    "ciudadanía",
    "derechos humanos",
  ],
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/noticias/dia-internacional-democracia",
  },
  openGraph: {
    title: "15 de septiembre: Día Internacional de la Democracia",
    description:
      "Reflexionamos sobre la importancia de fortalecer los valores democráticos y la participación ciudadana en Villa del Dique.",
    url: "https://www.villadeldique.com.ar/noticias/dia-internacional-democracia",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/portada-dia-de-la-democracia.jpg",
        width: 1200,
        height: 630,
        alt: "Día Internacional de la Democracia - Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "15 de septiembre: Día Internacional de la Democracia",
    description: "Reflexionamos sobre la importancia de los valores democráticos en Villa del Dique.",
    images: ["/images/portada-dia-de-la-democracia.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
}

const relatedNews = [
  {
    id: "mega-feria-villa-del-dique",
    title: "Villa del Dique vive su primera Mega Feria en el Centro Cultural Pato Carret",
    image: "/images/portada-mega-feria.jpg",
    date: "2025-09-14",
    category: "Eventos",
  },
  {
    id: "desafio-cerro-lago",
    title: "Rumbo al 6° Desafío Cerro y Lago: todo listo para vivir la previa en Villa del Dique",
    image: "/images/portada-desafio-cerro-lago.jpg",
    date: "2025-09-13",
    category: "Deportes",
  },
  {
    id: "inauguracion-polo-cultural-asociacion",
    title: "Villa del Dique celebra la inauguración de su nuevo Polo Cultural",
    image: "/images/portada-inaguacion-polo-asociacion.webp",
    date: "2025-09-12",
    category: "Cultura",
  },
]

export default function DiaInternacionalDemocraciaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "15 de septiembre: Día Internacional de la Democracia",
    description:
      "Cada 15 de septiembre el mundo conmemora el Día Internacional de la Democracia. En Villa del Dique reflexionamos sobre la importancia de fortalecer los valores democráticos en nuestras comunidades.",
    image: "https://www.villadeldique.com.ar/images/portada-dia-de-la-democracia.jpg",
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
      "@id": "https://www.villadeldique.com.ar/noticias/dia-internacional-democracia",
    },
    articleSection: "Comunidad",
    keywords: "Día Internacional de la Democracia, democracia, participación ciudadana, Villa del Dique",
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
                src="/images/portada-dia-de-la-democracia.jpg"
                alt="Día Internacional de la Democracia - Manos levantadas simbolizando participación ciudadana"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-block bg-brand-blue text-white text-sm px-3 py-1 rounded-full font-medium">
                  Comunidad
                </span>
                <time className="text-gray-500">15 de septiembre de 2025</time>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 text-balance">
                15 de septiembre: Día Internacional de la Democracia
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Cada 15 de septiembre el mundo conmemora el <strong>Día Internacional de la Democracia</strong>,
                  instaurado por las Naciones Unidas en 2007, con el objetivo de reflexionar sobre la importancia de
                  fortalecer los valores democráticos en nuestras comunidades.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  La democracia no es solo un sistema político, sino también una práctica cotidiana que requiere la
                  participación activa de la ciudadanía, el respeto por los derechos humanos y la construcción de
                  consensos para el bien común.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  En Villa del Dique, esta fecha invita a pensar cómo cada acción ciudadana, desde el voto hasta la
                  participación en organizaciones comunitarias, asociaciones barriales o instituciones locales,
                  contribuye a una sociedad más justa, libre y participativa.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
                  La democracia en nuestra vida diaria
                </h2>

                <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-6 space-y-2">
                  <li>Participar en asambleas, reuniones o eventos comunitarios.</li>
                  <li>Escuchar y dialogar con respeto hacia distintas opiniones.</li>
                  <li>Involucrarse en causas sociales, culturales y ambientales.</li>
                  <li>Ejercer derechos y cumplir responsabilidades ciudadanas.</li>
                </ul>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
                  Una construcción colectiva
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  La democracia se sostiene en la confianza y el compromiso de cada persona. Recordar este día es
                  también una oportunidad para reafirmar que el futuro de nuestras comunidades depende de la
                  participación de todos y todas.
                </p>

                <blockquote className="border-l-4 border-brand-blue pl-6 py-4 my-8 bg-blue-50 rounded-r-lg">
                  <p className="text-lg font-medium text-brand-navy italic">
                    "La democracia no se hereda ni se regala: se construye día a día".
                  </p>
                </blockquote>
              </div>
            </div>

            <NewsAdvertisingCarousel />

            <div className="p-6 md:p-8">
              <div className="mt-8">
                <ShareButtons
                  url="https://www.villadeldique.com.ar/noticias/dia-internacional-democracia"
                  title="15 de septiembre: Día Internacional de la Democracia"
                />
              </div>

              <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-6">Noticias relacionadas</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  {relatedNews.map((article) => (
                    <Link
                      key={article.id}
                      href={`/noticias/${article.id}`}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
                    >
                      <div className="relative h-48">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {article.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                          {/* Placeholder for article summary */}
                        </p>
                        <Link
                          href={`/noticias/${article.id}`}
                          className="text-brand-blue hover:text-blue-700 font-medium text-sm transition-colors"
                        >
                          Leer más →
                        </Link>
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
