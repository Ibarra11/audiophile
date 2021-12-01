import styled from 'styled-components';

const Wrapper = styled.div`
  background: #f2f2f2;
  padding: 24px;
  margin-top: 3rem;
  margin-bottom: 6rem;
`;
const Form = styled.form``;
const Heading = styled.h3`
  font-size: clamp(28px, 3vw + 1rem, 32px);
  margin-bottom: 32px;
`;

const FormGroupWrapper = styled.div`
  background: hsl(var(--clr-white));
  padding: 24px 32px;
  margin-bottom: 32px;
`;

const FormGroup = styled.div`
  display: grid;
  gap: 24px;

  &:not(:last-of-type) {
    margin-bottom: 32px;
  }
`;

const FormGroupHeader = styled.h6`
  color: hsl(var(--clr-primary-orange));
  font-size: var(--text-subtitle);
  /* The form group header has a margin-bottom of 16px, since it is part of the grid the gap is 24px, so I just offset it by 8 */
  margin-top: -8px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
`;

const RadioGroup = styled(InputGroup)`
  flex-direction: revert;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: 700;
`;

const Input = styled.input`
  padding: 18px 24px;
  border-radius: 8px;
  margin: 0;
  background: transparent;
  border: 1px solid hsl(var(--clr-primary-black) / 0.2);
  &:focus {
  }
`;

const SummaryWrapper = styled.div`
  background: hsl(var(--clr-white));
  padding: 32px 24px;
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

export {
  Wrapper,
  Form,
  Heading,
  FormGroupWrapper,
  FormGroup,
  FormGroupHeader,
  InputGroup,
  RadioGroup,
  Label,
  Input,
  SummaryWrapper,
  SummaryHeading,
  SummaryRow,
  RowTitle,
  RowPrice,
  OrangeRowPrice,
};
