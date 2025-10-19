"use client"

import { useState } from "react"
import { BettingCard } from "@/components/betting-card"
import { bettingSites } from "@/data/casino-sites"

export function OurTopBettingChoiceSection() {
  const [topSite] = useState(bettingSites[0])

  if (!topSite) {
    return null
  }

  return (
    <section className="py-16 md:py-20 bg-white border-t-4 border-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10 text-center">
          A Nossa Escolha Principal de Apostas
        </h2>
        <BettingCard site={topSite} rank={1} />
      </div>
    </section>
  )
}
