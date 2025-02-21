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
  applicationName: "Villa del Dique Digital",
  authors: [{ name: "Duality Domain" }],
  keywords: ["Villa del Dique", "noticias", "turismo", "cultura", "negocios", "Córdoba", "Argentina"],
  robots: "index, follow",
  themeColor: "#0A0F2C",
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${montserrat.variable} touch-pan-y`}>
      <head />
      <body className={montserrat.className}>
        <LocalBusinessSchema />
        <Toaster position="bottom-right" />
        <main className="min-h-screen bg-background" role="main">
          {children}
        </main>
        <div id="modal-root" /> {/* Portal container for modals */}
      </body>
    </html>
  )
}

