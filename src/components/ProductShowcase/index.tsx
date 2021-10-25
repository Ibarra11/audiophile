import React from 'react';
import Button from '../Buttons';
import {
  CircleWrapper,
  ShowcaseItem,
  ShowcaseWrapper,
  OuterCircle,
  InnerCircle,
  ShowcaseImg,
  ShowcaseItemTitle,
  ShowcaseItemText,
  ShowcaseButton,
  MainCircle,
  ShowcaseBody,
} from './styles';
import SpeakerProductImg from '../../assets/home/mobile/image-speaker-zx9.png';
const ProductShowcase = () => {
  return (
    <ShowcaseWrapper>
      <ShowcaseItem>
        <CircleWrapper>
          <MainCircle>
            <OuterCircle>
              <InnerCircle>
                <ShowcaseImg src={SpeakerProductImg} alt="Speaker" />
              </InnerCircle>
            </OuterCircle>
          </MainCircle>
        </CircleWrapper>
        <ShowcaseBody>
          <ShowcaseItemTitle>ZX9 Speaker</ShowcaseItemTitle>
          <ShowcaseItemText>
            Upgrade to premium speakers that are phenomenally built to deliver truly remarkable
            sound.
          </ShowcaseItemText>
          <Button id={'btn2'}>See Product</Button>
        </ShowcaseBody>
      </ShowcaseItem>
    </ShowcaseWrapper>
  );
};

export default ProductShowcase;
