import { HeroSectionV2 } from "@/components/v2/HeroSectionV2";
import { ProblemSectionV2 } from "@/components/v2/ProblemSectionV2";
import { SolutionSectionV2 } from "@/components/v2/SolutionSectionV2";
import { AboutSectionV2 } from "@/components/v2/AboutSectionV2";
import { PricingSectionV2 } from "@/components/v2/PricingSectionV2";
import { FaqSectionV2 } from "@/components/v2/FaqSectionV2";
import { FinalCtaSectionV2 } from "@/components/v2/FinalCtaSectionV2";
import { CaseStudySection } from "@/components/case-study-section";
import { Footer } from "@/components/footer";

const v2Styles = `
  .glass {
    background-color: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  .glass-card {
    background-color: rgba(17, 34, 64, 0.5);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 20px 40px -10px rgba(10, 25, 47, 0.5);
  }

  .text-gradient-gold {
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    background-image: linear-gradient(to right, #C5A065, #E5C590);
  }
`;

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-premium-gold selection:text-premium-navy">
      <style>{v2Styles}</style>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-white/20">
        <div className="container flex items-center justify-between h-16">
          <span className="font-serif text-xl font-bold text-premium-navy">Prost Advogados</span>
          <nav className="hidden md:flex gap-6">
            <a href="#vsl" className="text-sm font-medium text-gray-600 hover:text-premium-gold transition-colors">Masterclass</a>
            <a href="#solucao" className="text-sm font-medium text-gray-600 hover:text-premium-gold transition-colors">Solução</a>
            <a href="#sobre" className="text-sm font-medium text-gray-600 hover:text-premium-gold transition-colors">Sobre</a>
          </nav>
          <button className="px-4 py-2 text-sm font-medium text-white bg-premium-navy rounded-full hover:bg-premium-navy-light transition-colors shadow-lg">
            Fale Conosco
          </button>
        </div>
      </header>

      <main>
        <HeroSectionV2 />
        <ProblemSectionV2 />
        <SolutionSectionV2 />
        <AboutSectionV2 />
        <CaseStudySection />
        <PricingSectionV2 />
        <FaqSectionV2 />
        <FinalCtaSectionV2 />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
