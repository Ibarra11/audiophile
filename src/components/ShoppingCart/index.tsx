import React from 'react';
import styled from 'styled-components';
import { DialogOverlay, DialogContent } from '@reach/dialog';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};
const ShoppingCart = ({ isOpen, onClose }: Props) => {
  return (
    <CustomDialogOverlay isOpen={isOpen} onDismiss={onClose}>
      <CustomDialogContent>
        <h1>Cart</h1>
      </CustomDialogContent>
    </CustomDialogOverlay>
  );
};

const CustomDialogOverlay = styled(DialogOverlay)`
  position: absolute;
  top: 0;
  inset: 90px 0 0 0;
  background-color: hsl(var(--clr-primary-black) / 0.5);
`;

const CustomDialogContent = styled(DialogContent)`
  background-color: hsl(var(--clr-white));
  height: ${488 / 16}rem;
  width: ${327 / 16}rem;
  margin-top: 24px;
  margin-inline: auto;
  border-radius: 6px;
`;

export default ShoppingCart;
