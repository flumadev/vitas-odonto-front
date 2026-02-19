import Header from '#/components/Header'
import { createFileRoute } from '@tanstack/react-router'
import {
  Activity,
  ArrowRight,
  BellRing,
  Building2,
  CalendarDays,
  CheckCircle2,
  Clock3,
  FileText,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from 'lucide-react'

export const Route = createFileRoute('/')({ component: App })

const METRICS = [
  { value: '3x', label: 'menos retrabalho na confirmação de agenda' },
  { value: '100%', label: 'fluxo digital de prontuário e assinatura' },
  { value: '24/7', label: 'visibilidade operacional para a equipe' },
] as const

const PRIMARY_FEATURES = [
  {
    icon: CalendarDays,
    title: 'Agenda unificada',
    description:
      'Visual único para recepção e dentistas, com disponibilidade atualizada em tempo real.',
  },
  {
    icon: BellRing,
    title: 'Lembretes inteligentes',
    description:
      'Confirme consultas por WhatsApp e SMS e antecipe faltas com automações simples.',
  },
  {
    icon: FileText,
    title: 'Prontuário vivo',
    description:
      'Cada etapa do atendimento fica registrada, assinada e pronta para consulta em segundos.',
  },
  {
    icon: ShieldCheck,
    title: 'Acesso por perfil',
    description:
      'Permissões aplicadas de forma consistente para manter segurança e governança da operação.',
  },
] as const

const JOURNEY_STEPS = [
  {
    number: '01',
    title: 'Paciente agenda',
    summary:
      'Seleção de profissional, serviço e horário sem conflitos e com regras da clínica.',
  },
  {
    number: '02',
    title: 'Equipe confirma',
    summary:
      'Disparo automático de lembretes, com retorno de status para a recepção agir no tempo certo.',
  },
  {
    number: '03',
    title: 'Atendimento acontece',
    summary:
      'Registro clínico organizado durante a consulta, com assinatura dentro do fluxo.',
  },
  {
    number: '04',
    title: 'Operação acompanha',
    summary:
      'Dados consolidados para analisar ocupação, faltas e desempenho por período.',
  },
] as const

const PLANS = [
  {
    icon: Stethoscope,
    name: 'Consultório',
    description: 'Para quem quer organizar a rotina clínica com uma base digital sólida.',
    modules: ['Agenda', 'Prontuário', 'Fechamento de atendimento'],
  },
  {
    icon: CheckCircle2,
    name: 'Clínicas',
    description: 'Para operações que precisam de escala com automação e indicadores.',
    modules: ['Tudo do Consultório', 'Automações', 'Visão operacional'],
  },
  {
    icon: Building2,
    name: 'Rede',
    description: 'Para grupos com governança multiunidade e políticas avançadas.',
    modules: ['Tudo de Clínicas', 'Multiunidade', 'Regras corporativas'],
  },
] as const

function App() {
  return (
    <main className="landing-grid bg-[var(--vo-paper)] text-[var(--vo-ink)]">
      <Header />

      <section id="top" className="relative overflow-hidden px-6 pb-12 pt-2 md:px-10 md:pb-16 md:pt-4">
        <div className="vo-blob vo-blob-amber" />
        <div className="vo-blob vo-blob-cyan" />
        <div className="mx-auto w-full max-w-6xl">
          <div className="reveal-up text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-[var(--vo-line)] bg-[var(--vo-card)] px-4 py-2 text-xs font-semibold tracking-[0.16em] text-[var(--vo-muted)] uppercase">
              <Sparkles className="h-3.5 w-3.5 text-[var(--vo-accent)]" />
              Plataforma para clínicas odontológicas
            </p>
            <h1 className="font-display mx-auto mt-6 max-w-4xl text-5xl leading-[0.9] font-semibold tracking-[-0.045em] text-balance md:text-7xl">
              Menos fricção na rotina.
              <br className="hidden md:block" /> Mais tempo para cuidar do paciente.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[var(--vo-muted)] md:text-lg">
              A Vitas Odonto integra agenda, confirmações, prontuário e controle de acesso em uma
              experiência única para recepção, equipe clínica e gestão.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contato"
                className="vo-btn-primary inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-transform hover:-translate-y-0.5"
              >
                Agendar demonstração
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="vo-btn-secondary rounded-full px-7 py-3 text-sm font-semibold tracking-wide transition-colors hover:bg-[var(--vo-surface-strong)]"
              >
                Ver como funciona
              </a>
            </div>
          </div>

          <div className="reveal-up mt-12 grid gap-3 rounded-3xl border border-[var(--vo-line)] bg-[var(--vo-card)] p-5 md:grid-cols-3 md:p-6">
            {METRICS.map((metric) => (
              <article
                key={metric.label}
                className="rounded-2xl border border-[var(--vo-line)] bg-[var(--vo-surface-strong)] px-4 py-5"
              >
                <p className="font-display text-3xl font-semibold tracking-tight">{metric.value}</p>
                <p className="mt-1 text-sm leading-relaxed text-[var(--vo-muted)]">{metric.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-8">
            <h2 className="font-display max-w-2xl text-4xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-5xl">
              Produto com linguagem simples e operação robusta.
            </h2>
            <p className="hidden max-w-sm text-sm leading-relaxed text-[var(--vo-muted)] md:block">
              Estrutura modular para sua clínica crescer com previsibilidade, sem perder qualidade no
              atendimento.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {PRIMARY_FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="vo-surface-card rounded-3xl p-6 transition-transform hover:-translate-y-0.5 md:p-7"
              >
                <feature.icon className="h-6 w-6 text-[var(--vo-accent)]" />
                <h3 className="font-display mt-5 text-3xl leading-[0.95] font-semibold tracking-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-relaxed text-[var(--vo-muted)]">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="jornada" className="px-6 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-[var(--vo-line)] bg-[var(--vo-surface)] p-6 md:p-10">
          <div className="mb-8 flex items-center gap-3">
            <Clock3 className="h-5 w-5 text-[var(--vo-accent)]" />
            <p className="text-xs font-semibold tracking-[0.18em] text-[var(--vo-muted)] uppercase">
              Jornada do atendimento
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {JOURNEY_STEPS.map((step) => (
              <article
                key={step.number}
                className="rounded-2xl border border-[var(--vo-line)] bg-[var(--vo-card)] p-5"
              >
                <p className="text-xs font-semibold tracking-[0.16em] text-[var(--vo-muted)] uppercase">
                  Etapa {step.number}
                </p>
                <h3 className="font-display mt-3 text-2xl font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--vo-muted)]">{step.summary}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="planos" className="px-6 pb-20 md:px-10">
        <div className="mx-auto grid w-full max-w-6xl gap-10 rounded-[2.2rem] border border-[var(--vo-line)] bg-[var(--vo-ink)] p-8 text-[var(--vo-on-dark)] md:p-12">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-[var(--vo-on-dark-muted)] uppercase">
              Planos
            </p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[0.96] font-semibold tracking-[-0.03em] text-balance">
              Estrutura para consultório, clínicas e rede evoluírem no mesmo ecossistema.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[var(--vo-on-dark-muted)]">
              A plataforma acompanha o crescimento da operação sem perder padrão de segurança e
              controle.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {PLANS.map((plan) => (
              <article
                key={plan.name}
                className="rounded-2xl border border-[var(--vo-dark-line)] bg-[var(--vo-dark-surface)] p-5"
              >
                <plan.icon className="h-7 w-7 text-[var(--vo-accent)]" />
                <h3 className="font-display mt-4 text-2xl font-semibold tracking-tight">{plan.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--vo-on-dark-muted)]">
                  {plan.description}
                </p>
                <ul className="mt-4 space-y-2 text-xs text-[var(--vo-on-dark-muted)]">
                  {plan.modules.map((module) => (
                    <li key={module}>• {module}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="px-6 pb-20 md:px-10">
        <div className="mx-auto w-full max-w-6xl rounded-[2rem] border border-[var(--vo-line)] bg-gradient-to-br from-[var(--vo-surface-strong)] to-[var(--vo-paper-strong)] p-8 text-center shadow-[0_20px_45px_rgba(15,23,42,0.08)] md:p-12">
          <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[var(--vo-muted)] uppercase">
            <Activity className="h-4 w-4 text-[var(--vo-accent)]" />
            Pronto para colocar sua operação em outro nível?
          </p>
          <h2 className="font-display mx-auto mt-4 max-w-3xl text-4xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-5xl">
            Fale com a equipe Vitas Odonto e veja um fluxo completo em funcionamento.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-[var(--vo-muted)] md:text-base">
            Entenda como adaptar a plataforma para sua realidade atual, com implantação orientada e
            evolução por etapas.
          </p>
          <a
            href="https://wa.me/5500000000000"
            className="vo-btn-accent mt-8 inline-flex items-center gap-2 rounded-full px-8 py-3 text-sm font-semibold tracking-wide transition-transform hover:-translate-y-0.5"
          >
            Conversar no WhatsApp
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </main>
  )
}
