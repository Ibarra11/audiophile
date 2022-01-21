import { useState } from 'react';
import styled from 'styled-components/macro';
import numeral from 'numeral';
import breakpoints from '../../shared/css/breakpoints';
import { useCart } from '../../context/ShoppingCartContext';
import { Product } from '../../shared/types';
const ConfirmationCart = () => {
  const [showItems, setShowItems] = useState(false);
  const cart = useCart();
  const firstProduct = cart.products[0];

  //  <Divider />

  const productJSX = ({ mainImg, title, price, amount }: Product) => (
    <CartRow>
      <ProductImg src={mainImg.mobile} />
      <ProductInfoContainer>
        <ProductTitle>{title}</ProductTitle>
        <ProductPrice>$ {numeral(price).format('0,0.00')}</ProductPrice>
      </ProductInfoContainer>
      <ProductQuantityContainer>
        <ProductAmountX>x</ProductAmountX>
        <ProductAmount>{amount}</ProductAmount>
      </ProductQuantityContainer>
    </CartRow>
  );

  const cartProductsJSX = () => {
    return cart.products.map((product) => productJSX(product));
  };

  return (
    <ConfirmationCartDetail>
      <ConfirmationCartContent>
        {/* <MobileToTablet>{MobileToTabletJSX}</MobileToTablet> */}
        <LaptopAndUp>
          <CartItemsContainer>
            {showItems ? cartProductsJSX() : productJSX(firstProduct)}
          </CartItemsContainer>
          {showItems ? (
            <>
              <Divider />{' '}
              <ItemsTotal onClick={() => setShowItems(!showItems)}>
                Show less
              </ItemsTotal>{' '}
            </>
          ) : (
            <>
              <Divider />{' '}
              <ItemsTotal onClick={() => setShowItems(!showItems)}>
                and {cart.products.length - 1} other item(s)
              </ItemsTotal>{' '}
            </>
          )}
        </LaptopAndUp>
      </ConfirmationCartContent>
      <ConfirmationCartTotal>
        <TotalHeading>Grand Total</TotalHeading>
        <Total>$ {numeral(cart.total).format('0,0.00')}</Total>
      </ConfirmationCartTotal>
    </ConfirmationCartDetail>
  );
};

const ConfirmationCartDetail = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: hidden;
  ${breakpoints.tabletAndUp} {
    flex-direction: revert;
  }
  ${breakpoints.laptopAndUp} {
    /* 
      Extra margin, because the other flex items each have 32px of gap, but there is 48 between this element and the button.
    */
    margin-bottom: ${16 / 16}rem;
  }
`;

const ConfirmationCartContent = styled.div`
  ${breakpoints.tabletAndUp} {
    flex: 1.5;
  }
`;

const LaptopAndUp = styled.div`
  background-color: hsl(var(--clr-primary-black) / 0.1);
  display: flex;
  flex-direction: column;
  gap: ${12 / 16}rem;
  ${breakpoints.tabletAndUp} {
    height: 100%;
    gap: ${16 / 16}rem;
  }
`;

const CartItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${16 / 16}rem;
  padding-inline: ${24 / 16}rem;
  margin-top: ${24 / 16}rem;
  /* 
    Each cart item is 50px and there is 16px gap between them.  So, I want to add a scrollbar after three items.  Therefore
    50 * 2 + 32 = 132px.
   */
  max-height: ${132 / 16}rem;
  overflow: auto;
`;

const ProductImg = styled.img`
  height: 100%;
  aspect-ratio: 1;
  object-fit: cover;
  margin-right: ${16 / 16}rem;
`;

const ProductTitle = styled.p`
  font-size: var(--text-body);
  font-weight: 700;
  justify-self: center;
`;

const ProductPrice = styled.p`
  color: hsl(var(--clr-primary-black) / 0.6);
  font-size: var(--text-subtitle);
  font-weight: 700;
`;

const ProductAmount = styled.span`
  color: hsl(var(--clr-primary-black) / 0.5);
  font-size: var(--text-body);
  grid-row: 2;
  grid-column: 3;
  justify-self: end;
`;

const ProductAmountX = styled.span`
  color: hsl(var(--clr-primary-black) / 0.5);
  font-size: var(--text-body);
`;

const ConfirmationCartTotal = styled.div`
  background-color: hsl(var(--clr-primary-black));
  display: flex;
  flex-direction: column;
  padding: ${15 / 24}rem ${24 / 16}rem;
  ${breakpoints.tabletAndUp} {
    flex: 1;
    align-items: center;
    justify-content: flex-end;
    padding-inline: ${24 / 16}rem;
    padding-block: ${42 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    padding-inline: ${32 / 16}rem;
  }
`;

const TotalHeading = styled.h6`
  color: hsl(var(--clr-primary-gray) / 0.6);
  font-size: var(--text-body);
  font-weight: 500;
  margin-bottom: 4px;
`;

const Total = styled.p`
  color: hsl(var(--clr-white));
  font-size: var(--fs-h6);
  font-weight: 700;
`;

const Divider = styled.div`
  background-color: hsl(var(--clr-primary-black) / 0.2);
  height: 1px;
  width: calc(100% - ${24 * 2}px);
  margin: auto;
`;

const ItemsTotal = styled.button`
  font-size: 12px;
  width: 100%;
  color: hsl(var(--clr-primary-black) / 0.5);
  margin-bottom: ${9 / 16}rem;
  text-align: center;
  transition: color 0.2s;
  &:hover,
  &:active {
    color: hsl(var(--clr-black));
    cursor: pointer;
  }
  ${breakpoints.tabletAndUp} {
    margin-bottom: ${24 / 16}rem;
  }
`;

const ProductInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ProductQuantityContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${breakpoints.tabletAndUp} {
    flex-direction: revert;
  }
`;

const CartRow = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: ${50 / 16}rem;
`;

export default ConfirmationCart;
