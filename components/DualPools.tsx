import React from 'react';
import styles from '../styles/DualPools.module.css';

export default function DualPools() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Dual Pools: Choose Your Risk Profile.</h2>
          <p className={styles.subtext}>
            TIPF runs two independent pool loops in parallel. Mine with high-variance SOL multipliers or choose stable, high-probability compounding.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Card A: Aggressive Pool */}
          <div className={styles.card}>
            <div className={styles.indicatorAggressive}></div>
            <div className={styles.cardContent}>
              <span className={styles.label}>AGGRESSIVE POOL</span>
              <h3 className={styles.metricTitle}>4% SOL Win Rate</h3>
              <p className={styles.metricSubtitle}>24x potential upside</p>
              
              <div className={styles.visualContainer}>
                <div className={styles.blockGrid}>
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={i === 12 ? styles.activeSquareAggressive : styles.inactiveSquareAggressive}
                    ></div>
                  ))}
                </div>
              </div>

              <p className={styles.description}>
                1 block wins the entire SOL pot. The other 24 blocks split 100 TIPF tokens so you never walk away empty-handed.
              </p>

              <a 
                href="https://tipf.ai/mine" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
                style={{ backgroundColor: 'var(--color-accent-danger)' }}
              >
                Mine Aggressive →
              </a>
            </div>
          </div>

          {/* Card B: Stable Pool */}
          <div className={styles.card}>
            <div className={styles.indicatorStable}></div>
            <div className={styles.cardContent}>
              <span className={styles.label}>STABLE POOL</span>
              <h3 className={styles.metricTitle}>96% SOL Win Rate</h3>
              <p className={styles.metricSubtitle}>Consistent compounding</p>
              
              <div className={styles.visualContainer}>
                <div className={styles.blockGrid}>
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div 
                      key={i} 
                      className={i === 12 ? styles.activeSquareStable : styles.inactiveSquareStable}
                    ></div>
                  ))}
                </div>
              </div>

              <p className={styles.description}>
                24 blocks share the SOL winnings. The single losing block receives the 100 TIPF token reward pool instead.
              </p>

              <a 
                href="https://tipf.ai/mine" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Mine Stable →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
