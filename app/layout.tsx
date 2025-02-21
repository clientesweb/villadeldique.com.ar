import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Toaster } from "react-hot-toast"
import LocalBusinessSchema from "@/components/local-business-schema"
import SEO from "@/components/seo"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    default: "Villa del Dique Digital - Noticias, Turismo y Eventos Locales",
    template: "%s | Villa del Dique Digital",
  },
  description:
    "Descubre Villa del Dique con noticias actualizadas, guías turísticas, eventos locales y más. Tu portal digital para explorar lo mejor de nuestra hermosa ciudad en las sierras de Córdoba.",
  metadataBase: new URL("https://villadeldique.com.ar"),
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://villadeldique.com.ar",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "https://villadeldique.com.ar/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@villadeldiquedigital",
    creator: "@villadeldiquedigital",
  },
  keywords: [
    "Villa del Dique",
    "turismo",
    "noticias",
    "eventos",
    "Córdoba",
    "Argentina",
    "lago",
    "sierras",
    "alojamiento",
    "gastronomía",
  ],
  authors: [{ name: "Villa del Dique Digital", url: "https://villadeldique.com.ar" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        <SEO
          title="Villa del Dique Digital - Noticias, Turismo y Eventos Locales"
          description="Descubre Villa del Dique con noticias actualizadas, guías turísticas, eventos locales y más. Tu portal digital para explorar lo mejor de nuestra hermosa ciudad en las sierras de Córdoba."
          canonicalUrl="https://villadeldique.com.ar"
          ogImage="https://villadeldique.com.ar/og-image.jpg"
        />
      </head>
      <body className={montserrat.className}>
        <LocalBusinessSchema />
        <Toaster />
        <main className="min-h-screen bg-background">{children}</main>
      </body>
    </html>
  )
}