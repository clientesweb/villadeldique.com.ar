export interface ArticleSection {
  type: "paragraph" | "image" | "subtitle" | "list"
  content: string
  items?: string[]
  caption?: string
}

export interface Article {
  id: number
  slug: string
  title: string
  description: string
  image: string
  category: string
  date: string
  author: string
  sections: ArticleSection[]
  subtitle?: string
  fullContent?: string
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
  whatsapp: "https://wa.me/5493546123456", // Replace with the correct WhatsApp number
}

export const CONTACT_INFO = {
  email: "info@villadeldique.com.ar",
  phone: "+54 9 3546 123456",
  whatsapp: "+54 9 3546 123456",
}

export const CATEGORIES = [
  {
    name: "Noticias",
    slug: "noticias",
    description: "Mantente al día con las últimas noticias y acontecimientos de Villa del Dique.",
    metaTitle: "Noticias de Villa del Dique | Últimos Acontecimientos",
    metaDescription:
      "Descubre las últimas noticias y eventos de Villa del Dique. Mantente informado sobre la actualidad local, eventos culturales y más.",
    ogImage: "/images/og-noticias.jpg",
  },
  {
    name: "Turismo",
    slug: "turismo",
    description: "Explora los mejores lugares turísticos y actividades en Villa del Dique.",
    metaTitle: "Turismo en Villa del Dique | Guía de Atracciones y Actividades",
    metaDescription:
      "Descubre los mejores lugares para visitar en Villa del Dique. Guía completa de atracciones turísticas, actividades y experiencias únicas.",
    ogImage: "/images/og-turismo.jpg",
  },
  {
    name: "Gastronomía",
    slug: "gastronomia",
    description: "Descubre la rica oferta culinaria y los mejores restaurantes de Villa del Dique.",
    metaTitle: "Gastronomía en Villa del Dique | Sabores Locales y Restaurantes",
    metaDescription:
      "Explora la escena gastronómica de Villa del Dique. Encuentra los mejores restaurantes, platos típicos y experiencias culinarias únicas.",
    ogImage: "/images/og-gastronomia.jpg",
  },
  {
    name: "Cultura",
    slug: "cultura",
    description: "Sumérgete en la rica cultura y tradiciones de Villa del Dique.",
    metaTitle: "Cultura en Villa del Dique | Tradiciones y Eventos Culturales",
    metaDescription:
      "Descubre la vibrante escena cultural de Villa del Dique. Eventos artísticos, festivales, historia local y más.",
    ogImage: "/images/og-cultura.jpg",
  },
  {
    name: "Negocios",
    slug: "negocios",
    description: "Información sobre la economía local y oportunidades de negocios en Villa del Dique.",
    metaTitle: "Negocios en Villa del Dique | Oportunidades y Economía Local",
    metaDescription:
      "Explora el panorama empresarial de Villa del Dique. Oportunidades de inversión, emprendimientos locales y desarrollo económico.",
    ogImage: "/images/og-negocios.jpg",
  },
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
        content: "En un mundo donde la información fluye rápidamente",
      },
      {
        type: "paragraph",
        content:
          "Buscamos ofrecer un espacio confiable donde puedas encontrar lo mejor de Villa del Dique. Queremos ser el puente entre vecinos, emprendedores, turistas y amantes de este rincón de Córdoba, brindando contenido que inspire y sume valor a nuestra comunidad.",
      },
      {
        type: "subtitle",
        content: "¿Qué Encontrarás Aquí?",
      },
      {
        type: "paragraph",
        content:
          "**Noticias Positivas:** Historias que destacan el crecimiento, el esfuerzo y los logros de nuestra comunidad.",
      },
      {
        type: "image",
        content: "/images/noticias-positivas.jpg",
        caption: "Celebración comunitaria en Villa del Dique",
      },
      {
        type: "paragraph",
        content:
          "**Turismo y Naturaleza:** Recorremos juntos los rincones más bellos de Villa del Dique, desde el embalse hasta los senderos naturales.",
      },
      {
        type: "image",
        content: "/images/embalse-atardecer.jpg",
        caption: "Vista panorámica del embalse al atardecer",
      },
      {
        type: "paragraph",
        content:
          "**Gastronomía Local:** Descubrimos los sabores únicos de nuestra zona, recomendando restaurantes, recetas y experiencias gastronómicas.",
      },
      {
        type: "image",
        content: "/images/platos-tipicos.jpg",
        caption: "Platos típicos de la gastronomía local",
      },
      {
        type: "paragraph",
        content:
          "**Negocios y Emprendimientos:** Damos visibilidad a los comercios y proyectos que hacen crecer nuestra localidad.",
      },
      {
        type: "image",
        content: "/images/emprendedores-locales.jpg",
        caption: "Emprendedores locales presentando sus productos",
      },
      {
        type: "paragraph",
        content:
          "**Cultura y Tradiciones:** Celebramos nuestra identidad a través de eventos, historia y manifestaciones artísticas.",
      },
      {
        type: "image",
        content: "/images/evento-cultural.jpg",
        caption: "Evento cultural con música y danzas tradicionales",
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
    subtitle: "Bienvenidos a una Nueva Era Digital",
  },
  // ... (otros artículos si los hay)
]

export const SITE_CONFIG = {
  name: "Villa del Dique Digital",
  description: "Tu portal digital para descubrir Villa del Dique",
  url: "https://villadeldique.com.ar",
  ogImage: "https://villadeldique.com.ar/og-image.jpg",
  themeColor: BRAND_COLORS.primary,
  keywords: ["Villa del Dique", "noticias", "turismo", "gastronomía", "cultura", "negocios", "Córdoba", "Argentina"],
}

