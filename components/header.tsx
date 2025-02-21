"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { CATEGORIES } from "@/lib/constants"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
  }

  return (
    <header
      className={`fixed top-10 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-secondary shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="logo-villa-del-dique-digital.png"
              alt="Villa del Dique Digital"
              width={180}
              height={60}
              className="h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-1">
            {CATEGORIES.map((category) => (
              <div
                key={category.slug}
                className="relative group"
                onMouseEnter={() => setActiveDropdown(category.slug)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={`/${category.slug}`}
                  className={`text-white hover:text-accent font-medium transition-colors px-3 py-2 rounded-md flex items-center ${
                    pathname.startsWith(`/${category.slug}`) ? "text-accent" : ""
                  }`}
                >
                  {category.name}
                  <ChevronDown className="ml-1 h-4 w-4 transition-transform group-hover:rotate-180" />
                </Link>
                <AnimatePresence>
                  {activeDropdown === category.slug && (
                    <motion.div
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={menuVariants}
                      className="absolute top-full left-0 bg-white shadow-lg rounded-md py-2 w-48"
                    >
                      <Link
                        href={`/${category.slug}/subcategoria-1`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Subcategoría 1
                      </Link>
                      <Link
                        href={`/${category.slug}/subcategoria-2`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        Subcategoría 2
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex flex-col items-center">
              <Button
                variant="outline"
                size="sm"
                className="text-white border-white hover:bg-white hover:text-secondary bg-secondary/50"
              >
                Iniciar sesión
              </Button>
              <span className="text-xs text-white mt-1">Próximamente</span>
            </div>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-primary">
              <Phone className="mr-2 h-4 w-4" />
              Contactar
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="lg:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-secondary"
          >
            <nav className="container mx-auto px-4 py-4">
              {CATEGORIES.map((category) => (
                <Link
                  key={category.slug}
                  href={`/${category.slug}`}
                  className={`block py-2 text-white hover:text-accent ${
                    pathname.startsWith(`/${category.slug}`) ? "text-accent" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <div className="mt-4 space-y-2">
                <div className="flex flex-col items-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full text-white border-white hover:bg-white hover:text-secondary bg-secondary/50"
                  >
                    Iniciar sesión
                  </Button>
                  <span className="text-xs text-white mt-1">Próximamente</span>
                </div>
                <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-primary">
                  <Phone className="mr-2 h-4 w-4" />
                  Contactar
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

