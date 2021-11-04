import React, { useState } from 'react';
import MobileNav from '../ModalNav';
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
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleOpenModal = () => setShowModal(true);

  return (
    <MobileHeaderWrapper>
      <MobileNav isOpen={showModal} onCloseModal={handleCloseModal} />
      <MobileHeaderIconButtonWrapper onClick={handleOpenModal}>
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
