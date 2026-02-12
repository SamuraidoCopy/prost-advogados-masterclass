import { AlertTriangle, TrendingDown, Clock, Target } from "lucide-react";

export const ProblemSection = () => {
    return (
        <section className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-6xl mx-auto">
                    {/* Badge */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 bg-destructive/10 text-destructive rounded-full px-6 py-3 text-sm font-bold tracking-wide uppercase mb-8 border border-destructive/20">
                            <AlertTriangle className="w-4 h-4" />
                            <span>Dados do mercado jurídico brasileiro</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-corporate-navy mb-8 leading-tight">
                            O custo dos litígios para empresas no Brasil: <span className="text-corporate-gold italic">O que dizem os dados</span>
                        </h2>

                        <p className="text-xl text-corporate-gray max-w-4xl mx-auto leading-relaxed font-light">
                            Segundo estudo do escritório <strong className="text-corporate-navy">Amaral, Yazbek Advogados</strong>, as empresas brasileiras gastaram <strong className="text-destructive">R$ 157,38 bilhões</strong> com litígios judiciais em 2016 — um aumento de 10,48% em relação ao ano anterior.
                        </p>
                    </div>

                    {/* Pain Points Grid */}
                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <div className="bg-white rounded-[2rem] p-10 shadow-card hover:shadow-premium transition-all duration-300 border border-gray-100 group">
                            <div className="flex items-start gap-6">
                                <div className="bg-destructive/10 p-4 rounded-2xl group-hover:bg-destructive group-hover:text-white transition-colors duration-300">
                                    <TrendingDown className="w-8 h-8 text-destructive group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-corporate-navy mb-4">Volume de litígios</h3>
                                    <p className="text-corporate-gray mb-6 leading-relaxed">
                                        Dados do CNJ indicam mais de <strong className="text-corporate-navy">80 milhões de processos</strong> em tramitação no país. As empresas são responsáveis por 81,5% desse volume.
                                    </p>
                                    <div className="text-xs uppercase tracking-widest text-corporate-gold font-bold">
                                        Fonte: CNJ / Amaral, Yazbek (2016)
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2rem] p-10 shadow-card hover:shadow-premium transition-all duration-300 border border-gray-100 group">
                            <div className="flex items-start gap-6">
                                <div className="bg-destructive/10 p-4 rounded-2xl group-hover:bg-destructive group-hover:text-white transition-colors duration-300">
                                    <Clock className="w-8 h-8 text-destructive group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-corporate-navy mb-4">Impacto no Faturamento</h3>
                                    <p className="text-corporate-gray mb-6 leading-relaxed">
                                        Os gastos com litígios comprometem, em média, <strong className="text-corporate-navy">1,95% do faturamento anual</strong> das empresas brasileiras.
                                    </p>
                                    <div className="text-xs uppercase tracking-widest text-corporate-gold font-bold">
                                        Impacto direto na margem de lucro
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-[2rem] p-10 shadow-card hover:shadow-premium transition-all duration-300 border border-gray-100 group">
                            <div className="flex items-start gap-6">
                                <div className="bg-destructive/10 p-4 rounded-2xl group-hover:bg-destructive group-hover:text-white transition-colors duration-300">
                                    <Target className="w-8 h-8 text-destructive group-hover:text-white transition-colors" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-corporate-navy mb-4">Composição dos Custos</h3>
                                    <p className="text-corporate-gray mb-6 leading-relaxed">
                                        Os R$ 157 bilhões incluem: condenações e multas (R$ 65 bi), custas (R$ 39 bi), honorários (R$ 17 bi) e perícias (R$ 2,1 bi).
                                    </p>
                                    <div className="text-xs uppercase tracking-widest text-corporate-gold font-bold">
                                        Custos ocultos e diretos
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-corporate-navy rounded-[2rem] p-10 shadow-premium border border-corporate-navy group text-white relative overflow-hidden">
                            {/* Decorative */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-corporate-gold/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>

                            <div className="flex items-start gap-6 relative z-10">
                                <div className="bg-white/10 p-4 rounded-2xl">
                                    <AlertTriangle className="w-8 h-8 text-corporate-gold" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-serif font-bold text-white mb-4">A Questão da Prevenção</h3>
                                    <p className="text-white/80 mb-6 leading-relaxed">
                                        Metodologias preventivas identificam vulnerabilidades <strong className="text-white">antes</strong> que se convertam em litígios. Esta masterclass apresenta exatamente isso.
                                    </p>
                                    <div className="text-xs uppercase tracking-widest text-corporate-gold font-bold">
                                        Abordagem Estratégica
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
