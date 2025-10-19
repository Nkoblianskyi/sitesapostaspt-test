export function BettingInfoSection() {
  return (
    <section className="py-12 md:py-16 bg-white border-y-2 border-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-bold text-black mb-6 text-center border-b-2 border-black pb-4">
          Top Rating de Sites de Apostas Desportivas em Portugal
        </h2>

        <div className="space-y-6 text-gray-800">
          <p className="text-base md:text-lg leading-relaxed">
            O nosso ranking apresenta os <strong className="text-black">melhores sites de apostas desportivas</strong>{" "}
            licenciados pelo SRIJ (Serviço de Regulação e Inspeção de Jogos) em Portugal. Cada plataforma foi
            cuidadosamente avaliada com base em critérios rigorosos de segurança, variedade de mercados desportivos,
            odds competitivas e qualidade do serviço ao cliente.
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 border-2 border-gray-300 p-4">
              <h3 className="font-bold text-lg text-black mb-2">Critérios de Avaliação</h3>
              <ul className="space-y-1 text-sm">
                <li>• Licença SRIJ válida</li>
                <li>• Variedade de desportos e mercados</li>
                <li>• Competitividade das odds</li>
                <li>• Bónus e promoções</li>
                <li>• Métodos de pagamento</li>
              </ul>
            </div>

            <div className="bg-gray-50 border-2 border-gray-300 p-4">
              <h3 className="font-bold text-lg text-black mb-2">Desportos Principais</h3>
              <ul className="space-y-1 text-sm">
                <li>• Futebol (Liga Portugal, Champions)</li>
                <li>• Ténis e Basquetebol</li>
                <li>• Fórmula 1 e MotoGP</li>
                <li>• Hóquei no Gelo e Rugby</li>
                <li>• E-Sports e Desportos Virtuais</li>
              </ul>
            </div>
          </div>

          <p className="text-base md:text-lg leading-relaxed bg-gray-50 border-l-4 border-gray-400 p-4">
            <strong className="text-black">Nota Importante:</strong> Todas as casas de apostas listadas são legais e
            regulamentadas em Portugal. Aposte sempre com responsabilidade e apenas em operadores licenciados pelo SRIJ.
          </p>
        </div>
      </div>
    </section>
  )
}
