import { Code2, Gamepad2, Smartphone, Database, GitBranch, CheckCircle } from 'lucide-react';

/**
 * Skills Section Component
 * Design: Minimalismo Técnico - Grid de skills com ícones
 * - Cards com ícones em azul elétrico e laranja
 * - Hover effects com elevação sutil
 * - Organização por categoria
 */
export default function Skills() {
  const skillCategories = [
    {
      title: 'Linguagens',
      icon: Code2,
      skills: ['C#', 'TypeScript', 'JavaScript', 'Java'],
    },
    {
      title: 'Game Development',
      icon: Gamepad2,
      skills: ['Unity Engine (C#)', 'Game Loop Optimization', 'State Management'],
    },
    {
      title: 'Mobile & Frontend',
      icon: Smartphone,
      skills: ['React Native', 'React.js', 'Context API', 'Hooks'],
    },
    {
      title: 'Backend & Databases',
      icon: Database,
      skills: ['.NET (C#)', 'RESTful APIs (CRUD)', 'PostgreSQL', 'Node.js'],
    },
    {
      title: 'Tools & Infrastructure',
      icon: GitBranch,
      skills: ['Git/GitHub', 'Unit Testing', 'Software Quality Assurance (QA)'],
    },
    {
      title: 'Soft Skills',
      icon: CheckCircle,
      skills: ['Leadership', 'Problem Solving', 'Communication', 'Team Collaboration'],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="space-y-16">
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Habilidades</h2>
            <p className="text-xl text-foreground/70 max-w-2xl">
              Conjunto abrangente de competências técnicas e soft skills desenvolvidas ao longo de minha carreira como desenvolvedor Full Stack.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-background border border-border rounded-lg hover:shadow-lg hover:border-primary transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-50 rounded-lg group-hover:bg-primary group-hover:text-white transition-colors duration-200">
                      <Icon size={24} className="text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="flex items-center gap-2 text-foreground/70">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* Proficiency Levels */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground">Nível de Proficiência</h3>
            <div className="space-y-4">
              {[
                { skill: 'C# & .NET', level: 95 },
                { skill: 'React Native', level: 90 },
                { skill: 'React.js', level: 85 },
                { skill: 'Unity', level: 88 },
                { skill: 'PostgreSQL', level: 80 },
                { skill: 'TypeScript', level: 85 },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-foreground">{item.skill}</span>
                    <span className="text-sm text-foreground/50">{item.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full transition-all duration-500"
                      style={{ width: `${item.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
