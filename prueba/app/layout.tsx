import type React from "react"
import type { Metadata } from "next"
import { Inter, Montserrat } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Villa del Dique Digital - Portal de Noticias, Turismo y Negocios",
  description:
    "Portal digital de Villa del Dique, Córdoba, Argentina. Medio de noticias locales actualizadas, información turística completa, directorio de negocios y eventos de la comunidad.",
  keywords: [
    "Villa del Dique",
    "Villa del Dique Córdoba",
    "Villa del Dique Argentina",
    "Villa del Dique noticias",
    "Villa del Dique turismo",
    "noticias Villa del Dique",
    "turismo Villa del Dique",
    "Córdoba Argentina",
    "Calamuchita",
    "Valle de Calamuchita",
  ],
  authors: [{ name: "Villa del Dique Digital", url: "https://www.villadeldique.com.ar" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/",
    types: {
      "application/rss+xml": [{ url: "/feed.xml", title: "Villa del Dique Digital RSS Feed" }],
    },
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Villa del Dique Digital - Portal de Villa del Dique, Córdoba",
    description:
      "Portal digital de Villa del Dique, Córdoba, Argentina. Medio de noticias locales, turismo, negocios y eventos de la comunidad.",
    url: "https://www.villadeldique.com.ar",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique Digital - Portal de Villa del Dique, Córdoba",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique Digital - Portal de Villa del Dique, Córdoba",
    description:
      "Portal digital de Villa del Dique, Córdoba, Argentina. Noticias locales, turismo, negocios y eventos.",
    images: ["/images/og-image.jpg"],
    creator: "@villadeldique",
    site: "@villadeldique",
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
  other: {
    "geo.region": "AR-X",
    "geo.placename": "Villa del Dique",
    "geo.position": "-32.1833;-64.4833",
    ICBM: "-32.1833, -64.4833",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "VDD Digital",
    "mobile-web-app-capable": "yes",
    "msapplication-TileColor": "#1e3a8a",
    "theme-color": "#1e3a8a",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "NewsMediaOrganization",
    name: "Villa del Dique Digital",
    url: "https://www.villadeldique.com.ar",
    logo: "https://www.villadeldique.com.ar/images/logo-villa-del-dique-digital.webp",
    description: "Portal digital oficial de Villa del Dique, Córdoba, Argentina",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Villa del Dique",
      addressRegion: "Córdoba",
      addressCountry: "AR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+54-3546-533050",
      contactType: "customer service",
    },
    sameAs: ["https://www.instagram.com/villadeldique.com.ar", "https://wa.me/3546533050"],
  }

  return (
    <html lang="es" className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <link rel="canonical" href="https://www.villadeldique.com.ar" />
        <link rel="alternate" type="application/rss+xml" title="Villa del Dique Digital RSS" href="/feed.xml" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="format-detection" content="telephone=no" />
      </head>
      <body className="font-sans antialiased bg-white text-gray-900">{children}</body>
    </html>
  )
}
