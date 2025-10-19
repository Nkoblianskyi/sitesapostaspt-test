"use client"

import Link from "next/link"
import { Newspaper } from "lucide-react"
import { useState, useEffect } from "react"

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-200 bg-white border-b-4 border-black ${
        scrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="border-b-2 border-black bg-black">
        <div className="container mx-auto px-4 py-1">
          <div className="flex items-center justify-between text-[10px] font-bold text-white uppercase tracking-widest">
            <span>PORTUGAL</span>
            <span>APOSTAS DESPORTIVAS</span>
            <span>2025</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto flex items-center justify-center h-20 px-6 relative bg-white">
        <Link href="/" className="flex items-center gap-3">
          <div className="h-12 w-12 bg-black border-4 border-black flex items-center justify-center flex-shrink-0">
            <Newspaper className="h-7 w-7 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex flex-col">
            <span className="text-3xl md:text-4xl font-black leading-none text-black tracking-tighter font-[family-name:var(--font-display)]">
              sitesapostaspt
            </span>
            <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-black border-t border-black pt-0.5 mt-0.5">
              Revista Independente de Apostas
            </span>
          </div>
          {/* </CHANGE> */}
        </Link>
      </div>

      <div className="border-t-2 border-black bg-black">
        <div className="container mx-auto px-4 py-1">
          <div className="text-center text-[9px] font-bold text-white uppercase tracking-widest">
            Licenciado SRIJ • Jogo Responsável • +18
          </div>
        </div>
      </div>
    </header>
  )
}
