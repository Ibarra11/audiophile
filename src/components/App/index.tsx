import React from 'react';
import { AppContainer } from './styles';
import HeaderHero from '../HeaderHero';
import ProductNav from '../ProductNav';
import ProductShowcase from '../ProductShowcase';
import ProductList from '../ProductList';
import ImpactMessage from '../ImpactMessage';
import MobileHeader from '../MobileHeader';
import Footer from '../Footer';
import { Switch, Route } from 'react-router-dom';
const App = () => {
  return (
    <AppContainer>
      <MobileHeader />
      <Switch>
        <Route path="/headphones">
          <ProductList listType="headphones" />
        </Route>
        <Route path="/speakers">
          <ProductList listType="speakers" />
        </Route>
        <Route path="/earphones">
          <ProductList listType="earphones" />
        </Route>
        <Route path="/">
          <HeaderHero></HeaderHero>
        </Route>
      </Switch>
      <ProductNav />
      <ProductShowcase />
      <ImpactMessage />
      <Footer />
    </AppContainer>
  );
};

export default App;
