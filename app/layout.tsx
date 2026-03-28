import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CustomCursor } from "@/components/custom-cursor"

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] })

export const metadata: Metadata = {
  title: "ERP integral para empresas en Colombia | 1NativoOne",
  description:
    "Unifique finanzas, inventario y facturación electrónica en un solo sistema. Prueba de 14 días. Pensado para equipos que operan con normativa colombiana y la DIAN.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={poppins.className}>
        <div className="relative flex min-h-screen flex-col">
          <CustomCursor />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
