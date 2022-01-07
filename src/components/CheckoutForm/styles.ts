import styled from 'styled-components/macro';
import breakpoints from '../../shared/css/breakpoints';
import { MaxWidthWrapper } from '../../shared/css/components';
const Wrapper = styled(MaxWidthWrapper)`
  background: #f2f2f2;
  padding: ${24 / 16}rem;
  margin-top: ${24 / 16}rem;
  margin-bottom: ${96 / 16}rem;
  ${breakpoints.tabletAndUp} {
    margin-top: ${48 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    margin-bottom: ${140 / 16}rem;
    margin-top: ${96 / 16}rem;
    padding: 0;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${32 / 16}rem;
  ${breakpoints.laptopAndUp} {
    flex-direction: revert;
    align-items: flex-start;
  }
`;

const Heading = styled.h3`
  font-size: clamp(28px, 3vw + 1rem, 32px);
  margin-bottom: 32px;
`;

const GoBackLink = styled.button`
  margin-bottom: ${24 / 16}rem;
`;

const FormGroupWrapper = styled.div`
  flex: 2;
  background: hsl(var(--clr-white));
  padding: ${24 / 16}rem ${32 / 16}rem;
  border-radius: 8px;
`;

const FormGroup = styled.div`
  &:not(:last-of-type) {
    margin-bottom: ${32 / 16}rem;
    ${breakpoints.tabletAndUp} {
      margin-bottom: ${52 / 16}rem;
    }
  }
`;

const FormGroupGrid = styled.div`
  display: grid;
  gap: ${24 / 16}rem;

  ${breakpoints.tabletAndUp} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const RadioGroupGrid = styled(FormGroupGrid)`
  gap: ${16 / 16}rem;

  &:first-of-type {
    margin-bottom: ${24 / 16}rem;
  }
`;

const FormGroupHeader = styled.h6`
  color: hsl(var(--clr-primary-orange));
  font-size: var(--text-subtitle);
  margin-bottom: 16px;
`;

const InputGroup = styled.div<{
  rows: number | undefined;
  columns: number | undefined;
}>`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${breakpoints.tabletAndUp} {
    grid-column: ${(p) => p.columns && `span ${p.columns}`};
    grid-row: ${(p) => p.rows && `span ${p.rows}`};
  }
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
`;

const Input = styled.input`
  position: relative;
  padding: 18px 24px;
  border-radius: 8px;
  margin: 0;
  background: transparent;
  border: 1px solid hsl(var(--clr-primary-black) / 0.2);
  &:focus {
  }
  &[type='radio'] {
    position: relative;
    background: transparent;
    border: none;
    outline: none;
    height: 20px;
    width: 20px;
    & label {
      margin-left: 16px;
    }
  }
  &[type='radio']:checked {
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      content: '';
      height: 13px;
      width: 13px;
      border-radius: 50%;
      background-color: hsl(var(--clr-primary-orange));
    }
  }
`;

const RadioGroupHeading = styled.p`
  grid-row: span 2;
  font-size: ${12 / 16}rem;
  font-weight: 700;
`;

const RadioGroup = styled(InputGroup)<{
  checked: boolean | undefined;
}>`
  flex-direction: revert;
  align-items: center;
  padding: 16px 18px;
  border-radius: 8px;
  border: 1px solid hsl(var(--clr-primary-black) / 0.2);
  ${(p) =>
    p.checked
      ? 'hsl(var(--clr-primary-orange))'
      : 'hsl(var(--clr-primary-black) / 0.2)'};
`;

const PaymentDetailsMobileToTablet = styled.div`
  ${breakpoints.laptopAndUp} {
    display: none;
  }
`;

const PaymentDetailsLaptopAndUp = styled.div`
  display: none;
  ${breakpoints.laptopAndUp} {
    display: revert;
  }
`;

const CashOption = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${32 / 16}rem;
  align-items: center;
`;

const CashText = styled.p`
  font-size: var(--fs-text-body);
  font-weight: 500;
`;

const SummaryWrapper = styled(FormGroupWrapper)`
  flex: 1;
  margin: 0;
`;

const SummaryHeading = styled.h6`
  font-size: var(--fs-h6);
  margin-bottom: 32px;
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

const ErrorText = styled.p`
  color: red;
  font-weight: 700;
`;

export {
  Wrapper,
  Form,
  Heading,
  FormGroupWrapper,
  FormGroup,
  FormGroupGrid,
  RadioGroupGrid,
  FormGroupHeader,
  InputGroup,
  RadioGroupHeading,
  RadioGroup,
  CashText,
  CashOption,
  Label,
  Input,
  PaymentDetailsMobileToTablet,
  PaymentDetailsLaptopAndUp,
  SummaryWrapper,
  SummaryHeading,
  SummaryRow,
  RowTitle,
  RowPrice,
  OrangeRowPrice,
  ErrorText,
  GoBackLink,
};
