import React from 'react';
import { Wrapper, Picture, Img, Content, Title } from './styles';
import Button from '../../Buttons';
import EarphonesImg_mobile from '../../../assets/home/mobile/image-earphones-yx1.jpg';
import EarphonesImg_tablet from '../../../assets/home/tablet/image-earphones-yx1.jpg';
import EarphonesImg_laptopAndUp from '../../../assets/home/desktop/image-earphones-yx1.jpg';
import { getProductLink } from '../../../utilities/index';
const YX1 = () => {
  let link = getProductLink({
    title: 'YX1 WIRELESS',
    productType: 'earphones',
  });
  link = typeof link === 'string' ? link : '/';

  return (
    <Wrapper>
      <Picture>
        <source
          srcSet={EarphonesImg_laptopAndUp}
          media="(min-width: 1100px)"
        />
        <source srcSet={EarphonesImg_tablet} media="(min-width: 550px)" />
        <Img src={EarphonesImg_mobile} alt="YX1 earphones" />
      </Picture>

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
