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
  metadataBase: new URL("https://villadeldique.com.ar"),
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon-57x57.png", sizes: "57x57", type: "image/png" },
      { url: "/apple-icon-60x60.png", sizes: "60x60", type: "image/png" },
      { url: "/apple-icon-72x72.png", sizes: "72x72", type: "image/png" },
      { url: "/apple-icon-76x76.png", sizes: "76x76", type: "image/png" },
      { url: "/apple-icon-114x114.png", sizes: "114x114", type: "image/png" },
      { url: "/apple-icon-120x120.png", sizes: "120x120", type: "image/png" },
      { url: "/apple-icon-144x144.png", sizes: "144x144", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "apple-touch-icon",
        url: "/apple-touch-icon.png",
      },
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#0A0F2C",
      },
    ],
  },
  manifest: "/manifest.json",
  themeColor: "#0A0F2C",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Villa del Dique Digital",
  },
  applicationName: "Villa del Dique Digital",
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
        <meta name="msapplication-TileColor" content="#0A0F2C" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#0A0F2C" />
      </head>
      <body className={montserrat.className}>
        <LocalBusinessSchema />
        <Toaster />
        <main className="min-h-screen bg-background">{children}</main>
      </body>
    </html>
  )
}

