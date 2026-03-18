import { ExternalLink } from 'lucide-react';

/**
 * Projects Section Component
 * Design: Minimalismo Técnico - Cards flutuantes com hover effects
 * - Grid responsivo com cards brancos
 * - Badges de tecnologia em cores vibrantes
 * - Links para GitHub e demo
 */
export default function Projects() {
  const projects = [
    {
      title: 'Loopi Club',
      description: 'Aplicação mobile desenvolvida em React Native para gerenciamento de comunidades. Integração com APIs complexas, otimização de UI/UX e gerenciamento de estado avançado.',
      technologies: ['React Native', 'TypeScript', 'Context API', 'REST API', '.NET', 'Unity', 'Postman', 'Android Studio Code'],
      role: 'React Native / FullStack Game Developer',
      period: 'Loopi Group',
      link: 'https://apps.apple.com/br/app/loopi-club/id6633438519',
      status: null,
    },
    {
      title: 'SegPlay',
      description: 'Plataforma interativa desenvolvida em React Native para gamificação de segurança. Implementação de game mechanics, sistema de pontuação e integração com backend .NET.',
      technologies: ['React Native', 'Typescript', 'Context API', 'Postman', 'Android Studio Code'],
      role: 'React Native Developer',
      period: 'Loopi Group',
      link: 'https://apps.apple.com/br/app/seg-play/id6741806032',
      status: null,
    },
    {
      title: 'Carbon Asset & GHG Quantification App',
      description: 'Aplicativo de análise de dados ESG desenvolvido em React com visualizações avançadas. Backend em .NET com processamento de dados ambientais complexos.',
      technologies: ['React.js', 'C#', '.NET', 'PostgreSQL', 'Recharts', 'Postman'],
      role: 'Head of Software Development',
      period: 'AgroCarbonBR',
      link: '#',
      status: 'Em Progresso...',
    },
  ];

  return (
    <section id="projects" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Projetos de que participei</h2>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Seleção de projetos que demonstram minha expertise em desenvolvimento Full Stack, mobile e game development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl hover:border-primary transition-all duration-300"
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Content */}
                <div className="relative p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-sm text-primary font-medium">{project.role}</p>
                    <p className="text-xs text-foreground/50">{project.period}</p>
                  </div>

                  <p className="text-foreground/70 leading-relaxed">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-blue-50 text-primary text-xs font-semibold rounded-full group-hover:bg-primary group-hover:text-white transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="pt-4 border-t border-border">
                    {project.status ? (
                      <p className="text-center text-sm font-medium text-foreground/60">
                        {project.status}
                      </p>
                    ) : (
                      <div className="flex gap-3">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium text-sm"
                        >
                          Acessar app
                          <ExternalLink size={16} />
                        </a>
                        {/* <a
                          href={project.github}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-blue-50 transition-colors duration-200 font-medium text-sm"
                        >
                          GitHub
                          <Github size={16} />
                        </a> */}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center space-y-4">
            <p className="text-foreground/70 text-lg">
              Quer ver mais projetos? Visite meu GitHub para explorar meu trabalho completo.
            </p>
            <a
              href="https://github.com/MuriloGuiot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
            >
              Explorar GitHub
              <ExternalLink size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
