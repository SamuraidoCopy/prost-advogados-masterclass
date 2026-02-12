import { Award, BookOpen, Users, Building, Scale } from "lucide-react";
import julianaPortrait from "/lovable-uploads/b3e75cc6-af1b-42c4-95f1-637a98d465b5.png";

export const AboutSection = () => {
  const credentials = [
    {
      icon: Award,
      title: "14 anos",
      description: "Experiência em advocacia empresarial"
    },
    {
      icon: Building,
      title: "Certificação CNJ",
      description: "Mediação judicial e extrajudicial"
    },
    {
      icon: Scale,
      title: "Certificação Internacional",
      description: "Mediação empresarial"
    },
    {
      icon: BookOpen,
      title: "Presidente de Comissão",
      description: "OAB/PR - Direitos da pessoa idosa"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Scale className="w-4 h-4" />
                <span>Sobre a especialista</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold text-corporate-gray mb-6">
                Dra. Juliana <span className="text-primary">Prost</span>
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Advogada inscrita na OAB/PR, com 14 anos de experiência em advocacia empresarial. Mediadora certificada pelo Conselho Nacional de Justiça (CNJ) e com certificação internacional em mediação. Atualmente, preside a Comissão do Direito da Pessoa Idosa da OAB/PR. Desenvolveu o <strong>Protocolo de Prevenção PROST™</strong> como forma de sistematizar as técnicas de mediação que aplicava em seu escritório para auxiliar empresas na identificação precoce de conflitos.
              </p>

              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary rounded-full px-4 py-2 text-sm font-medium mb-6">
                <Award className="w-4 h-4" />
                <span>OAB/PR - Membro Efetivo</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="space-y-3">
                  <div className="bg-gradient-primary p-3 rounded-xl w-12 h-12 flex items-center justify-center">
                    <credential.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-corporate-gray mb-1">
                      {credential.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {credential.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground">
              "Após 14 anos atuando na advocacia empresarial, percebi um padrão: a maioria dos litígios que chegava ao meu escritório poderia ter sido identificada e tratada antes de se tornar um processo. Foi esta observação que me levou a desenvolver uma metodologia focada especificamente na prevenção."
            </blockquote>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl blur-lg opacity-20"></div>
              <img
                src={julianaPortrait}
                alt="Dra. Juliana Prost - Especialista Certificada CNJ em Mediação"
                className="relative rounded-3xl shadow-elegant w-full"
              />

              {/* Achievement Badge */}
              <div className="absolute -top-6 -right-6 bg-corporate-gold rounded-2xl p-4 text-white shadow-glow">
                <div className="text-center">
                  <div className="text-2xl font-bold">14 anos</div>
                  <div className="text-sm opacity-90">de experiência</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-corporate-gold/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};