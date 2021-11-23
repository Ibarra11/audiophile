import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';
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
  console.log(cart);
  const dispatch = useCartDispatch();

  return (
    <CustomDialogOverlay isOpen={isOpen} onDismiss={onClose}>
      <CustomDialogContent aria-label="shopping cart modal">
        <CartHeader>
          <CartHeading>Cart ({cart.size})</CartHeading>
          <CartButton
            onClick={() =>
              dispatch({ type: ActionTypes.REMOVE_ALL_PRODUCTS })
            }
          >
            Remove all
          </CartButton>
        </CartHeader>
        <CartList>
          {cart.products.map((product) => {
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
  background-color: hsl(var(--clr-white));
  height: ${488 / 16}rem;
  width: ${327 / 16}rem;
  margin-top: 24px;
  margin-inline: auto;
  padding: 32px 28px;
  border-radius: 6px;
`;

const CartHeader = styled.div`
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
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-block: 32px;
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
  background-color: hsl(var(--clr-primary-gray));
  width: 96px;
  height: 32px;
  padding-inline: 8px;
`;

const ProductCountButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 18px;
  &:last-of-type {
  }
`;

export default ShoppingCart;
