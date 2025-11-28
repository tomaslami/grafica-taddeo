"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface VideoCarouselProps {
  videos: string[]
}

export default function VideoCarousel({ videos }: VideoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([])
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  // Función para cambiar al siguiente video
  const goToNextVideo = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
  }, [videos.length])

  // Efecto principal para manejar el carrusel automático (solo si hay múltiples videos)
  useEffect(() => {
    // Si solo hay un video, no configurar el carrusel
    if (videos.length <= 1) {
      return
    }

    // Limpiar intervalo anterior si existe
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    // Pausar todos los videos y resetear
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          // Reproducir el video actual
          video.currentTime = 0
          video.play().catch(() => {
            // Ignorar errores de reproducción
          })
        } else {
          // Pausar y resetear los demás
          video.pause()
          video.currentTime = 0
        }
      }
    })

    // Configurar intervalo para cambiar de video cada 10 segundos
    intervalRef.current = setInterval(() => {
      goToNextVideo()
    }, 10000) // 10 segundos

    // Limpiar al desmontar o cambiar
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [currentIndex, goToNextVideo, videos.length])

  if (videos.length <= 1) {
    return (
      <div className="w-full rounded-lg shadow-lg">
        <video
          className="w-full h-[400px] sm:h-[500px] md:h-[500px] object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={videos[0] || ""} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    )
  }

  return (
    <div className="w-full rounded-lg shadow-lg relative">
      {videos.map((video, index) => (
        <video
          key={index}
          ref={(el) => {
            videoRefs.current[index] = el
          }}
          className={`w-full h-[400px] sm:h-[500px] md:h-[500px] object-cover ${
            index === currentIndex ? "block" : "hidden"
          }`}
          autoPlay={index === currentIndex}
          muted
          playsInline
          onEnded={() => {
            if (index === currentIndex) {
              setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length)
            }
          }}
        >
          <source src={video || ""} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      ))}
    </div>
  )
}

