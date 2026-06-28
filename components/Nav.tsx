'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  const [roundNumber, setRoundNumber] = useState(79824);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoundNumber((prev) => prev + 1);
    }, 45000); // 45 seconds cadence
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          [TIPF]
        </div>
        <div className={styles.rightNav}>
          <div className={styles.roundCounter}>
            <span className={styles.pulseDot}>●</span>
            <span className={styles.roundText}>Round #{roundNumber.toLocaleString()}</span>
          </div>
          <a 
            href="https://tipf.ai/mine" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-secondary"
            style={{ padding: '8px 16px', fontSize: '13px' }}
          >
            Join This Round →
          </a>
        </div>
      </div>
    </nav>
  );
}
