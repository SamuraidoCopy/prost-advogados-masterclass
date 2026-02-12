import { Mail, Phone, Shield, AlertTriangle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-corporate-gray text-white">
      <div className="container mx-auto px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-primary p-2 rounded-xl">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Prost Advogados</h3>
                <p className="text-sm text-white/70">Blindagem Jurídica</p>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Protegendo empresas brasileiras há mais de 14 anos com estratégias 
              jurídicas preventivas e eficazes.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-corporate-gold" />
                <span className="text-white/80">contato@prostadvogados.com.br</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-corporate-gold" />
                <span className="text-white/80">(11) 99999-9999</span>
              </div>
            </div>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Informações Legais</h4>
            
            <div className="space-y-2 text-sm text-white/80">
              <p>Este site não faz parte do Facebook ou Facebook Inc.</p>
              <p>Este site não é endossado pelo Facebook de forma alguma.</p>
              <p>Resultados podem variar de pessoa para pessoa.</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2025 Prost Advogados. Todos os direitos reservados.
            </p>
            
            <div className="flex gap-6 text-sm text-white/60">
              <a href="#" className="hover:text-white transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-white/5 rounded-xl">
            <p className="text-white/60 text-sm leading-relaxed flex items-start gap-2">
              <AlertTriangle className="w-4 h-4 mt-0.5 flex-shrink-0" />
              <span>
                <strong>Lembre-se:</strong> O custo de uma única crise jurídica pode ser 10x maior que este investimento. Não espere o problema acontecer.
              </span>
            </p>
            <p className="text-white/60 text-xs mt-4">
              Esta masterclass oferece conteúdo educacional sobre prevenção de conflitos empresariais. Não substitui consulta jurídica personalizada para casos específicos. 
              Dra. Juliana Prost - OAB/PR [número]. Empresa: Prost Advogados. Garantia de 7 dias conforme Código de Defesa do Consumidor.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};