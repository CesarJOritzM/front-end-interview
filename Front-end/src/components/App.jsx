import React from 'react';
import Header from './Header';
import Product from './Product';
import Description from './Description';
import Footer from './Footer';
import '../assets/styles/components/GlobalStyles.scss';

const App = () => {
  return (
    <>
      <Header />
      <Product />
      <Description />
      <Footer />
    </>
  );
};

export default App;
