import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Licencia y Derechos de Autor | Villa del Dique Digital",
  description:
    "Información sobre los derechos de autor y licencia del contenido de Villa del Dique Digital. Conocé cómo usar nuestro contenido de manera responsable.",
  keywords: "licencia, derechos de autor, Villa del Dique, contenido, copyright, uso responsable",
  openGraph: {
    title: "Licencia y Derechos de Autor | Villa del Dique Digital",
    description: "Información sobre los derechos de autor y licencia del contenido de Villa del Dique Digital.",
    url: "https://www.villadeldique.com.ar/licencia",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/og/contacto-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique Digital - Licencia y Derechos de Autor",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Licencia y Derechos de Autor | Villa del Dique Digital",
    description: "Información sobre los derechos de autor y licencia del contenido de Villa del Dique Digital.",
    images: ["/images/og/contacto-og-image.jpg"],
  },
}

export default function LicenciaPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors mb-4">
            ← Volver al inicio
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Licencia y Derechos de Autor</h1>
          <p className="text-gray-600">Información sobre el uso del contenido de Villa del Dique Digital</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-8 mb-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Derechos de Autor del Contenido</h2>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>© 2024 Villa del Dique Digital</strong> - Todos los derechos reservados.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              El contenido de este sitio web, incluyendo pero no limitado a textos, imágenes, fotografías, videos,
              gráficos, logotipos, y diseño, está protegido por las leyes de derechos de autor de la República Argentina
              y tratados internacionales.
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              <strong>Villa del Dique Digital</strong> es el propietario exclusivo o tiene licencia para usar todo el
              contenido publicado en este sitio web, salvo que se indique expresamente lo contrario.
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Uso Permitido</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se permite el uso del contenido de Villa del Dique Digital bajo las siguientes condiciones:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Uso personal:</strong> Puedes leer, descargar e imprimir contenido para uso personal y no
                comercial
              </li>
              <li>
                <strong>Compartir noticias:</strong> Puedes compartir enlaces a nuestros artículos en redes sociales
              </li>
              <li>
                <strong>Citas con atribución:</strong> Puedes citar fragmentos de nuestros artículos citando la fuente
              </li>
              <li>
                <strong>Uso educativo:</strong> Instituciones educativas pueden usar nuestro contenido con fines
                académicos
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Uso Prohibido</h2>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li>
                <strong>Reproducción total:</strong> No se permite reproducir artículos completos sin autorización
              </li>
              <li>
                <strong>Uso comercial:</strong> No se permite usar nuestro contenido con fines comerciales sin permiso
              </li>
              <li>
                <strong>Modificación:</strong> No se permite alterar o modificar nuestro contenido
              </li>
              <li>
                <strong>Redistribución:</strong> No se permite redistribuir nuestro contenido sin atribución adecuada
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Atribución Requerida</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cuando uses nuestro contenido de manera permitida, debes incluir la siguiente atribución:
            </p>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6">
              <p className="text-blue-800 font-mono text-sm">
                "Fuente: Villa del Dique Digital (www.villadeldique.com.ar)"
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Solicitar Permisos</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para usos que excedan los permisos otorgados, contactanos:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="list-none space-y-2 text-gray-700">
                <li>
                  <strong>Email:</strong> villadeldiquedigital@gmail.com
                </li>
                <li>
                  <strong>Asunto:</strong> "Solicitud de permisos de uso de contenido"
                </li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Créditos de Desarrollo</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Este sitio web fue desarrollado para fortalecer la comunicación digital en Villa del Dique y el Valle de
              Calamuchita.
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>Desarrollado por:</strong>{" "}
              <a
                href="https://www.dualitydomain.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Duality Domain
              </a>
            </p>
          </section>
        </div>
      </div>
    </main>
  )
}
