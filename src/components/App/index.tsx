import React from 'react';
import { AppContainer } from './styles';
import Header from '../Header';
import ProductCategories from '../ProductCategories';
import ProductShowcase from '../ProductShowcase';
const App = () => {
  return (
    <AppContainer>
      <Header />
      <ProductCategories />
      <ProductShowcase />
    </AppContainer>
  );
};

export default App;
