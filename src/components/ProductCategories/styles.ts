import styled from 'styled-components';

const ProductsWrapper = styled.div`
  padding: 0 24px;
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Product = styled.div`
  position: relative;
  height: 70vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  isolation: isolate;
`;

const ProductImg = styled.img`
  position: absolute;
  width: 50%;
  z-index: -1;
`;

const ProductTitle = styled.h5`
  font-size: ${15 / 16}rem;
  font-weight: 700;
  line-height: ${20.5 / 16}rem;
  letter-spacing: 1vw;
  text-transform: uppercase;
  position: relative;
  top: 25%;
  margin-top: 30%;
`;

const ProductButton = styled.button`
  position: relative;
  top: 25%;
  background-color: transparent;
  border: none;
  font-size: ${13 / 16}rem;
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

const ProductBackground = styled.span`
  position: absolute;
  bottom: 0;
  height: 75%;
  width: 100%;
  background-color: var(--gray);
  z-index: -1;
  border-radius: 8px;
`;

const ProductButtonLabel = styled.label`
  margin-right: 4px;
`;

const ProductButtonIcon = styled.span`
  display: flex;
  height: 100%;
  align-items: center;
  color: var(--dark-orange);

  padding-bottom: 2px;
`;

export {
  ProductsWrapper,
  Product,
  ProductImg,
  ProductTitle,
  ProductButton,
  ProductBackground,
  ProductButtonLabel,
  ProductButtonIcon,
};
