import React from 'react';
import IntroSlider from './IntroSlider';

import styles from '../assets/styles/components/Product.module.scss';
import img1 from '../assets/images/Momentum.png';
import img2 from '../assets/images/Detail2.png';
import img3 from '../assets/images/Detail.png';

const imgData = [
  {
    title: 'MOMENTUM true wireless 2',
    imageUrl: img1,
  },
  {
    title: 'MOMENTUN detail',
    imageUrl: img2,
  },
  {
    title: 'MOMENTUM Case',
    imageUrl: img3,
  },
];
const Outstanding = () => {
  return (
    <div className={styles.container}>
      <IntroSlider data={imgData} />
    </div>
  );
};

export default Outstanding;
