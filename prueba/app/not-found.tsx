import Link from "next/link"
import Image from "next/image"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <Image
            src="/images/logo-villa-del-dique-digital.webp"
            alt="Villa del Dique Digital"
            width={200}
            height={200}
            className="mx-auto mb-8 w-auto h-32 object-contain"
          />
          <div className="text-8xl font-bold text-blue-600 mb-4">404</div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Página no encontrada</h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Lo sentimos, la página que estás buscando no existe o ha sido movida.
          </p>
        </div>

        <div className="space-y-4 mb-8">
          <p className="text-gray-700">Puedes intentar con alguna de estas opciones:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-lg mx-auto">
            <Link
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Ir al inicio
            </Link>
            <Link
              href="/noticias"
              className="bg-white text-blue-600 border-2 border-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
            >
              Ver noticias
            </Link>
          </div>
        </div>

        <div className="text-sm text-gray-500 space-y-2">
          <p>¿Necesitas ayuda? Contáctanos:</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:villadeldiquedigital@gmail.com" className="text-blue-600 hover:underline">
              Email
            </a>
            <a
              href="https://wa.me/3546533050"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
