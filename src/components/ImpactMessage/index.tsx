import React from 'react';
import {
  Wrapper,
  Content,
  Picture,
  Img,
  Header,
  Text,
  TextOrange,
} from './styles';
import BestProductImg_mobile from '../../assets/shared/mobile/image-best-gear.jpg';
import BestProductImg_tablet from '../../assets/shared/tablet/image-best-gear.jpg';
import BestProductImg_laptopAndUp from '../../assets/shared/desktop/image-best-gear.jpg';
import { MaxWidthWrapper } from '../../shared/css/components';

const ImpactMessage = () => (
  <MaxWidthWrapper>
    <Wrapper>
      <Picture>
        <source
          srcSet={BestProductImg_laptopAndUp}
          media="(min-width: 1100px)"
        />
        <source
          srcSet={BestProductImg_tablet}
          media="(min-width: 550px)"
        />
        <Img src={BestProductImg_mobile} alt="Guy trying on headphones" />
      </Picture>
      <Content>
        <Header>
          Bringing you the <TextOrange>best</TextOrange> audio gear
        </Header>
        <Text>
          Located at the heart of New York City, Audiophile is the premier
          store for high end headphones, earphones, speakers, and audio
          accessories. We have a large showroom and luxury demonstration
          rooms available for you to browse and experience a wide range of
          our products. Stop by our store to meet some of the fantastic
          people who make Audiophile the best place to buy your portable
          audio equipment.
        </Text>
      </Content>
    </Wrapper>
  </MaxWidthWrapper>
);

export default ImpactMessage;
