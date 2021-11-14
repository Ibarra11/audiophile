import React from 'react';
import { useParams, useLocation } from 'react-router';
import ProductFeatures from './Product_Features';
import ProductContentList from './Product_Content_List';
import ProductGallery from './Product_Gallery';
import ProductRecommendationList from './Product_RecommendationList';
import Products from '../../data';
import Buttons from '../Buttons';
import { DollarSign } from 'react-feather';

import { ProductTitles, ProductTypes } from '../../shared/types';

import {
  SectionWrapper,
  PrevLink,
  ProductWrapper,
  ProductImgWrapper,
  ProductImg,
  ProductContent,
  ProductHeading,
  ProductSubHeading,
  Text,
  ProductPrice,
  ProductButtons,
  ButtonCounterWrapper,
  ButtonIncrement,
  ButtonDecrement,
  CountValue,
} from './styles';

const ProductLayout = ({ productType }: { productType: ProductTypes }) => {
  const { id } = useParams();
  const product = Products[productType].find(
    (product) => product.id === id,
  )!;

  return (
    <SectionWrapper>
      <PrevLink onClick={() => window.history.back()}>Go Back</PrevLink>
      <Product
        mainImg={product.mainImg}
        newProduct={product.newProduct}
        title={product.title}
        description={product.description}
      />
      <ProductFeatures features={product.features} />
      <ProductContentList contents={product.contents} />
      <ProductGallery images={product.gallery} />
      <ProductRecommendationList
        currentProduct={product['title'] as ProductTitles}
        productType={productType}
      />
    </SectionWrapper>
  );
};

interface ProductProps {
  mainImg: string;
  newProduct: boolean;
  title: string;
  description: string;
}
function Product({
  mainImg,
  newProduct,
  title,
  description,
}: ProductProps) {
  return (
    <ProductWrapper>
      <ProductImgWrapper>
        <ProductImg src={mainImg} />
      </ProductImgWrapper>
      <ProductContent>
        {newProduct && <ProductSubHeading>New Product</ProductSubHeading>}
        <ProductHeading>{title}</ProductHeading>
        <Text>{description}</Text>
        <ProductPrice>
          <DollarSign size={18} /> 2,999
        </ProductPrice>
        <ProductButtons>
          <ButtonCounterWrapper>
            <ButtonDecrement>-</ButtonDecrement>
            <CountValue>{1}</CountValue>
            <ButtonIncrement>+</ButtonIncrement>
          </ButtonCounterWrapper>
          <Buttons id={'btn1'}>Add to Cart</Buttons>
        </ProductButtons>
      </ProductContent>
    </ProductWrapper>
  );
}

export default ProductLayout;
