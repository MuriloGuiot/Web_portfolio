import { ArrowUpRight, Bot, Globe, Leaf, Lock, ShieldCheck, Smartphone } from "lucide-react";
import type { ReactNode } from "react";
import { profile, projects, type Project } from "@/data/profile";
import { cn } from "@/lib/utils";
import { GithubIcon, Reveal, SectionHeading, Tag, trackSpotlight } from "./common";

const icons: Record<Project["visual"], ReactNode> = {
  ai: <Bot size={18} />,
  carbon: <Leaf size={18} />,
  mobile: <Smartphone size={18} />,
  insurance: <ShieldCheck size={18} />,
  web: <Globe size={18} />,
  code: <GithubIcon size={18} />,
};

/** Ilustração do fluxo de triagem: compreender → classificar → direcionar → resolver. */
function AgentPipeline() {
  const steps = ["Compreender", "Classificar", "Direcionar", "Resolver"];
  return (
    <div className="rounded-xl border border-border bg-background/60 p-4 font-mono text-[11px] sm:p-5">
      <div className="mb-4 flex items-start gap-2.5">
        <span className="mt-0.5 rounded bg-secondary px-1.5 py-0.5 text-subtle">user</span>
        <span className="text-muted-foreground">"Meu pagamento não foi reconhecido no app."</span>
      </div>
      <div className="flex flex-wrap items-center gap-1.5">
        {steps.map((step, i) => (
          <div key={step} className="flex items-center gap-1.5">
            <span
              className={cn(
                "rounded-md border px-2 py-1",
                i === steps.length - 1
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-card text-muted-foreground"
              )}
            >
              {step}
            </span>
            {i < steps.length - 1 && <span className="text-subtle">→</span>}
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-start gap-2.5">
        <span className="mt-0.5 rounded bg-primary/15 px-1.5 py-0.5 text-primary">agent</span>
        <span className="text-muted-foreground">
          intent=<span className="text-foreground">pagamentos</span> · fila=
          <span className="text-foreground">financeiro</span> · resolvido ✓
        </span>
      </div>
    </div>
  );
}

function ProjectCard({ project, className }: { project: Project; className?: string }) {
  const Wrapper = project.link ? "a" : "div";
  return (
    <article
      onMouseMove={trackSpotlight}
      className={cn(
        "spotlight group relative flex flex-col rounded-2xl border border-border bg-card/50 p-6 transition-colors hover:border-primary/30 sm:p-7",
        className
      )}
    >
      <div className="mb-6 flex items-center justify-between">
        <span className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-background text-primary">
          {icons[project.visual]}
        </span>
        {project.link ? (
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-foreground">
            {project.link.label}
            <ArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        ) : (
          <span className="inline-flex items-center gap-1 font-mono text-[11px] text-subtle">
            {project.note ? (
              <>
                <Globe size={11} /> {project.note}
              </>
            ) : (
              <>
                <Lock size={11} /> Projeto corporativo
              </>
            )}
          </span>
        )}
      </div>

      <p className="font-mono text-[11px] tracking-wider text-primary uppercase">{project.kicker}</p>
      <h3 className="mt-2 text-xl font-semibold sm:text-2xl">
        <Wrapper
          {...(project.link
            ? { href: project.link.href, target: "_blank", rel: "noopener noreferrer" }
            : {})}
          className="after:absolute after:inset-0 after:rounded-2xl focus-visible:outline-none"
        >
          {project.title}
        </Wrapper>
      </h3>
      <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{project.description}</p>

      {project.featured && (
        <div className="mt-6">
          <AgentPipeline />
        </div>
      )}

      <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
        {project.stack.map(tech => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </article>
  );
}

export default function Projects() {
  const portfolio = projects.find(p => p.visual === "code");
  const grid = projects.filter(p => p !== portfolio);

  return (
    <section id="projetos" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="Projetos"
          title="O que eu construí."
          description="Seleção de produtos em que atuei — de IA aplicada a apps publicados nas lojas. Boa parte é código corporativo, então aqui fica o contexto e o impacto."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {grid.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 3) * 0.06}
              className={cn("flex", project.featured && "md:col-span-2 lg:row-span-1")}
            >
              <ProjectCard project={project} className="w-full" />
            </Reveal>
          ))}
        </div>

        {portfolio && (
          <Reveal className="mt-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col gap-4 rounded-2xl border border-dashed border-border p-6 transition-colors hover:border-primary/40 hover:bg-card/50 sm:flex-row sm:items-center sm:justify-between sm:p-7"
            >
              <div className="flex items-center gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-foreground text-background">
                  <GithubIcon size={18} />
                </span>
                <div>
                  <p className="font-medium">Mais no GitHub</p>
                  <p className="text-sm text-muted-foreground">
                    Incluindo este portfólio — {portfolio.description.charAt(0).toLowerCase()}
                    {portfolio.description.slice(1)}
                  </p>
                </div>
              </div>
              <span className="inline-flex shrink-0 items-center gap-1 font-mono text-xs text-muted-foreground group-hover:text-foreground">
                github.com/MuriloGuiot <ArrowUpRight size={14} />
              </span>
            </a>
          </Reveal>
        )}
      </div>
    </section>
  );
}
