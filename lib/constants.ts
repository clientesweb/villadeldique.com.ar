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
  primary: "#0A0F2C",
  secondary: "#2196F3",
  accent: "#FFC107",
  highlight: "#8BC34A",
  text: "#FFFFFF",
}

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/villadeldiquedigital",
  instagram: "https://www.instagram.com/villadeldiquedigital",
  twitter: "https://twitter.com/villadeldiquedigital",
  youtube: "https://www.youtube.com/channel/UCxxxxxxxxxxxxxxx",
}

export const CONTACT_INFO = {
  email: "info@villadeldique.com.ar",
  phone: "+54 9 3546 123456",
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
    slug: "sample-article",
    title: "Sample Article",
    description: "This is a sample article",
    image: "/placeholder.svg",
    fullContent: "This is the full content of the sample article.",
    category: "noticias",
  },
]

