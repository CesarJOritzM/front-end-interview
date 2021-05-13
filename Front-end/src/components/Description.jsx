import React from 'react';
import styles from '../assets/styles/components/Description.module.scss';

const description = () => {
  return (
    <>
      <section className={styles.header}>
        <p className={styles.new}>New release</p>
        <h1 className={styles.title}>MOMENTUM True Wireless 2</h1>
        <p className={styles.description}>Earbuds that put sound first</p>
        <div className={styles.price}>
          <p>Starting at</p>
          <p>$295.95</p>
        </div>
      </section>
    </>
  );
};

export default description;
