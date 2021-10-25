import React from 'react';
import { ShoppingCart, Menu } from 'react-feather';
import Button from '../Buttons';
import {
  HeaderWrapper,
  HeaderMain,
  Title,
  IconWrapper,
  HeaderBody,
  HeaderBodySubHeading,
  HeaderBodyMainHeading,
  HeaderBodyText,
  HeaderBodyButton,
} from './styles';

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderMain>
        <IconWrapper>
          <Menu size={24} />
        </IconWrapper>
        <Title>audiophile</Title>
        <IconWrapper>
          <ShoppingCart size={24} />
        </IconWrapper>
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
