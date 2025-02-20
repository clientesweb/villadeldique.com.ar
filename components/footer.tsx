"use client"

import type React from "react"

import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { SOCIAL_LINKS, CONTACT_INFO, CATEGORIES } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"

export default function Footer() {
  const [phone, setPhone] = useState("")

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    window.open(
      `https://wa.me/593987167782?text=Hola, me gustaría suscribirme al boletín. Mi número es ${phone}`,
      "_blank",
    )
  }

  return (
    <footer className="bg-gradient-to-r from-primary to-primary/90 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/logo-villa-del-dique-digital.png"
              alt="Villa del Dique Digital"
              width={150}
              height={60}
              className="mb-4"
            />
            <p className="text-sm max-w-xs text-center md:text-left">
              Tu portal digital para descubrir Villa del Dique
            </p>
            <div className="flex space-x-4 mt-4">
              <Link
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href={SOCIAL_LINKS.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-secondary">Categorías</h3>
            <ul className="space-y-2">
              {CATEGORIES.map((category) => (
                <li key={category.slug}>
                  <Link href={`/categoria/${category.slug}`} className="hover:text-accent transition-colors">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-secondary">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre-nosotros" className="hover:text-accent transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-accent transition-colors">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/politica-privacidad" className="hover:text-accent transition-colors">
                  Política de Privacidad
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-secondary">Suscríbete al Boletín</h3>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="tel"
                name="phone"
                placeholder="Tu número de WhatsApp"
                className="bg-white/10 border-white/20 text-white placeholder-gray-400"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <Button type="submit" className="w-full bg-secondary hover:bg-secondary/90">
                Suscribirse
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </form>
            <div className="mt-4">
              <h4 className="font-semibold mb-2">Contacto</h4>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-accent transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </p>
              <p className="flex items-center mt-1">
                <Phone className="h-4 w-4 mr-2" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-accent transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-sm">
            © {new Date().getFullYear()} Villa del Dique Digital. Todos los derechos reservados.
          </p>
          <div className="mt-2 flex items-center justify-center">
            <span className="text-sm">Desarrollado por</span>
            <Link
              href="https://dualitydomain.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold hover:text-accent transition-colors ml-1"
            >
              Duality Domain
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

