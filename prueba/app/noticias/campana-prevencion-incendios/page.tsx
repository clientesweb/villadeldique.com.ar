import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import NewsBreadcrumbs from "@/components/news-breadcrumbs"
import ShareButtons from "@/components/share-buttons"
import NewsAdvertisingCarousel from "@/components/news-advertising-carousel"

export const metadata: Metadata = {
  title: "Campaña de Prevención de Incendios en Villa del Dique | Villa del Dique Digital",
  description:
    "Únete a la campaña de prevención de incendios en Villa del Dique. Conoce las medidas de seguridad, números de emergencia y cómo proteger nuestro entorno natural.",
  keywords: ["prevención incendios", "Villa del Dique", "bomberos", "seguridad", "emergencias", "Córdoba", "fuego"],
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  openGraph: {
    title: "Campaña de Prevención de Incendios en Villa del Dique",
    description:
      "Un descuido puede terminar en tragedia. Súmate a las acciones de prevención de incendios y cuidemos entre todos nuestro entorno.",
    url: "https://www.villadeldique.com.ar/noticias/campana-prevencion-incendios",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "https://www.villadeldique.com.ar/images/no-desafiemos-al-fuego-portada.webp",
        width: 1920,
        height: 1080,
        alt: "No desafiemos al fuego - Campaña de prevención de incendios",
      },
    ],
    locale: "es_AR",
    type: "article",
    publishedTime: "2025-09-09T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Campaña de Prevención de Incendios en Villa del Dique",
    description: "Un descuido puede terminar en tragedia. Súmate a las acciones de prevención de incendios.",
    images: ["https://www.villadeldique.com.ar/images/no-desafiemos-al-fuego-portada.webp"],
  },
  alternates: {
    canonical: "https://www.villadeldique.com.ar/noticias/campana-prevencion-incendios",
  },
}

export default function CampanaPrevencionIncendios() {
  return (
    <div className="min-h-screen bg-white">
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
            <div className="relative h-48 md:h-64 lg:h-96 xl:h-[540px]">
              <Image
                src="/images/no-desafiemos-al-fuego-portada.webp"
                alt="No desafiemos al fuego - Campaña de prevención de incendios"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-4 md:p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="inline-block bg-red-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                  Seguridad
                </span>
                <time className="text-gray-800" dateTime="2025-09-09">
                  9 de septiembre de 2025
                </time>
              </div>

              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy mb-4 md:mb-6 text-balance">
                Campaña de Prevención de Incendios en Villa del Dique
              </h1>

              <div className="prose prose-sm md:prose-lg max-w-none">
                <p className="font-sans text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                  "Un descuido puede terminar en tragedia." Por eso, te invitamos a sumarte a las acciones de prevención
                  de incendios y cuidar entre todos nuestro entorno.
                </p>

                <div className="bg-red-50 p-4 md:p-6 rounded-lg mb-6">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-red-800 mb-4">Activemos prevención</h2>
                  <ul className="font-sans text-red-700 space-y-2 text-sm md:text-base">
                    <li>• No hagas asado en zonas prohibidas</li>
                    <li>• No tires colillas de cigarrillo</li>
                    <li>• No quemes basura ni restos de poda</li>
                    <li>• No hagas fogatas</li>
                  </ul>
                </div>

                <div className="bg-gray-900 text-white p-4 md:p-6 rounded-lg mb-6">
                  <h2 className="font-serif text-xl md:text-2xl font-bold mb-4">No desafiemos al fuego</h2>
                  <p className="font-sans leading-relaxed text-sm md:text-base">
                    La responsabilidad de prevenir es de todos. Si ves humo o fuego, llamá de inmediato.
                  </p>
                </div>

                <div className="bg-blue-50 p-4 md:p-6 rounded-lg">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-blue-800 mb-4">Números de emergencia</h2>
                  <div className="font-sans text-blue-700 space-y-2 text-sm md:text-base">
                    <p>
                      <strong>0800-888-FUEGO (38346)</strong>
                    </p>
                    <p>
                      <strong>911</strong> - Emergencias
                    </p>
                    <p>
                      <strong>100</strong> - Bomberos
                    </p>
                  </div>
                </div>
              </div>

              <NewsAdvertisingCarousel />

              <div className="mt-8">
                <ShareButtons
                  title="Campaña de Prevención de Incendios en Villa del Dique"
                  url={
                    typeof window !== "undefined"
                      ? window.location.href
                      : "https://www.villadeldique.com.ar/noticias/campana-prevencion-incendios"
                  }
                  description="Un descuido puede terminar en tragedia. Súmate a las acciones de prevención de incendios y cuidemos entre todos nuestro entorno."
                />
              </div>

              <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-6">Noticias relacionadas</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src="/images/portada-bomberos-voluntarios.jpg"
                        alt="Entrevista con Bomberos Voluntarios"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        Entrevista con Bomberos Voluntarios de Villa del Dique
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        Conoce el trabajo y dedicación de los Bomberos Voluntarios de Villa del Dique en esta entrevista
                        exclusiva.
                      </p>
                      <Link
                        href="/noticias/entrevista-bomberos-voluntarios"
                        className="text-brand-blue hover:text-blue-700 font-medium text-sm transition-colors"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </article>

                  <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src="/images/portada-septiembre-amarillo.jpg"
                        alt="Septiembre Amarillo"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        Septiembre Amarillo: Mes de Prevención del Suicidio
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        Septiembre es el mes mundial de la prevención del suicidio. Hablemos, escuchemos y actuemos
                        juntos.
                      </p>
                      <Link
                        href="/noticias/septiembre-amarillo-prevencion"
                        className="text-brand-blue hover:text-blue-700 font-medium text-sm transition-colors"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </article>
                </div>
              </section>
            </div>
          </article>
        </div>
      </main>

      <NewsBreadcrumbs
        currentArticleId="campana-prevencion-incendios"
        currentTitle="Campaña de Prevención de Incendios en Villa del Dique"
      />

      <Footer />
    </div>
  )
}
