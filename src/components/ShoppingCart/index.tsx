import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';
import Buttons from '../Buttons';
import {
  useCart,
  useCartDispatch,
} from '../../context/ShoppingCartContext';
import { ActionTypes } from '../../shared/types';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { ProductText } from '../ProductList/styles';
import { Product } from '../ProductNav/styles';
import { Action } from 'history';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const ShoppingCart = ({ isOpen, onClose }: Props) => {
  const cart = useCart();
  const dispatch = useCartDispatch();
  let cartTotal = 0;

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
        <CartList>
          {cart.products.map((product) => {
            cartTotal += product.price * product.amount;
            return (
              <CartRow key={product.id}>
                <ProductImg src={product.mainImg} />
                <ProductDetails>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>
                    $ {numeral(product.price).format('0,0')}
                  </ProductPrice>
                </ProductDetails>
                <ProductCounter>
                  <ProductCountButton
                    onClick={() =>
                      dispatch({
                        type: ActionTypes.REMOVE_PRODUCT,
                        payload: { id: product.id },
                      })
                    }
                  >
                    -
                  </ProductCountButton>
                  {product.amount}
                  <ProductCountButton
                    onClick={() =>
                      dispatch({
                        type: ActionTypes.ADD_PRODUCT,
                        payload: { product: { ...product, amount: 1 } },
                      })
                    }
                  >
                    +
                  </ProductCountButton>
                </ProductCounter>
              </CartRow>
            );
          })}
        </CartList>
        <CheckoutGroup>
          <BottomRow>
            <Text>Total</Text>
            <CartHeading>$ {numeral(cartTotal).format('0,0')}</CartHeading>
          </BottomRow>
          <Buttons id={'btn1'} type="btn">
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

const CartList = styled.div`
  width: calc(100% + 20px);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-left: -10px;
  padding-right: 12px;
  overflow: auto;
`;

const CartRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ProductImg = styled.img`
  display: block;
  height: 64px;
  width: 64px;
  object-fit: cover;
`;

const ProductDetails = styled.div``;

const ProductTitle = styled.h6`
  font-size: var(--text-body);
`;

const ProductPrice = styled.span`
  color: hsl(var(--clr-primary-black) / 0.5);
  font-size: var(--text-subtitle);
  font-weight: 700;
`;

const ProductCounter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: auto;
  background-color: hsl(var(--clr-primary-black) / 0.2);
  width: 88px;
  height: 32px;
  padding-inline: 8px;
`;

const ProductCountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 18px;
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
