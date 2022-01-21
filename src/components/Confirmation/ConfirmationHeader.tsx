import styled from 'styled-components/macro';
import { Check } from 'react-feather';
import breakpoints from '../../shared/css/breakpoints';
const ConfirmationHeader = () => (
  <ConfirmationHeadingWrapper>
    <ConfirmationCircle>
      <CheckIcon size={32} strokeWidth="3"></CheckIcon>
    </ConfirmationCircle>
    <ConfirmationHeading>Thank You For Your order</ConfirmationHeading>
    <ConfirmationEmailNotice>
      You will recieve an email confirmation shortly.
    </ConfirmationEmailNotice>
  </ConfirmationHeadingWrapper>
);

const ConfirmationHeadingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${16 / 16}rem;
  ${breakpoints.tabletAndUp} {
    gap: ${24 / 16}rem;
  }
`;

const ConfirmationCircle = styled.div`
  background-color: hsl(var(--clr-primary-orange));
  display: grid;
  place-content: center;
  width: ${64 / 16}rem;
  aspect-ratio: 1;
  border-radius: 50%;
  margin-bottom: ${8 / 16}rem;
`;

const CheckIcon = styled(Check)`
  display: block;
  color: hsl(var(--clr-white));
`;

const ConfirmationHeading = styled.h3`
  font-size: clamp(24px, 3vw + 1rem, var(--fs-h3));
  font-weight: 700;
  line-height: 28px;
`;

const ConfirmationEmailNotice = styled.p`
  color: hsl(var(--clr-primary-black) / 0.6);
  font-size: var(--text-body);
  font-weight: 500;
`;

export default ConfirmationHeader;
