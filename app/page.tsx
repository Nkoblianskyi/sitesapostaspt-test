"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BettingList } from "@/components/betting-list"
import { TopOffersModal } from "@/components/top-offers-modal"
import { AgeRestrictionModal } from "@/components/age-restriction-modal"
import { AdvertiserInfoModal } from "@/components/advertiser-info-modal"
import { HeroSection } from "@/components/hero-section"
import { FaqSection } from "@/components/faq-section"
import { OurTopBettingChoiceSection } from "@/components/our-top-betting-choice-section"
import { BettingInfoSection } from "@/components/betting-info-section"
import { CookieBanner } from "@/components/cookie-banner"
import { CookieConsentProvider } from "@/context/cookie-consent-context"
import { AboutUsSection } from "@/components/about-us-section"

export default function Home() {
  const [isAgeModalOpen, setIsAgeModalOpen] = useState(false)
  const [isAdvertiserModalOpen, setIsAdvertiserModalOpen] = useState(false)
  const [isTopOffersModalOpen, setIsTopOffersModalOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTopOffersModalOpen(true)
    }, 10000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <CookieConsentProvider>
      <main className="min-h-screen flex flex-col relative bg-[#f5f5f0]">
        <div
          className="fixed inset-0 z-0 opacity-20"
          style={{
            backgroundImage: `url("/page.jpg")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Dark overlay for better text contrast */}
        <div className="fixed inset-0 z-0 bg-black/40" />

        {/* Subtle noise texture overlay */}
        <div
          className="fixed inset-0 z-0 opacity-[0.05]"
          style={{
            backgroundImage: `url("modern-sports-betting-football-stadium-green-field.jpg")`,
            backgroundRepeat: "repeat",
          }}
        />

        <div className="relative z-10">
          <SiteHeader />
          <HeroSection
            setIsAgeModalOpen={setIsAgeModalOpen}
            setIsAdvertiserModalOpen={setIsAdvertiserModalOpen}
            setIsTopOffersModalOpen={setIsTopOffersModalOpen}
          />
          <div id="betting-sites">
            <BettingList />
          </div>
          <BettingInfoSection />      
          <AboutUsSection />
          <OurTopBettingChoiceSection />
          <FaqSection />
          <SiteFooter />
        </div>
        <TopOffersModal isOpen={isTopOffersModalOpen} onClose={() => setIsTopOffersModalOpen(false)} />
        <AgeRestrictionModal isOpen={isAgeModalOpen} onClose={() => setIsAgeModalOpen(false)} />
        <AdvertiserInfoModal isOpen={isAdvertiserModalOpen} onClose={() => setIsAdvertiserModalOpen(false)} />
        <CookieBanner />
      </main>
    </CookieConsentProvider>
  )
}
