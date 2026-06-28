'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/Hero.module.css';
import VrfSignature from './VrfSignature';

export default function Hero() {
  const [phase, setPhase] = useState<'FILLING' | 'COUNTDOWN' | 'VRF_FIRES' | 'SETTLEMENT'>('FILLING');
  const [countdown, setCountdown] = useState(10);
  const [filledBlocks, setFilledBlocks] = useState<number[]>([]);
  const [winningBlock, setWinningBlock] = useState<number | null>(null);
  const [blockMiners, setBlockMiners] = useState<number[]>(Array(25).fill(0));
  const [settlementDetails, setSettlementDetails] = useState('');
  const [roundNumber, setRoundNumber] = useState(79824);
  const [pulseWinner, setPulseWinner] = useState(false);

  useEffect(() => {
    let phaseTimer: NodeJS.Timeout;
    let blockInterval: NodeJS.Timeout;
    let countdownInterval: NodeJS.Timeout;

    const startFilling = () => {
      setPhase('FILLING');
      setWinningBlock(null);
      setPulseWinner(false);
      setSettlementDetails('');
      setFilledBlocks([]);
      setBlockMiners(Array(25).fill(0));

      const indices = Array.from({ length: 25 }, (_, i) => i);
      // Shuffle indices
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      let count = 0;
      blockInterval = setInterval(() => {
        if (count < 25) {
          const nextIdx = indices[count];
          setFilledBlocks((prev) => [...prev, nextIdx]);
          setBlockMiners((prev) => {
            const copy = [...prev];
            copy[nextIdx] = Math.floor(Math.random() * 3) + 1; // Increment count
            return copy;
          });
          count++;
        } else {
          clearInterval(blockInterval);
        }
      }, 550); // 15 seconds filling interval

      phaseTimer = setTimeout(() => {
        startCountdown();
      }, 15000);
    };

    const startCountdown = () => {
      setPhase('COUNTDOWN');
      setCountdown(10);

      countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      phaseTimer = setTimeout(() => {
        startVrf();
      }, 10000);
    };

    const startVrf = () => {
      setPhase('VRF_FIRES');
      const winner = Math.floor(Math.random() * 25);
      setWinningBlock(winner);
      setPulseWinner(true);

      phaseTimer = setTimeout(() => {
        startSettlement(winner);
      }, 2000);
    };

    const startSettlement = (winner: number) => {
      setPhase('SETTLEMENT');
      
      const winningBlockNumber = winner + 1;
      const solWon = (Math.random() * 1.5 + 0.1).toFixed(2);
      const txHash = '5xVRf' + Math.random().toString(36).substring(2, 6) + '...' + Math.random().toString(36).substring(2, 6);
      setSettlementDetails(`Block #${winningBlockNumber} · +${solWon} SOL · Round #${roundNumber.toLocaleString()} · ${txHash} ✓`);

      phaseTimer = setTimeout(() => {
        setRoundNumber((prev) => prev + 1);
        startFilling();
      }, 3000);
    };

    startFilling();

    return () => {
      clearTimeout(phaseTimer);
      clearInterval(blockInterval);
      clearInterval(countdownInterval);
    };
  }, [roundNumber]);

  const isAdjacentToWinner = (index: number) => {
    if (winningBlock === null) return false;
    const row = Math.floor(index / 5);
    const col = index % 5;
    const winRow = Math.floor(winningBlock / 5);
    const winCol = winningBlock % 5;

    const isUp = row === winRow - 1 && col === winCol;
    const isDown = row === winRow + 1 && col === winCol;
    const isLeft = row === winRow && col === winCol - 1;
    const isRight = row === winRow && col === winCol + 1;

    return isUp || isDown || isLeft || isRight;
  };

  return (
    <section className={styles.heroSection}>
      {/* BACKGROUND LAYER — Live Arena Grid */}
      <div 
        className={`${styles.backgroundLayer} ${phase === 'VRF_FIRES' ? styles.gridFlash : ''}`}
        style={{ opacity: phase === 'VRF_FIRES' ? 1.0 : 0.6 }}
      >
        {phase === 'COUNTDOWN' && (
          <div className={styles.timerDisplay}>
            00:{countdown.toString().padStart(2, '0')}
          </div>
        )}
        
        {phase === 'SETTLEMENT' && (
          <div className={styles.verifiedBadge}>
            VRF VERIFIED ✓
          </div>
        )}

        <div className={styles.arenaGrid}>
          {Array.from({ length: 25 }).map((_, i) => {
            const isFilled = filledBlocks.includes(i);
            const isWinner = winningBlock === i;
            const isAdjacent = isAdjacentToWinner(i);
            const minersCount = blockMiners[i];

            let blockClass = styles.block;
            if (phase === 'VRF_FIRES' || phase === 'SETTLEMENT') {
              if (isWinner) {
                blockClass = `${styles.block} ${styles.winnerBlock}`;
              } else if (isAdjacent) {
                blockClass = `${styles.block} ${styles.adjacentWinnerBlock}`;
              } else {
                blockClass = `${styles.block} ${styles.dimmedBlock}`;
              }
            } else if (isFilled) {
              blockClass = `${styles.block} ${styles.filledBlock} ${phase === 'COUNTDOWN' ? styles.pulseBreathe : ''}`;
            }

            return (
              <div key={i} className={blockClass}>
                {isWinner && (phase === 'VRF_FIRES' || phase === 'SETTLEMENT') ? (
                  <div className={styles.winnerContent}>
                    <span className={styles.winnerLabel}>⚡ WINNER</span>
                    {pulseWinner && <div className={styles.ripple}></div>}
                  </div>
                ) : isFilled && !isAdjacent ? (
                  <span className={styles.minerCount}>+{minersCount} miner{minersCount > 1 ? 's' : ''}</span>
                ) : null}
              </div>
            );
          })}
        </div>

        {phase === 'SETTLEMENT' && settlementDetails && (
          <div className={styles.settlementLog}>
            <VrfSignature signature={settlementDetails} />
          </div>
        )}
      </div>

      <div className={styles.overlayGradient}></div>

      {/* FOREGROUND LAYER — Headline Stack */}
      <div className={styles.container}>
        <div className={styles.headlineStack}>
          <div className={styles.eyebrow}>
            ● ROUND #{roundNumber.toLocaleString()} LIVE · 41 MINERS IN
          </div>
          
          <h1 className={styles.title}>
            The round is live.<br />
            Are you in it?
          </h1>
          
          <p className={styles.subhead}>
            25 blocks. One VRF. Two ways to win.<br />
            Every round runs with or without you.
          </p>
          
          <div className={styles.ctaGroup}>
            <a 
              href="https://tipf.ai/mine" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`${styles.heroBtnPrimary} btn-primary`}
            >
              Enter the Arena →
            </a>
            <a href="#vrf-engine" className="btn-secondary">
              Watch how it works ↓
            </a>
          </div>

          <div className={styles.liveStatStrip}>
            <span>96% win rate · Stable Pool</span>
            <span className={styles.separator}>·</span>
            <span>24× upside · Aggressive Pool</span>
            <span className={styles.separator}>·</span>
            <span>11,140 TIPF · Motherlode</span>
          </div>
        </div>
      </div>
    </section>
  );
}
