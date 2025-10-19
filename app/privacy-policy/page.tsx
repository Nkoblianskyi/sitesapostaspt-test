import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { SiteFooter } from "@/components/site-footer"
import { SiteHeader } from "@/components/site-header"

export default function PrivacyPolicyPage() {
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
            Política de Privacidade
          </h1>
          <p className="text-gray-600 mb-12 pl-6">Última atualização: {new Date().toLocaleDateString("pt-PT")}</p>

          <div className="space-y-8">
            {/* Section 1 */}
            <section className="border-l-4 border-red-600 pl-6">
              <h2 className="text-2xl font-bold text-black mb-4">1. Introdução</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                O sitesapostaspt (sitesapostaspt.com) está comprometido em proteger a sua privacidade e os seus dados
                pessoais. Esta Política de Privacidade explica como recolhemos, utilizamos, divulgamos e protegemos as
                suas informações quando visita o nosso website.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Ao utilizar o nosso website, concorda com a recolha e utilização de informações de acordo com esta
                política. Se não concordar com qualquer parte desta política, não deve utilizar o nosso website.
              </p>
            </section>

            {/* Section 2 */}
            <section className="border-l-4 border-green-600 pl-6">
              <h2 className="text-2xl font-bold text-black mb-4">2. Informações que Recolhemos</h2>
              <h3 className="text-xl font-bold text-black mb-3">2.1 Informações Fornecidas por Si</h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed mb-4 space-y-2">
                <li>Nome e informações de contacto (email, telefone)</li>
                <li>Informações de registo e preferências de conta</li>
                <li>Comunicações que nos envia</li>
                <li>Feedback e respostas a inquéritos</li>
              </ul>

              <h3 className="text-xl font-bold text-black mb-3">2.2 Informações Recolhidas Automaticamente</h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Endereço IP e localização geográfica</li>
                <li>Tipo de navegador e dispositivo</li>
                <li>Páginas visitadas e tempo de permanência</li>
                <li>Cookies e tecnologias similares</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="border-l-4 border-yellow-600 pl-6">
              <h2 className="text-2xl font-bold text-black mb-4">3. Como Utilizamos as Suas Informações</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos as informações recolhidas para os seguintes propósitos:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>Fornecer e melhorar os nossos serviços</li>
                <li>Personalizar a sua experiência no website</li>
                <li>Comunicar consigo sobre atualizações e ofertas</li>
                <li>Analisar o uso do website e tendências</li>
                <li>Prevenir fraudes e garantir a segurança</li>
                <li>Cumprir obrigações legais e regulamentares</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="border-l-4 border-green-600 pl-6">
              <h2 className="text-2xl font-bold text-black mb-4">4. Partilha de Informações</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Não vendemos as suas informações pessoais. Podemos partilhar as suas informações nas seguintes
                circunstâncias:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>
                  <strong>Parceiros de Apostas:</strong> Quando clica em links de afiliados para casas de apostas
                </li>
                <li>
                  <strong>Prestadores de Serviços:</strong> Empresas que nos ajudam a operar o website
                </li>
                <li>
                  <strong>Requisitos Legais:</strong> Quando exigido por lei ou autoridades
                </li>
                <li>
                  <strong>Proteção de Direitos:</strong> Para proteger os nossos direitos e segurança
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="border-l-4 border-red-600 pl-6">
              <h2 className="text-2xl font-bold text-black mb-4">5. Cookies e Tecnologias de Rastreamento</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Utilizamos cookies e tecnologias similares para melhorar a sua experiência. Para mais informações,
                consulte a nossa{" "}
                <Link href="/cookie-policy" className="text-green-600 hover:text-green-800 font-bold underline">
                  Política de Cookies
                </Link>
                .
              </p>
            </section>

            {/* Section 6 */}
            <section className="border-l-4 border-green-600 pl-6">
              <h2 className="text-2xl font-bold text-black mb-4">6. Os Seus Direitos</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                De acordo com o RGPD (Regulamento Geral de Proteção de Dados), tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2">
                <li>
                  <strong>Direito de Acesso:</strong> Solicitar cópias dos seus dados pessoais
                </li>
                <li>
                  <strong>Direito de Retificação:</strong> Corrigir informações incorretas
                </li>
                <li>
                  <strong>Direito ao Apagamento:</strong> Solicitar a eliminação dos seus dados
                </li>
                <li>
                  <strong>Direito à Limitação:</strong> Restringir o processamento dos seus dados
                </li>
                <li>
                  <strong>Direito à Portabilidade:</strong> Transferir os seus dados para outro serviço
                </li>
                <li>
                  <strong>Direito de Oposição:</strong> Opor-se ao processamento dos seus dados
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section className="border-l-4 border-yellow-600 pl-6">
              <h2 className="text-2xl font-bold text-black mb-4">7. Segurança dos Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais adequadas para proteger os seus dados
                pessoais contra acesso no autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de
                transmissão pela Internet é 100% seguro.
              </p>
            </section>

            {/* Section 8 */}
            <section className="border-l-4 border-green-600 pl-6">
              <h2 className="text-2xl font-bold text-black mb-4">8. Retenção de Dados</h2>
              <p className="text-gray-700 leading-relaxed">
                Retemos as suas informações pessoais apenas pelo tempo necessário para cumprir os propósitos descritos
                nesta política, a menos que um período de retenção mais longo seja exigido ou permitido por lei.
              </p>
            </section>

            {/* Section 9 */}
            <section className="border-l-4 border-red-600 pl-6">
              <h2 className="text-2xl font-bold text-black mb-4">9. Links para Terceiros</h2>
              <p className="text-gray-700 leading-relaxed">
                O nosso website contém links para websites de terceiros (casas de apostas). Não somos responsáveis pelas
                práticas de privacidade desses websites. Recomendamos que leia as políticas de privacidade de cada website
                que visita.
              </p>
            </section>

            {/* Section 10 */}
            <section className="border-l-4 border-green-600 pl-6">
              <h2 className="text-2xl font-bold text-black mb-4">10. Alterações a Esta Política</h2>
              <p className="text-gray-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Notificaremos sobre quaisquer alterações
                publicando a nova política nesta página e atualizando a data de "Última atualização".
              </p>
            </section>

            {/* Section 11 */}
            <section className="border-l-4 border-yellow-600 pl-6">
              <h2 className="text-2xl font-bold text-black mb-4">11. Contacto</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Se tiver questões sobre esta Política de Privacidade ou quiser exercer os seus direitos, contacte-nos:
              </p>
              <div className="bg-gray-50 border-2 border-black p-6 space-y-2">
                <p className="text-gray-700">
                  <strong>Email:</strong> privacidade@sitesapostaspt.com
                </p>
                <p className="text-gray-700">
                  <strong>Endereço:</strong> Lisboa, Portugal
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
