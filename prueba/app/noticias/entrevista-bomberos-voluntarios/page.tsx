import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import NewsBreadcrumbs from "@/components/news-breadcrumbs"
import ShareButtons from "@/components/share-buttons"
import NewsAdvertisingCarousel from "@/components/news-advertising-carousel"

export const metadata: Metadata = {
  title: "Bomberos Voluntarios de Villa del Dique: Vocación, Riesgo y Compromiso Comunitario | Villa del Dique Digital",
  description:
    "Entrevista exclusiva con los Bomberos Voluntarios de Villa del Dique. Conoce su labor, formación, riesgos y cómo colaborar con esta institución vital para la comunidad.",
  keywords: ["bomberos voluntarios", "Villa del Dique", "entrevista", "prevención incendios", "emergencias", "Córdoba"],
  authors: [{ name: "Facundo Pérez" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  openGraph: {
    title: "Bomberos Voluntarios de Villa del Dique: Vocación, Riesgo y Compromiso Comunitario",
    description:
      "Entrevista exclusiva con los Bomberos Voluntarios de Villa del Dique sobre su labor incansable y dedicación a la comunidad.",
    url: "https://www.villadeldique.com.ar/noticias/entrevista-bomberos-voluntarios",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "https://www.villadeldique.com.ar/images/portada-bomberos-voluntarios.webp",
        width: 1200,
        height: 630,
        alt: "Bomberos Voluntarios de Villa del Dique",
      },
    ],
    locale: "es_AR",
    type: "article",
    publishedTime: "2025-09-10T00:00:00.000Z",
    authors: ["Facundo Pérez"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bomberos Voluntarios de Villa del Dique: Vocación, Riesgo y Compromiso Comunitario",
    description: "Entrevista exclusiva con los Bomberos Voluntarios de Villa del Dique sobre su labor incansable.",
    images: ["https://www.villadeldique.com.ar/images/portada-bomberos-voluntarios.webp"],
  },
  alternates: {
    canonical: "https://www.villadeldique.com.ar/noticias/entrevista-bomberos-voluntarios",
  },
}

export default function EntrevistaBomberosPage() {
  return (
    <div className="min-h-screen bg-white">
      <AnnouncementBar />
      <Header />

      <div className="bg-brand-blue text-white py-8 md:py-12">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <Link
            href="/noticias"
            className="inline-flex items-center text-white/80 hover:text-white mb-4 md:mb-6 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            ← Volver a Noticias
          </Link>

          <div className="flex flex-wrap items-center gap-4 mb-4">
            <span className="inline-block bg-white/20 text-white text-sm px-3 py-1 rounded-full font-medium">
              Entrevistas
            </span>
            <time className="text-white/90" dateTime="2025-09-10">
              10 de septiembre de 2025
            </time>
          </div>

          <h1 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-balance">
            Bomberos Voluntarios de Villa del Dique: Vocación, Riesgo y Compromiso Comunitario
          </h1>
          <div className="mt-4 md:mt-6 text-white/90 space-y-1">
            <p className="text-sm md:text-base">
              Entrevista realizada por{" "}
              <a
                href="https://www.faqundoperez.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                Facundo Pérez
              </a>
            </p>
            <p className="text-sm md:text-base">
              Contenido patrocinado por{" "}
              <a
                href="https://www.dualitydomain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-white"
              >
                @dualitydomain
              </a>
            </p>
          </div>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8 md:py-12">
        <div className="relative h-64 md:h-80 lg:h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src="/images/portada-bomberos-voluntarios.webp"
            alt="Bomberos Voluntarios de Villa del Dique"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Content */}
        <article className="prose prose-sm md:prose-lg max-w-none">
          <p className="font-sans text-lg text-gray-700 leading-relaxed mb-6">
            En una entrevista exclusiva, los Bomberos Voluntarios de Villa del Dique (Córdoba) nos abren las puertas de
            su cuartel para compartir detalles sobre su labor incansable y su dedicación a la comunidad.
          </p>

          <h2 className="font-serif text-2xl font-bold text-brand-navy mt-8 mb-4">
            ¿Qué hacer y qué NO hacer en caso de incendio?
          </h2>
          <p className="font-sans text-gray-700 leading-relaxed mb-6">
            Los bomberos destacan la importancia de mantener la calma y llamar al 100 ante cualquier emergencia. Además,
            enfatizan que no se debe intentar apagar un incendio con agua si se trata de fuego eléctrico o de grasa, ya
            que esto puede empeorar la situación.
          </p>

          <h2 className="font-serif text-2xl font-bold text-brand-navy mt-8 mb-4">
            Errores comunes que provocan incendios
          </h2>
          <p className="font-sans text-gray-700 leading-relaxed mb-6">
            Entre las principales causas de incendios, mencionan el mal uso de artefactos eléctricos, la quema de basura
            en zonas no habilitadas y la acumulación de materiales inflamables cerca de fuentes de calor.
          </p>

          <h2 className="font-serif text-2xl font-bold text-brand-navy mt-8 mb-4">
            Formación y estudio necesarios para ser bombero
          </h2>
          <p className="font-sans text-gray-700 leading-relaxed mb-6">
            Convertirse en bombero voluntario requiere de una formación rigurosa que incluye cursos teóricos y
            prácticos. Los aspirantes deben pasar por un proceso de selección y cumplir con requisitos físicos y
            psicológicos para asegurar su capacidad de respuesta ante emergencias.
          </p>

          <h2 className="font-serif text-2xl font-bold text-brand-navy mt-8 mb-4">
            Riesgos extremos a los que se enfrentan en cada salida
          </h2>
          <p className="font-sans text-gray-700 leading-relaxed mb-6">
            Cada intervención representa un desafío. Los bomberos enfrentan riesgos como la exposición a altas
            temperaturas, inhalación de humo tóxico y la posibilidad de colapsos estructurales durante incendios en
            edificios.
          </p>

          <h2 className="font-serif text-2xl font-bold text-brand-navy mt-8 mb-4">Historias más impactantes</h2>
          <p className="font-sans text-gray-700 leading-relaxed mb-6">
            A lo largo de los años, han vivido situaciones que han puesto a prueba su valentía y compromiso. Desde
            rescates en incendios forestales hasta intervenciones en accidentes vehiculares, cada experiencia refuerza
            su vocación de servicio.
          </p>

          <h2 className="font-serif text-2xl font-bold text-brand-navy mt-8 mb-4">
            Una mirada de cerca a sus vehículos y herramientas de trabajo
          </h2>
          <p className="font-sans text-gray-700 leading-relaxed mb-8">
            El cuartel cuenta con una flota de vehículos especializados, como autobombas y unidades de rescate,
            equipadas con tecnología de última generación. Las herramientas, como mangueras, equipos de protección
            personal y sistemas de comunicación, son esenciales para garantizar la seguridad y eficacia en cada misión.
          </p>

          <div className="my-8 md:my-12">
            <h2 className="font-serif text-xl md:text-2xl font-bold text-brand-navy mb-4 md:mb-6">
              Entrevista completa en video
            </h2>
            <div className="relative w-full h-0 pb-[56.25%] rounded-lg overflow-hidden bg-gray-100 shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/x8COxXL9Dx0"
                title="Entrevista Bomberos Voluntarios Villa del Dique"
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <NewsAdvertisingCarousel />

          <div className="bg-gray-50 p-4 md:p-6 rounded-lg mt-8">
            <h3 className="font-serif text-lg md:text-xl font-bold text-brand-navy mb-4">Cómo colaborar</h3>
            <p className="font-sans text-gray-700 leading-relaxed mb-4 text-sm md:text-base">
              Para conocer más sobre su labor y cómo colaborar, visita su página web:
              <a
                href="https://bomberosvoluntariosvilladeldique.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:underline ml-1 break-all"
              >
                bomberosvoluntariosvilladeldique.com.ar
              </a>
            </p>
            <p className="font-sans text-gray-700 leading-relaxed text-sm md:text-base">
              También puedes colaborar a través de su alias de Mercado Pago: <strong>bomberos.villa.dique</strong>
            </p>
          </div>

          <div className="mt-8">
            <ShareButtons
              title="Bomberos Voluntarios de Villa del Dique: Vocación, Riesgo y Compromiso Comunitario"
              url={
                typeof window !== "undefined"
                  ? window.location.href
                  : "https://www.villadeldique.com.ar/noticias/entrevista-bomberos-voluntarios"
              }
              description="Entrevista exclusiva con los Bomberos Voluntarios de Villa del Dique sobre su labor incansable y dedicación a la comunidad."
            />
          </div>

          <section className="mt-12 pt-8 border-t border-gray-200">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-gray-900 mb-6">Noticias relacionadas</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/no-desafiemos-al-fuego-portada.webp"
                    alt="Campaña Prevención Incendios"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    Campaña de Prevención de Incendios en Villa del Dique
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    Un descuido puede terminar en tragedia. Súmate a las acciones de prevención de incendios.
                  </p>
                  <Link
                    href="/noticias/campana-prevencion-incendios"
                    className="text-brand-blue hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>

              <article className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image
                    src="/images/portada-septiembre-amarillo.jpg"
                    alt="Septiembre Amarillo"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    Septiembre Amarillo: Mes de Prevención del Suicidio
                  </h3>
                  <p className="text-gray-600 text-sm mb-3 line-clamp-3">
                    Septiembre es el mes mundial de la prevención del suicidio. Hablemos, escuchemos y actuemos juntos.
                  </p>
                  <Link
                    href="/noticias/septiembre-amarillo-prevencion"
                    className="text-brand-blue hover:text-blue-700 font-medium text-sm transition-colors"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            </div>
          </section>

          <div className="border-t border-gray-200 pt-6 md:pt-8 mt-8 md:mt-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-sm md:text-base text-gray-600 space-y-2 md:space-y-0">
              <div>
                <p>
                  Entrevista realizada por{" "}
                  <a
                    href="https://www.faqundoperez.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline"
                  >
                    Facundo Pérez
                  </a>
                </p>
              </div>
              <div>
                <p>
                  Contenido patrocinado por{" "}
                  <a
                    href="https://www.dualitydomain.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-brand-blue hover:underline"
                  >
                    Duality Domain
                  </a>
                </p>
              </div>
            </div>
          </div>
        </article>
      </main>

      <NewsBreadcrumbs
        currentArticleId="entrevista-bomberos-voluntarios"
        currentTitle="Bomberos Voluntarios de Villa del Dique: Vocación, Riesgo y Compromiso Comunitario"
      />

      <Footer />
    </div>
  )
}
