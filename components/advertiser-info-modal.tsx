"use client"

import { useState, useEffect } from "react"
import { X, Info } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4">
      <div className="relative w-full max-w-lg max-w-[95vw] max-h-[90vh] overflow-y-auto bg-white border-[6px] border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)]">
        <div className="bg-black text-white p-4 sm:p-6 border-b-6 border-yellow-400">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 p-2 border-4 border-yellow-400 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                <Info className="h-6 w-6 text-black" strokeWidth={4} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">Divulgação</h2>
                <p className="text-sm font-black text-yellow-400 mt-1 tracking-widest">ℹ️ INFORMAÇÃO IMPORTANTE</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-yellow-400 transition-colors p-1 border-2 border-white hover:border-yellow-400"
              aria-label="Fechar divulgação"
            >
              <X className="h-5 w-5" strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-white">
          <div className="text-sm md:text-base text-black space-y-4 leading-relaxed font-medium">
            <p>
              <strong className="font-black text-black">sitesapostaspt</strong> (sitesapostaspt.com) opera como um
              serviço gratuito de comparação, dedicado a ajudá-lo a descobrir plataformas de apostas respeitáveis e
              licenciadas em Portugal.
            </p>
            <p>
              Recebemos comissões das marcas apresentadas, o que pode influenciar o seu posicionamento e visibilidade no
              nosso site. No entanto, mantemos a nossa independência editorial.
            </p>
            <p>
              Todos os sites apresentados são rigorosamente licenciados pelo{" "}
              <strong className="font-black text-black">SRIJ</strong> (Serviço de Regulação e Inspeção de Jogos). Embora
              nos esforcemos pela precisão absoluta, não podemos ser responsabilizados por imprecisões inadvertidas.
            </p>

            <div className="bg-gradient-to-br from-yellow-400 to-yellow-300 text-black p-4 border-4 border-black mt-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <p className="text-xs font-bold leading-relaxed">
                <strong className="text-black uppercase tracking-wide">⚠️ Nota:</strong> Os bónus e ofertas estão
                sujeitos a alterações. Leia sempre os termos e condições no website do operador antes de reclamar
                qualquer oferta.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t-4 border-black">
            <Button
              onClick={onClose}
              className="w-full bg-black hover:bg-yellow-400 text-white hover:text-black font-black py-4 px-8 text-base uppercase tracking-wide border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              ✓ Compreendido
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
