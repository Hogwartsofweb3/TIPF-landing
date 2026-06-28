'use client';

import React, { useState, useEffect } from 'react';
import styles from '../styles/LiveFeed.module.css';

interface FeedItem {
  id: string;
  pool: 'AGGRESSIVE' | 'STABLE';
  block: number;
  sol: string;
  miners: number;
  hash: string;
  secondsAgo: number;
  type: 'regular' | 'motherlode_miss' | 'motherlode_hit';
  tipfAmount?: number;
}

export default function LiveFeed() {
  const [items, setItems] = useState<FeedItem[]>([]);
  const [roundNumber, setRoundNumber] = useState(79824);

  // Generate a mock item on the fly
  const generateMockItem = (secondsAgo: number, forceType?: 'motherlode_miss' | 'motherlode_hit'): FeedItem => {
    const isAggressive = Math.random() > 0.5;
    const block = Math.floor(Math.random() * 25) + 1;
    const sol = (Math.random() * 0.34 + 0.01).toFixed(2);
    const miners = Math.floor(Math.random() * 45) + 5;
    const hash = '5xVRf' + Math.random().toString(36).substring(2, 6) + '...' + Math.random().toString(36).substring(2, 6);
    
    let type: 'regular' | 'motherlode_miss' | 'motherlode_hit' = 'regular';
    if (forceType) {
      type = forceType;
    } else {
      const rand = Math.random();
      // ~10% chance of miss, ~1% chance of hit
      if (rand < 0.12) {
        type = 'motherlode_miss';
      } else if (rand > 0.985) {
        type = 'motherlode_hit';
      }
    }

    return {
      id: Math.random().toString(36).substring(2, 9),
      pool: isAggressive ? 'AGGRESSIVE' : 'STABLE',
      block,
      sol,
      miners,
      hash,
      secondsAgo,
      type,
      tipfAmount: type === 'motherlode_hit' ? Math.floor(Math.random() * 5000) + 1000 : undefined
    };
  };

  // Pre-seed initial list
  useEffect(() => {
    const initialList: FeedItem[] = [
      generateMockItem(4),
      generateMockItem(10, 'motherlode_miss'),
      generateMockItem(18),
      generateMockItem(26),
      generateMockItem(34),
      generateMockItem(45),
    ];
    setItems(initialList);
  }, []);

  // Timer to increment secondsAgo
  useEffect(() => {
    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) => ({
          ...item,
          secondsAgo: item.secondsAgo + 1
        }))
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  // Timer to add new items every 6-8 seconds
  useEffect(() => {
    let timer: NodeJS.Timeout;

    const scheduleNext = () => {
      const delay = Math.random() * 2000 + 6000; // 6-8 seconds
      timer = setTimeout(() => {
        const newItem = generateMockItem(0);
        setItems((prev) => [newItem, ...prev.slice(0, 10)]); // Keep list capped
        setRoundNumber((prev) => prev + 1);
        scheduleNext();
      }, delay);
    };

    // Delay start slightly to wait for pre-seed
    const startTimeout = setTimeout(() => {
      scheduleNext();
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearTimeout(startTimeout);
    };
  }, []);

  const formatTimeAgo = (seconds: number) => {
    if (seconds < 60) return `${seconds}s ago`;
    const mins = Math.floor(seconds / 60);
    return `${mins}m ago`;
  };

  return (
    <div className={styles.sidebar}>
      {/* Header Strip */}
      <div className={styles.header}>
        <span className={styles.title}>● LIVE FEED</span>
        <span className={styles.round}>Round #{roundNumber.toLocaleString()}</span>
      </div>

      {/* Feed List */}
      <div className={styles.feedList}>
        {items.map((item) => {
          if (item.type === 'motherlode_miss') {
            return (
              <div key={item.id} className={styles.motherlodeMissItem}>
                <div className={styles.itemTop}>
                  <span className={styles.missText}>🔒 Motherlode missed</span>
                  <span className={styles.timestamp}>{formatTimeAgo(item.secondsAgo)}</span>
                </div>
                <div className={styles.missSub}>+20 TIPF accumulated</div>
              </div>
            );
          }

          if (item.type === 'motherlode_hit') {
            return (
              <div key={item.id} className={styles.motherlodeHitItem}>
                <div className={styles.itemTop}>
                  <span className={styles.hitText}>💥 JACKPOT TRIGGERED</span>
                  <span className={styles.timestamp}>{formatTimeAgo(item.secondsAgo)}</span>
                </div>
                <div className={styles.hitSub}>
                  +{item.tipfAmount?.toLocaleString()} TIPF released
                </div>
              </div>
            );
          }

          // Regular Item
          return (
            <div key={item.id} className={styles.item}>
              <div className={styles.itemTop}>
                <div className={styles.tagWrapper}>
                  <span className={item.pool === 'AGGRESSIVE' ? styles.tagAggressive : styles.tagStable}>
                    {item.pool}
                  </span>
                  <span className={styles.blockWin}>Block #{item.block} wins</span>
                </div>
                <span className={styles.timestamp}>{formatTimeAgo(item.secondsAgo)}</span>
              </div>
              
              <div className={styles.itemMiddle}>
                +{item.sol} SOL · {item.miners} miners · VRF ✓
              </div>

              <div className={styles.itemBottom}>
                {item.hash}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
