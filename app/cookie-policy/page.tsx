import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function CookiePolicyPage() {
  return (
    <>
    <SiteHeader/>
    <div className="min-h-screen bg-white pt-30">
      {/* Header */}
      <header className="border-b-4 border-black bg-white">
        <div className="container mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-black hover:text-green-600 transition-colors font-bold"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para sitesapostaspt
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-4 border-l-8 border-green-600 pl-6">
          Política de Cookies
        </h1>
        <p className="text-gray-600 mb-12 pl-6">Última atualização: {new Date().toLocaleDateString("pt-PT")}</p>

        <div className="space-y-8">
          {/* Section 1 */}
          <section className="border-l-4 border-green-600 pl-6">
            <h2 className="text-2xl font-bold text-black mb-4">1. O Que São Cookies?</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Cookies são pequenos ficheiros de texto que são colocados no seu dispositivo (computador, smartphone ou
              tablet) quando visita um website. Os cookies são amplamente utilizados para fazer os websites funcionarem
              de forma mais eficiente e fornecer informações aos proprietários do site.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Os cookies podem ser "persistentes" ou "de sessão". Os cookies persistentes permanecem no seu dispositivo
              após fechar o navegador, enquanto os cookies de sessão são eliminados quando fecha o navegador.
            </p>
          </section>

          {/* Section 2 */}
          <section className="border-l-4 border-red-600 pl-6">
            <h2 className="text-2xl font-bold text-black mb-4">2. Como Utilizamos Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              O sitesapostaspt utiliza cookies para melhorar a sua experiência no nosso website. Utilizamos cookies
              para:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>Manter as suas preferências e configurações</li>
              <li>Analisar como utiliza o nosso website</li>
              <li>Personalizar o conteúdo que vê</li>
              <li>Melhorar a funcionalidade do website</li>
              <li>Rastrear links de afiliados para casas de apostas</li>
              <li>Fornecer publicidade relevante</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="border-l-4 border-yellow-600 pl-6">
            <h2 className="text-2xl font-bold text-black mb-4">3. Tipos de Cookies que Utilizamos</h2>

            <div className="space-y-6">
              <div className="bg-gray-50 border-2 border-black p-6">
                <h3 className="text-xl font-bold text-green-600 mb-3">3.1 Cookies Estritamente Necessários</h3>
                <p className="text-gray-700 leading-relaxed">
                  Estes cookies são essenciais para o funcionamento do website. Permitem-lhe navegar pelo site e
                  utilizar as suas funcionalidades. Sem estes cookies, os serviços que solicitou não podem ser
                  fornecidos.
                </p>
              </div>

              <div className="bg-gray-50 border-2 border-black p-6">
                <h3 className="text-xl font-bold text-green-600 mb-3">3.2 Cookies de Desempenho</h3>
                <p className="text-gray-700 leading-relaxed">
                  Estes cookies recolhem informações sobre como os visitantes utilizam o website, como quais páginas são
                  mais visitadas. Estas informações são utilizadas para melhorar o funcionamento do website.
                </p>
              </div>

              <div className="bg-gray-50 border-2 border-black p-6">
                <h3 className="text-xl font-bold text-blue-600 mb-3">3.3 Cookies de Funcionalidade</h3>
                <p className="text-gray-700 leading-relaxed">
                  Estes cookies permitem que o website se lembre das escolhas que faz (como o seu idioma ou região) e
                  fornecem funcionalidades melhoradas e mais personalizadas.
                </p>
              </div>

              <div className="bg-gray-50 border-2 border-black p-6">
                <h3 className="text-xl font-bold text-yellow-600 mb-3">3.4 Cookies de Marketing/Publicidade</h3>
                <p className="text-gray-700 leading-relaxed">
                  Estes cookies são utilizados para fornecer anúncios mais relevantes para si e para os seus interesses.
                  Também são utilizados para limitar o número de vezes que vê um anúncio e para medir a eficácia das
                  campanhas publicitárias.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section className="border-l-4 border-green-600 pl-6">
            <h2 className="text-2xl font-bold text-black mb-4">4. Cookies de Terceiros</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Além dos nossos próprios cookies, também utilizamos cookies de terceiros para os seguintes propósitos:
            </p>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
              <li>
                <strong>Google Analytics:</strong> Para analisar o tráfego do website
              </li>
              <li>
                <strong>Redes de Afiliados:</strong> Para rastrear cliques e conversões
              </li>
              <li>
                <strong>Redes Sociais:</strong> Para partilhar conteúdo nas redes sociais
              </li>
              <li>
                <strong>Plataformas de Publicidade:</strong> Para exibir anúncios relevantes
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="border-l-4 border-green-600 pl-6">
            <h2 className="text-2xl font-bold text-black mb-4">5. Como Gerir Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Pode controlar e/ou eliminar cookies como desejar. Pode eliminar todos os cookies que já estão no seu
              dispositivo e pode configurar a maioria dos navegadores para impedir que sejam colocados.
            </p>

            <h3 className="text-xl font-bold text-black mb-3">Configurações do Navegador:</h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 mb-4">
              <li>
                <strong>Google Chrome:</strong> Definições → Privacidade e segurança → Cookies
              </li>
              <li>
                <strong>Mozilla Firefox:</strong> Opções → Privacidade e Segurança → Cookies
              </li>
              <li>
                <strong>Safari:</strong> Preferências → Privacidade → Cookies
              </li>
              <li>
                <strong>Microsoft Edge:</strong> Definições → Cookies e permissões do site
              </li>
            </ul>

            <div className="bg-yellow-50 border-2 border-yellow-600 p-6">
              <p className="text-gray-700 leading-relaxed">
                <strong>Nota:</strong> Se optar por desativar os cookies, algumas funcionalidades do nosso website podem
                não funcionar corretamente.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section className="border-l-4 border-red-600 pl-6">
            <h2 className="text-2xl font-bold text-black mb-4">6. Cookies de Afiliados</h2>
            <p className="text-gray-700 leading-relaxed">
              Como website de comparação de casas de apostas, utilizamos cookies de afiliados para rastrear quando clica
              em links para casas de apostas parceiras. Estes cookies permitem-nos receber uma comissão se se registar
              numa casa de apostas através do nosso website. Isto não afeta o preço que paga nem a sua experiência na
              casa de apostas.
            </p>
          </section>

          {/* Section 7 */}
          <section className="border-l-4 border-yellow-600 pl-6">
            <h2 className="text-2xl font-bold text-black mb-4">7. Alterações a Esta Política</h2>
            <p className="text-gray-700 leading-relaxed">
              Podemos atualizar esta Política de Cookies periodicamente para refletir alterações nas nossas práticas ou
              por outros motivos operacionais, legais ou regulamentares. Recomendamos que reveja esta página
              regularmente.
            </p>
          </section>

          {/* Section 8 */}
          <section className="border-l-4 border-green-600 pl-6">
            <h2 className="text-2xl font-bold text-black mb-4">8. Mais Informações</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Para mais informações sobre como protegemos os seus dados pessoais, consulte a nossa{" "}
              <Link href="/privacy-policy" className="text-green-600 hover:text-green-800 font-bold underline">
                Política de Privacidade
              </Link>
              .
            </p>
          </section>

          {/* Section 9 */}
          <section className="border-l-4 border-green-600 pl-6">
            <h2 className="text-2xl font-bold text-black mb-4">9. Contacto</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Se tiver questões sobre a nossa utilização de cookies, contacte-nos:
            </p>
            <div className="bg-gray-50 border-2 border-black p-6 space-y-2">
              <p className="text-gray-700">
                <strong>Email:</strong> cookies@sitesapostaspt.com
              </p>
              <p className="text-gray-700">
                <strong>Website:</strong> sitesapostaspt.com
              </p>
            </div>
          </section>
        </div>

        {/* Back to Home */}
        <div className="mt-12 pt-8 border-t-4 border-black">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-black hover:text-green-600 transition-colors font-bold text-lg"
          >
            <ArrowLeft className="w-5 h-5" />
            Voltar para a Página Inicial
          </Link>
        </div>
      </main>
    </div>
    <SiteFooter/>
    </>
  )
}
