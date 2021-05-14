import React from 'react';
import styles from '../assets/styles/components/Spec.module.scss';

const Spec = () => {
  return (
    <div className={styles.specs}>
      <h2>Specifications.</h2>
      <hr />
      <h3>Dimensions</h3>
      <p>76.8 x 43.8 x 34.7 mm (earbuds and charging case)</p>
      <hr />
      <h3>USB Standard</h3>
      <p>USB-C</p>
      <hr />
      <h3>Power supply</h3>
      <p>Sennheiser 7mm dynamic driver</p>
      <hr />
      <h3>Frequency response (Microphone)</h3>
      <p>100 Hz to 10 kHz</p>
      <hr />
      <h3>Frequency response</h3>
      <p>5 - 21,000 Hz</p>
      <hr />
      <h3>Noise cancellation</h3>
      <p>Single-Mic ANC per earbud side</p>
      <hr />
    </div>
  );
};

export default Spec;
