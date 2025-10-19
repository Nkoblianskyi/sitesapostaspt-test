"use client"

import { useState, useEffect } from "react"
import { X, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AgeRestrictionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AgeRestrictionModal({ isOpen, onClose }: AgeRestrictionModalProps) {
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
                <AlertTriangle className="h-6 w-6 text-black" strokeWidth={4} />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight uppercase">Verificação</h2>
                <p className="text-sm font-black text-yellow-400 mt-1 tracking-widest">⚠️ OBRIGATÓRIO 18+</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-yellow-400 transition-colors p-1 border-2 border-white hover:border-yellow-400"
              aria-label="Fechar verificação de idade"
            >
              <X className="h-5 w-5" strokeWidth={3} />
            </button>
          </div>
        </div>

        <div className="p-6 sm:p-8 bg-white">
          <div className="border-l-4 border-yellow-400 pl-4 mb-6 bg-yellow-50 py-3">
            <p className="font-black text-lg text-black uppercase tracking-tight">
              Este website é exclusivamente para maiores de 18 anos.
            </p>
          </div>

          <div className="text-sm md:text-base text-black space-y-4 leading-relaxed font-medium">
            <p>
              Ao prosseguir, confirma inequivocamente que cumpre este requisito essencial de idade e que compreende os
              riscos associados às apostas desportivas.
            </p>
            <p>
              As apostas devem ser sempre encaradas como entretenimento. Nunca aposte com fundos que não pode perder
              confortavelmente.
            </p>
            <p>
              Se está a enfrentar desafios relacionados com o jogo, procure assistência imediata através da{" "}
              <a
                href="https://jogoresponsavel.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-yellow-600 font-black underline decoration-4 decoration-yellow-400"
              >
                Linha Jogo Responsável
              </a>{" "}
              ou outras organizações de apoio.
            </p>
          </div>

          <div className="mt-8 pt-6 border-t-4 border-black">
            <Button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-yellow-400 to-yellow-300 hover:from-yellow-300 hover:to-yellow-400 text-black font-black py-4 px-8 text-base uppercase tracking-wide border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] transition-all"
            >
              ✓ Confirmo Ter 18+ Anos
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
