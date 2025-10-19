"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "As apostas desportivas são legais em Portugal?",
    answer:
      "Sim, as apostas desportivas são totalmente legais em Portugal desde que sejam realizadas através de operadores licenciados pelo SRIJ (Serviço de Regulação e Inspeção de Jogos). Todos os sites listados nesta página possuem licença válida.",
  },
  {
    question: "Como posso começar a apostar online?",
    answer:
      "Para começar, escolha uma casa de apostas licenciada, registe-se fornecendo os seus dados pessoais, verifique a sua conta, faça um depósito e comece a apostar nos seus desportos favoritos. Não se esqueça de aproveitar os bónus de boas-vindas!",
  },
  {
    question: "Quais são os métodos de pagamento disponíveis?",
    answer:
      "As casas de apostas portuguesas oferecem diversos métodos: cartões de crédito/débito, MB Way, transferência bancária, Multibanco, e carteiras digitais como Neteller e Skrill. Os depósitos são geralmente instantâneos.",
  },
  {
    question: "Os bónus de apostas têm requisitos?",
    answer:
      "Sim, todos os bónus têm requisitos de apostas (rollover) que devem ser cumpridos antes de poder levantar os ganhos. Leia sempre os termos e condições de cada promoção para entender as odds mínimas, prazos e outros requisitos.",
  },
  {
    question: "É seguro apostar online em Portugal?",
    answer:
      "Sim, desde que utilize operadores licenciados pelo SRIJ. Estes sites são obrigados a seguir rigorosas normas de segurança, proteger os seus dados pessoais e financeiros, e garantir jogos justos. Verifique sempre a licença antes de se registar.",
  },
  {
    question: "Posso apostar através do telemóvel?",
    answer:
      "Sim, todas as principais casas de apostas portuguesas oferecem sites mobile otimizados ou aplicações dedicadas para iOS e Android, permitindo apostar em qualquer lugar e a qualquer momento com total segurança.",
  },
  {
    question: "Qual é a idade mínima para apostar?",
    answer:
      "Em Portugal, é necessário ter pelo menos 18 anos para poder criar uma conta e realizar apostas desportivas. As casas de apostas verificam a idade através de documentos de identificação durante o processo de registo.",
  },
  {
    question: "Como posso apostar de forma responsável?",
    answer:
      "Defina limites de depósito e apostas, nunca aposte mais do que pode perder, não tente recuperar perdas, faça pausas regulares e procure ajuda se sentir que está a perder o controlo. Visite jogoresponsavel.pt para mais informações e apoio.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white border-t-2 border-gray-300">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-2 text-center">Perguntas Frequentes</h2>
        <p className="text-gray-600 text-center mb-12">
          Respostas às questões mais comuns sobre apostas desportivas em Portugal
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-2 border-black bg-white">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-black pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-black flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 pt-2 border-t-2 border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-gray-50 border-2 border-gray-400">
          <h3 className="font-bold text-black mb-2 text-lg">Jogo Responsável</h3>
          <p className="text-gray-800 text-sm leading-relaxed">
            As apostas devem ser uma forma de entretenimento. Se sentir que está a perder o controlo, procure ajuda
            imediatamente. Visite{" "}
            <a
              href="https://jogoresponsavel.pt"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-bold hover:text-black"
            >
              jogoresponsavel.pt
            </a>{" "}
            para mais informações e apoio profissional.
          </p>
        </div>
      </div>
    </section>
  )
}
