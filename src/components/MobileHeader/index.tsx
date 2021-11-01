import React, { useState } from 'react';
import MobileNav from '../MobileNav';
import Logo from '../../assets/shared/desktop/logo.svg';
import ShoppingCart from '../../assets/shared/desktop/icon-cart.svg';
import HamburgerMenu from '../../assets/shared/tablet/icon-hamburger.svg';
import {
  MobileHeaderWrapper,
  MobileHeaderIcon,
  MobileHeaderIconButtonWrapper,
  MobileHeaderIconLinkWrapper,
} from './styles';

const MobileHeader = () => {
  console.log('MobileHeader');
  const [showModal, setShowModal] = useState(false);
  const toggleModal = (e: React.MouseEvent<HTMLButtonElement>) => {
    setShowModal((prevShowModal) => !prevShowModal);
  };
  return (
    <MobileHeaderWrapper>
      <MobileNav showModal={showModal} />
      <MobileHeaderIconButtonWrapper onClick={toggleModal}>
        <MobileHeaderIcon src={HamburgerMenu} />
      </MobileHeaderIconButtonWrapper>
      <MobileHeaderIconLinkWrapper>
        <MobileHeaderIcon src={Logo} />
      </MobileHeaderIconLinkWrapper>
      <MobileHeaderIconButtonWrapper>
        <MobileHeaderIcon src={ShoppingCart} />
      </MobileHeaderIconButtonWrapper>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
