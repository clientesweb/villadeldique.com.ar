import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://www.villadeldique.com.ar"

  const newsArticles = [
    {
      id: "generacion-gen-genetica-calamuchita",
      title: "Generación GEN: la genética explicada desde Calamuchita",
      date: "2025-09-23",
      category: "Ciencia",
    },
    {
      id: "dia-de-la-primavera",
      title: "21 de septiembre: Día de la Primavera",
      date: "2025-09-21",
      category: "Efemérides",
    },
    {
      id: "dia-de-la-sanidad",
      title: "21 de septiembre: Día de la Sanidad",
      date: "2025-09-21",
      category: "Salud",
    },
    {
      id: "aca-ypf-villa-del-dique-invita-alojamientos",
      title: "ACA YPF Villa del Dique invita a los alojamientos a compartir su disponibilidad",
      date: "2025-09-20",
      category: "Turismo",
    },
    {
      id: "bomberos-voluntarios-nuevo-sitio-web",
      title: "Los Bomberos Voluntarios de Villa del Dique presentan su nuevo sitio web",
      date: "2025-09-19",
      category: "Comunidad",
    },
    {
      id: "villa-del-dique-perla-calamuchita",
      title: "Villa del Dique: la perla de Calamuchita",
      date: "2025-09-18",
      category: "Turismo",
    },
    {
      id: "dia-del-profesor",
      title: "17 de septiembre: Día del Profesor",
      date: "2025-09-17",
      category: "Educación",
    },
    {
      id: "dia-del-psicopedagogo",
      title: "17 de septiembre: Día del Psicopedagogo",
      date: "2025-09-17",
      category: "Educación",
    },
    {
      id: "dia-derechos-estudiantes-secundarios",
      title: "16 de septiembre: Día de los Derechos de los Estudiantes Secundarios",
      date: "2025-09-16",
      category: "Sociedad",
    },
    {
      id: "dia-internacional-democracia",
      title: "15 de septiembre: Día Internacional de la Democracia",
      date: "2025-09-15",
      category: "Sociedad",
    },
    {
      id: "dia-mundial-linfoma",
      title: "15 de septiembre: Día Mundial de la Concientización sobre el Linfoma",
      date: "2025-09-15",
      category: "Salud",
    },
    {
      id: "mega-feria-villa-del-dique",
      title: "Villa del Dique vive su primera Mega Feria en el Centro Cultural Pato Carret",
      date: "2025-09-14",
      category: "Eventos",
    },
    {
      id: "desafio-cerro-lago",
      title: "Desafío Cerro Lago: una experiencia única en Villa del Dique",
      date: "2025-09-13",
      category: "Deportes",
    },
    {
      id: "inauguracion-polo-cultural-asociacion",
      title: "Inauguración del Polo Cultural de la Asociación Villa del Dique",
      date: "2025-09-12",
      category: "Cultura",
    },
    {
      id: "entrevista-bomberos-voluntarios",
      title: "Entrevista exclusiva con los Bomberos Voluntarios de Villa del Dique",
      date: "2025-09-11",
      category: "Comunidad",
    },
    {
      id: "campana-prevencion-incendios",
      title: "Campaña de prevención de incendios en Villa del Dique",
      date: "2025-09-10",
      category: "Medio Ambiente",
    },
    {
      id: "emprender-villa-del-dique",
      title: "Emprender en el Paraíso: Historias que laten en Villa del Dique",
      date: "2025-09-09",
      category: "Emprendimientos",
    },
    {
      id: "septiembre-amarillo-prevencion",
      title: "Septiembre Amarillo: prevenir es acompañar",
      date: "2025-09-07",
      category: "Salud",
    },
    {
      id: "inauguracion-polo-cultural",
      title: "Inauguración del Polo Cultural de Villa del Dique",
      date: "2025-09-06",
      category: "Cultura",
    },
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
  ${newsArticles
    .map(
      (article) => `
  <url>
    <loc>${baseUrl}/noticias/${article.id}</loc>
    <news:news>
      <news:publication>
        <news:name>Villa del Dique Digital</news:name>
        <news:language>es</news:language>
      </news:publication>
      <news:publication_date>${article.date}</news:publication_date>
      <news:title>${article.title}</news:title>
      <news:keywords>Villa del Dique, ${article.category}, noticias locales, Córdoba, Valle de Calamuchita</news:keywords>
    </news:news>
    <lastmod>${article.date}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.9</priority>
  </url>`,
    )
    .join("")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
