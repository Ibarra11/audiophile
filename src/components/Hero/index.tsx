import React from 'react';
import Button from '../Buttons';
import { getProductLink } from '../../utilities';
import {
  HeaderHeroWrapper,
  HeaderHeroBody,
  HeaderHeroBodySubHeading,
  HeaderHeroBodyMainHeading,
  HeaderHeroBodyText,
} from './styles';

const Hero = () => {
  let link = getProductLink({
    title: 'XX99 MARK II',
    productType: 'headphones',
  });
  link = typeof link === 'string' ? link : '/';
  return (
    <HeaderHeroWrapper>
      <HeaderHeroBody>
        <HeaderHeroBodySubHeading>new product</HeaderHeroBodySubHeading>
        <HeaderHeroBodyMainHeading>
          xx99 mark II headphones
        </HeaderHeroBodyMainHeading>
        <HeaderHeroBodyText>
          Experience natural, lifelike audio and exceptional build quality
          made for the passionate music enthusiast
        </HeaderHeroBodyText>
        <Button
          btnType="link"
          path={typeof link === 'string' ? link : '/'}
          id={'btn1'}
        >
          See Product
        </Button>
      </HeaderHeroBody>
    </HeaderHeroWrapper>
  );
};

export default Hero;
