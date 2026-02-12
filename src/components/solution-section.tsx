import { CheckCircle, Shield, Target, Zap, ClipboardList, GraduationCap, BookOpen, Layers, Users } from "lucide-react";

export const SolutionSection = () => {
  const phases = [
    {
      number: "01",
      title: "Diagnóstico Preventivo",
      description: "Processo estruturado de mapeamento das vulnerabilidades jurídicas específicas da organização."
    },
    {
      number: "02",
      title: "Mediação Estratégica",
      description: "Aplicação de técnicas de mediação certificadas pelo CNJ para prevenção de conflitos."
    },
    {
      number: "03",
      title: "Blindagem Jurídica",
      description: "Estruturação de documentos e políticas internas voltadas à prevenção de litígios."
    }
  ];

  const modules = [
    {
      number: "M1",
      title: "O Framework de Diagnóstico PROST™",
      description: "Como estruturar o mapeamento de vulnerabilidades e checklist de diagnóstico preventivo.",
      icon: Layers
    },
    {
      number: "M2",
      title: "Mediação Aplicada à Prevenção",
      description: "Diferenças entre abordagem reativa e preventiva, e técnicas de negociação para conflitos internos.",
      icon: Users
    },
    {
      number: "M3",
      title: "Implementação da Blindagem",
      description: "Contratos com cláusulas preventivas e cronograma de implementação prático.",
      icon: Shield
    }
  ];

  return (
    <section className="py-24 bg-muted/20">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-corporate-navy/5 text-corporate-navy rounded-full px-5 py-2.5 text-sm font-bold uppercase tracking-wider mb-6">
            <Shield className="w-4 h-4" />
            <span>Metodologia Estruturada</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-serif font-bold text-corporate-navy mb-6">
            Protocolo de Prevenção <span className="text-corporate-blue">PROST™</span>
          </h2>

          <p className="text-xl font-light text-corporate-gray max-w-2xl mx-auto">
            Uma abordagem em 3 fases desenvolvida ao longo de 14 anos de prática advocatícia e integrando técnicas de mediação do CNJ.
          </p>
        </div>

        {/* 3 Phases Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {phases.map((phase, index) => (
            <div key={index} className="relative group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-helper opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[2rem] blur-xl"></div>
              <div className="relative bg-white p-8 rounded-[2rem] shadow-card hover:shadow-premium border border-gray-100 h-full text-center">
                <div className="bg-corporate-navy w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white font-serif font-bold text-xl shadow-lg group-hover:bg-corporate-gold transition-colors duration-300">
                  {phase.number}
                </div>
                <h3 className="text-xl font-serif font-bold text-corporate-navy mb-4">
                  {phase.title}
                </h3>
                <p className="text-corporate-gray text-sm leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Masterclass Content */}
        <div className="bg-white rounded-[2.5rem] p-8 lg:p-16 shadow-premium relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary"></div>

          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-serif font-bold text-corporate-navy mb-4">
              Conteúdo da Masterclass
            </h3>
            <p className="text-muted-foreground">O passo a passo que será apresentado</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {modules.map((module, index) => (
              <div key={index} className="bg-muted/30 p-8 rounded-3xl border border-transparent hover:border-corporate-gold/30 hover:bg-white transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-corporate-navy font-bold text-sm border border-gray-100">
                    {module.number}
                  </div>
                  <module.icon className="w-6 h-6 text-corporate-gold" />
                </div>
                <h4 className="text-xl font-serif font-bold text-corporate-navy mb-3">
                  {module.title}
                </h4>
                <p className="text-sm text-corporate-gray leading-relaxed">
                  {module.description}
                </p>
              </div>
            ))}
          </div>

          <div className="bg-corporate-navy/5 rounded-3xl p-8 lg:p-10">
            <h4 className="text-xl font-bold text-corporate-navy mb-6 flex items-center gap-2">
              <Target className="w-5 h-5 text-corporate-gold" />
              Conteúdo Exclusivo Para:
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Empresários de médio e grande porte",
                "Gestores Jurídicos e Compliance",
                "Sócios de empresas familiares",
                "Interessados em Blindagem Patrimonial"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-corporate-gold flex-shrink-0" />
                  <span className="text-corporate-gray font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};