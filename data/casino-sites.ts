export interface CasinoSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export interface BettingSite {
  id: number
  name: string
  logo: string
  bonus: string
  url: string
  rating: number
  stars: number
  reviews: number
  badges: string[]
  terms: string
  isTopRating?: boolean
  isTopLine?: boolean
  isPopular?: boolean
  isTrending?: boolean
}

export const casinoSites: CasinoSite[] = [
  {
    id: 1,
    name: "Betclic",
    logo: "/betclic.svg",
    bonus: "100% Até 20€",
    url: "https://www.betclic.pt/",
    rating: 9.9,
    stars: 4.6,
    reviews: 5674,
    badges: ["TENDÊNCIA"],
    terms:
      "18+. Apenas novos clientes. Bónus de 100% até 20€ no primeiro depósito. Odds mínimas de 1.50. Rollover de 3x o valor do bónus. Válido por 21 dias. T&Cs completos no site. Jogue responsavelmente.",
    isTopRating: true,
    isTopLine: true,
  },
  {
    id: 2,
    name: "Solverde",
    logo: "/solverde.svg",
    bonus: "300% até 30€ em Aposta Grátis",
    url: "https://www.solverde.pt/",
    rating: 9.5,
    stars: 4.9,
    reviews: 6215,
    badges: ["POPULAR", "TENDÊNCIA"],
    terms:
      "18+. Oferta válida para novos registos. Bónus de 300% até 30€ em apostas grátis no primeiro depósito. Requisitos de apostas 5x. Válido por 30 dias. Aplicam-se termos e condições. Jogue com responsabilidade.",
    isPopular: true,
    isTrending: true,
  },
  {
    id: 3,
    name: "Luckia",
    logo: "/luckia.svg",
    bonus: "Aposta Grátis de Atualmente",
    url: "https://www.luckia.pt/",
    rating: 9.3,
    stars: 4.8,
    reviews: 4258,
    badges: ["LINHA SUPERIOR"],
    terms:
      "18+. Novos clientes apenas. Faça uma aposta mínima com odds mínimas de 1/1 (2.0) dentro de 14 dias após o registo. Apostas Grátis válidas por 7 dias em apostas selecionadas. Stake grátis não devolvido com ganhos. T&Cs aplicam-se. BeGambleAware.org",
    isTopRating: true,
    isTopLine: true,
  },
  {
    id: 4,
    name: "Lebull",
    logo: "/lebull.svg",
    bonus: "250% até 400€ + 50€ de Aposta Grátis",
    url: "https://www.lebull.pt/",
    rating: 9.1,
    stars: 4.5,
    reviews: 714,
    badges: [""],
    terms:
      "18+. Promoção para novos utilizadores. Bónus de 250% até 400€ mais 50€ em aposta grátis. Depósito mínimo de 10€. Requisitos de rollover 6x. Odds mínimas 1.60. Válido 45 dias. Aplicam-se T&Cs. BeGambleAware.org",
  },
]

export const bettingSites = casinoSites
