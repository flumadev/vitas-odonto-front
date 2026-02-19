import { Link } from '@tanstack/react-router'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 px-6 py-4 md:px-10">
      <div className="mx-auto flex w-full max-w-6xl items-center rounded-full border border-[var(--vo-line)] bg-[var(--vo-surface)]/90 px-5 py-3 backdrop-blur">
        <div className="flex items-center gap-8">
          <Link to="/" className="font-display text-base font-semibold tracking-tight">
            Vitas Odonto
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-[var(--vo-muted)] md:flex">
            <a href="#features" className="transition-colors hover:text-[var(--vo-ink)]">
              Produto
            </a>
            <a href="#jornada" className="transition-colors hover:text-[var(--vo-ink)]">
              Jornada
            </a>
            <a href="#planos" className="transition-colors hover:text-[var(--vo-ink)]">
              Planos
            </a>
          </nav>
        </div>

        <div className="hidden items-center gap-3 md:ml-auto md:flex">
          <details className="group relative">
            <summary className="flex list-none cursor-pointer items-center gap-1.5 rounded-full border border-[var(--vo-line-strong)] bg-transparent px-4 py-2 text-xs font-semibold tracking-wide text-[var(--vo-ink)] transition-colors hover:bg-[var(--vo-surface-strong)]">
              Acessar
              <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
            </summary>
            <div className="absolute right-0 z-40 mt-2 min-w-48 rounded-2xl border border-[var(--vo-line)] bg-[var(--vo-card)] p-2 shadow-soft">
              <a
                href="https://paciente.vitasodonto.com.br"
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl px-3 py-2 text-sm text-[var(--vo-muted)] transition-colors hover:bg-[var(--vo-surface-strong)] hover:text-[var(--vo-ink)]"
              >
                Paciente
              </a>
              <Link
                to="/login"
                className="block rounded-xl px-3 py-2 text-sm text-[var(--vo-muted)] transition-colors hover:bg-[var(--vo-surface-strong)] hover:text-[var(--vo-ink)]"
              >
                Profissionais
              </Link>
            </div>
          </details>

          <a
            href="#contato"
            className="vo-btn-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wide"
          >
            Falar com especialista
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>

        <details className="relative ml-auto md:hidden">
          <summary className="flex list-none cursor-pointer items-center gap-1.5 rounded-full border border-[var(--vo-line)] px-3 py-2 text-sm text-[var(--vo-muted)] transition-colors hover:bg-[var(--vo-surface-strong)] hover:text-[var(--vo-ink)]">
            Acessos
            <ChevronDown className="h-4 w-4" />
          </summary>
          <div className="absolute right-0 z-40 mt-2 min-w-48 rounded-2xl border border-[var(--vo-line)] bg-[var(--vo-card)] p-2 shadow-soft">
            <a
              href="https://paciente.vitasodonto.com.br"
              target="_blank"
              rel="noreferrer"
              className="block rounded-xl px-3 py-2 text-sm text-[var(--vo-muted)] transition-colors hover:bg-[var(--vo-surface-strong)] hover:text-[var(--vo-ink)]"
            >
              Paciente
            </a>
            <Link
              to="/login"
              className="block rounded-xl px-3 py-2 text-sm text-[var(--vo-muted)] transition-colors hover:bg-[var(--vo-surface-strong)] hover:text-[var(--vo-ink)]"
            >
              Profissionais
            </Link>
          </div>
        </details>
      </div>
    </header>
  )
}
