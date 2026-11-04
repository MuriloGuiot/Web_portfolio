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
    "Desenvolvedor Full Stack com foco em C#/.NET e Clean Architecture. Já entreguei de calculadora de emissões GHG multi-tenant a triagem inteligente com LLMs e apps com grande base de usuários para a BB Seguros. Gosto de código que escala, é auditável e gera resultado mensurável para o negócio.",
} as const;

export const metrics = [
  { value: "+35%", label: "em vendas após reestruturar o CRUD do marketplace", context: "Loopi Group" },
  { value: "+40%", label: "de novos usuários autenticados com SSO social no 1º mês", context: "Loopi Group" },
  { value: "100%", label: "dos secrets migrados para GitHub Secrets, sem downtime", context: "CooperX · ABF" },
  { value: ".NET 10", label: "Clean Architecture, multi-tenant e testes E2E em Docker", context: "AgrocarbonBR" },
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  location: string;
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
      "Mantenho e evoluo as APIs .NET dos sistemas principais da **ABF — Associação Brasileira de Franchising**.",
      "Removi **todos os secrets** expostos nas APIs, migrando-os para o **GitHub Secrets** e injetando-os na inicialização de cada aplicação — produção seguiu 100% estável.",
    ],
    stack: ["C#", ".NET", "ASP.NET Core", "GitHub Actions", "GitHub Secrets"],
  },
  {
    company: "AgrocarbonBR",
    role: "Desenvolvedor Full Stack C#/.NET",
    period: "Mar. 2026 — Ago. 2026",
    location: "Híbrido",
    bullets: [
      "Construí uma **calculadora de emissões de GEE em .NET 10** baseada no GHG Protocol, base do marketplace próprio de um grande cliente.",
      "API com **Clean Architecture** e PostgreSQL, **multi-tenant** com isolamento por CNPJ e fatores de emissão versionados e auditáveis.",
      "Resultados validados contra a planilha oficial do GHG Protocol, com **testes E2E em container Docker**.",
    ],
    stack: [".NET 10", "Clean Architecture", "PostgreSQL", "Docker", "Testes E2E"],
  },
  {
    company: "Loopi Group",
    role: "Desenvolvedor Full Stack C#/.NET",
    period: "Jan. 2026 — Out. 2026",
    location: "Híbrido",
    bullets: [
      "Atuei no **sistema de triagem inteligente com agentes de IA** do app Loopi (Python, C#/.NET e LLMs via API).",
      "Reestruturei o CRUD do marketplace white label — as vendas subiram cerca de **35%**.",
      "Implementei **SSO via redes sociais** nos apps, elevando em cerca de **40%** a autenticação de novos usuários no 1º mês.",
    ],
    stack: ["C#", ".NET", "Python", "LLMs", "React Native", "SSO / OAuth"],
  },
  {
    company: "Loopi Group × BB Seguros",
    role: "Desenvolvedor Mobile React Native",
    period: "Fev. 2025 — Jan. 2026",
    location: "Brasília, DF",
    bullets: [
      "Co-desenvolvi o **Segplay**, produto estratégico da BB Seguros em parceria com a Ciclic: novas features e manutenção de interfaces em React Native.",
      "Integração de **APIs REST** com os serviços da seguradora, otimização de componentes e correção de bugs críticos em app com grande base de usuários.",
      "Squads multidisciplinares com **Scrum**, junto a designers e POs, em regras de negócio complexas de seguros e previdência.",
    ],
    stack: ["React Native", "TypeScript", "APIs REST", "Scrum"],
  },
];

export type Project = {
  title: string;
  kicker: string;
  description: string;
  stack: string[];
  link?: { label: string; href: string };
  /** Selo exibido quando não há link público (padrão: "Projeto corporativo"). */
  note?: string;
  featured?: boolean;
  visual: "ai" | "mobile" | "carbon" | "web" | "code" | "insurance";
};

export const projects: Project[] = [
  {
    title: "Triagem Inteligente com Agentes de IA",
    kicker: "Loopi · IA aplicada",
    description:
      "Agentes de IA treinados para compreender, classificar, direcionar e resolver demandas de usuários — em produção no app Loopi. Combina Machine Learning, Deep Learning, fine-tuning e LLMs via API, orquestrados por serviços em C#/.NET e Python.",
    stack: ["Python", "C#", ".NET", "LLMs", "Fine-Tuning", "ML / DL"],
    featured: true,
    visual: "ai",
  },
  {
    title: "Calculadora de Emissões GEE",
    kicker: "AgrocarbonBR · Clima",
    description:
      "API multi-tenant em .NET 10 baseada no GHG Protocol, com fatores de emissão versionados e auditáveis, validada contra a planilha oficial.",
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
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Fluente" },
  ],
};

export const navLinks = [
  { label: "Experiência", href: "#experiencia" },
  { label: "Projetos", href: "#projetos" },
  { label: "Stack", href: "#stack" },
  { label: "Contato", href: "#contato" },
] as const;
