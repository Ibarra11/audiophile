import React from 'react';
import { Wrapper, Img, Content, Title } from './styles';
import Button from '../../Buttons';
import { getProductLink } from '../../../utilities/index';
import SpeakerImg from '../../../assets/home/mobile/image-speaker-zx7.jpg';
const ZX7 = () => {
  let link = getProductLink({ title: 'ZX7', productType: 'speakers' });
  link = typeof link === 'string' ? link : '/';
  return (
    <Wrapper>
      <Img src={SpeakerImg} alt="Speaker" />
      <Content>
        <Title>Zx7 Speaker</Title>
        <Button id={'btn3'} btnType="link" path={link}>
          See Product
        </Button>
      </Content>
    </Wrapper>
  );
};

export default ZX7;
