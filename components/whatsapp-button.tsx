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
    <div className="fixed bottom-4 right-4 z-50">
      <a
        href={SOCIAL_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label="Contactar por WhatsApp"
      >
        <div className="w-16 h-16 bg-secondary rounded-full shadow-lg flex items-center justify-center">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
      </a>

      {showNotification && !notificationClosed && (
        <div
          className="absolute bottom-full right-0 mb-4 bg-white rounded-lg shadow-xl max-w-[300px] p-4"
          role="alert"
          aria-live="polite"
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
        </div>
      )}
    </div>
  )
}

