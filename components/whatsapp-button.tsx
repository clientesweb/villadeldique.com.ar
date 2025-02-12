"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X, MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const [showNotification, setShowNotification] = useState(false)
  const [notificationClosed, setNotificationClosed] = useState(false)

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
    hover: { scale: 1.1 },
    tap: { scale: 0.9 },
  }

  const notificationVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.a
        href={`https://wa.me/593987167782`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
      >
        <Image src="/whatsapp-logo.png" alt="WhatsApp" width={32} height={32} className="filter brightness-0 invert" />
      </motion.a>
      <AnimatePresence>
        {showNotification && !notificationClosed && (
          <motion.div
            className="absolute bottom-full right-0 mb-2 bg-white text-black p-4 rounded-lg shadow-md max-w-[250px] whitespace-normal"
            variants={notificationVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{ duration: 0.3 }}
          >
            <button onClick={handleClose} className="absolute top-1 right-1 text-gray-500 hover:text-gray-700">
              <X size={16} />
            </button>
            <div className="flex items-start">
              <MessageCircle className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <p className="text-sm font-semibold mb-1">¿Necesitas ayuda?</p>
                <p className="text-xs text-gray-600">Contáctanos por WhatsApp para obtener asistencia inmediata.</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

