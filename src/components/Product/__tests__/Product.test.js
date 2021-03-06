/* eslint-disable no-undef */
import { screen, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '../../../utilities/test';

import ProductLayout from '../index';
import ShoppingCartProvider from '../../../context/ShoppingCartContext';

const testingComponent = (
  <ShoppingCartProvider>
    <ProductLayout productType="headphones" />{' '}
  </ShoppingCartProvider>
);

const route =
  '/headphones/XX99_MARK_II/8bfb1928-5b98-11ec-bf63-0242ac130002';
describe('Product Counter', () => {
  beforeEach(() => {
    renderWithRouter(
      testingComponent,
      route,
      '/headphones/:headphone/:id',
    );
  });
  test('Should intially display a value of 1 for product count', () => {
    const countValue = +screen.getByTestId('count-value').innerHTML;

    expect(countValue).toBe(1);
  });
  test('Should not be able to display a product count that is less than 1', () => {
    const decrementButton = screen.getByRole('button', { name: '-' });
    fireEvent.click(decrementButton);
    const countValue = +screen.getByTestId('count-value').innerHTML;
    expect(countValue).toBe(1);
  });
  test('Should increment the product count value by 1', () => {
    const incrementButton = screen.getByRole('button', { name: '+' });
    fireEvent.click(incrementButton);
    const countValue = +screen.getByTestId('count-value').innerHTML;
    expect(countValue).toBe(2);
  });
  test('Should decrement the product count value by 1 when product count is greater than 1', () => {
    const incrementButton = screen.getByRole('button', { name: '+' });
    const decrementButton = screen.getByRole('button', { name: '-' });
    fireEvent.click(incrementButton);
    fireEvent.click(decrementButton);
    const countValue = +screen.getByTestId('count-value').innerHTML;
    expect(countValue).toBe(1);
  });
});
