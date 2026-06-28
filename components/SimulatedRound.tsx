'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/SimulatedRound.module.css';

interface ConfettiParticle {
  id: number;
  x: string;
  y: string;
  r: string;
  color: string;
}

export default function SimulatedRound() {
  const [pool, setPool] = useState<'aggressive' | 'stable'>('aggressive');
  const [selectedBlocks, setSelectedBlocks] = useState<number[]>([]);
  const [sequenceStep, setSequenceStep] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [vrfMessage, setVrfMessage] = useState('');
  const [winningBlock, setWinningBlock] = useState<number | null>(null);
  const [loserBlock, setLoserBlock] = useState<number | null>(null); // For stable pool
  const [gameResult, setGameResult] = useState<'win' | 'lose' | null>(null);
  const [confetti, setConfetti] = useState<ConfettiParticle[]>([]);
  const [winAmount, setWinAmount] = useState('');

  const maxSelections = pool === 'aggressive' ? 3 : 5;

  // Reset grid when switching pools
  const handlePoolChange = (newPool: 'aggressive' | 'stable') => {
    setPool(newPool);
    handleReset();
  };

  const handleBlockClick = (index: number) => {
    if (sequenceStep > 0) return; // Prevent clicking during animation

    if (selectedBlocks.includes(index)) {
      setSelectedBlocks((prev) => prev.filter((i) => i !== index));
    } else {
      if (selectedBlocks.length >= maxSelections) {
        // FIFO queue: deselect first and append new
        setSelectedBlocks((prev) => [...prev.slice(1), index]);
      } else {
        setSelectedBlocks((prev) => [...prev, index]);
      }
    }
  };

  const handleReset = () => {
    setSelectedBlocks([]);
    setSequenceStep(0);
    setVrfMessage('');
    setWinningBlock(null);
    setLoserBlock(null);
    setGameResult(null);
    setConfetti([]);
  };

  const triggerConfetti = () => {
    const particles: ConfettiParticle[] = [];
    const colors = ['#F59E0B', '#9B5CF6', '#14C184', '#EF4444'];
    for (let i = 0; i < 20; i++) {
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 80 + 40;
      const x = `${Math.cos(angle) * distance}px`;
      const y = `${Math.sin(angle) * distance - 60}px`;
      const r = `${Math.random() * 360}deg`;
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push({ id: i, x, y, r, color });
    }
    setConfetti(particles);
  };

  const handleFireVrf = () => {
    if (selectedBlocks.length === 0) return;

    // Step 1: Requesting randomness
    setSequenceStep(1);
    setVrfMessage('Requesting randomness from Magicblock oracle...');

    // Step 2: Proof generated (800ms)
    setTimeout(() => {
      setSequenceStep(2);
      setVrfMessage('Proof generated · Curve25519 · RFC 9381');
    }, 800000 / 1000); // 800ms

    // Step 3: VRF Fires (1400ms)
    setTimeout(() => {
      setSequenceStep(3);
      
      const allIndices = Array.from({ length: 25 }, (_, i) => i);

      if (pool === 'aggressive') {
        // Aggressive Pool logic: 1 winner out of 25.
        // We do a weighted random: 40% chance of choosing one of user's selected blocks
        // 60% chance of choosing from all 25 blocks.
        const isWeightedWin = Math.random() < 0.4;
        let chosenWinner: number;

        if (isWeightedWin && selectedBlocks.length > 0) {
          chosenWinner = selectedBlocks[Math.floor(Math.random() * selectedBlocks.length)];
        } else {
          chosenWinner = Math.floor(Math.random() * 25);
        }

        setWinningBlock(chosenWinner);

        if (selectedBlocks.includes(chosenWinner)) {
          setGameResult('win');
          const solWin = (Math.random() * 10 + 2).toFixed(2); // Higher payout for Aggressive
          setWinAmount(solWin);
          triggerConfetti();
          setVrfMessage(`+${solWin} SOL · Block #${chosenWinner + 1} · VRF verified ✓`);
        } else {
          setGameResult('lose');
          setVrfMessage(`Block #${chosenWinner + 1} wins · Your blocks earn TIPF rewards`);
        }
      } else {
        // Stable Pool logic: 24 winners, 1 single loser.
        // User wins if none of their selected blocks is the single loser block.
        // To make selected blocks almost always win, we set a 95% probability
        // that the single loser block is chosen from the non-selected blocks.
        let chosenLoser: number;
        const nonSelected = allIndices.filter(i => !selectedBlocks.includes(i));
        
        if (Math.random() < 0.95 && nonSelected.length > 0) {
          chosenLoser = nonSelected[Math.floor(Math.random() * nonSelected.length)];
        } else {
          chosenLoser = Math.floor(Math.random() * 25);
        }

        setLoserBlock(chosenLoser);

        const isUserLoser = selectedBlocks.includes(chosenLoser);
        if (!isUserLoser) {
          setGameResult('win');
          const solWin = (Math.random() * 0.15 + 0.02).toFixed(3); // Consistent small rewards
          setWinAmount(solWin);
          triggerConfetti();
          setVrfMessage(`+${solWin} SOL · Stable compound successful · VRF verified ✓`);
        } else {
          setGameResult('lose');
          setVrfMessage(`Block #${chosenLoser + 1} was the losing block · Your blocks split TIPF rewards`);
        }
      }
    }, 1400);

    // Step 4: Outro CTA (2400ms)
    setTimeout(() => {
      setSequenceStep(4);
    }, 2400);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Pool Toggle */}
        <div className={styles.toggleRow}>
          <button 
            className={`${styles.toggleBtn} ${pool === 'aggressive' ? styles.toggleBtnActive : ''}`}
            onClick={() => handlePoolChange('aggressive')}
          >
            ⚡ Aggressive — 4% win rate
          </button>
          <button 
            className={`${styles.toggleBtn} ${pool === 'stable' ? styles.toggleBtnActive : ''}`}
            onClick={() => handlePoolChange('stable')}
          >
            🛡 Stable — 96% win rate
          </button>
        </div>

        {/* Instruction Line */}
        <div className={styles.instruction}>
          Click up to [{maxSelections}] blocks to stake your position. Then watch the VRF fire.
        </div>

        {/* Interactive Block Grid */}
        <div className={styles.gridWrapper}>
          <div className={styles.grid}>
            {Array.from({ length: 25 }).map((_, i) => {
              const isSelected = selectedBlocks.includes(i);
              const isAggressiveWinner = pool === 'aggressive' && winningBlock === i;
              const isStableLoser = pool === 'stable' && loserBlock === i;
              
              let blockClass = styles.block;
              if (sequenceStep >= 3) {
                if (pool === 'aggressive') {
                  if (isAggressiveWinner) {
                    blockClass = `${styles.block} ${styles.winnerBlock}`;
                  } else if (isSelected) {
                    blockClass = `${styles.block} ${styles.selectedLoser}`;
                  } else {
                    blockClass = `${styles.block} ${styles.dimmed}`;
                  }
                } else {
                  // Stable Pool
                  if (isStableLoser) {
                    blockClass = `${styles.block} ${styles.stableLoserBlock}`;
                  } else if (isSelected) {
                    blockClass = `${styles.block} ${styles.winnerBlock}`;
                  } else {
                    blockClass = `${styles.block} ${styles.dimmed}`;
                  }
                }
              } else if (isSelected) {
                blockClass = `${styles.block} ${styles.selected}`;
              }

              return (
                <div 
                  key={i} 
                  className={blockClass} 
                  onClick={() => handleBlockClick(i)}
                >
                  {/* Selected Dot Indicator */}
                  {isSelected && sequenceStep < 3 && (
                    <span className={styles.dotIndicator}></span>
                  )}

                  {/* WIN/LOSE text indicator */}
                  {sequenceStep >= 3 && (
                    <>
                      {pool === 'aggressive' && isAggressiveWinner && isSelected && (
                        <span className={styles.winLabel}>⚡ WIN</span>
                      )}
                      {pool === 'aggressive' && isAggressiveWinner && !isSelected && (
                        <span className={styles.winLabel}>⚡ WIN</span>
                      )}
                      {pool === 'stable' && isSelected && !isStableLoser && (
                        <span className={styles.winLabel}>⚡ WIN</span>
                      )}
                      {pool === 'stable' && isStableLoser && (
                        <span className={styles.loseLabel}>✖ LOSE</span>
                      )}
                    </>
                  )}

                  {/* Confetti Explosion source on winning block */}
                  {gameResult === 'win' && isSelected && sequenceStep >= 3 && (
                    <div className={styles.confettiSource}>
                      {confetti.map((c) => (
                        <div 
                          key={c.id} 
                          className={styles.confettiParticle} 
                          style={{
                            '--x': c.x,
                            '--y': c.y,
                            '--r': c.r,
                            backgroundColor: c.color
                          } as React.CSSProperties}
                        ></div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* FIRE VRF BUTTON */}
        <div className={styles.actionContainer}>
          {selectedBlocks.length > 0 && sequenceStep === 0 && (
            <button 
              className="btn-primary" 
              style={{ width: '100%', maxWidth: '292px' }}
              onClick={handleFireVrf}
            >
              Fire VRF →
            </button>
          )}

          {/* Firing Status / Output messages */}
          {sequenceStep > 0 && (
            <div className={`${styles.statusMessage} ${sequenceStep >= 3 && gameResult === 'win' ? styles.statusWin : ''}`}>
              {vrfMessage}
            </div>
          )}
        </div>

        {/* Phase 4: Try it for real Outro */}
        {sequenceStep === 4 && (
          <div className={styles.outroContainer}>
            <p className={styles.outroLabel}>Try it for real. Your SOL. Real VRF.</p>
            <div className={styles.outroActions}>
              <a 
                href="https://tipf.ai/mine" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary"
              >
                Connect Wallet → tipf.ai/mine
              </a>
              <button className={styles.retryBtn} onClick={handleReset}>
                Try another round ↺
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
