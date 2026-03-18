# Brainstorm de Design - Portfólio Murilo Guiot

## Contexto
Portfólio web profissional para Murilo Guiot, desenvolvedor Full Stack com experiência em C#, Unity, React Native e .NET. O site deve comunicar expertise técnica, credibilidade e acessibilidade, com foco em recrutadores e conexões profissionais.

---

## Abordagem 1: Minimalismo Técnico com Acentos Dinâmicos
**Probabilidade: 0.08**

### Design Movement
Minimalismo contemporâneo inspirado em design de SaaS moderno (Vercel, Linear, Stripe)

### Core Principles
1. **Espaço negativo generoso** - Layouts abertos que respiram, sem poluição visual
2. **Tipografia como hierarquia** - Fontes grandes e ousadas para títulos, corpo leve e legível
3. **Acentos de cor estratégicos** - Apenas 1-2 cores vibrantes em pontos-chave (CTAs, destaques)
4. **Micro-interações elegantes** - Transições suaves, hover effects sutis que não distraem

### Color Philosophy
- **Fundo**: Branco puro ou off-white ligeiro (confiança, clareza)
- **Texto primário**: Cinza escuro/charcoal (não preto puro, mais confortável)
- **Acento principal**: Azul elétrico ou verde neon (energia, modernidade)
- **Acento secundário**: Laranja suave ou roxo (destaque de projetos/skills)
- **Reasoning**: Minimalismo transmite profissionalismo; cores vibrantes quebram monotonia e guiam atenção

### Layout Paradigm
- Hero assimétrico: Imagem/gradiente à direita, texto à esquerda
- Grid de projetos com cards flutuantes (não alinhados rigidamente)
- Seção de skills com ícones grandes e labels minimalistas
- Sidebar oculta ou navegação flutuante (não header tradicional)

### Signature Elements
1. **Linhas geométricas animadas** - Divisores SVG que se movem ao scroll
2. **Cards com glassmorphism** - Fundo semi-transparente com blur (moderno)
3. **Ícones customizados** - Não usar ícones genéricos, criar estilo próprio

### Interaction Philosophy
- Hover: Elevação sutil (box-shadow crescente), mudança de cor do acento
- Scroll: Parallax leve em imagens, fade-in de elementos
- Clique: Feedback imediato com ripple ou pulse animation
- Filosofia: Interações devem ser **invisíveis** - o usuário sente, não vê

### Animation
- Entrada de página: Fade-in + slide-up dos elementos (200-300ms)
- Scroll triggers: Elementos aparecem com stagger (delay progressivo)
- Hover em cards: Scale 1.02 + shadow expansion (100ms)
- Transição entre seções: Fade suave com parallax background
- Evitar: Animações muito rápidas (<100ms) ou muito lentas (>500ms)

### Typography System
- **Display**: Poppins Bold 700 (títulos, 3.5rem-4.5rem)
- **Heading**: Poppins SemiBold 600 (seções, 2rem-2.5rem)
- **Body**: Inter Regular 400 (conteúdo, 1rem)
- **Small**: Inter Regular 400 (labels, 0.875rem)
- **Ratio**: Usar escala 1.5x entre tamanhos para clareza

---

## Abordagem 2: Design Brutalista com Tipografia Expressiva
**Probabilidade: 0.07**

### Design Movement
Brutalism digital com influência de design editorial (The Guardian, Medium)

### Core Principles
1. **Tipografia como protagonista** - Fontes grandes, ousadas, com kerning apertado
2. **Contraste extremo** - Preto + branco, sem tons intermediários
3. **Estrutura visível** - Grades, bordas, linhas que mostram a "construção"
4. **Conteúdo em primeiro plano** - Sem decoração, apenas essencial

### Color Philosophy
- **Fundo**: Preto profundo ou off-black
- **Texto**: Branco puro ou creme
- **Acento**: Amarelo vibrante ou vermelho (pop de cor)
- **Reasoning**: Brutalism rejeita ornamentação; cores extremas comunicam confiança e força

### Layout Paradigm
- Grid rígido 12-colunas, bem visível
- Blocos de conteúdo com bordas grossas (2-4px)
- Seções com fundo alternado (preto/branco)
- Tipografia grande ocupando espaço generoso

### Signature Elements
1. **Bordas e frames** - Caixas pretas com bordas brancas ao redor de conteúdo
2. **Tipografia em escala** - Títulos ocupando 60-80% da viewport
3. **Padrões geométricos** - Linhas diagonais, quadrículas, repetição

### Interaction Philosophy
- Cliques: Inversão de cores (fundo branco → preto)
- Hover: Mudança de peso da fonte (Regular → Bold)
- Scroll: Transições abruptas entre seções (sem fade)
- Filosofia: Interações devem ser **óbvias e diretas**

### Animation
- Entrada: Slide-in rápido (150ms), sem easing suave
- Hover: Mudança de peso/cor instantânea ou muito rápida
- Scroll: Mudanças de cor/layout sem transição (ou transição de 50ms)
- Evitar: Easing suave, fade-in, parallax

### Typography System
- **Display**: Playfair Display Bold 700 (títulos, 4rem-6rem)
- **Heading**: Playfair Display SemiBold 600 (seções, 2.5rem-3.5rem)
- **Body**: Courier New ou IBM Plex Mono (conteúdo, 1rem)
- **Small**: Courier New (labels, 0.875rem)
- **Ratio**: Escala 2x entre tamanhos para impacto visual

---

## Abordagem 3: Design Gradualista com Paleta Quente e Orgânica
**Probabilidade: 0.09**

### Design Movement
Warm modernism inspirado em design de startups criativas (Figma, Framer, Notion)

### Core Principles
1. **Paleta quente e convidativa** - Tons de laranja, terracota, ouro (não frio)
2. **Formas orgânicas** - Bordas arredondadas, curvas suaves, nada rígido
3. **Profundidade através de camadas** - Múltiplos níveis de cards/containers
4. **Movimento constante** - Animações sutis em background, não apenas em interação

### Color Philosophy
- **Fundo**: Creme ou bege muito claro (aconchego)
- **Texto primário**: Marrom escuro ou terracota (quente, natural)
- **Acento principal**: Laranja vibrante ou coral (energia, criatividade)
- **Acento secundário**: Ouro ou mostarda (sofisticação)
- **Reasoning**: Cores quentes criam conexão emocional; orgânico humaniza o técnico

### Layout Paradigm
- Hero com imagem/gradiente diagonal (não reto)
- Cards com sombras suaves e bordas arredondadas (border-radius 16-24px)
- Seções com fundo gradiente sutil (creme → bege)
- Navegação flutuante com ícones arredondados

### Signature Elements
1. **Blobs e formas orgânicas** - SVG shapes que servem como decoração/divisores
2. **Gradientes diagonais** - Transições suaves entre cores quentes
3. **Ilustrações customizadas** - Ícones e gráficos com estilo hand-drawn

### Interaction Philosophy
- Hover: Elevação + mudança de cor para tom mais quente
- Scroll: Elementos fluem e se reorganizam suavemente
- Clique: Feedback com pulse animation em cor de acento
- Filosofia: Interações devem ser **naturais e fluidas**

### Animation
- Entrada: Fade-in + scale-up (300ms, easing ease-out)
- Scroll: Parallax suave, elementos fluem com scroll
- Hover: Scale 1.05 + shadow expansion (150ms)
- Background: Animação contínua leve (blobs se movendo, gradientes sutis)
- Evitar: Transições abruptas, cores frias, movimento muito rápido

### Typography System
- **Display**: Sora Bold 700 (títulos, 3.5rem-4.5rem)
- **Heading**: Sora SemiBold 600 (seções, 2rem-2.5rem)
- **Body**: Sora Regular 400 (conteúdo, 1rem)
- **Small**: Sora Regular 400 (labels, 0.875rem)
- **Ratio**: Escala 1.5x, com espaçamento generoso

---

## Decisão Final
**Abordagem Escolhida: Minimalismo Técnico com Acentos Dinâmicos (Abordagem 1)**

### Justificativa
Para um desenvolvedor Full Stack buscando oportunidades profissionais, o minimalismo técnico comunica:
- **Profissionalismo**: Design limpo, sem distrações
- **Modernidade**: Alinhado com tendências de SaaS/tech
- **Foco no conteúdo**: Habilidades e projetos em destaque
- **Acessibilidade**: Contraste claro, navegação intuitiva

Cores vibrantes (azul elétrico + laranja) quebram a monotonia e criam pontos de interesse visual, mantendo a credibilidade técnica.

### Paleta Final
- **Primário**: Azul Elétrico (#0066FF ou similar)
- **Secundário**: Laranja Suave (#FF8C42)
- **Fundo**: Off-white (#F8F9FA)
- **Texto**: Charcoal (#2C3E50)
- **Acentos**: Cinza claro (#E8EAED)

### Tipografia
- **Display**: Poppins Bold 700
- **Heading**: Poppins SemiBold 600
- **Body**: Inter Regular 400

### Próximos Passos
1. Implementar paleta de cores em `index.css`
2. Adicionar Google Fonts (Poppins, Inter)
3. Criar componentes base (Hero, Card, Button)
4. Estruturar seções (About, Skills, Projects, Contact)
5. Implementar animações de scroll/hover
6. Integrar com dados do currículo
