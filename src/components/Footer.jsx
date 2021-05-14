import React from 'react';
import styles from '../assets/styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <p>$295.95</p>
        <a href="#"> Need financing? Learn more </a>
        <button>Buy now</button>
      </div>
    </div>
  );
};

export default Footer;
