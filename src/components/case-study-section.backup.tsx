import { CheckCircle, Clock, Users, Building, ClipboardList, ArrowRight } from "lucide-react";

export const CaseStudySection = () => {
    const vulnerabilities = [
        {
            title: "Sobreposição de funções",
            description: "Decisões conflitantes chegavam às equipes, gerando paralisia operacional.",
            icon: Users
        },
        {
            title: "Comunicação fragmentada",
            description: "Clientes recebiam informações divergentes, afetando a credibilidade da marca.",
            icon: ClipboardList
        },
        {
            title: "Projetos paralisados",
            description: "Falta de consenso estratégico impedia a inovação e expansão.",
            icon: Clock
        }
    ];

    const phases = [
        {
            number: "01",
            title: "Diagnóstico Preventivo",
            description: "Mapeamento profundo das vulnerabilidades da estrutura societária e identificação de padrões de conflito."
        },
        {
            number: "02",
            title: "Mediação Estratégica",
            description: "Aplicação de técnicas certificadas pelo CNJ para restaurar a comunicação e documentar novos acordos."
        },
        {
            number: "03",
            title: "Blindagem Jurídica",
            description: "Reestruturação formal dos processos e consolidação do acordo societário com atribuições claras."
        }
    ];

    return (
        <section className="py-24 bg-muted/30 relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-corporate-blue/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-corporate-gold/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 text-corporate-gold font-bold text-sm tracking-widest uppercase mb-4">
                            <span className="w-8 h-[1px] bg-corporate-gold"></span>
                            Estudo de Caso
                            <span className="w-8 h-[1px] bg-corporate-gold"></span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-corporate-navy mb-6">
                            O Protocolo PROST™ <span className="italic text-corporate-blue">na Prática</span>
                        </h2>

                        <p className="text-xl text-corporate-gray leading-relaxed max-w-2xl mx-auto font-light">
                            Uma análise real de como a metodologia transformou uma empresa familiar em crise em uma operação blindada e eficiente.
                        </p>
                    </div>

                    <div className="space-y-16">
                        {/* Context Card - Glassmorphism */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-[2rem] p-10 shadow-premium border border-white/50 relative overflow-hidden group hover:shadow-elegant transition-all duration-500">
                            <div className="absolute top-0 left-0 w-2 h-full bg-corporate-navy"></div>
                            <div className="relative z-10">
                                <h3 className="text-2xl font-serif font-bold text-corporate-navy mb-6 flex items-center gap-3">
                                    <Building className="w-6 h-6 text-corporate-gold" />
                                    O Cenário
                                </h3>
                                <div className="space-y-4 text-corporate-gray leading-relaxed">
                                    <p>
                                        <strong className="text-corporate-navy">Perfil:</strong> Metalúrgica com 15 anos de mercado.
                                    </p>
                                    <p>
                                        <strong className="text-corporate-navy">Desafio:</strong> Sociedade entre dois irmãos (Comercial vs. Técnico) cuja relação deteriorada impactava diretamente o faturamento e a retenção de talentos.
                                    </p>
                                    <p className="italic text-sm text-muted-foreground border-l-2 border-corporate-gold/30 pl-4 mt-6">
                                        *Dados anonimizados com autorização expressa para fins educativos.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Vulnerabilities Grid */}
                        <div>
                            <h3 className="text-2xl font-serif font-bold text-corporate-navy mb-8 text-center">
                                Vulnerabilidades Detectadas
                            </h3>
                            <div className="grid md:grid-cols-3 gap-6">
                                {vulnerabilities.map((item, index) => (
                                    <div key={index} className="bg-white p-8 rounded-2xl shadow-card hover:shadow-premium transition-all duration-300 border border-transparent hover:border-corporate-gold/20 group">
                                        <div className="w-12 h-12 bg-corporate-navy/5 rounded-xl flex items-center justify-center mb-6 text-corporate-navy group-hover:bg-corporate-navy group-hover:text-white transition-colors duration-300">
                                            <item.icon className="w-6 h-6" />
                                        </div>
                                        <h4 className="font-serif font-bold text-lg text-corporate-navy mb-3">
                                            {item.title}
                                        </h4>
                                        <p className="text-sm text-corporate-gray leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Methodology Flow */}
                        <div className="bg-corporate-navy rounded-[2.5rem] p-8 lg:p-12 text-white relative overflow-hidden shadow-2xl">
                            {/* Abstract graphics */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="text-2xl font-serif font-bold text-white mb-12 text-center relative z-10">
                                A Intervenção: Protocolo PROST™
                            </h3>

                            <div className="grid lg:grid-cols-3 gap-8 relative z-10">
                                {phases.map((phase, index) => (
                                    <div key={index} className="relative group">
                                        <div className="text-6xl font-serif font-bold text-white/10 mb-[-20px] ml-4 transition-all duration-300 group-hover:text-corporate-gold/20">
                                            {phase.number}
                                        </div>
                                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/15 transition-all duration-300 h-full">
                                            <h4 className="text-xl font-serif font-bold text-corporate-gold mb-3">
                                                {phase.title}
                                            </h4>
                                            <p className="text-white/80 text-sm leading-relaxed">
                                                {phase.description}
                                            </p>
                                        </div>
                                        {/* Connector Line (Desktop) */}
                                        {index < phases.length - 1 && (
                                            <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[1px] bg-white/20 z-0"></div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Results / ROI */}
                        <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-[2rem] p-8 shadow-premium border border-gray-100">
                            <div>
                                <h3 className="text-2xl font-serif font-bold text-corporate-navy mb-4">
                                    Resultados Consolidados
                                </h3>
                                <p className="text-corporate-gray mb-6">
                                    Após 180 dias de implementação, a empresa retomou seu ritmo de crescimento.
                                </p>
                                <div className="flex flex-col gap-4">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                        <span className="text-corporate-navy font-medium">Acordo societário assinado</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600" />
                                        <span className="text-corporate-navy font-medium">Definição clara de papéis</span>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-muted p-6 rounded-xl border-l-4 border-corporate-gold italic text-corporate-gray text-lg">
                                "O processo não só salvou a sociedade, mas profissionalizou nossa gestão. Hoje os conflitos são resolvidos na origem."
                                <div className="mt-4 text-sm font-bold text-corporate-navy not-italic">
                                    — Sócio Diretor Comercial
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
