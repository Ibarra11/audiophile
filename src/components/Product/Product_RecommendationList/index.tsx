import React from 'react';
import styled from 'styled-components';
import Button from '../../Buttons';

interface Recommendation {
  id: string;
  title: string;
  img: string;
  productType: string;
}

interface Props {
  recommendations: Recommendation[];
}

const ProductRecommendationList = ({ recommendations }: Props) => {
  return (
    <Wrapper>
      {recommendations.map((recommendation) => {
        return (
          <ProductRecommendation
            key={recommendation.id}
            id={recommendation.id}
            title={recommendation.title}
            img={recommendation.img}
            productType={recommendation.productType}
          />
        );
      })}
    </Wrapper>
  );
};

const ProductRecommendation = ({
  id,
  img,
  title,
  productType,
}: Recommendation) => {
  return (
    <>
      <ProductImgWrapper>
        <ProductImg src={img} />
      </ProductImgWrapper>
      <ProductTitle>{title}</ProductTitle>
      <Button
        id={'btn1'}
        btnType="link"
        path={`/${productType}/${title.split(' ').join('_')}/${id}`}
      >
        See Product
      </Button>
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
