# TIPF Mining Bounty — Implementation Plan

## What This Campaign Is

A four-asset submission attacking **two prize pools simultaneously** — the Solana Collective Members-only pool ($300/$200/$100) and the public Superteam bounty ($600/$400/$300+).

The strategy: field-report authority + premium production quality. Most entries will paraphrase the docs. This campaign mines real rounds, builds a professional landing page the TIPF team doesn't have, and delivers educational content across every required format.

---

## Deliverables & Status

| # | Asset | Tech | Status | Blocker |
|---|-------|------|--------|---------|
| 1 | **Landing Page** | Next.js + Vercel | ⏳ Design brief pending | User studying top landing pages |
| 2 | **X Thread** (16 tweets) | Markdown | ✅ Draft complete | Fill Tweet 15 with real mining data |
| 3 | **X Article** (~2,200 words) | Markdown | ✅ Draft complete | Fill "My Experience" with real data |
| 4 | **Video Script** | Markdown | ✅ Reference complete | Collab partner modifying |

---

## Deliverable 1 — Landing Page (Next.js / Vercel)

### Purpose
A professional, deployment-ready landing page that:
- TIPF could use as their own marketing page
- Serves as the "deep dive" link shared in the thread
- Embeds the educational video in the "How It Works" section
- Links out to the X Thread and X Article

### Tech Stack
- **Framework:** Next.js (App Router)
- **Styling:** Vanilla CSS / CSS Modules (no Tailwind unless user requests)
- **Deployment:** Vercel (free tier, instant public URL)
- **Fonts:** Google Fonts (Inter + Space Grotesk + JetBrains Mono — matching prototype)
- **Video:** Embedded YouTube/X video in "How It Works" section

### Page Sections (confirmed)
1. **Hero** — Headline, sub-headline, primary CTA ("Start Mining"), stats ticker
2. **The Problem** — Hash randomness vulnerability, why it matters
3. **The Solution (VRF)** — Magicblock VRF flow, 4-step animated diagram
4. **How It Works** — Embedded educational video + round mechanics explainer
5. **Dual Pools** — Interactive Aggressive / Stable toggle with block grids
6. **Motherlode** — Animated accumulating jackpot counter
7. **Tokenomics** — Deflationary flywheel steps (burn → scarcity → price support)
8. **Token2022** — Supply control explainer
9. **Comparison** — TIPF vs ORE vs ZINC full table
10. **Node Tiers + Guild System** — Node cards + guild level progression
11. **Get Started** — 3-step quick start guide
12. **CTA** — Final call to action, links to thread + article
13. **Footer** — All required tags (@TIPF_AI, @magicblock, @superteam, @SolanaCollectiv)

### Design Direction
> [!IMPORTANT]
> **Waiting on user design brief.** User is studying top-tier landing pages and will return with:
> - 3–5 reference pages for visual inspiration
> - Color/vibe preferences (adapt existing TIPF cyberpunk theme or go fresh)
> - Any section additions / removals
> - Video placement preference (hero-size vs mid-page embed)

**Prototype reference** (vanilla HTML/CSS — for design review only):
`tipf-campaign/index.html`

### Deployment Plan
1. `npx create-next-app@latest tipf-campaign/` in the project folder
2. Build all sections as Next.js components
3. `vercel deploy` — live URL returned immediately
4. URL shared in thread, article, and video description

---

## Deliverable 2 — X Thread

**File:** `tipf-campaign/x-thread.md`
**Status:** ✅ 16 tweets drafted. Structure:

| Tweet | Topic | Status |
|-------|-------|--------|
| 1 | Hook — inside a mining round | ✅ Done |
| 2–3 | The trust problem (hash randomness) | ✅ Done |
| 4–5 | VRF explained (human + technical) | ✅ Done |
| 6–8 | Dual pools as risk profiles | ✅ Done |
| 9 | Motherlode mechanic | ✅ Done |
| 10–11 | Tokenomics flywheel + Token2022 | ✅ Done |
| 12 | Guild system | ✅ Done |
| 13–14 | TIPF vs ORE vs ZINC | ✅ Done |
| 15 | **My Experience** (field report) | ⏳ Fill with real mining data |
| 16 | CTA + all required tags | ✅ Done |

**Required tags on Tweet 16:** `@TIPF_AI @superteam @SolanaCollectiv @magicblock`

---

## Deliverable 3 — X Article (Long-form)

**File:** `tipf-campaign/x-article.md`
**Status:** ✅ ~2,200 words drafted. Sections:

- Hook narrative (mining round)
- The on-chain randomness problem
- What VRF actually is (simple + technical)
- Full TIPF mechanics (round structure, dual pools, Motherlode)
- Tokenomics engine + Token2022
- Node system + Guild system
- TIPF vs ORE vs ZINC comparison table
- **My Experience** ⏳ — fill with real data as mining progresses
- 5-minute quick start guide

**Submission target:** Superteam Earn bounty page + Discord #submissions

---

## Deliverable 4 — Video Script

**File:** `tipf-campaign/video-script.md`
**Status:** ✅ Reference complete. Collab partner will modify.

**Target:** 90–120 seconds, screen recording + voiceover
**Structure:**
1. Hook (0:00–0:12) — inside a mining round
2. Problem setup (0:12–0:28) — hash vs VRF split screen
3. VRF explained live (0:28–0:45) — dApp + Solana Explorer proof
4. Dual pools (0:45–1:05) — toggle between pools on screen
5. Motherlode (1:05–1:18) — counter close-up
6. Tokenomics (1:18–1:32) — simple flow diagram
7. My experience + CTA (1:32–1:55) — real wallet results

---

## Content Architecture

### Core Argument
> *Other on-chain mining games ask you to trust the hash. TIPF asks you to verify the proof.*

### Three Pillars
1. **Fairness** — Magicblock VRF vs hash randomness. The only mining game with a cryptographic proof.
2. **Design** — Dual pools as financial instruments (4% aggressive / 96% stable), not just game modes.
3. **Economics** — Deflationary flywheel. Token2022 supply control. Mining-only acquisition.

---

## Key Stats Reference

| Metric | Value |
|--------|-------|
| Aggressive Pool win rate | 1/25 = **4%** |
| Stable Pool win rate | 24/25 = **96%** |
| Aggressive max SOL return | **24×+** |
| Motherlode trigger probability | **1/625 per round** |
| Motherlode accumulation rate | **+20 TIPF per round** |
| Protocol fee | **10%** of winning block payout |
| Protocol fee → burned | **90%** (permanent) |
| Protocol fee → nodes/stakers | **10%** |
| Platform op fee | **1%** of mining amount |
| Total nodes | **5,000** (fixed, non-transferable) |
| Base node | 300 USDT → 30,000 TIPF |
| Advanced node | 1,000 USDT → 100,000 TIPF + 1.1× power |
| Super node | 3,000 USDT → 300,000 TIPF + 1.21× power |
| Guild V5 bonus | **2.0× computing power** |
| Guild V5 XP required | 5,000,000 XP |
| VRF standard | Curve25519 / RFC 9381 |
| VRF audit | Zenith |
| VRF execution | 1 transaction (vs 50–100 older systems) |
| VRF cost on Ephemeral Rollup | **Free** |
| ZINC protocol fee | 11% |
| ZINC round duration | ~30 seconds / 30 tiles |
| ORE supply cap | 21 million tokens |

---

## TIPF vs ORE vs ZINC

| Feature | TIPF | ORE | ZINC |
|---------|------|-----|------|
| Randomness | Magicblock VRF | Hash / PoW | Arcium MPC |
| Third-party verifiable | ✅ On-chain proof | ❌ Hash only | Partial |
| Validator manipulation risk | ✅ None | ❌ Slot leaders | Low (MPC) |
| Token acquisition | Mining only | Mining (CPU PoW) | Mining only |
| Risk pool options | **2** (4% / 96%) | Single | Single |
| Jackpot mechanic | Motherlode (1/625) | None | Bonanza (rolling) |
| Privacy | Public | Public | ✅ Encrypted (Arcium) |
| Deflationary burn | 90% of buybacks | 90% of buybacks | 11% fee → burn |
| Passive income (non-mining) | Nodes + Staking | None | Staking (Bricks) |
| Social / Guild layer | ✅ Guilds (2× at V5) | None | None |
| Token standard | Token2022 + Hook | SPL Token | SPL Token |

---

## Delivery Sequence

```
June 26   ✅  Research, all draft content, prototype landing page
June 27       Mining starts (Stable + Aggressive pools)
              User returns with landing page design brief
              Next.js project initialized
June 28-30    Mining data accumulation
              Landing page build (Next.js → Vercel deploy)
              Video recorded by collab partner
              Progressive fill of "My Experience" sections
July 1-2      Final edits — thread, article, landing page
              Video final cut + upload
              Landing page: embed video, add thread/article links
July 3        Submit everything before deadline
```

---

## Submission Checklist

- [ ] X Thread posted (with screenshots)
- [ ] X Video posted (>90 seconds)
- [ ] X Article published
- [ ] Landing page live on Vercel (URL in thread)
- [ ] All posts tag: @TIPF_AI @superteam @SolanaCollectiv @magicblock
- [ ] Discord #submissions — "TIPF Bounty" label
- [ ] Superteam Earn page submission — Discord username + "Collective Member"
- [ ] Guild created inside TIPF dApp
- [ ] Real mining proof included (screenshots, round results, wallet)
- [ ] Submitted before July 3rd deadline
