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

const MobileToTablet = styled.div`
  ${breakpoints.laptopAndUp} {
    display: none;
  }
`;

const LaptopAndUp = styled.div`
  display: none;
  ${breakpoints.laptopAndUp} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${32 / 16}rem;
    grid-column: span 2;
  }
`;

const CashOption = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: ${32 / 16}rem;
  align-items: center;
  grid-column: 1/-1;
`;

const CashText = styled.p`
  color: hsl(var(--clr-primary-black) / 0.5);
  font-size: var(--fs-text-body);
  font-weight: 500;
  max-width: 80ch;
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
  InputGroup,
  RadioGroup,
  CashText,
  CashOption,
  Label,
  Input,
  MobileToTablet,
  LaptopAndUp,
  ErrorText,
  GoBackLink,
};
