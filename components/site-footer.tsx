import Link from "next/link"
import Image from "next/image"
import { Info, AlertTriangle, Target, Shield, Newspaper } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-white text-gray-900 border-t-4 border-black">
      <div className="container mx-auto px-6 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b-2 border-black pb-12">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 bg-black border-4 border-black flex items-center justify-center flex-shrink-0">
                <Newspaper className="h-7 w-7 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-black leading-none font-serif">sitesapostaspt</span>
                <span className="text-sm text-green-600">sitesapostaspt.com</span>
              </div>
            </Link>
            <p className="text-gray-900 text-sm max-w-md leading-relaxed">
              O seu guia definitivo para as melhores casas de apostas licenciadas pelo SRIJ em Portugal.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-lg font-bold mb-6 text-green-600 font-serif">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-900 hover:text-green-600 transition-colors font-medium">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-900 hover:text-green-600 transition-colors font-medium"
                >
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-gray-900 hover:text-green-600 transition-colors font-medium"
                >
                  Política de Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t-2 border-black pt-12 mb-12">
          <h4 className="text-xl font-bold mb-8 text-center text-green-600 font-serif flex items-center justify-center gap-2">
            <Shield className="h-6 w-6" />
            Parceiros de Jogo Responsável
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            <Link
              href="https://www.srij.turismodeportugal.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-green-50 p-4 rounded-lg border-2 border-gray-300 hover:border-green-600 transition-all duration-200"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/srij.svg" alt="SRIJ" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.sicad.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-yellow-50 p-4 rounded-lg border-2 border-gray-300 hover:border-yellow-600 transition-all duration-200"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/icad.png" alt="SICAD" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-red-50 p-4 rounded-lg border-2 border-gray-300 hover:border-red-600 transition-all duration-200"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/gamecare.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-green-50 p-4 rounded-lg border-2 border-gray-300 hover:border-green-600 transition-all duration-200"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/gamble.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>
            <Link
              href="https://www.jogoresponsavel.pt/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-600 hover:bg-gray-50 p-4 rounded-lg border-2 border-gray-300 hover:border-gray-600 transition-all duration-200"
            >
              <div className="relative w-[80px] h-[32px]">
                <Image src="/jogo2.png" alt="Jogo Responsável" fill className="object-contain" />
              </div>
            </Link>
          </div>
        </div>

        {/* Age Verification and Disclaimer */}
        <div className="text-center text-sm text-gray-900 space-y-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="bg-red-600 text-white px-4 py-2 rounded font-bold border-2 border-red-700">18+</div>
            <span className="font-semibold text-black">Apenas para maiores de 18 anos</span>
          </div>

          <div className="flex items-start justify-center gap-3 max-w-4xl mx-auto">
            {/* Changed text-blue-600 to text-green-600 */}
            <Info className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
            <p className="text-left text-gray-900">
              Melhores Apostas Desportivas PT fornece informações apenas para fins informativos. Todo o conteúdo é
              destinado a indivíduos com mais de 18 anos residentes em Portugal.
            </p>
          </div>

          <p className="flex items-center justify-center gap-3 text-red-600 font-semibold">
            <AlertTriangle className="h-5 w-5" />
            <span>O jogo pode causar dependência. Jogue com responsabilidade.</span>
          </p>

          <p className="font-semibold text-gray-800">© 2025 sitesapostaspt. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
