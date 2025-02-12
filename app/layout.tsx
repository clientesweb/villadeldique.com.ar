import "@/app/globals.css"
import LocalBusinessSchema from "@/components/local-business-schema"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Toaster } from "react-hot-toast"
import type React from "react" // Import React

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Villa del Dique Digital - Noticias, Cultura, Turismo y Negocios Locales",
    template: "%s | Villa del Dique Digital",
  },
  description:
    "Villa del Dique Digital es tu portal online para descubrir las últimas noticias, eventos, negocios y lugares turísticos en Villa del Dique, Córdoba.",
  keywords: [
    "Villa del Dique",
    "noticias",
    "turismo",
    "gastronomía",
    "cultura",
    "negocios",
    "eventos",
    "guía local",
    "Córdoba",
  ],
  authors: [{ name: "Villa del Dique Digital" }],
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
  themeColor: "#FF0000",
  openGraph: {
    type: "website",
    title: "Villa del Dique Digital",
    description:
      "Conoce lo mejor de Villa del Dique: noticias, turismo, gastronomía, negocios y cultura, todo en un solo lugar.",
    url: "https://villadeldique.com.ar",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Villa del Dique Digital",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa del Dique Digital",
    description: "Tu portal digital sobre noticias, cultura, negocios y turismo en Villa del Dique.",
    images: ["/twitter-image.jpg"],
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
    <html lang="es">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <LocalBusinessSchema />
        <Toaster />
        {children}
      </body>
    </html>
  )
}

