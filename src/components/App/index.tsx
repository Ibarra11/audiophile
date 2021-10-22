import React from 'react';
import { AppContainer } from './styles';
import Header from '../Header';
import Products from '../Products';
const App = () => {
  return (
    <AppContainer>
      <Header />
      <Products />
    </AppContainer>
  );
};

export default App;
