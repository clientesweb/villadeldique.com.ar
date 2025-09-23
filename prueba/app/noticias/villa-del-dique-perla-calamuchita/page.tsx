import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import ShareButtons from "@/components/share-buttons"
import NewsAdvertisingCarousel from "@/components/news-advertising-carousel"
import { generateNewsMetadata } from "@/lib/news-metadata"

const article = {
  id: "villa-del-dique-perla-calamuchita",
  title: "Villa del Dique: la perla de Calamuchita",
  excerpt:
    "Un rincón serrano donde la naturaleza, la historia y las tradiciones se encuentran. Descubre todo lo que hace especial a Villa del Dique, desde su fundación hasta sus atractivos turísticos.",
  image: "/images/portada-villa-del-dique-perla-de-calamuchita.webp",
  date: "2025-09-18",
  category: "Turismo",
  author: "Camila Insaurralde",
}

const relatedNews = [
  {
    id: "desafio-cerro-lago",
    title: "Rumbo al 6° Desafío Cerro y Lago: todo listo para vivir la previa en Villa del Dique",
    image: "/images/portada-desafio-cerro-lago.jpg",
    date: "2025-09-13",
    category: "Deportes",
  },
  {
    id: "mega-feria-villa-del-dique",
    title: "Villa del Dique vive su primera Mega Feria en el Centro Cultural Pato Carret",
    image: "/images/portada-mega-feria.jpg",
    date: "2025-09-14",
    category: "Eventos",
  },
  {
    id: "inauguracion-polo-cultural-asociacion",
    title: "Villa del Dique celebra la inauguración de su nuevo Polo Cultural",
    image: "/images/portada-inaguacion-polo-asociacion.webp",
    date: "2025-09-12",
    category: "Cultura",
  },
]

export const metadata: Metadata = generateNewsMetadata(article)

export default function VillaDelDiquePerlaCalamuchitaPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    image: `https://www.villadeldique.com.ar${article.image}`,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      "@type": "Person",
      name: article.author,
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
      "@id": `https://www.villadeldique.com.ar/noticias/${article.id}`,
    },
    articleSection: article.category,
    keywords:
      "Villa del Dique, Calamuchita, turismo, Córdoba, lago, cerro de la Cruz, historia, naturaleza, deportes acuáticos",
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
                src={article.image || "/placeholder.svg"}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-block bg-green-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                  {article.category}
                </span>
                <time className="text-gray-500">18 de septiembre de 2025</time>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 text-balance">
                {article.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                  Un rincón serrano donde la naturaleza, la historia y las tradiciones se encuentran
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Villa del Dique, con una población estimada en alrededor de <strong>7.000 habitantes</strong>, fue
                  fundada el <strong>11 de octubre de 1935</strong> por Mateo Osella y Enrique Marandino. Ubicado entre
                  el cerro de La Cruz y el lago del embalse del río Calamuchita, combina serranías, agua, historia y
                  naturaleza.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg my-8">
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">Datos históricos</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Fundación:</strong> 11 de octubre de 1935
                    </li>
                    <li>
                      <strong>Fundadores:</strong> Mateo Osella y Enrique Marandino
                    </li>
                    <li>
                      <strong>Población:</strong> Aproximadamente 7.000 habitantes
                    </li>
                    <li>
                      <strong>Ubicación:</strong> Entre el cerro de La Cruz y el lago del embalse del río Calamuchita
                    </li>
                  </ul>
                </div>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">Vida serrana y tradiciones</h2>

                <p className="mb-6">
                  La vida en este pueblo fluye al ritmo de costumbres serranas: encuentros sociales, mate con amigos,
                  pesca, deportes acuáticos, artesanías y festividades locales que refuerzan el sentido de comunidad.
                </p>

                <p className="mb-6">
                  La gastronomía regional también tiene un lugar especial, con platos típicos como el{" "}
                  <strong>asado criollo</strong>, <strong>empanadas</strong>, <strong>cabritos</strong>,{" "}
                  <strong>pejerrey</strong> y <strong>alfajores</strong>.
                </p>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">Atractivos turísticos</h2>

                <p className="mb-6">
                  Para quienes visitan, Villa del Dique ofrece mucho más que paisajes. Desde su lago y deportes
                  acuáticos, sus senderos y miradores serranos como <strong>"El cerro de la Cruz"</strong> o{" "}
                  <strong>"La Sierrita"</strong>, hasta el camping municipal, balneario, plazas y alojamientos que van
                  de cabañas a hoteles.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-8">
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h4 className="font-serif text-lg font-bold text-green-800 mb-3">🏔️ Actividades de montaña</h4>
                    <ul className="space-y-2 text-green-700">
                      <li>• Senderismo en el Cerro de la Cruz</li>
                      <li>• Trekking en La Sierrita</li>
                      <li>• Miradores panorámicos</li>
                      <li>• Observación de flora y fauna</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-serif text-lg font-bold text-blue-800 mb-3">🏊 Actividades acuáticas</h4>
                    <ul className="space-y-2 text-blue-700">
                      <li>• Deportes acuáticos en el lago</li>
                      <li>• Pesca deportiva</li>
                      <li>• Balneario municipal</li>
                      <li>• Navegación recreativa</li>
                    </ul>
                  </div>
                </div>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">Un destino ideal</h2>

                <p className="mb-6">
                  Un destino ideal si buscas <strong>tranquilidad</strong>, <strong>aire libre</strong> y{" "}
                  <strong>experiencias compartidas</strong>. Villa del Dique combina la belleza natural de las sierras
                  cordobesas con la calidez de su gente y la riqueza de sus tradiciones.
                </p>

                <div className="bg-brand-blue text-white p-6 rounded-lg mb-8">
                  <h3 className="font-serif text-xl font-bold mb-3">¿Por qué elegir Villa del Dique?</h3>
                  <p className="leading-relaxed">
                    Villa del Dique es el lugar perfecto para desconectarse de la rutina y conectarse con la naturaleza.
                    Sus paisajes únicos, la hospitalidad de su gente y la variedad de actividades lo convierten en un
                    destino imperdible en el Valle de Calamuchita.
                  </p>
                </div>

                <div className="text-center my-8">
                  <div className="inline-block bg-gray-100 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Video:</strong> Conocé más sobre Villa del Dique
                    </p>
                    <Link
                      href="https://www.instagram.com/reel/DOuXwk7EfIA/?igsh=MTI2bTRocjhhMzZhaQ=="
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-blue hover:text-blue-700 font-medium"
                    >
                      Ver en Instagram →
                    </Link>
                  </div>
                </div>

                <div className="text-center my-8">
                  <p className="text-gray-600 mb-2">Seguinos en Instagram</p>
                  <Link
                    href="https://www.instagram.com/villadeldique.com.ar?igsh=MWQ1ZHI3aDQ1bjNmbg=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-brand-blue hover:text-blue-700 font-medium"
                  >
                    @villadeldique.com.ar
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </Link>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg my-8">
                <p className="text-sm text-gray-600">
                  <strong>Por:</strong> {article.author}
                </p>
              </div>
            </div>

            <NewsAdvertisingCarousel />

            <div className="p-6 md:p-8">
              <div className="mt-8">
                <ShareButtons
                  url="https://www.villadeldique.com.ar/noticias/villa-del-dique-perla-calamuchita"
                  title="Villa del Dique: la perla de Calamuchita"
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
