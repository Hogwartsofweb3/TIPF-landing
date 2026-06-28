'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/Hero.module.css';

export default function Hero() {
  const [timeLeft, setTimeLeft] = useState(42); // Initial simulated countdown

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev <= 1 ? 60 : prev - 1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    return `00:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <section className={styles.heroSection}>
      {/* Background Tickers */}
      <div className={styles.tickerContainer}>
        <div className={styles.tickerRowRight}>
          <div className={styles.tickerContentRight}>
            {"ROUND #79821 * 5x8mQ2rPkL9nVw...a3f8c912 * VERIFIED * ".repeat(15)}
          </div>
        </div>
        <div className={styles.tickerRowLeft}>
          <div className={styles.tickerContentLeft}>
            {"BLOCK 14 * MOTHERLODE +20 TIPF * ROUND #79820 * ".repeat(15)}
          </div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Action Stack (Cols 1-7) */}
          <div className={styles.actionStack}>
            <div className={styles.eyebrow}>
              [VRF ACTIVE * ROUND #79,824]
            </div>
            <h1 className={styles.title}>
              Mining with proof.<br />Not with promises.
            </h1>
            <p className={styles.subhead}>
              25-block on-chain rounds. Cryptographically verified outcomes. Two risk profiles. One provable truth.
            </p>
            <div className={styles.ctaGroup}>
              <a 
                href="https://tipf.ai/mine" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Start Mining →
              </a>
              <a href="#vrf-engine" className="btn-secondary">
                How VRF Works ↓
              </a>
            </div>
          </div>

          {/* Live Status Panel (Cols 8-12) */}
          <div className={styles.livePanelWrapper}>
            <div className={styles.livePanel}>
              <div className={styles.panelHeader}>
                <span className={styles.panelDot}></span> LIVE STATUS
              </div>
              <div className={styles.panelRow}>
                <span className={styles.panelLabel}>MOTHERLODE POOL</span>
                <span className={styles.panelValueWarning}>11,140 TIPF</span>
              </div>
              <div className={styles.panelRow}>
                <span className={styles.panelLabel}>CURRENT ROUND</span>
                <span className={styles.panelValue}>#79,824</span>
              </div>
              <div className={styles.panelRow}>
                <span className={styles.panelLabel}>ROUND CLOSES IN</span>
                <span className={styles.panelValueMono}>{formatTime(timeLeft)}</span>
              </div>
              <div className={styles.panelRow}>
                <span className={styles.panelLabel}>ACTIVE SIGNATURE</span>
                <span className={styles.panelValueSignature}>
                  5x8mQ2rPkL9nVw...<span className={styles.accentProof}>a3f8c912</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
