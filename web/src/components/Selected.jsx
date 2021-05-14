import React, { useState } from 'react';

import styles from '../assets/styles/components/Selected.module.scss';

const Select = ({ title, description, price }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    if (isActive === true) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };
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
      {price ? <p className={styles.price}>+${price}</p> : null}
    </div>
  );
};

export default Select;
