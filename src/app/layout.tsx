import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gráfica Taddeo",
  description: "Somos una empresa de impresión y comunicación visual que se dedica a la creación de piezas gráficas de alta calidad.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
