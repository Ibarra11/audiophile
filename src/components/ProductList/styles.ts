import styled from 'styled-components';

const ProductListWrapper = styled.section`
  margin-bottom: ${120 / 16}rem;
  text-align: center;
`;

const ProductListHeader = styled.h2`
  font-size: clamp(${28 / 16}rem, 3vw + 1rem, var(--fs-h2));
  color: hsl(var(--clr-white));
  background-color: hsl(var(--clr-primary-black) / 0.9);
  padding-block: 1.5em;
  letter-spacing: 2px;
  margin-bottom: ${64 / 16}rem;
`;
const ProductWrapper = styled.div`
  padding-inline: ${24 / 16}rem;
  display: flex;
  flex-direction: column;
  gap: ${32 / 16}rem;
  &:not(:last-of-type) {
    margin-bottom: ${120 / 16}rem;
  }
`;

const ProductImgWrapper = styled.div``;

const ProductImg = styled.img``;
const ProductContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${24 / 16}rem;
`;

const ProductSubTitle = styled.span`
  color: hsl(var(--clr-primary-orange));
  font-size: var(--text-overline);
  text-transform: uppercase;
  letter-spacing: 10px;
`;

const ProductTitle = styled.h2`
  font-size: clamp(${28 / 16}rem, 3vw + 1rem, var(--fs-h2));
`;

const ProductText = styled.p``;

export {
  ProductListWrapper,
  ProductListHeader,
  ProductWrapper,
  ProductImgWrapper,
  ProductImg,
  ProductContent,
  ProductSubTitle,
  ProductText,
  ProductTitle,
};
