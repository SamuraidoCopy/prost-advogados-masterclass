import { CheckCircle, Clock, Users, Shield, Zap, Target, BookOpen, Lightbulb } from "lucide-react";
import { Button } from "@/components/ui/button";

export const PricingSection = () => {
  const features = [
    "Masterclass completa em vídeo (acesso por 12 meses)",
    "Metodologia estruturada em 3 fases do Protocolo PROST™",
    "Framework de diagnóstico preventivo",
    "Exemplo documentado de aplicação empresarial",
    "Técnicas de mediação CNJ adaptadas ao contexto corporativo",
    "Material de apoio: workbook, checklists e templates"
  ];


  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Clock className="w-4 h-4" />
            <span>Investimento</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-corporate-gray mb-6">
            Acesso à <span className="text-primary">Masterclass Educativa</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A masterclass apresenta o Protocolo PROST™ completo, com frameworks aplicáveis e materiais de apoio para implementação em sua empresa.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Offer */}
          <div className="bg-gradient-card rounded-3xl p-8 lg:p-12 shadow-elegant border-2 border-primary/20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-primary opacity-5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-4">
                  <Zap className="w-4 h-4" />
                  <span>Conteúdo Técnico e Educativo</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold text-corporate-gray mb-4">
                  Masterclass: Protocolo de Prevenção PROST™
                </h3>

                <div className="flex items-center justify-center gap-4 mb-6">
                  <div className="text-5xl font-bold text-primary">
                    R$ 197
                  </div>
                </div>

                <div className="text-lg text-muted-foreground mb-8">
                  Pagamento único - Acesso por 1 ano completo
                </div>
              </div>

              <div>
                <h4 className="text-2xl font-bold text-corporate-gray mb-6 text-center flex items-center justify-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  O que está incluído:
                </h4>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <span className="text-corporate-gray">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center mt-12">
                <Button size="lg" variant="corporate" className="text-lg px-12 py-6 mb-4">
                  <Target className="w-5 h-5 mr-2" />
                  Acessar a Masterclass
                </Button>

                <div className="space-y-4 text-sm text-muted-foreground">
                  <p>
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    Garantia de satisfação: 7 dias
                  </p>
                  <p className="max-w-md mx-auto">
                    Conforme previsto no Código de Defesa do Consumidor, você tem 7 dias após a compra para solicitar reembolso integral.
                  </p>
                  <p>
                    <CheckCircle className="w-4 h-4 inline mr-1" />
                    Garantia de acesso: suporte técnico incluído para problemas de plataforma
                  </p>
                </div>

                <div className="mt-6 space-y-2">
                  <p className="font-medium text-corporate-gray">Formas de Pagamento:</p>
                  <div className="text-sm text-muted-foreground space-y-1">
                    <p>• PIX: Acesso imediato</p>
                    <p>• Cartão: Em até 3x</p>
                    <p>• Boleto: 2 dias úteis</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="text-center mt-12 space-y-4">
            <div className="text-sm text-muted-foreground">
              <Shield className="w-4 h-4 inline mr-1" />
              Pagamento 100% seguro • 7 dias de garantia • Suporte dedicado
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};