# TIPF Landing Page — Product Requirements Document
**Version:** 2.0 | **Date:** June 27, 2026
**Framework:** Next.js App Router | **Deployment:** Vercel
**Styling:** Pure CSS Modules — Zero external animation/UI libraries

---

## MODULE 1 — VISUAL SYNTAX & CREATIVE DIRECTION

### 1.1 Aesthetic Concept: 'Obsidian Cryptographic Terminal'

The layout lives at the intersection of a cryptographer's terminal and a pristine developer environment. It completely avoids generic SaaS web design choices: no decorative background blurs, no multi-colored gradient soups, no floating glassmorphic spheres, no abstract AI graphics.

The visual language focuses entirely on **high information density, razor-thin borders, clean grid alignments, and monospaced data structures**. The design must look like a natural extension of an elite Rust developer's IDE.

---

### 1.2 Color Token Architecture

All color parameters are established as custom CSS variables in a global root stylesheet:

```css
:root {
  /* Background layers */
  --color-bg-void:        #080B0F;   /* Deep obsidian — background canvas */
  --color-bg-panel:       #0E1218;   /* Structural panel cards */
  --color-bg-inset:       #131920;   /* Data tables, code blocks, terminal tags */

  /* Borders */
  --color-border-subtle:  #1A2230;   /* Layout grids and divider lines */
  --color-border-active:  #243040;   /* Interactive hover thresholds */

  /* Text */
  --color-text-primary:   #E8EDF2;   /* Crisp title and body readability */
  --color-text-secondary: #6B7A8D;   /* Labels, descriptive strings */
  --color-text-muted:     #3D4D5E;   /* Metadata strings, background numbers */

  /* Accent — strict usage rules below */
  --color-accent-proof:   #14C184;   /* VRF verification green — ONLY */
  --color-accent-primary: #9B5CF6;   /* Primary CTAs — ONLY */
  --color-accent-warning: #F59E0B;   /* Motherlode jackpot vectors — ONLY */
  --color-accent-danger:  #EF4444;   /* Burn metrics — ONLY */
}
```

**Color Enforcement Rules:**
- `--color-accent-proof` (#14C184) — render **only** when communicating successful cryptographic verification
- `--color-accent-primary` (#9B5CF6) — maximum **two instances per active viewport window**
- `--color-accent-warning` (#F59E0B) — Motherlode and jackpot-related elements exclusively
- `--color-accent-danger` (#EF4444) — deflationary burn metrics exclusively

---

### 1.3 Typography Scale

```css
/* Display — DM Mono (Google Fonts) */
--text-display-xl: clamp(48px, 6vw, 80px);  line-height: 1.0;
--text-display-lg: clamp(36px, 4vw, 56px);  line-height: 1.05;
--text-display-md: clamp(24px, 3vw, 36px);  line-height: 1.1;

/* Body — Inter (Regular 400 / Medium 500) */
--text-body:    15px;  line-height: 1.65;
--text-caption: 13px;  line-height: 1.5;

/* Data — JetBrains Mono */
/* Used for: transaction hashes, terminal blocks, round counters, live tickers */
--text-mono-sm: 11px;
--text-mono-md: 13px;
--text-mono-lg: 15px;
```

---

### 1.4 Visual Authenticity Mechanism

**No marketing icons. No shield illustrations. No trust badges.**

Trust is communicated exclusively through explicit data layout elements.

Every cryptographic reference across the page must be rendered as an **authentic, truncated on-chain transaction signature string** in JetBrains Mono. The final 8 characters of the string must be wrapped with `--color-accent-proof`.

Example rendering:
```
5x8mQ2…[proof-chars styled in #14C184]
```

---

## MODULE 2 — WIREFRAME DECOMPOSITION (SECTION BY SECTION)

---

### SECTION 0 — NAVIGATION STRIP

**Purpose:** Brand alignment with zero-distraction pathways. One escape route only.

**Layout:**
- Left: Wordmark `[TIPF]` — DM Mono 18px, `--color-text-primary`
- Right: Single `.btn-secondary { Open dApp ↗ }` → links to `tipf.ai/mine`

**Styling:**
- `position: sticky; top: 0; z-index: 100`
- Background: `--color-bg-void` with `backdrop-filter: blur(8px)`
- Border bottom: `1px solid var(--color-border-subtle)`

---

### SECTION 1 — HIGH-FREQUENCY TERMINAL HERO

**Purpose:** Establish immediate liveness, volume, and undeniable technical authority under 3 seconds.

**Layout — 12-Column Asymmetric Grid:**

**Columns 1–7 (Action Stack):**
| Element | Spec |
|---------|------|
| Eyebrow tag | `[VRF ACTIVE · ROUND #79,824]` — JetBrains Mono, `--color-accent-proof` |
| H1 | "Mining with proof. Not with promises." — DM Mono `--text-display-xl` |
| Subhead | "25-block on-chain rounds. Cryptographically verified outcomes. Two risk profiles. One provable truth." — Inter 17px |
| Primary CTA | `.btn-primary { Start Mining → }` |
| Secondary CTA | `.btn-secondary { How VRF Works ↓ }` — smooth-scroll anchor |

**Columns 8–12 (Live Panel Status Box):**
Isolated structural info box tracking live simulated values:
| Field | Value | Style |
|-------|-------|-------|
| Motherlode Pool | 11,140 TIPF | `--color-accent-warning` |
| Current Round | #79,824 | JetBrains Mono |
| Countdown | Ticking timer | Live JS countdown |
| Active Signature | `5x8mQ2…[proof]` | Last 8 chars in `--color-accent-proof` |

**Background Layer:**
Dual-row horizontal ticker tracks streaming in opposite directions:
- Row 1: moves rightward at `40px/s`
- Row 2: moves leftward at `32px/s`
- Content: Simulated round indexes + transaction strings
- Opacity: `10%` — visible as background texture only

**CLS Defense:**
```css
.hero-stat-panel-container { min-height: 280px; }
.animated-ticker-wrapper { height: 80px; overflow: hidden; contain: strict; }
```

---

### SECTION 2 — THE THREE-PILLAR HISTORICAL CONTEXT GRID

**Purpose:** Define the three core mechanical pillars while establishing TIPF's historical positioning.

**Historical Context Banner (mandatory):**
Directly above the three columns, a subtle horizontal monochromatic timeline:

```
[GEN 1: BOTTABLE INTERACTION] ──► [GEN 2: HARDWARE ARMS RACE] ──► [GEN 3: CRYPTOGRAPHIC EQUILIBRIUM (TIPF)]
```

Styling:
- JetBrains Mono 11px in `--color-text-muted`
- `[GEN 3: CRYPTOGRAPHIC EQUILIBRIUM (TIPF)]` — highlighted in `--color-accent-proof`

**Grid Structure — 3 Equal Columns:**

| | Pillar 1 | Pillar 2 | Pillar 3 |
|-|----------|----------|----------|
| **Title** | "Cryptographic proof on every round." | "Two pools. Same proof. Your choice." | "90% of every buyback burned permanently." |
| **Body** | Magicblock VRF eliminates validator + operator manipulation. Every settlement carries an on-chain cryptographic proof verifiable by any third party. | Aggressive Pool: 4% SOL win rate, 24× upside. Stable Pool: 96% SOL win rate, consistent compounding. Both pools run simultaneously with independent Motherlode jackpots. | 10% of each winning payout becomes a protocol fee. 100% of that fee buys back TIPF on the open market. 90% of repurchased tokens are burned. Gone. Permanent. |
| **Tag** | `VRF · RFC 9381` | `25 BLOCKS PER ROUND` | `ZERO TEAM ALLOCATION` |

---

### SECTION 3 — VRF SCROLL-CHOREOGRAPHY ENGINE

**Purpose:** Transform the cryptographic sequence into an undeniable, step-by-step visual animation.

**Layout:**
- **Sticky left panel (5 cols):** Active step-indicator tracker — `Step 1` through `Step 4`
- **Scroll right panel (7 cols):** 7-column scroll lane hosting 4 distinct content panels

As panels cross the viewport center, the left-side step indicator updates its active styling via `IntersectionObserver`.

**CLS Defense:**
```css
.scroll-engine-right-card { min-height: 400px; }
```

**Step Content Definitions:**

**Step 1 — Round Closes:**
Shows a 5×5 grid element. The timer counts down to zero, the blocks lock state, and block entries halt. Copy: "The round state is securely closed and unknown to all operators."

**Step 2 — VRF Request:**
Shows a crisp vector line mapping a CPI call traveling from the TIPF contract straight into Magicblock's queue. Copy: "The process is completely automated without team interference."

**Step 3 — Proof Generated:**
An algorithmic block reveals an incoming seed mapping to a calculated output value linked to a permanent `proof =` component. Copy: "Curve25519 / RFC 9381 execution principles."

**Step 4 — On-Chain Verification:**
Renders an authentic explorer interface card. A clean success label flashes into visibility (`proof_verified: true` in `--color-accent-proof`). Copy: "Failure states immediately nullify round execution."

---

### SECTION 4 — TOKEN2022 CLOSED-LOOP ECONOMY

**Purpose:** Disclose structural tokenomics and prove supply scarcity is managed directly by contract logic.

**Layout:** Centered 2-column structure — structured token attributes paired with an active SVG flow chart diagram.

**The SVG Blueprint (custom inline SVG — no external asset dependency):**

```
[MINING ROUND] ──► [PROTOCOL FEE (10% SOL)] ──► [OPEN MARKET BUYBACK via Jupiter]
                                                           │
                              ┌────────────────────────────┤
                              ▼                            ▼
                       90% ↓                         10% ↓
                  [PERMANENT BURN]           [NODE HOLDERS + STAKERS]
```

All lines are SVG `<path>` elements with `stroke-dashoffset` animation on scroll-into-view. No external animation libraries.

**Data Callout Panel — tight metadata container:**
| Attribute | Value |
|-----------|-------|
| Acquisition Method | Mining Only |
| Sale Venues | Approved DEXs Only |
| P2P Transfers | OTC / C2C Only |
| Team Allocation | None |

**Section Header Label:** "Supply is a function of rounds, not decisions."
**Technical Subtext:** "This is not a policy. TIPF uses Solana's Token2022 program with a custom transfer hook that executes on every token movement, verified by the Solana runtime. The team cannot mint tokens. Cannot override the burn. Cannot dump into secondary markets. The contract does not allow it."

---

### SECTION 5 — DUAL POOLS: CHOOSE YOUR RISK PROFILE

**Purpose:** Educate users on pool variance and immediately drive conversion actions.

**Layout — 2 Symmetric Columns:**

**Card A — Aggressive Pool:**
- Tagged with a crimson hazard-style indicator
- Primary metric: `4% SOL Win Rate` with associated `24× potential upside` metric
- Shows a 5×5 block grid: 1 gold block surrounded by 24 crimson blocks
- CTA button: `.btn-primary { Mine Aggressive → }`

**Card B — Stable Pool:**
- Tagged with `--color-accent-primary` (purple) indicator
- Primary metric: `96% SOL Win Rate` detailing highly consistent token rewards
- Shows a 5×5 block grid: 24 purple blocks adjacent to 1 gray block
- CTA button: `.btn-primary { Mine Stable → }`

**CLS Defense:**
```css
.interactive-block-grid-box { width: 172px; height: 172px; contain: layout paint; }
```

---

### SECTION 6 — MOTHERLODE JACKPOT TRACKER

**Purpose:** Build suspense and urgency around the accumulating jackpot mechanic.

**Layout:** Full-width centered panel with large animated counter.

**Elements:**
- Large JetBrains Mono counter in `--color-accent-warning` — animates up on scroll-into-view
- `+20 TIPF per round` label
- `1/625 trigger probability` — fixed badge
- "Independent vaults: Aggressive Pool · Stable Pool" divider
- Copy: "The odds never change. The chest never stops filling. Someone is going to open it."

---

### SECTION 7 — CHROME CONVERSION OUTRO

**Purpose:** Final conversion interface — strip all redundant tracking elements.

**Layout:** Centered typography container.

**Headline:** "The proof is on-chain. The round is live."

**Elements:**
- `.btn-primary { Start Mining → }` — links to `tipf.ai/mine`
- External documentation reference link → GitBook docs
- Background: 10% opacity moving background data ticker (same ticker from Section 1, looped)

---

## MODULE 3 — PERFORMANCE TARGETS & CLS DEFENSE

### 3.1 Bundle Target
- Bundle footprint: **under 200KB**
- Deployment: Vercel (free tier)
- No external animation libraries — all animations in vanilla CSS + IntersectionObserver

### 3.2 CLS Mitigation — All Container Metrics
```css
.hero-stat-panel-container    { min-height: 280px; }
.interactive-block-grid-box   { width: 172px; height: 172px; contain: layout paint; }
.animated-ticker-wrapper      { height: 80px; overflow: hidden; contain: strict; }
.scroll-engine-right-card     { min-height: 400px; }
```

### 3.3 Global Animation Parameters

**Philosophy:** Every animated variable must visualize technical processing. Zero ambient floating physics engines or floating blobs allowed.

**Transitions:**
```css
transition: border-color 150ms cubic-bezier(0.16, 1, 0.3, 1);
```

**Reduced Motion Constraints:**
```css
@media (prefers-reduced-motion: reduce) {
  .animated-ticker-wrapper { animation: none; }
  .svg-animated-path { stroke-dashoffset: 0; animation: none; }
}
```

---

## MODULE 4 — DESIGN COPYWRITING MATRIX

| Section | Component | Copy |
|---------|-----------|------|
| **Hero** | Eyebrow Tag | `[VRF ACTIVE · ROUND #79,824]` |
| | H1 | "Mining with proof. Not with promises." |
| | Subhead | "25-block on-chain rounds. Cryptographically verified outcomes. Two risk profiles. One provable truth." |
| **Three Pillars** | Pillar 1 | "Magicblock VRF generates a verifiable random number and a mathematical proof before any winner is declared. No validator influence. No operator control." |
| | Pillar 2 | "Aggressive Pool: 4% SOL win rate. Up to 24× return. Stable Pool: 96% SOL win rate. Consistent payouts. Both run simultaneously with independent Motherlode jackpots." |
| | Pillar 3 | "10% of each winning payout becomes a protocol fee. 100% of that fee buys back TIPF on the open market. 90% of repurchased tokens are burned. Gone. Permanent." |
| **Token2022** | Header | "Supply is a function of rounds, not decisions." |
| | Subtext | "This is not a policy. TIPF uses Solana's Token2022 program with a custom transfer hook that executes on every token movement, verified by the Solana runtime. The team cannot mint tokens. Cannot override the burn. Cannot dump into secondary markets. The contract does not allow it." |
| **Outro** | Headline | "The proof is on-chain. The round is live." |

---

## MODULE 5 — NEXT.JS PROJECT STRUCTURE

```
tipf-campaign/
├── app/
│   ├── layout.tsx          # Root layout, Google Fonts, metadata
│   ├── page.tsx            # Assembles all sections
│   └── globals.css         # CSS variables (all tokens from Module 1.2)
├── components/
│   ├── Nav.tsx             # Section 0
│   ├── Hero.tsx            # Section 1 (ticker + live panel)
│   ├── ThreePillars.tsx    # Section 2 (Gen 1/2/3 banner + 3 columns)
│   ├── VRFEngine.tsx       # Section 3 (sticky scroll choreography)
│   ├── TokenomicsFlow.tsx  # Section 4 (SVG diagram + callout panel)
│   ├── DualPools.tsx       # Section 5 (block grids + pool cards)
│   ├── Motherlode.tsx      # Section 6 (animated counter)
│   └── ConversionOutro.tsx # Section 7 (final CTA)
├── styles/
│   ├── Nav.module.css
│   ├── Hero.module.css
│   ├── ThreePillars.module.css
│   ├── VRFEngine.module.css
│   ├── TokenomicsFlow.module.css
│   ├── DualPools.module.css
│   ├── Motherlode.module.css
│   └── ConversionOutro.module.css
└── public/
    └── (any static assets)
```

---

## MODULE 6 — DEPLOYMENT

```bash
# Initialize project
npx create-next-app@latest . --typescript --no-tailwind --app --src-dir no

# Dev server
npm run dev

# Deploy to Vercel
vercel deploy --prod
```

Vercel auto-assigns a `*.vercel.app` URL on first deploy. Custom domain can be added later.

---

## EXTERNAL LINKS TO WIRE UP

| Element | Destination |
|---------|-------------|
| "Open dApp ↗" (Nav) | https://tipf.ai/mine |
| "Start Mining →" (Hero CTA) | https://tipf.ai/mine |
| "Mine Aggressive →" | https://tipf.ai/mine |
| "Mine Stable →" | https://tipf.ai/mine |
| "Start Mining →" (Outro) | https://tipf.ai/mine |
| Docs reference | https://tipf-1.gitbook.io/tipf-docs |
| Twitter link (footer) | https://x.com/TIPF_AI |
| Video embed (Section 3 or Hero) | YouTube/X video URL — TBD after video recorded |
| X Thread link | TBD after thread published |
| X Article link | TBD after article published |
