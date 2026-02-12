import { Button } from "@/components/ui/button";
import { Scale, Award, BookOpen, Building } from "lucide-react";

export const AboutSectionV2 = () => {
    return (
        <section className="py-24 bg-premium-navy-light relative overflow-hidden" id="sobre">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-premium-navy/50 pointer-events-none hidden lg:block" />

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Image Side */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-premium-gold/20 translate-x-4 translate-y-4 rounded-[2rem]" />
                        <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="/lovable-uploads/b3e75cc6-af1b-42c4-95f1-637a98d465b5.png"
                                alt="Dra. Juliana Prost - Especialista Certificada CNJ em Mediação"
                                className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        {/* Achievement Badge */}
                        <div className="absolute -top-6 -right-6 bg-premium-gold rounded-2xl p-4 text-premium-navy shadow-glow">
                            <div className="text-center">
                                <div className="text-2xl font-bold">14 anos</div>
                                <div className="text-xs font-bold uppercase tracking-tighter">de experiência</div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-premium-gold text-sm font-bold tracking-widest uppercase block mb-2">Sobre a Especialista</span>
                            <h2 className="text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
                                Dra. Juliana <span className="text-premium-gold">Prost</span>
                            </h2>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Advogada inscrita na OAB/PR, com 14 anos de experiência em advocacia empresarial. Mediadora certificada pelo Conselho Nacional de Justiça (CNJ) e com certificação internacional em mediação.
                            </p>
                            <p className="text-gray-400 text-base leading-relaxed mt-4 italic border-l-2 border-premium-gold pl-4">
                                "Após 14 anos atuando na advocacia empresarial, percebi um padrão: a maioria dos litígios que chegava ao meu escritório poderia ter sido identificada e tratada antes de se tornar um processo."
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                            <div className="space-y-2">
                                <Award className="w-6 h-6 text-premium-gold" />
                                <span className="block text-xl font-serif font-bold text-white">14 anos</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Advocacia Empresarial</span>
                            </div>
                            <div className="space-y-2">
                                <Building className="w-6 h-6 text-premium-gold" />
                                <span className="block text-xl font-serif font-bold text-white">CNJ</span>
                                <span className="text-xs text-gray-500 uppercase tracking-wider">Certificação em Mediação</span>
                            </div>
                        </div>

                        <p className="text-gray-400 text-sm leading-relaxed">
                            Atualmente, preside a Comissão do Direito da Pessoa Idosa da OAB/PR. Desenvolveu o <strong>Protocolo de Prevenção PROST™</strong> para sistematizar técnicas de mediação aplicadas ao contexto corporativo.
                        </p>

                        <Button variant="link" className="text-premium-gold p-0 h-auto font-serif text-lg hover:text-white transition-colors decoration-premium-gold underline-offset-8">
                            Ver currículo completo &rarr;
                        </Button>
                    </div>

                </div>
            </div>
        </section>
    );
};
