"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { bettingSites } from "@/data/casino-sites"

interface TopOffersModalProps {
  isOpen: boolean
  onClose: () => void
}

export function TopOffersModal({ isOpen, onClose }: TopOffersModalProps) {
  const [topSite] = useState(bettingSites[0])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasPartialStar = rating % 1 !== 0
    const partialStarPercentage = (rating % 1) * 100

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" strokeWidth={0} />)
      } else if (i === fullStars && hasPartialStar) {
        stars.push(
          <div key={i} className="relative w-5 h-5">
            <Star className="w-5 h-5 text-gray-300" strokeWidth={0} fill="currentColor" />
            <div className="absolute top-0 left-0 overflow-hidden" style={{ width: `${partialStarPercentage}%` }}>
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" strokeWidth={0} />
            </div>
          </div>,
        )
      } else {
        stars.push(<Star key={i} className="w-5 h-5 text-gray-300" strokeWidth={0} fill="currentColor" />)
      }
    }
    return stars
  }

  if (!isOpen || !mounted) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4">
      <div className="relative w-full max-w-md">
        <button
          onClick={onClose}
          className="absolute -top-2 -right-2 z-30 p-2 bg-white text-black hover:bg-gray-200 border-2 border-black transition-colors"
          aria-label="Fechar"
        >
          <X className="h-4 w-4" strokeWidth={2} />
        </button>

        <div className="bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          {/* Header with newspaper masthead style */}
          <div className="relative bg-black border-b-4 border-black">
            <div className="absolute top-0 left-0 right-0 h-2 bg-yellow-400"></div>
            <div className="pt-4 pb-3 px-6 text-center">
              <div className="inline-block border-b-2 border-yellow-400 pb-2 mb-3">
                <h3 className="text-3xl font-black text-white uppercase tracking-tight font-sans">{topSite.name}</h3>
              </div>
              <div className="flex justify-center gap-1 mb-2">{renderStars(topSite.stars)}</div>
              <div className="inline-block bg-yellow-400 px-3 py-1 border-2 border-yellow-400">
                <span className="text-black text-base font-black">{topSite.rating.toFixed(1)}/10</span>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white">
            <Link href={topSite.url} target="_blank" rel="noopener noreferrer" className="block">
              {/* Logo section with angled border accent */}
              <div className="relative bg-white p-4 border-2 border-black mb-6 flex items-center justify-center h-20">
                <div className="absolute top-0 left-0 w-12 h-1 bg-yellow-400"></div>
                <div className="absolute bottom-0 right-0 w-12 h-1 bg-yellow-400"></div>
                <Image
                  src={topSite.logo || "/placeholder.svg"}
                  alt={topSite.name}
                  width={160}
                  height={60}
                  className="object-contain max-h-full"
                />
              </div>

              {/* Bonus section with emphasis */}
              <div className="relative bg-yellow-400 border-4 border-black p-5 mb-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="absolute -top-2 -left-2 bg-black text-yellow-400 px-2 py-1 text-xs font-bold uppercase tracking-wider border-2 border-black">
                  Oferta
                </div>
                <h4 className="text-xl font-black text-black text-center uppercase font-sans leading-tight">
                  {topSite.bonus}
                </h4>
              </div>

              {/* CTA Button */}
              <Button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg border-4 border-black uppercase tracking-wide font-sans shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                asChild
              >
                <span>Visitar Agora</span>
              </Button>

              {/* Footer notice */}
              <div className="mt-6 pt-4 border-t-2 border-black">
                <p className="text-xs text-center text-black font-bold uppercase tracking-wide">
                  18+ • Jogue Responsavelmente
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
