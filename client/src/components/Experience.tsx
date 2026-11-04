import { experiences } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Reveal, RichText, SectionHeading, Tag, trackSpotlight } from "./common";

export default function Experience() {
  return (
    <section id="experiencia" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          index="01"
          eyebrow="Experiência"
          title="Sistemas em produção, resultados medidos."
          description="De apps com grande base de usuários a APIs críticas de associações nacionais — sempre com foco em arquitetura limpa e impacto no negócio."
        />

        <ol className="relative space-y-4 md:space-y-6">
          {/* Linha do tempo */}
          <span
            className="absolute top-2 bottom-2 left-[7px] w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-[calc(11rem+7px)]"
            aria-hidden
          />
          {experiences.map((exp, i) => (
            <li key={exp.company + exp.period} className="relative md:grid md:grid-cols-[11rem_1fr]">
              <Reveal delay={i * 0.04} className="mb-3 pl-8 md:mb-0 md:pt-6 md:pr-8 md:pl-0">
                <p className="font-mono text-xs text-muted-foreground md:text-right">{exp.period}</p>
                {exp.location && (
                  <p className="mt-1 font-mono text-[11px] text-subtle md:text-right">{exp.location}</p>
                )}
              </Reveal>

              <span
                className={cn(
                  "absolute top-[3px] left-0 grid h-[15px] w-[15px] place-items-center rounded-full border bg-background md:top-[27px] md:left-[11rem]",
                  exp.current ? "border-primary" : "border-border"
                )}
                aria-hidden
              >
                <span
                  className={cn(
                    "h-[7px] w-[7px] rounded-full",
                    exp.current ? "bg-primary" : "bg-muted-foreground/40"
                  )}
                />
              </span>

              <Reveal delay={i * 0.04 + 0.05} className="pl-8">
                <article
                  onMouseMove={trackSpotlight}
                  className="spotlight rounded-2xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/30 sm:p-7"
                >
                  <header className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="text-xl font-semibold">{exp.company}</h3>
                    {exp.current && (
                      <span className="rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[10px] tracking-wider text-primary uppercase">
                        Atual
                      </span>
                    )}
                    {exp.type && (
                      <span className="rounded-full border border-border px-2 py-0.5 font-mono text-[10px] tracking-wider text-muted-foreground uppercase">
                        {exp.type}
                      </span>
                    )}
                  </header>
                  <p className="mt-1 text-sm text-muted-foreground">{exp.role}</p>

                  <ul className="mt-5 space-y-2.5">
                    {exp.bullets.map(b => (
                      <li
                        key={b}
                        className="relative pl-4 text-[15px] leading-relaxed text-muted-foreground before:absolute before:top-[0.7em] before:left-0 before:h-px before:w-2 before:bg-primary/60"
                      >
                        <RichText text={b} />
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {exp.stack.map(tech => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
