'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/Motherlode.module.css';

export default function Motherlode() {
  const [aggressiveCount, setAggressiveCount] = useState(0);
  const [stableCount, setStableCount] = useState(0);
  
  const [pulseAggressiveCounter, setPulseAggressiveCounter] = useState(false);
  const [pulseStableCounter, setPulseStableCounter] = useState(false);
  
  const [coinTrigger, setCoinTrigger] = useState(0);
  const [pulseVault, setPulseVault] = useState(false);
  const [pulseStableVault, setPulseStableVault] = useState(false);
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // IntersectionObserver to trigger countup
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          startCountUp();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startCountUp = () => {
    let startTimestamp: number | null = null;
    const duration = 1200;
    const targetAggressive = 11140;
    const targetStable = 4240;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      
      setAggressiveCount(Math.floor(easeOutCubic * targetAggressive));
      setStableCount(Math.floor(easeOutCubic * targetStable));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setHasAnimated(true);
      }
    };
    window.requestAnimationFrame(step);
  };

  // Real-time increment loops (+20 every 45s)
  useEffect(() => {
    if (!hasAnimated) return;

    const interval = setInterval(() => {
      setAggressiveCount((prev) => prev + 20);
      setPulseAggressiveCounter(true);
      setTimeout(() => setPulseAggressiveCounter(false), 300);
    }, 45000);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const interval = setInterval(() => {
      setStableCount((prev) => prev + 20);
      setPulseStableCounter(true);
      setTimeout(() => setPulseStableCounter(false), 300);
    }, 45000);

    return () => clearInterval(interval);
  }, [hasAnimated]);

  // Coin entry interval (every 4s)
  useEffect(() => {
    const interval = setInterval(() => {
      setCoinTrigger((prev) => prev + 1);
      
      // Pulse vaults on entry
      setPulseVault(true);
      setPulseStableVault(true);
      
      setTimeout(() => {
        setPulseVault(false);
        setPulseStableVault(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* MAIN VAULT - AGGRESSIVE POOL */}
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* LEFT COLUMN: Vault Visual */}
          <div className={styles.vaultColumn}>
            <div className={styles.visualWrapper}>
              {/* Floating Coins */}
              <div className={styles.coinsContainer}>
                {Array.from({ length: 8 }).map((_, i) => (
                  <div key={i} className={`${styles.floatingCoin} ${styles[`coin${i}`]}`}>
                    <svg viewBox="0 0 8 8" className={styles.coinSvg}>
                      <polygon points="4,0 8,2 8,6 4,8 0,6 0,2" fill="#F59E0B" />
                    </svg>
                  </div>
                ))}
                
                {/* Depositing Coin */}
                <div key={coinTrigger} className={styles.depositingCoin}>
                  <svg viewBox="0 0 8 8" className={styles.coinSvg}>
                    <polygon points="4,0 8,2 8,6 4,8 0,6 0,2" fill="#F59E0B" />
                  </svg>
                </div>
              </div>

              {/* Vault Chest SVG */}
              <div className={`${styles.vaultContainer} ${pulseVault ? styles.pulse : ''}`}>
                <svg viewBox="0 0 200 200" className={styles.vaultSvg}>
                  {/* Outer rounded rect */}
                  <rect x="20" y="40" width="160" height="120" rx="12" fill="#0E1218" stroke="#243040" strokeWidth="2" />
                  {/* Inner rect */}
                  <rect x="28" y="48" width="144" height="104" rx="8" fill="none" stroke="#1A2230" strokeWidth="1" />
                  {/* Horizontal split */}
                  <line x1="20" y1="90" x2="180" y2="90" stroke="#1A2230" strokeWidth="2" />
                  {/* Lid decoration lines */}
                  <line x1="40" y1="58" x2="160" y2="58" stroke="#1A2230" strokeWidth="1" />
                  <line x1="40" y1="66" x2="160" y2="66" stroke="#1A2230" strokeWidth="1" />
                  <line x1="40" y1="74" x2="160" y2="74" stroke="#1A2230" strokeWidth="1" />
                  {/* Keyhole */}
                  <circle cx="100" cy="115" r="8" fill="#243040" />
                  <polygon points="96,120 104,120 106,134 94,134" fill="#243040" />
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Tension Copy */}
          <div className={styles.copyColumn}>
            <span className={styles.eyebrow}>MOTHERLODE VAULT · AGGRESSIVE POOL</span>
            
            <h2 className={`${styles.counter} ${pulseAggressiveCounter ? styles.pulseText : ''}`}>
              {aggressiveCount.toLocaleString()}
            </h2>
            <p className={styles.unitLabel}>TIPF locked inside</p>
            
            <p className={styles.tensionText}>
              Nobody knows when it opens.<br />
              The math says 1 in 625.<br />
              The vault doesn't care how full it is.
            </p>

            <div className={styles.statsRow}>
              <div className={styles.statItem}>
                <span className={styles.statVal}>+20 TIPF</span>
                <span className={styles.statDesc}>/ round</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>1 / 625</span>
                <span className={styles.statDesc}>odds</span>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <span className={styles.statVal}>2 vaults</span>
                <span className={styles.statDesc}>active</span>
              </div>
            </div>

            <div className={styles.ctaWrapper}>
              <p className={styles.ctaLabel}>Mine now. Be in the round when it opens.</p>
              <a 
                href="https://tipf.ai/mine" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Start Mining →
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* SECOND VAULT TEASER - STABLE POOL */}
      <div className={styles.teaserSection}>
        <div className={styles.teaserContainer}>
          <div className={styles.teaserGrid}>
            
            {/* Stable Vault Visual (Smaller) */}
            <div className={styles.teaserVaultColumn}>
              <div className={styles.teaserVisualWrapper}>
                <div className={styles.coinsContainer}>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className={`${styles.floatingCoinTeaser} ${styles[`teaserCoin${i}`]}`}>
                      <svg viewBox="0 0 6 6" className={styles.coinSvg}>
                        <polygon points="3,0 6,1.5 6,4.5 3,6 0,4.5 0,1.5" fill="#9B5CF6" />
                      </svg>
                    </div>
                  ))}
                  <div key={coinTrigger} className={styles.depositingCoinTeaser}>
                    <svg viewBox="0 0 6 6" className={styles.coinSvg}>
                      <polygon points="3,0 6,1.5 6,4.5 3,6 0,4.5 0,1.5" fill="#9B5CF6" />
                    </svg>
                  </div>
                </div>

                <div className={`${styles.vaultContainerTeaser} ${pulseStableVault ? styles.pulseTeaser : ''}`}>
                  <svg viewBox="0 0 160 160" className={styles.vaultSvgTeaser}>
                    <rect x="20" y="30" width="120" height="100" rx="10" fill="#0E1218" stroke="#243040" strokeWidth="2" />
                    <rect x="26" y="36" width="108" height="88" rx="6" fill="none" stroke="#1A2230" strokeWidth="1" />
                    <line x1="20" y1="75" x2="140" y2="75" stroke="#1A2230" strokeWidth="2" />
                    <line x1="35" y1="46" x2="125" y2="46" stroke="#1A2230" strokeWidth="1" />
                    <line x1="35" y1="52" x2="125" y2="52" stroke="#1A2230" strokeWidth="1" />
                    <line x1="35" y1="58" x2="125" y2="58" stroke="#1A2230" strokeWidth="1" />
                    <circle cx="80" cy="98" r="6" fill="#243040" />
                    <polygon points="77,102 83,102 84,112 76,112" fill="#243040" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Stable Vault Info (Compact) */}
            <div className={styles.teaserInfoColumn}>
              <span className={styles.eyebrowStable}>MOTHERLODE VAULT · STABLE POOL</span>
              <h3 className={`${styles.teaserCounter} ${pulseStableCounter ? styles.pulseStableText : ''}`}>
                {stableCount.toLocaleString()}
              </h3>
              <p className={styles.teaserUnitLabel}>TIPF locked inside</p>
              <div className={styles.teaserStats}>
                <span>+20 TIPF / round</span>
                <span className={styles.teaserDot}>·</span>
                <span>1 / 625 odds</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
