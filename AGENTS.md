# AGENTS.md — Implementação do Design System (Vitas Odonto • Tech Dental)

## Objetivo
Implementar o design system **Tech Dental / Healthtech SaaS** no sistema Vitas Odonto, usando **Tailwind CSS**, com:
- Tokens de cor (brand, accent e semânticos)
- Suporte a **dark mode** via classe `.dark`
- Padrões de UI (botões, inputs, cards, badges, alerts)
- Utilitários e exemplos para uso consistente no produto

> Regras: manter visual clean, alto contraste, sem cores “infantis”. Evitar vermelho saturado como cor de destaque (usar apenas para erro).

---

## Paleta (referência)
### Brand / Accent (fixos)
- brand-950: `#0A2540`
- brand-900: `#1E3A5F`
- accent-cyan: `#00D4FF`
- accent-mint: `#2ED8A7`

### Neutros semânticos (controlados por CSS variables)
- bg: `#F8FAFC`
- surface: `#EEF2F6`
- text: `#0F172A`
- text-2: `#475569`
- border: `#CBD5E1`

### Estados
- info: `#38BDF8`
- warning: `#FBBF24`
- danger: `#EF4444`

---

## 1) Tailwind — tokens e tema

### 1.1 Atualizar `tailwind.config.(js|cjs|ts)`
**Ação:** estender `theme.colors` com tokens fixos + semânticos via CSS vars.

> Ajuste os `content` paths conforme o framework (Next, Vite, etc).

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Fixos (brand/accent)
        brand: {
          950: "#0A2540",
          900: "#1E3A5F",
        },
        accent: {
          cyan: "#00D4FF",
          mint: "#2ED8A7",
        },

        // Semânticos (variáveis) — base do design system
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        text: "hsl(var(--text))",
        "text-2": "hsl(var(--text-2))",
        border: "hsl(var(--border))",

        // Estados (variáveis) — mantém consistência no dark mode
        info: "hsl(var(--info))",
        warning: "hsl(var(--warning))",
        danger: "hsl(var(--danger))",
      },

      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },

      boxShadow: {
        // sombras discretas para cards
        soft: "0 1px 2px rgba(15, 23, 42, 0.06), 0 8px 24px rgba(15, 23, 42, 0.06)",
      },
    },
  },
  plugins: [],
};
