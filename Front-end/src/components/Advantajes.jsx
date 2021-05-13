import React from 'react';
import styles from '../assets/styles/components/Advantajes.module.scss';

const advantajes = ({ description, imgUrl }) => {
  return (
    <div className={styles.container}>
      <img src={imgUrl} alt="" />
      <p>{description}</p>
    </div>
  );
};

export default advantajes;
