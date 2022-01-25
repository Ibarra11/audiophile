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
import { MaxWidthWrapper } from '../../shared/css/components';

interface ProductNavProps {
  onCloseModal?: () => void;
  screenType?: 'mobile' | 'tablet';
}

const NavVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProductVariants = (screenType: 'mobile' | 'tablet') => {
  const variants = {
    mobile: {
      hidden: {
        opacity: 0,
        x: '100%',
      },
      visible: {
        opacity: 1,
        x: 0,
      },
      exit: {
        opacity: 0,
        x: '-100%',
      },
    },
    tablet: {
      hidden: {
        opacity: 0,
        y: '100%',
      },
      visible: {
        opacity: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        x: '100%',
      },
    },
  };

  return variants[screenType];
};

const ProductNav = ({ onCloseModal, screenType }: ProductNavProps) => {
  return screenType ? (
    <MobileProductsNavWrapper variants={NavVariants}>
      <ProductItem
        productImg={ProductHeadphoneImg}
        productTitle="Headphones"
        buttonLabel="shop"
        onCloseModal={onCloseModal}
        screenType={screenType}
      />
      <ProductItem
        productImg={ProductSpeakerImg}
        productTitle="Speakers"
        buttonLabel="shop"
        onCloseModal={onCloseModal}
        screenType={screenType}
      />

      <ProductItem
        productImg={ProductEarphonesImg}
        productTitle="Earphones"
        buttonLabel="shop"
        onCloseModal={onCloseModal}
        screenType={screenType}
      />
    </MobileProductsNavWrapper>
  ) : (
    <MaxWidthWrapper>
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
    </MaxWidthWrapper>
  );
};

interface ProductProps {
  productImg: string;
  productTitle: string;
  buttonLabel: string;
  screenType?: 'mobile' | 'tablet';
  onCloseModal?: () => void;
}
const ProductItem = ({
  productImg,
  productTitle,
  buttonLabel,
  screenType,
  onCloseModal,
}: ProductProps) => {
  return screenType ? (
    <MobileProduct variants={ProductVariants(screenType)}>
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
