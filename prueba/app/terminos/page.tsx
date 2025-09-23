import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Términos y Condiciones | Villa del Dique Digital",
  description:
    "Términos y condiciones de uso del sitio web Villa del Dique Digital. Conoce nuestras políticas y condiciones de servicio.",
  keywords: "términos, condiciones, políticas, Villa del Dique, legal",
  openGraph: {
    title: "Términos y Condiciones | Villa del Dique Digital",
    description: "Términos y condiciones de uso del sitio web Villa del Dique Digital.",
    url: "https://www.villadeldique.com.ar/terminos",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/og/contacto-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique Digital - Términos y Condiciones",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos y Condiciones | Villa del Dique Digital",
    description: "Términos y condiciones de uso del sitio web Villa del Dique Digital.",
    images: ["/images/og/contacto-og-image.jpg"],
  },
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Términos y Condiciones</h1>
          <p className="text-gray-600">Última actualización: Enero 2025</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Al acceder y utilizar el sitio web Villa del Dique Digital (www.villadeldique.com.ar), usted acepta
              cumplir con estos términos y condiciones de uso. Si no está de acuerdo con alguno de estos términos, no
              debe utilizar nuestro sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Uso del Sitio Web</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Este sitio web está destinado a proporcionar información sobre Villa del Dique, incluyendo noticias
              locales, información turística y servicios comunitarios. Usted se compromete a utilizar el sitio de manera
              responsable y legal.
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>No utilizar el sitio para actividades ilegales o no autorizadas</li>
              <li>No intentar acceder a áreas restringidas del sitio</li>
              <li>No transmitir virus, malware o código malicioso</li>
              <li>Respetar los derechos de propiedad intelectual</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Contenido y Propiedad Intelectual</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Todo el contenido del sitio web, incluyendo textos, imágenes, logotipos, gráficos y software, es propiedad
              de Villa del Dique Digital o sus licenciantes y está protegido por las leyes de derechos de autor y
              propiedad intelectual.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Privacidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Respetamos su privacidad y nos comprometemos a proteger su información personal. La información recopilada
              se utiliza únicamente para mejorar nuestros servicios y mantenerlo informado sobre noticias y eventos de
              Villa del Dique.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Limitación de Responsabilidad</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Villa del Dique Digital no será responsable por daños directos, indirectos, incidentales o consecuentes
              que resulten del uso o la imposibilidad de usar este sitio web. La información se proporciona "tal como
              está" sin garantías de ningún tipo.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Modificaciones</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nos reservamos el derecho de modificar estos términos y condiciones en cualquier momento. Las
              modificaciones entrarán en vigor inmediatamente después de su publicación en el sitio web.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contacto</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Si tiene preguntas sobre estos términos y condiciones, puede contactarnos en:
            </p>
            <ul className="list-none text-gray-700 space-y-2">
              <li>
                <strong>Email:</strong> villadeldiquedigital@gmail.com
              </li>
              <li>
                <strong>WhatsApp:</strong> 3546533050
              </li>
              <li>
                <strong>Dirección:</strong> Villa del Dique, Córdoba, Argentina
              </li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
