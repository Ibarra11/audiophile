import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../../shared/css/breakpoints';
interface ProductGalleryProps {
  images: {
    img_1_mb: string;
    img_2_mb: string;
    img_3_mb: string;
  };
}
const ProductGallery = ({ images }: ProductGalleryProps) => {
  return (
    <GridContainer>
      <GridItem index={0} src={images.img_1_mb} />
      <GridItem index={1} src={images.img_2_mb} />
      <GridItem index={2} src={images.img_3_mb} />
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  gap: ${20 / 16}rem;
  ${breakpoints.tabletAndUp} {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridItem = styled.img<{ index: number }>`
  border-radius: 8px;
  ${breakpoints.tabletAndUp} {
    grid-column: ${(p) => {
      if (p.index < 2) {
        return 1;
      } else {
        return 2;
      }
    }};
    grid-row: ${(p) => {
      if (p.index === 0) {
        return 1;
      } else if (p.index === 1) {
        return 2;
      } else {
        return 'span 2';
      }
    }}
`;

export default ProductGallery;
