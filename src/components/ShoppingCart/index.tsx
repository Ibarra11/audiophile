import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';
import CartList from '../CartList';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import Buttons from '../Buttons';
import {
  useCart,
  useCartDispatch,
} from '../../context/ShoppingCartContext';
import { ActionTypes } from '../../shared/types';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const ShoppingCart = ({ isOpen, onClose }: Props) => {
  const cart = useCart();
  const dispatch = useCartDispatch();
  return (
    <CustomDialogOverlay isOpen={isOpen} onDismiss={onClose}>
      <CustomDialogContent aria-label="shopping cart modal">
        <Row>
          <CartHeading>Cart ({cart.size})</CartHeading>
          <CartButton
            onClick={() =>
              dispatch({ type: ActionTypes.REMOVE_ALL_PRODUCTS })
            }
          >
            Remove all
          </CartButton>
        </Row>
        <CartList dispatch={dispatch} />
        <CheckoutGroup>
          <BottomRow>
            <Text>Total</Text>
            <CartHeading>
              $ {numeral(cart.total).format('0,0')}
            </CartHeading>
          </BottomRow>
          <Buttons
            id={'btn1'}
            width={'full'}
            btnType="link"
            path={'/checkout'}
            onClick={() => onClose()}
          >
            Checkout
          </Buttons>
        </CheckoutGroup>
      </CustomDialogContent>
    </CustomDialogOverlay>
  );
};

const CustomDialogOverlay = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  inset: 90px 0 0 0;
  background-color: hsl(var(--clr-primary-black) / 0.5);
`;

const CustomDialogContent = styled(DialogContent)`
  height: ${488 / 16}rem;
  width: ${327 / 16}rem;
  display: flex;
  gap: 32px;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 24px;
  margin-inline: auto;
  padding: 32px 28px;
  border-radius: 6px;
  background-color: hsl(var(--clr-white));
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartHeading = styled.h6`
  font-size: var(--fs-h6);
`;

const CartButton = styled.button`
  color: hsl(var(--clr-primary-black) / 0.5);
  font-size: var(--text-body);
  text-decoration: underline;
`;

const CheckoutGroup = styled.div`
  & button {
    width: 100%;
  }
`;

const BottomRow = styled(Row)`
  justify-self: flex-end;
  margin-bottom: 24px;
`;

const Text = styled.p`
  color: hsl(var(--clr-primary-black) / 0.5);
  font-size: var(--text-body);
  text-transform: uppercase;
`;

export default ShoppingCart;
