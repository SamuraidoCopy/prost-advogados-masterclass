import { AlertTriangle, TrendingDown, Clock, Target } from "lucide-react";

export const ProblemSectionV2 = () => {
    return (
        <section className="py-24 bg-premium-navy relative overflow-hidden" id="problema">
            {/* Background Ambience */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-premium-navy-light rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 border border-red-500/20 rounded-full px-4 py-1.5 text-xs font-bold tracking-widest uppercase mb-8">
                        <AlertTriangle className="w-4 h-4" />
                        <span>Dados do mercado jurídico brasileiro</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6 leading-tight">
                        O custo dos litígios para empresas no Brasil: <br />
                        <span className="text-gradient-gold italic">O que dizem os dados</span>
                    </h2>

                    <p className="text-xl text-gray-400 font-light leading-relaxed">
                        Segundo estudo do escritório <strong className="text-white">Amaral, Yazbek Advogados</strong>, as empresas brasileiras gastaram <strong className="text-red-400">R$ 157,38 bilhões</strong> com litígios judiciais — um aumento de 10,48% em relação ao ano anterior.
                    </p>
                </div>

                {/* Grid of Pain */}
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: TrendingDown,
                            title: "80 Milhões",
                            subtitle: "Volume de Processos",
                            desc: "Dados do CNJ indicam mais de 80 milhões de processos em tramitação. As empresas são responsáveis por 81,5% desse volume.",
                            source: "Fonte: CNJ / Amaral, Yazbek"
                        },
                        {
                            icon: Clock,
                            title: "1,95%",
                            subtitle: "Impacto no Faturamento",
                            desc: "Os gastos com litígios comprometem, em média, 1,95% do faturamento anual das empresas brasileiras.",
                            source: "Impacto na margem de lucro"
                        },
                        {
                            icon: Target,
                            title: "R$ 157 Bilhões",
                            subtitle: "Composição dos Custos",
                            desc: "Inclui condenações, multas (R$ 65 bi), custas (R$ 39 bi), honorários (R$ 17 bi) e perícias.",
                            source: "Custos ocultos e diretos"
                        }
                    ].map((item, i) => (
                        <div key={i} className="glass p-8 rounded-3xl hover:bg-white/5 transition-all duration-500 group border border-white/5 hover:border-premium-gold/30">
                            <div className="bg-premium-navy-light w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-glow">
                                <item.icon className="w-7 h-7 text-red-400" />
                            </div>
                            <h3 className="text-3xl font-serif font-bold text-white mb-1">{item.title}</h3>
                            <p className="text-xs font-bold text-premium-gold uppercase tracking-wider mb-4">{item.subtitle}</p>
                            <p className="text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4 mb-4">
                                {item.desc}
                            </p>
                            <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">
                                {item.source}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
