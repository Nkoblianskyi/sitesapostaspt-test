import type React from "react"
import type { Metadata } from "next"
import { Anton, Inter, Teko } from "next/font/google"
import "./globals.css"

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-anton",
})

const inter = Inter({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const teko = Teko({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-teko",
})

export const metadata: Metadata = {
  title: "sitesapostaspt - Casas de Apostas Portugal 2025 | Apostas Online Licenciadas SRIJ",
  description:
    "Site de comparação independente das melhores casas de apostas licenciadas pelo SRIJ em Portugal. Análises detalhadas, bónus exclusivos e apostas desportivas seguras. Não somos uma casa de apostas.",
    
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" className={`${anton.variable} ${inter.variable} ${teko.variable} antialiased`}>
      <head>
        <meta name="referrer" content="no-referrer-when-downgrade" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta name="format-detection" content="telephone=no" />

        {/* Trust and transparency tags */}
        <meta name="author" content="sitesapostaspt" />
        <meta name="publisher" content="sitesapostaspt" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="sitesapostaspt - Site de Comparação" />
        <meta name="classification" content="Comparison Website" />
        <meta name="category" content="Sports Betting Comparison" />

        {/* Disclaimer meta */}
        <meta
          name="disclaimer"
          content="Este é um site de comparação independente. Não somos uma casa de apostas. Todos os links externos são para sites licenciados pelo SRIJ."
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
