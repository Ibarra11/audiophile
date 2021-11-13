import React from 'react';
import styled from 'styled-components';
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
      <GridItem src={images.img_1_mb} />
      <GridItem src={images.img_2_mb} />
      <GridItem src={images.img_3_mb} />
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  gap: ${20 / 16}rem;
`;

const GridItem = styled.img`
  border-radius: 8px;
`;

export default ProductGallery;
