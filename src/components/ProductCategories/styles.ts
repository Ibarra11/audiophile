import styled from 'styled-components/macro';

const ProductsWrapper = styled.div`
  padding: 0 ${24 / 16}rem;
  margin-top: ${40 / 16}rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Product = styled.div`
  isolation: isolate;
  position: relative;
  height: clamp(${217 / 16}rem, 20vw, ${284 / 16}rem);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProductImg = styled.img`
  width: 45%;
`;

const ProductTitle = styled.h5`
  font-size: ${15 / 16}rem;
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
  z-index: -1;
  position: absolute;
  inset: 25% 0 0 0;
  background-color: hsla(var(--clr-primary-gray) / 0.25);
  border-radius: 8px;
`;

export { ProductsWrapper, Product, ProductImg, ProductTitle, ProductButton, ProductBackground };
