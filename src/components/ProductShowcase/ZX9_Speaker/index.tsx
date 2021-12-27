import React from 'react';
import Button from '../../Buttons';
import SpeakerProductImg from '../../../assets/home/mobile/image-speaker-zx9.png';

import { getProductLink } from '../../../utilities/index';
import circle_bg from '../../..//assets/home/desktop/pattern-circles.svg';
import {
  Wrapper,
  CircleImgWrapper,
  ProductImgWrapper,
  FlexContainer,
  Content,
  Text,
  Title,
} from './styles';

const Speaker = () => {
  let link = getProductLink({ title: 'ZX9', productType: 'speakers' });
  link = typeof link === 'string' ? link : '/';
  return (
    <Wrapper>
      <CircleImgWrapper>
        <img src={circle_bg} alt="" />
      </CircleImgWrapper>
      <FlexContainer>
        <ProductImgWrapper>
          <img src={SpeakerProductImg} alt="A zx9 speaker" />
        </ProductImgWrapper>
        <Content>
          <Title>ZX9 Speaker</Title>
          <Text>
            Upgrade to premium speakers that are phenomenally built to
            deliver truly remarkable sound.
          </Text>
          <Button id={'btn2'} btnType="link" path={link}>
            See Product
          </Button>
        </Content>
      </FlexContainer>
    </Wrapper>
  );
};

export default Speaker;
