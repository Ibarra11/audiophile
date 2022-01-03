import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import numeral from 'numeral';
import CartList from '../CartList';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import Buttons from '../Buttons';
import {
  useCart,
  useCartDispatch,
} from '../../context/ShoppingCartContext';
import { ActionTypes } from '../../shared/types';
import breakpoints from '../../shared/css/breakpoints';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

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
      duration: 0.4,
      when: 'afterChildren',
    },
  },
};

const ModalContent = {
  hidden: {
    opacity: 0,
    scale: 0.2,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.2,
    transition: {
      duration: 0.25,
    },
  },
};
const ShoppingCart = ({ isOpen, onClose }: Props) => {
  const cart = useCart();
  const dispatch = useCartDispatch();
  const isCartEmpty = cart.size === 0;

  return (
    <DialogOverlay isOpen={isOpen} onDismiss={onClose}>
      <AnimatedOverlay
        variants={ModalOverlay}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <DialogContent aria-label="shopping cart modal">
          <AnimatedDialogContent variants={ModalContent}>
            <Row>
              <CartHeading>Cart ({cart.size})</CartHeading>
              <CartButton
                onClick={() =>
                  dispatch({ type: ActionTypes.REMOVE_ALL_PRODUCTS })
                }
              >
                Remove all
              </CartButton>
            </Row>
            <CartList dispatch={dispatch} />
            <CheckoutGroup>
              <BottomRow>
                <Text>Total</Text>
                <CartHeading>
                  $ {numeral(cart.total).format('0,0')}
                </CartHeading>
              </BottomRow>
              <Buttons
                id={'btn1'}
                width={'full'}
                btnType="link"
                path={isCartEmpty ? undefined : '/checkout'}
                onClick={isCartEmpty ? undefined : () => onClose()}
                opacity={isCartEmpty ? '3/4' : undefined}
              >
                Checkout
              </Buttons>
            </CheckoutGroup>
          </AnimatedDialogContent>
        </DialogContent>
      </AnimatedOverlay>
    </DialogOverlay>
  );
};

const AnimatedOverlay = styled(motion.div)`
  position: absolute;
  top: 0;
  inset: 80px 0 0 0;
  background-color: hsl(var(--clr-primary-black) / 0.5);
`;

const AnimatedDialogContent = styled(motion.div)`
  position: absolute;
  top: ${24 / 16}rem;
  left: 0;
  right: 0;
  display: flex;
  gap: ${32 / 16}rem;
  flex-direction: column;
  justify-content: space-between;
  height: ${488 / 16}rem;
  width: ${327 / 16}rem;
  margin: auto;
  padding: 32px 28px;
  border-radius: 6px;
  background-color: hsl(var(--clr-white));
  ${breakpoints.tabletAndUp} {
    width: ${377 / 16}rem;
    right: ${40 / 16}rem;
    left: auto;
  }
  ${breakpoints.laptopAndUp} {
    top: ${32 / 16}rem;
    right: ${160 / 16}rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CartHeading = styled.h6`
  font-size: var(--fs-h6);
`;

const CartButton = styled.button`
  color: hsl(var(--clr-primary-black) / 0.5);
  font-size: var(--text-body);
  text-decoration: underline;
`;

const CheckoutGroup = styled.div`
  & button {
    width: 100%;
  }
`;

const BottomRow = styled(Row)`
  justify-self: flex-end;
  margin-bottom: 24px;
`;

const Text = styled.p`
  color: hsl(var(--clr-primary-black) / 0.5);
  font-size: var(--text-body);
  text-transform: uppercase;
`;

export default ShoppingCart;
