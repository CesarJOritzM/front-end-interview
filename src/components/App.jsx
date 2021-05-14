import React from 'react';
import Header from './Header';
import IntroSlider from './IntroSlider';
import Tabs from './Tabs';
import Advantages from './Advantages';
import Options from './Options';
import Spec from './Spec';
import Footer from './Footer';

import '../assets/styles/global.scss';

const App = () => {
  return (
    <>
      <div className="wrapper">
        <Header />
        <IntroSlider />
        <Tabs />
        <Advantages />
        <Options />
        <Spec />
      </div>
      <Footer />
    </>
  );
};

export default App;
