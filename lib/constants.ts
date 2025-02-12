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
  primary: "#FF0000",
  secondary: "#808080",
}

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/villadeldiquedigital",
  instagram: "https://www.instagram.com/villadeldiquedigital",
  twitter: "https://twitter.com/villadeldiquedigital",
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
  
]