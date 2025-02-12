import Head from "next/head"

export default function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Villa del Dique Digital",
    image: "https://villadeldique.com.ar/logo-villa-del-dique.png",
    url: "https://villadeldique.com.ar",
    telephone: "+54 9 3546 123456",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Principal 123",
      addressLocality: "Villa del Dique",
      addressRegion: "Córdoba",
      postalCode: "5862",
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: -32.1833,
      longitude: -64.6833,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/villadeldiquedigital",
      "https://www.instagram.com/villadeldiquedigital",
      "https://twitter.com/villadeldiquedigital",
    ],
    description:
      "Villa del Dique Digital es tu portal online para descubrir las últimas noticias, eventos, negocios y lugares turísticos en Villa del Dique, Córdoba.",
  }

  return (
    <Head>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </Head>
  )
}

