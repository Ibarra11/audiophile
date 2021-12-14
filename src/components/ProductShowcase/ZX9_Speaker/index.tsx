import React from 'react';
import Button from '../../Buttons';
import SpeakerProductImg from '../../../assets/home/mobile/image-speaker-zx9.png';
import { getProductLink } from '../../../utilities/index';
import {
  Wrapper,
  CircleWrapper,
  OuterCircle,
  MiddleCircle,
  InnerCircle,
  ProductImg,
  Content,
  Text,
  Title,
} from './styles';

const Speaker = () => {
  let link = getProductLink({ title: 'ZX9', productType: 'speakers' });
  link = typeof link === 'string' ? link : '/';
  return (
    <Wrapper>
      <CircleWrapper>
        <OuterCircle>
          <MiddleCircle>
            <InnerCircle>
              <ProductImg src={SpeakerProductImg} alt="Speaker" />
            </InnerCircle>
          </MiddleCircle>
        </OuterCircle>
      </CircleWrapper>
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
    </Wrapper>
  );
};

export default Speaker;
