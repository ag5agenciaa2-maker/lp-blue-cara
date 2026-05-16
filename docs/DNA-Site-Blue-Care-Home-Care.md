# SITE DNA — Blue Care Home Care

**Nicho:** Home Care Especializado / Cuidadores de Idosos — Rio de Janeiro, Brasil. Prestação de serviços de cuidado domiciliar com cuidadores técnicos certificados, supervisão médica 24/7 e responsabilidade trabalhista integral. Contexto de uso real: famílias cariocas buscando alternativa segura a cuidadores autônomos para idosos, pós-cirúrgicos e pacientes com Alzheimer.

**Posicionamento:** Landing page de alta conversão que equilibra autoridade médica (certificações ANVISA, supervisão 24/7) com acolhimento emocional (tom sereno, fotografia humana, tipografia serifada em títulos). A sensação dominante é de "segurança tranquila" — o visitante sente que encontrou uma instituição, não um classificado.

**Stack Técnica:** HTML5 sem frameworks + CSS3 custom properties (vanilla, sem Tailwind) + JavaScript ES6+ (classes nativas) | Google Fonts: Outfit (300–700), Playfair Display (400–700) | SVG inline (Feather Icons-style, stroke-based) | Schema.org: MedicalBusiness, WebSite, WebPage, FAQPage | Sem Font Awesome, sem Bootstrap.

**Data de criação:** 2026-04-29 (última modificação no HTML)

---

## 1. IDENTIDADE VISUAL

### 1.1 Tokens de Marca — CSS Custom Properties

| Token CSS | Valor Exato | Onde é usado especificamente |
|---|---|---|
| `--color-primary` | `#223289` | Botões primários (gradient start), nav links ativos, border-left pain-items, fundo Trust Bar, diff-icon hover, footer social hover |
| `--color-primary-dark` | `#0C1145` | Gradient end em botões/hero-shape/CTA, overlay pain-stat, CTA section bg, header do cookie modal, drawer overlay bg |
| `--color-primary-light` | `#B7E1F6` | Ícones SVG na Trust Bar, hero bg-pattern radial, section-tag em CTA escura, diff-icon default, glow nos inputs focus, shadow-glow |
| `--color-accent` | `#C29B62` | Dourado — nav-link::after hover/active, hero-title .highlight gradient end (junto com primary), service-badge gradient end, area-tag hover, footer h4, footer credits link hover |
| `--color-accent-light` | `rgba(194, 155, 98, 0.1)` | Fundo sutil de badges/accentos (definido, uso específico em JS toast/cookie) |
| `--color-white` | `#FFFFFF` | Fundo base, cards, texto sobre dark |
| `--color-gray-50` | `#F8FAFC` | Fundo seção About, pain-items, solution-features, testimonial-cards default, google-badge |
| `--color-gray-100` | `#F1F5F9` | Borders service-card, faq-item, drawer border |
| `--color-gray-200` | `#E2E8F0` | Borders input default, trust-divider, area-tag border |
| `--color-gray-300` | `#CBD5E1` | Divider-line gradient (solution-divider) |
| `--color-gray-400` | `#94A3B8` | Placeholders input |
| `--color-gray-500` | `#64748B` | Section-subtitle, pain-text p, testimonial-info span, rating-text, form-privacy |
| `--color-gray-600` | `#475569` | Nav-link default, hero-subtitle, about-text, faq-answer p, area-item |
| `--color-gray-700` | `#334155` | Cor base do body, form-group label |
| `--color-gray-800` | `#1E293B` | Hamburger spans, drawer-link |
| `--color-gray-900` | `#0F172A` | Footer bg, section-title, pain-text h4, service-content h3, diff-card h4, testimonial-info h4 |
| `--color-success` | `#10B981` | Badge-icon hero, floating-icon gradient, feature-check, cta-benefit svg, btn-submit sucesso |
| `--color-warning` | `#F59E0B` | Reservado (não utilizado no layout visível) |
| `--color-error` | `#EF4444` | Border-left pain-item, pain-icon bg/cor, form error border/text |
| `--color-whatsapp` | `#25D366` | Botão WhatsApp |
| `--font-primary` | `'Outfit', -apple-system, BlinkMacSystemFont, sans-serif` | Todo texto de interface |
| `--font-display` | `'Playfair Display', Georgia, serif` | Títulos H1, H2, H3, números de destaque |
| `--text-xs` | `0.75rem` | Badge hero, trust-label, form-privacy |
| `--text-sm` | `0.875rem` | Btns, nav-links, section-tag, stat-label, service-content p, solution-feature |
| `--text-base` | `1rem` | Body, faq-question, testimonial-text, btn-large |
| `--text-lg` | `1.125rem` | Section-subtitle, hero-subtitle, pain-text h4, about-text |
| `--text-xl` | `1.25rem` | Service-content h3 (mobile), drawer-link, nav-menu.active .nav-link |
| `--text-2xl` | `1.5rem` | Solution-card h3, rating-score, value-divider |
| `--text-3xl` | `1.875rem` | Trust-number, exp-number (mobile), section-title (mobile) |
| `--text-4xl` | `2.25rem` | Section-title (tablet), hero-title (tablet), stat-number, value-word |
| `--text-5xl` | `3rem` | Section-title (desktop), exp-number |
| `--text-6xl` | `3.75rem` | Hero-title (desktop) |
| `--space-1` | `0.25rem` | — |
| `--space-2` | `0.5rem` | — |
| `--space-3` | `0.75rem` | — |
| `--space-4` | `1rem` | — |
| `--space-5` | `1.25rem` | — |
| `--space-6` | `1.5rem` | Container padding mobile, cards padding |
| `--space-8` | `2rem` | Container padding tablet (640px), gap grids |
| `--space-10` | `2.5rem` | — |
| `--space-12` | `3rem` | Container padding desktop (1024px), section vertical rhythm |
| `--space-16` | `4rem` | Solution-divider margin |
| `--space-20` | `5rem` | — |
| `--space-24` | `6rem` | Padding vertical de todas as seções principais |
| `--radius-sm` | `0.25rem` | — |
| `--radius-md` | `0.5rem` | — |
| `--radius-lg` | `0.75rem` | Btns, inputs, floating-icon |
| `--radius-xl` | `1rem` | Hero-floating-card, pain-overlay, about-experience, faq-item |
| `--radius-2xl` | `1.5rem` | Cards principais, hero-image, location-map |
| `--radius-full` | `9999px` | Badge hero, divider-text, area-tag, service-badge |
| `--shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | Hero-badge |
| `--shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` | Header default, pain-item hover, service-card default, diff-card default |
| `--shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)` | Header scrolled, hero-floating-card, btn-primary:hover |
| `--shadow-xl` | `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)` | Pain-image, about-image-main img, diff-card:hover, location-map, testimonial-card:hover |
| `--shadow-2xl` | `0 25px 50px -12px rgb(0 0 0 / 0.25)` | Hero-image, cta-form-wrapper, drawer |
| `--shadow-glow` | `0 0 40px -10px var(--color-primary-light)` | Glow no btn-primary:hover |
| `--transition-fast` | `150ms ease` | Hover rápidos (social-link, area-tag, nav-link color) |
| `--transition-base` | `250ms ease` | Padrão — header, nav-link::after, service-card, diff-card, btn-svg |
| `--transition-slow` | `350ms ease` | Faq max-height/padding, service-image img transform |
| `--transition-bounce` | `500ms cubic-bezier(0.68, -0.55, 0.265, 1.55)` | Definido, não aplicado diretamente em elementos visíveis |
| `--z-dropdown` | `100` | — |
| `--z-sticky` | `200` | — |
| `--z-fixed` | `300` | Header |
| `--z-modal` | `400` | — |
| `--z-tooltip` | `500` | — |

**Nota:** Não há dark mode implementado no site. O token `--color-primary-dark` é usado como cor sólida/gradiente escuro, não como modo noturno.

### 1.2 Tipografia — Tabela Completa

| Elemento / Classe CSS | Família | Peso | Tamanho Exato | Line-height | Letter-spacing | Transform | Cor |
|---|---|---|---|---|---|---|---|
| `.hero-title` | Playfair Display | 600 | `3.75rem` (desktop ≥1024) / `3rem` (≥768) / `2.25rem` (mobile) | `1.1` | normal | none | `--color-gray-900` |
| `.hero-title .highlight` | Playfair Display | 600 | Herda | `1.1` | normal | none | `transparent` (bg-clip: text; gradient 135deg #223289→#C29B62) |
| `.section-title` | Playfair Display | 600 | `3rem` (≥1024) / `2.25rem` (≥768) / `1.875rem` (mobile) | `1.2` | normal | none | `--color-gray-900` |
| `.section-tag` | Outfit | 600 | `0.875rem` | `1` | `0.1em` | uppercase | `--color-primary` |
| `.section-subtitle` | Outfit | 400 | `1.125rem` | `1.6` | normal | none | `--color-gray-500` |
| `.hero-subtitle` | Outfit | 400 | `1.125rem` | `1.6` | normal | none | `--color-gray-600` |
| `.hero-badge` | Outfit | 600 | `0.75rem` | `1` | normal | none | `--color-primary` |
| `.badge-icon` | Outfit | 700 | `10px` | `1` | normal | none | `--color-white` |
| `.trust-number` | Playfair Display | 700 | `1.875rem` | `1` | normal | none | `--color-primary` |
| `.trust-label` | Outfit | 400 | `0.75rem` | `1` | `0.05em` | uppercase | `--color-gray-500` |
| `.nav-link` | Outfit | 500 | `0.875rem` | `1` | normal | none | `--color-gray-600` |
| `.btn` | Outfit | 600 | `0.875rem` | `1` | normal | none | variável |
| `.btn-large` | Outfit | 600 | `1rem` | `1` | normal | none | variável |
| `.stat-number` | Playfair Display | 700 | `2.25rem` | `1` | normal | none | `--color-primary-light` |
| `.stat-label` | Outfit | 400 | `0.875rem` | `1.5` | normal | none | `rgba(255,255,255,0.9)` |
| `.pain-text h4` | Outfit | 600 | `1.125rem` | `1` | normal | none | `--color-gray-900` |
| `.pain-text p` | Outfit | 400 | `0.875rem` | `1.5` | normal | none | `--color-gray-500` |
| `.divider-text` | Outfit | 600 | `0.875rem` | `1` | `0.1em` | uppercase | `--color-primary` |
| `.solution-card h3` | Playfair Display | herdado | `1.5rem` | `1` | normal | none | `--color-white` |
| `.solution-feature` | Outfit | 500 | `0.875rem` | `1` | normal | none | `--color-gray-700` |
| `.feature-check` | Outfit | 700 | `12px` | `1` | normal | none | `--color-white` |
| `.about-text` | Outfit | 400 | `1.125rem` | `1.8` | normal | none | `--color-gray-600` |
| `.value-word` | Playfair Display | 700 | `2.25rem` | `1` | normal | none | `--color-primary-dark` |
| `.value-divider` | Outfit | 300 | `1.5rem` | `1` | normal | none | `--color-accent` |
| `.area-tag` | Outfit | 400 | `0.875rem` | `1` | normal | none | `--color-gray-600` |
| `.service-content h3` | Playfair Display | 600 | `1.25rem` | `1` | normal | none | `--color-gray-900` |
| `.service-content p` | Outfit | 400 | `0.875rem` | `1.6` | normal | none | `--color-gray-500` |
| `.service-badge` | Outfit | 600 | `0.75rem` | `1` | normal | none | `--color-white` |
| `.service-link` | Outfit | 600 | `0.875rem` | `1` | normal | none | `--color-primary` |
| `.diff-card h4` | Outfit | 600 | `1.125rem` | `1` | normal | none | `--color-gray-900` |
| `.diff-card p` | Outfit | 400 | `0.875rem` | `1.6` | normal | none | `--color-gray-500` |
| `.rating-stars` | — (sistema) | 400 | `1.25rem` (section) / `1rem` (card) | `1` | `2px` | none | `#FBBF24` |
| `.rating-score` | Playfair Display | 700 | `1.5rem` | `1` | normal | none | `--color-gray-900` |
| `.rating-text` | Outfit | 400 | `0.875rem` | `1` | normal | none | `--color-gray-500` |
| `.testimonial-info h4` | Outfit | 600 | `1rem` | `1` | normal | none | `--color-gray-900` |
| `.testimonial-info span` | Outfit | 400 | `0.875rem` | `1` | normal | none | `--color-gray-500` |
| `.testimonial-text` | Outfit | 400 | `1rem` | `1.7` | normal | none | `--color-gray-600` (italic) |
| `.faq-question` | Outfit | 600 | `1rem` | `1` | normal | none | `--color-gray-900` |
| `.faq-answer p` | Outfit | 400 | `0.875rem` | `1.7` | normal | none | `--color-gray-600` |
| `.cta-text` | Outfit | 400 | `1.125rem` | `1.7` | normal | none | `--color-white` (opacity 0.9) |
| `.cta-benefit` | Outfit | 400 | `0.875rem` | `1` | normal | none | `--color-white` |
| `.form-group label` | Outfit | 500 | `0.875rem` | `1` | normal | none | `--color-gray-700` |
| `.form-group input/select/textarea` | Outfit | 400 | `1rem` | `1` | normal | none | `--color-gray-900` |
| `.form-privacy` | Outfit | 400 | `0.75rem` | `1` | normal | none | `--color-gray-500` |
| `.exp-number` | Playfair Display | 700 | `3rem` (desktop) / `1.875rem` (mobile) | `1` | normal | none | `--color-white` |
| `.exp-text` | Outfit | 400 | `0.875rem` | `1` | normal | none | `--color-white` (opacity 0.9) |
| `.marquee-item` | Outfit | 500 | `0.875rem` | `1` | `0.02em` | normal | `--color-white` (opacity 0.9) |
| `.floating-title` | Outfit | 700 | `1rem` | `1` | normal | none | `--color-gray-900` |
| `.floating-text` | Outfit | 400 | `0.875rem` | `1` | normal | none | `--color-gray-500` |

### 1.3 Sistema de Cores Funcionais — rgba() e Opacidades

| Valor rgba() | Uso Específico | Contexto |
|---|---|---|
| `rgba(255, 255, 255, 0.85)` | `.header` background | Glassmorphism nav fixo |
| `rgba(255, 255, 255, 0.5)` | `.header` border | Borda sutil glassmorphism |
| `rgba(255, 255, 255, 0.95)` | `.header.scrolled` background | Nav mais opaco ao scrollar |
| `rgba(255, 255, 255, 0.1)` | `.solution-icon` background | Ícone dentro do card solução |
| `rgba(255, 255, 255, 0.9)` | `.solution-card p`, `.stat-label`, `.exp-text` | Textos secundários sobre fundo escuro |
| `rgba(255, 255, 255, 0.92)` | `.wa-bubble` background | Glassmorphism balão WhatsApp |
| `rgba(255, 255, 255, 0.6)` | `.wa-bubble` border | Borda glassmorphism |
| `rgba(255, 255, 255, 0.08)` | `.ck-modal__close` background | Botão fechar do cookie modal |
| `rgba(255, 255, 255, 0.55)` | `.ck-modal__close` color | Ícone fechar do cookie modal |
| `rgba(255, 255, 255, 0.7)` | Footer `.footer-text` | Texto descritivo no rodapé |
| `rgba(255, 255, 255, 0.5)` | `.footer-copyright` | Copyright |
| `rgba(255, 255, 255, 0.4)` | `.footer-legal-links` base | Links legais rodapé |
| `rgba(255, 255, 255, 0.1)` | `.footer-social .social-link` background | Ícones sociais no rodapé |
| `rgba(255, 255, 255, 0.1)` | `.cta-section::before` overlay layer + fixed bg | Camada de overlay na seção CTA |
| `rgba(12, 17, 69, 0.9)` | `.pain-overlay` background | Overlay estatística sobre imagem dor |
| `rgba(12, 17, 69, 0.6)` | `.drawer-overlay` background | Fundo escurecido do drawer mobile |
| `rgba(34, 50, 137, 0.05)` | `.hero-bg-pattern` radial 2 | Pattern decorativo hero |
| `rgba(34, 50, 137, 0.1)` | `.form-group input:focus` shadow | Glow azul no focus de inputs |
| `rgba(183, 225, 246, 0.3)` | `.marquee-item svg` drop-shadow | Brilho nos ícones da Trust Bar |
| `rgba(183, 225, 246, 0.3)` | `.diff-icon` gradient end | Fundo ícone diferenciais default |
| `rgba(239, 68, 68, 0.1)` | `.pain-icon` background | Fundo ícone de dor |
| `rgba(194, 155, 98, 0.1)` | `--color-accent-light` | Token de acento translúcido |
| `rgba(37, 211, 102, 0.3)` | `.wa-float-btn` box-shadow | Sombra verde WhatsApp |
| `rgba(37, 211, 102, 0.4)` | `.wa-float-btn:hover` box-shadow | Hover sombra verde |
| `rgba(37, 211, 102, 0.7)` | `wa-pulse-green` keyframes | Animação pulso status dot |
| `rgba(0, 0, 0, 0.05)` | `--shadow-sm` rgb layer | Sombras usando rgb() notation moderna |
| `rgba(0, 0, 0, 0.1)` | `--shadow-md` layer 1 | — |
| `rgba(0, 0, 0, 0.1)` | `--shadow-lg` layer 1 | — |
| `rgba(0, 0, 0, 0.1)` | `--shadow-xl` layer 1 | — |
| `rgba(0, 0, 0, 0.25)` | `--shadow-2xl` layer | — |
| `rgba(0, 48, 120, 0.15)` | `.wa-bubble` box-shadow | Sombra azulada do balão WhatsApp |
| `rgba(0, 0, 0, 0.22)` | `.ck-banner` box-shadow | Sombra banner cookie |
| `rgba(0, 0, 0, 0.55)` | `.ck-modal__overlay` background | Overlay modal cookie |
| `rgba(0, 0, 0, 0.22)` | `.ck-modal__box` box-shadow | Sombra modal cookie |
| `rgba(0, 0, 0, 0.25)` | `.ck-toast` box-shadow | Sombra toast cookie |
| `rgba(var(--ck-accent-rgb), 0.12)` | `.ck-banner` border-top | Borda dourada banner cookie |
| `rgba(var(--ck-accent-rgb), 0.28)` | `.ck-toast` border | Borda dourada toast cookie |
| `rgba(var(--ck-accent-rgb), 0.1)` | `.ck-category__badge` background | Badge categoria cookie modal |

### 1.4 Estilo Geral

Arquitetura visual de **"cartões flutuantes em planos de profundidade alternados"**: cada seção majoritária alterna entre fundo branco puro (`--color-white`), cinza gelo (`--color-gray-50`) e gradientes suaves (`gray-50→white`), criando uma leitura em ziguezague que guia o olhar verticalmente sem necessidade de separadores visuais agressivos. A filosofia de espaçamento é **ritmo generoso** — `var(--space-24)` (6rem) de padding vertical em todas as seções, garantindo que o conteúdo respire e transmita calma institucional. Não há dark mode; o contraste é obtido via fundos escuros pontuais (Trust Bar, CTA section, Footer) que funcionam como "bolsões de gravidade visual" onde a conversão acontece. O princípio visual dominante é **"autoridade acolhedora"**: bordas arredondadas grandes (`--radius-2xl: 1.5rem`) suavizam a rigidez corporativa, enquanto a tipografia serifada (Playfair Display) nos títulos injeta tradição e confiança médica. O container base é `max-width: 1280px` centralizado, com padding responsivo de `1.5rem` → `2rem` → `3rem`.

---

## 2. LAYOUT — SEÇÃO POR SEÇÃO

### SEÇÃO 1 — HEADER FIXO COM GLASSMORPHISM

**Estrutura:**
```html
<header class="header" id="header">
  <div class="container">
    <nav class="nav" role="navigation" aria-label="Navegação principal">
      <a href="#" class="logo"> → <img src="images/logo-blue-care.webp" width="1536" height="1024"></a>
      <button class="nav-toggle" id="navToggle" aria-label="Abrir menu" aria-expanded="false">
        <span class="hamburger"></span> ×3
      </button>
      <ul class="nav-menu" id="navMenu"> → 6 <li><a href="#inicio" class="nav-link">Início</a></li></ul>
      <a href="https://wa.me/5521982873540..." class="btn btn-primary btn-nav"> → SVG WhatsApp + "Falar no WhatsApp"</a>
    </nav>
  </div>
</header>
```

**Fundo:**
- Layer 0 — base: `rgba(255, 255, 255, 0.85)` com `backdrop-filter: blur(16px)` e `-webkit-backdrop-filter: blur(16px)`
- Layer 1 — border: `1px solid rgba(255, 255, 255, 0.5)`
- Layer 2 — scrolled state: `background: rgba(255, 255, 255, 0.95)`, `box-shadow: var(--shadow-lg)`, `top: var(--space-2)`
- Layer 3 — conteúdo: `z-index: var(--z-fixed)` (300)

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Logo | `.logo img` | Flex start | `height: 75px; width: auto` | `object-fit: contain` |
| Hamburger | `.hamburger` | Flex end (mobile) | `width: 24px; height: 2px` | `background: var(--color-gray-800)` |
| Nav links | `.nav-menu` | Centro (desktop ≥1024px) | `gap: var(--space-8)` | `display: none` abaixo de 1024px, `display: flex` acima |
| CTA Nav | `.btn-nav` | Extrema direita | — | `display: none` abaixo de 1024px, `display: inline-flex` acima |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `slideIn` (menu mobile) | `opacity: 0; transform: translateY(-10px)` | `opacity: 1; transform: translateY(0)` | `0.3s` | `ease` | Clique em `.nav-toggle` | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.nav-link` | `:hover` | — | — | — | `color: var(--color-accent)` | `150ms ease` |
| `.nav-link::after` | `:hover` | — | — | — | `width: 0 → 100%` | `250ms ease` |
| `.header` | `.scrolled` | — | `var(--shadow-lg)` | — | `top: var(--space-2)` | `250ms ease` |
| `.header` | `.header-hidden` | `translate(-50%, -150%)` | — | — | `opacity: 0` | JS scroll direction |
| `.hamburger` (toggle ativo) | `.active:nth-child(1)` | `rotate(45deg) translate(5px,5px)` | — | — | — | `250ms ease` |
| `.hamburger` (toggle ativo) | `.active:nth-child(2)` | — | — | — | `opacity: 0` | `250ms ease` |
| `.hamburger` (toggle ativo) | `.active:nth-child(3)` | `rotate(-45deg) translate(5px,-5px)` | — | — | — | `250ms ease` |

**Diferenciador Visual:** O header não é um full-width sticky comum — é um **"floating pill"** com largura `calc(100% - var(--space-8))`, `max-width: 1200px`, centralizado via `left: 50%; transform: translateX(-50%)`, com `border-radius: var(--radius-xl)` e `top: var(--space-4)` (16px abaixo do topo da viewport). Isso cria a sensação de uma interface flutuante sobre o conteúdo, não uma barra presa.

---

### SEÇÃO 2 — HERO

**Estrutura:**
```html
<section class="hero" id="inicio">
  <div class="hero-bg-pattern"></div>
  <div class="hero-shape"></div>
  <div class="container hero-container">
    <div class="hero-grid">
      <div class="hero-content"> → badge, h1, subtitle, CTA buttons, trust stats
      <div class="hero-visual"> → image-wrapper (shape + img), floating-card
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `linear-gradient(135deg, var(--color-gray-50) 0%, var(--color-white) 50%, var(--color-primary-light) 100%)`
- Layer 1 — pattern: `.hero-bg-pattern` com `radial-gradient(circle at 20% 80%, var(--color-primary-light) 0%, transparent 50%)` + `radial-gradient(circle at 80% 20%, rgba(34, 50, 137, 0.05) 0%, transparent 40%)`
- Layer 2 — shape: `.hero-shape` — círculo decorativo `width: 600px; height: 600px; border-radius: 50%; background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%); opacity: 0.03; right: -10%; top: 20%`
- Layer 3 — conteúdo: `z-index: 1` no `.hero-content`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Badge | `.hero-badge` | Inline-flex acima do título | `padding: var(--space-2) var(--space-4)` | `border-radius: var(--radius-full); background: var(--color-white); box-shadow: var(--shadow-sm)` |
| Título H1 | `.hero-title` | Central (mobile) / Esquerda (desktop) | `max-width: natural` | `font-size: var(--text-6xl)` (desktop) |
| Highlight | `.hero-title .highlight` | Bloco abaixo da primeira linha | — | `background-clip: text; -webkit-text-fill-color: transparent; background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%)` |
| Subtítulo | `.hero-subtitle` | Central/Esquerda | `max-width: 500px` | `color: var(--color-gray-600)` |
| CTA grupo | `.hero-cta` | Flex wrap | `gap: var(--space-4)` | `margin-bottom: var(--space-12)` |
| Trust stats | `.hero-trust` | Flex row | `gap: var(--space-6)` | 3 itens + 2 dividers verticais |
| Imagem | `.hero-image` | Relative | `width: 100%; max-height: 80vh; aspect-ratio: 4/3` | `border-radius: var(--radius-2xl); box-shadow: var(--shadow-2xl); object-fit: cover` |
| Shape atrás img | `.hero-image-shape` | Absolute (`inset: -20px`) | — | `border-radius: var(--radius-2xl); transform: rotate(-3deg); opacity: 0.1` |
| Floating card | `.hero-floating-card` | Absolute (`bottom: -20px; left: -20px`) | — | `animation: float 3s ease-in-out infinite` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `float` | `translateY(0)` | `translateY(-10px)` (50%) | `3s` | `ease-in-out` | Loop infinito | — |
| `fadeIn` | `opacity: 0` | `opacity: 1` | `0.8s` | `ease` | Load | `0.4s` (`animation: fadeIn 0.8s ease 0.4s both`) |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.btn-primary` | `:hover` | `translateY(-2px)` | `var(--shadow-lg), var(--shadow-glow)` | — | — | `250ms ease` |
| `.btn-outline` | `:hover` | — | — | — | `background: var(--color-primary); color: var(--color-white)` | `250ms ease` |
| `.btn` svg | `:hover` | `translateX(3px)` | — | — | — | `250ms ease` |

**Diferenciador Visual:** O hero utiliza um **gradiente de fundo de três tons** (`gray-50 → white → primary-light`) que cria uma sensação de iluminação natural da esquerda para a direita, reforçada pelo `radial-gradient` de `primary-light` no canto inferior esquerdo. O `.hero-image-shape` atrás da foto principal está rotacionado em `-3deg`, criando uma moldura desalinhada que quebra a rigidez corporativa. O floating card com "Zero faltas" usa `animation: float` e posicionamento negativo (`bottom: -20px; left: -20px`) para parecer que está flutuando fora do grid.

---

### SEÇÃO 3 — TRUST BAR (MARQUEE INFINITO)

**Estrutura:**
```html
<section class="trust-bar">
  <div class="trust-marquee">
    <div class="trust-marquee-content">
      <span class="marquee-item">[SVG + texto]</span> × 6 originais
      <span class="marquee-item">[SVG + texto]</span> × 6 duplicatas
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`
- Layer 1 — borders: `border-top: 1px solid rgba(255, 255, 255, 0.1); border-bottom: 1px solid rgba(255, 255, 255, 0.1)`
- Layer 2 — mask: `.trust-marquee` tem `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)` e `-webkit-mask-image` idêntico — cria fade nas bordas esquerda/direita

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Container marquee | `.trust-marquee` | Relative | `width: 100%; overflow: hidden` | `mask-image` fade horizontal |
| Conteúdo | `.trust-marquee-content` | Inline-flex | `white-space: nowrap; gap: var(--space-12)` | `animation: scrollTrustBar 25s linear infinite !important` |
| Item | `.marquee-item` | Flex row | `white-space: nowrap; flex-shrink: 0` | `opacity: 0.9; color: var(--color-white)` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `scrollTrustBar` | `transform: translateX(0)` | `transform: translateX(-50%)` | `25s` | `linear` | Loop infinito | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.marquee-item` | `:hover` | `scale(1.05)` | — | — | `opacity: 1` | `0.3s ease` |

**Diferenciador Visual:** A Trust Bar usa **duplicação de conteúdo para loop CSS puro** — 6 itens originais + 6 duplicatas idênticas dentro de um `inline-flex` com `white-space: nowrap`. O `translateX(-50%)` garante transição suave porque o segundo bloco é idêntico ao primeiro. O `mask-image` cria um fade de entrada/saída nas laterais sem necessidade de divs overlay adicionais.

---

### SEÇÃO 4 — DOR E SOLUÇÃO

**Estrutura:**
```html
<section class="pain-solution" id="dor">
  <div class="container">
    <div class="section-header"> → tag + title
    <div class="pain-grid">
      <div class="pain-visual"> → img + overlay com stat
      <div class="pain-content"> → 4× .pain-item (icon + text)
    </div>
    <div class="solution-divider"> → line + "A solução" + line
    <div class="solution-grid">
      <div class="solution-card solution-main"> → icon + h3 + p + btn
      <div class="solution-features"> → 4× .solution-feature (check + text)
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--color-white)`
- Layer 1 — pain overlay: `rgba(12, 17, 69, 0.9)` com `backdrop-filter: blur(10px)`
- Layer 2 — solution card: `linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Imagem dor | `.pain-image` | Relative | `width: 100%` | `border-radius: var(--radius-2xl); box-shadow: var(--shadow-xl)` |
| Overlay stat | `.pain-overlay` | Absolute (`bottom/left/right: var(--space-6)`) | — | `backdrop-filter: blur(10px); border-radius: var(--radius-xl)` |
| Item dor | `.pain-item` | Flex row | `gap: var(--space-4); padding: var(--space-6)` | `background: var(--color-gray-50); border-left: 4px solid var(--color-error); border-radius: var(--radius-xl)` |
| Ícone dor | `.pain-icon` | Flex center | `40×40px` | `background: rgba(239, 68, 68, 0.1); color: var(--color-error); border-radius: var(--radius-lg)` |
| Divider | `.solution-divider` | Flex center | `gap: var(--space-4)` | `.divider-line: flex:1; height:1px; background: linear-gradient(90deg, transparent, var(--color-gray-300), transparent)` |
| Divider text | `.divider-text` | Inline | `padding: var(--space-2) var(--space-4)` | `background: var(--color-primary-light); border-radius: var(--radius-full)` |
| Card solução | `.solution-card` | Block | `padding: var(--space-10)` | `border-radius: var(--radius-2xl); color: var(--color-white)` |
| Card ícone | `.solution-icon` | Flex center | `64×64px` | `background: rgba(255,255,255,0.1); border-radius: var(--radius-xl)` |
| Feature check | `.feature-check` | Flex center | `24×24px` | `background: var(--color-success); border-radius: 50%; color: white; font-size: 12px` |

**Animação:** Nenhuma animação própria — herda `.reveal` global via JS.

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.pain-item` | `:hover` | `translateX(5px)` | `var(--shadow-md)` | — | — | `250ms ease` |

**Diferenciador Visual:** A seção utiliza um **padrão de conversão clássico Dor→Solução** com um divisor customizado que não é uma linha simples, mas um gradiente linear (`transparent → gray-300 → transparent`) interrompido por um pill arredondado (`border-radius: var(--radius-full)`) com fundo azul claro (`--color-primary-light`) e texto em uppercase — funciona como um "botão de atenção" sem ser clicável. O overlay na imagem usa `backdrop-filter: blur(10px)` sobre `rgba(12, 17, 69, 0.9)`, criando um vidro escuro que mantém a imagem visível mas prioriza a legibilidade do texto.

---

### SEÇÃO 5 — SOBRE

**Estrutura:**
```html
<section class="about" id="sobre">
  <div class="container">
    <div class="about-grid">
      <div class="about-visual"> → .about-image-main (img) + .about-experience (badge flutuante)
      <div class="about-content"> → tag, title, 2× p, .about-values-premium, .about-areas
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--color-gray-50)`
- Layer 1 — conteúdo: grid 1fr/1fr em ≥1024px

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Imagem | `.about-image-main img` | Relative | `width: 100%` | `border-radius: var(--radius-2xl); box-shadow: var(--shadow-xl)` |
| Badge experiência | `.about-experience` | Absolute (`bottom: -30px; right: -20px`) | — | `background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%); border-radius: var(--radius-xl); padding: var(--space-6); box-shadow: var(--shadow-xl); animation: float 4s ease-in-out infinite` |
| Número badge | `.exp-number` | Block | — | `font-family: var(--font-display); font-size: var(--text-5xl); font-weight: 700` |
| Valores premium | `.about-values-premium` | Flex wrap | `gap: var(--space-4)` | `margin: var(--space-8) 0` |
| Palavra valor | `.value-word` | Inline | — | `font-family: var(--font-display); font-size: var(--text-4xl); font-weight: 700; color: var(--color-primary-dark)` |
| Separador valor | `.value-divider` | Inline | — | `font-size: var(--text-2xl); color: var(--color-accent); font-weight: 300` |
| Tags área | `.area-tag` | Inline-flex | `padding: var(--space-2) var(--space-4)` | `background: var(--color-white); border: 1px solid var(--color-gray-200); border-radius: var(--radius-full)` |

**Animação:** `float` no badge de experiência (`4s ease-in-out infinite`).

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.area-tag` | `:hover` | — | — | `var(--color-primary)` | `background: var(--color-primary); color: var(--color-white)` | `150ms ease` |

**Diferenciador Visual:** O badge "+8 anos cuidando" é posicionado **negativamente** (`bottom: -30px; right: -20px`) sobrepondo a borda inferior/direita da imagem, quebrando o grid e criando profundidade. O sistema de valores premium (`Cuidado | Família | Amor`) usa uma tipografia serifada gigante (`var(--text-4xl)`) para palavras emocionais, intercaladas com pipes finos em dourado — funciona como um manifesto visual sem ser um bloco de texto.

---

### SEÇÃO 6 — SERVIÇOS

**Estrutura:**
```html
<section class="services" id="servicos">
  <div class="container">
    <div class="section-header center"> → tag, title, subtitle
    <div class="services-grid">
      <article class="service-card service-featured"> → .service-image (img) + .service-content (badge, h3, p, link)
      </article> × 6 cards
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--color-white)`
- Layer 1 — grid: `gap: var(--space-6); margin-top: var(--space-12)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Grid | `.services-grid` | Grid | `repeat(2, 1fr)` em ≥640px / `repeat(3, 1fr)` em ≥1024px | `gap: var(--space-6)` |
| Card | `.service-card` | Relative | `background: var(--color-white); border-radius: var(--radius-2xl)` | `box-shadow: var(--shadow-md); border: 1px solid var(--color-gray-100); overflow: hidden` |
| Card featured | `.service-featured` | Span 1 coluna (mobile) | — | Ocupa mesma proporção, mas é o primeiro item |
| Imagem | `.service-image` | Relative | `height: 200px; overflow: hidden` | — |
| Imagem img | `.service-image img` | Block | `width: 100%; height: 100%; object-fit: cover` | `transition: transform 350ms ease` |
| Badge | `.service-badge` | Inline | `padding: var(--space-1) var(--space-3)` | `background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%); border-radius: var(--radius-full); color: white` |
| Link | `.service-link` | Inline-flex | `gap: var(--space-2)` | `color: var(--color-primary); font-weight: 600` |

**Animação:** Nenhuma animação própria — herda `.reveal` global via JS.

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.service-card` | `:hover` | `translateY(-8px)` | `var(--shadow-xl)` | `var(--color-accent)` | — | `250ms ease` |
| `.service-image img` | `.service-card:hover` | `scale(1.05)` | — | — | — | `350ms ease` |
| `.service-link` | `:hover` | — | — | — | `gap: var(--space-3); color: var(--color-accent)` | `150ms ease` |

**Diferenciador Visual:** O card `.service-featured` não tem grid span especial no CSS (não há `grid-column: span 2`), mas por ser o primeiro item na lista, funciona como destaque visual pelo badge "Mais solicitado" com gradiente primário→dourado. A transição de imagem interna (`scale(1.05)`) combinada com `overflow: hidden` no container de `height: 200px` cria um efeito de zoom contido sem distorcer o layout do card.

---

### SEÇÃO 7 — DIFERENCIAIS

**Estrutura:**
```html
<section class="differentials">
  <div class="container">
    <div class="section-header center"> → tag + title
    <div class="diff-grid"> → 8× .diff-card (icon + h4 + p)
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `linear-gradient(135deg, var(--color-gray-50) 0%, var(--color-white) 100%)`
- Layer 1 — grid: `repeat(2, 1fr)` em ≥640px / `repeat(4, 1fr)` em ≥1024px

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Grid | `.diff-grid` | Grid | `gap: var(--space-6)` | `margin-top: var(--space-12)` |
| Card | `.diff-card` | Block | `padding: var(--space-8)` | `background: white; border-radius: var(--radius-2xl); box-shadow: var(--shadow-md); border: 1px solid var(--color-gray-100); text-align: center` |
| Ícone | `.diff-icon` | Flex center | `64×64px` | `background: linear-gradient(135deg, var(--color-primary-light) 0%, rgba(183,225,246,0.3) 100%); color: var(--color-primary); border-radius: var(--radius-xl); margin: 0 auto var(--space-6)` |

**Animação:** Nenhuma animação própria — herda `.reveal` global via JS.

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.diff-card` | `:hover` | `translateY(-5px)` | `var(--shadow-xl)` | `var(--color-primary-light)` | — | `250ms ease` |
| `.diff-icon` | `.diff-card:hover` | `scale(1.1)` | — | — | `background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%); color: white` | `250ms ease` |

**Diferenciador Visual:** O efeito de hover nos diferenciais é um **"inversão de gradiente"** no ícone: o estado default usa um gradiente claro azul-gelo (`primary-light → rgba(183,225,246,0.3)`), e no hover inverte para o gradiente institucional escuro (`primary → primary-dark`) com texto branco, enquanto o card sobe 5px. Isso cria um feedback visual instantâneo de "ativação" sem mudar a cor do card inteiro.

---

### SEÇÃO 8 — DEPOIMENTOS (CARROSSEL INFINITO)

**Estrutura:**
```html
<section class="testimonials" id="depoimentos">
  <div class="container">
    <div class="section-header center"> → tag, title, .rating-summary
    <div class="testimonials-carousel-wrapper">
      <div class="testimonials-carousel"> → 9× article.testimonial-card + 9× duplicatas
      </div>
    </div>
    <div class="google-badge"> → img Google logo + span
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--color-white)`
- Layer 1 — fade bordas: `.testimonials-carousel-wrapper::before` (`left: 0; background: linear-gradient(to right, var(--color-white), transparent)`) e `::after` (`right: 0; background: linear-gradient(to left, var(--color-white), transparent)`) — `width: 80px; z-index: 2`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Wrapper | `.testimonials-carousel-wrapper` | Relative | `overflow: hidden; margin-top: var(--space-12)` | — |
| Carrossel | `.testimonials-carousel` | Inline-flex | `white-space: nowrap; gap: var(--space-6)` | `animation: scrollTestimonials 40s linear infinite` |
| Card | `.testimonial-card` | Block | `width: 360px; flex-shrink: 0; white-space: normal` | `background: var(--color-gray-50); padding: var(--space-8); border-radius: var(--radius-2xl)` |
| Avatar | `.testimonial-avatar-placeholder` | Flex center | `56×56px; border-radius: 50%` | `background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%); color: white; font-size: var(--text-lg); font-weight: 700; border: 3px solid white; box-shadow: var(--shadow-md)` |
| Estrelas | `.testimonial-stars` | Block | — | `color: #FBBF24; letter-spacing: 2px` |
| Badge Google | `.google-badge` | Flex center | `gap: var(--space-3); padding: var(--space-4)` | `background: var(--color-gray-50); border-radius: var(--radius-xl); margin-top: var(--space-12)` |

**Animação:**

| Nome @keyframes | Estado inicial | Estado final | Duração | Easing | Trigger | Delay |
|---|---|---|---|---|---|---|
| `scrollTestimonials` | `translateX(0)` | `translateX(-50%)` | `40s` | `linear` | Loop infinito | — |

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.testimonials-carousel` | `:hover` | — | — | — | `animation-play-state: paused` | — |
| `.testimonial-card` | `:hover` | `translateY(-5px)` | `var(--shadow-xl)` | — | `background: var(--color-white)` | `250ms ease` |

**Diferenciador Visual:** O carrossel de depoimentos replica exatamente a **mesma técnica mecânica da Trust Bar** (duplicação de conteúdo + `translateX(-50%)`), mas com duração mais lenta (`40s` vs `25s`) para permitir leitura. O wrapper possui **fade de 80px** nas laterais via pseudo-elements `::before` e `::after`, criando a ilusão de que os cards emergem do nada. O carrossel pausa no hover (`animation-play-state: paused`), permitindo leitura sem interrupção. Cada card usa avatares com iniciais (placeholder) em gradiente azul escuro, não fotos reais — decisão de design que mantém privacidade e uniformidade visual.

---

### SEÇÃO 9 — FAQ ACCORDION

**Estrutura:**
```html
<section class="faq" id="faq">
  <div class="container">
    <div class="faq-grid">
      <div class="faq-header"> → tag, title, intro, btn CTA
      <div class="faq-list"> → 8× .faq-item > button.faq-question + div.faq-answer
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `linear-gradient(135deg, var(--color-gray-50) 0%, var(--color-white) 100%)`
- Layer 1 — sticky header: `.faq-header` tem `position: sticky; top: 100px; align-self: start` em ≥1024px

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Grid | `.faq-grid` | Grid | `gap: var(--space-12)` | `grid-template-columns: 1fr 2fr` em ≥1024px |
| Header sticky | `.faq-header` | Sticky (≥1024px) | `top: 100px; align-self: start` | — |
| Item | `.faq-item` | Block | — | `background: white; border-radius: var(--radius-xl); box-shadow: var(--shadow-sm); border: 1px solid var(--color-gray-100); overflow: hidden` |
| Pergunta | `.faq-question` | Flex space-between | `width: 100%; padding: var(--space-6)` | `font-weight: 600; color: var(--color-gray-900); text-align: left` |
| Ícone | `.faq-icon` | Flex shrink | `20×20px` | `color: var(--color-primary); transition: transform 250ms ease` |
| Resposta | `.faq-answer` | Block | `max-height: 0; overflow: hidden` | `transition: max-height 350ms ease, padding 350ms ease` |

**Animação:** Nenhuma animação @keyframes — transição pura de max-height.

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.faq-question` | `:hover` | — | — | — | `color: var(--color-primary)` | `150ms ease` |
| `.faq-icon` | `.faq-item.active` | `rotate(180deg)` | — | — | — | `250ms ease` |
| `.faq-answer` | `.faq-item.active` | — | — | — | `max-height: 500px; padding: 0 var(--space-6) var(--space-6)` | `350ms ease` |

**Diferenciador Visual:** O FAQ usa um **layout assimétrico de grid** (`1fr 2fr`) onde a coluna esquerda fica presa via `position: sticky; top: 100px` enquanto o usuário rola as perguntas — mantendo o CTA "Falar com especialista" sempre visível no desktop. A transição de abertura é feita via `max-height: 0 → 500px` com `overflow: hidden`, técnica CSS pura sem JavaScript de animação de altura. O ícone de seta rotaciona 180° suavemente.

---

### SEÇÃO 10 — CTA COM FORMULÁRIO

**Estrutura:**
```html
<section class="cta-section" id="contato">
  <div class="container">
    <div class="cta-grid">
      <div class="cta-content"> → tag, title, text, benefits, WhatsApp CTA
      <div class="cta-form-wrapper"> → <form id="contactForm"> (7 campos + submit + privacy)
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--color-primary-dark)` (`#0C1145`)
- Layer 1 — overlay decorativo: `::before` com `background-image: linear-gradient(135deg, rgba(12, 17, 69, 0.92) 0%, rgba(34, 50, 137, 0.85) 100%), url('images/servico-cuidado24h.webp'); background-size: cover; background-position: center top; background-attachment: fixed; opacity: 0.5; pointer-events: none`
- Layer 2 — conteúdo: `position: relative; z-index: 1`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Grid | `.cta-grid` | Grid | `gap: var(--space-12)` | `grid-template-columns: 1fr 1fr` em ≥1024px |
| Conteúdo | `.cta-content` | Block | — | `color: var(--color-white)` |
| Tag override | `.cta-content .section-tag` | — | — | `color: var(--color-primary-light)` |
| Tag linha | `.cta-content .section-tag::before` | — | — | `background: var(--color-primary-light)` |
| Título override | `.cta-content .section-title` | — | — | `color: var(--color-white)` |
| Benefícios | `.cta-benefits` | Flex col | `gap: var(--space-4)` | — |
| Benefício item | `.cta-benefit` | Flex row | `gap: var(--space-3)` | `font-size: var(--text-sm); color: white` |
| Benefício svg | `.cta-benefit svg` | Flex shrink | `20×20px` | `color: var(--color-success)` |
| WhatsApp CTA | `.cta-whatsapp` | Flex col | `gap: var(--space-3); padding-top: var(--space-6)` | `border-top: 1px solid rgba(255,255,255,0.1)` |
| Form wrapper | `.cta-form-wrapper` | Block | — | `background: var(--color-white); padding: var(--space-8); border-radius: var(--radius-2xl); box-shadow: var(--shadow-2xl)` |
| Form | `.cta-form` | Flex col | `gap: var(--space-5)` | — |
| Form row | `.form-row` | Grid | `gap: var(--space-5)` | `grid-template-columns: 1fr 1fr` em ≥640px |
| Input | `.form-group input/select/textarea` | Block | `padding: var(--space-3) var(--space-4)` | `border: 2px solid var(--color-gray-200); border-radius: var(--radius-lg); font-family: inherit` |
| Input focus | `:focus` | — | — | `border-color: var(--color-primary); box-shadow: 0 0 0 3px rgba(34, 50, 137, 0.1)` |
| Submit | `.btn-submit` | Block | `width: 100%` | — |
| Privacy | `.form-privacy` | Flex center | `gap: var(--space-2)` | `font-size: var(--text-xs); color: var(--color-gray-500)` |

**Animação:** Nenhuma animação própria — herda `.reveal` global.

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| Input/Select/Textarea | `:focus` | — | `0 0 0 3px rgba(34, 50, 137, 0.1)` | `var(--color-primary)` | `outline: none` | `150ms ease` |

**Diferenciador Visual:** A seção CTA é o único local do site que usa **parallax fixo** (`background-attachment: fixed`) com uma imagem de fundo real (`servico-cuidado24h.webp`) sobreposta por um gradiente escuro de dupla camada (`rgba(12,17,69,0.92) → rgba(34,50,137,0.85)`). O formulário flutua como um card branco (`border-radius: var(--radius-2xl); box-shadow: var(--shadow-2xl)`) sobre esse fundo dramático, criando o contraste de luminosidade máximo do site. O botão de submit, após sucesso, muda dinamicamente para `background: var(--color-success)` via JS.

---

### SEÇÃO 11 — LOCALIZAÇÃO

**Estrutura:**
```html
<section class="location">
  <div class="container">
    <div class="location-grid">
      <div class="location-info"> → tag, title, text, .location-areas (grid de 8 .area-item), btn
      <div class="location-map"> → <iframe> Google Maps embed
      </div>
    </div>
  </div>
</section>
```

**Fundo:**
- Layer 0 — base: `var(--color-white)`
- Layer 1 — grid: `1fr 1fr` em ≥1024px, `align-items: center`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Áreas grid | `.areas-grid` | Grid | `grid-template-columns: repeat(2, 1fr)` mobile / `repeat(3, 1fr)` ≥640px | `gap: var(--space-3)` |
| Área item | `.area-item` | Flex row | `gap: var(--space-2)` | `font-size: var(--text-sm); color: var(--color-gray-600)` |
| Área svg | `.area-item svg` | Flex shrink | `16×16px` | `color: var(--color-primary)` |
| Mapa | `.location-map` | Block | `height: 400px` | `border-radius: var(--radius-2xl); overflow: hidden; box-shadow: var(--shadow-xl)` |
| Mapa iframe | `.location-map iframe` | Block | `width: 100%; height: 100%` | `border: none` |

**Animação:** Nenhuma.

**Micro-interações:** Nenhuma específica.

**Diferenciador Visual:** O mapa do Google é apresentado sem bordas nem controles visuais do embed (exceto os nativos do Google), com `border-radius: var(--radius-2xl)` e `box-shadow: var(--shadow-xl)`, transformando um iframe utilitário em um elemento de design coeso. A lista de regiões usa ícones de pin (`path: M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z`) em azul institucional para reforçar o aspecto geográfico.

---

### SEÇÃO 12 — RODAPÉ

**Estrutura:**
```html
<footer class="footer">
  <div class="container">
    <div class="footer-main">
      <div class="footer-grid"> → 4 colunas: brand, links rápidos, serviços, contato
      </div>
    </div>
    <div class="footer-bottom"> → credits-left (copyright + legal links) + credits-right (AG5)
    </div>
  </div>
</footer>
```

**Fundo:**
- Layer 0 — base: `var(--color-gray-900)` (`#0F172A`)
- Layer 1 — separador: `.footer-bottom` tem `border-top: 1px solid rgba(255, 255, 255, 0.1)`

**Elementos Restritos:**

| Elemento | Classe / Seletor CSS | Posição | Dimensões | Valores CSS Chave |
|---|---|---|---|---|
| Grid principal | `.footer-grid` | Grid | `repeat(2, 1fr)` ≥640px / `repeat(4, 1fr)` ≥1024px | `gap: 2.5rem; margin-bottom: var(--space-12)` |
| Logo | `.footer-logo, .footer-logo img` | Block | `height: 90px; max-width: 220px` | `object-fit: cover; object-position: center; margin-bottom: var(--space-4)` |
| Texto marca | `.footer-text` | Block | — | `font-size: 0.875rem; color: rgba(255,255,255,0.7); line-height: 1.6; margin-bottom: 1.5rem` |
| Social links | `.social-link` | Flex center | `40×40px` | `background: rgba(255,255,255,0.1); border-radius: var(--radius-lg); color: white` |
| Títulos colunas | `.footer-links h4, .footer-contact h4` | Block | — | `font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: var(--color-accent); margin-bottom: 1.5rem` |
| Links | `.footer-links a, .footer-contact a, .contact-item` | Inline-flex | `gap: 0.5rem` | `font-size: 0.875rem; color: rgba(255,255,255,0.7); transition: color 300ms ease` |
| Bottom | `.footer-bottom` | Flex col (mobile) / row (≥640px) | `gap: 1rem; padding: 20px 1.5rem` | `border-top: 1px solid rgba(255,255,255,0.1); justify-content: space-between` |
| Copyright | `.footer-copyright` | Inline | — | `font-size: 0.75rem; color: rgba(255,255,255,0.5)` |
| Legal links | `.footer-legal-links` | Flex wrap | `gap: 4px` | `font-size: 11px; color: rgba(255,255,255,0.4)` |
| Separador legal | `.legal-separator` | Inline | — | `margin: 0 10px; opacity: 0.3` |
| Cookie toggle | `#cookie-toggle` | Inline-flex | `width: 28px; height: 14px` | `background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); border-radius: 10px; position: relative` |
| Cookie dot | `#cookie-toggle-dot` | Absolute | `width: 10px; height: 10px` | `background: #C49A3C; border-radius: 50%; box-shadow: 0 0 5px rgba(0,0,0,0.3); transition: left 0.2s ease` |
| Créditos direita | `.footer-credits-right` | Inline | — | `font-size: 0.75rem; color: rgba(255,255,255,0.5); white-space: nowrap` |
| Créditos link | `.footer-credits-right a` | Inline | — | `color: var(--color-accent); font-weight: 600` |

**Animação:** Nenhuma.

**Micro-interações:**

| Elemento | Estado | transform | box-shadow | border | Outros | Duração / Easing |
|---|---|---|---|---|---|---|
| `.social-link` | `:hover` | `translateY(-2px)` | — | — | `background: var(--color-primary)` | `150ms ease` |
| `.footer-links a` | `:hover` | — | — | — | `color: var(--color-accent)` | `300ms ease` |
| `.footer-contact a` | `:hover` | — | — | — | `color: var(--color-accent)` | `300ms ease` |
| `.footer-legal-links a` | `:hover` | — | — | — | `color: var(--color-accent)` | `300ms ease` |
| `.footer-credits-right a` | `:hover` | — | — | — | `color: var(--color-primary-light)` | `300ms ease` |

**Diferenciador Visual:** O rodapé contém um **toggle de cookies customizado inline** no canto inferior esquerdo — não é um botão flutuante, mas um micro-componente de 28×14px com duas bolinhas de estado (verde ✓ / vermelho ✕) e um dot dourado que desliza (`transition: left 0.2s ease`). Isso integra o controle de privacidade diretamente nos créditos legais, economizando espaço visual. A logo do rodapé é renderizada com `object-fit: cover; height: 90px`, diferente do header onde ela é `height: 75px` sem crop forçado.

---

## 3. COMPONENTES REUTILIZÁVEIS

### 3.1 Botões

```css
/* ─── BOTÃO BASE ─── */
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-2);
    font-size: var(--text-sm);
    font-weight: 600;
    padding: var(--space-3) var(--space-6);
    border-radius: var(--radius-lg);
    transition: all var(--transition-base);
    white-space: nowrap;
}

.btn svg {
    flex-shrink: 0;
    transition: transform var(--transition-base);
}

.btn:hover svg {
    transform: translateX(3px);
}

/* ─── BOTÃO PRIMÁRIO ─── */
.btn-primary {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    color: var(--color-white);
    box-shadow: var(--shadow-md);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-lg), var(--shadow-glow);
}

/* ─── BOTÃO OUTLINE ─── */
.btn-outline {
    background: transparent;
    color: var(--color-primary);
    border: 2px solid var(--color-primary);
}

.btn-outline:hover {
    background: var(--color-primary);
    color: var(--color-white);
}

/* ─── BOTÃO LARGE ─── */
.btn-large {
    padding: var(--space-4) var(--space-8);
    font-size: var(--text-base);
}

/* ─── BOTÃO WHATSAPP ─── */
.btn-whatsapp {
    background: var(--color-whatsapp);
    color: var(--color-white);
}

.btn-whatsapp:hover {
    background: #128C7E;
    transform: translateY(-2px);
}

/* ─── BOTÃO NAV (desktop only) ─── */
.btn-nav {
    display: none;
}
@media (min-width: 1024px) {
    .btn-nav {
        display: inline-flex;
    }
}

/* ─── BOTÃO FULL WIDTH ─── */
.btn-full {
    width: 100%;
}

/* ─── BOTÃO SUBMIT (estado sucesso via JS) ─── */
.btn-submit {
    width: 100%;
    margin-top: var(--space-2);
}
```

### 3.2 Cards

```css
/* ─── CARD DE SERVIÇO ─── */
.service-card {
    background: var(--color-white);
    border-radius: var(--radius-2xl);
    overflow: hidden;
    box-shadow: var(--shadow-md);
    transition: all var(--transition-base);
    border: 1px solid var(--color-gray-100);
}

.service-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-xl);
    border-color: var(--color-accent);
}

/* ─── CARD DE DIFERENCIAL ─── */
.diff-card {
    background: var(--color-white);
    padding: var(--space-8);
    border-radius: var(--radius-2xl);
    box-shadow: var(--shadow-md);
    border: 1px solid var(--color-gray-100);
    transition: all var(--transition-base);
    text-align: center;
}

.diff-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-xl);
    border-color: var(--color-primary-light);
}

/* ─── CARD DE DEPOIMENTO ─── */
.testimonials-carousel .testimonial-card {
    width: 360px;
    flex-shrink: 0;
    white-space: normal;
    background: var(--color-gray-50);
    padding: var(--space-8);
    border-radius: var(--radius-2xl);
    transition: all var(--transition-base);
}

.testimonials-carousel .testimonial-card:hover {
    background: var(--color-white);
    box-shadow: var(--shadow-xl);
    transform: translateY(-5px);
}

/* Override para não conflitar com reveal */
.testimonials-carousel .testimonial-card.reveal {
    opacity: 1;
    transform: none;
}

/* ─── CARD DE DOR ─── */
.pain-item {
    display: flex;
    gap: var(--space-4);
    padding: var(--space-6);
    background: var(--color-gray-50);
    border-radius: var(--radius-xl);
    border-left: 4px solid var(--color-error);
    transition: all var(--transition-base);
}

.pain-item:hover {
    transform: translateX(5px);
    box-shadow: var(--shadow-md);
}

/* ─── CARD SOLUÇÃO PRINCIPAL ─── */
.solution-card {
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
    padding: var(--space-10);
    border-radius: var(--radius-2xl);
    color: var(--color-white);
}

.solution-card .btn {
    background: var(--color-white);
    color: var(--color-primary);
}

.solution-card .btn:hover {
    background: var(--color-primary-light);
}
```

### 3.3 Elementos Flutuantes Fixos

```css
/* ─── BOTÃO DE ÁUDIO (FIXO INFERIOR ESQUERDO) ─── */
.audio-control {
    position: fixed;
    bottom: var(--space-6);
    left: var(--space-6);
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.85);
    backdrop-filter: blur(10px);
    border: 1px solid var(--color-gray-200);
    box-shadow: var(--shadow-lg);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 1000;
    color: var(--color-primary);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.audio-control:hover {
    transform: scale(1.1);
    background: var(--color-white);
    color: var(--color-primary-dark);
    box-shadow: var(--shadow-xl);
}

.audio-control .wave-1,
.audio-control .wave-2 {
    animation: pulseWave 1.5s infinite ease-in-out;
    transform-origin: center left;
}

.audio-control .wave-2 {
    animation-delay: 0.5s;
}

@keyframes pulseWave {
    0%, 100% { opacity: 0.3; transform: scale(0.9); }
    50% { opacity: 1; transform: scale(1.1); }
}

/* ─── WHATSAPP PREMIUM (FIXO INFERIOR DIREITO) ─── */
.wa-premium-container {
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 9999;
    font-family: 'Outfit', sans-serif;
}

.wa-float-btn {
    width: 65px;
    height: 65px;
    background-color: #25d366;
    color: #fff !important;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    box-shadow: 0 15px 30px rgba(37, 211, 102, 0.3);
    text-decoration: none;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
}

.wa-float-btn:hover {
    transform: scale(1.1) translateY(-5px);
    box-shadow: 0 20px 40px rgba(37, 211, 102, 0.4);
}

.wa-badge {
    position: absolute;
    top: -5px;
    right: -5px;
    background: #ff3b30;
    color: #fff;
    font-size: 10px;
    font-weight: 800;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 3px solid #fff;
    transform: scale(0);
    transition: transform 0.5s ease;
}

.wa-badge.show {
    transform: scale(1);
}

/* Balão WhatsApp Glassmorphism */
.wa-bubble {
    width: 300px;
    position: absolute;
    bottom: 85px;
    right: 0;
    background: rgba(255, 255, 255, 0.92);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.6);
    border-radius: 24px 24px 4px 24px;
    box-shadow: 0 20px 40px rgba(0, 48, 120, 0.15);
    padding: 20px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(20px) scale(0.95);
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.wa-bubble.show {
    opacity: 1;
    visibility: visible;
    transform: translateY(0) scale(1);
}

/* Animação de digitação */
.wa-typing {
    display: flex;
    gap: 4px;
    padding: 10px 0;
}

.wa-typing span {
    width: 6px;
    height: 6px;
    background: #25d366;
    border-radius: 50%;
    animation: wa-typing-ani 1.4s infinite;
    opacity: 0.4;
}

.wa-typing span:nth-child(2) { animation-delay: 0.2s; }
.wa-typing span:nth-child(3) { animation-delay: 0.4s; }

@keyframes wa-typing-ani {
    0%, 100% { transform: translateY(0); opacity: 0.4; }
    50% { transform: translateY(-4px); opacity: 1; }
}

/* Status dot pulsante */
.wa-status-dot {
    position: absolute;
    bottom: -2px;
    right: -2px;
    width: 12px;
    height: 12px;
    background: #25d366;
    border: 2px solid #fff;
    border-radius: 50%;
    animation: wa-pulse-green 2s infinite;
}

@keyframes wa-pulse-green {
    0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
    70% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
    100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
}
```

### 3.4 Drawer Menu (Modal Mobile)

```css
/* ─── DRAWER OVERLAY ─── */
.drawer-overlay {
    position: fixed;
    inset: 0;
    background: rgba(12, 17, 69, 0.6);
    backdrop-filter: blur(4px);
    opacity: 0;
    pointer-events: none;
    z-index: 9998;
    transition: opacity 0.3s cubic-bezier(0.25, 1, 0.5, 1);
}

.drawer-overlay.active {
    opacity: 1;
    pointer-events: auto;
}

/* ─── DRAWER PAINEL ─── */
.drawer {
    position: fixed;
    top: 0;
    right: -320px;
    bottom: 0;
    width: 100%;
    max-width: 320px;
    background-color: var(--color-white);
    z-index: 9999;
    display: flex;
    flex-direction: column;
    box-shadow: var(--shadow-2xl);
    transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
}

.drawer.active {
    transform: translateX(-320px);
}

.drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--space-6);
    border-bottom: 1px solid var(--color-gray-100);
}

.drawer-logo img {
    height: 75px;
    width: auto;
}

.drawer-close {
    color: var(--color-gray-600);
    transition: color var(--transition-fast);
    padding: var(--space-2);
    min-width: 44px;
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.drawer-close:hover {
    color: var(--color-accent);
}

.drawer-nav {
    flex: 1;
    padding: var(--space-8) var(--space-6);
    overflow-y: auto;
}

.drawer-links {
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
}

.drawer-link {
    font-size: var(--text-lg);
    font-weight: 600;
    color: var(--color-gray-800);
    opacity: 0.8;
    transition: all var(--transition-fast);
}

.drawer-link:hover {
    opacity: 1;
    color: var(--color-accent);
    transform: translateX(5px);
}

.drawer-footer {
    padding: var(--space-6);
    border-top: 1px solid var(--color-gray-100);
}
```

### 3.5 Pills / Tags / Badges / Eyebrows

```css
/* ─── SECTION TAG (EYEBROW) ─── */
.section-tag {
    display: inline-block;
    font-size: var(--text-sm);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-primary);
    margin-bottom: var(--space-4);
    position: relative;
    padding-left: var(--space-6);
}

.section-tag::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 16px;
    height: 2px;
    background: linear-gradient(90deg, var(--color-primary), var(--color-primary-light));
}

/* ─── HERO BADGE ─── */
.hero-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-2);
    background: var(--color-white);
    padding: var(--space-2) var(--space-4);
    border-radius: var(--radius-full);
    font-size: var(--text-xs);
    font-weight: 600;
    color: var(--color-primary);
    box-shadow: var(--shadow-sm);
    margin-bottom: var(--space-6);
}

.badge-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 18px;
    height: 18px;
    background: var(--color-success);
    color: var(--color-white);
    border-radius: 50%;
    font-size: 10px;
}

/* ─── SERVICE BADGE ─── */
.service-badge {
    display: inline-block;
    background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-accent) 100%);
    color: var(--color-white);
    font-size: var(--text-xs);
    font-weight: 600;
    padding: var(--space-1) var(--space-3);
    border-radius: var(--radius-full);
    margin-bottom: var(--space-3);
}

/* ─── AREA TAG ─── */
.area-tag {
    display: inline-flex;
    align-items: center;
    padding: var(--space-2) var(--space-4);
    background: var(--color-white);
    border: 1px solid var(--color-gray-200);
    border-radius: var(--radius-full);
    font-size: var(--text-sm);
    color: var(--color-gray-600);
    transition: all var(--transition-fast);
}

.area-tag:hover {
    background: var(--color-primary);
    color: var(--color-white);
    border-color: var(--color-primary);
}

/* ─── DIVIDER TEXT PILL ─── */
.divider-text {
    font-size: var(--text-sm);
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--color-primary);
    padding: var(--space-2) var(--space-4);
    background: var(--color-primary-light);
    border-radius: var(--radius-full);
}
```

### 3.6 Sistema .reveal on scroll

```css
/* ─── REVEAL SYSTEM ─── */
.reveal {
    opacity: 0;
    transform: translateY(15px);
    transition: opacity 0.4s cubic-bezier(0.25, 1, 0.5, 1), transform 0.4s cubic-bezier(0.25, 1, 0.5, 1);
    transition-delay: var(--reveal-delay, 0s);
}

.reveal.active {
    opacity: 1;
    transform: translateY(0);
}

/* Fallback inline no <head> para LCP (sem JS) */
/* .reveal { opacity: 0; transform: translateY(30px); transition: opacity 800ms ease, transform 800ms ease; } */
/* .reveal.active { opacity: 1; transform: none; } */
```

**Comportamento JS:** A classe `.reveal` é adicionada via JavaScript (`ScrollReveal` class) aos elementos: `.service-card`, `.diff-card`, `.pain-item`, `.solution-feature`, `.testimonials-grid .testimonial-card`. Cada elemento recebe `--reveal-delay` inline calculado como `${index * 0.02}s`. O `IntersectionObserver` observa com `threshold: 0.05` e `rootMargin: '0px 0px 100px 0px'`, adicionando `.active` e chamando `unobserve` após ativação.

### 3.7 Carrossel Infinito CSS

```css
/* ─── TRUST BAR CARROSSEL ─── */
.trust-marquee-content {
    display: inline-flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    gap: var(--space-12);
    animation: scrollTrustBar 25s linear infinite !important;
    animation-play-state: running !important;
    padding: var(--space-4) 0;
}

@keyframes scrollTrustBar {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

/* ─── DEPOIMENTOS CARROSSEL ─── */
.testimonials-carousel {
    display: inline-flex;
    flex-wrap: nowrap;
    white-space: nowrap;
    gap: var(--space-6);
    animation: scrollTestimonials 40s linear infinite;
    padding: var(--space-4) 0;
}

.testimonials-carousel:hover {
    animation-play-state: paused;
}

@keyframes scrollTestimonials {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

/* Fallback reduced motion */
@media (prefers-reduced-motion: reduce) {
    .testimonials-carousel {
        animation: none;
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        padding-bottom: var(--space-4);
    }
    .testimonials-carousel .testimonial-card {
        scroll-snap-align: start;
    }
}
```

### 3.8 Cookie Banner (Componente Externo Integrado)

O cookie banner é um sistema completo em `cookie-banner.css` e `cookie-banner.js`. Veja documentação detalhada nos arquivos fonte. Destaques visuais:

```css
/* Banner fixo inferior */
.ck-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 9000;
    background: var(--ck-bg); /* #0C1145 */
    border-top: 1px solid rgba(var(--ck-accent-rgb), 0.12);
    box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.22);
    transform: translateY(100%);
    transition: transform 0.42s var(--ck-ease-out);
    backdrop-filter: blur(10px);
}

.ck-banner.ck-banner--visible {
    transform: translateY(0);
}

/* Modal de preferências */
.ck-modal__box {
    transform: translateY(14px) scale(0.98);
    transition: transform var(--ck-transition);
    border-top: 2px solid var(--ck-accent);
}

.ck-modal.ck-modal--visible .ck-modal__box {
    transform: translateY(0) scale(1);
}
```

---

## 4. SISTEMA GLOBAL DE ANIMAÇÕES

| Nome @keyframes | 0% | 50% | 100% | Duração padrão | Easing | Onde é usado |
|---|---|---|---|---|---|---|
| `float` | `translateY(0)` | `translateY(-10px)` | `translateY(0)` | `3s` / `4s` | `ease-in-out` | `.hero-floating-card` (3s), `.about-experience` (4s) |
| `fadeIn` | `opacity: 0` | — | `opacity: 1` | `0.8s` | `ease` | `.hero-visual` (delay 0.4s) |
| `scrollTrustBar` | `translateX(0)` | — | `translateX(-50%)` | `25s` | `linear` | `.trust-marquee-content` loop infinito |
| `scrollTestimonials` | `translateX(0)` | — | `translateX(-50%)` | `40s` | `linear` | `.testimonials-carousel` loop infinito |
| `slideIn` | `opacity: 0; translateY(-10px)` | — | `opacity: 1; translateY(0)` | `0.3s` | `ease` | `.nav-menu.active` (menu mobile aberto) |
| `spin` | `rotate(0deg)` | — | `rotate(360deg)` | `1s` | `linear` | `.spin` no loading do formulário |
| `slideUp` | `opacity: 0; translateY(20px)` | — | `opacity: 1; translateY(0)` | — | — | Definido, não usado ativamente no CSS principal |
| `slideDown` | `opacity: 1; translateY(0)` | — | `opacity: 0; translateY(20px)` | — | — | Definido, não usado ativamente |
| `wa-typing-ani` | `translateY(0); opacity: 0.4` | `translateY(-4px); opacity: 1` | `translateY(0); opacity: 0.4` | `1.4s` | `ease` | Bolinhas de digitação do WhatsApp |
| `wa-pulse-green` | `box-shadow: 0 0 0 0 rgba(37,211,102,0.7)` | `box-shadow: 0 0 0 10px rgba(37,211,102,0)` | `box-shadow: 0 0 0 0 rgba(37,211,102,0)` | `2s` | `ease` | `.wa-status-dot` |
| `pulseWave` | `opacity: 0.3; scale(0.9)` | `opacity: 1; scale(1.1)` | `opacity: 0.3; scale(0.9)` | `1.5s` | `ease-in-out` | Ondas do ícone de áudio |

---

## 5. COMPORTAMENTOS JAVASCRIPT

| Função / Comportamento | Trigger | Ação executada | Classes add/remove | Elementos afetados |
|---|---|---|---|---|
| `Navigation.handleScroll()` | Scroll com RAF (16ms) | Toggle `.scrolled` em scroll > 50px; toggle `.header-hidden` baseado em direção (down/up) | `add/remove .scrolled`, `add/remove .header-hidden` | `#header` |
| `Navigation.handleMobileMenu()` | Click `#navToggle` | Abre/fecha drawer mobile | `add/remove .active` em `#drawerMenu`, `#drawerOverlay`, `#navToggle`; `add/remove .no-scroll` no body | Drawer, overlay, body |
| `Navigation.handleSmoothScroll()` | Click em `.nav-link` ou `.drawer-link` | Scroll suave até seção alvo | — | `window.scrollTo({ top: target.offsetTop - headerHeight, behavior: 'smooth' })` |
| `Navigation.handleActiveLink()` | Scroll com RAF | Destaca nav-link da seção visível | `add/remove .active` em `.nav-link` | Nav links |
| `FAQAccordion.init()` | Click `.faq-question` | Accordion: fecha todos, abre clicado (ou fecha se já ativo) | `add/remove .active` em `.faq-item`; `aria-expanded` true/false | FAQ items |
| `ScrollReveal.init()` | IntersectionObserver (threshold 0.05, rootMargin 100px) | Adiciona `.active` aos elementos revelados | `add .reveal`, `add .active`; inline `--reveal-delay` | `.service-card`, `.diff-card`, `.pain-item`, `.solution-feature` |
| `AnimatedCounter.animateCounter()` | IntersectionObserver (threshold 0.5) | Anima número de 0 até valor final | — | `.trust-number`, `.exp-number`, `.stat-number` |
| `ContactForm.formatPhone()` | Input `#telefone` | Máscara dinâmica `(XX) XXXXX-XXXX` | — | `#telefone` |
| `ContactForm.validateForm()` | Submit `#contactForm` | Valida required e email; mostra/limpa erros | `form-error` span criado/removido | Inputs do formulário |
| `ContactForm.handleSubmit()` | Submit válido | Simula envio (1.5s), mostra sucesso, redireciona WhatsApp | `disabled`, altera `innerHTML` e `style.background` | `.btn-submit` |
| `ParallaxEffect.init()` | Scroll (throttle 16ms) | Move `.hero-shape` e `.hero-bg-pattern` em Y negativo | `style.transform = translateY(${yPos}px)` | `.hero-shape`, `.hero-bg-pattern` |
| `LazyLoader.loadImage()` | IntersectionObserver | Troca `data-src` por `src` | `add .loaded` | Imagens com `data-src` |
| `initWaPremium()` | DOMContentLoaded + setTimeout 20s | Mostra balão WhatsApp após delay; simula digitação 2.5s | `add/remove .show` em `#wa-message-bubble`, `#wa-notification` | WhatsApp premium elements |
| `initAudioControl()` | DOMContentLoaded + primeiro click/scroll | Toca áudio locução + trilha (loop); toggle play/pause | `style.display` nos ícones; `aria-label` | `#audioControl` |
| Cookie Banner `acceptAll` | Click `#ck-accept-all` | Salva preferências no localStorage, dispara evento customizado | `add/remove .ck-banner--visible`, `.ck-modal--visible` | Cookie banner e modal |
| Cookie Banner `rejectAll` | Click `#ck-reject` | Salva apenas necessários | Mesmas classes | Mesmos elementos |
| Cookie Banner `saveCustom` | Click `#ck-modal-save` | Lê toggles, salva customizado | Mesmas classes | Mesmos elementos |
| Tecla Escape | `keydown` | Fecha menu mobile ativo E FAQ abertos | `remove .active` | `.nav-menu`, `.faq-item` |

---

## 6. RESPONSIVIDADE

| Breakpoint (max-width) | Elemento | Propriedade | Valor padrão | Valor no breakpoint |
|---|---|---|---|---|
| `max-width: 480px` | `.wa-premium-container` | `bottom/right` | `40px` | `20px` |
| `max-width: 480px` | `.wa-bubble` | `width/bottom` | `300px / 85px` | `260px / 75px` |
| `max-width: 639px` | `.hero-trust` | `flex-wrap` | `nowrap` | `wrap` |
| `max-width: 639px` | `.trust-divider` | `display` | `block` | `none` |
| `max-width: 639px` | `.hero-floating-card` | `left/bottom` | `-20px / -20px` | `var(--space-4) / -40px` |
| `max-width: 639px` | `.about-experience` | `right/bottom/padding` | `-20px / -30px / var(--space-6)` | `var(--space-4) / -20px / var(--space-4)` |
| `max-width: 639px` | `.exp-number` | `font-size` | `var(--text-5xl)` (3rem) | `var(--text-3xl)` (1.875rem) |
| `max-width: 767px` | `.footer-grid` | `grid-template-columns` | `repeat(4,1fr)` (≥1024) | `1fr !important` |
| `max-width: 767px` | `.footer-logo, .footer-logo img` | `max-width/height` | `220px / 90px` | `180px / 75px` |
| `max-width: 767px` | `.footer-bottom` | `flex-direction/align-items` | `row / center` | `column / flex-start` |
| `max-width: 767px` | `.ck-banner__inner` | `flex-direction/padding` | `row / 10px 28px` | `column / 10px 16px` |
| `max-width: 767px` | `.ck-banner__actions` | `width/gap` | `auto / 6px` | `100% / 5px` |
| `max-width: 767px` | `.ck-modal` | `align-items/padding` | `center / 20px` | `flex-end / 0` |
| `max-width: 767px` | `.ck-modal__box` | `max-width/border-radius` | `520px / 12px` | `100% / 12px 12px 0 0` |
| `min-width: 640px` | `.container` | `padding` | `0 var(--space-6)` | `0 var(--space-8)` |
| `min-width: 640px` | `.services-grid` | `grid-template-columns` | `1fr` | `repeat(2, 1fr)` |
| `min-width: 640px` | `.diff-grid` | `grid-template-columns` | `1fr` | `repeat(2, 1fr)` |
| `min-width: 640px` | `.form-row` | `grid-template-columns` | `1fr` | `1fr 1fr` |
| `min-width: 640px` | `.areas-grid` | `grid-template-columns` | `repeat(2, 1fr)` | `repeat(3, 1fr)` |
| `min-width: 640px` | `.footer-grid` | `grid-template-columns` | `1fr` | `repeat(2, 1fr)` |
| `min-width: 640px` | `.footer-bottom` | `flex-direction/align-items` | `column / flex-start` | `row / center` |
| `min-width: 768px` | `.section-title` | `font-size` | `var(--text-3xl)` (1.875rem) | `var(--text-4xl)` (2.25rem) |
| `min-width: 768px` | `.hero-title` | `font-size` | `var(--text-4xl)` (2.25rem) | `var(--text-5xl)` (3rem) |
| `min-width: 768px` | `.solution-grid` | `grid-template-columns` | `1fr` | `2fr 1fr` |
| `min-width: 1024px` | `.container` | `padding` | `0 var(--space-8)` (640px+) | `0 var(--space-12)` |
| `min-width: 1024px` | `.hero` | `padding` | `calc(80px + var(--space-10)) 0 var(--space-10)` | `80px 0 0 0` |
| `min-width: 1024px` | `.hero-container` | `max-width/padding` | `1280px / 0 var(--space-6)` | `1400px / 0 var(--space-8)` |
| `min-width: 1024px` | `.hero-grid` | `grid-template-columns/gap` | `1fr / var(--space-12)` | `1.1fr 0.9fr / var(--space-8)` |
| `min-width: 1024px` | `.hero-content` | `text-align/align-items` | `center / center` | `left / flex-start` |
| `min-width: 1024px` | `.hero-cta` | `justify-content` | `center` | `flex-start` |
| `min-width: 1024px` | `.hero-trust` | `justify-content` | `center` | `flex-start` |
| `min-width: 1024px` | `.nav-toggle` | `display` | `flex` | `none` |
| `min-width: 1024px` | `.nav-menu` | `display` | `none` (mobile) | `flex` |
| `min-width: 1024px` | `.btn-nav` | `display` | `none` | `inline-flex` |
| `min-width: 1024px` | `.section-title` | `font-size` | `var(--text-4xl)` | `var(--text-5xl)` (3rem) |
| `min-width: 1024px` | `.hero-title` | `font-size` | `var(--text-5xl)` | `var(--text-6xl)` (3.75rem) |
| `min-width: 1024px` | `.pain-grid` | `grid-template-columns/align` | `1fr / stretch` | `1fr 1fr / center` |
| `min-width: 1024px` | `.about-grid` | `grid-template-columns` | `1fr` | `1fr 1fr` |
| `min-width: 1024px` | `.services-grid` | `grid-template-columns` | `repeat(2, 1fr)` | `repeat(3, 1fr)` |
| `min-width: 1024px` | `.diff-grid` | `grid-template-columns` | `repeat(2, 1fr)` | `repeat(4, 1fr)` |
| `min-width: 1024px` | `.faq-grid` | `grid-template-columns` | `1fr` | `1fr 2fr` |
| `min-width: 1024px` | `.faq-header` | `position/top/align-self` | `static / auto / auto` | `sticky / 100px / start` |
| `min-width: 1024px` | `.cta-grid` | `grid-template-columns/align` | `1fr / stretch` | `1fr 1fr / center` |
| `min-width: 1024px` | `.location-grid` | `grid-template-columns/align` | `1fr / stretch` | `1fr 1fr / center` |
| `min-width: 1024px` | `.footer-grid` | `grid-template-columns` | `repeat(2, 1fr)` | `repeat(4, 1fr)` |

---

## 7. PERFORMANCE & SEO TÉCNICO

| Técnica | Elemento/Recurso | Detalhe |
|---|---|---|
| `rel="preload"` | `images/hero-cuidado.webp` | `<link rel="preload" href="images/hero-cuidado.webp" as="image" type="image/webp" fetchpriority="high">` — LCP optimization |
| `rel="preload"` | Google Fonts CSS | `<link rel="preload" href="https://fonts.googleapis.com/css2?family=Outfit..." as="style" onload="this.onload=null;this.rel='stylesheet'">` — Elimina render-blocking |
| Inline critical CSS | `<style>` no `<head>` | Fallback de fonte para LCP (`font-family: Georgia, 'Times New Roman', serif`) + animações `.reveal` base |
| `fetchpriority="high"` | `.hero-image` | Atributo na tag `<img>` |
| `loading="lazy"` | Todas as imagens não-hero | `dor-solucao.webp`, `sobre-equipe.webp`, todos os `servico-*.webp`, Google logo embed |
| `img[width][height]` | CSS rule | `aspect-ratio: attr(width) / attr(height);` — Previne CLS |
| Schema.org `@type: MedicalBusiness` | JSON-LD no `<head>` | `@id`: `https://homecarebluecare.com.br/#negocio` — campos completos: name, alternateName, description, url, logo, image[], telephone, email, priceRange, currenciesAccepted, address, geo, openingHoursSpecification, areaServed, hasOfferCatalog, aggregateRating, sameAs |
| Schema.org `@type: WebSite` | JSON-LD | publisher vinculado ao MedicalBusiness |
| Schema.org `@type: WebPage` | JSON-LD | datePublished: 2024-01-01, dateModified: 2026-04-29 |
| Schema.org `@type: FAQPage` | JSON-LD | 8 question/answer pairs completas |
| Preconnect | `fonts.googleapis.com`, `fonts.gstatic.com` | `<link rel="preconnect">` e `crossorigin` |
| Meta Geo Tags | `<head>` | `geo.region: BR-RJ`, `geo.placename: Rio de Janeiro`, `geo.position`, `ICBM` |
| OG Tags | Open Graph | title, description, url, image (1200×630), type |
| Twitter Cards | `<meta name="twitter:*">` | card: summary_large_image |
| Canonical | `<link rel="canonical">` | `https://homecarebluecare.com.br` |
| `prefers-reduced-motion` | `@media` query | Desativa todas as animações e transições (`animation-duration: 0.01ms !important; transition-duration: 0.01ms !important`) |
| Passive listeners | JS | `{ passive: true }` nos event listeners de scroll |
| RequestAnimationFrame | JS | Throttling de scroll em `handleScroll` e `handleActiveLink` |
| Lazy loading JS | `IntersectionObserver` | Carregamento de imagens `data-src` |
| Async CSS load | `cookie-banner.css` | `<link rel="preload" href="cookie-banner.css" as="style" onload="this.onload=null;this.rel='stylesheet'">` |

---

## 8. ANTI-PADRÕES REGISTRADOS

❌ **HERO GENÉRICO COM FUNDO SOLIDO** → Genérico seria: fundo branco ou cinza uniforme com texto centralizado e uma imagem genérica de stock ao lado → Aqui foi feito: gradiente de 3 tons (`gray-50 → white → primary-light`) + padrão de radial-gradients decorativos + shape circular rotacionado em `-3deg` atrás da imagem + card flutuante com animação `float` saindo da borda inferior esquerda da imagem → Prova técnica: `.hero { background: linear-gradient(135deg, var(--color-gray-50) 0%, var(--color-white) 50%, var(--color-primary-light) 100%) }` + `.hero-shape { right: -10%; top: 20%; width: 600px; height: 600px; border-radius: 50%; opacity: 0.03; transform: rotate(-3deg) }`

❌ **MARQUEE COM JAVASCRIPT** → Genérico seria: plugin jQuery ou biblioteca de carrossel para criar scroll infinito → Aqui foi feito: duplicação pura do HTML (6 itens + 6 duplicatas) dentro de um `inline-flex` com `white-space: nowrap` e `animation: scrollTrustBar 25s linear infinite` + `translateX(-50%)` → Prova técnica: `.trust-marquee-content { display: inline-flex; flex-wrap: nowrap; white-space: nowrap; gap: var(--space-12); animation: scrollTrustBar 25s linear infinite !important; }` + `@keyframes scrollTrustBar { 100% { transform: translateX(-50%); } }`

❌ **FAQ COM JAVASCRIPT DE ALTURA** → Genérico seria: calcular height via JS e animar com jQuery ou requestAnimationFrame → Aqui foi feito: `max-height: 0` → `max-height: 500px` com `transition: max-height 350ms ease, padding 350ms ease` controlado apenas pela classe `.active` → Prova técnica: `.faq-answer { max-height: 0; overflow: hidden; transition: max-height var(--transition-slow), padding var(--transition-slow); }` + `.faq-item.active .faq-answer { max-height: 500px; padding: 0 var(--space-6) var(--space-6); }`

❌ **HEADER FULL-WIDTH STICKY** → Genérico seria: `position: fixed; width: 100%; top: 0; left: 0` com sombra sutil → Aqui foi feito: header "floating pill" com `width: calc(100% - var(--space-8)); max-width: 1200px; left: 50%; transform: translateX(-50%); top: var(--space-4); border-radius: var(--radius-xl); backdrop-filter: blur(16px)` — some ao descer (`header-hidden`) e reaparece ao subir → Prova técnica: `.header { position: fixed; top: var(--space-4); left: 50%; transform: translateX(-50%); width: calc(100% - var(--space-8)); max-width: 1200px; border-radius: var(--radius-xl); }` + `.header.header-hidden { transform: translate(-50%, -150%); opacity: 0; }`

❌ **NAV-LINK UNDERLINE PADRÃO** → Genérico seria: `text-decoration: underline` ou `border-bottom` estático → Aqui foi feito: pseudo-elemento `::after` com `width: 0` que expande para `width: 100%` no hover, com cor dourada (`--color-accent`) em vez da cor primária, e também ativa no estado `.active` → Prova técnica: `.nav-link::after { content: ''; position: absolute; bottom: 0; left: 0; width: 0; height: 2px; background: var(--color-accent); transition: width var(--transition-base); }` + `.nav-link:hover::after { width: 100%; }`

❌ **BALÃO WHATSAPP POPUP AGRESSIVO** → Genérico seria: modal ou alert() impedindo navegação → Aqui foi feito: balão glassmorphism (`backdrop-filter: blur(15px)`) com cantos assimétricos (`border-radius: 24px 24px 4px 24px`) que aparece após 20s de forma não-intrusiva, com animação de digitação (3 bolinhas pulsand0) antes de mostrar a mensagem real, e pode ser fechado sem penalidade → Prova técnica: `.wa-bubble { background: rgba(255, 255, 255, 0.92); backdrop-filter: blur(15px); border-radius: 24px 24px 4px 24px; opacity: 0; visibility: hidden; transform: translateY(20px) scale(0.95); transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1); }` + `setTimeout(() => bubble.classList.add('show'), 20000);`

❌ **TRILHA SONORA AUTOPLAY INTRUSIVA** → Genérico seria: `<audio autoplay>` que toca imediatamente e assusta o usuário → Aqui foi feito: áudio com dois canais (locução + trilha ambiente a 12% de volume) que só inicia após primeiro sinal de interação do usuário (click ou scroll), com botão flutuante de controle visual (ícone de ondas animadas vs. mudo) no canto inferior esquerdo → Prova técnica: `document.addEventListener('click', startAudio); document.addEventListener('scroll', startAudio);` + `audioFundo.volume = 0.12;` + `#audioControl { position: fixed; bottom: var(--space-6); left: var(--space-6); }`

❌ **CARROSSEL DE DEPOIMENTOS COM SWIPER/SLICK** → Genérico seria: importar biblioteca de 30KB+ para swipe e dots → Aqui foi feito: replicação exata da técnica CSS do marquee (duplicação de 9 cards + `animation: scrollTestimonials 40s linear infinite`) com fade de 80px nas bordas via `::before/::after` e pausa no hover (`animation-play-state: paused`) → Prova técnica: `.testimonials-carousel { display: inline-flex; flex-wrap: nowrap; white-space: nowrap; gap: var(--space-6); animation: scrollTestimonials 40s linear infinite; }` + `.testimonials-carousel-wrapper::before { left: 0; background: linear-gradient(to right, var(--color-white), transparent); width: 80px; }`

❌ **OVERLAY DE COOKIE COM FUNDO BRANCO E BOTÃO GIGANTE** → Genérico seria: banner branco ou azul genérico ocupando 30% da tela com "Aceitar" verde → Aqui foi feito: banner na identidade visual da marca (`background: #0C1145`; `border-top: 1px solid rgba(194,155,98,0.12)`), com 3 níveis de ação (Personalizar / Rejeitar / Aceitar), modal de granularidade completa com toggles estilo iOS, e integração de um micro-toggle no rodapé em vez de botão flutuante → Prova técnica: `.ck-banner { background: var(--ck-bg); /* #0C1145 */ border-top: 1px solid rgba(var(--ck-accent-rgb), 0.12); }` + `#ck-prefs-link` com toggle visual inline no footer

---

*Documento gerado por engenharia reversa completa dos arquivos: index.html, style.css, script.js, cookie-banner.css, cookie-banner.js — Blue Care Home Care, Rio de Janeiro.*
