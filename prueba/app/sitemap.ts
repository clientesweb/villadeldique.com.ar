import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.villadeldique.com.ar"

  const newsArticles = [
    {
      id: "generacion-gen-genetica-calamuchita",
      date: "2025-09-23",
    },
    {
      id: "dia-de-la-primavera",
      date: "2025-09-21",
    },
    {
      id: "dia-de-la-sanidad",
      date: "2025-09-21",
    },
    {
      id: "aca-ypf-villa-del-dique-invita-alojamientos",
      date: "2025-09-20",
    },
    {
      id: "bomberos-voluntarios-nuevo-sitio-web",
      date: "2025-09-19",
    },
    {
      id: "villa-del-dique-perla-calamuchita",
      date: "2025-09-18",
    },
    {
      id: "dia-del-profesor",
      date: "2025-09-17",
    },
    {
      id: "dia-del-psicopedagogo",
      date: "2025-09-17",
    },
    {
      id: "dia-derechos-estudiantes-secundarios",
      date: "2025-09-16",
    },
    {
      id: "dia-internacional-democracia",
      date: "2025-09-15",
    },
    {
      id: "dia-mundial-linfoma",
      date: "2025-09-15",
    },
    {
      id: "mega-feria-villa-del-dique",
      date: "2025-09-14",
    },
    {
      id: "desafio-cerro-lago",
      date: "2025-09-13",
    },
    {
      id: "inauguracion-polo-cultural-asociacion",
      date: "2025-09-12",
    },
    {
      id: "entrevista-bomberos-voluntarios",
      date: "2025-09-11",
    },
    {
      id: "campana-prevencion-incendios",
      date: "2025-09-10",
    },
    {
      id: "emprender-villa-del-dique",
      date: "2025-09-09",
    },
    {
      id: "septiembre-amarillo-prevencion",
      date: "2025-09-07",
    },
    {
      id: "inauguracion-polo-cultural",
      date: "2025-09-06",
    },
  ]

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/noticias`,
      lastModified: new Date(),
      changeFrequency: "hourly",
      priority: 0.98,
    },
    {
      url: `${baseUrl}/turismo`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/nosotros`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/suscribirse`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/contacto`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/politica-privacidad`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.4,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/licencia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.3,
    },
    ...newsArticles.map((article) => ({
      url: `${baseUrl}/noticias/${article.id}`,
      lastModified: new Date(article.date),
      changeFrequency: "daily" as const,
      priority: 0.9,
    })),
  ]
}
