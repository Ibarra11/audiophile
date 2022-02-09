import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
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

const App = () => {
  const location = useLocation();
  const variants = {
    hidden: {
      opacity: 0,
      x: -300,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
    exit: {
      opacity: 0,
      x: 300,
      y: 0,
    },
  };
  return (
    <AppContainer>
      <ShoppingCartProvider>
        <Header />
        <AnimatePresence
          exitBeforeEnter
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Routes location={location} key={location.pathname}>
            <Route
              path="/headphones/:headphones/:id"
              element={
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <Product productType="headphones" />
                </motion.div>
              }
            />
            <Route
              path="/speakers/:speakers/:id"
              element={
                <motion.div
                  initial={{ opacity: 0, x: -300, y: 0 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  exit={{ opacity: 0, x: 300, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Product productType="speakers" />
                </motion.div>
              }
            />
            <Route
              path="/earphones/:earphones/:id"
              element={
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <Product productType="earphones" />
                </motion.div>
              }
            />
            <Route
              path="/headphones"
              key="/headphones"
              element={
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <ProductList productType="headphones" />
                  <ProductNav />
                  <ImpactMessage />
                </motion.div>
              }
            />
            <Route
              path="/speakers"
              element={
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <ProductList productType="speakers" />
                  <ProductNav />
                  <ImpactMessage />
                </motion.div>
              }
            />
            <Route
              path="/earphones"
              element={
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <ProductList productType="earphones" />
                  <ProductNav />
                  <ImpactMessage />
                </motion.div>
              }
            />
            <Route
              path="/checkout"
              element={
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <CheckoutForm />
                </motion.div>
              }
            />
            <Route
              path="/"
              element={
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <Landing />
                  <ProductNav />
                  <ProductShowcase />
                  <ImpactMessage />
                </motion.div>
              }
            />
            <Route
              path="*"
              element={
                <motion.div
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                >
                  <Landing />
                  <ProductNav />
                  <ProductShowcase />
                  <ImpactMessage />
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </ShoppingCartProvider>
      <Footer />
    </AppContainer>
  );
};

export default App;
