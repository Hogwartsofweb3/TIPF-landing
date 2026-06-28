'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/TokenomicsFlow.module.css';

export default function TokenomicsFlow() {
  const [animate, setAnimate] = useState(false);
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.2 }
    );

    if (svgRef.current) {
      observer.observe(svgRef.current);
    }

    return () => {
      if (svgRef.current) {
        observer.unobserve(svgRef.current);
      }
    };
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.heading}>Supply is a function of rounds, not decisions.</h2>
          <p className={styles.subtext}>
            This is not a policy. TIPF uses Solana's Token2022 program with a custom transfer hook that executes on every token movement, verified by the Solana runtime. The team cannot mint tokens. Cannot override the burn. Cannot dump into secondary markets. The contract does not allow it.
          </p>
        </div>

        <div className={styles.layout}>
          {/* Left Column: SVG Flow Diagram */}
          <div ref={svgRef} className={`${styles.diagramColumn} ${animate ? styles.runAnimation : ''}`}>
            <svg viewBox="0 0 540 280" className={styles.svgFlow} fill="none">
              {/* Node Boxes */}
              <rect x="10" y="20" width="130" height="40" rx="4" className={styles.svgNode} />
              <text x="75" y="45" className={styles.svgText}>MINING ROUND</text>

              <rect x="200" y="20" width="140" height="40" rx="4" className={styles.svgNode} />
              <text x="270" y="45" className={styles.svgText}>PROTOCOL FEE (10%)</text>

              <rect x="390" y="20" width="140" height="40" rx="4" className={styles.svgNode} />
              <text x="460" y="45" className={styles.svgText}>BUYBACK via JUPITER</text>

              <rect x="90" y="200" width="150" height="45" rx="4" className={styles.svgNodeBurn} />
              <text x="165" y="222" className={styles.svgTextBurnHead}>90% PERMANENT BURN</text>
              <text x="165" y="235" className={styles.svgTextSub}>Tokens Burned Forever</text>

              <rect x="300" y="200" width="150" height="45" rx="4" className={styles.svgNodeStakers} />
              <text x="375" y="222" className={styles.svgTextStakersHead}>10% NODE STAKERS</text>
              <text x="375" y="235" className={styles.svgTextSub}>Revenue Share</text>

              {/* Connecting Lines (horizontal/vertical) */}
              <path d="M 140 40 H 200" className={styles.svgPath} />
              <path d="M 340 40 H 390" className={styles.svgPath} />
              <path d="M 460 60 V 120" className={styles.svgPath} />
              <path d="M 165 120 H 375" className={styles.svgPath} />
              <path d="M 165 120 V 200" className={styles.svgPath} />
              <path d="M 375 120 V 200" className={styles.svgPath} />
            </svg>
          </div>

          {/* Right Column: Data Callout Panel */}
          <div className={styles.calloutPanel}>
            <div className={styles.panelRow}>
              <span className={styles.panelLabel}>Acquisition Method</span>
              <span className={styles.panelValue}>Mining Only</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelLabel}>Sale Venues</span>
              <span className={styles.panelValue}>Approved DEXs Only</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelLabel}>P2P Transfers</span>
              <span className={styles.panelValue}>OTC / C2C Only</span>
            </div>
            <div className={styles.panelRow}>
              <span className={styles.panelLabel}>Team Allocation</span>
              <span className={styles.panelValueNone}>None</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
