import React from 'react';
import Logo from '../assets/images/logo.png';

import styles from '../assets/styles/components/Header.module.scss';

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={Logo} alt="Logo" />
    </header>
  );
};

export default Header;
