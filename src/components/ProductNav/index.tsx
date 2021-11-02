import React from 'react';
import { Link } from 'react-router-dom';
import ProductHeadphoneImg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import ProductSpeakerImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import ProductEarphonesImg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

import ProductButton from '../Buttons';
import {
  ProductsNavWrapper,
  Product,
  ProductImg,
  ProductNavLink,
  ProductTitle,
  ProductBackground,
  MobileProductsNavWrapper,
  MobileProduct,
  MobileProductImg,
} from './styles';
interface ProductNavProps {
  mobile?: boolean;
}
const ProductNav = ({ mobile }: ProductNavProps) => {
  return mobile ? (
    <MobileProductsNavWrapper>
      <ProductItem
        mobile={true}
        productImg={ProductHeadphoneImg}
        productTitle="Headphones"
        buttonLabel="shop"
      />

      <ProductItem
        mobile={true}
        productImg={ProductSpeakerImg}
        productTitle="Speakers"
        buttonLabel="shop"
      />

      <ProductItem
        mobile={true}
        productImg={ProductEarphonesImg}
        productTitle="Earphones"
        buttonLabel="shop"
      />
    </MobileProductsNavWrapper>
  ) : (
    <ProductsNavWrapper>
      <ProductItem productImg={ProductHeadphoneImg} productTitle="Headphones" buttonLabel="Shop" />
      <ProductItem productImg={ProductSpeakerImg} productTitle="Speakers" buttonLabel="Shop" />
      <ProductItem productImg={ProductEarphonesImg} productTitle="Earphones" buttonLabel="Shop" />
    </ProductsNavWrapper>
  );
};

interface ProductProps {
  productImg: string;
  productTitle: string;
  buttonLabel: string;
  mobile?: boolean;
}
const ProductItem = ({ productImg, productTitle, buttonLabel, mobile }: ProductProps) => {
  return mobile ? (
    <MobileProduct>
      <MobileProductImg src={productImg} alt={`${productTitle} category`} />
      <ProductTitle>{productTitle}</ProductTitle>
      <ProductButton id={'btn4'}>{buttonLabel}</ProductButton>
      <ProductBackground />
    </MobileProduct>
  ) : (
    <Product>
      <ProductImg src={productImg} alt={`${productTitle} category`} />
      <ProductTitle>{productTitle}</ProductTitle>
      <ProductButton id={'btn4'}>
        <ProductNavLink to={`/${productTitle.toLowerCase()}`}>{buttonLabel}</ProductNavLink>
      </ProductButton>
      <ProductBackground />
    </Product>
  );
};

export default ProductNav;
