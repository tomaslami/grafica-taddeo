import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Gráfica Taddeo",
  description: "Generated by Synera Team",
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

        {children}
      </body>
    </html>
  );
}
