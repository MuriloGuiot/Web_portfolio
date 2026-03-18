import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

/**
 * Home Page - Portfólio Murilo Guiot
 * Design: Minimalismo Técnico com acentos dinâmicos
 * 
 * Seções:
 * 1. Header - Navegação fixa
 * 2. Hero - Apresentação principal com CTA
 * 3. About - Experiência e formação
 * 4. Skills - Habilidades técnicas
 * 5. Projects - Portfólio de projetos
 * 6. Contact - Formulário e informações de contato
 * 7. Footer - Links e redes sociais
 */
export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
