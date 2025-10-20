"use client"
import type { Dispatch, SetStateAction } from "react"
import { useEffect, useState } from "react"
import { Shield, CheckCircle } from "lucide-react"

interface HeroSectionProps {
  setIsAgeModalOpen: Dispatch<SetStateAction<boolean>>
  setIsAdvertiserModalOpen: Dispatch<SetStateAction<boolean>>
  setIsTopOffersModalOpen?: Dispatch<SetStateAction<boolean>>
}

export function HeroSection({
  setIsAgeModalOpen,
  setIsAdvertiserModalOpen,
  setIsTopOffersModalOpen,
}: HeroSectionProps) {
  const [lastUpdated, setLastUpdated] = useState("")

  useEffect(() => {
    const date = new Date()
    const day = date.getDate()
    const month = date.toLocaleString("pt-PT", { month: "long" })
    const year = date.getFullYear()
    setLastUpdated(`${day} de ${month} de ${year}`)
  }, [])

  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white border-b-2 border-black overflow-hidden mt-[100px] max-h-[250px] md:max-h-[350px] flex flex-col">
      <div className="bg-green-600 border-b-2 border-black flex-shrink-0">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-center gap-3">
            <div className="w-1 h-1 bg-white rounded-full"></div>
            <span className="text-xs md:text-sm font-black text-white uppercase tracking-[0.15em] font-sans">
              Edição Especial: Melhores Casas de Apostas 2025
            </span>
            <div className="w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 md:py-8 flex-1 flex items-center justify-center overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-3 font-mono">
            {lastUpdated}
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 leading-[0.95] font-display">
            <span className="block text-green-600">Análise Completa</span>
            <span className="block text-red-600 mt-1">Apostas Portugal</span>
          </h1>

          <p className="text-xs md:text-sm font-semibold mb-4 text-gray-600 uppercase tracking-[0.1em] font-sans">
            Investigação Independente • Casas Licenciadas SRIJ • Análise Profunda
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-2 border-2 border-black px-4 py-2 bg-white hover:bg-gray-50 transition-colors">
              <img src="/srij.svg" alt="Portugal" className="w-5 h-4" />
              <span className="text-xs font-bold text-black uppercase tracking-wide font-sans">Licença SRIJ</span>
            </div>

            <div className="flex items-center gap-2 border-2 border-black px-4 py-2 bg-white hover:bg-gray-50 transition-colors">
              <Shield className="w-5 h-5 text-black" strokeWidth={2.5} />
              <span className="text-xs font-bold text-black uppercase tracking-wide font-sans">Verificado</span>
            </div>

            <div className="flex items-center gap-2 border-2 border-black px-4 py-2 bg-white hover:bg-gray-50 transition-colors">
              <CheckCircle className="w-5 h-5 text-black" strokeWidth={2.5} />
              <span className="text-xs font-bold text-black uppercase tracking-wide font-sans">Independente</span>
            </div>
          </div>

          <div className="border-t border-gray-300 pt-3">
            <p className="text-[10px] md:text-xs text-gray-600 font-medium uppercase tracking-[0.1em] font-sans">
              +18 | Jogo Responsável |{" "}
              <button onClick={() => setIsAdvertiserModalOpen(true)} className="text-accent hover:underline font-bold">
                Política Editorial
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
