import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["tudominio.vercel.app"], // Agrega el dominio de tu despliegue en Vercel
    formats: ["image/webp", "image/avif"],
    unoptimized: false, // Asegura que Next.js optimice las imágenes
  },
  trailingSlash: true, // Puede ayudar con rutas incorrectas en producción
  reactStrictMode: true, // Mantiene el código más seguro y detecta errores
  swcMinify: true, // Optimización del código
  output: "standalone", // Asegura que la app funcione bien en diferentes entornos
};

export default nextConfig;
