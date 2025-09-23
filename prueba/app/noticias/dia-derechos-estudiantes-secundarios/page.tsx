import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import ShareButtons from "@/components/share-buttons"
import NewsAdvertisingCarousel from "@/components/news-advertising-carousel"

export const metadata: Metadata = {
  title: "16 de septiembre: Día de los Derechos de los Estudiantes Secundarios | Villa del Dique Digital",
  description:
    "Cada 16 de septiembre, Argentina recuerda La Noche de los Lápices y reafirma el compromiso con la defensa de los derechos estudiantiles, la educación y la democracia.",
  keywords: [
    "Día de los Derechos de los Estudiantes Secundarios",
    "La Noche de los Lápices",
    "derechos estudiantiles",
    "educación",
    "memoria",
    "democracia",
    "estudiantes secundarios",
    "Villa del Dique",
    "Argentina",
    "16 de septiembre",
  ],
  authors: [{ name: "Camila Insaurralde" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/noticias/dia-derechos-estudiantes-secundarios",
  },
  openGraph: {
    title: "16 de septiembre: Día de los Derechos de los Estudiantes Secundarios",
    description:
      "Argentina recuerda La Noche de los Lápices y reafirma el compromiso con la defensa de los derechos estudiantiles y la educación.",
    url: "https://www.villadeldique.com.ar/noticias/dia-derechos-estudiantes-secundarios",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/portada-dia-derechos-estudiantes.webp",
        width: 1200,
        height: 630,
        alt: "Día de los Derechos de los Estudiantes Secundarios - La Noche de los Lápices",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "16 de septiembre: Día de los Derechos de los Estudiantes Secundarios",
    description: "Argentina recuerda La Noche de los Lápices y reafirma el compromiso con los derechos estudiantiles.",
    images: ["/images/portada-dia-derechos-estudiantes.webp"],
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
    id: "inauguracion-polo-cultural",
    title: "Inauguración del Polo Cultural de Villa del Dique",
    image: "/images/inaguracion-vdd.jpg",
    date: "2025-09-06",
    category: "Cultura",
  },
]

export default function DiaDerechosEstudiantesSecundariosPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: "16 de septiembre: Día de los Derechos de los Estudiantes Secundarios",
    description:
      "Cada 16 de septiembre, Argentina recuerda La Noche de los Lápices y reafirma el compromiso con la defensa de los derechos estudiantiles, la educación y la democracia.",
    image: "https://www.villadeldique.com.ar/images/portada-dia-derechos-estudiantes.webp",
    datePublished: "2025-09-16",
    dateModified: "2025-09-16",
    author: {
      "@type": "Person",
      name: "Camila Insaurralde",
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
      "@id": "https://www.villadeldique.com.ar/noticias/dia-derechos-estudiantes-secundarios",
    },
    articleSection: "Comunidad",
    keywords:
      "Día de los Derechos de los Estudiantes Secundarios, La Noche de los Lápices, derechos estudiantiles, educación, memoria, democracia",
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
                src="/images/portada-dia-derechos-estudiantes.webp"
                alt="Día de los Derechos de los Estudiantes Secundarios - Manifestación estudiantil con cartel 'Los lápices siguieron y seguirán escribiendo'"
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
                <time className="text-gray-500">16 de septiembre de 2025</time>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 text-balance">
                16 de septiembre: Día de los Derechos de los Estudiantes Secundarios
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Cada 16 de septiembre, Argentina recuerda uno de los capítulos más dolorosos de su historia reciente:
                  <strong> La Noche de los Lápices</strong>, cuando en 1976 un grupo de estudiantes secundarios de La
                  Plata fue secuestrado, torturado y desaparecido por la dictadura militar. Su "delito" había sido
                  reclamar por el derecho al boleto estudiantil.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Hoy esta fecha se resignifica como el{" "}
                  <strong>Día de los Derechos de los Estudiantes Secundarios</strong>, un espacio de memoria, reflexión
                  y compromiso con la defensa de la educación, la participación juvenil y la democracia.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
                  Memoria y compromiso
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Recordar a los estudiantes desaparecidos es también un llamado a garantizar que nunca más se vulneren
                  los derechos fundamentales de quienes son protagonistas del presente y del futuro.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Conmemorar esta fecha es reafirmar que la voz de los estudiantes importa, que la educación es un
                  derecho inalienable, y que la memoria es el camino para fortalecer nuestra democracia.
                </p>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
                  Los lápices que siguieron escribiendo
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  La imagen que acompaña esta nota muestra un mensaje poderoso:{" "}
                  <em>"Los lápices siguieron y seguirán escribiendo"</em>. Esta frase simboliza la resistencia, la
                  continuidad de la lucha por los derechos y la esperanza de que las nuevas generaciones mantengan viva
                  la memoria y los ideales de justicia.
                </p>

                <blockquote className="border-l-4 border-brand-blue pl-6 py-4 my-8 bg-blue-50 rounded-r-lg">
                  <p className="text-lg font-medium text-brand-navy italic">
                    "La educación es un derecho inalienable, y la memoria es el camino para fortalecer nuestra
                    democracia."
                  </p>
                </blockquote>

                <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
                  Un compromiso presente
                </h2>

                <p className="text-gray-700 leading-relaxed mb-6">
                  En Villa del Dique, como en toda Argentina, esta fecha nos invita a reflexionar sobre la importancia
                  de defender los espacios de participación estudiantil, garantizar el acceso a una educación de calidad
                  y promover valores democráticos en nuestras instituciones educativas.
                </p>

                <p className="text-gray-700 leading-relaxed mb-6">
                  Los estudiantes de hoy son los constructores del mañana, y su derecho a expresarse, organizarse y
                  participar activamente en la vida democrática debe ser protegido y fomentado.
                </p>

                <div className="bg-gray-100 p-6 rounded-lg my-8">
                  <p className="text-sm text-gray-600 mb-2">
                    <strong>Foto de portada:</strong> LNM
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Por:</strong> Camila Insaurralde
                  </p>
                </div>
              </div>
            </div>

            <NewsAdvertisingCarousel />

            <div className="p-6 md:p-8">
              <div className="mt-8">
                <ShareButtons
                  url="https://www.villadeldique.com.ar/noticias/dia-derechos-estudiantes-secundarios"
                  title="16 de septiembre: Día de los Derechos de los Estudiantes Secundarios"
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
                        <div className="flex items-center justify-between mt-3">
                          <span className="text-xs text-gray-500">{article.category}</span>
                          <span className="text-brand-blue hover:text-blue-700 font-medium text-sm transition-colors">
                            Leer más →
                          </span>
                        </div>
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
