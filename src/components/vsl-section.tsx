import { Button } from "@/components/ui/button";
import { Play, Clock, Users, Flame, Zap, Shield, DollarSign, GraduationCap, Scale, Target } from "lucide-react";

export const VslSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-20 w-32 h-32 bg-corporate-gold rounded-full opacity-10 blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-40 h-40 bg-primary-glow rounded-full opacity-10 blur-xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Pre-headline */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-corporate-gold/20 text-white rounded-full px-6 py-3 text-sm font-medium mb-6 border border-corporate-gold/30">
              <Flame className="w-4 h-4" />
              <span>Masterclass Educativa | Conteúdo Jurídico Especializado</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Por que <span className="text-corporate-gold">80 milhões de processos</span>
              <br />
              tramitam no Brasil e o que empresas estratégicas fazem diferente
            </h1>

            <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
              Mediadora certificada pelo CNJ e com certificação internacional apresenta a metodologia de 3 fases utilizada para mapear vulnerabilidades jurídicas em empresas de médio e grande porte.
            </p>
          </div>

          {/* VSL Container */}
          <div className="relative mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 shadow-elegant border border-white/20">
              {/* Video Placeholder */}
              <div className="relative bg-black rounded-2xl overflow-hidden shadow-glow">
                <div className="aspect-video bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-corporate-gold/20 backdrop-blur-sm rounded-full p-8 mb-6 mx-auto w-fit border border-corporate-gold/30">
                      <Play className="w-16 h-16 text-corporate-gold" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">
                      "O Protocolo PROST™: Como Empresas Mapeiam e Previnem Conflitos Jurídicos"
                    </h3>
                    <p className="text-white/80 text-lg mb-6">
                      Conteúdo desenvolvido para gestores e empresários que buscam compreender metodologias de prevenção jurídica.
                    </p>
                    <Button size="lg" variant="corporate" className="text-xl px-8 py-4">
                      <Target className="w-5 h-5 mr-2" />
                      Acessar a Masterclass Educativa
                    </Button>
                  </div>
                </div>

                {/* Removed Video Stats Overlay as per OAB compliance guidelines */}
              </div>
            </div>
          </div>

          {/* Quick Benefits */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Zap className="w-8 h-8 text-corporate-gold" />
              </div>
              <h4 className="font-semibold text-white mb-2">Metodologia Estruturada</h4>
              <p className="text-sm text-white/80">
                Framework de 3 fases documentado
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Shield className="w-8 h-8 text-corporate-gold" />
              </div>
              <h4 className="font-semibold text-white mb-2">Base Técnica Certificada</h4>
              <p className="text-sm text-white/80">
                Técnicas de mediação CNJ
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-2">
                <DollarSign className="w-8 h-8 text-corporate-gold" />
              </div>
              <h4 className="font-semibold text-white mb-2">Aplicação Empresarial</h4>
              <p className="text-sm text-white/80">
                Adaptado ao contexto corporativo
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="text-center">
            <p className="text-white/90 mb-6 font-medium">
              Metodologia desenvolvida ao longo de 14 anos de prática em advocacia empresarial, com base em certificação CNJ em mediação e certificação internacional.
            </p>

            <div className="text-center">
              <div className="text-sm text-corporate-gold font-medium">
                <GraduationCap className="w-4 h-4 inline mr-1" />
                Especialista certificada CNJ em mediação |
                <Scale className="w-4 h-4 inline mx-1" />
                Presidente de comissão OAB/PR
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};