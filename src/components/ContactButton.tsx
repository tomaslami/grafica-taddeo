"use client"

import type { FC } from "react"
import { motion } from "framer-motion"

interface ContactButtonProps {
  isMainRoute?: boolean
  isScrolled?: boolean
  currentColor?: string
  currentIndex?: number
  className?: string
  onClick?: () => void
}

const ContactButton: FC<ContactButtonProps> = ({ isMainRoute, isScrolled, currentColor, className, onClick }) => {
  const buttonStyle = isMainRoute
    ? isScrolled
      ? { backgroundColor: "#000000", color: "white" }
      : { backgroundColor: currentColor, color: "white" }
    : { backgroundColor: "#000000", color: "white" }

  return (
    <motion.a
      animate={buttonStyle}
      transition={{ duration: 0.5 }}
      href="https://wa.me/5491134217410"
      className={className}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault()
          onClick()
          window.open("https://wa.me/5491134217410", "_blank")
        }
      }}
    >
      Contacto
    </motion.a>
  )
}

export default ContactButton

