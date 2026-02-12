import { Button } from "@/components/ui/button";
import { Clock, Shield, Zap, GraduationCap, Scale, AlertTriangle, CheckCircle, BookOpen } from "lucide-react";

export const FinalCtaSection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-20 w-24 h-24 bg-corporate-gold rounded-full opacity-20 blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-primary-glow rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-primary/20 text-white rounded-full px-6 py-3 text-sm font-medium">
              <Shield className="w-4 h-4" />
              <span>Acesso à Masterclass Educativa</span>
            </div>

            <h2 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
              A prevenção de conflitos como
              <br />
              <span className="text-corporate-gold">disciplina de gestão</span>
            </h2>

            <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Os dados do CNJ indicam mais de 80 milhões de processos em tramitação no Brasil. Segundo estudo do escritório Amaral, Yazbek, as empresas são responsáveis por 81,5% desse volume, com custo médio de R$ 94 mil por processo.
              <br /><br />
              Metodologias de prevenção — como o Protocolo PROST™ — têm como objetivo auxiliar organizações a identificar vulnerabilidades antes que se convertam em litígios.
            </p>

            {/* Urgency Points */}
            <div className="grid md:grid-cols-3 gap-6 my-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <GraduationCap className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Metodologia estruturada</h3>
                <p className="text-white/80 text-sm">
                  Protocolo desenvolvido por advogada com 14 anos de experiência
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <Scale className="w-12 h-12 text-white" />
                </div>
                <p className="text-white font-semibold mb-2">Técnicas certificadas</p>
                <p className="text-white/80 text-sm">
                  Base em certificação CNJ em mediação
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex justify-center mb-4">
                  <Shield className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Conteúdo técnico</h3>
                <p className="text-white/80 text-sm">
                  Framework documentado em 3 fases
                </p>
              </div>
            </div>

            {/* Price Reminder */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="text-4xl font-bold text-corporate-gold">
                  R$ 197
                </div>
              </div>
              <div className="text-white/80 mb-6">
                Acesso por 1 ano completo
              </div>

              <Button size="lg" variant="corporate" className="text-xl px-12 py-6 mb-4">
                <BookOpen className="w-5 h-5 mr-2" />
                Acessar a Masterclass
              </Button>

              <div className="space-y-2 text-sm text-white/70">
                <p>
                  <CheckCircle className="w-4 h-4 inline mr-1" />
                  Acesso imediato •
                  <CheckCircle className="w-4 h-4 inline mx-1" />
                  Garantia de 7 dias •
                  <CheckCircle className="w-4 h-4 inline mx-1" />
                  Suporte incluído
                </p>
              </div>
            </div>

            {/* Final Warning */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <p className="text-white text-lg">
                <Shield className="w-5 h-5 inline mr-2 text-corporate-gold" />
                Protocole de Prevenção PROST™: 14 anos de experiência e certificação CNJ aplicados à segurança da sua gestão.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};