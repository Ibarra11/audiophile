import React from 'react';
import { Wrapper, Picture, Img, Content, Title } from './styles';
import Button from '../../Buttons';
import { getProductLink } from '../../../utilities/index';
import SpeakerImg_mobile from '../../../assets/home/mobile/image-speaker-zx7.jpg';
import SpeakerImg_tablet from '../../../assets/home/tablet/image-speaker-zx7.jpg';
import SpeakerImg_laptopAndUp from '../../../assets/home/desktop/image-speaker-zx7.jpg';

const ZX7 = () => {
  let link = getProductLink({ title: 'ZX7', productType: 'speakers' });
  link = typeof link === 'string' ? link : '/';
  return (
    <Wrapper>
      <Picture>
        <source
          srcSet={SpeakerImg_laptopAndUp}
          media="(min-width: 1100px)"
        />
        <source srcSet={SpeakerImg_tablet} media="(min-width: 550px)" />

        <Img src={SpeakerImg_mobile} alt="ZX7 speaker showcase" />
      </Picture>

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
