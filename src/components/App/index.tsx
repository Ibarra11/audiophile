import React from 'react';
import { AppContainer } from './styles';
import HeaderHero from '../HeaderHero';
import ProductNav from '../ProductNav';
import ProductShowcase from '../ProductShowcase';
import ImpactMessage from '../ImpactMessage';
import MobileMenu from '../MobileNav';
import MobileHeader from '../MobileHeader';
import Footer from '../Footer';
const App = () => {
  return (
    <AppContainer>
      <HeaderHero>
        <MobileHeader />
      </HeaderHero>
      <ProductNav />
      <ProductShowcase />
      <ImpactMessage />
      <Footer />
    </AppContainer>
  );
};

export default App;
