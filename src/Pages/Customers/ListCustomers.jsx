import React from 'react';
import styles from './style.module.css';

export const ListCustomers = () => {
  return (
    <div className={`${styles['register-container']} ${styles['container']}`}>
      <div className={styles['register-header']}></div>

      <div className={styles['main']}>
        <div className={styles['title']}>
          <div className={styles['arrow']}></div>
          <h2 className={styles['form-title']}>Tarjetas de clientes</h2>
        </div>

        <div className={styles['section-tarjetas']}>
          <div className={styles['trj']}>
            <div className={styles['trj-img']}></div>
            <h2>Tarjeta 1</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

