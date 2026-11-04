/**
 * Fonte única de conteúdo do portfólio.
 * Atualize aqui (e não nos componentes) quando mudar de cargo, projeto ou stack.
 */

export const profile = {
  name: "Murilo Guiot",
  role: "Desenvolvedor Full Stack",
  focus: "C# · .NET · React · IA",
  location: "Brasília, DF",
  email: "muriloguiot@gmail.com",
  phone: { label: "+55 61 99316-8008", href: "tel:+5561993168008" },
  linkedin: "https://www.linkedin.com/in/murilo-guiot-22944a2b8/",
  github: "https://github.com/MuriloGuiot",
  cvFile: "MuriloGuiot_CV.pdf",
  photo: "opcao1.jpg",
  current: { company: "CooperX Brasil", since: "Out. 2026" },
  headline:
    "Construo APIs .NET robustas, produtos mobile e sistemas com agentes de IA — do banco de dados à interface.",
  summary:
    "Desenvolvedor Full Stack com foco em C#/.NET e Clean Architecture. Já entreguei de calculadora de emissões GHG white label a revisões em sistemas de triagem com IA e apps com grande base de usuários para a BB Seguros. Gosto de código que escala, é auditável e gera resultado mensurável para o negócio.",
} as const;

/** Tags exibidas no card de perfil do Hero. */
export const heroStack = ["C#", ".NET", "Clean Architecture", "React", "PostgreSQL", "LLMs"] as const;

export const metrics = [
  { value: "+35%", label: "em vendas após a revisão do CRUD das plataformas de venda", context: "Loopi Group" },
  { value: "+40%", label: "de adesão de novos usuários após aprimorar o sistema de autenticação", context: "Loopi Group" },
  { value: "GHG", label: "Calculadora de emissões white label em .NET 10, baseada no GHG Protocol", context: "AgrocarbonBR" },
  { value: "ABF", label: "Evoluindo continuamente as APIs .NET que sustentam os sistemas da Associação Brasileira de Franchising", context: "CooperX Brasil" },
] as const;

export type Experience = {
  company: string;
  role: string;
  /** Tipo de vínculo, quando relevante (ex.: Estágio, Autônomo). */
  type?: string;
  period: string;
  location?: string;
  current?: boolean;
  bullets: string[];
  stack: string[];
};

export const experiences: Experience[] = [
  {
    company: "CooperX Brasil",
    role: "Desenvolvedor Full Stack C#/.NET",
    period: "Out. 2026 — Atual",
    location: "Remoto",
    current: true,
    bullets: [
      "Venho aprimorando continuamente as **APIs .NET** que sustentam os sistemas principais da **ABF — Associação Brasileira de Franchising**: manutenção, melhorias de código e evolução de funcionalidades.",
    ],
    stack: ["C#", ".NET", "ASP.NET Core", "GitHub Actions"],
  },
  {
    company: "AgrocarbonBR",
    role: "Desenvolvedor Full Stack",
    type: "Autônomo",
    period: "Mar. 2026 — Ago. 2026",
    location: "Híbrido",
    bullets: [
      "Construí uma **calculadora de emissões de GEE dinâmica e white label** em **.NET 10**, baseada no **GHG Protocol**, base do marketplace próprio de um grande cliente.",
      "API com **Clean Architecture** e PostgreSQL, **multi-tenant** com isolamento por CNPJ e fatores de emissão versionados e auditáveis.",
      "Resultados validados contra a planilha oficial do GHG Protocol, com **testes E2E em container Docker**.",
    ],
    stack: ["C#", ".NET 10", "ASP.NET Core", "Clean Architecture", "PostgreSQL", "Docker"],
  },
  {
    company: "Loopi Group",
    role: "Desenvolvedor Full Stack C#/.NET",
    period: "Jan. 2026 — Out. 2026",
    location: "Híbrido",
    bullets: [
      "Manutenção e evolução de **APIs .NET** estruturadas em **Clean Architecture** e **Vertical Slice Architecture**.",
      "Revisão do **CRUD das plataformas de venda** da empresa, contribuindo para um aumento de cerca de **35% nas vendas**.",
      "Aprimoramento do **sistema de autenticação**, resultando em **40% mais adesão de novos usuários**.",
      "Revisões e manutenções no **sistema de triagem inteligente com agentes de IA** do app Loopi (Python, C#/.NET e LLMs via API).",
    ],
    stack: ["C#", ".NET", "Clean Architecture", "Vertical Slice", "Python", "LLMs", "Auth"],
  },
  {
    company: "BB Seguros (via Loopi Group)",
    role: "Software Developer · React Native",
    period: "Jun. 2025 — Jan. 2026",
    location: "Presencial",
    bullets: [
      "Co-desenvolvi o **Segplay**, produto estratégico da BB Seguros em parceria com a Ciclic: novas features e manutenção de interfaces em React Native.",
      "Integração de **APIs REST** com os serviços da seguradora, otimização de componentes e correção de bugs críticos em app com grande base de usuários.",
      "Squads multidisciplinares com **Scrum**, junto a designers e POs, em regras de negócio complexas de seguros e previdência.",
    ],
    stack: ["React Native", "TypeScript", "APIs REST", "Scrum"],
  },
  {
    company: "Loopi Group",
    role: "Desenvolvedor Mobile React Native",
    period: "Mai. 2025 — Jan. 2026",
    location: "Presencial",
    bullets: [
      "Desenvolvimento e manutenção de aplicativos móveis em **React Native** e **TypeScript** dentro do ecossistema **Loopi Club**, app publicado nas lojas.",
    ],
    stack: ["React Native", "TypeScript", "JavaScript", "Git"],
  },
  {
    company: "Loopi Group",
    role: "Analista de QA",
    type: "Estágio",
    period: "Fev. 2025 — Mai. 2025",
    bullets: [
      "Testes manuais abrangentes em aplicativos móveis: **UAT**, regressão, sistema, usabilidade e exploratórios.",
      "Criação de **planos de teste** e documentação técnica de casos de teste a partir de requisitos de negócio.",
      "Apoio à **automação de testes com Appium**, aumentando a eficiência e a confiabilidade dos ciclos de lançamento.",
      "Reporte de bugs e validação de correções junto aos desenvolvedores nas sprints, garantindo estabilidade em **Android e iOS**.",
    ],
    stack: ["Appium", "UAT", "Testes de regressão", "Plano de teste", "Android", "iOS"],
  },
];

export type Project = {
  title: string;
  kicker: string;
  description: string;
  stack: string[];
  link?: { label: string; href: string };
  /** Meu papel no projeto, exibido em destaque no card. */
  role?: string;
  /** Selo exibido quando não há link público (padrão: "Projeto corporativo"). */
  note?: string;
  featured?: boolean;
  visual: "ai" | "mobile" | "carbon" | "web" | "code" | "insurance";
};

export const projects: Project[] = [
  {
    title: "Triagem Inteligente com Agentes de IA",
    kicker: "Loopi · IA aplicada",
    role: "Revisão e manutenção",
    description:
      "Atuei nas revisões e manutenções do sistema de triagem do app Loopi, em produção: agentes de IA que compreendem, classificam, direcionam e resolvem demandas de usuários. Meu trabalho envolveu os serviços em C#/.NET e Python que orquestram os modelos (ML, Deep Learning, fine-tuning e LLMs via API) — corrigindo, ajustando e evoluindo o fluxo.",
    stack: ["Python", "C#", ".NET", "LLMs", "Fine-Tuning", "ML / DL"],
    featured: true,
    visual: "ai",
  },
  {
    title: "Calculadora de Emissões GEE",
    kicker: "AgrocarbonBR · Clima",
    role: "Desenvolvimento",
    description:
      "Calculadora de emissões de GEE dinâmica e white label, baseada no GHG Protocol. API multi-tenant em .NET 10 com Clean Architecture e PostgreSQL, fatores de emissão versionados e auditáveis, validada contra a planilha oficial e testada E2E em Docker.",
    stack: [".NET 10", "PostgreSQL", "Clean Architecture", "Docker"],
    visual: "carbon",
  },
  {
    title: "Loopi Club",
    kicker: "App publicado nas lojas",
    description:
      "Dev full stack do app: React Native no front, back-end em C#/.NET 8 e infraestrutura na AWS.",
    stack: ["React Native", ".NET 8", "AWS", "Android Studio"],
    link: { label: "App Store", href: "https://apps.apple.com/br/app/loopi-club/id6633438519" },
    visual: "mobile",
  },
  {
    title: "Segplay",
    kicker: "BB Seguros × Ciclic",
    description:
      "Produto estratégico da BB Seguros. Features, integrações REST e performance em React Native para uma grande base de usuários.",
    stack: ["React Native", "TypeScript", "REST"],
    link: { label: "App Store", href: "https://apps.apple.com/br/app/seg-play/id6741806032" },
    visual: "insurance",
  },
  {
    title: "Site Institucional GreenBR",
    kicker: "Conservação no Cerrado",
    description:
      "Site institucional da GreenBR — conservação, carbono e clima no Cerrado — em domínio próprio.",
    stack: ["React", "TypeScript", "Vite"],
    note: "Domínio próprio",
    visual: "web",
  },
  {
    title: "Este portfólio",
    kicker: "Open source",
    description:
      "React 19, Tailwind CSS 4 e Framer Motion, com deploy automatizado no GitHub Pages via GitHub Actions a cada push.",
    stack: ["React 19", "Tailwind 4", "GitHub Actions"],
    link: { label: "Código", href: "https://github.com/MuriloGuiot/Web_portfolio" },
    visual: "code",
  },
];

export const skillGroups = [
  {
    title: "Back-end",
    items: ["C#", ".NET 8 / 9 / 10", "ASP.NET Core", "APIs RESTful", "Python"],
  },
  {
    title: "Front-end & Mobile",
    items: ["React", "React Native", "TypeScript", "JavaScript", "Vue.js"],
  },
  {
    title: "Dados & Infra",
    items: ["PostgreSQL", "MongoDB", "Docker", "AWS (S3)", "GitHub Actions", "Git"],
  },
  {
    title: "IA",
    items: ["Agentes de IA", "LLMs via API", "Machine Learning", "Deep Learning", "Fine-Tuning"],
  },
  {
    title: "Arquitetura & Práticas",
    items: ["Clean Architecture", "DDD", "CQRS", "SOLID", "Testes E2E", "Scrum"],
  },
] as const;

export const education = {
  institution: "IDP — Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa",
  course: "Bacharelado em Ciência da Computação",
  period: "2024 — 2028 (previsão)",
  certifications: [
    { title: "Clean Architecture Essencial — ASP.NET Core com C#", issuer: "Udemy", date: "Mai. 2026" },
  ],
};

export const navLinks = [
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contato" },
] as const;
