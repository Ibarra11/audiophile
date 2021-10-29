import React from 'react';
import { Wrapper, Img, Content, Title } from './styles';
import Button from '../../Buttons';
import SpeakerImg from '../../../assets/home/mobile/image-speaker-zx7.jpg';
const ZX7 = () => (
  <Wrapper>
    <Img src={SpeakerImg} alt="Speaker" />
    <Content>
      <Title>Zx7 Speaker</Title>
      <Button id={'btn3'}>See Product</Button>
    </Content>
  </Wrapper>
);

export default ZX7;
