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
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white ${scrolled ? "shadow-md" : "shadow-sm"
        }`}
    >

      <div className="container mx-auto flex items-center justify-center py-6 px-6 relative bg-white">
        <Link href="/" className="flex items-center gap-3 w-fit group">
          <div className="h-10 w-10 bg-green-600 flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
            <Newspaper className="h-6 w-6 text-white" strokeWidth={2} />
          </div>
          <span className="text-2xl font-bold font-display">
            <span className="text-green-600">Sites </span>
            <span className="text-red-600">Apostas </span>
            <span className="text-yellow-500">PT</span>
          </span>
        </Link>
      </div>
    </header>
  )
}
