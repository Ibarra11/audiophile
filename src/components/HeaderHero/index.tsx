import React, { ReactNode, useState } from 'react';

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
const Header = () => {
  return (
    <HeaderHeroWrapper>
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
