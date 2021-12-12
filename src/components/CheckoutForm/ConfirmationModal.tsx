import React from 'react';
import Buttons from '../Buttons';
import xx59 from '../../assets/cart/image-xx99-mark-two-headphones.png';
import styled, { keyframes } from 'styled-components';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import numeral from 'numeral';
import { Check } from 'react-feather';
import { Cart } from '../../shared/types';
const ConfirmationModal = ({
  isOpen,
  cart,
}: {
  isOpen: boolean;
  cart: Cart;
}) => {
  const [firstProduct] = cart.products;
  const { mainImg, amount, price, title } = firstProduct;

  return (
    <ConfirmationOverlay>
      <ConfirmationContent>
        <ConfirmationHeadingWrapper>
          <ConfirmationCircle>
            <CheckIcon size={32} strokeWidth="3"></CheckIcon>
          </ConfirmationCircle>
          <ConfirmationHeading>
            Thank You For Your order
          </ConfirmationHeading>
          <ConfirmationEmailNotice>
            You will recieve an email confirmation shortly.
          </ConfirmationEmailNotice>
        </ConfirmationHeadingWrapper>
        <ConfirmationCartDetail>
          <ConfirmationCartContent>
            <ProductImg src={xx59} />
            <ProductTitle>{title}</ProductTitle>
            <ProductPrice>
              $ {numeral(price).format('0,0.00')}
            </ProductPrice>
            <ProductAmountX>x</ProductAmountX>
            <ProductAmount>{amount}</ProductAmount>
            <Divider />
            <ItemsTotal>
              and {cart.products.length - 1} other item(s)
            </ItemsTotal>
          </ConfirmationCartContent>
          <ConfirmationCartTotal>
            <TotalHeading>Grand Total</TotalHeading>
            <Total>$ {numeral(cart.total).format('0,0.00')}</Total>
          </ConfirmationCartTotal>
        </ConfirmationCartDetail>
        <Buttons id={'btn1'} width={'full'}>
          Back To Home
        </Buttons>
      </ConfirmationContent>
    </ConfirmationOverlay>
  );
};

const Show = keyframes`
  from {
    opacity: 0;
   
  }

  to{
    opacity: 1;
 
  }
`;

const SlideLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }

  to{
    opacity: 1;
    transform: translateX(0%);
  }
`;

const ConfirmationOverlay = styled(DialogOverlay)`
  background-color: hsl(var(--clr-primary-black) / 0.5);
  position: fixed;
  inset: 0;
  animation: ${Show} 0.5s ease-in both;
`;

const ConfirmationContent = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: hsl(var(--clr-white));
  position: absolute;
  inset: 10% 36px 0 24px;
  margin: auto;
  height: 75%;
  width: min(375px, 100%);
  padding: 32px;
  border-radius: 8px;
  animation: ${SlideLeft} 0.4s ease-in both;
  animation-delay: 0.4s;
`;

const ConfirmationHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ConfirmationCircle = styled.div`
  background-color: hsl(var(--clr-primary-orange));
  display: grid;
  place-content: center;
  width: 64px;
  aspect-ratio: 1;
  border-radius: 50%;
  margin-bottom: 24px;
`;

const CheckIcon = styled(Check)`
  display: block;
  color: hsl(var(--clr-white));
`;

const ConfirmationHeading = styled.h3`
  font-size: clamp(24px, 3vw + 1rem, var(--fs-h3));
  font-weight: 700;
  line-height: 28px;
  margin-bottom: 16px;
`;

const ConfirmationEmailNotice = styled.p`
  color: hsl(var(--clr-primary-black) / 0.6);
  font-size: var(--text-body);
  font-weight: 500;
`;

const ConfirmationCartDetail = styled.div`
  height: 50%;
  border-radius: 8px;
  overflow: hidden;
`;

const ConfirmationCartContent = styled.div`
  background-color: hsl(var(--clr-primary-black) / 0.1);
  height: 65%;
  display: grid;
  grid-template-columns: 30% auto 15%;
  grid-template-rows: repeat(2, 30%) 15% auto;
  align-items: end;
  padding: 16px;
  padding-bottom: 9px;
`;
const ConfirmationCartTotal = styled.div`
  background-color: hsl(var(--clr-primary-black));
  height: 35%;
  padding: 15px 24px;
`;

const TotalHeading = styled.p`
  color: hsl(var(--clr-primary-gray) / 0.8);
  font-size: var(--text-body);
  font-weight: 500;
  text-transform: uppercase;
  margin-bottom: 4px;
`;

const Total = styled.p`
  color: hsl(var(--clr-white));
  font-size: var(--fs-h6);
  font-weight: 700;
`;

const ProductImg = styled.img`
  height: 60px;
  grid-row: span 2;
  align-self: center;
`;

const ProductTitle = styled.p`
  font-size: var(--text-body);
  font-weight: 700;
  justify-self: center;
`;

const ProductPrice = styled.p`
  grid-row: 2;
  grid-column: 2;
  justify-self: center;
  align-self: start;
  color: hsl(var(--clr-primary-black) / 0.5);
  font-size: var(--text-subtitle);
`;

const ProductAmount = styled.span`
  grid-row: 2;
  grid-column: 3;
  align-self: start;
  justify-self: end;
  color: hsl(var(--clr-primary-black) / 0.5);
`;

const Divider = styled.span`
  display: block;
  height: 1px;
  width: 100%;
  background-color: hsl(var(--clr-primary-black) / 0.2);
  grid-row: 3;
  grid-column: 1/-1;
  align-self: start;
`;

const ItemsTotal = styled.p`
  grid-row: 4;
  grid-column: 2;
  font-size: 12px;
  color: hsl(var(--clr-primary-black) / 0.5);
  align-self: start;
`;

const ProductAmountX = styled.span`
  color: hsl(var(--clr-primary-black) / 0.5);
  justify-self: end;
`;

export default ConfirmationModal;
