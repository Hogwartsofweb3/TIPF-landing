import React from 'react';
import styles from '../styles/ThreePillars.module.css';

export default function ThreePillars() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Timeline Banner */}
        <div className={styles.timelineBanner}>
          <span className={styles.timelineSegment}>[GEN 1: BOTTABLE INTERACTION]</span>
          <span className={styles.timelineArrow}>──►</span>
          <span className={styles.timelineSegment}>[GEN 2: HARDWARE ARMS RACE]</span>
          <span className={styles.timelineArrow}>──►</span>
          <span className={styles.timelineSegmentActive}>[GEN 3: CRYPTOGRAPHIC EQUILIBRIUM (TIPF)]</span>
        </div>

        {/* 3 Column Grid */}
        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Cryptographic proof on every round.</h3>
            <p className={styles.cardBody}>
              Magicblock VRF generates a verifiable random number and a mathematical proof before any winner is declared. No validator influence. No operator control.
            </p>
            <div className={styles.cardTag}>
              VRF * RFC 9381
            </div>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Two pools. Same proof. Your choice.</h3>
            <p className={styles.cardBody}>
              Aggressive Pool: 4% SOL win rate. Up to 24x return. Stable Pool: 96% SOL win rate. Consistent payouts. Both run simultaneously with independent Motherlode jackpots.
            </p>
            <div className={styles.cardTag}>
              25 BLOCKS PER ROUND
            </div>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <h3 className={styles.cardTitle}>90% of every buyback burned permanently.</h3>
            <p className={styles.cardBody}>
              10% of each winning payout becomes a protocol fee. 100% of that fee buys back TIPF on the open market. 90% of repurchased tokens are burned. Gone. Permanent.
            </p>
            <div className={styles.cardTag}>
              ZERO TEAM ALLOCATION
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
