import React from 'react';
import Advantage from './Advantage';

import styles from '../assets/styles/components/Advantages.module.scss';

import touch from '../assets/images/Path@3x.png';
import sound from '../assets/images/Combined Shape@3x.png';
import equlizer from '../assets/images/Shape@3x.png';

const advData = [
  {
    description: 'Customizable Touch Controls ',
    imgUrl: touch,
  },
  {
    description: 'Active Noise Cancellation',
    imgUrl: sound,
  },
  {
    description: 'Built-in Equalizer',
    imgUrl: equlizer,
  },
];

const advantage = () => {
  return (
    <div className={styles.container}>
      {advData.map((adv, index) => {
        return (
          <Advantage
            key={index}
            description={adv.description}
            imgUrl={adv.imgUrl}
          />
        );
      })}
    </div>
  );
};

export default advantage;
