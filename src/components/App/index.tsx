import React, { useEffect } from 'react';
import { AppContainer } from './styles';
import HeaderHero from '../HeaderHero';
import ProductNav from '../ProductNav';
import ProductShowcase from '../ProductShowcase';
import ProductList from '../ProductList';
import ImpactMessage from '../ImpactMessage';
import MobileHeader from '../MobileHeader';
import Footer from '../Footer';
import { Switch, Route, useLocation } from 'react-router-dom';

function ScrollToTop({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
}

const App = () => {
  return (
    <AppContainer>
      <MobileHeader />
      <ScrollToTop>
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
      </ScrollToTop>
      <ProductNav />
      <ProductShowcase />
      <ImpactMessage />
      <Footer />
    </AppContainer>
  );
};

export default App;
