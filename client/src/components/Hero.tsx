import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, MapPin } from "lucide-react";
import { education, heroStack, metrics, profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, Tag } from "./common";

/** Card de perfil: foto, papel atual, formação e stack principal. */
function ProfileCard() {
  const rows = [
    { label: "Atualmente", value: `${profile.role} · ${profile.current.company}` },
    { label: "Formação", value: `${education.course.replace("Bacharelado em ", "")} · IDP` },
    { label: "Base", value: profile.location },
  ];
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/10 dark:shadow-black/40">
      <div className="flex items-center gap-4 p-5 sm:p-6">
        <img
          src={`${import.meta.env.BASE_URL}${profile.photo}`}
          alt={`Foto de ${profile.name}`}
          width={80}
          height={80}
          className="h-20 w-20 shrink-0 rounded-xl object-cover object-[50%_28%]"
        />
        <div className="min-w-0">
          <p className="truncate text-lg font-semibold">{profile.name}</p>
          <p className="truncate font-mono text-xs text-muted-foreground">{profile.focus}</p>
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-success">
            <span className="h-1.5 w-1.5 rounded-full bg-success" />
            Aberto a conversas
          </p>
        </div>
      </div>

      <dl className="border-t border-border">
        {rows.map(row => (
          <div
            key={row.label}
            className="flex items-baseline justify-between gap-4 border-b border-border px-5 py-3.5 sm:px-6"
          >
            <dt className="font-mono text-[11px] tracking-wider text-subtle uppercase">{row.label}</dt>
            <dd className="text-right text-sm">
              {row.label === "Base" && <MapPin size={12} className="mr-1 inline text-subtle" />}
              {row.value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap gap-1.5 p-5 sm:p-6">
        {heroStack.map(tech => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();
  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 14 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.21, 0.47, 0.32, 0.98] as const },
        };

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="bg-grid pointer-events-none absolute inset-0 -z-10" aria-hidden />
      <div className="glow-top pointer-events-none absolute inset-0 -z-10" aria-hidden />

      <div className="container">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-12">
          <div>
            <motion.a
              {...fade(0)}
              href="#experiencia"
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 py-1 pr-3 pl-1.5 text-xs text-muted-foreground backdrop-blur transition-colors hover:text-foreground"
            >
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-2 py-0.5 font-medium text-success">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                </span>
                Agora
              </span>
              Full Stack na {profile.current.company}
              <ArrowRight size={13} />
            </motion.a>

            <motion.h1
              {...fade(0.08)}
              className="text-[2.6rem] leading-[1.02] font-semibold sm:text-6xl lg:text-[4.25rem]"
            >
              Software que escala,{" "}
              <span className="text-gradient">do back-end à IA.</span>
            </motion.h1>

            <motion.p
              {...fade(0.16)}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              Sou <span className="text-foreground">{profile.name}</span>, desenvolvedor Full Stack
              C#/.NET. {profile.headline}
            </motion.p>

            <motion.div {...fade(0.24)} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projetos"
                className="group inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110"
              >
                Ver projetos
                <ArrowDownRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </a>
              <a
                href="#contato"
                className="inline-flex h-11 items-center rounded-xl border border-border bg-card/60 px-5 text-sm font-medium backdrop-blur transition-colors hover:bg-secondary"
              >
                Falar comigo
              </a>
              <div className="ml-1 flex items-center gap-1">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-11 w-11 place-items-center rounded-xl text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                  aria-label="GitHub"
                >
                  <GithubIcon />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            {...(reduce
              ? {}
              : {
                  initial: { opacity: 0, y: 24, scale: 0.98 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: { duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] },
                })}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-primary/10 blur-3xl" aria-hidden />
            <ProfileCard />
          </motion.div>
        </div>

        {/* Métricas de impacto */}
        <motion.dl
          {...fade(0.4)}
          className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map(m => (
            <div key={m.label} className="bg-background p-5 sm:p-6">
              <dt className="sr-only">{m.label}</dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight sm:text-4xl">
                  {m.value}
                </span>
                <span className="mt-2 block text-sm leading-snug text-muted-foreground">
                  {m.label}
                </span>
                <span className="mt-3 block font-mono text-[11px] text-subtle">{m.context}</span>
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
