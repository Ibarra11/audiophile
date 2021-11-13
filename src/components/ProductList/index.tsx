import React from 'react';
import { useLocation } from 'react-router';
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
import Products from '../../data';

interface ProductListProps {
  productType: 'headphones' | 'speaker' | 'earphones';
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
    mainImg: string;
    title: string;
    description: string;
    id: string;
    newProduct: boolean;
  };
  type: ProductListProps['productType'];
  index: number;
}
const Product = ({
  product,
  index,
  type,
}: ProductProps) => {
  const location = useLocation();
  return (
    <ProductWrapper>
      <ProductImgWrapper>
        <ProductImg src={product.mainImg} />
      </ProductImgWrapper>
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
