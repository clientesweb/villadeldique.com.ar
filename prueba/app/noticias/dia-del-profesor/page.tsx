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
  id: "dia-del-profesor",
  title: "17 de septiembre: Día del Profesor",
  excerpt:
    "Celebrando a quienes inspiran con su enseñanza. Una fecha para reconocer la vocación, el esfuerzo y la guía de nuestros educadores.",
  image: "/images/feliz-dia-del-profesor.jpg",
  date: "2025-09-17",
  category: "Comunidad",
  author: "Villa del Dique Digital",
}

const relatedNews = [
  {
    id: "dia-del-psicopedagogo",
    title: "17 de septiembre: Día del Psicopedagogo",
    image: "/images/dia-del-profesor-aula.jpg",
    date: "2025-09-17",
    category: "Salud",
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

export default function DiaDelProfesorPage() {
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
    keywords: "Día del Profesor, José Manuel Estrada, educación, docentes, Villa del Dique, 17 septiembre",
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
                  Una fecha para reconocer la vocación, el esfuerzo y la guía de nuestros educadores. Desde Villa del
                  Dique Digital saludamos a todos los docentes en su día.
                </p>

                <p className="text-lg leading-relaxed mb-6">
                  Cada 17 de septiembre se celebra en Argentina el <strong>Día del Profesor</strong>, en honor a José
                  Manuel Estrada, pensador y educador destacado de nuestra historia. Es una jornada para agradecer a
                  quienes, con compromiso y dedicación, forman a las nuevas generaciones y dejan huellas que trascienden
                  el aula.
                </p>

                <div className="bg-gray-100 p-6 rounded-lg my-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-32 h-32 relative flex-shrink-0">
                      <Image
                        src="/images/jose-manuel-estrada.jpg"
                        alt="José Manuel Estrada"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">
                        José Manuel Estrada (1842-1894)
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        Educador, escritor y político argentino, nacido en Buenos Aires. Comenzó su carrera docente en
                        1866 en la Escuela Normal y fue rector del Colegio Nacional de Buenos Aires. Promovió reformas
                        para la profesionalización docente y defendió la libertad de enseñanza, enfocándose en el
                        desarrollo moral e intelectual de los individuos.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">Un legado educativo que perdura</h2>

                <p className="mb-6">
                  José Manuel Estrada no solo fue un destacado educador, sino también un visionario que entendía la
                  educación como un derecho fundamental. Durante su gestión como jefe del Departamento General de
                  Escuelas en 1869, impulsó importantes reformas orientadas a mejorar la calidad educativa y la
                  profesionalización de los docentes.
                </p>

                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/profesor-enseñando.jpg"
                    alt="Profesor enseñando en el aula"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="mb-6">
                  Su filosofía educativa se basaba en la participación conjunta de las familias y el Estado,
                  favoreciendo la libertad de enseñanza por sobre un sistema monopolizado por el Estado. Creía
                  firmemente en que la educación debía ser accesible para todos y enfocarse en el desarrollo integral de
                  las personas.
                </p>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                  La importancia de los docentes en nuestra comunidad
                </h2>

                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/dia-del-profesor-aula.jpg"
                    alt="Docente trabajando con estudiantes"
                    fill
                    className="object-cover"
                  />
                </div>

                <p className="mb-6">
                  En Villa del Dique, como en toda Argentina, los docentes cumplen un rol fundamental en el desarrollo
                  de nuestra comunidad. Son quienes día a día trabajan con vocación y compromiso para formar a las
                  nuevas generaciones, transmitiendo no solo conocimientos, sino también valores y herramientas para la
                  vida.
                </p>

                <p className="mb-6">
                  Los profesores de nuestra localidad enfrentan desafíos únicos, adaptándose a las necesidades de una
                  comunidad en crecimiento y trabajando para brindar una educación de calidad que prepare a nuestros
                  jóvenes para el futuro.
                </p>

                <div className="bg-brand-blue text-white p-6 rounded-lg mb-8">
                  <h3 className="font-serif text-xl font-bold mb-3">Desde Villa del Dique Digital</h3>
                  <p className="leading-relaxed">
                    Reconocemos la tarea invaluable de todos los docentes y saludamos especialmente a los profesores de
                    nuestra comunidad. Su dedicación diaria contribuye al crecimiento y desarrollo de Villa del Dique,
                    formando ciudadanos comprometidos con el futuro de nuestra localidad.
                  </p>
                </div>

                <p className="text-lg font-medium text-center text-brand-navy">
                  ¡Feliz Día del Profesor a todos los educadores que inspiran y transforman vidas con su enseñanza!
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
                  url="https://www.villadeldique.com.ar/noticias/dia-del-profesor"
                  title="17 de septiembre: Día del Profesor"
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
