import React from 'react';
import { AppContainer } from './styles';
import Header from '../Header';
import ProductCategories from '../ProductCategories';
import ProductShowcase from '../ProductShowcase';
import ImpactMessage from '../ImpactMessage';
import Footer from '../Footer';
const App = () => {
  return (
    <AppContainer>
      <Header />
      <ProductCategories />
      <ProductShowcase />
      <ImpactMessage />
      <Footer />
    </AppContainer>
  );
};

export default App;
