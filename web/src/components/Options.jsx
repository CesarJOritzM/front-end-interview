import React from 'react';
import Selections from './Selections';

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
  },
  {
    title: 'Customizable controls',
    price: 25,
  },
];

const Options = () => {
  return (
    <>
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
    </>
  );
};

export default Options;
