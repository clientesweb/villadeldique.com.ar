interface ArticleSection {
  type: "paragraph" | "image" | "subtitle" | "list"
  content: string
  items?: string[]
}

interface Article {
  id: number
  slug: string
  title: string
  description: string
  image: string
  category: string
  date: string
  author: string
  sections: ArticleSection[]
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
    image: "/hero-villa-del-dique-lago.jpg",
    category: "noticias",
    date: "2024-02-20",
    author: "Equipo Editorial",
    sections: [
      {
        type: "paragraph",
        content:
          "Villa del Dique es un lugar lleno de historia, naturaleza y cultura. Ahora, con este nuevo proyecto digital, queremos acercarte aún más a la esencia de nuestra localidad. **Villa del Dique Digital** nace con la misión de informar, destacar y conectar a la comunidad con noticias positivas, turismo, gastronomía, negocios locales y cultura.",
      },
      {
        type: "subtitle",
        content: "Nuestra Misión",
      },
      {
        type: "paragraph",
        content:
          "En un mundo donde la información fluye rápidamente, buscamos ofrecer un espacio confiable donde puedas encontrar lo mejor de Villa del Dique. Queremos ser el puente entre vecinos, emprendedores, turistas y amantes de este rincón de Córdoba, brindando contenido que inspire y sume valor a nuestra comunidad.",
      },
      {
        type: "subtitle",
        content: "¿Qué Encontrarás Aquí?",
      },
      {
        type: "list",
        content: "Secciones principales:",
        items: [
          "**Noticias Positivas:** Historias que destacan el crecimiento, el esfuerzo y los logros de nuestra comunidad.",
          "**Turismo y Naturaleza:** Recorremos juntos los rincones más bellos de Villa del Dique, desde el embalse hasta los senderos naturales.",
          "**Gastronomía Local:** Descubrimos los sabores únicos de nuestra zona, recomendando restaurantes, recetas y experiencias gastronómicas.",
          "**Negocios y Emprendimientos:** Damos visibilidad a los comercios y proyectos que hacen crecer nuestra localidad.",
          "**Cultura y Tradiciones:** Celebramos nuestra identidad a través de eventos, historia y manifestaciones artísticas.",
        ],
      },
      {
        type: "image",
        content: "/images/villa-del-dique-panoramica.jpg",
      },
      {
        type: "subtitle",
        content: "Una Comunidad Conectada",
      },
      {
        type: "paragraph",
        content:
          "Este proyecto también se extiende a nuestras redes sociales, donde compartimos contenido exclusivo, interactuamos con los vecinos y promovemos el desarrollo local. Síguenos en Instagram y Facebook para estar al día con todo lo que sucede en Villa del Dique.",
      },
      {
        type: "subtitle",
        content: "Agradecimiento a Nuestros Patrocinadores",
      },
      {
        type: "paragraph",
        content:
          "Queremos expresar nuestro más sincero agradecimiento a los patrocinadores que hacen posible este proyecto. Su apoyo nos permite seguir difundiendo la riqueza de Villa del Dique y conectar con nuestra comunidad.",
      },
      {
        type: "paragraph",
        content:
          "Te invitamos a ser parte de este viaje digital, donde juntos construiremos un espacio de encuentro, información y apoyo para todos los que aman Villa del Dique. **¡Bienvenidos!**",
      },
    ],
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

