import React from 'react';
import ProductButton from '../Buttons';

import ProductHeadphoneImg from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import ProductSpeakerImg from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import ProductEarphonesImg from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';

import {
  ProductsNavWrapper,
  Product,
  ProductImg,
  ProductTitle,
  ProductBackground,
  MobileProductsNavWrapper,
  MobileProduct,
  MobileProductImg,
} from './styles';

interface ProductNavProps {
  mobile?: boolean;
  onCloseModal?: () => void;
}

const ProductNav = ({ mobile, onCloseModal }: ProductNavProps) => {
  return mobile ? (
    <MobileProductsNavWrapper>
      <ProductItem
        mobile={true}
        productImg={ProductHeadphoneImg}
        productTitle="Headphones"
        buttonLabel="shop"
        onCloseModal={onCloseModal}
      />

      <ProductItem
        mobile={true}
        productImg={ProductSpeakerImg}
        productTitle="Speakers"
        buttonLabel="shop"
        onCloseModal={onCloseModal}
      />

      <ProductItem
        mobile={true}
        productImg={ProductEarphonesImg}
        productTitle="Earphones"
        buttonLabel="shop"
        onCloseModal={onCloseModal}
      />
    </MobileProductsNavWrapper>
  ) : (
    <ProductsNavWrapper>
      <ProductItem
        productImg={ProductHeadphoneImg}
        productTitle="Headphones"
        buttonLabel="Shop"
      />
      <ProductItem
        productImg={ProductSpeakerImg}
        productTitle="Speakers"
        buttonLabel="Shop"
      />
      <ProductItem
        productImg={ProductEarphonesImg}
        productTitle="Earphones"
        buttonLabel="Shop"
      />
    </ProductsNavWrapper>
  );
};

interface ProductProps {
  productImg: string;
  productTitle: string;
  buttonLabel: string;
  mobile?: boolean;
  onCloseModal?: () => void;
}
const ProductItem = ({
  productImg,
  productTitle,
  buttonLabel,
  mobile,
  onCloseModal,
}: ProductProps) => {
  return mobile ? (
    <MobileProduct>
      <MobileProductImg
        src={productImg}
        alt={`${productTitle} category`}
      />
      <ProductTitle>{productTitle}</ProductTitle>
      <ProductButton
        onClick={onCloseModal}
        id={'btn4'}
        path={`/${productTitle.toLowerCase()}`}
      >
        {buttonLabel}
      </ProductButton>
      <ProductBackground />
    </MobileProduct>
  ) : (
    <Product>
      <ProductImg src={productImg} alt={`${productTitle} category`} />
      <ProductTitle>{productTitle}</ProductTitle>
      <ProductButton id={'btn4'} path={`/${productTitle.toLowerCase()}`}>
        {buttonLabel}
      </ProductButton>
      <ProductBackground />
    </Product>
  );
};

export default ProductNav;
