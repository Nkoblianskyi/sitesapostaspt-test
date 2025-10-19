"use client"

import { useState } from "react"
import { BettingCard } from "@/components/betting-card"
import { casinoSites } from "@/data/casino-sites"

export function BettingList() {
  const [sites] = useState(casinoSites)

  return (
    <section className="pt-2 md:pt-2 pb-6 md:pb-20 relative z-10 max-w-[1250px] mx-auto">
      <div className="container mx-auto px-4">
        <div className="w-full space-y-2 md:space-y-4">
          {sites.map((site, index) => (
            <BettingCard key={site.name} site={site} rank={index + 1} />
          ))}
        </div>
      </div>
    </section>
  )
}
