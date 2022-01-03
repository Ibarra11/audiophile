import React from 'react';
import styled from 'styled-components';
import breakpoints from '../../../shared/css/breakpoints';
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
    <ProductWrapper>
      <ProductImgWrapper>
        <ProductImg src={img} />
      </ProductImgWrapper>
      <ProductContent>
        <ProductTitle>{title}</ProductTitle>
        <Button
          id={'btn1'}
          btnType="link"
          path={`/${productType}/${title.split(' ').join('_')}/${id}`}
        >
          See Product
        </Button>
      </ProductContent>
    </ProductWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${56 / 16}rem;
  ${breakpoints.tabletAndUp} {
    flex-direction: revert;
    gap: ${12 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    gap: ${32 / 16}rem;
  }
`;

const ProductWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${32 / 16}rem;
  text-align: center;
  ${breakpoints.tabletAndUp} {
    gap: ${40 / 16}rem;
  }
`;

const ProductImgWrapper = styled.div`
  height: ${120 / 16}rem;
  ${breakpoints.tabletAndUp} {
    height: ${240 / 16}rem;
  }
  ${breakpoints.laptopAndUp} {
    height: ${360 / 16}rem;
  }
`;

const ProductImg = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ProductContent = styled.div``;

const ProductTitle = styled.h5`
  font-size: var(--fs-h5);
  letter-spacing: 2px;
  margin-bottom: ${32 / 16}rem;
`;

export default ProductRecommendationList;
