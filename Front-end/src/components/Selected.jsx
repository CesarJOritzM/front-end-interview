import React, { useState } from 'react';

import styles from '../assets/styles/components/Selected.module.scss';

const Select = ({ title, description, price, active }) => {
  const [isActive, setIsActive] = useState(active);
  const handleClick = () => {
    setIsActive(!isActive);
  };
  if (!price) {
    return (
      <div
        onClick={handleClick}
        className={
          isActive
            ? `${styles.container} ${styles.desactive}`
            : `${styles.container} ${styles.active}`
        }
      >
        <p className={styles.title}>{title}</p>
        <p className={styles.content}>{description}</p>
      </div>
    );
  }
  return (
    <div
      onClick={handleClick}
      className={
        isActive
          ? `${styles.priceContent} ${styles.active}`
          : `${styles.priceContent} ${styles.desactive}`
      }
    >
      <p className={styles.title}>{title}</p>
      <p className={styles.content}>{description}</p>
      <p className={styles.price}>{price}</p>
    </div>
  );
};

export default Select;
