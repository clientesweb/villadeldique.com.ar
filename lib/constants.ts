interface Article {
  id: number
  slug: string
  title: string
  description: string
  image: string
  fullContent: string
  category: string
  subtitle?: string
  importantFact?: string
}

export const BRAND_COLORS = {
  primary: "#0A0F2C", // Navy blue
  secondary: "#2196F3", // Light blue
  accent: "#FFC107", // Yellow
  highlight: "#8BC34A", // Green
  text: "#FFFFFF", // White
}

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/villadeldiquedigital",
  instagram: "https://www.instagram.com/villadeldiquedigital",
  twitter: "https://twitter.com/villadeldiquedigital",
  youtube: "https://www.youtube.com/channel/UCxxxxxxxxxxxxxxx",
  tiktok: "https://www.tiktok.com/@villadeldiquedigital",
}

export const CONTACT_INFO = {
  email: "info@villadeldique.com.ar",
  phone: "+54 9 3546 123456",
  whatsapp: "+54 9 3546 123456",
}

export const CATEGORIES = [
  { name: "Noticias", slug: "noticias" },
  { name: "Turismo", slug: "turismo" },
  { name: "Gastronomía", slug: "gastronomia" },
  { name: "Cultura", slug: "cultura" },
  { name: "Negocios", slug: "negocios" },
]

export const ARTICLES: Article[] = [
  {
    id: 1,
    slug: "bienvenidos-villa-del-dique-digital",
    title: "Bienvenidos a Villa del Dique Digital",
    description: "Tu nueva fuente de información sobre todo lo que sucede en Villa del Dique",
    image: "/images/welcome.jpg",
    fullContent: "Bienvenidos a Villa del Dique Digital, tu portal de noticias y eventos locales...",
    category: "noticias",
  },
  // Más artículos aquí...
]

export const SITE_CONFIG = {
  name: "Villa del Dique Digital",
  description: "Tu portal digital para descubrir Villa del Dique",
  url: "https://villadeldique.com.ar",
  ogImage: "https://villadeldique.com.ar/og-image.jpg",
  themeColor: BRAND_COLORS.primary,
  keywords: ["Villa del Dique", "noticias", "turismo", "gastronomía", "cultura", "negocios", "Córdoba", "Argentina"],
}

