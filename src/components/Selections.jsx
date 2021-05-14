import React from 'react';
import Selected from './Selected';
import styles from '../assets/styles/components/Selections.module.scss';

const Selections = ({ children, data }) => {
  return (
    <div className={styles.selections}>
      <h2 className={styles.head}>{children}</h2>
      {data.map((el, index) => {
        return (
          <Selected
            key={index}
            title={el.title}
            description={el.description}
            price={el.price}
          />
        );
      })}
    </div>
  );
};

export default Selections;
