"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SOCIAL_LINKS } from "@/lib/constants"
import Image from "next/image"
import { X, MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationClosed, setNotificationClosed] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const hasClosedNotification = localStorage.getItem("hasClosedNotification")

    if (!hasClosedNotification && !notificationClosed) {
      const timer = setTimeout(() => {
        setShowNotification(true)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [notificationClosed])

  const handleClose = () => {
    setShowNotification(false)
    setNotificationClosed(true)
    localStorage.setItem("hasClosedNotification", "true")
  }

  const buttonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  }

  const pulseVariants = {
    initial: { scale: 1, opacity: 0.5 },
    animate: {
      scale: 1.5,
      opacity: 0,
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 2,
        ease: "easeOut",
      },
    },
  }

  const notificationVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.8,
      transition: {
        duration: 0.2,
      },
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className="relative">
        <motion.div
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          className="absolute inset-0 bg-secondary rounded-full"
        />
        <motion.a
          href={SOCIAL_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block"
          variants={buttonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="relative w-16 h-16 bg-secondary rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center">
            <MessageCircle className="w-8 h-8 text-white" />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: isHovered ? 1 : 0 }}
              className="absolute -top-2 -right-2 bg-accent text-primary text-xs font-bold px-2 py-1 rounded-full"
            >
              ¡Hola!
            </motion.div>
          </div>
        </motion.a>
      </div>

      <AnimatePresence>
        {showNotification && !notificationClosed && (
          <motion.div
            className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-xl max-w-[300px] p-4"
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <button
              onClick={handleClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X size={16} />
            </button>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src="/logooficial.png"
                  alt="Villa del Dique Digital"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-primary mb-1">¿Necesitas información?</h3>
                <p className="text-sm text-gray-600 mb-2">
                  Estamos aquí para ayudarte a descubrir todo sobre Villa del Dique.
                </p>
                <p className="text-xs text-gray-500">Respuesta inmediata vía WhatsApp</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

