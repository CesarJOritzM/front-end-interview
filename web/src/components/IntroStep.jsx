import React from 'react';
import styles from '../assets/styles/components/IntroStep.module.scss';

const IntroStep = ({ imageUrl, content, index, current }) => {
  if (index === current) {
    return (
      <>
        <div className={styles.IntroStep}>
          <div className={styles.imageContainer}>
            <img src={imageUrl} alt={content} />
          </div>
        </div>
      </>
    );
  }
  return null;
};

export default IntroStep;
