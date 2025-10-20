"use client"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { CasinoSite } from "@/data/casino-sites"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CasinoCardProps {
  site: CasinoSite
  rank: number
}

export function BettingCard({ site, rank }: CasinoCardProps) {
  const formatReviews = (reviews: number) => {
    return reviews.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  const getRankLabel = (rank: number) => {
    switch (rank) {
      case 1:
        return "CAMPEÃO"
      case 2:
        return "VICE-CAMPEÃO"
      case 3:
        return "TOP 3"
      default:
        return "VERIFICADO"
    }
  }

  const renderStars = (rating: number, size: "sm" | "md" | "lg" = "md") => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.3
    const sizeClass = size === "sm" ? "w-3.5 h-3.5" : size === "md" ? "w-4 h-4" : "w-5 h-5"
    const lgSizeClass = size === "sm" ? "lg:w-4 lg:h-4" : size === "md" ? "lg:w-4 lg:h-4" : "lg:w-5 lg:h-5"

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        // Full star
        stars.push(
          <Star
            key={i}
            className={`${sizeClass} ${lgSizeClass} fill-[hsl(45,100%,51%)] text-[hsl(45,100%,51%)]`}
            strokeWidth={0}
          />,
        )
      } else if (i === fullStars && hasHalfStar) {
        // Half star using clip-path
        stars.push(
          <div key={i} className="relative">
            <Star className={`${sizeClass} ${lgSizeClass} text-[hsl(45,100%,51%)]`} strokeWidth={1.5} fill="none" />
            <Star
              className={`${sizeClass} ${lgSizeClass} fill-[hsl(45,100%,51%)] text-[hsl(45,100%,51%)] absolute top-0 left-0`}
              strokeWidth={0}
              style={{ clipPath: `inset(0 ${100 - (rating % 1) * 100}% 0 0)` }}
            />
          </div>,
        )
      } else {
        // Empty star
        stars.push(
          <Star
            key={i}
            className={`${sizeClass} ${lgSizeClass} text-[hsl(45,100%,51%)]`}
            strokeWidth={1.5}
            fill="none"
          />,
        )
      }
    }
    return stars
  }

  return (
    <div className="block animate-fade-in">
      <div
        className={cn(
          "hidden lg:block rounded-lg shadow-md hover:shadow-xl relative overflow-hidden cursor-pointer mb-6 mx-4 transition-all duration-300 bg-white",
          rank === 1 ? "ring-2 ring-[hsl(45,100%,51%)] ring-offset-2" : "border border-border",
        )}
      >
        <div
          className={cn(
            "w-full flex items-center justify-between px-5 py-3 border-b",
            rank === 1
              ? "bg-gradient-to-r from-[hsl(45,100%,51%)] to-[hsl(45,100%,45%)] border-[hsl(45,100%,40%)]"
              : "bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700",
          )}
        >
          <div className="flex items-center gap-3">
            <div
              className={cn("text-xl font-black uppercase tracking-wider", rank === 1 ? "text-black" : "text-white")}
            >
              №{rank}
            </div>
            {rank <= 3 && (
              <div
                className={cn(
                  "px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-md shadow-sm",
                  rank === 1
                    ? "bg-[hsl(0,84%,60%)] text-white"
                    : rank === 2
                      ? "bg-white text-black border border-gray-300"
                      : "bg-[hsl(45,100%,51%)] text-black",
                )}
              >
                {getRankLabel(rank)}
              </div>
            )}
          </div>
          <div
            className={cn("text-xs font-semibold uppercase tracking-wide", rank === 1 ? "text-black" : "text-white/90")}
          >
            Classificação Oficial
          </div>
        </div>
        {/* </CHANGE> */}

        <Link href={site.url} target="_blank" rel="noopener noreferrer sponsored" className="block">
          <div className="h-[150px] lg:h-[160px] flex items-center py-5 lg:py-6 px-5 lg:px-6 relative">
            <div className="flex-[0_0_28%] min-w-0 pr-4 lg:pr-5 flex justify-center items-center h-full relative z-10">
              <div
                className={cn(
                  "bg-black rounded-lg shadow-md p-3 w-full border",
                  rank === 1 ? "border-[hsl(45,100%,51%)]" : "border-border",
                )}
              >
                <Image
                  src={site.logo || "/placeholder.svg"}
                  alt={site.name}
                  width={170}
                  height={70}
                  className="w-full h-12 lg:h-14 object-contain"
                />
              </div>
            </div>
            {/* </CHANGE> */}

            <div className="flex-[0_0_30%] min-w-0 px-4 lg:px-5 text-center flex flex-col justify-center h-full relative z-10 border-l border-r border-border">
              <div className="text-[10px] lg:text-xs text-muted-foreground uppercase font-bold mb-1.5 tracking-wide">
                BÓNUS DE BOAS-VINDAS
              </div>
              <div className="text-base lg:text-lg font-black text-[hsl(45,100%,51%)] leading-tight line-clamp-2 px-1">
                {site.bonus}
              </div>
            </div>

            <div className="flex-[0_0_28%] min-w-0 px-4 lg:px-5 text-center flex flex-col justify-center h-full relative z-10 border-r border-border">
              <div className="text-[10px] lg:text-xs text-muted-foreground mb-1 font-medium">
                ({formatReviews(site.reviews)} AVALIAÇÕES)
              </div>
              <div className="flex justify-center gap-0.5 lg:gap-1 mb-1">{renderStars(site.stars, "sm")}</div>
              <div className="text-xl lg:text-2xl font-black leading-none text-[hsl(142,76%,36%)]">
                {site.rating.toFixed(1)}
              </div>
              <div className="text-[10px] lg:text-xs text-muted-foreground font-semibold mt-1 uppercase tracking-wide">
                Excelente
              </div>
            </div>

            <div className="flex-[0_0_14%] min-w-0 pl-4 lg:pl-5 text-center flex flex-col justify-center items-center h-full relative z-10">
              <div className="w-full">
                <Button
                  className={cn(
                    "text-white rounded-lg w-full h-10 lg:h-11 mb-1.5 text-xs font-bold shadow-md hover:shadow-lg transition-all uppercase tracking-wide",
                    rank === 1
                      ? "bg-[hsl(45,100%,51%)] hover:bg-[hsl(45,100%,45%)] text-black"
                      : "bg-[hsl(142,76%,36%)] hover:bg-[hsl(142,76%,30%)]",
                  )}
                >
                  OBTER BÓNUS
                </Button>
                <div className="text-[9px] lg:text-[10px] text-muted-foreground font-medium uppercase tracking-wide">
                  Visitar Site
                </div>
              </div>
            </div>
            {/* </CHANGE> */}
          </div>
        </Link>

        <div className="px-5 lg:px-6 py-2.5 border-t border-border bg-secondary/50">
          <p className="text-[10px] lg:text-xs text-center text-muted-foreground font-medium">
            +18 | Jogo Responsável |{" "}
            <a
              href="https://jogoresponsavel.pt/"
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-accent hover:text-accent/80 underline font-semibold"
            >
              jogoresponsavel.pt
            </a>
          </p>
        </div>
      </div>

      {/* Tablet view */}
      <div
        className={cn(
          "hidden md:block lg:hidden rounded-lg border-2 relative overflow-hidden cursor-pointer mb-6 mx-4 shadow-md bg-white",
          rank === 1 ? "border-[hsl(45,100%,51%)]" : "border-border",
        )}
      >
        <div
          className={cn(
            "w-full flex items-center justify-between px-5 py-3 border-b",
            rank === 1
              ? "bg-gradient-to-r from-[hsl(45,100%,51%)] to-[hsl(45,100%,45%)] border-[hsl(45,100%,40%)]"
              : "bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700",
          )}
        >
          <div className="flex items-center gap-2.5">
            <div
              className={cn("text-lg font-black uppercase tracking-wider", rank === 1 ? "text-black" : "text-white")}
            >
              №{rank}
            </div>
            {rank <= 3 && (
              <div
                className={cn(
                  "px-3 py-1 text-xs font-bold uppercase tracking-wide rounded-md shadow-sm",
                  rank === 1
                    ? "bg-[hsl(0,84%,60%)] text-white"
                    : rank === 2
                      ? "bg-white text-black border border-gray-300"
                      : "bg-[hsl(45,100%,51%)] text-black",
                )}
              >
                {getRankLabel(rank)}
              </div>
            )}
          </div>
          <div
            className={cn(
              "text-[10px] font-semibold uppercase tracking-wide",
              rank === 1 ? "text-black" : "text-white/90",
            )}
          >
            Oficial
          </div>
        </div>

        <Link href={site.url} target="_blank" rel="noopener noreferrer sponsored" className="block">
          <div className="pt-8 pb-5 relative">
            <div className="grid grid-cols-12 gap-4 items-center relative z-10 px-4">
              {/* Logo */}
              <div className="col-span-3 flex justify-center">
                <div
                  className={cn(
                    "bg-black rounded-lg shadow-md p-3 w-full relative",
                    rank === 1 ? "border-[hsl(45,100%,51%)]" : "border-border",
                  )}
                >
                  <Image
                    src={site.logo || "/placeholder.svg"}
                    alt={site.name}
                    width={120}
                    height={60}
                    className="w-full h-14 object-contain"
                  />
                </div>
              </div>

              <div className="col-span-4 text-center border-l border-r border-border px-3">
                <div className="text-xs text-muted-foreground uppercase font-bold mb-1.5">BÓNUS</div>
                <div className="text-base font-black text-[hsl(45,100%,51%)] leading-tight break-words">
                  {site.bonus}
                </div>
              </div>

              {/* Rating & Score */}
              <div className="col-span-3 text-center border-r border-border px-2">
                <div className="text-xs text-muted-foreground mb-1 font-medium">({formatReviews(site.reviews)})</div>
                <div className="flex justify-center gap-0.5 mb-1">{renderStars(site.stars, "md")}</div>
                <div className="text-xl font-black leading-none text-[hsl(142,76%,36%)]">{site.rating.toFixed(1)}</div>
              </div>

              <div className="col-span-2 text-center">
                <Button
                  className={cn(
                    "text-white rounded-lg px-2 py-2.5 text-xs w-full font-black shadow-md hover:shadow-lg uppercase",
                    rank === 1
                      ? "bg-[hsl(45,100%,51%)] hover:bg-[hsl(45,100%,45%)] text-black"
                      : "bg-[hsl(142,76%,36%)] hover:bg-[hsl(142,76%,30%)]",
                  )}
                >
                  OBTER
                </Button>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Mobile view */}
      <div className="md:hidden relative mb-6">
        <div
          className={cn(
            "block rounded-lg overflow-hidden cursor-pointer border-2 bg-white",
            rank === 1 ? "ring-2 ring-[hsl(45,100%,51%)] ring-offset-2" : "border border-border",
          )}
        >
          <div
            className={cn(
              "w-full flex items-center justify-between px-5 py-3 border-b",
              rank === 1
                ? "bg-gradient-to-r from-[hsl(45,100%,51%)] to-[hsl(45,100%,45%)] border-[hsl(45,100%,40%)]"
                : "bg-gradient-to-r from-gray-900 to-gray-800 border-gray-700",
            )}
          >
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "text-base font-black uppercase tracking-wider",
                  rank === 1 ? "text-black" : "text-white",
                )}
              >
                №{rank}
              </div>
              {rank <= 3 && (
                <div
                  className={cn(
                    "px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide rounded-md shadow-sm",
                    rank === 1
                      ? "bg-[hsl(0,84%,60%)] text-white"
                      : rank === 2
                        ? "bg-white text-black border border-gray-300"
                        : "bg-[hsl(45,100%,51%)] text-black",
                  )}
                >
                  {getRankLabel(rank)}
                </div>
              )}
            </div>
            <div
              className={cn(
                "text-[9px] font-semibold uppercase tracking-wide",
                rank === 1 ? "text-black" : "text-white/90",
              )}
            >
              Oficial
            </div>
          </div>

          <Link href={site.url} target="_blank" rel="noopener noreferrer sponsored">
            <div className="relative">
              <div className="grid grid-cols-2 gap-0 items-stretch relative z-10">
                {/* Logo */}
                <div className="flex justify-center items-center p-3 mt-6">
                  <div
                    className={cn(
                      "bg-black rounded-lg shadow-md p-3 w-32 h-20 flex items-center justify-center border",
                      rank === 1 ? "border-[hsl(45,100%,51%)]" : "border-border",
                    )}
                  >
                    <Image
                      src={site.logo || "/placeholder.svg"}
                      alt={site.name}
                      width={140}
                      height={70}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                </div>

                {/* Bonus - full height background */}
                <div className="text-center flex flex-col justify-center px-3 py-3 bg-gray-100">
                  <div className="uppercase font-black mb-1.5 text-xs text-[hsl(142,76%,36%)]">BÓNUS</div>
                  <div className="font-black text-black text-lg leading-tight">{site.bonus}</div>
                </div>
              </div>

              {/* Rating Row */}
              <div className="grid grid-cols-4 items-center gap-2 px-5 py-2 border-t border-border min-h-[50px]">
                <div className="col-span-2 text-center">
                  <div className="flex justify-center gap-0.5 mb-1">{renderStars(site.stars, "lg")}</div>
                  <div className="text-muted-foreground font-medium text-[10px]">
                    {site.reviews ? `(${site.reviews} Avaliações)` : "(2500 Avaliações)"}
                  </div>
                </div>

                <div className="text-3xl mb-2 font-black text-[hsl(142,76%,36%)]">{site.rating.toFixed(1)}</div>
                <div className="flex justify-center">
                  <Button
                    className={cn(
                      "text-white mb-2 text-[14px] px-4 py-2 font-black border-0 shadow-md hover:shadow-lg rounded-lg uppercase whitespace-nowrap",
                      rank === 1
                        ? "bg-[hsl(45,100%,51%)] hover:bg-[hsl(45,100%,45%)] text-black"
                        : "bg-[hsl(142,76%,36%)] hover:bg-[hsl(142,76%,30%)]",
                    )}
                  >
                    OBTER
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
