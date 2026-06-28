'use client';

import React, { useEffect, useState } from 'react';

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [supportTimeline, setSupportTimeline] = useState(true);

  useEffect(() => {
    const checkTimelineSupport = () => {
      if (typeof window !== 'undefined' && 'CSS' in window) {
        return window.CSS.supports('animation-timeline', 'scroll()');
      }
      return false;
    };

    const isSupported = checkTimelineSupport();
    setSupportTimeline(isSupported);

    if (!isSupported) {
      const handleScroll = () => {
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        if (totalHeight > 0) {
          setProgress((window.scrollY / totalHeight) * 100);
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        height: '2px',
        backgroundColor: 'var(--color-accent-primary)',
        zIndex: 9999,
        width: '100%',
        transformOrigin: '0% 50%',
        ...(supportTimeline
          ? {
              animation: 'growProgress auto linear',
              animationTimeline: 'scroll()',
            }
          : {
              transform: `scaleX(${progress / 100})`,
            }),
      }}
    >
      <style jsx global>{`
        @keyframes growProgress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </div>
  );
}
