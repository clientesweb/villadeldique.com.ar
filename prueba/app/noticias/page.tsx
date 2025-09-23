import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import NewsAdvertisingCarousel from "@/components/news-advertising-carousel"

export const metadata: Metadata = {
  title: "Noticias Villa del Dique | Portal de Información Local Valle de Calamuchita - Villa del Dique Digital",
  description:
    "Las últimas noticias de Villa del Dique, Córdoba, Argentina. Información local actualizada sobre eventos, cultura, turismo, emprendimientos, bomberos voluntarios y desarrollo comunitario en el Valle de Calamuchita. El medio digital más confiable de Villa del Dique.",
  keywords: [
    "noticias Villa del Dique",
    "Villa del Dique noticias",
    "información local Villa del Dique",
    "noticias Córdoba Argentina",
    "Valle de Calamuchita noticias",
    "eventos Villa del Dique",
    "cultura Villa del Dique",
    "bomberos voluntarios Villa del Dique",
    "seguridad Villa del Dique",
    "comunidad Villa del Dique",
    "emprendimientos Villa del Dique",
    "polo cultural Villa del Dique",
    "desarrollo local Villa del Dique",
    "prensa local Villa del Dique",
    "medios Villa del Dique",
    "portal noticias Villa del Dique",
    "actualidad Villa del Dique",
    "información comunitaria",
    "noticias Valle de Calamuchita",
    "medio digital Villa del Dique",
    "periodismo local Córdoba",
    "Villa del Dique Digital noticias",
    "dique Los Molinos noticias",
    "turismo Villa del Dique noticias",
    "anfiteatro Villa del Dique",
    "Casa de la Cultura Villa del Dique",
    "ACA YPF Villa del Dique",
    "deportes Villa del Dique",
    "educación Villa del Dique",
    "salud Villa del Dique",
  ],
  authors: [{ name: "Villa del Dique Digital", url: "https://www.villadeldique.com.ar" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/noticias",
    languages: {
      "es-AR": "/noticias",
      es: "/noticias",
    },
  },
  openGraph: {
    title: "Noticias Villa del Dique - Portal de Información Local Valle de Calamuchita",
    description:
      "Las últimas noticias e información de Villa del Dique, Córdoba, Argentina. Mantente al día con los eventos, cultura, turismo y desarrollo de nuestra comunidad en el Valle de Calamuchita.",
    url: "https://www.villadeldique.com.ar/noticias",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/og/noticias-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique Digital - Noticias locales y actualidad del Valle de Calamuchita",
      },
    ],
    locale: "es_AR",
    type: "website",
    countryName: "Argentina",
    region: "Córdoba",
    placeName: "Villa del Dique",
  },
  twitter: {
    card: "summary_large_image",
    title: "Noticias Villa del Dique - Portal de Información Local",
    description:
      "Las últimas noticias e información de Villa del Dique, Córdoba, Argentina. Tu fuente confiable de información local del Valle de Calamuchita.",
    images: ["/images/og/noticias-og-image.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Local News",
  classification: "Portal de noticias locales",
  other: {
    "geo.region": "AR-X",
    "geo.placename": "Villa del Dique",
    "geo.position": "-32.1833;-64.4833",
    ICBM: "-32.1833, -64.4833",
    "news.keywords": "Villa del Dique, noticias locales, Córdoba, Argentina, Valle de Calamuchita, comunidad",
    "article.section": "Local News",
    "article.tag": "Villa del Dique, noticias, Córdoba, Argentina, Valle de Calamuchita",
    "coverage.area": "Villa del Dique, Valle de Calamuchita, Córdoba, Argentina",
    "target.audience": "Residentes y visitantes de Villa del Dique",
  },
}

const allNews = [
  {
    id: "generacion-gen-genetica-calamuchita",
    title: "Generación GEN: la genética explicada desde Calamuchita",
    excerpt:
      "La bioquímica Evelyn Butassi acerca la genética y la medicina personalizada al público general a través de un podcast disponible en Spotify, vinculado al trabajo del Laboratorio LEAC.",
    image: "/images/portada-noticia-generacion-gen.jpg",
    date: "2025-09-23",
    category: "Ciencia",
    author: "Candela Insaurralde",
  },
  {
    id: "dia-de-la-primavera",
    title: "21 de septiembre: Día de la Primavera",
    excerpt:
      "Un nuevo ciclo florece en Calamuchita. El 21 de septiembre marca la llegada de la primavera, una estación que simboliza el renacer, la alegría y el encuentro con la naturaleza en nuestro Valle de Calamuchita.",
    image: "/images/dia-de-la-primavera.jpg",
    date: "2025-09-21",
    category: "Comunidad",
    author: "Villa del Dique Digital",
  },
  {
    id: "dia-de-la-sanidad",
    title: "21 de septiembre: Día de la Sanidad",
    excerpt:
      "Un reconocimiento a quienes cuidan nuestra salud todos los días. El 21 de septiembre se celebra en Argentina el Día de la Sanidad, en homenaje a los trabajadores de la salud.",
    image: "/images/dia-de-la-sanidad.jpg",
    date: "2025-09-21",
    category: "Salud",
    author: "Villa del Dique Digital",
  },
  {
    id: "aca-ypf-villa-del-dique-invita-alojamientos",
    title: "ACA YPF Villa del Dique invita a los alojamientos a compartir su disponibilidad",
    excerpt:
      "La estación, un punto de referencia para quienes llegan a nuestra localidad, busca fortalecer el vínculo entre prestadores y visitantes, potenciando la oferta turística de Villa del Dique.",
    image: "/images/portada-articulo-iniciativa-aca-ypf-am-celta.webp",
    date: "2025-09-20",
    category: "Turismo",
    author: "Villa del Dique Digital",
  },
  {
    id: "villa-del-dique-perla-calamuchita",
    title: "Villa del Dique: la perla de Calamuchita",
    excerpt:
      "Un rincón serrano donde la naturaleza, la historia y las tradiciones se encuentran. Descubre todo lo que hace especial a Villa del Dique, desde su fundación hasta sus atractivos turísticos.",
    image: "/images/portada-villa-del-dique-perla-de-calamuchita.webp",
    date: "2025-09-18",
    category: "Turismo",
    author: "Camila Insaurralde",
  },
  {
    id: "dia-del-profesor",
    title: "Día del Profesor: Celebrando a quienes inspiran con su enseñanza",
    excerpt:
      "Una fecha para reconocer la vocación, el esfuerzo y la guía de nuestros educadores. Desde Villa del Dique Digital saludamos a todos los docentes en su día.",
    image: "/images/feliz-dia-del-profesor.jpg",
    date: "2025-09-17",
    category: "Comunidad",
    author: "Villa del Dique Digital",
  },
  {
    id: "dia-del-psicopedagogo",
    title: "Día del Psicopedagogo: acompañando el aprendizaje y el desarrollo",
    excerpt:
      "Reconocimiento a los profesionales que integran la educación y la salud. Hoy 17 de septiembre en Argentina se conmemora el Día del Psicopedagogo.",
    image: "/images/dia-de-psicopedadogo.jpeg",
    date: "2025-09-17",
    category: "Salud",
    author: "Villa del Dique Digital",
  },
  {
    id: "dia-derechos-estudiantes-secundarios",
    title: "16 de septiembre: Día de los Derechos de los Estudiantes Secundarios",
    excerpt:
      "Cada 16 de septiembre, Argentina recuerda La Noche de los Lápices y reafirma el compromiso con la defensa de los derechos estudiantiles, la educación y la democracia.",
    image: "/images/portada-dia-derechos-estudiantes.webp",
    date: "2025-09-16",
    category: "Comunidad",
    author: "Camila Insaurralde",
  },
  {
    id: "dia-internacional-democracia",
    title: "15 de septiembre: Día Internacional de la Democracia",
    excerpt:
      "Cada 15 de septiembre el mundo conmemora el Día Internacional de la Democracia. En Villa del Dique reflexionamos sobre la importancia de fortalecer los valores democráticos en nuestras comunidades.",
    image: "/images/portada-dia-de-la-democracia.jpg",
    date: "2025-09-15",
    category: "Comunidad",
    author: "Villa del Dique Digital",
  },
  {
    id: "dia-mundial-linfoma",
    title: "15 de septiembre: Día Mundial de la Concientización sobre el Linfoma",
    excerpt:
      "Una fecha para visibilizar y sensibilizar a la población sobre este tipo de cáncer hematológico. Información sobre síntomas, detección temprana y recursos disponibles.",
    image: "/images/portada-dia-mundial-linfoma.jpg",
    date: "2025-09-15",
    category: "Salud",
    author: "Villa del Dique Digital",
  },
  {
    id: "mega-feria-villa-del-dique",
    title: "Villa del Dique vive su primera Mega Feria en el Centro Cultural Pato Carret",
    excerpt:
      "Este domingo se inaugura la primera edición de la Mega Feria, un evento que reúne a emprendedores, artesanos y propuestas de moda circular en un mismo espacio pensado para toda la familia.",
    image: "/images/portada-mega-feria.jpg",
    date: "2025-09-14",
    category: "Eventos",
    author: "Villa del Dique Digital",
  },
  {
    id: "desafio-cerro-lago",
    title: "Rumbo al 6° Desafío Cerro y Lago: todo listo para vivir la previa en Villa del Dique",
    excerpt:
      "La pasión por el ciclismo de montaña vuelve a encenderse en la región con la llegada de la 6° edición del Desafío Cerro y Lago, una competencia que ya se ha convertido en un clásico esperado por deportistas y amantes del MTB de todo el país.",
    image: "/images/portada-desafio-cerro-lago.jpg",
    date: "2025-09-13",
    category: "Deportes",
    author: "Villa del Dique Digital",
  },
  {
    id: "inauguracion-polo-cultural-asociacion",
    title: "Villa del Dique celebra la inauguración de su nuevo Polo Cultural",
    excerpt:
      "La comunidad de Villa del Dique vivió una noche histórica con la inauguración del Polo Cultural, conformado por la renovada Casa de la Cultura y el Anfiteatro Municipal.",
    image: "/images/portada-inaguacion-polo-asociacion.webp",
    date: "2025-09-12",
    category: "Cultura",
    author: "Asociación de Comercio, Turismo y Afines",
  },
  {
    id: "entrevista-bomberos-voluntarios",
    title: "Bomberos Voluntarios de Villa del Dique: Vocación, Riesgo y Compromiso Comunitario",
    excerpt:
      "Entrevista exclusiva con los Bomberos Voluntarios de Villa del Dique sobre su labor incansable y dedicación a la comunidad.",
    image: "/images/portada-bomberos-voluntarios.webp",
    date: "2025-09-11",
    category: "Entrevistas",
    author: "Facundo Pérez • Contenido patrocinado por Duality Domain",
  },
  {
    id: "campana-prevencion-incendios",
    title: "Campaña de Prevención de Incendios en Villa del Dique",
    excerpt:
      "Un descuido puede terminar en tragedia. Súmate a las acciones de prevención de incendios y cuidemos entre todos nuestro entorno.",
    image: "/images/no-al-fuego.jpg",
    date: "2025-09-10",
    category: "Seguridad",
    author: "Villa del Dique Digital",
  },
  {
    id: "emprender-villa-del-dique",
    title: "Emprender en el Paraíso: Historias que laten en Villa del Dique",
    excerpt:
      "Descubre las historias de emprendedores locales: Rincón Natural, Namaskar Movimiento, Parrilla & Restaurante Iowa y el evento de boxeo que unió a toda la comunidad.",
    image: "/images/emprender-villa-del-dique.webp",
    date: "2025-09-09",
    category: "Emprendedores",
    author: "Facundo Pérez • Contenido patrocinado por Duality Domain",
  },
  {
    id: "septiembre-amarillo-prevencion",
    title: "Septiembre Amarillo: prevenir es acompañar",
    excerpt:
      "Cada 7 de septiembre se conmemora el Día Mundial de la Prevención del Suicidio. Una fecha que nos invita a reflexionar, sensibilizarnos y abrir espacios de escucha y acompañamiento.",
    image: "/images/mes-amarillo-portada.jpg",
    date: "2025-09-07",
    category: "Salud Mental",
    author: "Villa del Dique Digital",
  },
  {
    id: "inauguracion-polo-cultural",
    title: "Inauguración del Polo Cultural de Villa del Dique",
    excerpt:
      "Villa del Dique contará con un nuevo Polo Cultural, un espacio pensado para el encuentro, la creatividad y el desarrollo de nuestra comunidad.",
    image: "/images/inaguracion-vdd.jpg",
    date: "2025-09-06",
    category: "Cultura",
    author: "Villa del Dique Digital",
  },
  {
    id: "bomberos-voluntarios-nuevo-sitio-web",
    title: "Los Bomberos Voluntarios de Villa del Dique presentan su nuevo sitio web",
    excerpt:
      "Un espacio digital para informar, conectar y recibir el apoyo de la comunidad. La institución lanzó oficialmente su plataforma web con información sobre su historia, cuerpo activo y formas de colaborar.",
    image: "/images/bomberos-voluntarios-vdd-4.jpg",
    date: "2025-09-19",
    category: "Comunidad",
    author: "Villa del Dique Digital",
  },
]

interface NewsPageProps {
  searchParams: { page?: string }
}

export default function NoticiasPage({ searchParams }: NewsPageProps) {
  const currentPage = Number.parseInt(searchParams.page || "1")
  const newsPerPage = 3

  const sortedNews = [...allNews].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  const totalPages = Math.ceil(sortedNews.length / newsPerPage)

  const startIndex = (currentPage - 1) * newsPerPage
  const endIndex = startIndex + newsPerPage
  const currentNews = sortedNews.slice(startIndex, endIndex)

  const newsListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Noticias de Villa del Dique",
    description: "Las últimas noticias e información de Villa del Dique, Córdoba, Argentina.",
    url: "https://www.villadeldique.com.ar/noticias",
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: allNews.length,
      itemListElement: currentNews.map((article, index) => ({
        "@type": "NewsArticle",
        position: index + 1,
        headline: article.title,
        description: article.excerpt,
        image: `https://www.villadeldique.com.ar${article.image}`,
        datePublished: article.date,
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
        url: `https://www.villadeldique.com.ar/noticias/${article.id}`,
        articleSection: article.category,
      })),
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Inicio",
          item: "https://www.villadeldique.com.ar",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Noticias",
          item: "https://www.villadeldique.com.ar/noticias",
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsListSchema),
        }}
      />

      <AnnouncementBar />
      <Header />

      <main className="min-h-screen bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <nav className="mb-6 md:mb-8">
            <ol className="flex items-center space-x-2 text-sm md:text-base">
              <li>
                <Link href="/" className="text-brand-blue hover:text-blue-700 transition-colors">
                  Inicio
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-700 font-medium">Noticias</li>
            </ol>
          </nav>

          <div className="mb-8 md:mb-12">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-4 text-balance">
              Noticias de Villa del Dique
            </h1>
            <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl">
              Mantente informado con las últimas noticias e información de nuestra comunidad. Eventos, cultura,
              seguridad y desarrollo local.
            </p>
          </div>

          <div className="grid gap-6 md:gap-8 mb-8 md:mb-12">
            {currentNews.map((article, index) => (
              <div key={article.id}>
                <article className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3 lg:w-2/5">
                      <div className="relative h-48 md:h-full min-h-[200px]">
                        <Image
                          src={article.image || "/placeholder.svg"}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                    <div className="md:w-2/3 lg:w-3/5 p-6 md:p-8">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="inline-block bg-brand-blue text-white text-xs md:text-sm px-3 py-1 rounded-full font-medium">
                          {article.category}
                        </span>
                        <time className="text-sm md:text-base text-gray-500">
                          {new Date(article.date).toLocaleDateString("es-AR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <h2 className="font-serif text-xl md:text-2xl lg:text-3xl font-bold text-brand-navy mb-3 md:mb-4 text-balance">
                        <Link href={`/noticias/${article.id}`} className="hover:text-brand-blue transition-colors">
                          {article.title}
                        </Link>
                      </h2>
                      <p className="font-sans text-gray-600 leading-relaxed mb-4 md:mb-6 text-sm md:text-base">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-gray-500">{article.author}</p>
                        <Link
                          href={`/noticias/${article.id}`}
                          className="inline-flex items-center bg-brand-blue text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base font-medium"
                        >
                          Leer noticia completa
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
                {index === 1 && <NewsAdvertisingCarousel />}
              </div>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              {currentPage > 1 && (
                <Link
                  href={`/noticias?page=${currentPage - 1}`}
                  className="flex items-center px-4 py-2 text-sm font-medium text-brand-blue bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Anterior
                </Link>
              )}

              <div className="flex space-x-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <Link
                    key={page}
                    href={`/noticias?page=${page}`}
                    className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                      page === currentPage
                        ? "bg-brand-blue text-white"
                        : "text-brand-blue bg-white border border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </Link>
                ))}
              </div>

              {currentPage < totalPages && (
                <Link
                  href={`/noticias?page=${currentPage + 1}`}
                  className="flex items-center px-4 py-2 text-sm font-medium text-brand-blue bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Siguiente
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
