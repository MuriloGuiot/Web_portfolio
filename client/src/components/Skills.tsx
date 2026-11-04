import { Blocks, BrainCircuit, Database, Layout, Server } from "lucide-react";
import type { ReactNode } from "react";
import { education, profile, skillGroups } from "@/data/profile";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading, trackSpotlight } from "./common";

const groupIcons: Record<string, ReactNode> = {
  "Back-end": <Server size={16} />,
  "Front-end & Mobile": <Layout size={16} />,
  "Dados & Infra": <Database size={16} />,
  IA: <BrainCircuit size={16} />,
  "Arquitetura & Práticas": <Blocks size={16} />,
};

export default function Skills() {
  return (
    <section id="stack" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="Stack & Formação"
          title="Ferramentas que uso no dia a dia."
          description={profile.summary}
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={(i % 3) * 0.06}
              className={cn("flex", i === 0 && "lg:col-span-1")}
            >
              <div
                onMouseMove={trackSpotlight}
                className="spotlight w-full rounded-2xl border border-border bg-card/50 p-6"
              >
                <div className="mb-5 flex items-center gap-2.5">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary/10 text-primary">
                    {groupIcons[group.title]}
                  </span>
                  <h3 className="font-medium">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map(item => (
                    <li
                      key={item}
                      className="rounded-lg border border-border bg-background px-2.5 py-1 text-sm text-foreground/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}

          {/* Formação */}
          <Reveal delay={0.12} className="flex">
            <div className="w-full rounded-2xl border border-border bg-gradient-to-br from-primary/10 via-card/50 to-card/50 p-6">
              <p className="eyebrow mb-4">Formação</p>
              <h3 className="font-medium">{education.course}</h3>
              <p className="mt-1 text-sm text-muted-foreground">IDP · Brasília</p>
              <p className="mt-1 font-mono text-[11px] text-subtle">{education.period}</p>

              <div className="mt-5 space-y-3 border-t border-border pt-5">
                {education.certifications.map(cert => (
                  <div key={cert.title}>
                    <p className="text-sm">{cert.title}</p>
                    <p className="font-mono text-[11px] text-subtle">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
