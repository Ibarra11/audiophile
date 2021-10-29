import React from 'react';
import ZX9 from './ZX9_Speaker';
import ZX7 from './ZX7_Speaker';
import YX1 from './YX1_Earphones';
import { ShowcaseWrapper } from './styles';

const ProductShowcase = () => {
  return (
    <ShowcaseWrapper>
      <ZX9 />
      <ZX7 />
      <YX1 />
    </ShowcaseWrapper>
  );
};

export default ProductShowcase;
