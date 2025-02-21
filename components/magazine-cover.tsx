"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const content = {
  title: "Villa Del Dique",
  subtitle: "Digital",
  description:
    "Tu portal digital para descubrir las maravillas de Villa del Dique: historia, gastronomía, turismo y más.",
  cta: {
    text: "Explora Ahora",
    link: "#articles",
  },
}

export default function MagazineCover() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/villa-del-dique-panorama.jpg"
        alt="Villa Del Dique"
        layout="fill"
        objectFit="cover"
        quality={85}
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/80" />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4 pt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-2 tracking-tight">{content.title}</h1>
          <span className="text-3xl md:text-5xl font-bold text-accent mb-6 block">{content.subtitle}</span>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">{content.description}</p>
          <Button
            size="lg"
            className="bg-accent hover:bg-accent/90 text-primary text-lg px-8 py-4 rounded-full transition-transform hover:scale-105"
            onClick={() => document.querySelector(content.cta.link)?.scrollIntoView({ behavior: "smooth" })}
          >
            {content.cta.text}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary to-transparent" />
    </div>
  )
}

