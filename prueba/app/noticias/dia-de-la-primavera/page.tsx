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
  id: "dia-de-la-primavera",
  title: "21 de septiembre: Día de la Primavera",
  excerpt:
    "Un nuevo ciclo florece en Calamuchita. El 21 de septiembre marca la llegada de la primavera, una estación que simboliza el renacer, la alegría y el encuentro con la naturaleza en nuestro Valle de Calamuchita.",
  image: "/images/dia-de-la-primavera.jpg",
  date: "2025-09-21",
  category: "Comunidad",
  author: "Villa del Dique Digital",
}

const relatedNews = [
  {
    id: "dia-de-la-sanidad",
    title: "21 de septiembre: Día de la Sanidad",
    image: "/images/dia-de-la-sanidad.jpg",
    date: "2025-09-21",
    category: "Salud",
  },
  {
    id: "villa-del-dique-perla-calamuchita",
    title: "Villa del Dique: la perla de Calamuchita",
    image: "/images/portada-villa-del-dique-perla-de-calamuchita.webp",
    date: "2025-09-18",
    category: "Turismo",
  },
  {
    id: "dia-del-profesor",
    title: "Día del Profesor: Celebrando a quienes inspiran con su enseñanza",
    image: "/images/feliz-dia-del-profesor.jpg",
    date: "2025-09-17",
    category: "Comunidad",
  },
]

export const metadata: Metadata = generateNewsMetadata(article)

export default function DiaDeLaPrimaveraPage() {
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
    keywords: "Día de la Primavera, Villa del Dique, Calamuchita, naturaleza, estudiantes, juventud, 21 septiembre",
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
                <time className="text-gray-500">21 de septiembre de 2025</time>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 text-balance">
                {article.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                  Un nuevo ciclo florece en Calamuchita
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  El 21 de septiembre marca la llegada de la <strong>primavera</strong>, una estación que simboliza el
                  renacer, la alegría y el encuentro con la naturaleza. En todo el país, y especialmente en nuestro{" "}
                  <strong>Valle de Calamuchita</strong>, esta fecha invita a celebrar los colores, los aromas y la vida
                  al aire libre que tanto caracterizan a la región.
                </p>

                <div className="bg-green-50 p-6 rounded-lg my-8">
                  <h3 className="font-serif text-xl font-bold text-green-800 mb-3">
                    🌸 La primavera en Villa del Dique
                  </h3>
                  <p className="text-green-700 leading-relaxed">
                    En nuestra localidad, conocida como la <strong>Perla de Calamuchita</strong>, la primavera es mucho
                    más que un cambio de estación: es una oportunidad para reencontrarse con el lago, los paisajes y los
                    espacios que nos conectan con la tranquilidad y la belleza natural.
                  </p>
                </div>

                <p className="mb-6">
                  Las familias, los jóvenes y los visitantes encuentran en estas semanas motivos para compartir,
                  disfrutar de las actividades al aire libre, y redescubrir lo que hace único a Villa del Dique.
                </p>

                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/villa-del-dique-lago-primavera.jpg"
                    alt="Villa del Dique en primavera - lago y naturaleza floreciendo"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                  Un símbolo de juventud y encuentro
                </h2>

                <p className="mb-6">
                  El <strong>Día de la Primavera</strong> también está vinculado con el <strong>Día del Estudiante</strong>, lo que convierte a esta fecha en un momento de celebración especial para los jóvenes. En plazas, parques y costas del lago, se renuevan las tradiciones de música, juegos y reuniones que llenan de energía al pueblo.
                </p>

                <div className="bg-yellow-50 p-6 rounded-lg my-8">
                  <h3 className="font-serif text-xl font-bold text-yellow-800 mb-3">🎉 Celebración estudiantil</h3>
                  <p className="text-yellow-700 leading-relaxed">
                    Los estudiantes encuentran en esta fecha una oportunidad especial para celebrar, reunirse y disfrutar de la naturaleza que caracteriza a Villa del Dique. Las costas del lago se convierten en el escenario perfecto para estas celebraciones juveniles.
                  </p>
                </div>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">Una invitación a disfrutar</h2>

                <p className="mb-6">
                  Desde nuestro medio, celebramos la llegada de esta estación con un mensaje de optimismo: que la
                  primavera sea un recordatorio de que siempre hay nuevos comienzos, que la comunidad crece y florece
                  cuando se encuentra unida, y que cada día en Villa del Dique es una oportunidad para disfrutar del
                  entorno privilegiado que nos rodea.
                </p>

                <div className="bg-brand-blue text-white p-6 rounded-lg mb-8 text-center">
                  <h3 className="font-serif text-xl font-bold mb-3">🌺 ¡Feliz Día de la Primavera!</h3>
                  <p className="leading-relaxed">
                    Que esta nueva estación nos invite a florecer en proyectos, en sueños y en vida compartida.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg my-8">
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-4">📱 Seguinos en redes sociales</h3>
                  <div className="flex flex-col sm:flex-row gap-4 items-center">
                    <div className="flex items-center gap-3">
                      <Image
                        src="/images/instagram-icon.png"
                        alt="Instagram"
                        width={32}
                        height={32}
                        className="w-8 h-8"
                      />
                      <div>
                        <p className="font-sans font-semibold text-brand-navy">Instagram</p>
                        <Link
                          href="https://www.instagram.com/villadeldique.com.ar"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-brand-blue hover:text-blue-700 font-medium"
                        >
                          @villadeldique.com.ar
                        </Link>
                      </div>
                    </div>
                    <div className="flex-1">
                      <Link
                        href="https://www.instagram.com/reel/DO4iVMhETlf/?igsh=MTN5cXgyMXJlM29xYQ=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                        Ver video de la primavera
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-lg my-8">
                <p className="text-sm text-gray-600">
                  <strong>Por:</strong> Villa del Dique Digital
                </p>
              </div>
            </div>

            <NewsAdvertisingCarousel />

            <div className="p-6 md:p-8">
              <div className="mt-8">
                <ShareButtons
                  url="https://www.villadeldique.com.ar/noticias/dia-de-la-primavera"
                  title="21 de septiembre: Día de la Primavera"
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
