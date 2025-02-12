"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { SOCIAL_LINKS, CONTACT_INFO, CATEGORIES } from "@/lib/constants"
import { Facebook, Instagram, Twitter, Youtube, TwitterIcon as TikTok, Mail, Phone, ArrowRight } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the email to your newsletter service
    console.log(`Subscribed with email: ${email}`)
    setEmail("")
    // You could also show a success message to the user
  }

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Social Links */}
          <div className="flex flex-col items-center md:items-start">
            <Link href="/">
              <Image
                src="/logo-villa-del-dique.png"
                alt="Villa del Dique Digital"
                width={150}
                height={60}
                className="mb-4"
              />
            </Link>
            <p className="text-sm text-gray-300 mb-4 text-center md:text-left">
              Tu portal digital para descubrir Villa del Dique: noticias, eventos, negocios y turismo.
            </p>
            <div className="flex space-x-4">
              {Object.entries(SOCIAL_LINKS).map(([key, url]) => {
                const Icon =
                  {
                    facebook: Facebook,
                    instagram: Instagram,
                    twitter: Twitter,
                    youtube: Youtube,
                    tiktok: TikTok,
                  }[key] || Facebook

                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Icon className="h-6 w-6" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF0000]">Categorías</h3>
            <ul className="space-y-2">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link href={`/${category.slug}`} className="text-gray-300 hover:text-white transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF0000]">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="text-gray-300 hover:text-white transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="text-gray-300 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="/terminos-y-condiciones" className="text-gray-300 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Subscription */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FF0000]">Suscríbete a Nuestro Boletín</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              <Button type="submit" className="w-full bg-[#FF0000] hover:bg-[#FF0000]/90">
                Suscribirse
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <div className="mt-4">
              <h4 className="font-semibold mb-2 text-[#FF0000]">Contacto</h4>
              <p className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p className="flex items-center mt-1 text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-white transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Villa del Dique Digital. Todos los derechos reservados.
          </p>
          <div className="mt-2 flex items-center justify-center text-sm text-gray-400">
            <span>Desarrollado por</span>
            <a
              href="https://dualitydomain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-white transition-colors ml-1"
            >
              Duality Domain
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

