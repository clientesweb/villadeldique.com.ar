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
  id: "dia-del-psicopedagogo",
  title: "17 de septiembre: Día del Psicopedagogo",
  excerpt:
    "Acompañando el aprendizaje y el desarrollo integral de las personas. Reconocimiento a los profesionales que integran la educación y la salud.",
  image: "/images/dia-de-psicopedadogo.jpeg",
  date: "2025-09-17",
  category: "Salud",
  author: "Villa del Dique Digital",
}

const relatedNews = [
  {
    id: "dia-del-profesor",
    title: "17 de septiembre: Día del Profesor",
    image: "/images/dia-de-psicopedadogo.jpeg",
    date: "2025-09-17",
    category: "Comunidad",
  },
  {
    id: "dia-derechos-estudiantes-secundarios",
    title: "16 de septiembre: Día de los Derechos de los Estudiantes Secundarios",
    image: "/images/portada-dia-derechos-estudiantes.webp",
    date: "2025-09-16",
    category: "Comunidad",
  },
  {
    id: "dia-internacional-democracia",
    title: "15 de septiembre: Día Internacional de la Democracia",
    image: "/images/portada-dia-de-la-democracia.jpg",
    date: "2025-09-15",
    category: "Comunidad",
  },
]

export const metadata: Metadata = generateNewsMetadata(article)

export default function DiaDelPsicopedagogoPage() {
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
    keywords: "Día del Psicopedagogo, Jean Piaget, psicopedagogía, educación, salud, Villa del Dique, 17 septiembre",
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
                <span className="inline-block bg-brand-blue text-white text-sm px-3 py-1 rounded-full font-medium">
                  {article.category}
                </span>
                <time className="text-gray-500">17 de septiembre de 2025</time>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 text-balance">
                {article.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                  Reconocimiento a los profesionales que integran la educación y la salud. Acompañando el aprendizaje y
                  el desarrollo integral de las personas.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Hoy 17 de septiembre en Argentina se conmemora el <strong>Día del Psicopedagogo</strong>, en homenaje
                  a Jean Piaget, referente de la psicología evolutiva y del aprendizaje. Estos profesionales cumplen un
                  rol fundamental en la detección de dificultades, el acompañamiento a estudiantes y familias, y la
                  promoción de trayectorias educativas plenas.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-32 h-32 relative flex-shrink-0">
                      <Image
                        src="/images/jean-piaget.jpg"
                        alt="Jean Piaget"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">Jean Piaget (1896-1980)</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Biólogo, psicólogo y epistemólogo suizo, reconocido mundialmente por sus aportes al estudio de
                        la infancia y su teoría constructivista del desarrollo de la inteligencia. Sus ideas
                        revolucionaron la comprensión del aprendizaje infantil e influyeron profundamente en la
                        pedagogía y psicopedagogía modernas.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                  El legado de Piaget en la psicopedagogía
                </h2>

                <p className="mb-6">
                  Jean Piaget desarrolló una teoría revolucionaria sobre cómo los niños construyen su conocimiento del
                  mundo. Su enfoque constructivista demostró que los niños no son receptores pasivos de información,
                  sino que construyen activamente su comprensión a través de la interacción con su entorno.
                </p>

                <p className="mb-6">
                  Sus estudios sobre las etapas del desarrollo cognitivo (sensoriomotora, preoperacional, operaciones
                  concretas y operaciones formales) proporcionaron las bases científicas para entender cómo aprenden los
                  niños y cómo adaptar la enseñanza a sus necesidades específicas.
                </p>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                  La importancia de la psicopedagogía
                </h2>

                <p className="mb-6">
                  Los psicopedagogos son profesionales que integran conocimientos de la psicología y la pedagogía para
                  abordar las dificultades de aprendizaje y promover el desarrollo integral de las personas. Su trabajo
                  abarca desde la detección temprana de dificultades hasta el diseño de estrategias de intervención
                  personalizadas.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-4">Funciones del psicopedagogo:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      Evaluación y diagnóstico de dificultades de aprendizaje
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      Diseño de estrategias de intervención educativa
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      Orientación a docentes y familias
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      Promoción de la inclusión educativa
                    </li>
                    <li className="flex items-start">
                      <span className="text-brand-blue mr-2">•</span>
                      Acompañamiento en procesos de aprendizaje
                    </li>
                  </ul>
                </div>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                  El Día del Psicopedagogo en Argentina
                </h2>

                <p className="mb-6">
                  La fecha del 17 de septiembre fue establecida en Argentina en honor a Jean Piaget, aunque su
                  fallecimiento ocurrió el 16 de septiembre de 1980. Esta conmemoración fue instaurada en un congreso de
                  profesionales en 1982 y establecida en el acta de fundación de la Federación Argentina de
                  Psicopedagogos.
                </p>

                <p className="mb-6">
                  Es una jornada para reconocer la labor de estos profesionales que trabajan día a día para garantizar
                  que todos los estudiantes puedan acceder a una educación de calidad, independientemente de sus
                  dificultades o características particulares.
                </p>

                <div className="bg-brand-blue text-white p-6 rounded-lg mb-8">
                  <h3 className="font-serif text-xl font-bold mb-4">Desde Villa del Dique Digital</h3>
                  <p className="leading-relaxed">
                    Valoramos profundamente la tarea diaria de los psicopedagogos y enviamos un cálido saludo a todos
                    estos profesionales que, con compromiso y vocación, contribuyen al bienestar y al desarrollo de
                    nuestra comunidad. Su trabajo es fundamental para construir una sociedad más inclusiva y equitativa.
                  </p>
                </div>

                <p className="text-lg font-medium text-center text-brand-navy">
                  ¡Feliz Día del Psicopedagogo a todos los profesionales que acompañan el aprendizaje y el desarrollo
                  integral de las personas!
                </p>
              </div>
            </div>

            <NewsAdvertisingCarousel />

            <div className="p-6 md:p-8">
              <div className="mt-8">
                <ShareButtons
                  url="https://www.villadeldique.com.ar/noticias/dia-del-psicopedagogo"
                  title="17 de septiembre: Día del Psicopedagogo"
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
