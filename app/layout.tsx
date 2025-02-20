import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Montserrat } from "next/font/google"
import { Toaster } from "react-hot-toast"
import LocalBusinessSchema from "@/components/local-business-schema"

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: {
    default: "Villa del Dique Digital - Noticias, Cultura, Turismo y Negocios Locales",
    template: "%s | Villa del Dique Digital",
  },
  description:
    "Villa del Dique Digital es tu portal online para descubrir las últimas noticias, eventos, negocios y lugares turísticos en Villa del Dique, Córdoba.",
  metadataBase: new URL("https://villadeldique.netlify.app"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} touch-pan-y`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0A0F2C" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={montserrat.className}>
        <LocalBusinessSchema />
        <Toaster />
        <main className="min-h-screen bg-background">{children}</main>
      </body>
    </html>
  )
}

