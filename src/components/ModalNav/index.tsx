import React, { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import ProductNav from '../ProductNav';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import { VisuallyHidden } from '@reach/visually-hidden';
import { X } from 'react-feather';

interface ModalNavProps {
  isOpen: boolean;
  onCloseModal: () => void;
}
const MobileNav = ({ isOpen, onCloseModal }: ModalNavProps) => {
  const ModalOverlay = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        when: 'afterChildren',
      },
    },
  };

  const ModalContent = {
    hidden: {
      height: 0,
      opacity: 0,
    },
    visible: {
      height: '80%',
      opacity: 1,
      transition: {
        when: 'beforeChildren',
        delay: 0.4,
        transition: { duration: 0.4 },
      },
    },
    exit: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.3, delay: 0.4 },
    },
  };

  return (
    <CustomDialogOverlay isOpen={isOpen} onDismiss={onCloseModal}>
      {isOpen ? (
        <AnimatedOvelay
          key="overlay"
          variants={ModalOverlay}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <CustomDialogContent
            key="modal"
            aria-label="Mobile Navigation for products"
          >
            <AnimatedDialogContent variants={ModalContent}>
              <CloseButtonWrapper onClick={onCloseModal}>
                <VisuallyHidden>Close</VisuallyHidden>
                <X size={24} />
              </CloseButtonWrapper>
              <ProductNav onCloseModal={onCloseModal} mobile={true} />
            </AnimatedDialogContent>
          </CustomDialogContent>
        </AnimatedOvelay>
      ) : null}
    </CustomDialogOverlay>
  );
};

const CustomDialogOverlay = styled(DialogOverlay)``;

const AnimatedOvelay = styled(motion.div)`
  background-color: hsl(var(--clr-primary-black) / 0.5);

  position: fixed;
  inset: 90px 0 0 0;
`;

const CustomDialogContent = styled(DialogContent)``;

const AnimatedDialogContent = styled(motion.div)`
  position: fixed;
  top: 90px;
  width: 100%;
  background-color: hsl(var(--clr-white));
`;

const CloseButtonWrapper = styled(motion.button)`
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
