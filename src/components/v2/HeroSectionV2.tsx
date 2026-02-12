import { Play, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSectionV2 = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-premium-navy py-20 lg:py-0" id="vsl">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-premium-gold/20 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-premium-navy-light rounded-full blur-[120px] pointer-events-none" />

            <div className="container relative z-10 grid lg:grid-cols-2 gap-12 items-center">

                {/* Left Content (Text) */}
                <div className="space-y-8 text-center lg:text-left">
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass border border-premium-gold/30 text-premium-gold text-sm font-medium animate-fade-in">
                        <Flame className="w-4 h-4 mr-2 animate-pulse" />
                        Masterclass Educativa | Conteúdo Jurídico Especializado
                    </div>

                    <h1 className="text-4xl lg:text-6xl font-serif font-bold text-white leading-tight">
                        Por que <span className="text-gradient-gold">80 milhões de processos</span> <br />
                        tramitam no Brasil e o que empresas estratégicas fazem diferente
                    </h1>

                    <p className="text-lg text-gray-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        Mediadora certificada pelo CNJ e com certificação internacional apresenta a metodologia de 3 fases utilizada para mapear vulnerabilidades jurídicas em empresas de médio e grande porte.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Button size="lg" className="bg-premium-gold hover:bg-premium-gold-light text-premium-navy font-bold text-lg px-8 py-6 rounded-full shadow-glow transition-all hover:scale-105">
                            Acessar a Masterclass Educativa
                        </Button>
                        <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 rounded-full px-8 py-6">
                            Falar com Especialista
                        </Button>
                    </div>
                </div>

                {/* Right Content (VSL Box) */}
                <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-premium-gold to-premium-navy rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-2xl overflow-hidden glass-card shadow-2xl aspect-video flex items-center justify-center border border-white/10">
                        {/* Simulation of a video thumbnail */}
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/30 transition-all z-20">
                            <div className="w-20 h-20 rounded-full bg-premium-gold/90 flex items-center justify-center pl-1 shadow-glow cursor-pointer hover:scale-110 transition-transform">
                                <Play className="w-8 h-8 text-premium-navy fill-current" />
                            </div>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent z-10">
                            <p className="text-white font-bold text-sm">"O Protocolo PROST™: Como Empresas Mapeiam e Previnem Conflitos Jurídicos"</p>
                        </div>
                        <img
                            src="/lovable-uploads/b3e75cc6-af1b-42c4-95f1-637a98d465b5.png"
                            alt="Masterclass Preview"
                            className="w-full h-full object-cover opacity-60"
                        />
                    </div>
                    <p className="mt-4 text-center text-sm text-gray-400">
                        <span className="text-premium-gold mr-1">⚠️</span> Conteúdo desenvolvido para gestores e empresários
                    </p>
                </div>

            </div>
        </section>
    );
};
