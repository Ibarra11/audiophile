import React, { useState } from 'react';
import MobileNav from '../ModalNav';
import ShoppingCart from '../ShoppingCart';
import Logo from '../../assets/shared/desktop/logo.svg';
import CartIcon from '../../assets/shared/desktop/icon-cart.svg';
import HamburgerMenu from '../../assets/shared/tablet/icon-hamburger.svg';

import {
  MobileHeaderWrapper,
  MobileHeaderIcon,
  MobileHeaderIconButtonWrapper,
  MobileHeaderIconLinkWrapper,
} from './styles';

const MobileHeader = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleNav = () => {
    if (showCart) {
      setShowCart(false);
    }
    setShowNav(!showNav);
  };

  const toggleCart = () => {
    if (showNav) {
      setShowNav(false);
    }
    setShowCart(!showCart);
  };
  return (
    <MobileHeaderWrapper>
      <MobileNav isOpen={showNav} onCloseModal={toggleNav} />
      <ShoppingCart isOpen={showCart} onClose={toggleCart} />
      <MobileHeaderIconButtonWrapper onClick={toggleNav}>
        <MobileHeaderIcon src={HamburgerMenu} />
      </MobileHeaderIconButtonWrapper>
      <MobileHeaderIconLinkWrapper to="/">
        <MobileHeaderIcon src={Logo} />
      </MobileHeaderIconLinkWrapper>
      <MobileHeaderIconButtonWrapper onClick={toggleCart}>
        <MobileHeaderIcon src={CartIcon} />
      </MobileHeaderIconButtonWrapper>
    </MobileHeaderWrapper>
  );
};

export default MobileHeader;
