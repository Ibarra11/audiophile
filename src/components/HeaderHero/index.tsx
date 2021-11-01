import React, { ReactNode, useState } from 'react';
// import Logo from '../../assets/shared/desktop/logo.svg';
// import ShoppingCart from '../../assets/shared/desktop/icon-cart.svg';
// import HamburgerMenu from '../../assets/shared/tablet/icon-hamburger.svg';
import Button from '../Buttons';

import {
  HeaderHeroWrapper,
  HeaderHeroBody,
  HeaderHeroBodySubHeading,
  HeaderHeroBodyMainHeading,
  HeaderHeroBodyText,
} from './styles';

interface HeaderProps {
  children: ReactNode;
}
const Header = ({ children }: HeaderProps) => {
  // const [showNav, setShowNav] = useState(false);
  // const toggleNav = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   setShowNav((prevShowNav) => !prevShowNav);
  // };
  // console.log(showNav);

  console.log('what');
  return (
    <HeaderHeroWrapper>
      {children}
      <HeaderHeroBody>
        <HeaderHeroBodySubHeading>new product</HeaderHeroBodySubHeading>
        <HeaderHeroBodyMainHeading>xx99 mark II headphones</HeaderHeroBodyMainHeading>
        <HeaderHeroBodyText>
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast
        </HeaderHeroBodyText>
        <Button id={'btn1'}>See Product</Button>
      </HeaderHeroBody>
    </HeaderHeroWrapper>
  );
};

export default Header;
