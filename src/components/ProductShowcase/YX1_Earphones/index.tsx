import React from 'react';
import { Wrapper, Img, Content, Title } from './styles';
import Button from '../../Buttons';
import EarphonesImg from '../../../assets/home/mobile/image-earphones-yx1.jpg';
import { getProductLink } from '../../../utilities/index';
const YX1 = () => {
  let link = getProductLink({
    title: 'YX1 WIRELESS',
    productType: 'earphones',
  });
  link = typeof link === 'string' ? link : '/';

  return (
    <Wrapper>
      <Img src={EarphonesImg} alt="earphones" />
      <Content>
        <Title>Yx1 Earphones</Title>
        <Button id={'btn3'} btnType={'link'} path={link}>
          See Product
        </Button>
      </Content>
    </Wrapper>
  );
};
export default YX1;
