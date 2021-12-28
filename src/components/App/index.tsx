import React, { useEffect, ReactNode } from 'react';
import ShoppingCartProvider from '../../context/ShoppingCartContext';
import { AppContainer, LayoutWrapper } from './styles';
import { MaxWidthWrapper } from '../../shared/css/components';
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
        {/* <Header /> */}
        <Landing />
        <ScrollToTop>
          <Routes>
            <Route
              path="/headphones/:headphones/:id"
              element={
                <MainLayout>
                  <Product productType="headphones" />
                </MainLayout>
              }
            />
            <Route
              path="/speakers/:speakers/:id"
              element={
                <MainLayout>
                  <Product productType="speakers" />
                </MainLayout>
              }
            />
            <Route
              path="/earphones/:earphones/:id"
              element={
                <MainLayout>
                  <Product productType="earphones" />
                </MainLayout>
              }
            />
            <Route
              path="/headphones"
              element={
                <MainLayout>
                  <ProductList productType="headphones" />
                </MainLayout>
              }
            />
            <Route
              path="/speakers"
              element={
                <MainLayout>
                  <ProductList productType="speakers" />
                </MainLayout>
              }
            />
            <Route
              path="/earphones"
              element={
                <MainLayout>
                  <ProductList productType="earphones" />
                </MainLayout>
              }
            />
            <Route path="/checkout" element={<CheckoutForm />} />
            <Route
              path="/"
              element={<MainLayout>{/* <HeaderHero /> */}</MainLayout>}
            />
            {/* <Route path="*" element={<HeaderHero />} /> */}
          </Routes>
        </ScrollToTop>
      </ShoppingCartProvider>
      <Footer />
    </AppContainer>
  );
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper>
      {children}
      <LayoutWrapper>
        <ProductNav />
        <ProductShowcase />
        <ImpactMessage />
      </LayoutWrapper>
    </MaxWidthWrapper>
  );
};

export default App;
