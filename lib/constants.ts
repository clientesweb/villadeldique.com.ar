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
    image: "/hero-villa-del-dique-lago.jpg",
    fullContent: "Villa del Dique es un lugar lleno de historia, naturaleza y cultura. Ahora, con este nuevo proyecto digital, queremos acercarte aún más a la esencia de nuestra localidad. **Villa del Dique Digital** nace con la misión de informar, destacar y conectar a la comunidad con noticias positivas, turismo, gastronomía, negocios locales y cultura.",

**Nuestra Misión**

En un mundo donde la información fluye rápidamente, buscamos ofrecer un espacio confiable donde puedas encontrar lo mejor de Villa del Dique. Queremos ser el puente entre vecinos, emprendedores, turistas y amantes de este rincón de Córdoba, brindando contenido que inspire y sume valor a nuestra comunidad.

**¿Qué Encontrarás Aquí?**

**Noticias Positivas:** Historias que destacan el crecimiento, el esfuerzo y los logros de nuestra comunidad.
[IMAGE:/images/centro-cultural-fachada.jpg] // Vista panorámica del embalse al atardecer

**Turismo y Naturaleza:** Recorremos juntos los rincones más bellos de Villa del Dique, desde el embalse hasta los senderos naturales.
[IMAGE:/images/centro-cultural-fachada.jpg] // Vista panorámica del embalse al atardecer

**Gastronomía Local:** Descubrimos los sabores únicos de nuestra zona, recomendando restaurantes, recetas y experiencias gastronómicas.
[IMAGE:/images/centro-cultural-fachada.jpg] // Platos típicos

**Negocios y Emprendimientos:** Damos visibilidad a los comercios y proyectos que hacen crecer nuestra localidad.
[IMAGE:/images/centro-cultural-fachada.jpg] // Emprendedores locales presentando sus productos

**Cultura y Tradiciones:** Celebramos nuestra identidad a través de eventos, historia y manifestaciones artísticas.
[IMAGE:/images/centro-cultural-fachada.jpg] // Evento cultural con música y danzas tradicionales

**Una Comunidad Conectada**

Este proyecto también se extiende a nuestras redes sociales, donde compartimos contenido exclusivo, interactuamos con los vecinos y promovemos el desarrollo local. Síguenos en Instagram y Facebook para estar al día con todo lo que sucede en Villa del Dique.

Agradecimiento a **Nuestros Patrocinadores**

Queremos expresar nuestro más sincero agradecimiento a los patrocinadores que hacen posible este proyecto. Su apoyo nos permite seguir difundiendo la riqueza de Villa del Dique y conectar con nuestra comunidad.

Te invitamos a ser parte de este viaje digital, donde juntos construiremos un espacio de encuentro, información y apoyo para todos los que aman Villa del Dique. **¡Bienvenidos!**
",
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

