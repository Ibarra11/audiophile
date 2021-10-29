import React from 'react';
import { Wrapper, Img, Content, Title } from './styles';
import Button from '../../Buttons';
import EarphonesImg from '../../../assets/home/mobile/image-earphones-yx1.jpg';
const YX1 = () => (
  <Wrapper>
    <Img src={EarphonesImg} alt="earphones" />
    <Content>
      <Title>Yx1 Earphones</Title>
      <Button id={'btn3'}>See Product</Button>
    </Content>
  </Wrapper>
);

export default YX1;
