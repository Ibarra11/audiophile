import React, { useState } from 'react';
import MobileNav from '../ModalNav';
import ShoppingCart from '../ShoppingCart';
import Logo from '../../assets/shared/desktop/logo.svg';
import CartIcon from '../../assets/shared/desktop/icon-cart.svg';
import HamburgerMenu from '../../assets/shared/tablet/icon-hamburger.svg';
import { Link, MaxWidthWrapper } from '../../shared/css/components';
import {
  HeaderLayout,
  MobileToTablet,
  LaptopToDesktop,
  Icon,
  IconButtonWrapper,
  IconLink,
  NavList,
  NavLink,
} from './styles';
import { AnimatePresence } from 'framer-motion';

const Header = () => {
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
    <HeaderLayout>
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
        <Link to="/">
          <Icon src={Logo} />
        </Link>
        <IconButtonWrapper onClick={toggleCart}>
          <Icon src={CartIcon} />
        </IconButtonWrapper>
      </MobileToTablet>
      <LaptopToDesktop>
        <Link to="/">
          <Icon src={Logo} />
        </Link>
        <NavList>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/headphones">Headphones</NavLink>
          <NavLink to="/speakers">Speakers</NavLink>
          <NavLink to="/earphones">Earphones</NavLink>
        </NavList>
        <IconButtonWrapper onClick={toggleCart}>
          <Icon src={CartIcon} />
        </IconButtonWrapper>
      </LaptopToDesktop>
    </HeaderLayout>
  );
};

export default Header;
