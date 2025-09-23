import type { Metadata } from "next"
import ContactoClientPage from "./ContactoClientPage"

export const metadata: Metadata = {
  title: "📞 Contacto Villa del Dique Digital | Enviá tu Noticia y Promocioná tu Negocio Valle de Calamuchita",
  description:
    "📧 Contactá con Villa del Dique Digital, el portal de noticias más confiable del Valle de Calamuchita, Córdoba. Enviá tu noticia, promocioná tu negocio local, compartí eventos o información de interés para la comunidad. Cobertura periodística profesional en Villa del Dique.",
  keywords: [
    "contacto Villa del Dique Digital",
    "enviar noticia Villa del Dique",
    "promocionar negocio Villa del Dique",
    "información Villa del Dique",
    "comunicación Villa del Dique",
    "prensa local Córdoba",
    "medios Villa del Dique",
    "noticias locales Villa del Dique",
    "emprendimientos Villa del Dique",
    "eventos Villa del Dique",
    "cobertura periodística Villa del Dique",
    "portal noticias Villa del Dique",
    "medio digital Villa del Dique",
    "publicidad Villa del Dique",
    "marketing local Villa del Dique",
    "difusión Villa del Dique",
    "comunicación comunitaria",
    "prensa Villa del Dique",
    "periodismo local Córdoba",
    "Villa del Dique Digital contacto",
    "Valle de Calamuchita contacto",
    "medios Valle de Calamuchita",
    "comunicación Valle de Calamuchita",
    "WhatsApp Villa del Dique Digital",
    "email Villa del Dique Digital",
    "villadeldiquedigital@gmail.com",
    "3546533050 Villa del Dique",
    "contacto medios Córdoba",
    "enviar información Villa del Dique",
    "colaborar Villa del Dique Digital",
  ],
  authors: [{ name: "Villa del Dique Digital", url: "https://www.villadeldique.com.ar" }],
  creator: "Villa del Dique Digital",
  publisher: "Villa del Dique Digital",
  metadataBase: new URL("https://www.villadeldique.com.ar"),
  alternates: {
    canonical: "/contacto",
    languages: {
      "es-AR": "/contacto",
      es: "/contacto",
    },
  },
  openGraph: {
    title: "📞 Contacto Villa del Dique Digital | Portal de Noticias Valle de Calamuchita",
    description:
      "📧 Contactá con Villa del Dique Digital. Enviá tu noticia, promocioná tu negocio local o compartí información de interés para la comunidad del Valle de Calamuchita.",
    url: "https://www.villadeldique.com.ar/contacto",
    siteName: "Villa del Dique Digital",
    images: [
      {
        url: "/images/og/contacto-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Contacto Villa del Dique Digital - Enviá tu noticia y promocioná tu negocio Valle de Calamuchita",
      },
    ],
    locale: "es_AR",
    type: "website",
    countryName: "Argentina",
    region: "Córdoba",
    placeName: "Villa del Dique",
  },
  twitter: {
    card: "summary_large_image",
    title: "📞 Contacto Villa del Dique Digital",
    description:
      "📧 Contactá con Villa del Dique Digital. Enviá tu noticia o promocioná tu negocio en nuestra comunidad del Valle de Calamuchita.",
    images: ["/images/og/contacto-og-image.jpg"],
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
  category: "Contact Information",
  classification: "Página de contacto portal de noticias",
  other: {
    "geo.region": "AR-X",
    "geo.placename": "Villa del Dique",
    "geo.position": "-32.1833;-64.4833",
    ICBM: "-32.1833, -64.4833",
    "contact.email": "villadeldiquedigital@gmail.com",
    "contact.phone": "+54-3546-533050",
    "contact.whatsapp": "https://wa.me/3546533050",
    "business.contact_data.street_address": "Villa del Dique",
    "business.contact_data.locality": "Villa del Dique",
    "business.contact_data.region": "Córdoba",
    "business.contact_data.postal_code": "5194",
    "business.contact_data.country_name": "Argentina",
    "coverage.area": "Villa del Dique, Valle de Calamuchita, Córdoba, Argentina",
    "response.time": "24 horas",
    "service.hours": "Lunes a Domingo 24hs",
  },
}

export default function ContactoPage() {
  return <ContactoClientPage />
}
