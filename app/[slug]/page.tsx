"use client"

import type React from "react"

import { useState } from "react"
import { CATEGORIES } from "@/lib/constants"
import { ARTICLES_VARIOS } from "@/lib/articles"
import Footer from "@/components/footer"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowRight, Calendar, Clock, Tag, Mail, ArrowLeft } from "lucide-react"

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const [email, setEmail] = useState("")
  const category = CATEGORIES.find((cat) => cat.slug === params.slug)

  if (!category) {
    notFound()
  }

  const allArticles = [...ARTICLES_VARIOS, ...ARTICLES_VARIOS]
  const categoryArticles = allArticles.filter((article) => article.category === params.slug)

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically handle the subscription logic
    console.log("Subscribed with email:", email)
    setEmail("")
  }

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
            alt={category.name}
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
                {category.name}
              </motion.h1>
              <motion.p
                className="text-xl text-white/80 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Explora los últimos artículos y noticias sobre {category.name.toLowerCase()} en Villa del Dique
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
                        {new Date().toLocaleDateString()}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />5 min read
                      </span>
                    </div>
                    <Link
                      href={`/articulo/${article.slug}`}
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
              {CATEGORIES.filter((cat) => cat.slug !== category.slug).map((relatedCategory) => (
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
                Recibe las últimas noticias y actualizaciones sobre {category.name.toLowerCase()} en Villa del Dique
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

