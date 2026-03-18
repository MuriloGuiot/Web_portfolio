# Portfólio - Murilo Guiot

Portfólio web profissional para Murilo Guiot, desenvolvedor Full Stack especializado em C#, Unity, React Native e .NET.

## 🎨 Design

**Filosofia**: Minimalismo Técnico com Acentos Dinâmicos

- **Paleta de Cores**: Azul Elétrico (#0066FF) + Laranja Suave (#FF8C42)
- **Tipografia**: Poppins Bold (títulos) + Inter Regular (corpo)
- **Layout**: Assimétrico, responsivo e acessível

## 🚀 Stack Tecnológico

- **Frontend**: React 19 + TypeScript
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

## 📋 Seções

1. **Header** - Navegação fixa com logo e menu responsivo
2. **Hero** - Apresentação principal com CTA e redes sociais
3. **About** - Experiência profissional e formação
4. **Skills** - Habilidades técnicas organizadas por categoria
5. **Projects** - Portfólio de projetos com links
6. **Contact** - Formulário de contato e informações
7. **Footer** - Links rápidos e redes sociais

## 🛠️ Setup Local

### Pré-requisitos
- Node.js 22+
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/murilo-portfolio.git
cd murilo-portfolio

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:3000`

## 📦 Build

```bash
# Build para produção
npm run build

# Preview do build
npm run preview
```

## 🌐 Deploy no GitHub Pages

### 1. Criar um repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em "New repository"
3. Nome: `murilo-portfolio` (ou outro nome de sua preferência)
4. Selecione "Public"
5. Clique em "Create repository"

### 2. Configurar o repositório local

```bash
# Inicialize o git (se ainda não tiver feito)
git init

# Adicione o repositório remoto
git remote add origin https://github.com/seu-usuario/murilo-portfolio.git

# Renomeie a branch para main (se necessário)
git branch -M main

# Adicione todos os arquivos
git add .

# Faça o primeiro commit
git commit -m "Initial commit: Portfolio setup"

# Envie para o GitHub
git push -u origin main
```

### 3. Ativar GitHub Pages

1. Vá para as configurações do repositório: **Settings**
2. Na barra lateral, clique em **Pages**
3. Em "Build and deployment", selecione:
   - **Source**: GitHub Actions
4. O GitHub Actions automaticamente detectará o workflow e fará o deploy

### 4. Configurar domínio customizado (Opcional)

Se você tem um domínio customizado:

1. Em **Settings > Pages**, adicione seu domínio em "Custom domain"
2. Configure os registros DNS do seu domínio (consulte a documentação do seu provedor)

## 📝 Customização

### Atualizar Informações Pessoais

1. **Header/Footer**: Edite `client/src/components/Header.tsx` e `client/src/components/Footer.tsx`
2. **Hero**: Edite `client/src/components/Hero.tsx` para atualizar apresentação
3. **About**: Edite `client/src/components/About.tsx` para adicionar experiência
4. **Skills**: Edite `client/src/components/Skills.tsx` para atualizar habilidades
5. **Projects**: Edite `client/src/components/Projects.tsx` para adicionar projetos
6. **Contact**: Edite `client/src/components/Contact.tsx` para atualizar contato

### Atualizar Cores

Edite `client/src/index.css` e modifique as variáveis CSS em `:root`:

```css
:root {
  --primary: #0066FF; /* Azul Elétrico */
  --secondary: #FF8C42; /* Laranja Suave */
  --background: #F8F9FA; /* Off-white */
  --foreground: #2C3E50; /* Charcoal */
  /* ... outras cores */
}
```

### Atualizar Tipografia

Edite `client/index.html` para adicionar/remover Google Fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

## 🔗 Links Importantes

- **LinkedIn**: https://linkedin.com/in/murilo-guiot-22944a2b8
- **Email**: muriloguiot@gmail.com
- **Telefone**: +55 61 99316-8008

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuições

Sugestões e melhorias são bem-vindas! Sinta-se livre para abrir issues ou pull requests.

---

**Desenvolvido com ❤️ por Murilo Guiot**
