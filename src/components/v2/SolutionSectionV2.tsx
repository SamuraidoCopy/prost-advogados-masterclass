import { Shield, Layers, Users, Zap, CheckCircle, Target } from "lucide-react";

export const SolutionSectionV2 = () => {
    const steps = [
        {
            num: "01",
            title: "Diagnóstico Preventivo",
            desc: "Processo estruturado de mapeamento das vulnerabilidades jurídicas específicas da organização."
        },
        {
            num: "02",
            title: "Mediação Estratégica",
            desc: "Aplicação de técnicas de mediação certificadas pelo CNJ para prevenção de conflitos."
        },
        {
            num: "03",
            title: "Blindagem Jurídica",
            desc: "Estruturação de documentos e políticas internas voltadas à prevenção de litígios."
        }
    ];

    return (
        <section className="py-24 bg-gradient-to-b from-white to-premium-cream relative" id="solucao">
            <div className="container mx-auto px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="text-premium-gold font-bold tracking-widest text-sm uppercase mb-4 block">Metodologia Estruturada</span>
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-premium-navy mb-6">
                        Protocolo de Prevenção <span className="text-premium-gold">PROST™</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
                        Uma abordagem em 3 fases desenvolvida ao longo de 14 anos de prática advocatícia e integrando técnicas de mediação do CNJ.
                    </p>
                </div>

                {/* The 3 Pillars */}
                <div className="grid lg:grid-cols-3 gap-8 mb-24">
                    {steps.map((step, i) => (
                        <div key={i} className="relative group">
                            <div className="absolute inset-0 bg-white rounded-[2rem] shadow-xl translate-y-2 translate-x-2 group-hover:translate-y-4 group-hover:translate-x-4 transition-transform duration-300 bg-premium-navy/5" />
                            <div className="relative bg-white border border-gray-100 p-10 rounded-[2rem] h-full hover:-translate-y-1 transition-transform duration-300">
                                <div className="text-6xl font-serif font-bold text-premium-gold/20 absolute top-6 right-8 select-none">
                                    {step.num}
                                </div>
                                <h3 className="text-2xl font-bold text-premium-navy mb-4 relative z-10">{step.title}</h3>
                                <p className="text-gray-500 leading-relaxed relative z-10 text-sm">
                                    {step.desc}
                                </p>
                                <div className="w-12 h-1 bg-premium-gold mt-6 group-hover:w-full transition-all duration-500" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* Masterclass Modules Breakdown */}
                <div className="bg-premium-navy rounded-[3rem] p-10 lg:p-16 text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-premium-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />

                    <div className="flex flex-col lg:flex-row gap-16 relative z-10">
                        <div className="lg:w-1/3">
                            <h3 className="text-3xl font-serif font-bold mb-6">Conteúdo da Masterclass</h3>
                            <p className="text-gray-400 mb-8 leading-relaxed text-sm">
                                Nesta Masterclass, a Dra. Juliana Prost apresenta o passo a passo da metodologia focada especificamente na prevenção de conflitos.
                            </p>
                            <div className="space-y-4">
                                <h4 className="text-xs uppercase tracking-widest text-premium-gold font-bold mb-4">Público-Alvo:</h4>
                                {[
                                    "Empresários de médio e grande porte",
                                    "Gestores Jurídicos e Compliance",
                                    "Sócios de empresas familiares",
                                    "Interessados em Blindagem Patrimonial"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3">
                                        <CheckCircle className="text-premium-gold w-4 h-4" />
                                        <span className="text-xs font-medium text-gray-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="lg:w-2/3 grid gap-6">
                            <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="bg-premium-gold/20 p-3 rounded-lg"><Layers className="w-6 h-6 text-premium-gold" /></div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">M1: O Framework de Diagnóstico PROST™</h4>
                                    <p className="text-gray-400 text-sm">Como estruturar o mapeamento de vulnerabilidades e checklist de diagnóstico preventivo.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="bg-premium-gold/20 p-3 rounded-lg"><Users className="w-6 h-6 text-premium-gold" /></div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">M2: Mediação Aplicada à Prevenção</h4>
                                    <p className="text-gray-400 text-sm">Diferenças entre abordagem reativa e preventiva, e técnicas de negociação para conflitos internos.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-5 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors">
                                <div className="bg-premium-gold/20 p-3 rounded-lg"><Shield className="w-6 h-6 text-premium-gold" /></div>
                                <div>
                                    <h4 className="text-lg font-bold text-white mb-1">M3: Implementação da Blindagem</h4>
                                    <p className="text-gray-400 text-sm">Contratos com cláusulas preventivas e cronograma de implementação prático.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
