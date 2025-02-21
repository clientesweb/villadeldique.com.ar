import Head from "next/head"
import { SITE_CONFIG } from "@/lib/constants"

interface CategorySEOProps {
  category: {
    name: string
    slug: string
    description: string
    metaTitle: string
    metaDescription: string
    ogImage: string
  }
}

export default function CategorySEO({ category }: CategorySEOProps) {
  const canonicalUrl = `${SITE_CONFIG.url}/${category.slug}`

  return (
    <Head>
      <title>{category.metaTitle}</title>
      <meta name="description" content={category.metaDescription} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={category.metaTitle} />
      <meta property="og:description" content={category.metaDescription} />
      <meta property="og:image" content={`${SITE_CONFIG.url}${category.ogImage}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={category.metaTitle} />
      <meta name="twitter:description" content={category.metaDescription} />
      <meta name="twitter:image" content={`${SITE_CONFIG.url}${category.ogImage}`} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Theme Color */}
      <meta name="theme-color" content={SITE_CONFIG.themeColor} />
    </Head>
  )
}

