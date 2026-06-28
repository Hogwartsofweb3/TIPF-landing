import React from 'react';
import styles from '../styles/GuildSection.module.css';

export default function GuildSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={styles.header}>
          <span className={styles.eyebrow}>GUILD SYSTEM</span>
          <h2 className={styles.heading}>
            Your guild mines.<br />
            Your power compounds.
          </h2>
          <p className={styles.subtext}>
            Every round you mine earns XP for your guild. XP unlocks computing multipliers — up to 2.0× at V5. The early guilds are building moats right now.
          </p>
        </div>

        {/* Two-Column Layout */}
        <div className={styles.grid}>
          
          {/* Left Column: Leaderboard */}
          <div className={styles.leaderboardCard}>
            <div className={styles.cardHeader}>
              TOP GUILDS THIS WEEK
            </div>
            
            <div className={styles.rows}>
              {/* Row 1 */}
              <div className={styles.row}>
                <div className={styles.rankCol}>#1</div>
                <div className={styles.nameCol}>
                  <div className={styles.guildMeta}>
                    <span className={styles.guildName}>SOLANA SIEGE</span>
                    <span className={styles.levelBadge}>V4</span>
                  </div>
                  <div className={styles.xpBarContainer}>
                    <div className={styles.xpBar} style={{ width: '80%', backgroundColor: 'var(--color-accent-primary)' }}></div>
                  </div>
                  <span className={styles.xpText}>2,847,392 XP</span>
                </div>
                <div className={styles.multiplierCol}>1.7×</div>
              </div>

              {/* Row 2 */}
              <div className={styles.row}>
                <div className={styles.rankCol}>#2</div>
                <div className={styles.nameCol}>
                  <div className={styles.guildMeta}>
                    <span className={styles.guildName}>BLOCK CARTEL</span>
                    <span className={styles.levelBadge}>V3</span>
                  </div>
                  <div className={styles.xpBarContainer}>
                    <div className={styles.xpBar} style={{ width: '60%', backgroundColor: 'var(--color-accent-primary)' }}></div>
                  </div>
                  <span className={styles.xpText}>1,203,847 XP</span>
                </div>
                <div className={styles.multiplierCol}>1.5×</div>
              </div>

              {/* Row 3 */}
              <div className={styles.row}>
                <div className={styles.rankCol}>#3</div>
                <div className={styles.nameCol}>
                  <div className={styles.guildMeta}>
                    <span className={styles.guildName}>VRF FACTION</span>
                    <span className={styles.levelBadge}>V3</span>
                  </div>
                  <div className={styles.xpBarContainer}>
                    <div className={styles.xpBar} style={{ width: '60%', backgroundColor: 'var(--color-accent-primary)' }}></div>
                  </div>
                  <span className={styles.xpText}>987,231 XP</span>
                </div>
                <div className={styles.multiplierCol}>1.5×</div>
              </div>

              {/* Row 4 */}
              <div className={styles.row}>
                <div className={styles.rankCol}>#4</div>
                <div className={styles.nameCol}>
                  <div className={styles.guildMeta}>
                    <span className={styles.guildName}>MOTHERLODE CO</span>
                    <span className={styles.levelBadge}>V2</span>
                  </div>
                  <div className={styles.xpBarContainer}>
                    <div className={styles.xpBar} style={{ width: '40%', backgroundColor: 'var(--color-accent-primary)' }}></div>
                  </div>
                  <span className={styles.xpText}>543,129 XP</span>
                </div>
                <div className={styles.multiplierCol}>1.3×</div>
              </div>

              {/* Row 5: Blurred Row */}
              <div className={styles.blurredRowWrapper}>
                <div className={`${styles.row} ${styles.blurredRow}`}>
                  <div className={styles.rankCol}>#5</div>
                  <div className={styles.nameCol}>
                    <div className={styles.guildMeta}>
                      <span className={styles.guildName}>MY GUILD NAME</span>
                      <span className={styles.levelBadge}>V2</span>
                    </div>
                    <div className={styles.xpBarContainer}>
                      <div className={styles.xpBar} style={{ width: '40%' }}></div>
                    </div>
                    <span className={styles.xpText}>312,945 XP</span>
                  </div>
                  <div className={styles.multiplierCol}>1.3×</div>
                </div>
                <div className={styles.blurredOverlay}>
                  <a href="https://tipf.ai/mine" target="_blank" rel="noopener noreferrer" className={styles.blurredLink}>
                    Create your guild to appear here →
                  </a>
                </div>
              </div>
            </div>

            <div className={styles.cardFooter}>
              Updated every round · XP never resets
            </div>
          </div>

          {/* Right Column: Level Progression Visual */}
          <div className={styles.stepperContainer}>
            <div className={styles.stepConnectorLine}></div>

            <div className={styles.stepper}>
              {/* Level 1 */}
              <div className={styles.step}>
                <div className={styles.stepNode}></div>
                <div className={styles.stepContent}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepPill}>V1</span>
                    <span className={styles.stepThreshold}>100K XP</span>
                    <span className={styles.stepMultiplier}>1.1×</span>
                  </div>
                  <p className={styles.stepBenefit}>"Early advantage"</p>
                </div>
              </div>

              {/* Level 2 */}
              <div className={styles.step}>
                <div className={styles.stepNode}></div>
                <div className={styles.stepContent}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepPill}>V2</span>
                    <span className={styles.stepThreshold}>500K XP</span>
                    <span className={styles.stepMultiplier}>1.3×</span>
                  </div>
                  <p className={styles.stepBenefit}>"Consistent edge"</p>
                </div>
              </div>

              {/* Level 3 */}
              <div className={styles.step}>
                <div className={styles.stepNode}></div>
                <div className={styles.stepContent}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepPill}>V3</span>
                    <span className={styles.stepThreshold}>1M XP</span>
                    <span className={styles.stepMultiplier}>1.5×</span>
                  </div>
                  <p className={styles.stepBenefit}>"Serious player"</p>
                </div>
              </div>

              {/* Level 4 */}
              <div className={styles.step}>
                <div className={styles.stepNode}></div>
                <div className={styles.stepContent}>
                  <div className={styles.stepHeader}>
                    <span className={styles.stepPill}>V4</span>
                    <span className={styles.stepThreshold}>3M XP</span>
                    <span className={styles.stepMultiplier}>1.7×</span>
                  </div>
                  <p className={styles.stepBenefit}>"Guild dominance"</p>
                </div>
              </div>

              {/* Level 5: Gold Treatment */}
              <div className={`${styles.step} ${styles.goldStep}`}>
                <div className={`${styles.stepNode} ${styles.goldNode}`}></div>
                <div className={styles.stepContent}>
                  <div className={styles.stepHeader}>
                    <span className={`${styles.stepPill} ${styles.goldPill}`}>V5</span>
                    <span className={styles.stepThreshold}>5M XP</span>
                    <span className={`${styles.stepMultiplier} ${styles.goldMultiplier}`}>2.0×</span>
                  </div>
                  <p className={styles.stepBenefit}>"⬡ Maximum power — doubled"</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Below Both Columns CTA Strip */}
        <div className={styles.ctaStrip}>
          <a 
            href="https://tipf.ai/mine" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Create Your Guild →
          </a>
          <span className={styles.ctaSubtext}>
            Or join an existing guild and start earning XP immediately.
          </span>
        </div>
      </div>
    </section>
  );
}
