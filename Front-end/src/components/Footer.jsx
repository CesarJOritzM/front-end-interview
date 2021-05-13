import React from 'react';
import styles from '../assets/styles/components/Footer.module.scss';

const footer = () => {
  return (
    <div className={styles.container}>
      <p>$295.95</p>
      <a href="#"> Need financing? Learn more </a>
      <button>Buy now</button>
    </div>
  );
};

export default footer;
