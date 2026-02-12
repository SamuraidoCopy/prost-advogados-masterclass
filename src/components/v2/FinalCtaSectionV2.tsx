import { Button } from "@/components/ui/button";
import { Shield, BookOpen, CheckCircle } from "lucide-react";

export const FinalCtaSectionV2 = () => {
    return (
        <section className="py-32 bg-gradient-to-br from-premium-navy to-black relative text-center overflow-hidden">
            {/* Background Radial */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl opacity-20 bg-premium-gold/20 blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-4xl">
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 bg-premium-gold/10 text-premium-gold border border-premium-gold/20 rounded-full px-6 py-2 text-sm font-medium">
                        <Shield className="w-4 h-4" />
                        <span>Acesso à Masterclass Educativa</span>
                    </div>
                </div>

                <h2 className="text-4xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                    A prevenção de conflitos como <br />
                    <span className="text-gradient-gold italic">disciplina de gestão</span>
                </h2>

                <p className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
                    Metodologias de prevenção — como o Protocolo PROST™ — têm como objetivo auxiliar organizações a identificar vulnerabilidades antes que se convertam em litígios.
                </p>

                <div className="bg-white/5 backdrop-blur-sm rounded-[2.5rem] p-10 lg:p-12 border border-white/10 mb-12">
                    <div className="text-4xl font-serif font-bold text-premium-gold mb-4">
                        R$ 197
                    </div>
                    <p className="text-gray-400 mb-8">Acesso por 1 ano completo</p>

                    <Button size="lg" className="bg-premium-gold hover:bg-premium-gold-light text-premium-navy font-bold text-xl px-12 py-8 rounded-full shadow-glow transition-all hover:scale-105 mb-6">
                        <BookOpen className="w-5 h-5 mr-3" />
                        Acessar a Masterclass
                    </Button>

                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-premium-gold" />
                            <span>Acesso imediato</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-premium-gold" />
                            <span>Garantia de 7 dias</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-premium-gold" />
                            <span>Suporte incluído</span>
                        </div>
                    </div>
                </div>

                <p className="text-gray-500 text-sm">
                    Protocolo de Prevenção PROST™: 14 anos de experiência e certificação CNJ aplicados à segurança da sua gestão.
                </p>
            </div>
        </section>
    );
};
