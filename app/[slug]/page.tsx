"use client"

import type React from "react"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Facebook, Twitter, Linkedin, Share2 } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import { CATEGORIES, ARTICLES } from "@/lib/constants"
import { ARTICLES_VARIOS } from "@/lib/articles"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const [email, setEmail] = useState("")
  const category = CATEGORIES.find((cat) => cat.slug === params.slug)

  const article = useMemo(() => {
    return [...ARTICLES, ...ARTICLES_VARIOS].find((a) => a.slug === params.slug)
  }, [params.slug])

  if (!category && !article) {
    notFound()
  }

  const isArticle = !!article

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Subscribed with email:", email)
    setEmail("")
  }

  if (isArticle && article) {
    const articleUrl = `https://villadeldique.com.ar/${article.slug}`

    return (
      <>
        <article className="min-h-screen bg-gray-50">
          <div className="relative h-[70vh] bg-black">
            <Image
              src={article.image || "/placeholder.svg"}
              alt={article.title}
              layout="fill"
              objectFit="cover"
              className="transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            <Link href="/" className="absolute top-4 left-4 z-10">
              <Button variant="outline" className="bg-white/20 hover:bg-white/30 text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver a Inicio
              </Button>
            </Link>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="container mx-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">{article.title}</h1>
                  <div className="flex items-center gap-4 text-sm text-white">
                    <span>Por {article.author}</span>
                    <span>•</span>
                    <span>{article.date}</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="container mx-auto px-4 py-12">
            <div className="max-w-3xl mx-auto">
              <div className="sticky top-4 z-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg p-2 mb-8 flex justify-center gap-2 max-w-fit mx-auto">
                <motion.div
                  className="flex gap-2"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <Button
                    onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${articleUrl}`, "_blank")}
                    size="sm"
                    variant="ghost"
                    className="rounded-full w-10 h-10 p-0 hover:bg-[#1877F2]/10 hover:text-[#1877F2] transition-colors"
                  >
                    <Facebook className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => window.open(`https://twitter.com/intent/tweet?url=${articleUrl}`, "_blank")}
                    size="sm"
                    variant="ghost"
                    className="rounded-full w-10 h-10 p-0 hover:bg-[#1DA1F2]/10 hover:text-[#1DA1F2] transition-colors"
                  >
                    <Twitter className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => window.open(`https://www.linkedin.com/shareArticle?url=${articleUrl}`, "_blank")}
                    size="sm"
                    variant="ghost"
                    className="rounded-full w-10 h-10 p-0 hover:bg-[#0A66C2]/10 hover:text-[#0A66C2] transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                  <Button
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: article.title,
                          text: article.description,
                          url: articleUrl,
                        })
                      } else {
                        alert("Compartir no está soportado en este navegador")
                      }
                    }}
                    size="sm"
                    variant="ghost"
                    className="rounded-full w-10 h-10 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </motion.div>
              </div>

              <div className="prose prose-lg max-w-none">
                {article.subtitle && <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-800">{article.subtitle}</h2>}
                {article.fullContent ? (
                  <div className="space-y-6">
                    {article.fullContent.split("\n\n").map((paragraph, index) => (
                      <div key={index}>
                        {paragraph.startsWith("##") ? (
                          <h2 className="text-2xl font-bold mt-8 mb-4">{paragraph.replace("##", "").trim()}</h2>
                        ) : paragraph.startsWith("[IMAGE:") ? (
                          <figure className="my-8">
                            <Image
                              src={paragraph.match(/\[IMAGE:(.*?)\]/)?.[1] || "/placeholder.svg"}
                              alt="Imagen del artículo"
                              width={800}
                              height={400}
                              layout="responsive"
                              className="rounded-lg"
                            />
                            <figcaption className="text-center text-sm text-gray-500 mt-2">
                              {paragraph.split("//")[1]?.trim()}
                            </figcaption>
                          </figure>
                        ) : (
                          <p>{paragraph}</p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  article.sections.map((section, index) => {
                    switch (section.type) {
                      case "paragraph":
                        return (
                          <p
                            key={index}
                            dangerouslySetInnerHTML={{
                              __html: section.content.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                            }}
                          />
                        )
                      case "image":
                        return (
                          <figure key={index} className="my-8">
                            <Image
                              src={section.content || "/placeholder.svg"}
                              alt={section.caption || "Imagen del artículo"}
                              width={800}
                              height={400}
                              layout="responsive"
                              className="rounded-lg"
                            />
                            {section.caption && (
                              <figcaption className="text-center text-sm text-gray-500 mt-2">
                                {section.caption}
                              </figcaption>
                            )}
                          </figure>
                        )
                      case "subtitle":
                        return (
                          <h2 key={index} className="text-2xl font-bold mt-8 mb-4 text-gray-800">
                            {section.content}
                          </h2>
                        )
                      case "list":
                        return (
                          <ul key={index}>
                            {section.items?.map((item, itemIndex) => (
                              <li
                                key={itemIndex}
                                dangerouslySetInnerHTML={{
                                  __html: item.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"),
                                }}
                              />
                            ))}
                          </ul>
                        )
                      default:
                        return null
                    }
                  })
                )}
              </div>

              {/* Artículos relacionados y formulario de suscripción aquí */}
            </div>
          </div>
        </article>
        <Footer />
      </>
    )
  }

  // Contenido para la página de categoría
  return (
    <>
      {/* Contenido de la página de categoría aquí */}
      <Footer />
    </>
  )
}

