import React from 'react';
import styles from '../assets/styles/components/Advantage.module.scss';

const Advantage = ({ description, imgUrl }) => {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt={description} />
      <p>{description}</p>
    </div>
  );
};

export default Advantage;
