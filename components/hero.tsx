import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <Image
        src="/hero-villa-del-dique-lago.jpg"
        alt="Villa del Dique Lago"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-primary/50 z-10" />
      <div className="relative z-20 text-white text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in-up">
          Villa del Dique
          <span className="block text-accent animate-pulse">Digital</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
          Descubre todo lo que nuestra hermosa ciudad tiene para ofrecer
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-600">
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-lg px-8 py-6 rounded-full transition-transform hover:scale-105"
          >
            Explorar Villa del Dique
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 rounded-full transition-transform hover:scale-105"
          >
            Conoce más
          </Button>
        </div>
      </div>
    </div>
  )
}

