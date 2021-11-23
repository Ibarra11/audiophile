import React, { useEffect } from 'react';
import ShoppingCartProvider from '../../context/ShoppingCartContext';
import { AppContainer } from './styles';
import HeaderHero from '../HeaderHero';
import ProductNav from '../ProductNav';
import ProductShowcase from '../ProductShowcase';
import ProductList from '../ProductList';
import ImpactMessage from '../ImpactMessage';
import MobileHeader from '../MobileHeader';
import Footer from '../Footer';
import Product from '../Product';
import { Routes, Route, useLocation } from 'react-router-dom';

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
      <ShoppingCartProvider>
        <MobileHeader />
        <ScrollToTop>
          <Routes>
            <Route
              path="/headphones/:headphone/:id"
              element={<Product productType="headphones" />}
            />
            <Route
              path="/speakers/:speaker/:id"
              element={<Product productType="speakers" />}
            />
            <Route
              path="/earphones/:earphone/:id"
              element={<Product productType="earphones" />}
            />
            <Route
              path="/headphones"
              element={<ProductList productType="headphones" />}
            ></Route>
            <Route
              path="/speakers"
              element={<ProductList productType="speakers" />}
            ></Route>
            <Route
              path="/earphones"
              element={<ProductList productType="earphones" />}
            ></Route>
            <Route path="/" element={<HeaderHero />} />
            <Route path="*" element={<HeaderHero />} />
          </Routes>
        </ScrollToTop>
      </ShoppingCartProvider>

      <ProductNav />
      <ProductShowcase />
      <ImpactMessage />
      <Footer />
    </AppContainer>
  );
};

export default App;
