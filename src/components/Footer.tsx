import Image from 'next/image'
import Link from 'next/link'
import { Building2, Clock, Home, Instagram, Mail, Phone, Printer } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo y Dirección */}
          <div className="space-y-4">
            <Link href="/" className="block relative w-40 h-12">
              <Image
                src="/logo.png"
                alt="Gráfica Taddeo"
                fill
                className="object-contain"
                priority
              />
            </Link>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Charrúa 3480, CABA</p>
              <p>Av Juan de Garay 3950, CABA</p>
              <p className="text-gray-400">
                Desarrollado por <Link href="https://synera.com.ar/" className="text-[#00B6FF] hover:text-[#00B6FF]/90">Synera</Link>
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium mb-4">Accesos directos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                  <Home className="w-4 h-4 text-sky-400" />
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/#servicios" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                  <Printer className="w-4 h-4 text-sky-400" />
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/#plantas" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-sky-400" />
                  Plantas
                </Link>
              </li>
              <li>
                <Link href="/#historia" className="text-gray-600 hover:text-gray-900 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-sky-400" />
                  Historia
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-medium mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="mailto:info@graficataddeo.com.ar"
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Mail className="w-4 h-4 mr-2 text-[#00B6FF]" />
                  info@graficataddeo.com.ar
                </Link>
              </li>
              <li>
                <Link
                  href="tel:49228993"
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#00B6FF]" />
                  49228993 (Boedo)
                </Link>
              </li>
              <li>
                <Link
                  href="tel:49186300"
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Phone className="w-4 h-4 mr-2 text-[#00B6FF]" />
                  49186300 (Pompeya)
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/grafica_taddeo/"
                  className="flex items-center text-gray-600 hover:text-gray-900"
                >
                  <Instagram className="w-4 h-4 mr-2 text-[#00B6FF]" />
                  @grafica_taddeo
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

