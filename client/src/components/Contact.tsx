import { useState } from "react";
import { ArrowUpRight, Check, Copy, Download, Mail, Phone } from "lucide-react";
import { profile } from "@/data/profile";
import { GithubIcon, LinkedinIcon, Reveal } from "./common";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const links = [
    { label: "LinkedIn", href: profile.linkedin, icon: <LinkedinIcon size={16} />, external: true },
    { label: "GitHub", href: profile.github, icon: <GithubIcon size={16} />, external: true },
    { label: profile.phone.label, href: profile.phone.href, icon: <Phone size={16} /> },
    {
      label: "Currículo (PDF)",
      href: `${import.meta.env.BASE_URL}${profile.cvFile}`,
      icon: <Download size={16} />,
      download: true,
    },
  ];

  return (
    <section id="contato" className="py-20 md:py-28">
      <div className="container">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 px-6 py-14 text-center sm:px-12 md:py-20">
            <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
            <div
              className="pointer-events-none absolute inset-x-0 -bottom-1/2 h-full bg-[radial-gradient(ellipse_at_center,var(--glow),transparent_65%)]"
              aria-hidden
            />

            <div className="relative">
              <p className="eyebrow mb-5">
                <span className="text-subtle">04 /</span> Contato
              </p>
              <h2 className="mx-auto max-w-2xl text-3xl leading-[1.1] font-semibold sm:text-5xl">
                Vamos construir algo <span className="text-gradient">que funcione em produção?</span>
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-muted-foreground">
                Para oportunidades, projetos ou colaborações, fale comigo por e-mail ou LinkedIn.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:brightness-110 sm:w-auto"
                >
                  <Mail size={16} />
                  {profile.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-border bg-background/60 px-5 text-sm font-medium backdrop-blur transition-colors hover:bg-secondary sm:w-auto"
                  aria-live="polite"
                >
                  {copied ? <Check size={16} className="text-success" /> : <Copy size={16} />}
                  {copied ? "Copiado!" : "Copiar e-mail"}
                </button>
              </div>

              <ul className="mt-10 flex flex-wrap items-center justify-center gap-2">
                {links.map(link => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      {...(link.download ? { download: true } : {})}
                      className="group inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                    >
                      {link.icon}
                      {link.label}
                      {link.external && (
                        <ArrowUpRight size={13} className="opacity-0 transition-opacity group-hover:opacity-100" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
