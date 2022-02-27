import CartList from '../CartList';
import Buttons from '../Buttons';
import styled from 'styled-components/macro';
import numeral from 'numeral';
import { Cart } from '../../shared/types';
import breakpoints from '../../shared/css/breakpoints';
interface ISummary {
  cart: Cart;
}
const Summary = ({ cart }: ISummary) => {
  const shippingCost = cart.total * 0.025;
  const vatCost = cart.total * 0.08;
  const grandTotal = cart.total + shippingCost + vatCost;
  return (
    <SummaryWrapper>
      <SummaryHeading>Summary</SummaryHeading>
      <CartList />
      <SummaryRow>
        <RowTitle>Total</RowTitle>
        <RowPrice>{numeral(cart.total).format('0,0.00')}</RowPrice>
      </SummaryRow>
      <SummaryRow>
        <RowTitle>Shipping</RowTitle>
        <RowPrice>{numeral(shippingCost).format('0,0.00')}</RowPrice>
      </SummaryRow>
      <SummaryRow>
        <RowTitle>Vat (included)</RowTitle>
        <RowPrice>{numeral(vatCost).format('0,0.00')}</RowPrice>
      </SummaryRow>
      <SummaryRow>
        <RowTitle>Grand Total</RowTitle>
        <OrangeRowPrice>
          {numeral(grandTotal).format('0,0.00')}
        </OrangeRowPrice>
      </SummaryRow>
      <Buttons
        data-testid="submit-btn"
        id={'btn1'}
        btnType="btn"
        width={'full'}
      >
        Continue & Pay
      </Buttons>
    </SummaryWrapper>
  );
};

export default Summary;

const SummaryWrapper = styled.div`
  background: hsl(var(--clr-white));
  padding: ${24 / 16}rem;
  border-radius: 8px;
  flex: 1;
  margin: 0;
  ${breakpoints.laptopAndUp} {
    padding: ${32 / 16}rem;
  }
`;

const SummaryHeading = styled.h6`
  font-size: var(--fs-h6);
  margin-bottom: ${32 / 16}rem;
  letter-spacing: 2px;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  &:nth-of-type(2) {
    margin-top: 32px;
  }
  &:last-of-type {
    margin-bottom: 0;
    margin-top: 24px;
  }
`;

const RowTitle = styled.span`
  color: hsl(var(--clr-primary-black) / 0.6);
  font-size: ${15 / 16}rem;
  font-weight: 500;
  text-transform: uppercase;
`;

const RowPrice = styled.span`
  color: hsl(var(--clr-primary-black));
  font-size: var(--fs-h6);
  font-weight: 700;
`;

const OrangeRowPrice = styled(RowPrice)`
  color: hsl(var(--clr-primary-orange));
  margin-bottom: 32px;
`;
