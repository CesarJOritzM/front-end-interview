import React from 'react';
import IntroSlider from './IntroSlider';
import Description from './Description';

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
// const data = {
//   title: 'MOMENTUM True Wireless 2',
//   description:
//     'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.,',
//   price: 295.95,
//   specifications: {
//     dimensions: "76.8 x 43.8 x 34.7 mm (earbuds and charging case)",
//     USB: "USB-C",
//     Powersupply:"Sennheiser 7mm dynamic driver",
//     Frequency: "100 Hz to 10 kHz"
//   }
// };
const Outstanding = () => {
  return (
    <div className={styles.container}>
      <IntroSlider data={imgData} />
      <Description />
    </div>
  );
};

export default Outstanding;
