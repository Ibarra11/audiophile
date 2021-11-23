import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router';
import ProductFeatures from './Product_Features';
import ProductContentList from './Product_Content_List';
import ProductGallery from './Product_Gallery';
import ProductRecommendationList from './Product_RecommendationList';
import Products from '../../data';
import Buttons from '../Buttons';
import { DollarSign } from 'react-feather';

import { useCartDispatch } from '../../context/ShoppingCartContext';

import {
  ProductTitles,
  ProductTypes,
  ActionTypes,
} from '../../shared/types';

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
        id={product.id}
        price={product.price}
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
  id: string;
  price: number;
}
function Product({
  mainImg,
  newProduct,
  title,
  description,
  id,
  price,
}: ProductProps) {
  const [productCount, setProductCount] = useState(1);
  const dispatch = useCartDispatch();
  function handleCartAddition() {
    let updatedTitle: string | undefined;
    if (title === 'XX99 MARK II') {
      updatedTitle = 'XX99 MK II';
    } else if (title === 'XX99 MARK I') {
      updatedTitle = 'XX88 MK I';
    }
    dispatch({
      type: ActionTypes.ADD_PRODUCT,
      payload: {
        product: {
          id,
          mainImg,
          title: updatedTitle ? updatedTitle : title,
          price,
          amount: productCount,
        },
      },
    });
    setProductCount(1);
  }
  function handleDecrementProductCount() {
    if (productCount > 1) {
      setProductCount(productCount - 1);
    }
  }

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
            <ButtonDecrement onClick={handleDecrementProductCount}>
              -
            </ButtonDecrement>
            <CountValue>{productCount}</CountValue>
            <ButtonIncrement
              onClick={() => setProductCount(productCount + 1)}
            >
              +
            </ButtonIncrement>
          </ButtonCounterWrapper>
          <Buttons id={'btn1'} type="btn" onClick={handleCartAddition}>
            Add to Cart
          </Buttons>
        </ProductButtons>
      </ProductContent>
    </ProductWrapper>
  );
}

export default ProductLayout;
