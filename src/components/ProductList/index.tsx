import React from 'react';
import { useLocation } from 'react-router';
import { ProductTypes } from '../../shared/types';
import {
  ProductListWrapper,
  ProductListHeader,
  ProductWrapper,
  Picture,
  ProductImg,
  ProductContent,
  ProductText,
  ProductTitle,
  ProductSubTitle,
} from './styles';
import Buttons from '../Buttons';
import Products from '../../data';

interface ProductListProps {
  productType: ProductTypes;
}

const ProductList = ({ productType }: ProductListProps) => {
  return (
    <ProductListWrapper>
      <ProductListHeader>{productType}</ProductListHeader>
      {Products[productType].map((product, index) => {
        return (
          <Product
            key={product.title}
            product={product}
            index={index}
            type={productType}
          />
        );
      })}
    </ProductListWrapper>
  );
};

interface ProductProps {
  product: {
    mainImg: { mobile: string; tablet: string; desktop: string };
    title: string;
    description: string;
    id: string;
    newProduct: boolean;
  };
  type: ProductListProps['productType'];
  index: number;
}
const Product = ({ product, index, type }: ProductProps) => {
  const location = useLocation();
  return (
    <ProductWrapper index={index}>
      <Picture>
        <source
          srcSet={product.mainImg.desktop}
          media="(min-width: 1100px)"
        />
        <source
          srcSet={product.mainImg.tablet}
          media="(min-width: 550px)"
        />

        <ProductImg src={product.mainImg.mobile} />
      </Picture>
      <ProductContent>
        {product.newProduct && (
          <ProductSubTitle>New Product</ProductSubTitle>
        )}
        <ProductTitle>{`${product.title} ${type}`}</ProductTitle>
        <ProductText>{product.description}</ProductText>
        <Buttons
          path={`${location.pathname}/${product.title
            .split(' ')
            .join('_')}/${product.id}`}
          id="btn1"
        >
          See Product
        </Buttons>
      </ProductContent>
    </ProductWrapper>
  );
};

export default ProductList;
