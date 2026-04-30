# SITE DNA — Blue Care Home Care

**Nicho:** Home Care Especializado / Cuidadores de Idosos — Rio de Janeiro
**Posicionamento:** Empresa premium de home care que elimina a ansiedade das famílias ao substituir cuidadores autônomos por equipe certificada com supervisão médica 24/7, respaldo trabalhista integral e comunicação diária pelo WhatsApp
**Data de criação:** 20/03/2026

---

## IDENTIDADE VISUAL

### Paleta de Cores

| Variável CSS | Hex | Função Específica no Layout |
|---|---|---|
| `--color-primary` | `#223289` | Azul institucional — botões primários, nav links ativos, border-left de dor-items, gradient de fundo da Trust Bar e CTA section |
| `--color-primary-dark` | `#0C1145` | Azul profundo — extremidade dos gradients em botões e seções de fundo, overlay da pain-overlay |
| `--color-primary-light` | `#B7E1F6` | Azul claro gelado — ícones SVG na Trust Bar, badge do divider "A solução", section-tag na CTA (fundo escuro), bg dos diff-icons em estado default |
| `--color-accent` | `#3B5BDB` | Azul brilhante — extremidade do gradient no hero-title `.highlight` e service-badge |
| `--color-white` | `#FFFFFF` | Fundo base, cards brancos, formulário, textos sobre fundo escuro |
| `--color-gray-50` | `#F8FAFC` | Fundo da seção Sobre, background de pain-items, solution-features, testimonial-cards (default), google-badge |
| `--color-gray-100` | `#F1F5F9` | Border de separação do header, border dos service-cards e faq-items |
| `--color-gray-200` | `#E2E8F0` | Border dos inputs em estado default, trust-dividers no hero |
| `--color-gray-400` | `#94A3B8` | Placeholders de inputs, footer texto secundário |
| `--color-gray-500` | `#64748B` | Section-subtitle, pain-text parágrafo, testimonial-info span, rating-text, form-privacy |
| `--color-gray-600` | `#475569` | Nav-links (default), hero-subtitle, about-text, faq-answer p |
| `--color-gray-700` | `#334155` | Cor base do body, form-group label |
| `--color-gray-800` | `#1E293B` | Hamburger spans |
| `--color-gray-900` | `#0F172A` | Footer background, section-title, pain-text h4, service-content h3, testimonial-info h4 |
| `--color-success` | `#10B981` | Badge-icon do hero (checkmark verde), floating-icon gradient, feature-check circles, cta-benefit SVGs |
| `--color-warning` | `#F59E0B` | Reservado (não aparece no layout visível) |
| `--color-error` | `#EF4444` | Border-left dos pain-items, pain-icon background e cor SVG |
| `--color-whatsapp` | `#25D366` | Botão WhatsApp flutuante e btn-whatsapp |
| `#FBBF24` | `#FBBF24` | Estrelas de rating (testimonials e rating-summary) — hardcoded, fora das variáveis |
| `#128C7E` | `#128C7E` | WhatsApp hover — verde escuro official |

### Tipografia

| Elemento | Família | Peso | Tamanho Exato | Observações |
|---|---|---|---|---|
| H1 `.hero-title` | Playfair Display | 600 | `3.75rem` (desktop) / `3rem` (768px) / `2.25rem` (mobile) | `line-height: 1.1` — muito compacto |
| `.hero-title .highlight` | Playfair Display | 600 | Herda do H1 | `display: block; background-clip: text; -webkit-text-fill-color: transparent; background: linear-gradient(135deg, #223289 → #3B5BDB)` |
| H2 `.section-title` | Playfair Display | 600 | `3rem` (desktop ≥1024px) / `2.25rem` (768px) / `1.875rem` (mobile) | `line-height: 1.2; color: --color-gray-900` |
| H3 `.solution-card h3` | Playfair Display | herdado | `1.5rem` (--text-2xl) | Apenas dentro de solution-card e service-content |
| H3 `.service-content h3` | Playfair Display | 600 | `1.25rem` (--text-xl) | |
| H4 `.diff-card h4` | Outfit | 600 | `1.125rem` (--text-lg) | Seção diferenciais — sans-serif |
| H4 `.testimonial-info h4` | Outfit | 600 | `1rem` (--text-base) | |
| `.section-tag` | Outfit | 600 | `0.875rem` (--text-sm) | `text-transform: uppercase; letter-spacing: 0.1em; color: --color-primary; padding-left: 1.5rem; ::before: linha 16×2px em gradient` |
| `.section-subtitle` | Outfit | 400 | `1.125rem` (--text-lg) | `color: --color-gray-500; max-width: 600px` |
| `.hero-subtitle` | Outfit | 400 | `1.125rem` (--text-lg) | `color: --color-gray-600; max-width: 500px` |
| `.trust-number` | Playfair Display | 700 | `1.875rem` (--text-3xl) | `color: --color-primary; line-height: 1` |
| `.trust-label` | Outfit | 400 | `0.75rem` (--text-xs) | `text-transform: uppercase; letter-spacing: 0.05em; color: --color-gray-500` |
| `.hero-badge` | Outfit | 600 | `0.75rem` (--text-xs) | `color: --color-primary` |
| `.exp-number` | Playfair Display | 700 | `3rem` (--text-5xl) | Floating card "Sobre" |
| `.stat-number` | Playfair Display | 700 | `2.25rem` (--text-4xl) | Pain overlay — `color: --color-primary-light` |
| `.rating-score` | Playfair Display | 700 | `1.5rem` (--text-2xl) | |
| Body geral | Outfit | 400 | `1rem` (--text-base) | `line-height: 1.6; color: --color-gray-700` |
| `.btn` | Outfit | 600 | `0.875rem` (--text-sm) | `.btn-large { font-size: 1rem }` |
| `.nav-link` | Outfit | 500 | `0.875rem` (--text-sm) | |
| `.faq-question` | Outfit | 600 | `1rem` (--text-base) | |
| `.testimonial-text` | Outfit | 400 | `1rem` (--text-base) | `font-style: italic; line-height: 1.7` |
| `.about-text` | Outfit | 400 | `1.125rem` (--text-lg) | `line-height: 1.8` |

**Google Fonts carregados:** `Outfit:wght@300;400;500;600;700` + `Playfair Display:wght@400;500;600;700`

### Estilo Geral

Design system SaaS-Health Premium com arquitetura de cartões brancos sobre fundos gradiente — cada seção alterna entre `white`, `gray-50` e gradients de `gray-50→white` para criar profundidade sem cor agressiva; Playfair Display como display font injeta autoridade serifa em títulos emocionais enquanto Outfit garante legibilidade técnica no corpo; a linguagem visual é deliberadamente corporativa-acolhedora, com bordas arredondadas grandes (`--radius-2xl: 1.5rem`), sombras progressivas (sm→2xl) que comunicam hierarquia de profundidade, e gradient azul profundo usado exclusivamente em elementos de máxima urgência (Trust Bar, CTA section, floating cards); o único acento de cor quente é o verde `#25D366` do WhatsApp e `#10B981` do success, estrategicamente posicionados para guiar o olho aos pontos de conversão.

---

## LAYOUT — SEÇÃO POR SEÇÃO

---

### SEÇÃO 1 — Header Fixo com Glassmorphism

**Estrutura:** `position: fixed; top: 0; left: 0; right: 0; z-index: 300` — `.nav` é `display: flex; align-items: center; justify-content: space-between; height: 72px` — container `max-width: 1280px; padding: 0 1.5rem` (mobile) → `0 2rem` (640px) → `0 3rem` (1024px)

**Fundo:** `background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(10px); border-bottom: 1px solid #F1F5F9; transition: all 250ms ease` — `.header.scrolled` adiciona `box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`

**Elementos Restritos:**

| Elemento | Classe | Posição | Especificação |
|---|---|---|---|
| Logo | `.logo img` | Extrema esquerda | `height: 40px; width: auto` |
| Nav links | `.nav-menu` | Centro (desktop) | `display: flex; gap: 2rem; display: none` abaixo de 1024px |
| CTA nav | `.btn-nav` | Extrema direita | `display: none` abaixo de 1024px; `.btn-primary` com SVG WhatsApp |
| Hamburger | `.nav-toggle` | Extrema direita (mobile) | `display: none` acima de 1024px — 3 `.hamburger` spans de `24×2px` |

**Animação:** Menu mobile: `animation: slideIn 0.3s ease` (`opacity: 0, translateY(-10px)` → `opacity: 1, translateY(0)`) — cobre tela inteira (`position: fixed; top: 72px; left: 0; right: 0; bottom: 0; background: white; padding: 2rem`)

**Micro-interações:**
```css
.nav-link::after {
  content: ''; position: absolute; bottom: 0; left: 0;
  width: 0; height: 2px; background: #223289;
  transition: width 250ms ease;
}
.nav-link:hover { color: #223289; }
.nav-link:hover::after { width: 100%; }

/* Hamburger → X */
.nav-toggle.active .hamburger:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.nav-toggle.active .hamburger:nth-child(2) { opacity: 0; }
.nav-toggle.active .hamburger:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
```

**Diferenciador Visual:** `backdrop-filter: blur(10px)` com `rgba(255,255,255,0.95)` — header translúcido que revela conteúdo por baixo sem perder legibilidade; linha de separação de 1px `gray-100` em vez de sombra (sombra só aparece ao scrollar)

---

### SEÇÃO 2 — Hero 50/50 com Floating Card

**Estrutura:** `.hero` — `min-height: 100vh; display: flex; align-items: center; padding: calc(72px + 4rem) 0 4rem; overflow: hidden` — `.hero-grid` é `display: grid; gap: 3rem` mobile → `grid-template-columns: 1fr 1fr; gap: 4rem` em ≥1024px

**Fundo:**
```css
background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 50%, #B7E1F6 100%);
/* + 2 pseudo-layers via .hero-bg-pattern (position: absolute; inset: 0; pointer-events: none): */
radial-gradient(circle at 20% 80%, #B7E1F6 0%, transparent 50%),
radial-gradient(circle at 80% 20%, rgba(34,50,137,0.05) 0%, transparent 40%)
/* + .hero-shape: círculo 600×600px, right: -10%; top: 20%; gradient azul; opacity: 0.03 */
```

**Elementos Restritos:**

| Elemento | Classe | Posição | Especificação CSS |
|---|---|---|---|
| Badge de credibilidade | `.hero-badge` | Topo da coluna esquerda | `display: inline-flex; gap: 0.5rem; background: white; padding: 0.5rem 1rem; border-radius: 9999px; font-size: 0.75rem; font-weight: 600; color: #223289; box-shadow: shadow-sm` — `.badge-icon: 18×18px círculo #10B981 com "✓" branco 10px` |
| H1 | `.hero-title` | Abaixo do badge | Playfair Display 600, `line-height: 1.1` — segunda linha em `.highlight` com gradient clip |
| Subtítulo | `.hero-subtitle` | Abaixo do H1 | `max-width: 500px; color: #475569; font-size: 1.125rem` |
| CTAs | `.hero-cta` | Abaixo do subtítulo | `display: flex; flex-wrap: wrap; gap: 1rem; margin-bottom: 3rem` — btn-primary + btn-outline lado a lado |
| Trust counters | `.hero-trust` | Rodapé da coluna esquerda | `display: flex; align-items: center; gap: 1.5rem` — 3 counters animados separados por `.trust-divider` (1×40px, `background: #E2E8F0`) |
| Imagem hero | `.hero-image` | Coluna direita, relativo ao wrapper | `border-radius: 1.5rem; box-shadow: shadow-2xl (0 25px 50px -12px rgba(0,0,0,0.25)); aspect-ratio: 4/3; object-fit: cover` |
| Shape decorativo | `.hero-image-shape` | `position: absolute; inset: -20px` atrás da imagem | `background: linear-gradient(135deg, #223289 → #0C1145); border-radius: 1.5rem; transform: rotate(-3deg); opacity: 0.1` |
| Floating card | `.hero-floating-card` | `position: absolute; bottom: -20px; left: -20px` | `background: white; padding: 1rem 1.5rem; border-radius: 1rem; box-shadow: shadow-xl; display: flex; align-items: center; gap: 1rem` |
| Floating icon | `.floating-icon` | Dentro do floating card | `48×48px; background: linear-gradient(135deg, #10B981 → #059669); color: white; border-radius: 0.75rem` |

**Animação:** Entrada em cascata com delays `both` (fill-mode):
```css
.hero-badge    { animation: fadeInUp 0.6s ease 0.2s both; }
.hero-title    { animation: fadeInUp 0.6s ease 0.3s both; }
.hero-subtitle { animation: fadeInUp 0.6s ease 0.4s both; }
.hero-cta      { animation: fadeInUp 0.6s ease 0.5s both; }
.hero-trust    { animation: fadeInUp 0.6s ease 0.6s both; }
.hero-visual   { animation: fadeIn 0.8s ease 0.4s both; }
.hero-floating-card { animation: float 3s ease-in-out infinite; }
/* float: 0%/100% translateY(0) → 50% translateY(-10px) */
```
Counters numéricos (`.trust-number`): JS `AnimatedCounter` — 60 steps em 2000ms, parsing de "+" e "%" no sufixo

**Micro-interações:**
```css
.btn:hover svg { transform: translateX(3px); /* seta desliza 3px para direita */ }
.hero-image-wrapper:hover .hero-image-shape { transform: rotate(-3deg) scale(1.02); /* implícito */ }
```

**Diferenciador Visual:** `.hero-image-shape` rotacionado -3deg cria "sombra editorial" fora do eixo por baixo da foto; floating card posicionado em `bottom: -20px; left: -20px` com `animation: float` cria sensação de produto ativo/vivo sem vídeo

---

### SEÇÃO 3 — Trust Bar (Marquee Infinito)

**Estrutura:** `overflow: hidden` — `.trust-marquee-content` é `display: inline-flex; flex-wrap: nowrap; white-space: nowrap; gap: 3rem` com conteúdo duplicado para loop perfeito

**Fundo:** `background: linear-gradient(135deg, #223289 0%, #0C1145 100%); padding: 1.5rem 0; border-top: 1px solid rgba(255,255,255,0.1); border-bottom: 1px solid rgba(255,255,255,0.1)`

**Elementos Restritos:** `.trust-marquee` com `mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent)` — fade nas bordas esquerda e direita. 6 `.marquee-item` duplicados (12 total) com SVG icon (20×20px, `color: #B7E1F6`, `filter: drop-shadow(0 0 8px rgba(183,225,246,0.3))`) + texto branco

**Animação:**
```css
@keyframes scrollTrustBar {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); } /* -50% porque o conteúdo é duplicado */
}
.trust-marquee-content {
  animation: scrollTrustBar 25s linear infinite !important;
  animation-play-state: running !important;
}
```

**Micro-interações:**
```css
.marquee-item:hover {
  opacity: 1; /* default: 0.9 */
  transform: scale(1.05);
  transition: opacity 0.3s ease, transform 0.3s ease;
}
```

**Diferenciador Visual:** `mask-image` para fade nas bordas cria a ilusão de scroll infinito sem corte abrupto — não é apenas um marquee, é uma vitrine de credenciais em loop; ícones SVG com `drop-shadow` em azul claro criam profundidade sobre o fundo escuro

---

### SEÇÃO 4 — Dor e Solução

**Estrutura:** `padding: 6rem 0; background: white` — `.pain-grid`: `display: grid; gap: 3rem` mobile → `grid-template-columns: 1fr 1fr; align-items: center` em ≥1024px — `.solution-grid`: `display: grid; gap: 2rem` mobile → `grid-template-columns: 2fr 1fr` em ≥768px

**Fundo:** Seção branca com `background: white`

**Elementos Restritos:**

**Bloco Esquerdo — Visual com Overlay:**
- `.pain-image`: `width: 100%; border-radius: 1.5rem; box-shadow: shadow-xl`
- `.pain-overlay` (absoluto sobre imagem): `position: absolute; bottom: 1.5rem; left: 1.5rem; right: 1.5rem; background: rgba(12,17,69,0.9); backdrop-filter: blur(10px); padding: 1.5rem; border-radius: 1rem; color: white`
- `.stat-number` dentro do overlay: Playfair Display 700, `2.25rem`, `color: #B7E1F6` — "67%"
- `.stat-label` ao lado: `font-size: 0.875rem; opacity: 0.9`

**Bloco Direito — Lista de Dores:**
- 4 `.pain-item` em `display: flex; flex-direction: column; gap: 1.5rem`
- Cada item: `display: flex; gap: 1rem; padding: 1.5rem; background: #F8FAFC; border-radius: 1rem; border-left: 4px solid #EF4444; transition: all 250ms ease`
- `.pain-icon`: `40×40px; background: rgba(239,68,68,0.1); color: #EF4444; border-radius: 0.75rem; display: flex; align-items: center; justify-content: center` — SVG exclamation circle 24×24px
- `.pain-text h4`: Outfit 600, `1.125rem`, `color: #0F172A`
- `.pain-text p`: Outfit 400, `0.875rem`, `color: #64748B`

**Divider "A Solução":**
- `.solution-divider`: `display: flex; align-items: center; justify-content: center; gap: 1rem; margin: 4rem 0`
- `.divider-line`: `flex: 1; height: 1px; background: linear-gradient(90deg, transparent, #CBD5E1, transparent)`
- `.divider-text`: `font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em; color: #223289; padding: 0.5rem 1rem; background: #B7E1F6; border-radius: 9999px`

**Card Principal Solution (2/3 da largura):**
- `background: linear-gradient(135deg, #223289 → #0C1145); padding: 2.5rem; border-radius: 1.5rem; color: white`
- `.solution-icon`: `64×64px; background: rgba(255,255,255,0.1); border-radius: 1rem; margin-bottom: 1.5rem` — SVG escudo 48×48px stroke-width 1.5
- H3: Playfair Display, `1.5rem`
- Parágrafo: `opacity: 0.9; line-height: 1.7; margin-bottom: 2rem`
- Botão interno: `background: white; color: #223289` — hover: `background: #B7E1F6`

**Lista de Features (1/3 da largura):**
- 4 `.solution-feature`: `display: flex; align-items: center; gap: 0.75rem; padding: 1rem; background: #F8FAFC; border-radius: 0.75rem; font-size: 0.875rem; font-weight: 500; color: #334155`
- `.feature-check`: `24×24px; background: #10B981; color: white; border-radius: 50%; font-size: 12px` — "✓"

**Animação:** `.reveal` via JS IntersectionObserver — `opacity: 0; transform: translateY(30px)` → `.reveal.active { opacity: 1; transform: translateY(0); transition: all 0.6s ease }`

**Micro-interações:**
```css
.pain-item:hover {
  transform: translateX(5px);
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
}
```

**Diferenciador Visual:** O divider "A solução" em badge pill azul claro (`#B7E1F6`) com linha gradient nas laterais é um dispositivo visual raro — funciona como "respiro dramático" entre problema e solução; a stat de "67%" no overlay glassmorphism sobre a foto ancora emocionalmente o dado de pesquisa

---

### SEÇÃO 5 — Sobre (About)

**Estrutura:** `padding: 6rem 0; background: #F8FAFC` — `.about-grid`: `display: grid; gap: 3rem` → `grid-template-columns: 1fr 1fr; align-items: center` em ≥1024px

**Fundo:** `background: #F8FAFC`

**Elementos Restritos:**

**Coluna Esquerda — Visual:**
- `.about-image-main img`: `width: 100%; border-radius: 1.5rem; box-shadow: shadow-xl`
- `.about-experience` (absoluto): `position: absolute; bottom: -30px; right: -20px; background: linear-gradient(135deg, #223289 → #0C1145); color: white; padding: 1.5rem; border-radius: 1rem; display: flex; flex-direction: column; align-items: center; box-shadow: shadow-xl; animation: float 4s ease-in-out infinite`
  - `.exp-number`: Playfair Display 700, `3rem`, `line-height: 1` — "+8"
  - `.exp-text`: `0.875rem; text-align: center; opacity: 0.9` — "anos cuidando"

**Coluna Direita — Conteúdo:**
- `section-tag` + H2 + 2 parágrafos `.about-text` (1.125rem, line-height 1.8, color #475569)
- `.value-item`: `display: inline-flex; align-items: center; gap: 1rem; background: white; padding: 1rem 1.5rem; border-radius: 1rem; box-shadow: shadow-md` — emoji 🏠 (1.5rem) + texto "Cuidado. Família. Amor." em Playfair Display 600, 1.125rem, `color: #223289`
- `.areas-tags`: `display: flex; flex-wrap: wrap; gap: 0.5rem` — 9 `.area-tag` pills

**Micro-interações:**
```css
.area-tag {
  padding: 0.5rem 1rem; background: white; border: 1px solid #E2E8F0;
  border-radius: 9999px; font-size: 0.875rem; color: #475569;
  transition: all 150ms ease;
}
.area-tag:hover {
  background: #223289; color: white; border-color: #223289;
}
```

**Diferenciador Visual:** O floating badge "+8 anos cuidando" posicionado em `bottom: -30px; right: -20px` cria overlap intencional com o conteúdo abaixo — animado com `float` em 4s (mais lento que o hero's 3s) para variedade de ritmo; o `value-item` card embutido no meio do texto é uma quebra de padrão no fluxo de leitura

---

### SEÇÃO 6 — Serviços (Cards com Grid Assimétrico)

**Estrutura:** `padding: 6rem 0; background: white` — `.services-grid`: `display: grid; gap: 1.5rem` → `repeat(2, 1fr)` em ≥640px → `repeat(3, 1fr)` em ≥1024px

**Fundo:** `background: white`

**Service Cards (base):**
```css
.service-card {
  background: white; border-radius: 1.5rem; overflow: hidden;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  border: 1px solid #F1F5F9;
  transition: all 250ms ease;
}
.service-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
```

**Imagem do card:**
```css
.service-image { height: 200px; overflow: hidden; }
.service-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 350ms ease; }
.service-card:hover .service-image img { transform: scale(1.05); }
```

**Card Destaque (`.service-featured`):**
- Mobile: `grid-column: span 1`
- 640px: `grid-column: span 2`
- 1024px: `grid-column: span 1; grid-row: span 2; .service-image { height: 280px }` — ocupa 2 rows verticalmente à esquerda

**Service badge (apenas no card destaque):**
```css
.service-badge {
  display: inline-block;
  background: linear-gradient(135deg, #223289 0%, #3B5BDB 100%);
  color: white; font-size: 0.75rem; font-weight: 600;
  padding: 0.25rem 0.75rem; border-radius: 9999px;
  margin-bottom: 0.75rem;
}
```

**Service link (cada card):**
```css
.service-link {
  display: inline-flex; align-items: center; gap: 0.5rem;
  font-size: 0.875rem; font-weight: 600; color: #223289;
  transition: gap 150ms ease; /* gap aumenta no hover */
}
.service-link:hover { gap: 0.75rem; /* seta se afasta do texto */ }
```

**6 serviços:** Cuidado 24h (destaque), Plantões Noturnos, Pós-Cirúrgico, Especialização Alzheimer, Cuidados Paliativos, Acompanhamento Hospitalar

**Diferenciador Visual:** Hover de `translateY(-8px)` é o maior lift do site (outros usam -5px) — comunica que cards de serviço têm mais "peso" que cards informativos; a transição do `gap` no service-link (seta que se afasta) é um micro-detalhe de motion design incomum; o card destaque em `grid-row: span 2` cria assimetria intencional no grid

---

### SEÇÃO 7 — Diferenciais (Grid 4 colunas)

**Estrutura:** `padding: 6rem 0; background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)` — `.diff-grid`: `display: grid; gap: 1.5rem` → `repeat(2, 1fr)` em ≥640px → `repeat(4, 1fr)` em ≥1024px

**8 Diff Cards:**
```css
.diff-card {
  background: white; padding: 2rem; border-radius: 1.5rem;
  box-shadow: shadow-md; border: 1px solid #F1F5F9;
  text-align: center; transition: all 250ms ease;
}
.diff-card:hover {
  transform: translateY(-5px);
  box-shadow: shadow-xl;
  border-color: #B7E1F6;
}
```

**Ícone (estado default vs hover):**
```css
.diff-icon {
  width: 64px; height: 64px;
  background: linear-gradient(135deg, #B7E1F6 0%, rgba(183,225,246,0.3) 100%);
  color: #223289; border-radius: 1rem;
  margin: 0 auto 1.5rem;
  transition: all 250ms ease;
}
.diff-card:hover .diff-icon {
  background: linear-gradient(135deg, #223289 0%, #0C1145 100%);
  color: white;
  transform: scale(1.1);
}
```

**8 diferenciais:** Supervisão 24/7, Conformidade ANVISA, Responsabilidade Integral, Gestão Medicamentosa, Certificação Técnica, Substituição em 3h, Relatórios Diários, Prevenção de Quedas

**Diferenciador Visual:** O ícone que muda de `azul-claro + ícone azul` para `azul-escuro + ícone branco + scale(1.1)` no hover é uma inversão de polaridade visual — de "informativo" para "ativo" — raramente implementado com esse nível de detalhe em grids de 8 cards

---

### SEÇÃO 8 — Depoimentos

**Estrutura:** `padding: 6rem 0; background: white` — `.testimonials-grid`: `display: grid; gap: 1.5rem` → `repeat(2, 1fr)` em ≥768px → `repeat(3, 1fr)` em ≥1024px

**Header da seção:**
- `.section-header.center` com `.rating-summary` abaixo do título:
- `.rating-stars`: `color: #FBBF24; font-size: 1.25rem; letter-spacing: 2px` — "★★★★★"
- `.rating-score`: Playfair Display 700, `1.5rem` — "4.9"
- `.rating-text`: `0.875rem; color: #64748B`

**Testimonial Cards:**
```css
.testimonial-card {
  background: #F8FAFC; padding: 2rem;
  border-radius: 1.5rem; transition: all 250ms ease;
}
.testimonial-card:hover {
  background: white;
  box-shadow: shadow-xl; /* 0 20px 25px -5px rgb(0 0 0 / 0.1) */
  transform: translateY(-5px);
}
```

**Avatar:**
```css
.testimonial-avatar {
  width: 56px; height: 56px; border-radius: 50%;
  object-fit: cover; border: 3px solid white; box-shadow: shadow-md;
}
```

**Google Badge (pós-grid):**
- `display: flex; align-items: center; justify-content: center; gap: 0.75rem; margin-top: 3rem; padding: 1rem; background: #F8FAFC; border-radius: 1rem`
- Logo Google `height: 20px` + texto "Avaliações verificadas de clientes reais"

**Diferenciador Visual:** Cards que começam em `#F8FAFC` e ficam brancos no hover — a mudança de tom ao invés de só sombra cria uma transição de "background state"; o Google Badge integrado ao fluxo da seção (não flutuante) ancora a credibilidade de forma orgânica

---

### SEÇÃO 9 — FAQ com Sidebar Sticky

**Estrutura:** `padding: 6rem 0; background: linear-gradient(135deg, #F8FAFC 0%, #FFFFFF 100%)` — `.faq-grid`: `display: grid; gap: 3rem` → `grid-template-columns: 1fr 2fr` em ≥1024px

**Sidebar (`.faq-header`):**
```css
position: sticky; top: 100px; align-self: start;
```
- section-tag + H2 + parágrafo intro + botão WhatsApp primário

**FAQ List (`.faq-list`):** `display: flex; flex-direction: column; gap: 1rem`

**FAQ Items:**
```css
.faq-item {
  background: white; border-radius: 1rem; overflow: hidden;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  border: 1px solid #F1F5F9;
}
.faq-question {
  display: flex; align-items: center; justify-content: space-between;
  width: 100%; padding: 1.5rem; font-size: 1rem; font-weight: 600;
  color: #0F172A; text-align: left; transition: all 150ms ease;
}
.faq-question:hover { color: #223289; }
```

**Accordion JS:**
```css
.faq-icon { transition: transform 250ms ease; color: #223289; flex-shrink: 0; }
.faq-item.active .faq-icon { transform: rotate(180deg); }

.faq-answer {
  max-height: 0; overflow: hidden;
  transition: max-height 350ms ease, padding 350ms ease;
}
.faq-item.active .faq-answer {
  max-height: 500px;
  padding: 0 1.5rem 1.5rem;
}
```

8 perguntas cobrindo: serviços, regiões, responsabilidade trabalhista, supervisão 24/7, certificação, substituição em falta, orçamento, conformidade ANVISA

**Diferenciador Visual:** Header sticky `position: sticky; top: 100px` — o bloco de texto com CTA WhatsApp fica fixo enquanto o usuário lê as respostas; a proporção `1fr 2fr` dá ao sidebar apenas 33% da largura, mantendo foco nas respostas

---

### SEÇÃO 10 — CTA Final com Formulário

**Estrutura:** `padding: 6rem 0; position: relative; overflow: hidden` — `.cta-grid`: `display: grid; gap: 3rem` → `grid-template-columns: 1fr 1fr; align-items: center` em ≥1024px

**Fundo:**
```css
background: linear-gradient(135deg, #0C1145 0%, #223289 100%);
/* ::before pseudo-elemento: */
background-image:
  radial-gradient(circle at 20% 80%, rgba(255,255,255,0.05) 0%, transparent 50%),
  radial-gradient(circle at 80% 20%, rgba(255,255,255,0.03) 0%, transparent 40%);
pointer-events: none;
```

**Coluna Esquerda — Conteúdo:**
- `section-tag` com `color: #B7E1F6` e `::before background: #B7E1F6`
- H2 `color: white`, parágrafo `opacity: 0.9; line-height: 1.7`
- 3 `.cta-benefit`: `display: flex; align-items: center; gap: 0.75rem; font-size: 0.875rem` — SVG check `color: #10B981` + texto branco
- `.cta-whatsapp`: `padding-top: 1.5rem; border-top: 1px solid rgba(255,255,255,0.1)` com botão `.btn-whatsapp`

**Coluna Direita — Formulário:**
```css
.cta-form-wrapper {
  background: white; padding: 2rem; border-radius: 1.5rem;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}
```

**Campos do formulário:**

| Campo | Tipo | Especificação |
|---|---|---|
| `nome` | text | required — "Seu nome" |
| `telefone` | tel | required — máscara JS `(XX) XXXXX-XXXX` |
| `email` | email | opcional — em `.form-row` ao lado do telefone |
| `regiao` | select | required — 7 opções de região RJ |
| `servico` | select | required — 8 tipos de serviço |
| `mensagem` | textarea | opcional — `rows: 4; min-height: 100px; resize: vertical` |

**Estilos de inputs:**
```css
.form-group input, select, textarea {
  padding: 0.75rem 1rem; border: 2px solid #E2E8F0;
  border-radius: 0.75rem; font-size: 1rem; font-family: inherit;
  transition: all 150ms ease;
}
.form-group input:focus, select:focus, textarea:focus {
  outline: none; border-color: #223289;
  box-shadow: 0 0 0 3px rgba(34,50,137,0.1);
}
```

**Form-row (telefone + email lado a lado):**
```css
.form-row { display: grid; gap: 1.25rem; }
@media (min-width: 640px) { .form-row { grid-template-columns: 1fr 1fr; } }
```

**Privacidade:**
- `.form-privacy`: `display: flex; align-items: center; justify-content: center; gap: 0.5rem; font-size: 0.75rem; color: #64748B` — SVG cadeado + "Seus dados estão seguros"

**Fluxo JS:** submit → validação (required + email regex + phone mínimo 10 dígitos) → monta mensagem WhatsApp → `window.open('https://api.whatsapp.com/send?phone=5521982873540&text=...')` → `form.reset()`

**Diferenciador Visual:** `.cta-form-wrapper` branco sobre fundo azul escuro cria o maior contraste luminância do site — formulário "flutua" sobre a seção com `shadow-2xl`; os dois radial-gradients brancos com 3-5% de opacidade no fundo criam textura sutil sem pattern explícito

---

### SEÇÃO 11 — Localização

**Estrutura:** `padding: 6rem 0; background: white` — `.location-grid`: `display: grid; gap: 3rem` → `grid-template-columns: 1fr 1fr; align-items: center` em ≥1024px

**Coluna Esquerda — Info:**
- section-tag + H2 + parágrafo texto + `.location-areas` com grid 2 colunas → 3 colunas (640px) de `.area-item` (SVG pin 16×16px `color: #223289` + texto) + botão WhatsApp

**Coluna Direita — Mapa:**
```css
.location-map {
  height: 400px; border-radius: 1.5rem;
  overflow: hidden; box-shadow: shadow-xl;
}
.location-map iframe { width: 100%; height: 100%; border: none; }
```

**Diferenciador Visual:** Mapa embutido com `border-radius: 1.5rem` e `overflow: hidden` — tratado como elemento de design com sombra, não como `<iframe>` funcional genérico

---

### SEÇÃO 12 — Footer

**Estrutura:** `background: #0F172A; padding: 4rem 0 2rem` — `.footer-grid`: `display: grid; gap: 2.5rem` → `repeat(2, 1fr)` em ≥640px → `2fr 1fr 1fr 1.5fr` em ≥1024px

**4 colunas:**
1. `.footer-brand` (2fr): Logo `height: 40px` + parágrafo cinza + 3 social links
2. `.footer-links` (1fr): Links rápidos
3. `.footer-services` (1fr): Serviços
4. `.footer-contact` (1.5fr): WhatsApp, tel, localização

**Social links:**
```css
.social-link {
  width: 40px; height: 40px; background: rgba(255,255,255,0.1);
  border-radius: 0.75rem; color: white; transition: all 150ms ease;
}
.social-link:hover { background: #223289; transform: translateY(-3px); }
```

**Footer bottom:** `display: flex; justify-content: space-between; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1)`

---

### COMPONENTE FLUTUANTE — Botão WhatsApp

**CSS:**
```css
.whatsapp-float {
  position: fixed; bottom: 1.5rem; right: 1.5rem;
  width: 60px; height: 60px; background: #25D366;
  color: white; border-radius: 50%; box-shadow: shadow-xl;
  z-index: 300; transition: all 250ms ease;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 4px 15px rgba(37,211,102,0.4); }
  50%       { box-shadow: 0 4px 30px rgba(37,211,102,0.7); }
}
.whatsapp-float:hover {
  transform: scale(1.1);
  box-shadow: 0 10px 30px rgba(37,211,102,0.4);
}
```
SVG: logo WhatsApp preenchido, `fill="currentColor"`, 28×28px

---

### COMPONENTE FLUTUANTE — Controle de Áudio

**CSS:**
```css
.audio-control {
  position: fixed; bottom: 1.5rem; left: 1.5rem;
  width: 50px; height: 50px; background: white;
  border: 1px solid #E2E8F0; border-radius: 50%;
  box-shadow: shadow-lg; z-index: 300; color: #223289;
  transition: all 250ms ease;
}
.audio-control:hover {
  transform: scale(1.1) rotate(5deg);
  background: #223289; color: white; border-color: #223289;
}
.audio-icon-playing .wave-1 { animation: wavePulse 1.2s ease-in-out infinite; }
.audio-icon-playing .wave-2 { animation: wavePulse 1.2s ease-in-out infinite 0.2s; }
@keyframes wavePulse {
  0%, 100% { opacity: 0.3; transform: scale(0.9); }
  50%       { opacity: 1;   transform: scale(1.1); }
}
```

JS: `AudioManager` — música de fundo (vol. 0.15) + narração ElevenLabs Rachel (vol. 0.8) — ativado no primeiro clique/interação (bypass bloqueio de autoplay)

---

## COMPONENTES REUTILIZÁVEIS

### Botões

**`.btn` (base):**
```css
display: inline-flex; align-items: center; justify-content: center;
gap: 0.5rem; font-size: 0.875rem; font-weight: 600;
padding: 0.75rem 1.5rem; border-radius: 0.75rem;
transition: all 250ms ease; white-space: nowrap;
```

| Variante | Background | Color | Hover |
|---|---|---|---|
| `.btn-primary` | `linear-gradient(135deg, #223289 → #0C1145)` + `shadow-md` | `white` | `translateY(-2px)` + `shadow-lg` + `shadow-glow (0 0 40px -10px #B7E1F6)` |
| `.btn-outline` | `transparent` | `#223289` | `background: #223289; color: white` |
| `.btn-whatsapp` | `#25D366` | `white` | `background: #128C7E; translateY(-2px)` |
| `.btn-large` | herda | herda | `padding: 1rem 2rem; font-size: 1rem` |

**SVG dentro do botão:**
```css
.btn svg { flex-shrink: 0; transition: transform 250ms ease; }
.btn:hover svg { transform: translateX(3px); }
```

---

### Inputs e Formulário

```css
/* Base */
padding: 0.75rem 1rem; border: 2px solid #E2E8F0;
border-radius: 0.75rem; font-size: 1rem; font-family: Outfit, sans-serif;
color: #0F172A; transition: all 150ms ease;

/* Focus ring */
border-color: #223289;
box-shadow: 0 0 0 3px rgba(34, 50, 137, 0.1); /* focus ring 3px primário 10% opacidade */
outline: none;

/* Placeholder */
color: #94A3B8;

/* Textarea */
resize: vertical; min-height: 100px;

/* Form-row (2 colunas) */
display: grid; grid-template-columns: 1fr 1fr; gap: 1.25rem;
```

---

### Cards

**Service Card:**
```css
border-radius: 1.5rem; overflow: hidden; box-shadow: shadow-md;
border: 1px solid #F1F5F9; transition: all 250ms ease;
/* hover: translateY(-8px) + shadow-xl */
/* imagem hover: img { transform: scale(1.05); transition: 350ms ease } */
```

**Diff Card:**
```css
padding: 2rem; border-radius: 1.5rem; text-align: center;
box-shadow: shadow-md; border: 1px solid #F1F5F9;
/* hover: translateY(-5px) + shadow-xl + border-color: #B7E1F6 */
/* ícone hover: gradient inverso + scale(1.1) */
```

**Testimonial Card:**
```css
padding: 2rem; border-radius: 1.5rem;
background: #F8FAFC; /* → white no hover */
/* hover: translateY(-5px) + shadow-xl + background: white */
```

**Pain Item:**
```css
padding: 1.5rem; background: #F8FAFC;
border-radius: 1rem; border-left: 4px solid #EF4444;
/* hover: translateX(5px) + shadow-md */
```

**Solution Card:**
```css
background: linear-gradient(135deg, #223289 → #0C1145);
padding: 2.5rem; border-radius: 1.5rem; color: white;
/* Botão interno: background white, color: #223289 */
/* Botão hover: background: #B7E1F6 */
```

---

### Section Tag (reutilizado em todas as seções)

```css
.section-tag {
  display: inline-block; font-size: 0.875rem; font-weight: 600;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: #223289; margin-bottom: 1rem;
  position: relative; padding-left: 1.5rem;
}
.section-tag::before {
  content: ''; position: absolute; left: 0; top: 50%;
  transform: translateY(-50%); width: 16px; height: 2px;
  background: linear-gradient(90deg, #223289, #B7E1F6);
}
/* Em fundo escuro (CTA): */
.cta-content .section-tag { color: #B7E1F6; }
.cta-content .section-tag::before { background: #B7E1F6; }
```

---

### Scroll Reveal

```css
.reveal { opacity: 0; transform: translateY(30px); transition: all 0.6s ease; }
.reveal.active { opacity: 1; transform: translateY(0); }
```
JS: `IntersectionObserver({ threshold: 0.1 })` com stagger delay em grupos de cards (índice × 100ms)

---

### Custom Cursor (Desktop)

```css
/* Círculo externo */
width: 40px; height: 40px; border-radius: 50%;
border: 2px solid rgba(34,50,137,0.5);
position: fixed; pointer-events: none; z-index: 9999;
transition: transform 250ms ease, opacity 250ms ease;
mix-blend-mode: difference;

/* Dot interno */
width: 8px; height: 8px; border-radius: 50%;
background: #223289; position: fixed; pointer-events: none;

/* Em hover de link/botão: cursor externo scale(1.5) */
```

---

## ANTI-PADRÕES REGISTRADOS

❌ **1. Hero com fundo de vídeo autoplay** — A home care genérica usa vídeo de hospital com música emocional. Blue Care usa imagem JPG estática com `aspect-ratio: 4/3` otimizada para performance + shape decorativo rotacionado -3deg como substituto de dinamismo visual sem custo de carregamento.

❌ **2. Seção de serviços como lista de texto com bullets** — O padrão da concorrência é uma lista `<ul>` com ícones de emoji e parágrafos. Blue Care usa cards com imagens reais fotográficas por serviço, hover de `translateY(-8px)` + zoom `scale(1.05)` na foto, e link animado com gap crescente — cada serviço tem identidade visual própria.

❌ **3. Formulário de contato em nova página ou modal** — Formulário embutido diretamente na landing page, sem redirecionamento, com submissão via WhatsApp deeplink — zero dependência de backend, zero bounce por indisponibilidade de servidor.

❌ **4. Depoimentos como carrossel automático** — Carrossel automático força o usuário a esperar. Blue Care usa grid estático 3 colunas com hover state — o usuário controla o que lê; o Google Badge de verificação abaixo substitui o número de reviews como prova social.

❌ **5. FAQ em lista simples de texto** — FAQ genérico é apenas `<details>/<summary>` ou texto corrido. Blue Care implementa sidebar sticky com CTA embarcado (`position: sticky; top: 100px`) e accordion com `max-height` transition — o botão WhatsApp fica visível durante toda a leitura do FAQ.

❌ **6. Paleta de cor "hospitalar" verde-branco** — Home care concorrentes usam verde (#4CAF50) ou azul-médico (#0077CC) óbvio. Blue Care usa azul profundo marinho `#223289` + azul gelado `#B7E1F6` como acento — paleta mais próxima de fintech premium do que de clínica, comunicando seriedade e confiabilidade institucional sem estética hospitalar asséptica.

❌ **7. CTAs genéricos "Saiba mais" e "Entre em contato"** — Todos os CTAs são específicos ao contexto: "Solicitar orçamento grátis" (hero), "Quero segurança para minha família" (pain-solution), "Confirmar atendimento na minha região" (location), "Falar com especialista" (FAQ sidebar). Cada CTA responde à dor específica da seção.

❌ **8. Ícones de clip-art ou FontAwesome** — Todos os ícones são SVGs inline com `stroke-width: 2` (outline style), consistentes em peso visual. Nenhum uso de ícone de biblioteca externa — os SVGs são do set Lucide/Feather e mantêm coerência de estilo em todos os 40+ ícones do site.

❌ **9. Trust bar estática com logos** — A seção de confiança em competidores é uma lista horizontal estática de logos de parceiros sem movimento. Blue Care usa marquee infinito com `mask-image` de fade nas bordas + `drop-shadow` nos ícones — os claims de qualidade ficam em movimento constante, visíveis sem scroll.

❌ **10. Grid de diferenciais simples com ícone + título + texto** — O padrão é 4-6 cards idênticos sem estado interativo. Blue Care implementa `diff-card` com inversão de polaridade no hover: ícone muda de fundo claro com ícone azul para fundo gradient escuro com ícone branco + `scale(1.1)` — cada card "acende" individualmente ao ser explorado.

---

## DADOS TÉCNICOS

| Item | Especificação |
|---|---|
| HTML | Semântico: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<blockquote>` — ARIA completo |
| CSS | Vanilla, 2147 linhas, Custom Properties completo, zero frameworks |
| JavaScript | Vanilla ES6+, 817 linhas, 13 classes modulares, zero dependências |
| Fontes | Google Fonts: Outfit (300/400/500/600/700) + Playfair Display (400/500/600/700) |
| Imagens | JPG/PNG locais; `loading="lazy"` via JS IntersectionObserver (`data-src`) |
| Áudio | MP3 música de fundo (vol. 0.15) + narração ElevenLabs Rachel (vol. 0.8) — ativado em primeiro clique |
| Cursor | Custom cursor com `mix-blend-mode: difference` — desktop only, resposta a `prefers-reduced-motion` |
| Breakpoints | 640px (sm), 768px (md), 1024px (lg) |
| Container | `max-width: 1280px` — padding `1.5rem` → `2rem` → `3rem` |
| Transição padrão | `250ms ease` (--transition-base) / `150ms ease` (fast) / `350ms ease` (slow) / `500ms cubic-bezier(0.68,-0.55,0.265,1.55)` (bounce) |
| Sombra editorial | `shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)` |
| Glow effect | `shadow-glow: 0 0 40px -10px #B7E1F6` — exclusivo no hover de btn-primary |
| Focus visible | `outline: 2px solid #223289; outline-offset: 2px` — todos os elementos interativos |
| Reduced motion | `@media (prefers-reduced-motion: reduce)` desabilita todas as animações para 0.01ms |
| WhatsApp | `https://wa.me/5521982873540` — (21) 98287-3540 |
| Desenvolvido por | AG5 Agência |
