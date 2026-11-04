import { ArrowLeft } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [location, setLocation] = useLocation();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden />
      <div className="glow-top pointer-events-none absolute inset-0" aria-hidden />

      <div className="relative w-full max-w-md text-center">
        <p className="eyebrow mb-4">Erro 404</p>
        <h1 className="text-6xl font-semibold sm:text-7xl">
          <span className="text-gradient">Not Found</span>
        </h1>
        <div className="mx-auto mt-8 overflow-hidden rounded-xl border border-border bg-card text-left font-mono text-xs">
          <div className="border-b border-border px-4 py-2 text-subtle">terminal</div>
          <pre className="overflow-x-auto px-4 py-3 leading-relaxed">
            <span className="text-subtle">$</span> curl {location}
            {"\n"}
            <span className="text-destructive">HTTP/1.1 404 Not Found</span>
            {"\n"}
            <span className="text-muted-foreground">
              {"{"} "detail": "Esta rota não existe." {"}"}
            </span>
          </pre>
        </div>
        <button
          onClick={() => setLocation("/")}
          className="mt-8 inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:brightness-110"
        >
          <ArrowLeft size={16} />
          Voltar ao início
        </button>
      </div>
    </div>
  );
}
