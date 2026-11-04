import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowRight, MapPin } from "lucide-react";
import { metrics, profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon } from "./common";

const k = "text-violet-600 dark:text-violet-400"; // keyword
const t = "text-cyan-700 dark:text-cyan-300"; // type
const s = "text-emerald-700 dark:text-emerald-300"; // string
const c = "text-subtle"; // comment / punctuation

function CodeWindow() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card shadow-2xl shadow-black/10 dark:shadow-black/40">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 font-mono text-[11px] text-subtle">Developer.cs</span>
      </div>
      <pre className="overflow-x-auto px-4 py-4 font-mono text-[12px] leading-[1.75] sm:text-[12.5px]">
        <code>
          <span className={c}>// Clean Architecture · DDD · SOLID</span>
          {"\n"}
          <span className={k}>public sealed record</span> <span className={t}>Developer</span>
          <span className={c}>(</span>
          {"\n  "}
          <span className={t}>string</span> Name <span className={c}>=</span>{" "}
          <span className={s}>"Murilo Guiot"</span>
          <span className={c}>,</span>
          {"\n  "}
          <span className={t}>string</span> Role <span className={c}>=</span>{" "}
          <span className={s}>"Full Stack .NET"</span>
          <span className={c}>,</span>
          {"\n  "}
          <span className={t}>string</span>[] Stack<span className={c}>);</span>
          {"\n\n"}
          <span className={k}>var</span> murilo <span className={c}>=</span>{" "}
          <span className={k}>new</span> <span className={t}>Developer</span>
          <span className={c}>(</span>Stack: [
          {"\n  "}
          <span className={s}>"C#"</span>, <span className={s}>".NET 10"</span>,{" "}
          <span className={s}>"React"</span>, <span className={s}>"LLMs"</span>]
          <span className={c}>);</span>
          {"\n\n"}
          <span className={k}>await</span> murilo.<span className={t}>ShipAsync</span>
          <span className={c}>(</span>toProduction: <span className={k}>true</span>
          <span className={c}>);</span>
          <span className="ml-0.5 inline-block h-[1.1em] w-[7px] translate-y-[3px] animate-pulse bg-primary" />
        </code>
      </pre>
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
            <div className="mb-4 flex items-center gap-4 rounded-xl border border-border bg-card/80 p-3 backdrop-blur">
              <img
                src={`${import.meta.env.BASE_URL}${profile.photo}`}
                alt={`Foto de ${profile.name}`}
                width={56}
                height={56}
                className="h-14 w-14 rounded-lg object-cover object-[50%_28%]"
              />
              <div className="min-w-0">
                <p className="truncate font-medium">{profile.name}</p>
                <p className="truncate font-mono text-xs text-muted-foreground">{profile.focus}</p>
              </div>
              <span className="ml-auto hidden items-center gap-1 font-mono text-[11px] text-subtle sm:inline-flex">
                <MapPin size={12} /> {profile.location}
              </span>
            </div>
            <CodeWindow />
          </motion.div>
        </div>

        {/* Métricas de impacto */}
        <motion.dl
          {...fade(0.4)}
          className="mt-20 grid grid-cols-2 overflow-hidden rounded-2xl border border-border bg-border gap-px lg:grid-cols-4"
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
