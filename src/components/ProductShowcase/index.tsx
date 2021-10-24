import React from 'react';

import {
  CircleWrapper,
  ShowcaseItem,
  ShowcaseWrapper,
  OuterCircle,
  InnerCircle,
  ShowcaseImg,
} from './styles';
import SpeakerProductImg from '../../assets/home/mobile/image-speaker-zx9.png';
const ProductShowcase = () => {
  return (
    <ShowcaseWrapper>
      <ShowcaseItem>
        <CircleWrapper>
          <OuterCircle>
            <InnerCircle>
              <ShowcaseImg src={SpeakerProductImg} alt="Speaker" />
            </InnerCircle>
          </OuterCircle>
        </CircleWrapper>
      </ShowcaseItem>
    </ShowcaseWrapper>
  );
};

export default ProductShowcase;
