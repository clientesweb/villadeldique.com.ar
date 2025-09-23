import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import ShareButtons from "@/components/share-buttons"
import NewsAdvertisingCarousel from "@/components/news-advertising-carousel"

export const metadata: Metadata = {
  title: "Villa del Dique celebra la inauguración de su nuevo Polo Cultural | Villa del Dique Digital",
  description:
    "La comunidad de Villa del Dique vivió una noche histórica con la inauguración del Polo Cultural, conformado por la renovada Casa de la Cultura y el Anfiteatro Municipal.",
  keywords: [
    "Polo Cultural Villa del Dique",
    "Casa de la Cultura",
    "Anfiteatro Municipal",
    "inauguración",
    "cultura",
    "Villa del Dique",
    "Córdoba",
    "Argentina",
  ],
  authors: [{ name: "Asociación de Comercio, Turismo y Afines" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  openGraph: {
    title: "Villa del Dique celebra la inauguración de su nuevo Polo Cultural",
    description:
      "La comunidad de Villa del Dique vivió una noche histórica con la inauguración del Polo Cultural, conformado por la renovada Casa de la Cultura y el Anfiteatro Municipal.",
    url: "https://www.villadeldique.com.ar/noticias/inauguracion-polo-cultural-asociacion",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "https://www.villadeldique.com.ar/images/portada-inaguacion-polo-asociacion.webp",
        width: 1920,
        height: 1080,
        alt: "Inauguración del Polo Cultural de Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique celebra la inauguración de su nuevo Polo Cultural",
    description: "La comunidad de Villa del Dique vivió una noche histórica con la inauguración del Polo Cultural.",
    images: ["https://www.villadeldique.com.ar/images/portada-inaguacion-polo-asociacion.webp"],
  },
  alternates: {
    canonical: "https://www.villadeldique.com.ar/noticias/inauguracion-polo-cultural-asociacion",
  },
}

export default function InauguracionPoloCulturalPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />

      <main className="min-h-screen">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-8">
          <Link
            href="/noticias"
            className="inline-flex items-center text-brand-blue hover:text-blue-700 mb-6 font-sans transition-colors"
          >
            <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ← Volver a Noticias
          </Link>

          <header className="mb-6 md:mb-8">
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="inline-block bg-brand-blue text-white text-sm px-3 py-1 rounded-full font-medium">
                Cultura
              </span>
              <time className="text-gray-700 font-medium" dateTime="2025-09-12">
                12 de septiembre de 2025
              </time>
            </div>

            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 text-balance leading-tight">
              Villa del Dique celebra la inauguración de su nuevo Polo Cultural
            </h1>

            <p className="font-sans text-lg sm:text-xl text-gray-600 leading-relaxed mb-6">
              La comunidad de Villa del Dique vivió una noche histórica con la inauguración del Polo Cultural,
              conformado por la renovada Casa de la Cultura y el Anfiteatro Municipal.
            </p>

            <div className="text-sm text-gray-600 mb-8">
              Por <span className="font-medium text-gray-700">Asociación de Comercio, Turismo y Afines</span>
            </div>
          </header>

          <figure className="relative w-full aspect-video mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/portada-inaguacion-polo-asociacion.webp"
              alt="Inauguración del Polo Cultural de Villa del Dique con personas en trajes tradicionales"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
            />
          </figure>

          <div className="prose prose-lg max-w-none">
            <div className="font-sans text-base sm:text-lg leading-relaxed text-gray-800 space-y-6">
              <p>
                Desde la Asociación de Comercio, Turismo y Afines, celebramos este importante avance que fortalece la
                identidad local y potencia a la vez la proyección turística y cultural de Villa del Dique.
              </p>

              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy mt-8 mb-4">
                Un espacio para crecer juntos
              </h2>

              <p>
                La remodelación de la Casa de la Cultura y la puesta en valor del Anfiteatro no solo brindan un lugar
                más cómodo y atractivo, también reafirman el compromiso de la comunidad con el arte, la historia y las
                expresiones que nos representan.
              </p>

              <p>
                Este Polo Cultural será escenario de talleres, espectáculos, ferias y encuentros que permitirán que
                vecinos, artistas y emprendedores tengan un espacio propio donde compartir y crecer.
              </p>

              <h2 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-brand-navy mt-8 mb-4">
                Cultura y turismo de la mano
              </h2>

              <p>
                Villa del Dique avanza hacia un futuro en el que la cultura y el turismo se complementan, generando
                nuevas oportunidades para quienes viven y visitan la localidad. La inauguración de este espacio refuerza
                nuestra convicción de que el arte es motor de desarrollo, integración y orgullo para todos.
              </p>

              <aside className="bg-gray-50 p-4 sm:p-6 rounded-lg my-8">
                <p className="text-base sm:text-lg font-medium text-brand-navy mb-4">
                  Desde la Asociación de Comercio, Turismo y Afines renovamos nuestro compromiso de acompañar cada
                  iniciativa que, como este Polo Cultural, contribuye a fortalecer nuestras raíces y proyectar a Villa
                  del Dique hacia un futuro lleno de vida y posibilidades.
                </p>
              </aside>

              <footer className="border-t border-gray-200 pt-6 mt-8">
                <h3 className="font-serif text-lg sm:text-xl font-bold text-brand-navy mb-4">Enlaces relacionados</h3>
                <div className="space-y-2 text-sm sm:text-base">
                  <p>
                    <strong>Instagram:</strong>{" "}
                    <a
                      href="https://www.instagram.com/vivivilladeldique"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-blue-700 transition-colors"
                    >
                      @vivivilladeldique
                    </a>
                  </p>
                  <p>
                    <strong>Web:</strong>{" "}
                    <a
                      href="https://www.villadeldique.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-blue-700 transition-colors"
                    >
                      www.villadeldique.org
                    </a>
                  </p>
                  <p>
                    <strong>Municipalidad:</strong>{" "}
                    <a
                      href="https://www.instagram.com/munivilladeldique/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-blue-700 transition-colors"
                    >
                      @munivilladeldique
                    </a>
                  </p>
                </div>
              </footer>
            </div>
          </div>

          <NewsAdvertisingCarousel />

          <div className="mt-8">
            <ShareButtons
              title="Villa del Dique celebra la inauguración de su nuevo Polo Cultural"
              url={
                typeof window !== "undefined"
                  ? window.location.href
                  : "https://www.villadeldique.com.ar/noticias/inauguracion-polo-cultural-asociacion"
              }
              description="La comunidad de Villa del Dique vivió una noche histórica con la inauguración del Polo Cultural, conformado por la renovada Casa de la Cultura y el Anfiteatro Municipal."
            />
          </div>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-6">Noticias relacionadas</h2>
            <div className="grid gap-6 md:grid-cols-2">
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
                    Una propuesta única que combina gastronomía, artesanías, música en vivo y entretenimiento familiar.
                  </p>
                  <Link
                    href="/noticias/mega-feria-villa-del-dique"
                    className="text-brand-blue hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>

              <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/portada-desafio-cerro-lago.jpg"
                    alt="6° Desafío Cerro y Lago"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    Rumbo al 6° Desafío Cerro y Lago
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    La pasión por el ciclismo de montaña vuelve a encenderse en la región.
                  </p>
                  <Link
                    href="/noticias/desafio-cerro-lago"
                    className="text-brand-blue hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            </div>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  )
}
