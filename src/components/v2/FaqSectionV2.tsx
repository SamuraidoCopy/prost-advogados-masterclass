import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSectionV2 = () => {
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
        <section className="py-24 bg-white relative" id="faq">
            <div className="container mx-auto px-6 lg:px-8 max-w-4xl">

                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-premium-navy mb-4">
                        Perguntas <span className="text-premium-gold">Frequentes</span>
                    </h2>
                    <p className="text-gray-500">
                        Esclarecimentos sobre a metodologia e a masterclass.
                    </p>
                </div>

                <Accordion type="single" collapsible className="w-full space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="border rounded-2xl px-6 data-[state=open]:bg-premium-navy/5 data-[state=open]:border-premium-gold/30 transition-all duration-300">
                            <AccordionTrigger className="text-lg font-serif font-medium text-premium-navy hover:text-premium-gold hover:no-underline py-6 text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-gray-600 leading-relaxed pb-6 text-base">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

            </div>
        </section>
    );
};
