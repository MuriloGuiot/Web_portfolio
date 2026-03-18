import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

/**
 * Footer Component
 * Design: Minimalismo Técnico - Footer limpo com links e copyright
 */
export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-bold text-lg">Portfólio</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Full Stack Developer especializado em criar soluções escaláveis e inovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Links Rápidos</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a href="#about" className="hover:text-primary transition-colors duration-200">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-primary transition-colors duration-200">
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary transition-colors duration-200">
                  Projetos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors duration-200">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Recursos</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li>
                <a
                  href="https://github.com/MuriloGuiot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/murilo-guiot-22944a2b8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="mailto:muriloguiot@gmail.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Redes Sociais</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/MuriloGuiot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-primary rounded-lg transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/murilo-guiot-22944a2b8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 hover:bg-primary rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:muriloguiot@gmail.com"
                className="p-3 bg-white/10 hover:bg-primary rounded-lg transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex items-center justify-between flex-col md:flex-row gap-4">
            <p className="text-white/50 text-sm">
              © 2026 Murilo Guiot. Todos os direitos reservados.
            </p>
            <button
              onClick={scrollToTop}
              className="p-3 bg-white/10 hover:bg-primary rounded-lg transition-colors duration-200"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
