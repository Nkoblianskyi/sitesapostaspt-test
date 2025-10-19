import { Shield, AlertTriangle, Clock, Users } from "lucide-react"

export function AboutUsSection() {
  return (
    <section className="py-12 md:py-16 lg:py-20 px-4 bg-white border-y-2 border-gray-300">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-block border-2 border-black bg-white px-6 py-2 mb-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-sans uppercase tracking-tight">Sobre Nós</h2>
          </div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto font-mono">
            sitesapostaspt - O seu guia confiável para apostas desportivas em Portugal
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gray-50 border-2 border-gray-300 p-6 md:p-8 mb-8">
          <h3 className="text-2xl md:text-3xl font-bold font-sans uppercase mb-4 border-b-2 border-gray-300 pb-2">
            A Nossa Missão
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-mono mb-4">
            No sitesapostaspt, dedicamo-nos a fornecer análises honestas e imparciais dos melhores sites de apostas
            desportivas em Portugal. A nossa equipa de especialistas avalia cada plataforma com rigor, garantindo que
            apenas recomendamos operadores licenciados e seguros.
          </p>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed font-mono">
            Acreditamos na transparência total e no jogo responsável. Todas as nossas avaliações são baseadas em
            critérios objetivos: segurança, variedade de mercados, odds competitivas, métodos de pagamento e qualidade
            do serviço ao cliente.
          </p>
        </div>

        {/* Responsible Gaming Section */}
        <div className="border-2 border-gray-300 bg-white p-6 md:p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-black p-3 border-2 border-black">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold font-sans uppercase border-b-2 border-black pb-1">
              Jogo Responsável
            </h3>
          </div>

          <div className="space-y-6">
            <p className="text-base md:text-lg text-gray-700 leading-relaxed font-mono">
              A segurança e o bem-estar dos nossos leitores são a nossa prioridade máxima. Apoiamos firmemente o jogo
              responsável e incentivamos todos os apostadores a seguir estas diretrizes essenciais:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Card 1 */}
              <div className="border-2 border-gray-300 bg-gray-50 p-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-gray-200 p-2 border-2 border-gray-300 mt-1">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-sans uppercase mb-2">Estabeleça Limites</h4>
                    <p className="text-sm text-gray-700 font-mono leading-relaxed">
                      Defina limites de depósito, perda e tempo de jogo. Nunca aposte mais do que pode perder.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border-2 border-gray-300 bg-gray-50 p-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-gray-200 p-2 border-2 border-gray-300 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-sans uppercase mb-2">Controle o Tempo</h4>
                    <p className="text-sm text-gray-700 font-mono leading-relaxed">
                      Faça pausas regulares. As apostas devem ser entretenimento, não uma obsessão.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border-2 border-gray-300 bg-gray-50 p-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-gray-200 p-2 border-2 border-gray-300 mt-1">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-sans uppercase mb-2">Procure Ajuda</h4>
                    <p className="text-sm text-gray-700 font-mono leading-relaxed">
                      Se sentir que está a perder o controlo, contacte organizações de apoio como o SICAD.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 4 */}
              <div className="border-2 border-gray-300 bg-gray-50 p-4">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-gray-200 p-2 border-2 border-gray-300 mt-1">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg font-sans uppercase mb-2">Jogue com Segurança</h4>
                    <p className="text-sm text-gray-700 font-mono leading-relaxed">
                      Utilize apenas sites licenciados pelo SRIJ. Verifique sempre a licença antes de se registar.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Help Resources */}
            <div className="bg-gray-800 border-2 border-black p-4 mt-6">
              <h4 className="font-bold text-xl font-sans uppercase text-white mb-3">Recursos de Apoio</h4>
              <div className="space-y-2 text-white font-mono">
                <p className="text-sm">
                  <strong>Linha Vida:</strong> 1414 (apoio a comportamentos aditivos)
                </p>
                <p className="text-sm">
                  <strong>SICAD:</strong> Serviço de Intervenção nos Comportamentos Aditivos e nas Dependências
                </p>
                <p className="text-sm">
                  <strong>Jogadores Anónimos:</strong> Grupos de apoio gratuitos em todo o país
                </p>
              </div>
            </div>

            <div className="bg-gray-100 border-2 border-black p-4 text-center">
              <p className="font-bold text-lg font-sans uppercase">
                +18 | Jogue com Responsabilidade | Apenas em Sites Licenciados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
