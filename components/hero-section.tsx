"use client"
import type { Dispatch, SetStateAction } from "react"
import { useEffect, useState } from "react"
import { Shield, CheckCircle, AlertCircle } from "lucide-react"

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
    <section className="relative bg-white border-b-4 border-black overflow-hidden mt-[140px] max-h-[250px] md:max-h-[350px] flex flex-col">
      {/* Breaking news style banner */}
      <div className="bg-accent border-b-4 border-black flex-shrink-0">
        <div className="container mx-auto px-4 py-1.5 md:py-2">
          <div className="flex items-center justify-center gap-2">
            <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" strokeWidth={3} />
            <span className="text-xs md:text-sm font-black text-black uppercase tracking-wider font-[family-name:var(--font-display)]">
              Edição Especial: Melhores Casas de Apostas 2025
            </span>
            <AlertCircle className="w-4 h-4 md:w-5 md:h-5 text-white flex-shrink-0" strokeWidth={3} />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-3 md:py-4 flex-1 flex items-center justify-center overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          {/* Date stamp */}
          <div className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 border-b-2 border-black pb-1 inline-block px-3">
            {lastUpdated}
          </div>

          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black mb-2 md:mb-3 leading-none font-[family-name:var(--font-display)] uppercase tracking-tight">
            <span className="block text-black">Análise Completa</span>
            <span className="block text-accent">Apostas Portugal</span>
          </h1>

          <p className="text-xs md:text-sm font-bold mb-2 md:mb-3 text-foreground uppercase tracking-wide font-serif border-t-2 border-b-2 border-black py-1.5">
            Investigação Independente • Casas Licenciadas SRIJ • Análise Profunda
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-2">
            <div className="flex items-center gap-1.5 border-2 border-black px-2 py-1 bg-white">
              <img src="/srij.svg" alt="Portugal" className="w-4 h-3 md:w-5 md:h-4 border border-black" />
              <span className="text-[10px] md:text-xs font-black text-black uppercase tracking-wider">
                Licença SRIJ
              </span>
            </div>

            <div className="flex items-center gap-1.5 border-2 border-black px-2 py-1 bg-white">
              <Shield className="w-4 h-4 md:w-5 md:h-5 text-black" strokeWidth={2.5} />
              <span className="text-[10px] md:text-xs font-black text-black uppercase tracking-wider">Verificado</span>
            </div>

            <div className="flex items-center gap-1.5 border-2 border-black px-2 py-1 bg-white">
              <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-black" strokeWidth={2.5} />
              <span className="text-[10px] md:text-xs font-black text-black uppercase tracking-wider">
                Independente
              </span>
            </div>
          </div>

          <div className="border-t-2 border-black pt-1.5">
            <p className="text-[10px] md:text-xs text-muted-foreground font-bold uppercase tracking-wide">
              +18 | Jogo Responsável |{" "}
              <button onClick={() => setIsAdvertiserModalOpen(true)} className="text-accent hover:underline font-black">
                Política Editorial
              </button>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
