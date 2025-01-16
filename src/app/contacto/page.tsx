import Image from "next/image"
import { ArrowLeft } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-7xl">
      <div className="mt-10">
        <Link
          href="/"
          className="inline-flex items-center text-pink-600 hover:text-pink-700"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Atrás
        </Link>
      </div>
      <div className="grid md:grid-cols-2 gap-8 items-stretch">
        <div className="flex flex-col justify-between bg-white p-6 rounded-lg  h-full">
          <h2 className="text-2xl font-bold mb-6">Contáctanos</h2>
          <form className="space-y-6 flex-grow border-[1px] p-5">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Nombre Completo
              </label>
              <Input
                id="name"
                placeholder="Escribe tu nombre completo"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="tu.email@ejemplo.com"
                className="w-full"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm mb-2">
                Teléfono
              </label>
              <Input
                id="phone"
                type="tel"
                placeholder="Ej. 2344789456"
                className="w-full"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                Mensaje
              </label>
              <Textarea
                id="message"
                placeholder="Escribe tu mensaje aquí..."
                className="min-h-[120px] resize-none"
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white"
            >
              Enviar
            </Button>
          </form>
        </div>

        <div className="relative hidden md:flex md:aspect-auto">
          <Image
            src="/contact-image.png"
            alt="Servicios de impresión"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      </div>
    </div>
  )
}

