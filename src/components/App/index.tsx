import React from 'react';
import { AppContainer } from './styles';
import HeaderHero from '../HeaderHero';
import ProductNav from '../ProductNav';
import ProductShowcase from '../ProductShowcase';
import ImpactMessage from '../ImpactMessage';
import MobileHeader from '../MobileHeader';
import Footer from '../Footer';
import { Switch, Route, Link } from 'react-router-dom';
const App = () => {
  return (
    <AppContainer>
      <MobileHeader />

      <Switch>
        <Route path="/headphones">
          <h1>Headphones</h1>
        </Route>
        <Route path="/speakers">
          <h1>Speakers</h1>
        </Route>
        <Route path="/earphones">
          <h1>Earphones</h1>
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
