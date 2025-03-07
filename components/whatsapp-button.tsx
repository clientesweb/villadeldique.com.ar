"use client"

import { useState, useEffect } from "react"
import { SOCIAL_LINKS } from "@/lib/constants"
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

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-end">
      {showNotification && !notificationClosed && (
        <div
          className="bg-white rounded-lg shadow-xl p-4 mr-4 mb-2 max-w-[250px] sm:max-w-[300px]"
          role="alert"
          aria-live="polite"
        >
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Cerrar notificación"
          >
            <X size={16} />
          </button>
          <div className="flex items-start space-x-3">
            <Image
              src="/logooficial.png"
              alt="Villa del Dique Digital"
              width={40}
              height={40}
              className="rounded-full flex-shrink-0"
            />
            <div>
              <h3 className="font-semibold text-primary text-sm mb-1">¿Necesitas información?</h3>
              <p className="text-xs text-gray-600 mb-2">
                Estamos aquí para ayudarte a descubrir todo sobre Villa del Dique.
              </p>
              <p className="text-xs text-accent font-medium">Respuesta inmediata vía WhatsApp</p>
            </div>
          </div>
        </div>
      )}
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label="Contactar por WhatsApp"
      >
        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-secondary rounded-full shadow-lg flex items-center justify-center hover:bg-secondary/90 transition-colors">
          <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
        </div>
      </a>
    </div>
  )
}

