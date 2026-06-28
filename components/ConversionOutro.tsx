import React from 'react';
import styles from '../styles/ConversionOutro.module.css';

export default function ConversionOutro() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.headline}>The proof is on-chain.<br />The round is live.</h2>
        
        <div className={styles.buttonRow}>
          <a 
            href="https://tipf.ai/mine" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn-primary"
          >
            Start Mining →
          </a>
          <a 
            href="https://tipf-1.gitbook.io/tipf-docs" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.docsLink}
          >
            Read the Docs
          </a>
        </div>
      </div>

      {/* Footer component built in */}
      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLeft}>
            [TIPF]
          </div>
          <div className={styles.footerCenter}>
            Built on Solana * Magicblock VRF * Audited by Zenith
          </div>
          <div className={styles.footerRight}>
            <a 
              href="https://x.com/TIPF_AI" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.footerLink}
            >
              x.com/TIPF_AI
            </a>
            <span className={styles.footerDivider}>|</span>
            <a 
              href="https://tipf-1.gitbook.io/tipf-docs" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.footerLink}
            >
              Docs
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
}
