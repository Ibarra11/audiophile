import React from 'react';
import { ShoppingCart, Menu } from 'react-feather';
import Button from '../Buttons';
import {
  HeaderWrapper,
  HeaderMain,
  HeaderTitle,
  HeaderIconWrapper,
  HeaderBody,
  HeaderBodySubHeading,
  HeaderBodyMainHeading,
  HeaderBodyText,
} from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderMain>
        <HeaderIconWrapper>
          <Menu size={24} />
        </HeaderIconWrapper>
        <HeaderTitle>audiophile</HeaderTitle>
        <HeaderIconWrapper>
          <ShoppingCart size={24} />
        </HeaderIconWrapper>
      </HeaderMain>
      <HeaderBody>
        <HeaderBodySubHeading>new product</HeaderBodySubHeading>
        <HeaderBodyMainHeading>xx99 mark II headphones</HeaderBodyMainHeading>
        <HeaderBodyText>
          Experience natural, lifelike audio and exceptional build quality made for the passionate
          music enthusiast
        </HeaderBodyText>
        <Button id={'btn1'}>See Product</Button>
      </HeaderBody>
    </HeaderWrapper>
  );
};

export default Header;
