import React from 'react';
import styled from 'styled-components';
import ProductNav from '../ProductNav';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { VisuallyHidden } from '@reach/visually-hidden';
import { X } from 'react-feather';
interface ModalNavProps {
  isOpen: boolean;
  onOpenModal: () => void;
  onCloseModal: () => void;
}
const MobileNav = ({ isOpen, onOpenModal, onCloseModal }: ModalNavProps) => {
  console.log('Mobile Nav: ' + isOpen);
  return (
    <CustomDialogOverlay isOpen={isOpen} onDismiss={onCloseModal}>
      <CustomDialogContent aria-label="Mobile Navigation for products">
        <CloseButtonWrapper onClick={onCloseModal}>
          <VisuallyHidden>Close</VisuallyHidden>
          <X size={24} />
        </CloseButtonWrapper>
        <ProductNav onCloseModal={onCloseModal} mobile={true} />
      </CustomDialogContent>
    </CustomDialogOverlay>
  );
};

const CustomDialogOverlay = styled(DialogOverlay)`
  background-color: hsl(var(--clr-primary-black) / 0.5);
  position: fixed;
  inset: 90px 0 0 0;
`;

const CustomDialogContent = styled(DialogContent)`
  position: fixed;
  inset: 90px 0;
  background-color: hsl(var(--clr-white));
`;

const CloseButtonWrapper = styled.button`
  z-index: 10;
  position: absolute;
  right: 1rem;
  top: 1rem;
  display: flex;
  color: red;
  justify-content: center;
  align-items: center;
  background: transparent;
  border: none;
`;

export default MobileNav;
