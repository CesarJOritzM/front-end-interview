import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import IntroStep from './IntroStep';
import styles from '../assets/styles/components/IntroSlider.module.scss';
import Dots from './Dots';

import img1 from '../assets/images/Detail.png';
import img2 from '../assets/images/Detail2.png';
import img3 from '../assets/images/Momentum.png';

const data = [
  {
    title: 'Momentun airDots',
    imageUrl: img3,
  },
  {
    title: 'Detail',
    imageUrl: img2,
  },
  {
    title: 'Momentum Case',
    imageUrl: img1,
  },
];

const IntroSlider = () => {
  let touchStartX = 0;
  let touchStartY = 0;
  let touchEndX = 0;
  let touchEndY = 0;
  function WhatImustDo() {
    // Put a mensage in the console
    if (touchEndX < touchStartX) {
      return 'left';
    }
    if (touchEndX > touchStartX) {
      return 'right';
    }
    if (touchEndY < touchStartY) {
      return 'down';
    }
    if (touchEndY > touchStartY) {
      return 'up';
    }
    if (touchEndY === touchStartY && touchEndX === touchStartX) {
      return 'tap';
    }
  }
  const [current, setCurrent] = useState(0);
  let myTimeout;

  const { length } = data;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
    clearTimeout(myTimeout);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
    clearTimeout(myTimeout);
  };
  useEffect(() => {
    myTimeout = setTimeout(() => {
      nextSlide();
    }, 10000);
  }, [nextSlide, prevSlide]);

  return (
    <>
      <section
        className={styles.IntroSlider}
        onTouchStart={(e) => {
          touchStartX = e.changedTouches[0].screenX;
          touchStartY = e.changedTouches[0].screenY;
        }}
        onTouchEnd={(e) => {
          touchEndX = e.changedTouches[0].screenX;
          touchEndY = e.changedTouches[0].screenY;
          const direction = WhatImustDo();
          if (direction === 'left') {
            nextSlide();
          }
          if (direction === 'right') {
            prevSlide();
          }
        }}
      >
        <FaChevronRight className={styles.leftArrow} onClick={nextSlide} />
        <FaChevronLeft className={styles.RightArrow} onClick={prevSlide} />

        {data.map((step, index) => (
          <IntroStep
            index={index}
            current={current}
            key={index}
            imageUrl={step.imageUrl}
            content={step.title}
            data={data}
          />
        ))}
      </section>
      <Dots current={current} data={data} />
    </>
  );
};

export default IntroSlider;
