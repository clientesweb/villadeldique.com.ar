import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import ShareButtons from "@/components/share-buttons"
import NewsAdvertisingCarousel from "@/components/news-advertising-carousel"

export const metadata: Metadata = {
  title: "Inauguración del Polo Cultural de Villa del Dique | Villa del Dique Digital",
  description:
    "Villa del Dique inaugura su nuevo Polo Cultural con la renovada Casa de la Cultura, Centro Cultural Pato Carret y un moderno anfiteatro al aire libre.",
  keywords: [
    "Polo Cultural",
    "Villa del Dique",
    "inauguración",
    "Casa de la Cultura",
    "Centro Cultural Pato Carret",
    "anfiteatro",
    "cultura",
    "Córdoba",
  ],
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  openGraph: {
    title: "Inauguración del Polo Cultural de Villa del Dique",
    description:
      "Villa del Dique contará con un nuevo Polo Cultural, un espacio pensado para el encuentro, la creatividad y el desarrollo de nuestra comunidad.",
    url: "https://www.villadeldique.com.ar/noticias/inauguracion-polo-cultural",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "https://www.villadeldique.com.ar/images/inaguracion-vdd.jpg",
        width: 1200,
        height: 630,
        alt: "Inauguración del Polo Cultural de Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "article",
    publishedTime: "2025-09-06T00:00:00.000Z", // Corregida fecha del 12 al 6 de septiembre
  },
  twitter: {
    card: "summary_large_image",
    title: "Inauguración del Polo Cultural de Villa del Dique",
    description:
      "Villa del Dique contará con un nuevo Polo Cultural para el encuentro, la creatividad y el desarrollo comunitario.",
    images: ["https://www.villadeldique.com.ar/images/inaguracion-vdd.jpg"],
  },
  alternates: {
    canonical: "https://www.villadeldique.com.ar/noticias/inauguracion-polo-cultural",
  },
}

export default function InauguracionPoloCultural() {
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
            <div className="relative h-48 md:h-64 lg:h-96">
              <Image
                src="/images/inaguracion-vdd.jpg"
                alt="Inauguración del Polo Cultural de Villa del Dique"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-4 md:p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="inline-block bg-brand-blue text-white text-sm px-3 py-1 rounded-full font-medium">
                  Cultura
                </span>
                <time className="text-gray-500" dateTime="2025-09-06">
                  6 de septiembre de 2025 {/* Corregida fecha del 12 al 6 de septiembre */}
                </time>
              </div>

              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy mb-4 md:mb-6 text-balance">
                Inauguración del Polo Cultural de Villa del Dique
              </h1>

              <div className="prose prose-sm md:prose-lg max-w-none">
                <p className="font-sans text-gray-700 leading-relaxed mb-6 text-base md:text-lg">
                  El 6 de septiembre, Villa del Dique contará con un nuevo Polo Cultural, un espacio pensado para el{" "}
                  {/* Corregida fecha en el contenido */}
                  encuentro, la creatividad y el desarrollo de nuestra comunidad.
                </p>

                <div className="bg-blue-50 p-4 md:p-6 rounded-lg mb-6">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-blue-800 mb-4">
                    Este importante proyecto integra
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sans font-semibold text-blue-700 mb-2 text-base md:text-lg">
                        La renovada Casa de la Cultura
                      </h3>
                      <p className="font-sans text-blue-600 text-sm md:text-base">
                        Espacio histórico completamente restaurado que conserva su valor patrimonial mientras se adapta
                        a las necesidades culturales actuales.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-blue-700 mb-2 text-base md:text-lg">
                        El Centro Cultural Pato Carret
                      </h3>
                      <p className="font-sans text-blue-600 text-sm md:text-base">
                        Centro emblemático que continuará siendo un punto de referencia para las actividades artísticas
                        y culturales de la comunidad.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-blue-700 mb-2 text-base md:text-lg">
                        El nuevo anfiteatro al aire libre
                      </h3>
                      <p className="font-sans text-blue-600 text-sm md:text-base">
                        Moderno espacio diseñado para conciertos, obras de teatro, espectáculos y eventos culturales que
                        fortalecerán la vida artística del pueblo.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 p-4 md:p-6 rounded-lg mb-6">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-green-800 mb-4">
                    Visión de Desarrollo Cultural
                  </h2>
                  <p className="font-sans text-green-700 leading-relaxed text-sm md:text-base">
                    El intendente Emiliano Torres destacó que el objetivo es generar un punto de encuentro para
                    artistas, instituciones y vecinos, promoviendo el crecimiento cultural y social de Villa del Dique.
                  </p>
                  <p className="font-sans text-green-700 leading-relaxed mt-4 text-sm md:text-base">
                    Este proyecto representa una inversión estratégica en el desarrollo cultural y turístico de la
                    localidad, creando nuevas oportunidades para el crecimiento económico y social.
                  </p>
                </div>

                <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    Detalles del Acto Inaugural
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="font-sans text-gray-700 text-sm md:text-base">
                        <strong>Fecha:</strong> 6 de septiembre de 2025 {/* Corregida fecha en detalles */}
                      </p>
                      <p className="font-sans text-gray-700 text-sm md:text-base">
                        <strong>Hora:</strong> 11:00 hs
                      </p>
                      <p className="font-sans text-gray-700 text-sm md:text-base">
                        <strong>Ubicación:</strong> Nuevo Polo Cultural - Sector Oficina de Turismo
                      </p>
                    </div>
                    <div>
                      <h3 className="font-sans font-semibold text-gray-800 mb-2 text-base md:text-lg">Programa</h3>
                      <ul className="font-sans text-gray-700 space-y-1 text-sm">
                        <li>• Intervenciones culturales</li>
                        <li>• Muestra de las renovadas instalaciones</li>
                        <li>• Presentación del nuevo anfiteatro municipal</li>
                        <li>• Actividades para toda la familia</li>
                      </ul>
                    </div>
                  </div>
                  <p className="font-sans text-gray-700 mt-4 font-medium text-sm md:text-base">
                    Todos los vecinos están invitados a participar del acto inaugural.
                  </p>
                </div>
              </div>

              <NewsAdvertisingCarousel />

              <div className="mt-8">
                <ShareButtons
                  title="Inauguración del Polo Cultural de Villa del Dique"
                  url={
                    typeof window !== "undefined"
                      ? window.location.href
                      : "https://www.villadeldique.com.ar/noticias/inauguracion-polo-cultural"
                  }
                  description="Villa del Dique contará con un nuevo Polo Cultural, un espacio pensado para el encuentro, la creatividad y el desarrollo de nuestra comunidad."
                />
              </div>

              <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-6">Noticias relacionadas</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src="/images/portada-inaguacion-polo-asociacion.webp"
                        alt="Inauguración Polo Cultural Asociación"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        Villa del Dique celebra la inauguración de su nuevo Polo Cultural
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        La comunidad vivió una noche histórica con la inauguración del Polo Cultural.
                      </p>
                      <Link
                        href="/noticias/inauguracion-polo-cultural-asociacion"
                        className="text-brand-blue hover:text-blue-700 font-medium text-sm transition-colors"
                      >
                        Leer más →
                      </Link>
                    </div>
                  </article>

                  <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src="/images/portada-mega-feria.jpg"
                        alt="Mega Feria Villa del Dique"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        Villa del Dique vive su primera Mega Feria
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        Una propuesta única que combina gastronomía, artesanías, música en vivo y entretenimiento
                        familiar.
                      </p>
                      <Link
                        href="/noticias/mega-feria-villa-del-dique"
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

      <Footer />
    </div>
  )
}
