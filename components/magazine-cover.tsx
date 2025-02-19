"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

const content = {
  title: "Villa Del Dique",
  subtitle: "Digital",
  description: "Todo lo que necesitas saber sobre nuestra comunidad: historia, gastronomía, turismo y más.",
  cta: {
    text: "Leer artículos",
    link: "#articles",
  },
}

export default function MagazineCover() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Image
        src="/images/villa-del-dique-hero.jpg"
        alt="Villa Del Dique"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-primary/50" />
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center text-white px-4">
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {content.title}
        </motion.h1>
        <motion.span
          className="text-3xl md:text-5xl font-bold text-accent mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content.subtitle}
        </motion.span>
        <motion.p
          className="text-xl md:text-2xl mb-8 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {content.description}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white text-lg px-8 py-4 rounded-full transition-transform hover:scale-105"
            onClick={() => document.querySelector(content.cta.link)?.scrollIntoView({ behavior: "smooth" })}
          >
            {content.cta.text}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

