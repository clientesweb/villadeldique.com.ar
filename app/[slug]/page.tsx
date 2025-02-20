"use client"

import type React from "react"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Facebook, Twitter, Linkedin, Share2, ArrowRight, Calendar, Clock, Tag, Mail } from "lucide-react"
import Link from "next/link"
import Footer from "@/components/footer"
import { CATEGORIES, ARTICLES } from "@/lib/constants"
import { ARTICLES_VARIOS } from "@/lib/articles"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"

interface Article {
  id: number
  slug: string
  title: string
  description: string
  image: string
  category: string
  author: string
  date: string
  sections: {
    type: "paragraph" | "image" | "subtitle" | "list"
    content: string
    items?: string[]
    caption?: string
  }[]
  subtitle?: string
}

export default function DynamicPage({ params }: { params: { slug: string } }) {
  const [email, setEmail] = useState("")
  const category = CATEGORIES.find((cat) => cat.slug === params.slug)
  const article = ARTICLES.find((a) => a.slug === params.slug) || ARTICLES_VARIOS.find((a) => a.slug === params.slug)

  if (!category && !article) {
    notFound()
  }

  const isArticle = !!article

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Subscribed with email:", email)
    setEmail("")
  }

  const processContent = (content: string) => {
    const parts = content.split(/(\[IMAGE:\/[^\]]+\])/)
    return parts.map((part, index) => {
      if (part.startsWith("[IMAGE:/")) {
        const imagePath = part.slice(7, -1)
        return (
          <figure key={index} className="my-8">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src={imagePath || "/placeholder.svg"}
                alt="Imagen del artículo"
                layout="fill"
                objectFit="cover"
                className="transition-transform duration-300 hover:scale-105"
              />
            </div>
            <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
              {content
                .split("\n")
                .find((line) => line.includes(imagePath) && line.includes("//"))
                ?.split("//")[1]
                ?.trim()}
            </figcaption>
          </figure>
        )
      }
      return part
    })
  }

  const suggestedArticles = useMemo(() => {
    if (!isArticle) return []
    const allArticles = [...ARTICLES, ...ARTICLES_VARIOS]
    return allArticles.filter((a) => a.slug !== article!.slug && a.category === article!.category).slice(0, 3)
  }, [article, isArticle])

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
              {/* Botones de compartir */}
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
                {article.sections.map((section, index) => {
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
                })}
              </div>

              {suggestedArticles.length > 0 && (
                <div className="mt-12">
                  <h2 className="text-2xl font-bold mb-6">Artículos relacionados</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {suggestedArticles.map((suggestedArticle) => (
                      <Card
                        key={suggestedArticle.id}
                        className="overflow-hidden hover:shadow-lg transition-shadow duration-300"
                      >
                        <Image
                          src={suggestedArticle.image || "/placeholder.svg"}
                          alt={suggestedArticle.title}
                          width={400}
                          height={200}
                          className="w-full h-48 object-cover"
                        />
                        <CardContent className="p-4">
                          <h3 className="font-bold text-lg mb-2">{suggestedArticle.title}</h3>
                          <p className="text-sm text-gray-600 mb-4">{suggestedArticle.description}</p>
                          <Link
                            href={`/${suggestedArticle.slug}`}
                            className="text-secondary hover:text-secondary/90 font-medium"
                          >
                            Leer más →
                          </Link>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </article>
        <Footer />
      </>
    )
  }

  // Category page content
  const categoryArticles = [...ARTICLES, ...ARTICLES_VARIOS].filter((article) => article.category === params.slug)

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-primary/5 via-white to-primary/5">
        {/* Hero Section */}
        <section className="relative h-[60vh] bg-primary overflow-hidden">
          <Link href="/" className="absolute top-4 left-4 z-10">
            <Button variant="outline" className="bg-white/20 hover:bg-white/30 text-white">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver a Inicio
            </Button>
          </Link>
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3"
            alt={category!.name}
            layout="fill"
            objectFit="cover"
            className="opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <motion.h1
                className="text-5xl md:text-6xl font-bold mb-4 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {category!.name}
              </motion.h1>
              <motion.p
                className="text-xl text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Explora los últimos artículos y noticias sobre {category!.name.toLowerCase()} en Villa del Dique
              </motion.p>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">
          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {categoryArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  <CardHeader className="p-0">
                    <div className="relative h-48 md:h-64">
                      <Image
                        src={article.image || "/placeholder.svg"}
                        alt={article.title}
                        layout="fill"
                        objectFit="cover"
                      />
                      <div className="absolute top-0 right-0 bg-accent text-primary font-semibold px-3 py-1 m-2 rounded-full text-sm">
                        {article.category}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-6 flex-grow flex flex-col">
                    <h2 className="text-xl font-bold mb-2 text-primary">{article.title}</h2>
                    <p className="text-gray-600 mb-4 flex-grow">{article.description}</p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {article.date}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />5 min read
                      </span>
                    </div>
                    <Link
                      href={`/${article.slug}`}
                      className="text-secondary hover:text-secondary/90 font-medium flex items-center"
                    >
                      Leer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Related Categories */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-primary">Categorías Relacionadas</h2>
            <div className="flex flex-wrap gap-4">
              {CATEGORIES.filter((cat) => cat.slug !== category!.slug).map((relatedCategory) => (
                <Link key={relatedCategory.slug} href={`/${relatedCategory.slug}`}>
                  <Button variant="outline" className="rounded-full">
                    <Tag className="mr-2 h-4 w-4" />
                    {relatedCategory.name}
                  </Button>
                </Link>
              ))}
            </div>
          </section>

          {/* Newsletter Subscription */}
          <section className="bg-secondary text-white p-8 rounded-lg shadow-lg">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Suscríbete a Nuestro Boletín</h2>
              <p className="mb-6">
                Recibe las últimas noticias y actualizaciones sobre {category!.name.toLowerCase()} en Villa del Dique
                directamente en tu bandeja de entrada.
              </p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow bg-white/10 border-white/20 text-white placeholder-gray-300"
                />
                <Button type="submit" className="bg-accent hover:bg-accent/90 text-primary">
                  Suscribirse
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}

