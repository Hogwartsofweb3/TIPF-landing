'use client';

import React, { useState, useEffect, useRef } from 'react';

interface VrfSignatureProps {
  signature: string; // e.g. "5x8mQ2rPkL9nVw...a3f8c912" or "5xVRf...mK9a"
  className?: string;
}

export default function VrfSignature({ signature, className }: VrfSignatureProps) {
  const [typedText, setTypedText] = useState('');
  const [hasStarted, setHasStarted] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  const isSplit = signature.includes('...');
  const prefix = isSplit ? signature.split('...')[0] + '...' : signature.slice(0, -8);
  const suffix = isSplit ? signature.split('...')[1] : signature.slice(-8);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.8 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < suffix.length) {
        setTypedText((prev) => prev + suffix[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [hasStarted, suffix]);

  return (
    <span ref={containerRef} className={className} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
      <span>{prefix}</span>
      <span style={{ color: 'var(--color-accent-proof)' }}>{typedText}</span>
      {!hasStarted && <span style={{ opacity: 0 }}>{suffix}</span>}
      {hasStarted && typedText.length < suffix.length && (
        <span style={{ opacity: 0 }}>{suffix.slice(typedText.length)}</span>
      )}
    </span>
  );
}
