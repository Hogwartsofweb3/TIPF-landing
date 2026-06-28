'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/Motherlode.module.css';

export default function Motherlode() {
  const [count, setCount] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTimestamp: number | null = null;
          const duration = 2000; // 2 seconds animation
          const target = 11140;

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            setCount(Math.floor(progress * target));
            if (progress < 1) {
              window.requestAnimationFrame(step);
            }
          };

          window.requestAnimationFrame(step);
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
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <span className={styles.label}>MOTHERLODE</span>
        
        <h2 className={styles.counter}>
          {count.toLocaleString()}
        </h2>
        
        <p className={styles.unitLabel}>TIPF accumulated and waiting</p>
        
        <div className={styles.pillsRow}>
          <div className={styles.pill}>
            <span className={styles.pillBig}>1 / 625</span>
            <span className={styles.pillSmall}>Trigger probability per round</span>
          </div>
          <div className={styles.pill}>
            <span className={styles.pillBig}>+20 TIPF</span>
            <span className={styles.pillSmall}>Added every round, never reset</span>
          </div>
          <div className={styles.pill}>
            <span className={styles.pillBig}>2 VAULTS</span>
            <span className={styles.pillSmall}>Aggressive + Stable independent</span>
          </div>
        </div>

        <p className={styles.copy}>
          The odds never change. Whether the chest holds 20 TIPF or 200,000 TIPF, the trigger probability is always 1 in 625. Someone is going to open it. The math just does not say when.
        </p>
      </div>
    </section>
  );
}
