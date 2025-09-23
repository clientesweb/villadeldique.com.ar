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
  title: "Septiembre Amarillo: prevenir es acompañar | Villa del Dique Digital",
  description:
    "Cada 7 de septiembre se conmemora el Día Mundial de la Prevención del Suicidio. Una fecha que nos invita a reflexionar, sensibilizarnos y abrir espacios de escucha y acompañamiento.",
  keywords: [
    "Septiembre Amarillo",
    "prevención suicidio",
    "salud mental",
    "Villa del Dique",
    "acompañamiento",
    "esperanza",
    "ayuda",
    "Córdoba",
  ],
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  openGraph: {
    title: "Septiembre Amarillo: prevenir es acompañar",
    description:
      "Cada 7 de septiembre se conmemora el Día Mundial de la Prevención del Suicidio. Una fecha que nos invita a reflexionar y abrir espacios de acompañamiento.",
    url: "https://www.villadeldique.com.ar/noticias/septiembre-amarillo-prevencion",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "https://www.villadeldique.com.ar/images/mes-amarillo-portada.jpg",
        width: 1200,
        height: 630,
        alt: "Septiembre Amarillo - Prevención del Suicidio",
      },
    ],
    locale: "es_AR",
    type: "article",
    publishedTime: "2025-09-07T00:00:00.000Z",
  },
  twitter: {
    card: "summary_large_image",
    title: "Septiembre Amarillo: prevenir es acompañar",
    description:
      "Cada 7 de septiembre se conmemora el Día Mundial de la Prevención del Suicidio. Una fecha que nos invita a reflexionar y abrir espacios de acompañamiento.",
    images: ["https://www.villadeldique.com.ar/images/mes-amarillo-portada.jpg"],
  },
  alternates: {
    canonical: "https://www.villadeldique.com.ar/noticias/septiembre-amarillo-prevencion",
  },
}

export default function SeptiembreAmarilloPrevencion() {
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
                src="/images/mes-amarillo-portada.jpg"
                alt="Septiembre Amarillo - Prevención del Suicidio"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-4 md:p-6 lg:p-8">
              <div className="flex flex-wrap items-center gap-4 mb-4">
                <span className="inline-block bg-yellow-500 text-white text-sm px-3 py-1 rounded-full font-medium">
                  Salud Mental
                </span>
                <time className="text-gray-800" dateTime="2025-09-07">
                  7 de septiembre de 2025
                </time>
              </div>

              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy mb-4 md:mb-6 text-balance">
                Septiembre Amarillo: prevenir es acompañar
              </h1>

              <div className="prose prose-sm md:prose-lg max-w-none">
                <p className="font-sans text-gray-800 leading-relaxed mb-6 text-base md:text-lg">
                  Cada 7 de septiembre, en el marco del Mes Amarillo, se llevan adelante campañas de prevención del
                  suicidio en todo el mundo. Una fecha que nos invita a reflexionar, sensibilizarnos y, sobre todo,
                  abrir espacios de escucha y acompañamiento para quienes atraviesan momentos difíciles.
                </p>

                <div className="flex justify-center mb-8">
                  <div className="relative w-32 h-32 md:w-40 md:h-40">
                    <Image
                      src="/images/cinta-amarilla.png"
                      alt="Cinta amarilla - símbolo de prevención del suicidio"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 md:p-6 rounded-lg mb-6">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-yellow-800 mb-4">
                    ¿Por qué el amarillo?
                  </h2>
                  <p className="font-sans text-yellow-700 leading-relaxed text-sm md:text-base">
                    El amarillo se ha convertido en un símbolo internacional de la prevención del suicidio. Representa
                    la esperanza, la vida y la luz que puede abrirse camino incluso en medio de la oscuridad. Durante
                    septiembre, instituciones, organizaciones y comunidades iluminan monumentos, organizan charlas y
                    realizan actividades para difundir un mensaje claro: <strong>hablar salva vidas</strong>.
                  </p>
                </div>

                <div className="bg-red-50 p-4 md:p-6 rounded-lg mb-6">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-red-800 mb-4">
                    El suicidio como problema de salud pública
                  </h2>
                  <p className="font-sans text-red-700 leading-relaxed mb-4 text-sm md:text-base">
                    La Organización Mundial de la Salud (OMS) señala que el suicidio es una de las principales causas de
                    muerte entre jóvenes y adultos a nivel global. Sin embargo, es también una de las más prevenibles,
                    si se detectan a tiempo las señales de alerta y se brinda apoyo adecuado.
                  </p>

                  <h3 className="font-sans font-semibold text-red-800 mb-3 text-base md:text-lg">
                    Algunos factores clave para la prevención son:
                  </h3>
                  <ul className="font-sans text-red-700 space-y-2 text-sm md:text-base">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Escuchar sin juzgar
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Romper con los estigmas que rodean a la salud mental
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Brindar información accesible sobre lugares de ayuda
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      Fomentar la empatía y el acompañamiento comunitario
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 md:p-6 rounded-lg mb-6">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-blue-800 mb-4">
                    La importancia de hablar
                  </h2>
                  <p className="font-sans text-blue-700 leading-relaxed text-sm md:text-base">
                    Abrir el diálogo es fundamental. Muchas veces, quienes atraviesan pensamientos suicidas sienten que
                    están solos o que su dolor es incomprensible. Las campañas del Mes Amarillo buscan recordar que
                    pedir ayuda es un acto de valentía, y que existen redes de contención y profesionales preparados
                    para acompañar.
                  </p>
                </div>

                <div className="bg-green-50 p-4 md:p-6 rounded-lg mb-6">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-green-800 mb-4">Dónde buscar ayuda</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-sans font-semibold text-green-700 mb-2 text-base md:text-lg">
                        Línea de prevención del suicidio (Argentina):
                      </h3>
                      <div className="bg-white p-4 rounded border-l-4 border-green-500">
                        <p className="font-sans text-green-700 font-medium text-sm md:text-base">
                          <strong>Teléfono gratuito:</strong> 135
                        </p>
                        <p className="font-sans text-green-700 text-sm md:text-base mt-1">
                          <strong>Desde todo el país:</strong> (011) 5275-1135 o 0800-345-1435
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-100 p-4 md:p-6 rounded-lg border-2 border-yellow-300">
                  <h2 className="font-serif text-xl md:text-2xl font-bold text-yellow-800 mb-4">
                    Un mensaje de esperanza
                  </h2>
                  <p className="font-sans text-yellow-800 leading-relaxed text-sm md:text-base font-medium">
                    Este septiembre, sumémonos al Mes Amarillo iluminando nuestros espacios, compartiendo información y,
                    sobre todo, tendiéndole la mano a quienes más lo necesitan. Porque cada gesto de empatía puede
                    marcar la diferencia.
                  </p>
                </div>
              </div>

              <NewsAdvertisingCarousel />

              <div className="mt-8">
                <ShareButtons
                  title="Septiembre Amarillo: prevenir es acompañar"
                  url={
                    typeof window !== "undefined"
                      ? window.location.href
                      : "https://www.villadeldique.com.ar/noticias/septiembre-amarillo-prevencion"
                  }
                  description="Cada 7 de septiembre se conmemora el Día Mundial de la Prevención del Suicidio. Una fecha que nos invita a reflexionar y abrir espacios de acompañamiento."
                />
              </div>

              <section className="mt-12 pt-8 border-t border-gray-200">
                <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-6">Noticias relacionadas</h2>
                <div className="grid gap-6 md:grid-cols-2">
                  <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src="/images/portada-bomberos-voluntarios.webp"
                        alt="Bomberos Voluntarios"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        Bomberos Voluntarios de Villa del Dique: Vocación, Riesgo y Compromiso Comunitario
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        Entrevista exclusiva con los Bomberos Voluntarios sobre su labor incansable y dedicación.
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
                        src="/images/portada-dia-mundial-linfoma.jpg"
                        alt="Día Mundial del Linfoma"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                        Día Mundial del Linfoma: Información y Prevención
                      </h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                        Conoce más sobre el linfoma, sus síntomas y la importancia de la detección temprana.
                      </p>
                      <Link
                        href="/noticias/dia-mundial-linfoma"
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
        currentArticleId="septiembre-amarillo-prevencion"
        currentTitle="Septiembre Amarillo: prevenir es acompañar"
      />

      <Footer />
    </div>
  )
}
