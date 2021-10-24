import React from 'react';
import {
  ProductsWrapper,
  Product,
  ProductButton,
  ProductImg,
  ProductTitle,
  ProductBackground,
  ProductButtonLabel,
  ProductButtonIcon,
} from './styles';
import ProductHeadphoneImg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import ProductSpeakerImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import ProductEarphonesImg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import { ChevronRight } from 'react-feather';

const Products = () => {
  return (
    <ProductsWrapper>
      <ProductItem
        productImg={ProductHeadphoneImg}
        productTitle="Headphones"
        buttonLabel="shop"
        iconSize={18}
        strokeWidth="2"
      />
      <ProductItem
        productImg={ProductSpeakerImg}
        productTitle="Speakers"
        buttonLabel="shop"
        iconSize={18}
        strokeWidth="2"
      />
      <ProductItem
        productImg={ProductEarphonesImg}
        productTitle="Earphones"
        buttonLabel="shop"
        iconSize={18}
        strokeWidth="2"
      />
    </ProductsWrapper>
  );
};

interface ProductProps {
  productImg: string;
  productTitle: string;
  buttonLabel: string;
  iconSize: number;
  strokeWidth: string;
}
const ProductItem = ({
  productImg,
  productTitle,
  buttonLabel,
  iconSize,
  strokeWidth,
}: ProductProps) => {
  return (
    <Product>
      <ProductBackground />
      <ProductImg src={productImg} />
      <ProductTitle>{productTitle}</ProductTitle>
      <ProductButton>
        <ProductButtonLabel>{buttonLabel}</ProductButtonLabel>
        <ProductButtonIcon>
          <ChevronRight size={iconSize} strokeWidth={strokeWidth} />
        </ProductButtonIcon>
      </ProductButton>
    </Product>
  );
};

export default Products;
