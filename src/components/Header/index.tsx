import React, { useState } from 'react';
import MobileNav from '../ModalNav';
import ShoppingCart from '../ShoppingCart';
import Logo from '../../assets/shared/desktop/logo.svg';
import CartIcon from '../../assets/shared/desktop/icon-cart.svg';
import HamburgerMenu from '../../assets/shared/tablet/icon-hamburger.svg';

import {
  HeaderWrapper,
  MobileToTablet,
  LaptopToDesktop,
  Icon,
  IconButtonWrapper,
  IconLinkWrapper,
  NavList,
  NavItem,
} from './styles';
import { AnimatePresence } from 'framer-motion';

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

  console.log(showNav);
  return (
    <HeaderWrapper>
      <AnimatePresence>
        {showCart && (
          <ShoppingCart isOpen={showCart} onClose={toggleCart} />
        )}
      </AnimatePresence>
      <MobileToTablet>
        <AnimatePresence>
          {showNav && (
            <MobileNav isOpen={showNav} onCloseModal={toggleNav} />
          )}
        </AnimatePresence>
        <IconButtonWrapper onClick={toggleNav}>
          <Icon src={HamburgerMenu} />
        </IconButtonWrapper>

        <IconLinkWrapper to="/">
          <Icon src={Logo} />
        </IconLinkWrapper>
        <IconButtonWrapper onClick={toggleCart}>
          <Icon src={CartIcon} />
        </IconButtonWrapper>
      </MobileToTablet>
      <LaptopToDesktop>
        <IconLinkWrapper to="/">
          <Icon src={Logo} />
        </IconLinkWrapper>
        <NavList>
          <NavItem to="/">Home</NavItem>
          <NavItem to="/earphones">Headphones</NavItem>
          <NavItem to="/speakers">Speakers</NavItem>
          <NavItem to="/earphones">Earphones</NavItem>
        </NavList>
        <IconButtonWrapper onClick={toggleCart}>
          <Icon src={CartIcon} />
        </IconButtonWrapper>
      </LaptopToDesktop>
    </HeaderWrapper>
  );
};

export default MobileHeader;
