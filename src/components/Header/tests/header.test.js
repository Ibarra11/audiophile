import { screen, render } from '@testing-library/react';
import { StaticRouter } from 'react-router-dom/server';
import ShoppingCartProvider from '../../../context/ShoppingCartContext';
import Header from '../index';

const createCart = (productAmount) => {
  return {
    products: [
      {
        id: '8bfb25bc-5b98-11ec-bf63-0242ac130002',
        mainImg: {
          mobile: '/static/media/image-product.c3c7f55a.jpg',
          tablet: '/static/media/image-product.5ec482a5.jpg',
          desktop: '/static/media/image-product.ba07d762.jpg',
        },
        title: 'ZX9',
        price: 4500,
        amount: productAmount,
      },
    ],
    size: productAmount,
    total: 4500 * productAmount,
  };
};

describe('Header Test', () => {
  test('should not display cart amount if cart is empty', () => {
    render(
      <StaticRouter location="/">
        <ShoppingCartProvider>
          <Header />
        </ShoppingCartProvider>
      </StaticRouter>,
    );
    const cartAmount = screen.queryByTestId('cart-amount');
    expect(cartAmount).toBeNull();
  });

  test('should display a value of 1 when there is one item in the cart', () => {
    render(
      <StaticRouter location="/">
        <ShoppingCartProvider defaultCart={createCart(1)}>
          <Header />
        </ShoppingCartProvider>
      </StaticRouter>,
    );
    const cartAmount = screen.getByTestId('cart-amount');
    expect(+cartAmount.innerHTML).toEqual(1);
  });
});
