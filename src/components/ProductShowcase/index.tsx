import React from 'react';
import ZX9 from './ZX9';
import ZX7 from './ZX7';
import YX1 from './YX1';
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
