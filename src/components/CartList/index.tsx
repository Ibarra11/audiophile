import React from 'react';
import styled from 'styled-components';
import numeral from 'numeral';
import { ActionTypes, Dispatch } from '../../shared/types';
import { useCart } from '../../context/ShoppingCartContext';

type Props = {
  dispatch: Dispatch;
};

const CartList = ({ dispatch }: Props) => {
  const cart = useCart();

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default CartList;

const Wrapper = styled.div`
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
