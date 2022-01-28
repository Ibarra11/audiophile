import React, { useEffect } from 'react';
import ShoppingCartProvider from '../../context/ShoppingCartContext';
import { AppContainer } from './styles';
import ProductNav from '../ProductNav';
import ProductShowcase from '../ProductShowcase';
import ProductList from '../ProductList';
import ImpactMessage from '../ImpactMessage';
import Landing from '../Landing';
import Header from '../Header';
import Footer from '../Footer';
import Product from '../Product';
import CheckoutForm from '../CheckoutForm';
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
        <Header />
        <ScrollToTop>
          <Routes>
            <Route
              path="/headphones/:headphones/:id"
              element={<Product productType="headphones" />}
            />
            <Route
              path="/speakers/:speakers/:id"
              element={<Product productType="speakers" />}
            />
            <Route
              path="/earphones/:earphones/:id"
              element={<Product productType="earphones" />}
            />
            <Route
              path="/headphones"
              element={
                <>
                  <ProductList productType="headphones" />
                  <ProductNav />
                  <ImpactMessage />
                </>
              }
            />
            <Route
              path="/speakers"
              element={
                <>
                  <ProductList productType="speakers" />
                  <ProductNav />
                  <ImpactMessage />
                </>
              }
            />
            <Route
              path="/earphones"
              element={
                <>
                  <ProductList productType="earphones" />
                  <ProductNav />
                  <ImpactMessage />
                </>
              }
            />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route
              path="/"
              element={
                <>
                  <Landing />
                  <ProductNav />
                  <ProductShowcase />
                  <ImpactMessage />
                </>
              }
            />
            {/* Add a 404 page route */}
          </Routes>
        </ScrollToTop>
      </ShoppingCartProvider>
      <Footer />
    </AppContainer>
  );
};

export default App;
