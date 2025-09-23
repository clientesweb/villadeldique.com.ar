import type { Metadata } from "next"
import PromotionalBanner from "@/components/promotional-banner"

export const metadata: Metadata = {
  title: "Política de Privacidad | Villa del Dique Digital",
  description:
    "Política de privacidad de Villa del Dique Digital. Conocé cómo protegemos tu información personal y qué datos recopilamos en nuestro portal de noticias.",
  keywords: [
    "política de privacidad",
    "Villa del Dique Digital",
    "protección de datos",
    "privacidad",
    "información personal",
    "Villa del Dique",
    "Valle de Calamuchita",
  ],
  openGraph: {
    title: "Política de Privacidad | Villa del Dique Digital",
    description: "Política de privacidad de Villa del Dique Digital. Conocé cómo protegemos tu información personal.",
    url: "https://www.villadeldique.com.ar/politica-privacidad",
    siteName: "Villa del Dique Digital",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Política de Privacidad | Villa del Dique Digital",
    description: "Política de privacidad de Villa del Dique Digital. Conocé cómo protegemos tu información personal.",
  },
  alternates: {
    canonical: "https://www.villadeldique.com.ar/politica-privacidad",
  },
}

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Política de Privacidad</h1>
          <p className="text-xl text-blue-100 text-pretty">
            Tu privacidad es importante para nosotros. Conocé cómo protegemos tu información personal.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <p className="text-blue-800 font-medium mb-0">Última actualización: 20 de septiembre de 2025</p>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
            <p className="text-gray-700 mb-6">
              En Villa del Dique Digital recopilamos información de manera limitada y transparente:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Información de contacto cuando te suscribís a nuestro boletín (email)</li>
              <li>Información que nos proporcionás al contactarnos (nombre, email, mensaje)</li>
              <li>Datos de navegación básicos a través de Google Analytics (anónimos)</li>
              <li>Información que compartís voluntariamente en formularios de contacto</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cómo Utilizamos tu Información</h2>
            <p className="text-gray-700 mb-4">Utilizamos la información recopilada para:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Enviarte nuestro boletín informativo con noticias locales</li>
              <li>Responder a tus consultas y comentarios</li>
              <li>Mejorar nuestro contenido y servicios</li>
              <li>Analizar el tráfico del sitio web de manera anónima</li>
              <li>Promocionar eventos y negocios locales de Villa del Dique</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Compartir Información</h2>
            <p className="text-gray-700 mb-6">
              <strong>No vendemos, alquilamos ni compartimos tu información personal</strong> con terceros, excepto en
              los siguientes casos:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Cuando sea requerido por ley</li>
              <li>Para proteger nuestros derechos legales</li>
              <li>Con proveedores de servicios que nos ayudan a operar el sitio (como servicios de email)</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Cookies y Tecnologías Similares</h2>
            <p className="text-gray-700 mb-6">
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia en nuestro sitio:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Google Analytics para entender cómo los visitantes usan nuestro sitio</li>
              <li>Cookies técnicas necesarias para el funcionamiento del sitio</li>
              <li>Cookies de preferencias para recordar tus configuraciones</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Tus Derechos</h2>
            <p className="text-gray-700 mb-4">Tenés derecho a:</p>
            <ul className="list-disc pl-6 mb-6 text-gray-700">
              <li>Acceder a la información personal que tenemos sobre vos</li>
              <li>Corregir información inexacta</li>
              <li>Solicitar la eliminación de tu información</li>
              <li>Desuscribirte de nuestro boletín en cualquier momento</li>
              <li>Limitar el procesamiento de tu información</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Seguridad</h2>
            <p className="text-gray-700 mb-6">
              Implementamos medidas de seguridad apropiadas para proteger tu información personal contra acceso no
              autorizado, alteración, divulgación o destrucción.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Enlaces a Otros Sitios</h2>
            <p className="text-gray-700 mb-6">
              Nuestro sitio puede contener enlaces a otros sitios web. No somos responsables de las prácticas de
              privacidad de esos sitios. Te recomendamos leer sus políticas de privacidad.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Cambios a esta Política</h2>
            <p className="text-gray-700 mb-6">
              Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cambios
              significativos publicando la nueva política en esta página.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contacto</h2>
            <p className="text-gray-700 mb-4">
              Si tenés preguntas sobre esta política de privacidad, podés contactarnos:
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <ul className="list-none space-y-2 text-gray-700">
                <li>
                  <strong>Email:</strong> villadeldiquedigital@gmail.com
                </li>
                <li>
                  <strong>Ubicación:</strong> Villa del Dique, Córdoba, Argentina
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <PromotionalBanner />
    </main>
  )
}
