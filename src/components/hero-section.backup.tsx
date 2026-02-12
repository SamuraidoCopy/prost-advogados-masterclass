import { Button } from "@/components/ui/button";
import { Shield, Users, TrendingUp } from "lucide-react";
import lawyerPortrait from "@/assets/lawyer-portrait.jpg";

export const HeroSection = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-corporate-navy">
            {/* Background Elements - Sophisticated Gradients */}
            <div className="absolute inset-0 bg-gradient-hero opacity-90 z-0"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] z-0"></div>

            {/* Ambient Light/Aurora Effect (CSS only, no heavy JS) */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-corporate-blue rounded-full blur-[120px] opacity-40"></div>
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-corporate-gold rounded-full blur-[120px] opacity-20"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10 py-20">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <div className="space-y-10 animate-fade-in text-center lg:text-left">
                        <div className="space-y-6">
                            <div className="inline-flex items-center gap-3 bg-white/5 backdrop-blur-md rounded-full px-5 py-2.5 text-sm text-white border border-white/10 shadow-lg">
                                <Shield className="w-4 h-4 text-corporate-gold" />
                                <span className="tracking-wide">Masterclass Educativa | Conteúdo Jurídico Especializado</span>
                            </div>

                            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-serif font-bold text-white leading-[1.1] tracking-tight">
                                Por que <span className="text-corporate-gold italic">80 milhões</span> de processos tramitam no Brasil?
                            </h1>

                            <p className="text-lg lg:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                                Descubra o que empresas estratégicas fazem diferente. <strong className="text-white">Mediadora certificada pelo CNJ</strong> apresenta a metodologia de 3 fases para blindagem jurídica em médio e grande porte.
                            </p>
                        </div>

                        {/* Stats - Refined */}
                        <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
                            <div className="text-center lg:text-left">
                                <div className="text-4xl font-serif font-bold text-white mb-1">14<span className="text-corporate-gold text-2xl">+</span></div>
                                <div className="text-xs uppercase tracking-wider text-white/60">Anos de Experiência</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-4xl font-serif font-bold text-white mb-1">CNJ</div>
                                <div className="text-xs uppercase tracking-wider text-white/60">Certificação Judicial</div>
                            </div>
                            <div className="text-center lg:text-left">
                                <div className="text-4xl font-serif font-bold text-white mb-1">OAB</div>
                                <div className="text-xs uppercase tracking-wider text-white/60">Presidente Comissão</div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" variant="corporate" className="w-full sm:w-auto h-14 px-8 text-base">
                                <Users className="w-5 h-5 mr-3" />
                                Acessar Masterclass Gratuita
                            </Button>
                        </div>
                    </div>

                    {/* Image - Premium Presentation */}
                    <div className="relative hidden lg:block">
                        <div className="relative z-10">
                            <div className="absolute inset-0 bg-gradient-to-tr from-corporate-navy/80 to-transparent rounded-[2rem] z-20 mix-blend-multiply"></div>
                            <img
                                src={lawyerPortrait}
                                alt="Dra. Especialista em Direito Empresarial"
                                className="relative rounded-[2rem] shadow-premium w-full max-w-lg mx-auto object-cover border border-white/10"
                            />

                            {/* Verified Badge - Glassmorphism */}
                            <div className="absolute -bottom-10 -left-10 bg-white/95 backdrop-blur-xl rounded-xl p-6 shadow-premium z-30 max-w-xs border border-white/20">
                                <div className="flex items-start gap-4">
                                    <div className="bg-corporate-gold p-3 rounded-lg shadow-lg">
                                        <TrendingUp className="w-6 h-6 text-corporate-navy" />
                                    </div>
                                    <div>
                                        <div className="font-serif font-bold text-corporate-navy text-2xl">+25 Anos</div>
                                        <div className="text-sm text-corporate-gray/80 leading-snug">
                                            De atuação combinada na defesa de empresas.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Frame */}
                        <div className="absolute top-10 -right-10 w-full h-full border-2 border-corporate-gold/30 rounded-[2rem] -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};
