export default function About() {
  const experiences = [
    {
      title: 'Head of Software Development',
      company: 'AgroCarbonBR',
      period: 'Mar/2026 - Atual',
      description: 'Liderança técnica estratégica no desenvolvimento de soluções ESG, arquitetura .NET e dashboards React. Especialista em transformar dados ambientais complexos em plataformas B2B escaláveis.',
    },
    {
      title: 'FullStack Game Developer',
      company: 'Loopi Group',
      period: 'Dez/2025 - Atual',
      description: 'Desenvolvedor Full Stack especializado em Unity e .NET. Arquitetura de sistemas de jogo complexos e backends robustos, com foco em otimização de performance.',
    },
    {
      title: 'React Native Mobile Developer',
      company: 'Loopi Group',
      period: 'Mai/2025 - Dez/2025',
      description: 'Desenvolvedor Mobile especializado em React Native. Integração de APIs complexas, otimização de UI/UX e gerenciamento do ciclo de vida completo do desenvolvimento mobile.',
    },
    {
      title: 'QA Analyst',
      company: 'Loopi Group',
      period: 'Fev/2025 - Mai/2025',
      description: 'Analista QA detalhista em testes automatizados e manuais. Desenvolvimento de planos de teste abrangentes, identificação de bugs críticos e integração CI/CD.',
    },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-background">
      <div className="container">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Sobre Mim</h2>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Desenvolvedor Full Stack apaixonado por criar soluções escaláveis e inovadoras. Com experiência em C#, Unity, React Native e .NET, combino expertise técnica com visão estratégica.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Experiência</h3>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border border-border rounded-lg hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-foreground/50 font-medium whitespace-nowrap ml-4">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-foreground/70 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">Formação</h3>
            <div className="p-6 bg-white border border-border rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="text-lg font-semibold text-foreground">Ciência da Computação</h4>
                  <p className="text-primary font-medium">IDP, Brasília</p>
                </div>
                <span className="text-sm text-foreground/50 font-medium">2024 - 2027</span>
              </div>
              <p className="text-foreground/70">Cursando graduação em Ciência da Computação com foco em desenvolvimento de software e arquitetura de sistemas.</p>
            </div>
          </div>

          {/* Languages */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">Idiomas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-white border border-border rounded-lg">
                <p className="font-semibold text-foreground">Português</p>
                <p className="text-foreground/70">Nativo</p>
              </div>
              <div className="p-4 bg-white border border-border rounded-lg">
                <p className="font-semibold text-foreground">Inglês</p>
                <p className="text-foreground/70">Fluente</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
