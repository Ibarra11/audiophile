import {
  render,
  screen,
  fireEvent,
  waitFor,
} from '@testing-library/react';

import CheckoutForm from '..';

import ShoppingCartProvider from '../../../context/ShoppingCartContext';

describe('CheckoutForm', () => {
  beforeEach(() => {
    render(
      <ShoppingCartProvider>
        <CheckoutForm />
      </ShoppingCartProvider>,
    );
  });
  test('should display an error label for all inputs if submitted while inputs are empty', async () => {
    const submitButton = screen.getByRole('button', {
      name: 'Continue & Pay',
    });
    fireEvent.click(submitButton);
    await waitFor(() => {
      const inputs = screen.getAllByTestId('error-label');
      expect(inputs).toHaveLength(7);
    });
  });
});
