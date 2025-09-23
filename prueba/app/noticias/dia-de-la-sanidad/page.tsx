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
  id: "dia-de-la-sanidad",
  title: "21 de septiembre: Día de la Sanidad",
  excerpt:
    "Un reconocimiento a quienes cuidan nuestra salud todos los días. El 21 de septiembre se celebra en Argentina el Día de la Sanidad, en homenaje a los trabajadores de la salud.",
  image: "/images/dia-de-la-sanidad.jpg",
  date: "2025-09-21",
  category: "Salud",
  author: "Villa del Dique Digital",
}

const relatedNews = [
  {
    id: "dia-mundial-linfoma",
    title: "15 de septiembre: Día Mundial de la Concientización sobre el Linfoma",
    image: "/images/portada-dia-mundial-linfoma.jpg",
    date: "2025-09-15",
    category: "Salud",
  },
  {
    id: "septiembre-amarillo-prevencion",
    title: "Septiembre Amarillo: prevenir es acompañar",
    image: "/images/mes-amarillo-portada.jpg",
    date: "2025-09-07",
    category: "Salud Mental",
  },
  {
    id: "dia-del-psicopedagogo",
    title: "17 de septiembre: Día del Psicopedagogo",
    image: "/images/dia-de-psicopedadogo.jpeg",
    date: "2025-09-17",
    category: "Salud",
  },
]

export const metadata: Metadata = generateNewsMetadata(article)

export default function DiaDeLaSanidadPage() {
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
    keywords: "Día de la Sanidad, trabajadores de la salud, ATSA, sanidad, Villa del Dique, 21 septiembre, salud",
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
                  Un reconocimiento a quienes cuidan nuestra salud todos los días
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  El 21 de septiembre se celebra en Argentina el <strong>Día de la Sanidad</strong>, en homenaje a los
                  trabajadores y trabajadoras de la salud que, desde distintos ámbitos, garantizan la atención, el
                  cuidado y la prevención para toda la comunidad.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  La fecha recuerda la creación de la Obra Social de la Asociación de Trabajadores de la Sanidad
                  Argentina (ATSA) en 1941, un hecho histórico que marcó el inicio de la organización y protección de
                  quienes dedican su vida profesional al cuidado de los demás.
                </p>

                <div className="bg-green-50 p-6 rounded-lg my-8">
                  <h3 className="font-serif text-xl font-bold text-green-800 mb-3">ATSA - Un hito histórico</h3>
                  <p className="text-green-700 leading-relaxed">
                    La Asociación de Trabajadores de la Sanidad Argentina (ATSA) fue fundada en 1941, estableciendo un
                    precedente importante en la organización sindical del sector salud y la protección social de sus
                    trabajadores.
                  </p>
                </div>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                  El valor de la sanidad en la vida cotidiana
                </h2>

                <p className="mb-6">
                  La sanidad abarca mucho más que la atención médica. Implica prevención, promoción de hábitos
                  saludables, acompañamiento en procesos de enfermedad y el compromiso de mantener la calidad de vida de
                  las personas. Cada bioquímico, enfermero, médico, técnico de laboratorio, camillero o administrativo
                  forma parte de un engranaje esencial que sostiene al sistema de salud.
                </p>

                <p className="mb-6">
                  En contextos desafiantes, como lo fue la pandemia, la importancia de su labor quedó aún más en
                  evidencia: la sociedad entera pudo reconocer el esfuerzo, la entrega y la vocación de servicio de
                  quienes, con profesionalismo y humanidad, estuvieron en la primera línea.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg my-8">
                  <h3 className="font-serif text-xl font-bold text-blue-800 mb-4">
                    Profesionales de la salud incluyen:
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Médicos y especialistas
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Enfermeros y enfermeras
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Bioquímicos
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Técnicos de laboratorio
                      </li>
                    </ul>
                    <ul className="space-y-2 text-blue-700">
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Camilleros
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Personal administrativo
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Farmacéuticos
                      </li>
                      <li className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        Auxiliares de salud
                      </li>
                    </ul>
                  </div>
                </div>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                  Un homenaje que también es compromiso
                </h2>

                <p className="mb-6">
                  Recordar esta fecha no solo significa agradecer. También es una oportunidad para renovar el compromiso
                  colectivo con el cuidado de la salud, apoyando a las instituciones locales, valorando a los
                  profesionales y comprendiendo que el bienestar es una construcción compartida.
                </p>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                  Desde Calamuchita, un reconocimiento especial
                </h2>

                <p className="mb-6">
                  En nuestro valle, la tarea de médicos, bioquímicos, enfermeros y técnicos tiene un valor inmenso:
                  sostener la salud en comunidades que crecen y que cada vez más requieren de servicios confiables y
                  cercanos. Su trabajo diario es, sin dudas, un pilar para el desarrollo de toda la región.
                </p>

                <div className="bg-brand-blue text-white p-6 rounded-lg mb-8">
                  <h3 className="font-serif text-xl font-bold mb-3">Desde Villa del Dique Digital</h3>
                  <p className="leading-relaxed">
                    Reconocemos y valoramos profundamente la labor diaria de todos los trabajadores de la sanidad.
                    Enviamos un cálido saludo a quienes, con compromiso y vocación, contribuyen al bienestar y la salud
                    de nuestra comunidad en Villa del Dique y el Valle de Calamuchita.
                  </p>
                </div>

                <p className="text-lg font-medium text-center text-brand-navy">
                  En este Día de la Sanidad, celebramos, agradecemos y reconocemos a quienes hacen posible que la salud
                  esté siempre presente en nuestras vidas.
                </p>
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
                  url="https://www.villadeldique.com.ar/noticias/dia-de-la-sanidad"
                  title="21 de septiembre: Día de la Sanidad"
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
