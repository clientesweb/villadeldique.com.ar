import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://www.villadeldique.com.ar"

  const newsArticles = [
    {
      id: "generacion-gen-genetica-calamuchita",
      title: "Generación GEN: la genética explicada desde Calamuchita",
      description:
        "Descubre cómo la genética se explica de manera accesible desde el Valle de Calamuchita con Generación GEN, un proyecto educativo innovador.",
      date: "2025-09-23T10:00:00.000Z",
      category: "Ciencia",
    },
    {
      id: "dia-de-la-primavera",
      title: "21 de septiembre: Día de la Primavera",
      description:
        "Celebramos la llegada de la primavera en Villa del Dique con actividades especiales y el florecimiento de nuestra naturaleza.",
      date: "2025-09-21T12:00:00.000Z",
      category: "Efemérides",
    },
    {
      id: "dia-de-la-sanidad",
      title: "21 de septiembre: Día de la Sanidad",
      description: "Reconocemos la labor de los trabajadores de la salud en Villa del Dique en su día especial.",
      date: "2025-09-21T10:00:00.000Z",
      category: "Salud",
    },
    {
      id: "villa-del-dique-perla-calamuchita",
      title: "Villa del Dique: La Perla de Calamuchita",
      description:
        "Descubre por qué Villa del Dique es conocida como la Perla de Calamuchita, un destino turístico único en Córdoba.",
      date: "2025-09-20T15:00:00.000Z",
      category: "Turismo",
    },
    {
      id: "septiembre-amarillo-prevencion",
      title: "Septiembre Amarillo: Mes de la Prevención del Suicidio",
      description:
        "Villa del Dique se suma a la campaña mundial de prevención del suicidio durante el mes de septiembre.",
      date: "2025-09-19T14:00:00.000Z",
      category: "Salud Mental",
    },
    {
      id: "mega-feria-villa-del-dique",
      title: "Mega Feria en Villa del Dique",
      description:
        "Gran evento comercial y gastronómico que reúne a emprendedores locales y visitantes en Villa del Dique.",
      date: "2025-09-18T16:00:00.000Z",
      category: "Eventos",
    },
    {
      id: "inauguracion-polo-cultural",
      title: "Inauguración del Polo Cultural",
      description: "Villa del Dique inaugura su nuevo espacio cultural para promover el arte y la cultura local.",
      date: "2025-09-17T18:00:00.000Z",
      category: "Cultura",
    },
    {
      id: "inauguracion-polo-cultural-asociacion",
      title: "Inauguración del Polo Cultural de la Asociación",
      description:
        "La Asociación de Villa del Dique presenta su nuevo polo cultural con actividades para toda la familia.",
      date: "2025-09-16T17:00:00.000Z",
      category: "Cultura",
    },
    {
      id: "entrevista-bomberos-voluntarios",
      title: "Entrevista a Bomberos Voluntarios",
      description:
        "Conoce el trabajo y dedicación de los Bomberos Voluntarios de Villa del Dique en esta entrevista exclusiva.",
      date: "2025-09-15T13:00:00.000Z",
      category: "Seguridad",
    },
    {
      id: "emprender-villa-del-dique",
      title: "Emprender en Villa del Dique",
      description:
        "Oportunidades de negocio y emprendimiento en Villa del Dique, un destino con gran potencial económico.",
      date: "2025-09-14T11:00:00.000Z",
      category: "Negocios",
    },
    {
      id: "dia-mundial-linfoma",
      title: "15 de septiembre: Día Mundial del Linfoma",
      description: "Concientización sobre el linfoma y la importancia del diagnóstico temprano en Villa del Dique.",
      date: "2025-09-15T09:00:00.000Z",
      category: "Salud",
    },
    {
      id: "dia-internacional-democracia",
      title: "15 de septiembre: Día Internacional de la Democracia",
      description:
        "Reflexionamos sobre la importancia de la democracia y la participación ciudadana en Villa del Dique.",
      date: "2025-09-15T08:00:00.000Z",
      category: "Política",
    },
    {
      id: "dia-derechos-estudiantes-secundarios",
      title: "13 de septiembre: Día de los Derechos de los Estudiantes Secundarios",
      description: "Celebramos los derechos de los estudiantes secundarios y su importancia en la educación local.",
      date: "2025-09-13T10:00:00.000Z",
      category: "Educación",
    },
    {
      id: "dia-del-psicopedagogo",
      title: "17 de septiembre: Día del Psicopedagogo",
      description: "Reconocemos la labor de los psicopedagogos en el desarrollo educativo de Villa del Dique.",
      date: "2025-09-17T09:00:00.000Z",
      category: "Educación",
    },
    {
      id: "dia-del-profesor",
      title: "17 de septiembre: Día del Profesor",
      description:
        "Homenaje a los profesores de Villa del Dique en su día especial, reconociendo su dedicación educativa.",
      date: "2025-09-17T10:00:00.000Z",
      category: "Educación",
    },
    {
      id: "desafio-cerro-lago",
      title: "Desafío Cerro Lago",
      description:
        "Evento deportivo y turístico que combina aventura y naturaleza en los paisajes únicos de Villa del Dique.",
      date: "2025-09-12T07:00:00.000Z",
      category: "Deportes",
    },
    {
      id: "campana-prevencion-incendios",
      title: "Campaña de Prevención de Incendios",
      description:
        "Villa del Dique lanza campaña de prevención de incendios forestales para proteger el medio ambiente.",
      date: "2025-09-11T14:00:00.000Z",
      category: "Medio Ambiente",
    },
    {
      id: "bomberos-voluntarios-nuevo-sitio-web",
      title: "Bomberos Voluntarios estrenan nuevo sitio web",
      description:
        "Los Bomberos Voluntarios de Villa del Dique presentan su nueva plataforma digital para mejor comunicación.",
      date: "2025-09-10T16:00:00.000Z",
      category: "Tecnología",
    },
    {
      id: "aca-ypf-villa-del-dique-invita-alojamientos",
      title: "ACA e YPF Villa del Dique invita a alojamientos",
      description:
        "Promoción especial de ACA e YPF para alojamientos en Villa del Dique, facilitando el turismo local.",
      date: "2025-09-09T12:00:00.000Z",
      category: "Turismo",
    },
    // Add more articles as needed
  ]

  const rssItems = newsArticles
    .map(
      (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.description}]]></description>
      <link>${baseUrl}/noticias/${article.id}</link>
      <guid isPermaLink="true">${baseUrl}/noticias/${article.id}</guid>
      <pubDate>${new Date(article.date).toUTCString()}</pubDate>
      <category><![CDATA[${article.category}]]></category>
      <source url="${baseUrl}/feed.xml">Villa del Dique Digital</source>
    </item>`,
    )
    .join("")

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Villa del Dique Digital</title>
    <description>Portal oficial de noticias, turismo y negocios de Villa del Dique, Córdoba, Argentina</description>
    <link>${baseUrl}</link>
    <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml"/>
    <language>es-AR</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <managingEditor>villadeldiquedigital@gmail.com (Villa del Dique Digital)</managingEditor>
    <webMaster>villadeldiquedigital@gmail.com (Villa del Dique Digital)</webMaster>
    <category>News</category>
    <category>Local News</category>
    <category>Tourism</category>
    <category>Business</category>
    <ttl>60</ttl>
    <image>
      <url>${baseUrl}/images/logo-villa-del-dique-digital.webp</url>
      <title>Villa del Dique Digital</title>
      <link>${baseUrl}</link>
      <width>400</width>
      <height>200</height>
    </image>
    ${rssItems}
  </channel>
</rss>`

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
