import Buttons from '../Buttons';
import ConfirmationCart from './ConfirmationCart';
import ConfirmationHeader from './ConfirmationHeader';
import styled, { keyframes } from 'styled-components';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import breakpoints from '../../shared/css/breakpoints';

const ConfirmationModal = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <ConfirmationOverlay isOpen={isOpen}>
      <ConfirmationContent aria-label="Confirmation modal with cart">
        <ConfirmationHeader />
        <ConfirmationCart />
        <Buttons id={'btn1'} width={'full'} btnType="link" path="/">
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
  top: 0;
  left: 0;
  right: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  animation: ${Show} 0.5s ease-in both;
`;

const ConfirmationContent = styled(DialogContent)`
  background-color: hsl(var(--clr-white));
  width: ${315 / 16}rem;
  display: flex;
  flex-direction: column;
  gap: ${24 / 16}rem;
  position: absolute;
  left: 0;
  right: 0;
  top: calc(10% + 1rem);
  margin: auto;
  padding: ${32 / 16}rem;
  border-radius: 8px;
  animation: ${SlideLeft} 0.4s ease-in both;
  animation-delay: 0.4s;
  ${breakpoints.tabletAndUp} {
    width: ${540 / 16}rem;
    gap: ${32 / 16}rem;
    padding: ${48 / 16}rem;
    top: calc(10% + 2rem);
  }
`;

export default ConfirmationModal;
