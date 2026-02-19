import { createFileRoute } from '@tanstack/react-router'
import { Eye, EyeOff, Loader2 } from 'lucide-react'
import { useState } from 'react'
import { authClient } from '#/lib/auth-client'

export const Route = createFileRoute('/login')({
  component: BetterAuthDemo,
})

function BetterAuthDemo() {
  const { data: session, isPending } = authClient.useSession()
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [rememberMe, setRememberMe] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[var(--vo-paper)] px-6">
        <Loader2 className="h-7 w-7 animate-spin text-[var(--vo-accent)]" />
      </div>
    )
  }

  if (session?.user) {
    return (
      <main className="landing-grid flex min-h-screen items-center justify-center bg-[var(--vo-paper)] px-6 py-10 text-[var(--vo-ink)]">
        <section className="w-full max-w-lg rounded-3xl border border-[var(--vo-line)] bg-[var(--vo-card)] p-8 shadow-soft">
          <p className="text-xs font-semibold tracking-[0.18em] text-[var(--vo-muted)] uppercase">
            Sessao ativa
          </p>
          <h1 className="font-display mt-4 text-3xl font-semibold tracking-tight text-[var(--vo-ink)]">
            Ola, {session.user.name || 'profissional'}
          </h1>
          <p className="mt-2 text-sm text-[var(--vo-muted)]">Voce entrou com {session.user.email}.</p>

          <button
            onClick={() => {
              void authClient.signOut()
            }}
            className="vo-btn-primary mt-8 inline-flex w-full items-center justify-center rounded-full border border-transparent px-5 py-3 text-sm font-semibold transition-colors duration-200 hover:border-[var(--vo-accent)]"
          >
            Sair da conta
          </button>
        </section>
      </main>
    )
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isSignUp) {
        const result = await authClient.signUp.email({
          email,
          password,
          name,
        })

        if (result.error) {
          setError(result.error.message || 'Nao foi possivel criar a conta.')
        }
      } else {
        const result = await authClient.signIn.email({
          email,
          password,
          rememberMe,
        })

        if (result.error) {
          setError(result.error.message || 'Credenciais invalidas.')
        }
      }
    } catch {
      setError('Ocorreu um erro inesperado. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="landing-grid m-0 min-h-screen w-screen bg-[var(--vo-paper)] p-0 text-[var(--vo-ink)]">
      <section className="m-0 grid min-h-screen w-screen overflow-hidden bg-[var(--vo-card)] p-0 md:grid-cols-[minmax(280px,36%)_1fr]">
        <aside className="relative overflow-hidden bg-[var(--vo-ink)] p-8 text-[var(--vo-on-dark)] md:p-10">
          <div className="vo-blob vo-blob-cyan pointer-events-none -top-10 -left-10 h-44 w-44" />
          <div className="vo-blob vo-blob-amber pointer-events-none -right-16 bottom-8 h-48 w-48" />

          <div className="relative z-10 flex h-full flex-col justify-between gap-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#2ED8A7]" />
                <p className="text-xs font-semibold tracking-[0.16em] uppercase">Vitas Odonto</p>
              </div>
              <h2 className="font-display mt-7 max-w-xs text-3xl leading-tight font-semibold tracking-tight">
                Inteligencia clinica com fluxo simples para sua equipe.
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--vo-on-dark-muted)]">
                Agenda, prontuario e acompanhamento operacional no mesmo painel para recepcao e
                profissionais.
              </p>
            </div>

            <blockquote className="rounded-2xl border border-white/10 bg-[var(--vo-dark-surface)] p-5 backdrop-blur-sm">
              <p className="font-display text-xl leading-snug font-semibold">
                "Centralizamos os atendimentos e reduzimos faltas em poucas semanas."
              </p>
              <footer className="mt-4 text-sm text-[var(--vo-on-dark-muted)]">
                Camila Rocha • Gestora Clinica
              </footer>
            </blockquote>
          </div>
        </aside>

        <div className="flex items-center p-6 sm:p-8 md:p-10 lg:p-14">
          <div className="mx-auto w-full max-w-md">
            <p className="text-xs font-semibold tracking-[0.16em] text-[var(--vo-muted)] uppercase">
              Area profissional
            </p>
            <h1 className="font-display mt-3 text-4xl leading-tight font-semibold tracking-tight text-[var(--vo-ink)]">
              {isSignUp ? 'Criar acesso' : 'Bem-vindo de volta'}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-[var(--vo-muted)]">
              {isSignUp
                ? 'Cadastre seus dados para entrar na plataforma Vitas Odonto.'
                : 'Entre com suas credenciais para continuar no ambiente da clinica.'}
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              {isSignUp && (
                <label className="block space-y-2">
                  <span className="text-sm font-medium text-[var(--vo-ink)]">Nome completo</span>
                  <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    className="h-11 w-full rounded-xl border border-[var(--vo-line-strong)] bg-[var(--vo-surface-strong)] px-3.5 text-sm text-[var(--vo-ink)] transition-colors outline-none placeholder:text-[var(--vo-muted)] focus:border-[var(--vo-accent)]"
                    placeholder="Seu nome"
                    required
                  />
                </label>
              )}

              <label className="block space-y-2">
                <span className="text-sm font-medium text-[var(--vo-ink)]">E-mail</span>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="h-11 w-full rounded-xl border border-[var(--vo-line-strong)] bg-[var(--vo-surface-strong)] px-3.5 text-sm text-[var(--vo-ink)] transition-colors outline-none placeholder:text-[var(--vo-muted)] focus:border-[var(--vo-accent)]"
                  placeholder="nome@clinica.com"
                  required
                />
              </label>

              <label className="block space-y-2">
                <span className="text-sm font-medium text-[var(--vo-ink)]">Senha</span>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    className="h-11 w-full rounded-xl border border-[var(--vo-line-strong)] bg-[var(--vo-surface-strong)] px-3.5 pr-11 text-sm text-[var(--vo-ink)] transition-colors outline-none placeholder:text-[var(--vo-muted)] focus:border-[var(--vo-accent)]"
                    placeholder="••••••••"
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((value) => !value)}
                    className="absolute inset-y-0 right-0 flex w-11 items-center justify-center text-[var(--vo-muted)] transition-colors hover:text-[var(--vo-ink)]"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </label>

              <div className="flex items-center justify-between gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => setRememberMe((value) => !value)}
                  className="inline-flex items-center gap-2 text-sm text-[var(--vo-muted)] transition-colors hover:text-[var(--vo-ink)]"
                >
                  <span
                    className={`relative inline-flex h-5 w-10 items-center rounded-full transition-colors ${
                      rememberMe ? 'bg-[var(--vo-ink)]' : 'bg-[var(--vo-line-strong)]'
                    }`}
                  >
                    <span
                      className={`h-4 w-4 rounded-full bg-[var(--vo-card)] transition-transform ${
                        rememberMe ? 'translate-x-5' : 'translate-x-0.5'
                      }`}
                    />
                  </span>
                  Lembrar acesso
                </button>

                <button
                  type="button"
                  className="text-sm font-medium text-[var(--vo-ink)] transition-colors hover:text-[var(--vo-muted)]"
                >
                  Esqueci minha senha
                </button>
              </div>

              {error && (
                <div className="rounded-xl border border-[hsl(var(--danger)/0.35)] bg-[hsl(var(--danger)/0.08)] px-4 py-3 text-sm text-[hsl(var(--danger))]">
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="vo-btn-primary inline-flex h-11 w-full items-center justify-center gap-2 rounded-full border border-transparent px-5 text-sm font-semibold transition-colors duration-200 hover:border-[var(--vo-accent)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading && <Loader2 className="h-4 w-4 animate-spin" />}
                {loading ? 'Aguarde...' : isSignUp ? 'Criar conta' : 'Entrar'}
              </button>

              <div className="flex items-center gap-3 py-1">
                <span className="h-px flex-1 bg-[var(--vo-line-strong)]" />
                <span className="text-xs text-[var(--vo-muted)]">ou</span>
                <span className="h-px flex-1 bg-[var(--vo-line-strong)]" />
              </div>

              <button
                type="button"
                className="vo-btn-secondary inline-flex h-11 w-full items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors duration-200 hover:border-[var(--vo-accent)] hover:bg-[var(--vo-surface)]"
              >
                Continuar com Google
              </button>

              <p className="pt-2 text-center text-sm text-[var(--vo-muted)]">
                {isSignUp ? 'Ja possui conta?' : 'Ainda nao possui conta?'}{' '}
                <button
                  type="button"
                  onClick={() => {
                    setIsSignUp((value) => !value)
                    setError('')
                  }}
                  className="font-semibold text-[var(--vo-ink)] transition-colors hover:text-[var(--vo-muted)]"
                >
                  {isSignUp ? 'Entrar agora' : 'Criar conta'}
                </button>
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}
