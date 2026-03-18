import { ArrowRight, Github, Linkedin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030783766/ihyVQBJNyiEFGnQrhRiS9Y/hero-gradient-iGmPSoJhzdWXoSRVYzvuRU.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 bg-blue-50 border border-primary rounded-full">
                <span className="text-primary font-semibold text-sm">Full Stack Developer</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
                Murilo Guiot
              </h1>
              <p className="text-xl text-foreground/70 max-w-lg leading-relaxed">
                Head de Desenvolvimento de Software na AgroCarbonBR. Especializado em C#, Unity, React Native e .NET. Transformando ideias complexas em soluções escaláveis.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
              >
                Ver Projetos
                <ArrowRight size={20} />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg hover:bg-blue-50 transition-colors duration-200 font-semibold"
              >
                Entrar em Contato
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-4">
              <a
                href="https://linkedin.com/in/murilo-guiot-22944a2b8"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-primary hover:text-white rounded-lg transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/MuriloGuiot"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted hover:bg-primary hover:text-white rounded-lg transition-colors duration-200"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Right content - Illustration */}
          <div className="hidden md:flex items-center justify-center">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030783766/ihyVQBJNyiEFGnQrhRiS9Y/developer-illustration-6zcZDiF5QZXd59kUoaLyaG.webp"
              alt="Developer illustration"
              className="w-full max-w-md h-auto drop-shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm text-foreground/50 font-medium">Scroll para explorar</span>
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
