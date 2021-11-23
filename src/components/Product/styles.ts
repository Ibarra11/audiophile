import styled from 'styled-components';

const SectionWrapper = styled.section`
  padding-inline: ${24 / 16}rem;

  & h3 {
    font-size: clamp(${24 / 16}rem, 2vw + 1rem, var(--fs-h3));
  }
  & > :not(:last-child) {
    margin-bottom: ${88 / 16}rem;
  }
  margin-bottom: ${120 / 16}rem;
`;

const PrevLink = styled.a`
  display: block;
  color: hsl(var(--clr-primary-black));
  text-decoration: none;
  margin-top: 1rem;
  margin-bottom: ${24 / 16}rem;
`;

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ProductImgWrapper = styled.div``;
const ProductImg = styled.img``;

const ProductContent = styled.div``;

const ProductSubHeading = styled.span`
  color: hsl(var(--clr-primary-orange));
  font-size: var(--fs-text-subtitle);
  text-transform: uppercase;
  letter-spacing: 10px;
`;
const ProductHeading = styled.h2`
  font-size: clamp(${28 / 16}rem, 3vw + 1rem, var(--fs-h2));
  margin-block: ${24 / 16}rem;
`;

const Text = styled.p``;

const ProductPrice = styled.span`
  display: inline-flex;
  align-items: center;
  font-size: ${18 / 16}rem;
  font-weight: 700;
  letter-spacing: 2px;
  margin-top: ${24 / 16}rem;
  margin-bottom: 2rem;
  gap: 5px;
`;

const ProductButtons = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  padding-right: ${25 / 16}rem;
`;

const ButtonCounterWrapper = styled.div`
  height: ${48 / 16}rem;
  width: ${120 / 16}rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(var(--clr-primary-gray));
  padding-inline: ${15 / 16}rem;
`;

const Button = styled.button`
  background: none;
  border: none;
  color: hsl(var(--clr-primary-black) / 0.4);
`;

const ButtonIncrement = styled(Button)``;

const ButtonDecrement = styled(Button)``;

const CountValue = styled.span`
  font-size: ${13 / 16}rem;
  font-weight: 700;
`;

const ProductFeaturesWrapper = styled.div``;

const ProductFeature = styled.div``;

const ProductFeatureHeading = styled.h3``;

const ProductParts = styled.ul``;

const ProductPart = styled.li;

const ProductGallery = styled.div``;

export {
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
};
