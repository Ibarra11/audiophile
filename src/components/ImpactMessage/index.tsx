import React from 'react';
import { Wrapper, Img, Header, Text, TextOrange } from './styles';
import BestProductImg from '../../assets/shared/mobile/image-best-gear.jpg';
const ImpactMessage = () => (
  <Wrapper>
    <Img src={BestProductImg} alt="Guy trying on headphones" />
    <Header>
      Bringing you the <TextOrange>best</TextOrange> audio gear
    </Header>
    <Text>
      Located at the heart of New York City, Audiophile is the premier store for high end
      headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury
      demonstration rooms available for you to browse and experience a wide range of our products.
      Stop by our store to meet some of the fantastic people who make Audiophile the best place to
      buy your portable audio equipment.
    </Text>
  </Wrapper>
);

export default ImpactMessage;
