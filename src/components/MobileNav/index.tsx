import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductNav from '../ProductNav';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { VisuallyHidden } from '@reach/visually-hidden';

interface ModalNavProps {
  showModal: boolean;
}
const MobileNav = ({ showModal }: ModalNavProps) => {
  console.log('Mobile Nav');
  const [showDialog, setShowDialog] = useState(false);
  const toggleDialog = () =>
    setShowDialog((prevShowDialogState) => {
      return !prevShowDialogState;
    });
  const close = (e: React.MouseEvent<Element, MouseEvent> | React.KeyboardEvent<Element>) => {};

  return (
    <CustomDialogOverlay isOpen={showModal} onDismiss={close}>
      <CustomDialogContent>
        <ModalNav />
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
  padding-bottom: 0.5rem;
`;

const ModalNav = styled(ProductNav)`
  color: red;
  border: 1px solid red;
  margin-top: 100px;
`;

export default MobileNav;
