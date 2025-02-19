import type React from "react"
import "@/app/globals.css"
import { Montserrat } from "next/font/google"
import LocalBusinessSchema from "@/components/local-business-schema"
import type { Metadata } from "next"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    default: "Villa del Dique Digital - Tu Portal de Noticias y Eventos Locales",
    template: "%s | Villa del Dique Digital",
  },
  description:
    "Descubre Villa del Dique a través de noticias locales, eventos culturales, guías turísticas y más. Tu fuente confiable de información sobre nuestra hermosa ciudad.",
  keywords: [
    "Villa del Dique",
    "noticias locales",
    "turismo Córdoba",
    "eventos culturales",
    "guía turística",
    "comercios locales",
    "actividades Villa del Dique",
    "Valle de Calamuchita",
    "lago Los Molinos",
    "turismo serrano",
  ],
  authors: [{ name: "Villa del Dique Digital" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://villadeldique.com.ar"),
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  themeColor: "#0A0F2C",
  openGraph: {
    type: "website",
    title: "Villa del Dique Digital",
    description: "Tu portal digital para descubrir todo sobre Villa del Dique: noticias, eventos, turismo y más.",
    url: "https://villadeldique.com.ar",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/villa-del-dique-digital-ITK6xd1oZ6RGFvX9xevsngROjXJ3f2.png",
        width: 1200,
        height: 630,
        alt: "Villa del Dique Digital",
      },
    ],
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique Digital",
    description: "Descubre Villa del Dique: noticias, eventos, turismo y más en un solo lugar.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/villa-del-dique-digital-ITK6xd1oZ6RGFvX9xevsngROjXJ3f2.png",
    ],
    creator: "@VillaDiqueDig",
    site: "@VillaDiqueDig",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-codigo-de-verificacion-de-google",
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
        <meta name="geo.region" content="AR-X" />
        <meta name="geo.placename" content="Villa del Dique" />
        <meta name="geo.position" content="-32.1833;-64.6833" />
        <meta name="ICBM" content="-32.1833, -64.6833" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`min-h-screen bg-background text-background-foreground`}>
        <LocalBusinessSchema />
        {children}
      </body>
    </html>
  )
}

