import React from 'react';
import Advantajes from './Advantajes';
import Selections from './Selections';
import Spec from './Spec';

import styles from '../assets/styles/components/Description.module.scss';

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
const color = [
  {
    title: 'Ivory White',
    description:
      'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True. ',
  },
  {
    title: 'Matte Black',
    description:
      'Of all of the celestial bodies that capture our attention and fascination as astronomers.',
  },
];
const warranties = [
  {
    title: '2 years coverage',
    description: 'For the past 75 years, Sennheiser has put sound first.',
    price: 0,
  },
  {
    title: '3 years coverage',
    description: 'For the past 75 years, Sennheiser has put sound first.',
    price: 75,
  },
];
const features = [
  {
    title: 'Voice Assistant support',
    price: 0,
  },
  {
    title: 'Customizable controls',
    price: 25,
  },
];

const description = () => {
  return (
    <>
      <section className={styles.header}>
        <p className={styles.new}>New release</p>
        <h1 className={styles.title}>MOMENTUM True Wireless 2</h1>
        <p className={styles.description}>Earbuds that put sound first</p>
        <div className={styles.price}>
          <p>Starting at</p>
          <p>$295.95</p>
        </div>
      </section>
      <section>
        {advData.map((adv, index) => {
          return (
            <Advantajes
              key={index}
              description={adv.description}
              imgUrl={adv.imgUrl}
            />
          );
        })}
      </section>
      <section>
        <Selections data={color}>Choose your finish.</Selections>
      </section>
      <section>
        <Selections data={warranties}>
          Would you like to add extended warranty coverage?.
        </Selections>
      </section>
      <section>
        <Selections data={features}>Features</Selections>
      </section>
      <Spec />
    </>
  );
};

export default description;
