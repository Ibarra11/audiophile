import React from 'react';
import styled from 'styled-components';
import Button from '../../Buttons';

import XX99_Mark_1 from '../../../assets/shared/mobile/image-xx99-mark-one-headphones.jpg';
import XX99_Mark_2 from '../../../assets/shared/mobile/image-xx99-mark-two-headphones.jpg';
import XX59 from '../../../assets/shared/mobile/image-xx59-headphones.jpg';

import ZX9 from '../../../assets/shared/mobile/image-zx9-speaker.jpg';
import ZX7 from '../../../assets/shared/mobile/image-zx7-speaker.jpg';

const ProductList = [
  { title: 'XX99 MARK I', img: XX99_Mark_1 },
  { title: 'XX99 MARK II', img: XX99_Mark_2 },
  { title: 'XX59', img: XX59 },
  { title: 'ZX9', img: ZX9 },
  { title: 'ZX7', img: ZX7 },
];

interface Props {
  currentProduct: string;
}

const ProductRecommendationList = ({
  currentProduct,
}: Props) => {
  let productRecommendations: {
    title: string;
    img: string;
  }[] = new Array(3);

  if (
    currentProduct === 'XX99 MARK II' ||
    currentProduct === 'YX1 WIRELESS'
  ) {
    ProductList.forEach((product) => {
      if (product.title === 'XX99 MARK I') {
        productRecommendations[0] = product;
      } else if (product.title === 'XX59') {
        productRecommendations[1] = product;
      } else if (product.title === 'ZX9') {
        productRecommendations[2] = product;
      }
    });
  } else if (currentProduct === 'XX99 MARK I') {
    ProductList.forEach((product) => {
      if (product.title === 'XX99 MARK II') {
        productRecommendations[0] = product;
      } else if (product.title === 'XX59') {
        productRecommendations[1] = product;
      } else if (product.title === 'ZX9') {
        productRecommendations[2] = product;
      }
    });
  } else if (currentProduct === 'XX59') {
    ProductList.forEach((product) => {
      if (product.title === 'XX99 MARK II') {
        productRecommendations[0] = product;
      } else if (product.title === 'XX99 MARK I') {
        productRecommendations[1] = product;
      } else if (product.title === 'ZX9') {
        productRecommendations[2] = product;
      }
    });
  } else if (currentProduct === 'ZX9') {
    ProductList.forEach((product) => {
      if (product.title === 'ZX7') {
        productRecommendations[0] = product;
      } else if (product.title === 'XX99 MARK I') {
        productRecommendations[1] = product;
      } else if (product.title === 'XX59') {
        productRecommendations[2] = product;
      }
    });
  } else if (currentProduct === 'ZX7') {
    ProductList.forEach((product) => {
      if (product.title === 'ZX9') {
        productRecommendations[0] = product;
      } else if (product.title === 'XX99 MARK I') {
        productRecommendations[1] = product;
      } else if (product.title === 'XX59') {
        productRecommendations[2] = product;
      }
    });
  }

  return (
    <Wrapper>
      {productRecommendations.map((recommendation) => {
        return (
          <ProductRecommendation
            key={recommendation.title}
            title={recommendation.title}
            img={recommendation.img}
          />
        );
      })}
    </Wrapper>
  );
};

const ProductRecommendation = ({
  img,
  title,
}: {
  img: string;
  title: string;
}) => {
  return (
    <>
      <ProductImgWrapper>
        <ProductImg src={img} />
      </ProductImgWrapper>
      <ProductTitle>
        {title === 'ZX9' || title === 'ZX7'
          ? title + ' Speaker'
          : title}
      </ProductTitle>
      <Button id={'btn1'}>See Prodcut</Button>
    </>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  gap: 2rem;
`;

const ProductImgWrapper = styled.div``;

const ProductImg = styled.img``;

const ProductTitle = styled.h5`
  font-size: var(--fs-h5);
  letter-spacing: 2px;
`;

export default ProductRecommendationList;
