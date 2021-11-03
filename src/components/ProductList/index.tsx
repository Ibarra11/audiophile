import React from 'react';

import {
  ProductListWrapper,
  ProductListHeader,
  ProductWrapper,
  ProductImgWrapper,
  ProductImg,
  ProductContent,
  ProductText,
  ProductTitle,
  ProductSubTitle,
} from './styles';
import Buttons from '../Buttons';
import { Products } from '../../data';

interface ProductListProps {
  listType: 'headphones' | 'speakers' | 'earphones';
}

const ProductList = ({ listType }: ProductListProps) => {
  return (
    <ProductListWrapper>
      <ProductListHeader>{listType}</ProductListHeader>
      {Products[listType].map((product, index) => {
        return <Product key={product.title} product={product} index={index} />;
      })}
    </ProductListWrapper>
  );
};

interface ProductProps {
  product: {
    img: string;
    title: string;
    text: string;
  };
  index: number;
}
const Product = ({ product, index }: ProductProps) => {
  return (
    <ProductWrapper>
      <ProductImgWrapper>
        <ProductImg src={product.img} />
      </ProductImgWrapper>
      <ProductContent>
        {index === 0 && <ProductSubTitle>New Product</ProductSubTitle>}
        <ProductTitle>{product.title}</ProductTitle>
        <ProductText>{product.text}</ProductText>
        <Buttons id="btn1">See Product</Buttons>
      </ProductContent>
    </ProductWrapper>
  );
};

export default ProductList;
