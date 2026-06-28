'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from '../styles/VRFEngine.module.css';

export default function VRFEngine() {
  const [activeStep, setActiveStep] = useState(1);
  const stepRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -30% 0px', // Trigger near center viewport
      threshold: 0.1,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-step') || '1', 10);
          setActiveStep(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepRefs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      stepRefs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <section id="vrf-engine" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Sticky Left Panel (5 cols) */}
          <div className={styles.leftPanel}>
            <h2 className={styles.heading}>How the proof is generated.</h2>
            <div className={styles.stepList}>
              {[
                { num: 1, label: 'Round Closes' },
                { num: 2, label: 'VRF Request' },
                { num: 3, label: 'Proof Generated' },
                { num: 4, label: 'On-Chain Verify' },
              ].map((step) => (
                <div 
                  key={step.num} 
                  className={`${styles.stepIndicator} ${activeStep === step.num ? styles.activeStep : ''}`}
                >
                  <span className={styles.stepNum}>0{step.num}</span>
                  <span className={styles.stepLabel}>{step.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Scrollable Right Panel (7 cols) */}
          <div className={styles.rightPanel}>
            {/* Step 1 */}
            <div ref={stepRefs[0]} data-step="1" className={styles.card}>
              <div className={styles.cardVisual}>
                <div className={styles.grid25}>
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} className={styles.gridSquare}></div>
                  ))}
                </div>
              </div>
              <h3 className={styles.cardTitle}>Step 1: Round Closes</h3>
              <p className={styles.cardBody}>
                The round state is securely closed and unknown to all operators. All block entries halt immediately.
              </p>
            </div>

            {/* Step 2 */}
            <div ref={stepRefs[1]} data-step="2" className={styles.card}>
              <div className={styles.cardVisual}>
                <div className={styles.svgWrapper}>
                  <div className={styles.svgBox}>TIPF CONTRACT</div>
                  <svg className={styles.arrowSvg} viewBox="0 0 100 20" fill="none">
                    <path d="M0 10 H90 M80 5 L90 10 L80 15" stroke="var(--color-border-active)" strokeWidth="2" />
                  </svg>
                  <div className={styles.svgBox}>MAGICBLOCK ORACLE QUEUE</div>
                </div>
              </div>
              <h3 className={styles.cardTitle}>Step 2: VRF Request</h3>
              <p className={styles.cardBody}>
                The process is completely automated without team interference. The contract fires a Cross-Program Invocation (CPI) to request verifiable randomness.
              </p>
            </div>

            {/* Step 3 */}
            <div ref={stepRefs[2]} data-step="3" className={styles.card}>
              <div className={styles.cardVisual}>
                <pre className={styles.codeBlock}>
                  <code>
                    <span className={styles.accentProof}>proof</span> = Curve25519(seed, oracle_key)
                  </code>
                </pre>
              </div>
              <h3 className={styles.cardTitle}>Step 3: Proof Generated</h3>
              <p className={styles.cardBody}>
                Curve25519 / RFC 9381 execution principles. An independent oracle computes the random value alongside a cryptographic proof.
              </p>
            </div>

            {/* Step 4 */}
            <div ref={stepRefs[3]} data-step="4" className={styles.card}>
              <div className={styles.cardVisual}>
                <div className={styles.explorerCard}>
                  <div className={styles.explorerHeader}>
                    <span>SOLANA EXPLORER</span>
                    <span className={styles.explorerStatus}><span className={styles.explorerDot}></span> SUCCESS</span>
                  </div>
                  <div className={styles.explorerRow}>
                    <span>Instruction</span>
                    <span>VerifyProof</span>
                  </div>
                  <div className={styles.explorerRow}>
                    <span>proof_verified</span>
                    <span className={styles.accentProofText}>true</span>
                  </div>
                </div>
              </div>
              <h3 className={styles.cardTitle}>Step 4: On-Chain Verification</h3>
              <p className={styles.cardBody}>
                Failure states immediately nullify round execution. The Magicblock program verifies the proof on-chain before the winning block is declared.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
