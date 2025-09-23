import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import NewsAdvertisingCarousel from "@/components/news-advertising-carousel"

export const metadata: Metadata = {
  title: "Villa del Dique vive su primera Mega Feria en el Centro Cultural Pato Carret | Villa del Dique Digital",
  description:
    "Este domingo se inaugura la primera edición de la Mega Feria en Villa del Dique, reuniendo emprendedores, artesanos y propuestas de moda circular en el Centro Cultural Pato Carret.",
  keywords: [
    "Mega Feria Villa del Dique",
    "Centro Cultural Pato Carret",
    "emprendedores",
    "artesanos",
    "moda circular",
    "evento familiar",
    "show infantil",
    "chocolatada",
    "entrada libre",
    "Villa del Dique",
    "Córdoba",
    "Argentina",
  ],
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/noticias/mega-feria-villa-del-dique",
  },
  openGraph: {
    title: "Villa del Dique vive su primera Mega Feria",
    description:
      "Primera edición de la Mega Feria con emprendedores, artesanos y actividades familiares en el Centro Cultural Pato Carret.",
    url: "https://www.villadeldique.com.ar/noticias/mega-feria-villa-del-dique",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/portada-mega-feria.jpg",
        width: 1200,
        height: 630,
        alt: "Primera Mega Feria en Villa del Dique - Centro Cultural Pato Carret",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique vive su primera Mega Feria",
    description: "Primera edición de la Mega Feria con emprendedores y artesanos en Villa del Dique.",
    images: ["/images/portada-mega-feria.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Villa del Dique vive su primera Mega Feria en el Centro Cultural Pato Carret",
  description:
    "Este domingo se inaugura la primera edición de la Mega Feria en Villa del Dique, reuniendo emprendedores, artesanos y propuestas de moda circular.",
  image: "https://www.villadeldique.com.ar/images/portada-mega-feria.jpg",
  datePublished: "2025-09-14T10:00:00-03:00",
  dateModified: "2025-09-14T10:00:00-03:00",
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
    "@id": "https://www.villadeldique.com.ar/noticias/mega-feria-villa-del-dique",
  },
  articleSection: "Eventos",
  keywords: "Mega Feria, Villa del Dique, emprendedores, artesanos, Centro Cultural Pato Carret",
}

export default function MegaFeriaPage() {
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
                src="/images/portada-mega-feria.jpg"
                alt="Primera Mega Feria en Villa del Dique - Centro Cultural Pato Carret"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-block bg-brand-blue text-white text-sm px-3 py-1 rounded-full font-medium">
                  Eventos
                </span>
                <time className="text-gray-500 text-sm md:text-base">14 de septiembre de 2025</time>
              </div>

              <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-brand-navy mb-6 text-balance">
                Villa del Dique vive su primera Mega Feria en el Centro Cultural Pato Carret
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  <strong>Villa del Dique, 14 de septiembre de 2025.</strong> Este domingo se inaugura en nuestra
                  localidad la primera edición de la Mega Feria, un evento que reúne a emprendedores, artesanos y
                  propuestas de moda circular en un mismo espacio pensado para toda la familia.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  La cita es en el <strong>Centro Cultural Pato Carret, de 14 a 19 horas</strong>, donde vecinos y
                  visitantes podrán recorrer stands con productos locales, originales y hechos a mano, impulsando así el
                  trabajo creativo y el desarrollo de nuestra comunidad.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  La jornada también ofrece actividades para los más pequeños, con un <strong>show infantil</strong> y
                  una tradicional <strong>chocolatada</strong> para compartir la tarde en un clima de encuentro y
                  celebración.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Desde la organización destacan que la feria nace con el objetivo de convertirse en un espacio de
                  promoción para los emprendedores y de disfrute para toda la comunidad. Con{" "}
                  <strong>entrada libre y gratuita</strong>, se trata de una oportunidad única para conocer, apoyar y
                  valorar el talento local.
                </p>

                <div className="bg-brand-blue/10 p-6 rounded-lg mb-8">
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-4">Información del evento</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Fecha:</strong> Domingo 14 de septiembre de 2025
                    </li>
                    <li>
                      <strong>Horario:</strong> 14:00 a 19:00 horas
                    </li>
                    <li>
                      <strong>Lugar:</strong> Centro Cultural Pato Carret
                    </li>
                    <li>
                      <strong>Entrada:</strong> Libre y gratuita
                    </li>
                    <li>
                      <strong>Actividades:</strong> Stands de emprendedores, show infantil, chocolatada
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-6">
                  <p className="text-sm text-gray-500 mb-4">
                    Más información: Seguí a{" "}
                    <a
                      href="https://www.instagram.com/turismoycultura.villadeldique/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:underline"
                    >
                      @turismoycultura.villadeldique
                    </a>
                  </p>
                  <p className="text-sm text-gray-500 mb-4">
                    Organiza: Municipalidad Villa del Dique{" "}
                    <a
                      href="https://www.instagram.com/munivilladeldique/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:underline"
                    >
                      @munivilladeldique
                    </a>
                  </p>
                  <p className="text-sm text-gray-500">Por Villa del Dique Digital</p>
                </div>
              </div>
            </div>

            <NewsAdvertisingCarousel />

            <div className="p-6 md:p-8">{/* ... existing code ... */}</div>
          </article>

          <section className="mt-12 bg-white rounded-lg shadow-lg p-6 md:p-8">
            <h2 className="font-serif text-2xl font-bold text-brand-navy mb-6">Noticias relacionadas</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <article className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-32">
                  <Image
                    src="/images/portada-desafio-cerro-lago.jpg"
                    alt="6° Desafío Cerro y Lago"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-brand-navy mb-2">
                    <Link href="/noticias/desafio-cerro-lago" className="hover:text-brand-blue transition-colors">
                      Rumbo al 6° Desafío Cerro y Lago
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    La pasión por el ciclismo de montaña vuelve a encenderse en la región...
                  </p>
                  <Link
                    href="/noticias/desafio-cerro-lago"
                    className="text-brand-blue hover:underline text-sm font-medium"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>

              <article className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-32">
                  <Image
                    src="/images/portada-inaguacion-polo-asociacion.webp"
                    alt="Inauguración Polo Cultural"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-brand-navy mb-2">
                    <Link
                      href="/noticias/inauguracion-polo-cultural-asociacion"
                      className="hover:text-brand-blue transition-colors"
                    >
                      Inauguración del Polo Cultural
                    </Link>
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    La comunidad de Villa del Dique vivió una noche histórica...
                  </p>
                  <Link
                    href="/noticias/inauguracion-polo-cultural-asociacion"
                    className="text-brand-blue hover:underline text-sm font-medium"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}
