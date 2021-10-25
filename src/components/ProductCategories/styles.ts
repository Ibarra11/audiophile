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
  height: 60vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  isolation: isolate;
`;

const ProductImg = styled.img`
  width: 50%;
`;

const ProductTitle = styled.h5`
  font-size: ${15 / 16}rem;
  font-weight: 700;
  line-height: ${20.5 / 16}rem;
  letter-spacing: 1vw;
  text-transform: uppercase;
  margin-bottom: 17px;
  margin-top: 0;
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
  z-index: -1;
  bottom: 0;
  height: 70%;
  width: 100%;
  background-color: var(--gray);
  border-radius: 8px;
`;

export { ProductsWrapper, Product, ProductImg, ProductTitle, ProductButton, ProductBackground };
