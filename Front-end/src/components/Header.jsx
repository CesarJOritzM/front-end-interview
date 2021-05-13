import React from 'react';
import Logo from '../assets/images/download@3x.png';
import styles from '../assets/styles/components/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={Logo} alt="Logo" />
    </header>
  );
};

export default Header;
