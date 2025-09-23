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
  id: "generacion-gen-genetica-calamuchita",
  title: "Generación GEN: la genética explicada desde Calamuchita",
  excerpt:
    "La bioquímica Evelyn Butassi acerca la genética y la medicina personalizada al público general a través de un podcast disponible en Spotify, vinculado al trabajo del Laboratorio LEAC.",
  image: "/images/portada-noticia-generacion-gen.jpg",
  date: "2025-09-23",
  category: "Salud",
  author: "Candela Insaurralde",
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
    id: "dia-mundial-linfoma",
    title: "15 de septiembre: Día Mundial del Linfoma",
    image: "/images/dia-mundial-linfoma.jpg",
    date: "2025-09-15",
    category: "Salud",
  },
  {
    id: "dia-del-psicopedagogo",
    title: "17 de septiembre: Día del Psicopedagogo",
    image: "/images/dia-del-profesor-aula.jpg",
    date: "2025-09-17",
    category: "Salud",
  },
]

export const metadata: Metadata = generateNewsMetadata(article)

export default function GeneracionGenPage() {
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
      "Generación GEN, genética, podcast, Evelyn Butassi, Laboratorio LEAC, medicina personalizada, Calamuchita, Villa del Dique, biotecnología, divulgación científica",
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
                <time className="text-gray-500">23 de septiembre de 2025</time>
              </div>

              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 text-balance">
                {article.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-6 font-medium">
                  La bioquímica Evelyn Butassi acerca la genética y la medicina personalizada al público general a
                  través de un podcast disponible en Spotify, vinculado al trabajo del Laboratorio LEAC.
                </p>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                  Un podcast que transforma la ciencia en lenguaje cotidiano
                </h2>

                <p className="text-lg leading-relaxed mb-6">
                  Generación GEN es un espacio de divulgación científica pensado para acercar la genética a la
                  comunidad. Conducido por la bioquímica, especialista en virología y genetista Evelyn Butassi, el
                  podcast explica de manera clara y accesible cómo la información contenida en nuestro ADN impacta en la
                  salud, la prevención y la vida diaria.
                </p>

                <p className="mb-6">
                  Cada episodio propone un recorrido por temas como epigenética, predisposición genética, medicina
                  personalizada y biotecnología, siempre con ejemplos prácticos y un estilo cercano que invita a
                  reflexionar.
                </p>

                <div className="relative h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src="/images/generacion-gen-1.jpg"
                    alt="Ilustración científica sobre genética y medicina personalizada"
                    fill
                    className="object-cover"
                  />
                </div>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">Quiénes lo hacen posible</h2>

                <p className="mb-6">
                  El programa está conducido por Evelyn Butassi y cuenta con el acompañamiento de su hermana Julieta
                  Butassi, quien no tiene formación en genética pero aporta una mirada más humana, con preguntas y
                  reflexiones que representan a la audiencia general.
                </p>

                <p className="mb-6">
                  Este formato dinámico logra un equilibrio entre el rigor científico y la experiencia cotidiana,
                  generando un contenido útil tanto para especialistas como para oyentes interesados en cuidar su salud.
                </p>

                <div className="bg-gray-100 p-6 rounded-lg my-8">
                  <div className="flex flex-col md:flex-row gap-6 items-center">
                    <div className="w-32 h-32 relative flex-shrink-0">
                      <Image
                        src="/images/generacion-gen-2.jpg"
                        alt="Evelyn Butassi, especialista en virología y genetista"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold text-brand-navy mb-3">Bioq. Esp. Evelyn Butassi</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Bioquímica especialista en virología y genetista, directora técnica del Laboratorio LEAC. Con
                        amplia experiencia en análisis clínicos y medicina personalizada, se dedica a la divulgación
                        científica para acercar la genética al público general a través de contenido educativo y
                        accesible.
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">Temáticas y episodios destacados</h2>

                <p className="mb-4">Los episodios de Generación GEN abordan cuestiones clave como:</p>

                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>La predisposición genética a enfermedades crónicas.</li>
                  <li>El valor de los tests genéticos en prevención y diagnóstico.</li>
                  <li>El papel de la epigenética y los hábitos de vida.</li>
                  <li>Nuevas herramientas de la biotecnología, como CRISPR y la edición génica.</li>
                </ul>

                <p className="mb-6">
                  Con un lenguaje claro y ejemplos cotidianos, cada entrega busca derribar mitos y fomentar una
                  comprensión más profunda sobre la importancia de la genética.
                </p>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                  Una propuesta vinculada al Laboratorio LEAC
                </h2>

                <p className="mb-6">
                  El podcast forma parte de la estrategia de divulgación del Laboratorio LEAC, institución que trabaja
                  en análisis clínicos y apuesta a brindar recursos educativos en salud y genética. Desde su web oficial
                  se puede acceder a la sección Podcast, donde Generación GEN se integra como herramienta de prevención
                  y acompañamiento para la comunidad.
                </p>

                <div className="bg-blue-50 p-6 rounded-lg mb-8">
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-4">Datos de contacto LEAC</h3>
                  <div className="space-y-2">
                    <p>
                      <strong>Sedes:</strong> Embalse, Villa del Dique y Santa Rosa de Calamuchita
                    </p>
                    <p>
                      <strong>Teléfonos:</strong> 3571 36-0087 / 3571 578763
                    </p>
                    <p>
                      <strong>Web:</strong>{" "}
                      <a href="https://www.laboratoriosleac.com.ar" className="text-blue-600 hover:underline">
                        www.laboratoriosleac.com.ar
                      </a>
                    </p>
                    <p>
                      <strong>Instagram:</strong>{" "}
                      <a href="https://instagram.com/laboratorioleac" className="text-blue-600 hover:underline">
                        @laboratorioleac
                      </a>
                    </p>
                  </div>
                </div>

                <div className="bg-gray-100 p-6 rounded-lg mb-8">
                  <h3 className="font-serif text-xl font-bold text-brand-navy mb-4">Autorizaciones CoBiCo</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p>
                        <strong>Villa del Dique</strong> – Dir. Técnica: Bioq. Rosana Heras (MP 6668) – Resolución A
                        20203/2023
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Santa Rosa de Calamuchita</strong> – Dir. Técnica: Bioq. Esp. Evelyn Butassi (MP 6000 /
                        ME 715) – Resolución A 22185/2025
                      </p>
                    </div>
                    <div>
                      <p>
                        <strong>Embalse</strong> – Dir. Técnica: Bioq. Esp. Evelyn Butassi (MP 6000 / ME 715) –
                        Resolución A 18856/2022
                      </p>
                    </div>
                  </div>
                </div>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">Dónde escucharlo y cómo seguirlo</h2>

                <div className="bg-brand-blue text-white p-6 rounded-lg mb-8">
                  <h3 className="font-serif text-xl font-bold mb-3">Enlaces del podcast</h3>
                  <div className="space-y-2">
                    <p>
                      <strong>Spotify:</strong>{" "}
                      <a
                        href="https://open.spotify.com/show/492R7IzThqsGNlJKcL2cBy?si=szgZN33VTDKkciKfPbs6pg"
                        className="text-blue-200 hover:text-white underline"
                      >
                        Generación GEN
                      </a>
                    </p>
                    <p>
                      <strong>Instagram del podcast:</strong>{" "}
                      <a
                        href="https://instagram.com/generaciongen"
                        className="text-blue-200 hover:text-white underline"
                      >
                        @generaciongen
                      </a>
                    </p>
                    <p>
                      <strong>Web de Laboratorio LEAC:</strong>{" "}
                      <a
                        href="https://www.laboratoriosleac.com.ar"
                        className="text-blue-200 hover:text-white underline"
                      >
                        www.laboratoriosleac.com.ar
                      </a>
                    </p>
                  </div>
                </div>

                <h2 className="font-serif text-2xl font-bold text-brand-navy mb-4">
                  Un aporte local con mirada global
                </h2>

                <p className="mb-6">
                  Desde Calamuchita hacia el mundo, Generación GEN demuestra cómo la ciencia puede compartirse de manera
                  sencilla, cercana y con impacto directo en la vida de las personas. Escuchar, comprender y reflexionar
                  son los primeros pasos para tomar decisiones más conscientes en torno a la salud.
                </p>

                <p className="text-lg font-medium text-center text-brand-navy">
                  ¡Un podcast que acerca la genética a todos desde el corazón de Calamuchita!
                </p>
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
                  url="https://www.villadeldique.com.ar/noticias/generacion-gen-genetica-calamuchita"
                  title="Generación GEN: la genética explicada desde Calamuchita"
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
