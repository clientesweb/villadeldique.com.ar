import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/header"
import AnnouncementBar from "@/components/announcement-bar"
import Footer from "@/components/footer"
import ShareButtons from "@/components/share-buttons"
import NewsBreadcrumbs from "@/components/news-breadcrumbs"

export const metadata: Metadata = {
  title: "Los Bomberos Voluntarios de Villa del Dique presentan su nuevo sitio web | Villa del Dique Digital",
  description:
    "Un espacio digital para informar, conectar y recibir el apoyo de la comunidad. La Sociedad de Bomberos Voluntarios de Villa del Dique lanzó oficialmente su nuevo sitio web con información sobre su historia, cuerpo activo y formas de colaborar.",
  keywords: [
    "bomberos voluntarios Villa del Dique",
    "sitio web bomberos",
    "bomberosvoluntariosvilladeldique.com.ar",
    "donaciones bomberos",
    "Duality Domain",
    "Villa del Dique",
    "emergencias",
    "seguridad",
    "comunidad",
    "Córdoba",
    "Argentina",
  ],
  authors: [{ name: "Camila Insaurralde" }],
  creator: "Camila Insaurralde",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/noticias/bomberos-voluntarios-nuevo-sitio-web",
  },
  openGraph: {
    title: "Los Bomberos Voluntarios de Villa del Dique presentan su nuevo sitio web",
    description:
      "Un espacio digital para informar, conectar y recibir el apoyo de la comunidad. La institución lanzó oficialmente su plataforma web.",
    url: "https://www.villadeldique.com.ar/noticias/bomberos-voluntarios-nuevo-sitio-web",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/portada-sitio-web-bomberos-voluntarios.jpg",
        width: 1200,
        height: 630,
        alt: "Bomberos Voluntarios de Villa del Dique - Nuevo sitio web",
      },
    ],
    locale: "es_AR",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Los Bomberos Voluntarios de Villa del Dique presentan su nuevo sitio web",
    description: "Un espacio digital para informar, conectar y recibir el apoyo de la comunidad.",
    images: ["/images/portada-sitio-web-bomberos-voluntarios.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  headline: "Los Bomberos Voluntarios de Villa del Dique presentan su nuevo sitio web",
  description:
    "Un espacio digital para informar, conectar y recibir el apoyo de la comunidad. La Sociedad de Bomberos Voluntarios de Villa del Dique lanzó oficialmente su nuevo sitio web.",
  image: "https://www.villadeldique.com.ar/images/portada-sitio-web-bomberos-voluntarios.jpg",
  datePublished: "2025-09-19",
  dateModified: "2025-09-19",
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
    "@id": "https://www.villadeldique.com.ar/noticias/bomberos-voluntarios-nuevo-sitio-web",
  },
  articleSection: "Comunidad",
  keywords: "bomberos voluntarios, Villa del Dique, sitio web, comunidad, donaciones, emergencias",
}

export default function BomberosVoluntariosNuevoSitioWebPage() {
  const articleUrl = "https://www.villadeldique.com.ar/noticias/bomberos-voluntarios-nuevo-sitio-web"
  const articleTitle = "Los Bomberos Voluntarios de Villa del Dique presentan su nuevo sitio web"

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

      <main className="min-h-screen bg-white">
        <article className="max-w-4xl mx-auto px-4 md:px-6 py-6 md:py-8">
          <nav className="mb-6 md:mb-8">
            <ol className="flex items-center space-x-2 text-sm md:text-base">
              <li>
                <Link href="/" className="text-brand-blue hover:text-blue-700 transition-colors">
                  Inicio
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li>
                <Link href="/noticias" className="text-brand-blue hover:text-blue-700 transition-colors">
                  Noticias
                </Link>
              </li>
              <li className="text-gray-500">/</li>
              <li className="text-gray-700 font-medium">Bomberos Voluntarios nuevo sitio web</li>
            </ol>
          </nav>

          <div className="mb-6 md:mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-block bg-brand-blue text-white text-sm px-3 py-1 rounded-full font-medium">
                Comunidad
              </span>
              <time className="text-gray-600 text-sm md:text-base">19 de septiembre de 2025</time>
            </div>

            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-brand-navy mb-6 text-balance">
              Los Bomberos Voluntarios de Villa del Dique presentan su nuevo sitio web
            </h1>

            <p className="font-sans text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
              Un espacio digital para informar, conectar y recibir el apoyo de la comunidad
            </p>
          </div>

          <div className="relative w-full h-64 md:h-96 lg:h-[500px] mb-8 rounded-lg overflow-hidden">
            <Image
              src="/images/portada-sitio-web-bomberos-voluntarios.jpg"
              alt="Sitio web de Bomberos Voluntarios de Villa del Dique - Estamos para resguardar vidas"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="prose prose-lg max-w-none font-sans text-gray-800 leading-relaxed">
            <p className="text-lg md:text-xl mb-6">
              La Sociedad de Bomberos Voluntarios de Villa del Dique lanzó oficialmente su nuevo sitio web:{" "}
              <a
                href="https://www.bomberosvoluntariosvilladeldique.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-blue-700 font-medium underline"
              >
                www.bomberosvoluntariosvilladeldique.com.ar
              </a>
              . Esta plataforma se convierte en un punto de encuentro entre la institución y la comunidad, brindando
              acceso a información clara sobre su historia, el cuerpo activo, las actividades que realizan y, sobre
              todo, nuevas formas de colaborar con quienes entregan su vida al servicio de todos.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/bomberos-voluntarios-vdd.jpg"
                  alt="Bomberos Voluntarios de Villa del Dique con trofeo de segundo puesto"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/bomberos-voluntarios-vdd-3.jpg"
                  alt="Bomberos Voluntarios de Villa del Dique - Equipo femenino en competencia"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
              Una institución al servicio de la comunidad
            </h2>

            <p className="mb-6">
              Desde sus orígenes, los Bomberos Voluntarios de Villa del Dique se han consolidado como una fuerza
              solidaria, comprometida y cercana. Su labor abarca emergencias, capacitaciones y acciones comunitarias que
              garantizan la seguridad de vecinos, turistas y toda la región de Calamuchita.
            </p>

            <p className="mb-6">En la web, los visitantes pueden acceder a:</p>

            <ul className="list-disc pl-6 mb-6 space-y-2">
              <li>
                <strong>Nuestra historia:</strong> los inicios y la trayectoria de la institución.
              </li>
              <li>
                <strong>Cuerpo activo:</strong> presentación de los bomberos voluntarios y sus roles.
              </li>
              <li>
                <strong>Noticias y actividades:</strong> información actualizada sobre intervenciones y eventos.
              </li>
              <li>
                <strong>Información del cuartel:</strong> detalles de la infraestructura y equipamiento.
              </li>
              <li>
                <strong>Formas de colaborar:</strong> una sección clave para hacerse socio, donar o brindar apoyo a la
                institución.
              </li>
            </ul>

            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden my-8">
              <Image
                src="/images/bomberos-voluntarios-vdd-2.jpg"
                alt="Bomberos Voluntarios de Villa del Dique celebrando con trofeo"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">Cómo colaborar</h2>

            <p className="mb-6">
              El sostenimiento de los bomberos depende, en gran medida, de la colaboración de vecinos y comercios
              locales. Ahora, desde el sitio, es posible sumarse como socio colaborador y realizar aportes fácilmente.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 my-8">
              <h3 className="font-bold text-lg mb-4 text-red-800">Información para donaciones:</h3>
              <ul className="space-y-2 text-red-700">
                <li>
                  <strong>Alias de donación:</strong> bomberos.villa.dique
                </li>
                <li>
                  <strong>Nombre de la entidad:</strong> Sociedad De Bomberos Voluntarios De Villa
                </li>
                <li>
                  <strong>CUIT/CUIL:</strong> 30-66868497-8
                </li>
                <li>
                  <strong>Entidad de cobro:</strong> Mercado Pago
                </li>
              </ul>
            </div>

            <p className="mb-6">
              Cada contribución es fundamental para que los bomberos cuenten con los recursos necesarios para enfrentar
              emergencias y seguir brindando un servicio de excelencia.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/bomberos-voluntarios-vdd-1.jpg"
                  alt="Bomberos Voluntarios de Villa del Dique en el cuartel"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src="/images/bomberos-voluntarios-vdd-5.jpg"
                  alt="Equipo completo de Bomberos Voluntarios de Villa del Dique"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
              Un proyecto con acompañamiento digital
            </h2>

            <p className="mb-6">
              El nuevo portal fue diseñado y desarrollado por{" "}
              <a
                href="https://www.dualitydomain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-blue-700 font-medium underline"
              >
                Duality Domain
              </a>
              , empresa especializada en comunicación, diseño y desarrollo web. El patrocinio de este proyecto refleja
              el compromiso conjunto entre la institución y el sector privado para fortalecer la presencia digital y
              fomentar la transparencia.
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
              Seguinos en redes sociales
            </h2>

            <p className="mb-6">
              <strong>Instagram:</strong>
              <br />
              <a
                href="https://www.instagram.com/bomberosvilladeldique"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-blue-700 font-medium underline"
              >
                @bomberosvilladeldique
              </a>
              <br />
              <a
                href="https://www.instagram.com/dualitydomain"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-blue-700 font-medium underline"
              >
                @dualitydomain
              </a>
            </p>

            <h2 className="font-serif text-2xl md:text-3xl font-bold text-brand-navy mb-4 mt-8">
              Una puerta digital abierta a la comunidad
            </h2>

            <p className="mb-6">
              Con esta nueva plataforma, los Bomberos Voluntarios de Villa del Dique consolidan su cercanía con la
              gente, ofreciendo más y mejores canales de comunicación, al mismo tiempo que refuerzan el llamado a la
              solidaridad para sostener su invaluable vocación de servicio.
            </p>

            <p className="mb-8">
              Ingresá a{" "}
              <a
                href="https://www.bomberosvoluntariosvilladeldique.com.ar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-blue hover:text-blue-700 font-medium underline"
              >
                www.bomberosvoluntariosvilladeldique.com.ar
              </a>{" "}
              y conocé cómo podés ser parte de esta gran familia solidaria.
            </p>
          </div>

          <div className="border-t border-gray-200 pt-6 mt-8">
            <p className="text-sm text-gray-600 mb-6">
              <strong>Autor:</strong> Camila Insaurralde
            </p>

            <ShareButtons
              title={articleTitle}
              url={articleUrl}
              description="Un espacio digital para informar, conectar y recibir el apoyo de la comunidad."
            />
          </div>
        </article>

        <NewsBreadcrumbs currentArticleId="bomberos-voluntarios-nuevo-sitio-web" currentTitle={articleTitle} />
      </main>

      <Footer />
    </div>
  )
}
