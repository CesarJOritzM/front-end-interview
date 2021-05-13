import React from 'react';
import styles from '../assets/styles/components/Dots.module.scss';

const Dots = ({ data, current, handleClick }) => {
  return (
    <div className={styles.Container}>
      {data.map((step, index) => {
        return (
          <div
            key={index}
            className={
              current === index ? `${styles.active}` : styles.desactive
            }
          >
            <img src={step.imageUrl} alt={step.title} />
          </div>
        );
      })}
    </div>
  );
};

export default Dots;
