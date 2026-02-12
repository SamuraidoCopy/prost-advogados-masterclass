import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);

  const faqs = [
    {
      question: "Esta masterclass é adequada para que tipo de empresa?",
      answer: "O Protocolo de Prevenção PROST foi desenvolvido para empresas de médio e grande porte que buscam implementar gestão jurídica preventiva. É especialmente relevante para empresas familiares, sociedades com múltiplos sócios e organizações que enfrentam complexidades relacionais internas."
    },
    {
      question: "Qual é a diferença entre esta abordagem e a advocacia tradicional?",
      answer: "A advocacia tradicional é frequentemente acionada após a instauração de conflitos. O Protocolo PROST™ é uma metodologia complementar, focada na fase anterior: a identificação de vulnerabilidades que podem gerar litígios. As duas abordagens são complementares, não excludentes."
    },
    {
      question: "Preciso ter conhecimento jurídico prévio para aplicar a metodologia?",
      answer: "Não. A masterclass foi desenvolvida para empresários e gestores. A metodologia é apresentada de forma didática e prática, com frameworks estruturados que podem ser implementados pela liderança empresarial, preferencialmente com apoio jurídico interno ou externo."
    },
    {
      question: "Por quanto tempo tenho acesso ao conteúdo da masterclass?",
      answer: "O acesso à gravação da masterclass é disponibilizado por 1 ano completo. Você pode assistir quantas vezes desejar durante este período, permitindo revisitar a metodologia conforme necessário para implementação."
    },
    {
      question: "A Dra. Juliana Prost possui quais certificações específicas em mediação?",
      answer: "A Dra. Juliana possui certificação em mediação pelo CNJ (Conselho Nacional de Justiça) e certificação internacional. Além disso, é presidente da Comissão do Direito da Pessoa Idosa da OAB/PR, com 14 anos de experiência em advocacia empresarial."
    },
    {
      question: "O investimento de R$ 197 inclui quais materiais de apoio?",
      answer: "O investimento de R$ 197 inclui: masterclass completa em vídeo (acesso por 12 meses), metodologia estruturada em 3 fases, framework de diagnóstico preventivo, exemplo documentado de aplicação, técnicas de mediação CNJ adaptadas e material de apoio (workbook e checklists)."
    },
    {
      question: "Esta metodologia substitui o acompanhamento jurídico tradicional?",
      answer: "Não. A metodologia PROST complementa o trabalho jurídico tradicional, focando especificamente na prevenção de conflitos. Recomenda-se sempre manter acompanhamento jurídico adequado para questões específicas e implementação técnica das estratégias preventivas."
    },
    {
      question: "Como funciona a garantia de 7 dias?",
      answer: "Oferecemos garantia de satisfação de 7 dias conforme Código de Defesa do Consumidor. Caso não fique satisfeito com o conteúdo educativo da masterclass, solicite reembolso integral dentro deste prazo através dos canais oficiais de atendimento."
    },
    {
      question: "Posso aplicar esta metodologia se já tenho processos em andamento?",
      answer: "Sim. Embora o foco seja preventivo, a metodologia também ensina como identificar padrões que geram conflitos recorrentes, auxiliando na prevenção de novos litígios enquanto os processos existentes tramitam pelos canais apropriados."
    },
    {
      question: "Qual o formato e duração da masterclass?",
      answer: "A masterclass tem aproximadamente 60 minutos, apresentada em formato de vídeo de alta qualidade. O conteúdo é estruturado didaticamente, cobrindo os 3 fundamentos do Protocolo PROST com case prático de aplicação empresarial."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Perguntas <span className="text-corporate-gold">Frequentes</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Esclarecimentos sobre a metodologia e a masterclass
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-card overflow-hidden"
              >
                <button
                  onClick={() => setOpenItem(openItem === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/30 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openItem === index ? (
                      <Minus className="w-5 h-5 text-corporate-gold" />
                    ) : (
                      <Plus className="w-5 h-5 text-corporate-gold" />
                    )}
                  </div>
                </button>

                <div className={cn(
                  "overflow-hidden transition-all duration-300",
                  openItem === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                )}>
                  <div className="p-6 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};