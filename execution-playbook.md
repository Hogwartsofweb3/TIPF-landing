# TIPF Bounty Campaign — Phase-by-Phase Execution Playbook
# How to use: Work through each phase in order.
# [YOU] = your direct action | [PROMPT] = paste into chat with Antigravity
# By Phase 6 every deliverable is complete and ready to submit.

---

# PHASE 0 — COMPLETED (Reference Only)

Already done:
- All research (TIPF, Magicblock VRF, ORE, ZINC, Token2022)
- X Article draft (~2,200 words) -> x-article.md
- X Thread (16 tweets) -> x-thread.md
- Video script (6 segments, 90-120s) -> video-script.md
- Landing page PRD locked (7 sections) -> landing-page-prd.md

---

# PHASE 1 — MINING & DATA COLLECTION [YOU]
# Timeframe: June 27 - July 1

No prompts. This is your field work.

Setup:
1. Phantom wallet -> fund with 0.2-0.5 SOL
2. tipf.ai/mine -> connect wallet
3. Create guild -> screenshot setup screen

ROUND LOG (fill for every round):
----------------------------------------------
Date/Time:
Pool:              [ ] Aggressive  [ ] Stable
Blocks staked:     (e.g. 3, 7, 19)
SOL per block:
Winning block #:
Result:            [ ] WIN  [ ] LOSS
SOL gained/lost:
TIPF earned:
Motherlode triggered? [ ] Yes  [ ] No
Motherlode chest size: ___ TIPF
Solana Explorer tx:   (paste transaction signature)
Screenshot taken?  [ ] Yes
----------------------------------------------

Screenshots to capture (mandatory):
[ ] Block selection screen (before lock)
[ ] Round settlement screen (winning block gold)
[ ] Wallet balance before and after a session
[ ] Motherlode counter - both pools
[ ] Solana Explorer - 2+ VRF transactions (proof field visible)
[ ] Guild page (XP accumulation)
[ ] 1 winning round full screen
[ ] 1 losing round full screen (shows honesty)

MINING SUMMARY (compile when done - paste into Phases 3A, 3B, 3C):
----------------------------------------------
Total rounds played:
  Stable Pool:      ___
  Aggressive Pool:  ___

Stable Pool:
  SOL win rate:     ___ / ___ rounds (___ %)
  Best round gain:  +___ SOL
  Total TIPF:       ___
  Motherlode chest: ___ TIPF

Aggressive Pool:
  SOL win rate:     ___ / ___ rounds (___ %)
  Best jackpot:     ___x return
  TIPF from reward: ___
  Motherlode chest: ___ TIPF

Guild name:         ___
Guild XP:           ___
VRF tx signatures:  (paste 2-3 Solana Explorer links)
----------------------------------------------

---

# PHASE 2 — LANDING PAGE BUILD [PROMPT]
# Timeframe: June 28-30
# 4 sequential sub-prompts -> live Vercel URL at end

---
## PROMPT 2A — Initialize Next.js + Global CSS + Nav

Paste into chat:

Build Phase 2A of the TIPF landing page.

Initialize Next.js App Router inside C:\Users\Micha\.gemini\antigravity\scratch\tipf-campaign\ using npx create-next-app@latest. TypeScript, App Router, no Tailwind, no src directory.

After scaffolding create:

1. app/globals.css with ALL CSS custom properties from PRD Module 1.2:
   --color-bg-void: #080B0F
   --color-bg-panel: #0E1218
   --color-bg-inset: #131920
   --color-border-subtle: #1A2230
   --color-border-active: #243040
   --color-text-primary: #E8EDF2
   --color-text-secondary: #6B7A8D
   --color-text-muted: #3D4D5E
   --color-accent-proof: #14C184
   --color-accent-primary: #9B5CF6
   --color-accent-warning: #F59E0B
   --color-accent-danger: #EF4444
   --text-display-xl: clamp(48px, 6vw, 80px) line-height 1.0
   --text-display-lg: clamp(36px, 4vw, 56px) line-height 1.05
   --text-display-md: clamp(24px, 3vw, 36px) line-height 1.1
   Base body: font-family Inter, background var(--color-bg-void), color var(--color-text-primary)
   Import DM Mono + Inter + JetBrains Mono from Google Fonts via @import

2. app/layout.tsx - root layout with metadata:
   title: "TIPF Mining - Mining with proof. Not with promises."
   description: "25-block on-chain rounds. Cryptographically verified outcomes via Magicblock VRF. Two risk profiles. One provable truth."

3. app/page.tsx - placeholder rendering only <Nav /> for now

4. components/Nav.tsx + styles/Nav.module.css - Section 0 from PRD:
   Left: wordmark [TIPF] in DM Mono 18px, --color-text-primary
   Right: single button "Open dApp up-arrow" linking to https://tipf.ai/mine
   Sticky: position sticky, top 0, z-index 100, backdrop-filter blur(8px), border-bottom 1px solid --color-border-subtle, background --color-bg-void

Run npm install. Confirm dev server starts on npm run dev.
Full spec: tipf-campaign/landing-page-prd.md

---
## PROMPT 2B — Hero + Three Pillars

Paste into chat:

Build Phase 2B of the TIPF landing page. Project initialized in tipf-campaign/. Add:

SECTION 1 - HERO (components/Hero.tsx + styles/Hero.module.css):

12-column asymmetric CSS Grid.

Columns 1-7 (Action Stack):
- Eyebrow tag: [VRF ACTIVE * ROUND #79,824] - JetBrains Mono, --color-accent-proof, 12px uppercase
- H1: "Mining with proof. Not with promises." - DM Mono --text-display-xl, --color-text-primary
- Subhead: "25-block on-chain rounds. Cryptographically verified outcomes. Two risk profiles. One provable truth." - Inter 17px, --color-text-secondary, line-height 1.65
- Two buttons: .btn-primary "Start Mining" (https://tipf.ai/mine) and .btn-secondary "How VRF Works" (smooth-scroll to #vrf-engine)

Columns 8-12 (Live Status Panel):
- Card: --color-bg-panel background, 1px --color-border-subtle border, padding 24px
- Row 1: label "MOTHERLODE POOL" / value "11,140 TIPF" in --color-accent-warning
- Row 2: label "CURRENT ROUND" / value "#79,824"
- Row 3: label "ROUND CLOSES IN" / value: JS countdown from 60 that loops (simulated)
- Row 4: label "ACTIVE SIGNATURE" / value "5x8mQ2rPkL9nVw...a3f8c912" where last 8 chars "a3f8c912" in --color-accent-proof

Background dual ticker (CSS animation, behind grid):
- Row 1 moving right at 40px/s: "ROUND #79821 * 5x8mQ2... * VERIFIED *" repeated
- Row 2 moving left at 32px/s: "BLOCK 14 * MOTHERLODE +20 TIPF * ROUND #79820 *" repeated
- Opacity 10%, height 80px, overflow hidden, contain strict (CLS safe)

SECTION 2 - THREE PILLARS (components/ThreePillars.tsx + styles/ThreePillars.module.css):

Full-width horizontal banner above the three columns:
[GEN 1: BOTTABLE INTERACTION] -> [GEN 2: HARDWARE ARMS RACE] -> [GEN 3: CRYPTOGRAPHIC EQUILIBRIUM (TIPF)]
JetBrains Mono 11px, --color-text-muted for Gen 1 and 2, --color-accent-proof for Gen 3 segment only.

Three equal columns, each a card (--color-bg-panel, 1px --color-border-subtle border, border-radius 4px, padding 28px):

Pillar 1:
Title (DM Mono 18px): "Cryptographic proof on every round."
Body (Inter 15px --color-text-secondary): "Magicblock VRF generates a verifiable random number and a mathematical proof before any winner is declared. No validator influence. No operator control."
Tag (JetBrains Mono 11px, --color-bg-inset background, inline-block): VRF * RFC 9381

Pillar 2:
Title: "Two pools. Same proof. Your choice."
Body: "Aggressive Pool: 4% SOL win rate. Up to 24x return. Stable Pool: 96% SOL win rate. Consistent payouts. Both run simultaneously with independent Motherlode jackpots."
Tag: 25 BLOCKS PER ROUND

Pillar 3:
Title: "90% of every buyback burned permanently."
Body: "10% of each winning payout becomes a protocol fee. 100% of that fee buys back TIPF on the open market. 90% of repurchased tokens are burned. Gone. Permanent."
Tag: ZERO TEAM ALLOCATION

Wire both into app/page.tsx. Ref: tipf-campaign/landing-page-prd.md Sections 1-2.

---
## PROMPT 2C — VRF Engine + Token2022 + Dual Pools

Paste into chat:

Build Phase 2C of the TIPF landing page. Nav, Hero, ThreePillars already built. Add:

SECTION 3 - VRF ENGINE (components/VRFEngine.tsx + styles/VRFEngine.module.css) id="vrf-engine":

Sticky left panel (5 cols): step indicator for Steps 1-4.
Active step: 3px --color-accent-proof left border, --color-text-primary text.
Inactive steps: --color-text-muted.
Update active step via IntersectionObserver as right-side cards enter viewport center.
H2 in left panel: "How the proof is generated."

Scrollable right panel (7 cols): 4 content cards, min-height 400px each (CLS safe).

Step 1 "Round Closes":
Visual: 5x5 CSS grid of 25 small squares (all --color-bg-inset, 1px --color-border-subtle border)
Copy: "The round state is securely closed and unknown to all operators."

Step 2 "VRF Request":
Visual: inline SVG - a line/arrow from box labeled "TIPF CONTRACT" pointing to box labeled "MAGICBLOCK ORACLE QUEUE"
Copy: "The process is completely automated without team interference."

Step 3 "Proof Generated":
Visual: --color-bg-inset code block containing: proof = Curve25519(seed, oracle_key)
where the word "proof" is rendered in --color-accent-proof
Copy: "Curve25519 / RFC 9381 execution principles."

Step 4 "On-Chain Verification":
Visual: mock explorer card. Shows: proof_verified: true
"true" in --color-accent-proof. A small green dot indicator.
Copy: "Failure states immediately nullify round execution."

SECTION 4 - TOKEN2022 ECONOMY (components/TokenomicsFlow.tsx + styles/TokenomicsFlow.module.css):

Section header: "Supply is a function of rounds, not decisions." - DM Mono --text-display-md
Technical subtext: "This is not a policy. TIPF uses Solana's Token2022 program with a custom transfer hook that executes on every token movement, verified by the Solana runtime. The team cannot mint tokens. Cannot override the burn. Cannot dump into secondary markets. The contract does not allow it." - Inter 15px --color-text-secondary

2-column centered layout:

Left column - inline SVG flow diagram (no external libs):
[MINING ROUND] -> [PROTOCOL FEE (10% SOL)] -> [OPEN MARKET BUYBACK via Jupiter]
                                                          |
                               +--------------------+----+
                               v                         v
                      90% PERMANENT BURN         10% NODE HOLDERS + STAKERS

"PERMANENT BURN" text in --color-accent-danger (#EF4444)
"NODE HOLDERS + STAKERS" in --color-accent-proof (#14C184)
Animate SVG path stroke-dashoffset from full length to 0 on IntersectionObserver trigger.

Right column - data callout panel (--color-bg-inset, 1px --color-border-subtle border, padding 20px):
Row: "Acquisition Method" -> "Mining Only"
Row: "Sale Venues" -> "Approved DEXs Only"
Row: "P2P Transfers" -> "OTC / C2C Only"
Row: "Team Allocation" -> "None" (render "None" in --color-accent-proof)

SECTION 5 - DUAL POOLS (components/DualPools.tsx + styles/DualPools.module.css):

2 symmetric cards side by side.

Card A - Aggressive Pool:
- Top indicator strip 4px height, --color-accent-danger background
- Label: "AGGRESSIVE POOL" - JetBrains Mono 11px --color-text-muted
- Primary metric: "4% SOL Win Rate" - DM Mono --text-display-md, --color-text-primary
- Secondary: "24x potential upside" - --color-accent-warning
- 5x5 block grid (CSS grid): width 172px, height 172px, contain layout paint (CLS safe)
  Block 13: --color-accent-warning background with box-shadow glow
  Blocks 1-12, 14-25: rgba(239,68,68,0.15) background, 1px --color-border-subtle border
- CTA button: .btn-primary "Mine Aggressive" -> https://tipf.ai/mine

Card B - Stable Pool:
- Top indicator strip 4px height, --color-accent-primary background
- Label: "STABLE POOL" - JetBrains Mono 11px --color-text-muted
- Primary metric: "96% SOL Win Rate" - DM Mono --text-display-md
- Secondary: "Consistent compounding" - --color-text-secondary
- 5x5 block grid: width 172px, height 172px, contain layout paint
  Block 13: --color-text-muted background (the single loser block)
  Blocks 1-12, 14-25: rgba(155,92,246,0.15) background, 1px --color-border-subtle border
- CTA button: .btn-primary "Mine Stable" -> https://tipf.ai/mine

Wire all three into app/page.tsx. Ref: tipf-campaign/landing-page-prd.md Sections 3-5.

---
## PROMPT 2D — Motherlode + Outro + Vercel Deploy

Paste into chat:

Build Phase 2D - final sections + deploy. Project in tipf-campaign/.

SECTION 6 - MOTHERLODE (components/Motherlode.tsx + styles/Motherlode.module.css):

Full-width centered panel.
Background: --color-bg-panel. Border: 1px solid rgba(245,158,11,0.3) (warning color at 30% opacity).
Padding: 80px 40px. Text-align center.

Elements top to bottom:
1. Section label: "MOTHERLODE" - JetBrains Mono 11px, --color-text-muted, letter-spacing 0.15em
2. Animated counter: starts at 0, counts to 11140 via requestAnimationFrame when IntersectionObserver fires.
   Font: DM Mono, clamp(56px, 8vw, 96px), --color-accent-warning
3. Unit label: "TIPF accumulated and waiting" - Inter 16px, --color-text-secondary
4. Three stat pills in a row (--color-bg-inset, border, border-radius 4px, padding 8px 16px):
   Pill 1: "1 / 625" big / "Trigger probability per round" small
   Pill 2: "+20 TIPF" big / "Added every round, never reset" small
   Pill 3: "2 VAULTS" big / "Aggressive + Stable independent" small
5. Copy paragraph (max-width 560px, centered):
   "The odds never change. Whether the chest holds 20 TIPF or 200,000 TIPF, the trigger probability is always 1 in 625. Someone is going to open it. The math just does not say when."

SECTION 7 - CONVERSION OUTRO (components/ConversionOutro.tsx + styles/ConversionOutro.module.css):

Centered container, max-width 640px, margin auto, padding 120px 0.

Elements:
1. Headline: "The proof is on-chain. The round is live." - DM Mono --text-display-md, --color-text-primary
2. Button row: .btn-primary "Start Mining" (https://tipf.ai/mine) + plain link "Read the Docs" (https://tipf-1.gitbook.io/tipf-docs) in --color-text-secondary Inter 15px
3. Background: same dual-row ticker from Hero reused at 10% opacity (CSS animation, same speed)

FOOTER (inside ConversionOutro or separate component):
Horizontal strip, --color-border-subtle border-top, padding 24px.
Left: [TIPF] wordmark - DM Mono 14px
Center: "Built on Solana * Magicblock VRF * Audited by Zenith" - JetBrains Mono 11px --color-text-muted
Right: x.com/TIPF_AI link + tipf-1.gitbook.io/tipf-docs link - JetBrains Mono 11px --color-text-muted

Wire into app/page.tsx. Confirm full page renders in dev server top to bottom.

Then deploy:
1. npm i -g vercel (if not installed)
2. vercel deploy --prod from inside the tipf-campaign/ project directory
3. Return the live public Vercel URL.

---

# PHASE 3 — INJECT REAL MINING DATA [PROMPT]
# Timeframe: July 1
# Prerequisite: complete your Phase 1 mining summary first

---
## PROMPT 3A — Update X Article

Fill in your Mining Summary from Phase 1. Then paste:

Update x-article.md in tipf-campaign/ with my real mining data.
Replace all [X] placeholders in the "My Experience" section.
If the opening hook round/block/SOL numbers don't match a real round I played, update them to match.

MY MINING DATA:
[PASTE MINING SUMMARY]
[PASTE 2-3 NOTABLE ROUND LOGS]
[NOTE MEMORABLE MOMENTS: biggest win, close Motherlode call, etc.]

Requirements:
- Exact round count per pool
- Exact SOL win rate as a percentage
- Best win stated as SOL amount
- Exact TIPF earned per pool
- Both Motherlode chest sizes
- Guild name and XP total
- 2 VRF tx signatures (format: first6chars...last8chars)
Write as genuine field report, not a data list. 2-3 short paragraphs.

---
## PROMPT 3B — Update Tweet 15

Paste:

Update Tweet 15 in tipf-campaign/x-thread.md with my real mining data. Replace all [X] placeholders.

MY MINING DATA:
[PASTE MINING SUMMARY]

Requirements:
- Max 280 characters (count before saving)
- Include: round count, pool name, win rate, one concrete result
- Mention VRF signatures verified on-chain
- Tone: confident first-person, factual
- Must flow into Tweet 16 CTA naturally
Also update Tweet 1's hook if the round/block/SOL numbers need to match a real round.

---
## PROMPT 3C — Update Video Script Segment 6

Paste:

Update ONLY Segment 6 (1:32-1:55) of tipf-campaign/video-script.md. Do not change Segments 1-5.

MY MINING DATA:
[PASTE MINING SUMMARY]

Segment 6 voiceover: max 2-3 sentences using my specific results. End with tipf.ai/mine CTA.
Segment 6 visual description: list exact screens collab partner shows - my real wallet balance, real guild XP, real round results.
Update the Shot Summary table row for 1:32-1:55 with these specific visual notes.

---

# PHASE 4 — VISUAL ASSETS FOR THREAD [PROMPT]
# Timeframe: July 1-2

---
## PROMPT 4A — Comparison Table Image

Paste:

Generate a 1200x675px image of the TIPF vs ORE vs ZINC comparison table for the X Thread.

Background: #080B0F
4 columns: Feature | TIPF | ORE | ZINC
TIPF column: subtle left border accent in #9B5CF6
Data: use exact rows from the comparison table in tipf-campaign/x-article.md
Colors: verified/VRF cells -> #14C184, Hash/PoW cells -> #6B7A8D, checkmark -> #14C184, X mark -> #EF4444
Font style: monospaced terminal aesthetic
No decorations - pure data presentation

Save to tipf-campaign/assets/comparison-table.png

---
## PROMPT 4B — Tokenomics Flywheel Image

Paste:

Generate a 1200x675px tokenomics flywheel diagram for X Thread Tweet 10.

Background: #080B0F
Flow: [MINING ROUND] -> [PROTOCOL FEE 10%] -> [OPEN MARKET BUYBACK via Jupiter] -> splits into [90% PERMANENT BURN] in #EF4444 and [10% NODE STAKERS] in #14C184
Arrow lines: #243040, clean arrowheads
Labels: JetBrains Mono terminal style, #E8EDF2
Sub-label bottom: "1% platform fee covers VRF + RPC infrastructure" in #6B7A8D smaller
No gradients. No decorations. Pure diagram.

Save to tipf-campaign/assets/tokenomics-flywheel.png

---
## PROMPT 4C — Dual Pool Visual

Paste:

Generate a 1200x675px split image showing both mining pools for X Thread Tweets 7-8.

Left half - Aggressive Pool:
  Label at top: "AGGRESSIVE POOL" - monospaced
  5x5 grid of 25 blocks: block 13 in #F59E0B with subtle amber glow, others rgba(239,68,68,0.25)
  Below grid: "4% WIN RATE * 24x UPSIDE" in #E8EDF2

Right half - Stable Pool:
  Label at top: "STABLE POOL"
  5x5 grid: block 13 in #3D4D5E (single loser), others rgba(155,92,246,0.25)
  Below grid: "96% WIN RATE * CONSISTENT COMPOUNDING" in #E8EDF2

Center: 1px vertical divider in #1A2230
Background throughout: #080B0F

Save to tipf-campaign/assets/dual-pools.png

---

# PHASE 5 — WIRE UP LANDING PAGE [PROMPT]
# Timeframe: July 2
# Prerequisite: video uploaded, thread and article published

---
## PROMPT 5A — Embed Video + Add Live Content Links

Paste (fill in the three URLs first):

Update the deployed TIPF Next.js landing page in tipf-campaign/ with these live assets:

VIDEO EMBED - add to Section 3 (VRF Engine), above the step cards:
  Video URL: [PASTE YOUTUBE OR X VIDEO URL]
  Embed via iframe or Next.js, 16:9 aspect ratio, full column width, border-radius 4px
  Label above in JetBrains Mono 12px --color-text-muted: "Watch the full mining walkthrough"

CONTENT LINKS - add to Section 7 (Conversion Outro), below the CTA buttons:
  "Read the full X Thread" -> [PASTE X THREAD URL]
  "Read the full article" -> [PASTE X ARTICLE URL]
  Style: Inter 14px, --color-text-secondary, transition color on hover to --color-text-primary

FOOTER - add both content links alongside existing footer links.

After all changes: vercel deploy --prod
Return the updated final live URL.

---

# PHASE 6 — SUBMISSION PACKAGE [PROMPT]
# Timeframe: July 3

---
## PROMPT 6A — Generate All Submission Copy

Paste (fill in your Discord username and all four live URLs first):

Generate exact submission copy for all targets:

1. DISCORD MESSAGE for #submissions in Solana Collective:
   Must include: "TIPF Bounty" label prominently, X Thread URL, X Article URL, Vercel landing page URL, video URL, one-sentence summary, my Discord username: [YOUR DISCORD USERNAME]

2. SUPERTEAM EARN SUBMISSION FORM TEXT for superteam.fun/earn/listing/tipf-write-some-twitter-thread:
   Must include: Discord username, "Collective Member" stated explicitly, all four deliverable links, two-sentence description of what was submitted

3. FOLLOW-UP ENGAGEMENT TWEETS (post 1-2 days after main submission):
   Tweet A: a round result update using my real mining data (signals ongoing participation)
   Tweet B: guild XP progress update (shows continued engagement)
   Both under 280 characters. Both tag @TIPF_AI.

4. FINAL SUBMISSION CHECKLIST:
   Exhaustive list of every action before closing the laptop on July 3.
   Nothing can be missed.

---

# MASTER SUMMARY TABLE

Phase | Type     | Produces
------|----------|--------------------------------------------------
0     | Done     | All drafts + PRD
1     | YOU      | Mining data, screenshots, round logs
2A    | PROMPT   | Next.js scaffold + Nav
2B    | PROMPT   | Hero + Three Pillars sections
2C    | PROMPT   | VRF Engine + Token2022 + Dual Pools
2D    | PROMPT   | Motherlode + Outro + LIVE VERCEL URL
3A    | PROMPT   | X Article "My Experience" complete
3B    | PROMPT   | Tweet 15 complete + Tweet 1 verified
3C    | PROMPT   | Video script Segment 6 finalized
4A    | PROMPT   | Comparison table image 1200x675
4B    | PROMPT   | Tokenomics flywheel image 1200x675
4C    | PROMPT   | Dual pool visual image 1200x675
5A    | PROMPT   | Landing page wired up + redeployed
6A    | PROMPT   | Discord copy + Superteam copy + follow-ups + checklist

By Phase 6A: every deliverable is complete, deployed, and submission-ready.
