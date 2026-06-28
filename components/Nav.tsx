import React from 'react';
import styles from '../styles/Nav.module.css';

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          [TIPF]
        </div>
        <a 
          href="https://tipf.ai/mine" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-secondary"
          style={{ padding: '8px 16px', fontSize: '13px' }}
        >
          Open dApp ↗
        </a>
      </div>
    </nav>
  );
}
