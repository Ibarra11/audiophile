import React from 'react';
import ProductHeadphoneImg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import ProductSpeakerImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import ProductEarphonesImg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

import ProductButton from '../Buttons';
import { ProductsWrapper, Product, ProductImg, ProductTitle, ProductBackground } from './styles';

const Products = () => {
  return (
    <ProductsWrapper>
      <ProductItem productImg={ProductHeadphoneImg} productTitle="Headphones" buttonLabel="shop" />
      <ProductItem productImg={ProductSpeakerImg} productTitle="Speakers" buttonLabel="shop" />
      <ProductItem productImg={ProductEarphonesImg} productTitle="Earphones" buttonLabel="shop" />
    </ProductsWrapper>
  );
};

interface ProductProps {
  productImg: string;
  productTitle: string;
  buttonLabel: string;
}
const ProductItem = ({ productImg, productTitle, buttonLabel }: ProductProps) => {
  return (
    <Product>
      <ProductImg src={productImg} />
      <ProductTitle>{productTitle}</ProductTitle>
      <ProductButton id={'btn3'}>Shop</ProductButton>
      <ProductBackground />
    </Product>
  );
};

export default Products;
