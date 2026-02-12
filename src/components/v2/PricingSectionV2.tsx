import { Check, ShieldCheck, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PricingSectionV2 = () => {
    return (
        <section className="py-24 bg-premium-navy relative overflow-hidden" id="oferta">
            {/* Glow Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-premium-gold/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-8 relative z-10">

                <div className="text-center mb-16">
                    <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                        O Investimento na <span className="text-gradient-gold">Sua Segurança</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A masterclass apresenta o Protocolo PROST™ completo, com frameworks aplicáveis e materiais de apoio para implementação em sua empresa.
                    </p>
                </div>

                {/* Pricing Card */}
                <div className="max-w-lg mx-auto relative group">
                    <div className="absolute -inset-[2px] bg-gradient-to-r from-premium-gold via-white to-premium-gold rounded-[2.5rem] opacity-70 blur-sm group-hover:opacity-100 transition duration-500 animate-pulse" />

                    <div className="relative bg-premium-navy-light rounded-[2.5rem] p-10 lg:p-12 border border-white/10 shadow-2xl">
                        {/* Badge */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <div className="bg-premium-gold text-premium-navy font-bold px-6 py-2 rounded-full uppercase tracking-widest text-sm shadow-glow flex items-center gap-2">
                                <Star className="w-4 h-4 fill-current" />
                                Masterclass Premium
                            </div>
                        </div>

                        <div className="text-center mb-10 mt-4">
                            <p className="text-gray-400 text-sm italic mb-4">Pagamento único - Acesso por 1 ano completo</p>
                            <div className="flex justify-center items-baseline gap-2">
                                <span className="text-5xl font-serif font-bold text-white">R$ 197</span>
                                <span className="text-xl text-gray-500">,00</span>
                            </div>
                        </div>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Masterclass completa em vídeo (12 meses)",
                                "Metodologia Protocolo PROST™",
                                "Framework de diagnóstico preventivo",
                                "Exemplo documentado de aplicação",
                                "Técnicas de mediação CNJ adaptadas",
                                "Material de apoio: workbook e templates"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="bg-premium-gold/20 p-1 rounded-full mt-0.5">
                                        <Check className="w-3 h-3 text-premium-gold" />
                                    </div>
                                    <span className="text-gray-300 text-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <Button className="w-full bg-premium-gold hover:bg-premium-gold-light text-premium-navy font-bold py-8 text-lg rounded-xl shadow-glow transition-all hover:scale-[1.02]">
                            Acessar a Masterclass
                        </Button>

                        <div className="flex justify-center items-center gap-2 mt-6 text-xs text-gray-500 text-center">
                            <ShieldCheck className="w-4 h-4" />
                            <span>Garantia de 7 dias • Pagamento 100% seguro • Suporte dedicado</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
