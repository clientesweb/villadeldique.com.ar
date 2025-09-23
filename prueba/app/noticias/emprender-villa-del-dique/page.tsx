import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import NewsBreadcrumbs from "@/components/news-breadcrumbs"
import ShareButtons from "@/components/share-buttons"

export const metadata: Metadata = {
  title: "Emprender en el Paraíso: Historias que laten en Villa del Dique | Villa del Dique",
  description:
    "Descubre las historias de emprendedores locales: Rincón Natural, Namaskar Movimiento, Parilla - Restaurante Iowa y el evento de boxeo que unió a toda la comunidad en Villa del Dique.",
  keywords:
    "emprendedores Villa del Dique, Rincón Natural, Namaskar, Iowa restaurante, boxeo Villa del Dique, negocios locales, Valle de Calamuchita",
  authors: [{ name: "Facundo Perez", url: "https://www.faqundoperez.com/" }],
  openGraph: {
    title: "Emprender en el Paraíso: Historias que laten en Villa del Dique",
    description:
      "Descubre las historias de emprendedores locales: Rincón Natural, Namaskar Movimiento, Parrilla & Restaurante Iowa y el evento de boxeo que unió a toda la comunidad.",
    url: "https://www.villadeldique.com.ar/noticias/emprender-villa-del-dique",
    siteName: "Villa del Dique",
    images: [
      {
        url: "https://www.villadeldique.com.ar/images/emprender-villa-del-dique.webp",
        width: 1200,
        height: 630,
        alt: "Emprender en el Paraíso - Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emprender en el Paraíso: Historias que laten en Villa del Dique",
    description: "Descubre las historias de emprendedores locales en Villa del Dique.",
    images: ["https://www.villadeldique.com.ar/images/emprender-villa-del-dique.webp"],
  },
  alternates: {
    canonical: "https://www.villadeldique.com.ar/noticias/emprender-villa-del-dique",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Emprender en el Paraíso: Historias que laten en Villa del Dique",
  description:
    "Descubre las historias de emprendedores locales: Rincón Natural, Namaskar Movimiento, Iowa.ar y el evento de boxeo que unió a toda la comunidad.",
  image: "https://www.villadeldique.com.ar/images/emprender-villa-del-dique.webp",
  author: {
    "@type": "Person",
    name: "Facundo Perez",
    url: "https://www.faqundoperez.com/",
  },
  publisher: {
    "@type": "Organization",
    name: "Villa del Dique",
    logo: {
      "@type": "ImageObject",
      url: "https://www.villadeldique.com.ar/images/logo.png",
    },
  },
  datePublished: "2025-09-09",
  dateModified: "2025-09-09",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://www.villadeldique.com.ar/noticias/emprender-villa-del-dique",
  },
}

export default function EmprenderVillaDelDiquePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AnnouncementBar />
      <Header />

      <main className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-12">
          <div className="mb-8">
            <Link
              href="/noticias"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-sans text-sm mb-4 transition-colors duration-200"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver a Noticias
            </Link>

            <div className="mb-6">
              <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-sans font-medium mb-4">
                EMPRENDEDORES LOCALES
              </span>
              <time className="block text-gray-900 font-sans text-sm mb-2">9 de septiembre de 2025</time>
              <p className="text-gray-800 font-sans text-sm">
                Entrevista realizada por{" "}
                <a
                  href="https://www.faqundoperez.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Facundo Perez
                </a>{" "}
                • Contenido patrocinado por{" "}
                <a
                  href="https://instagram.com/dualitydomain"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  Duality Domain
                </a>
              </p>
            </div>
          </div>

          <header className="mb-8">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 text-balance">
              Emprender en el Paraíso: Historias que laten en Villa del Dique
            </h1>

            <div className="relative w-full h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden mb-6">
              <Image
                src="/images/emprender-villa-del-dique.webp"
                alt="Emprender en el Paraíso - Villa del Dique con emprendedores locales"
                fill
                className="object-cover"
                priority
              />
            </div>

            <p className="font-sans text-lg md:text-xl text-gray-800 leading-relaxed text-pretty">
              En el corazón del Valle de Calamuchita, Villa del Dique no solo conquista con su lago y paisajes serranos,
              también se nutre de la fuerza de sus vecinos y emprendedores que día a día transforman la vida del pueblo.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <div className="mb-8">
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/02sNYbNvr8c"
                  title="Emprender en el Paraíso - Villa del Dique"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                Rincón Natural y Namaskar: el bienestar como camino
              </h2>

              <div className="mb-6">
                <div className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden">
                  <Image
                    src="/images/namaskar.webp"
                    alt="Namaskar Movimiento - Yoga en Villa del Dique"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <p className="font-sans text-gray-800 leading-relaxed">
                  La primera escala nos lleva a{" "}
                  <a
                    href="https://www.dieteticarinconnatural.com.ar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Rincón Natural
                  </a>
                  , la dietética de Ruth Prado, un espacio donde la alimentación saludable se entrelaza con la filosofía
                  de vida.
                </p>
                <p className="font-sans text-gray-800 leading-relaxed">
                  Muy cerca,{" "}
                  <a
                    href="https://instagram.com/namaskar_movimiento_"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Namaskar Movimiento
                  </a>{" "}
                  completa esta mirada integral de la salud con clases de yoga, pilates y esferodinamia.
                </p>
              </div>

              <p className="font-sans text-gray-800 leading-relaxed mb-4">
                Desde cereales, legumbres y productos artesanales hasta opciones sin TACC y cosmética natural, el local
                es un punto de encuentro para quienes buscan cuidar su cuerpo de manera integral.
              </p>

              <blockquote className="border-l-4 border-blue-600 pl-4 italic text-gray-800 mb-4">
                "Queríamos que en Villa del Dique existiera un lugar donde la gente pueda acceder a productos sanos,
                accesibles y de calidad" - Ruth Prado
              </blockquote>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                Iowa.ar: tradición y sabor
              </h2>

              <div className="mb-6">
                <div className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden">
                  <Image
                    src="/images/iowa.webp"
                    alt="Restaurante Iowa - Villa del Dique"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              <p className="font-sans text-gray-800 leading-relaxed mb-4">
                La segunda parada nos traslada al{" "}
                <a
                  href="https://www.iowa.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  restaurante IOWA
                </a>
                , un clásico de Villa del Dique que forma parte de la memoria colectiva del pueblo. Su propuesta combina
                la calidez de la cocina de primer nivel con la hospitalidad de siempre. Cuarta generación y una de las
                familias más antiguas de Villa del Dique
              </p>

              <p className="font-sans text-gray-800 leading-relaxed mb-4">
                Nicolás Barra resalta que "la comida no es solo alimento, es también un encuentro", y esa esencia se
                respira en cada mesa: historias familiares, charlas con amigos y el paso de generaciones que vuelven al
                lugar una y otra vez.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                Boxeo bajo las estrellas: la fuerza de la comunidad
              </h2>

              <div className="mb-6">
                <div className="relative aspect-square w-full max-w-md mx-auto rounded-lg overflow-hidden">
                  <Image
                    src="/images/gran-velada-boxeo.webp"
                    alt="Gran Velada Boxística - Villa del Dique"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>

              <p className="font-sans text-gray-800 leading-relaxed mb-4">
                El recorrido cierra con el evento de boxeo organizado por la Municipalidad de Villa del Dique, que logró
                reunir a vecinos y visitantes en una jornada cargada de energía. Más allá del deporte, fue una
                celebración comunitaria.
              </p>

              <p className="font-sans text-gray-800 leading-relaxed mb-4">
                Estos eventos no solo promueven la actividad física, también fortalecen la identidad local y generan
                oportunidades para los comercios, bares y alojamientos de la zona.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4">
                Un pueblo que late con sus emprendedores
              </h2>

              <p className="font-sans text-gray-800 leading-relaxed mb-4">
                La historia de Ruth Prado, la disciplina de Namaskar, la tradición de Nicolás Barra con IOWA y la
                emoción del boxeo muestran que Villa del Dique es mucho más que un destino turístico. Es un lugar donde
                emprender es construir comunidad, donde cada iniciativa suma para hacer del pueblo un rincón único del
                Valle de Calamuchita.
              </p>

              <p className="font-sans text-gray-800 leading-relaxed">
                Como concluye el video: se trata de un paraíso que no solo se contempla, sino que también se vive, se
                cuida y se sueña en comunidad.
              </p>
            </section>

            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h3 className="font-serif text-xl font-bold text-brand-navy mb-4">Enlaces relacionados</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-sans font-semibold text-gray-800 mb-2">Emprendimientos mencionados:</h4>
                  <ul className="space-y-1">
                    <li>
                      <a
                        href="https://www.dieteticarinconnatural.com.ar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Rincón Natural - Dietética
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/rn.almacen"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        @rn.almacen
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/namaskar_movimiento_"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        @namaskar_movimiento_
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.iowa.ar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Iowa Restaurante
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/restaurant_iowa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        @restaurant_iowa
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-sans font-semibold text-gray-800 mb-2">Instituciones:</h4>
                  <ul className="space-y-1">
                    <li>
                      <a
                        href="https://instagram.com/deportes.vdd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        @deportes.vdd
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://instagram.com/munivilladeldique"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Municipalidad de Villa del Dique
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <ShareButtons
                title="Emprender en el Paraíso: Historias que laten en Villa del Dique"
                url={
                  typeof window !== "undefined"
                    ? window.location.href
                    : "https://www.villadeldique.com.ar/noticias/emprender-villa-del-dique"
                }
                description="Descubre las historias de emprendedores locales: Rincón Natural, Namaskar Movimiento, Iowa.ar y el evento de boxeo que unió a toda la comunidad en Villa del Dique."
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
                      Una propuesta única que combina gastronomía, artesanías, música en vivo y entretenimiento
                      familiar.
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
                      src="/images/portada-inaguacion-polo-asociacion.webp"
                      alt="Inauguración Polo Cultural"
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                      Villa del Dique celebra la inauguración de su nuevo Polo Cultural
                    </h3>
                    <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                      La comunidad vivió una noche histórica con la inauguración del Polo Cultural.
                    </p>
                    <Link
                      href="/noticias/inauguracion-polo-cultural-asociacion"
                      className="text-brand-blue hover:text-blue-700 font-medium text-sm transition-colors"
                    >
                      Leer más →
                    </Link>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </article>

        <NewsBreadcrumbs
          currentArticleId="emprender-villa-del-dique"
          currentTitle="Emprender en el Paraíso: Historias que laten en Villa del Dique"
        />
      </main>

      <Footer />
    </>
  )
}
